# Script PowerShell pour configurer les bases de donnees Notion

# 1. Charger les variables d'environnement depuis le fichier .env
$envFile = Join-Path $PSScriptRoot ".env"
if (-not (Test-Path $envFile)) {
    Write-Error "Le fichier .env est introuvable !"
    exit 1
}

$envVars = @{}
Get-Content $envFile | Foreach-Object {
    $line = $_.Trim()
    if ($line -match "^\s*([\w\.\-]+)\s*=\s*(.*)?\s*$") {
        $key = $Matches[1]
        $val = $Matches[2].Trim()
        if ($val.StartsWith('"') -and $val.EndsWith('"')) {
            $val = $val.Substring(1, $val.Length - 2)
        }
        $envVars[$key] = $val
    }
}

$token = $envVars["NOTION_TOKEN"]
$parentId = $envVars["NOTION_PARENT_PAGE_ID"]

if (-not $token -or -not $parentId) {
    Write-Error "NOTION_TOKEN ou NOTION_PARENT_PAGE_ID manquant dans .env !"
    exit 1
}

Write-Host "Démarrage de la configuration Notion..."
Write-Host "Page Parente ID : $parentId"

$headers = @{
    "Authorization" = "Bearer $token"
    "Content-Type" = "application/json"
    "Notion-Version" = "2022-06-28"
}

# Fonction helper pour creer une base de donnees Notion
function Create-NotionDb($bodyObj, $dbName) {
    Write-Host "Creation de la base : $dbName..."
    $bodyJson = $bodyObj | ConvertTo-Json -Depth 10 -Compress
    
    try {
        $utf8Body = [System.Text.Encoding]::UTF8.GetBytes($bodyJson)
        $response = Invoke-RestMethod -Uri "https://api.notion.com/v1/databases" -Method Post -Headers $headers -Body $utf8Body
        $cleanId = $response.id.Replace("-", "")
        Write-Host "Base $dbName creee avec l'ID : $cleanId"
        return $response.id
    } catch {
        Write-Error "Erreur lors de la creation de la base $dbName"
        if ($_.Exception.Response) {
            $reader = New-Object System.IO.StreamReader($_.Exception.Response.GetResponseStream())
            $responseBody = $reader.ReadToEnd()
            Write-Host "Raw Error Body: $responseBody" -ForegroundColor Red
        } else {
            Write-Host "Exception details: $_" -ForegroundColor Red
        }
        exit 1
    }
}

# ----------------------------------------------------------------------
# 1. Creation de [MP] Scenarios
# ----------------------------------------------------------------------
$scenariosBody = @{
    parent = @{ type = "page_id"; page_id = $parentId }
    title = @( @{ type = "text"; text = @{ content = "[MP] Scenarios" } } )
    properties = @{
        "Nom" = @{ title = @{} }
        "Pitch Global" = @{ rich_text = @{} }
        "Scene du Crime" = @{ rich_text = @{} }
        "Statut" = @{
            select = @{
                options = @(
                    @{ name = "En cours de generation"; color = "orange" }
                    @{ name = "Verifie"; color = "green" }
                )
            }
        }
        "Nombre Total d'Indices" = @{ number = @{ format = "number" } }
    }
}
$scenariosDbId = Create-NotionDb $scenariosBody "[MP] Scenarios"

# ----------------------------------------------------------------------
# 2. Creation de [MP] Sessions de Jeu
# ----------------------------------------------------------------------
$sessionsBody = @{
    parent = @{ type = "page_id"; page_id = $parentId }
    title = @( @{ type = "text"; text = @{ content = "[MP] Sessions de Jeu" } } )
    properties = @{
        "Nom de la Session" = @{ title = @{} }
        "Date et Heure" = @{ date = @{} }
        "Lieu Reel" = @{ rich_text = @{} }
        "Statut Evenement" = @{
            select = @{
                options = @(
                    @{ name = "Configuration"; color = "yellow" }
                    @{ name = "Invitations Envoyees"; color = "blue" }
                    @{ name = "En Cours"; color = "green" }
                    @{ name = "Termine"; color = "gray" }
                )
            }
        }
        "Budget Points par Joueur" = @{ number = @{ format = "number" } }
        "Relation Scenario" = @{
            relation = @{
                database_id = $scenariosDbId
                single_property = @{}
            }
        }
    }
}
$sessionsDbId = Create-NotionDb $sessionsBody "[MP] Sessions de Jeu"

