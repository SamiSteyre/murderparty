const fs = require('fs');
const path = require('path');

// Custom simplified parser for .env
function loadEnv() {
    const envPath = path.join(__dirname, '.env');
    const config = {};
    if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf-8');
        content.split(/\r?\n/).forEach(line => {
            const match = line.match(/^\s*([\w\.\-]+)\s*=\s*(.*)?\s*$/);
            if (match) {
                const key = match[1];
                let val = match[2] || '';
                if (val.startsWith('"') && val.endsWith('"')) val = val.slice(1, -1);
                config[key] = val.trim();
            }
        });
    }
    return config;
}

async function run() {
    const env = loadEnv();
    const token = env.NOTION_TOKEN;
    const parentPageId = env.NOTION_PARENT_PAGE_ID;

    if (!token || !parentPageId) {
        console.error("❌ Erreur : NOTION_TOKEN ou NOTION_PARENT_PAGE_ID manquants dans le fichier .env !");
        process.exit(1);
    }

    console.log("🚀 Initialisation de la création des bases de données Notion...");
    console.log(`Page parente ID : ${parentPageId}`);

    const headers = {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        'Notion-Version': '2022-06-28'
    };

    // Helper to make API post request
    async function createDatabase(payload) {
        const res = await fetch('https://api.notion.com/v1/databases', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(payload)
        });
        const data = await res.json();
        if (!res.ok) {
            throw new Error(`Code ${res.status} : ${data.message || JSON.stringify(data)}`);
        }
        return data;
    }

    try {
        // ----------------------------------------------------------------------
        // 1. Create [MP] Scénarios Database
        // ----------------------------------------------------------------------
        console.log("\n📁 1/4. Création de la base [MP] Scénarios...");
        const scenariosPayload = {
            parent: { type: "page_id", page_id: parentPageId },
            title: [{ type: "text", text: { content: "[MP] Scénarios" } }],
            properties: {
                "Nom": { title: {} },
                "Pitch Global": { rich_text: {} },
                "Scène du Crime": { rich_text: {} },
                "Statut": {
                    select: {
                        options: [
                            { name: "En cours de génération", color: "orange" },
                            { name: "Vérifié", color: "green" }
                        ]
                    }
                },
                "Nombre Total d'Indices": { number: { format: "number" } }
            }
        };
        const scenariosDb = await createDatabase(scenariosPayload);
        const scenariosDbId = scenariosDb.id.replace(/-/g, '');
        console.log(`✅ Base [MP] Scénarios créée avec succès ! ID : ${scenariosDbId}`);

        // ----------------------------------------------------------------------
        // 2. Create [MP] Sessions de Jeu Database
        // ----------------------------------------------------------------------
        console.log("\n📁 2/4. Création de la base [MP] Sessions de Jeu...");
        const sessionsPayload = {
            parent: { type: "page_id", page_id: parentPageId },
            title: [{ type: "text", text: { content: "[MP] Sessions de Jeu" } }],
            properties: {
                "Nom de la Session": { title: {} },
                "Date/Heure": { date: {} },
                "Lieu Réel": { rich_text: {} },
                "Statut Événement": {
                    select: {
                        options: [
                            { name: "Configuration", color: "yellow" },
                            { name: "initialisé", color: "purple" },
                            { name: "Invitations Envoyées", color: "blue" },
                            { name: "En Cours", color: "green" },
                            { name: "Terminé", color: "gray" }
                        ]
                    }
                },
                "Budget Points par Joueur": { number: { format: "number" } },
                "Relation Scénario": {
                    relation: {
                        database_id: scenariosDb.id,
                        type: "single_property"
                    }
                }
            }
        };
        const sessionsDb = await createDatabase(sessionsPayload);
        const sessionsDbId = sessionsDb.id.replace(/-/g, '');
        console.log(`✅ Base [MP] Sessions de Jeu créée avec succès ! ID : ${sessionsDbId}`);

        // ----------------------------------------------------------------------
        // 3. Create [MP] Personnages Database
        // ----------------------------------------------------------------------
        console.log("\n📁 3/4. Création de la base [MP] Personnages...");
        const charactersPayload = {
            parent: { type: "page_id", page_id: parentPageId },
            title: [{ type: "text", text: { content: "[MP] Personnages" } }],
            properties: {
                "Nom Fictif": { title: {} },
                "Email Joueur": { email: {} },
                "Statut": {
                    select: {
                        options: [
                            { name: "Innocent", color: "green" },
                            { name: "Coupable", color: "red" },
                            { name: "Faux-Coupable", color: "orange" }
                        ]
                    }
                },
                "Lien avec la Victime": { rich_text: {} },
                "Rôle / Histoire": { rich_text: {} },
                "Traits de Caractère": { rich_text: {} },
                "Avatar / Photo": { files: {} },
                "Marqueur Visuel": { rich_text: {} },
                "Connaissances": { rich_text: {} },
                "Missions": { rich_text: {} },
                "Solde Points d'Action": { number: { format: "number" } },
                "Relation Session": {
                    relation: {
                        database_id: sessionsDb.id,
                        type: "single_property"
                    }
                }
            }
        };
        const charactersDb = await createDatabase(charactersPayload);
        const charactersDbId = charactersDb.id.replace(/-/g, '');
        console.log(`✅ Base [MP] Personnages créée avec succès ! ID : ${charactersDbId}`);

        // ----------------------------------------------------------------------
        // 4. Create [MP] Indices & Lieux Database
        // ----------------------------------------------------------------------
        console.log("\n📁 4/4. Création de la base [MP] Indices & Lieux...");
        const cluesPayload = {
            parent: { type: "page_id", page_id: parentPageId },
            title: [{ type: "text", text: { content: "[MP] Indices & Lieux" } }],
            properties: {
                "Nom de l'indice": { title: {} },
                "Description / Révélation": { rich_text: {} },
                "Type": {
                    select: {
                        options: [
                            { name: "Affaire Personnelle", color: "purple" },
                            { name: "Fouille de Pièce", color: "blue" }
                        ]
                    }
                },
                "Emplacement": { rich_text: {} },
                "Statut Visibilité": {
                    select: {
                        options: [
                            { name: "Caché", color: "red" },
                            { name: "Débloqué", color: "green" }
                        ]
                    }
                },
                "Relation Personnage": {
                    relation: {
                        database_id: charactersDb.id,
                        type: "single_property"
                    }
                }
            }
        };
        const cluesDb = await createDatabase(cluesPayload);
        const cluesDbId = cluesDb.id.replace(/-/g, '');
        console.log(`✅ Base [MP] Indices & Lieux créée avec succès ! ID : ${cluesDbId}`);

        // Write findings back to .env
        const envOutput = `\n# Notion Database IDs\nNOTION_DB_SCENARIOS=${scenariosDbId}\nNOTION_DB_SESSIONS=${sessionsDbId}\nNOTION_DB_CHARACTERS=${charactersDbId}\nNOTION_DB_CLUES=${cluesDbId}\n`;
        fs.appendFileSync(path.join(__dirname, '.env'), envOutput);

        console.log("\n🎉 TOUTES LES BASES DE DONNÉES ONT ÉTÉ CRÉÉES DANS NOTION !");
        console.log("Les IDs correspondants ont été sauvegardés à la fin du fichier .env.");

    } catch (error) {
        console.error("\n❌ Erreur fatale durant la création des bases de données :");
        console.error(error.message);
        process.exit(1);
    }
}

run();