# ----------------------------------------------------------------------
# 3. Creation de [MP] Personnages
# ----------------------------------------------------------------------
$charactersBody = @{
    parent = @{ type = "page_id"; page_id = $parentId }
    title = @( @{ type = "text"; text = @{ content = "[MP] Personnages" } } )
    properties = @{
        "Nom Fictif" = @{ title = @{} }
        "Email Joueur" = @{ email = @{} }
        "Statut" = @{
            select = @{
                options = @(
                    @{ name = "Innocent"; color = "green" }
                    @{ name = "Coupable"; color = "red" }
                    @{ name = "Faux-Coupable"; color = "orange" }
                )
            }
        }
        "Lien avec la Victime" = @{ rich_text = @{} }
        "Role et Histoire" = @{ rich_text = @{} }
        "Traits de Caractere" = @{ rich_text = @{} }
        "Avatar ou Photo" = @{ files = @{} }
        "Marqueur Visuel" = @{ rich_text = @{} }
        "Connaissances" = @{ rich_text = @{} }
        "Missions" = @{ rich_text = @{} }
        "Solde Points d'Action" = @{ number = @{ format = "number" } }
        "Relation Session" = @{
            relation = @{
                database_id = $sessionsDbId
                single_property = @{}
            }
        }
    }
}
$charactersDbId = Create-NotionDb $charactersBody "[MP] Personnages"

# ----------------------------------------------------------------------
# 4. Creation de [MP] Indices et Lieux
# ----------------------------------------------------------------------
$cluesBody = @{
    parent = @{ type = "page_id"; page_id = $parentId }
    title = @( @{ type = "text"; text = @{ content = "[MP] Indices et Lieux" } } )
    properties = @{
        "Nom de l'indice" = @{ title = @{} }
        "Description ou Revelation" = @{ rich_text = @{} }
        "Type" = @{
            select = @{
                options = @(
                    @{ name = "Affaire Personnelle"; color = "purple" }
                    @{ name = "Fouille de Piece"; color = "blue" }
                )
            }
        }
        "Emplacement" = @{ rich_text = @{} }
        "Statut Visibilite" = @{
            select = @{
                options = @(
                    @{ name = "Cache"; color = "red" }
                    @{ name = "Debloque"; color = "green" }
                )
            }
        }
        "Relation Personnage" = @{
            relation = @{
                database_id = $charactersDbId
                single_property = @{}
            }
        }
    }
}
$cluesDbId = Create-NotionDb $cluesBody '[MP] Indices et Lieux'

# ----------------------------------------------------------------------
# 5. Enregistrement des IDs dans le fichier .env
# ----------------------------------------------------------------------
$cleanScenarios = $scenariosDbId.Replace("-", "")
$cleanSessions = $sessionsDbId.Replace("-", "")
$cleanCharacters = $charactersDbId.Replace("-", "")
$cleanClues = $cluesDbId.Replace("-", "")

$envAdditions = @"

# Notion Database IDs
NOTION_DB_SCENARIOS=$cleanScenarios
NOTION_DB_SESSIONS=$cleanSessions
NOTION_DB_CHARACTERS=$cleanCharacters
NOTION_DB_CLUES=$cleanClues
"@

Add-Content -Path $envFile -Value $envAdditions

Write-Host "Toutes les tables ont ete creees dans Notion !"
Write-Host "Les IDs ont ete enregistres dans .env"
