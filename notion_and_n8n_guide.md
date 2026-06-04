# 🕵️‍♂️ Guide d'Intégration : Notion API & n8n Webhooks

Ce guide documente la structure de la base de données Notion et la spécification des webhooks n8n requis pour la plateforme **murderParty**.

---

## 💾 1. Structure de la Base de Données Notion

Pour que la plateforme fonctionne, configurez 4 bases de données interconnectées dans votre espace Notion.

### 📋 A. Base `[MP] Scénarios`
* **Titre** (Title) : Nom de l'enquête.
* **Pitch Global** (Rich Text) : L'intrigue générale.
* **Scène du Crime** (Text) : Lieu du meurtre (ex: "La Serre").
* **Statut** (Select) : `En cours de génération` | `Vérifié`.
* **Nombre Total d'Indices** (Number) : Nombre total d'indices générés pour ce scénario.
* **Relations :**
  * Relation -> `[MP] Sessions de Jeu` (1 pour N)

### 📅 B. Base `[MP] Sessions de Jeu`
* **Nom de la Session** (Title) : Nom unique (ex: "Murder du 25 Octobre").
* **Relation Scénario** (Relation) -> Lié à `[MP] Scénarios`.
* **Date/Heure** (Date).
* **Lieu Réel** (Text) : Lieu physique du jeu.
* **Statut Événement** (Select) : `Configuration` | `Invitations Envoyées` | `En Cours` | `Terminé`.
* **Budget Points par Joueur** (Formula) : Allocation de points calculée dynamiquement.
  * *Formule Notion suggérée :* 
    `round((prop("[MP] Scénarios Relation").map(current.prop("Nombre Total d'Indices")).sum() / 16) / 1.5)`
    *(Note : Si vous ne pouvez pas utiliser de formule complexe liant des relations, ce calcul peut être géré et écrit directement par n8n lors de l'envoi des invitations).*

### 🎭 C. Base `[MP] Personnages`
* **Nom Fictif** (Title) : Nom du rôle (ex: "Inspecteur Adams").
* **Email Joueur** (Email) : Identifiant de connexion du vrai joueur.
* **Relation Session** (Relation) -> Lié à `[MP] Sessions de Jeu`.
* **Statut** (Select) : `Innocent` | `Coupable` | `Faux-Coupable`.
* **Lien avec la Victime** (Rich Text) : Nature de la relation (dettes, secrets, liens de sang).
* **Rôle / Histoire** (Rich Text) : Biographie complète et contexte.
* **Traits de Caractère** (Text) : 3 traits saisis lors de l'onboarding (ex: "Froid, Calculateur, Menteur").
* **Avatar / Photo** (Files & Media) : Image de l'avatar générée par l'IA (format 1920x1080).
* **Marqueur Visuel** (Text) : L'objet physique signature du joueur (ex: "Bague à tête de lion").
* **Connaissances** (Rich Text) : Révélations sur les autres joueurs sous le format `"Nom1 : Info1, Nom2 : Info2"`.
* **Missions** (Rich Text ou JSON) : Objectifs chronologiques du personnage.
* **Solde Points d'Action** (Number) : Points de fouille ou de suspicion restants.

### 🔍 D. Base `[MP] Indices & Lieux`
* **Nom de l'indice** (Title) : Nom de l'objet ou de la pièce à conviction.
* **Description / Révélation** (Rich Text) : Ce que l'indice révèle aux enquêteurs.
* **Type** (Select) : `Affaire Personnelle` | `Fouille de Pièce`.
* **Emplacement** (Text) : Nom de la pièce ("Manoir - Bibliothèque") ou "Affaires de [Nom]".
* **Statut Visibilité** (Select) : `Caché` | `Débloqué`.
* **Relation Déclencheur** (Relation) -> Optionnel : Mission de personnage requise pour le débloquer.
* **Coût en Points** (Number) : Coût en points d'action pour fouiller/révéler (généralement `1`).

---

## 🤖 2. Spécification des Webhooks n8n

Voici la documentation des payloads JSON transitant entre le Front-End et n8n.

### 🌐 Webhook 1 : Génération du Scénario
* **Endpoint :** `POST /webhook/mp-generate-scenario`
* **Payload Envoyé par l'Organisateur :**
```json
{
  "theme": "Années 20 / Prohibition",
  "pitch_global": "Un parrain de la mafia est retrouvé mort dans son club de jazz clandestin.",
  "epoch": "passé",
  "organizer_email": "organisateur@email.com"
}
```
* **Rôle dans n8n :** Générer l'intrigue (Agent 1), concevoir la scène de crime et les indices (Agent 2), profiler les 16 suspects (Agent 3), construire le fil des missions (Agent 4), générer l'illustration DALL-E (Agent 6 Illustrateur), et enregistrer la session Notion avec le statut `"initialisé"`.
* **Payload de Réponse Attendu (n8n) :**
```json
{
  "success": true,
  "scenario_id": "sc_12345",
  "title": "Le Dernier Souffle du Speakeasy",
  "murder_room": "Le Bureau de l'arrière-boutique",
  "clues_count": 24,
  "pitch": "Un parrain de la mafia est retrouvé mort dans son club de jazz clandestin...",
  "illustration_url": "https://oaidalleapiprodscus.blob.core.windows.net/...png",
  "suspects": [
    {
      "name": "Inspecteur Adams",
      "bio": "Un détective usé par le vice...",
      "relation": "Il surveillait la victime...",
      "marker": "Un calepin usé",
      "status": "Innocent"
    },
    "... (16 suspects)"
  ]
}
```

---

### 🌐 Webhook 2 : Envoi des Invitations & Distribution des Rôles
* **Endpoint :** `POST /webhook/mp-send-invitations`
* **Payload Envoyé par l'Organisateur :**
```json
{
  "scenario_id": "sc_12345",
  "session_name": "Murder du 25 Octobre",
  "date": "2026-10-25T20:00:00Z",
  "location": "Manoir de Verrières",
  "emails": [
    "invite1@email.com",
    "invite2@email.com",
    "... (16 emails)"
  ]
}
```
* **Rôle dans n8n :** Enregistrer la session définitive dans Notion, affecter les 16 e-mails aux personnages, définir le statut de l'événement à `"Invitations Envoyées"`, et envoyer les e-mails d'invitations avec les codes OTP.
* **Payload de Réponse Attendu (n8n) :**
```json
{
  "success": true,
  "session_id": "sess_98765",
  "total_clues": 24,
  "players_count": 16,
  "points_per_player": 2
}
```

---

### 🌐 Webhook 3 : Onboarding Joueur & Génération d'Avatar
* **Endpoint :** `POST /webhook/generate-avatar`
* **Payload Envoyé par le Joueur :**
```json
{
  "email": "invite1@email.com",
  "traits": ["Arrogant", "Observateur", "Froid"],
  "photo_base64": "data:image/jpeg;base64,... (ou URL)"
}
```
* **Payload de Réponse Attendu (n8n) :**
*n8n envoie l'image à un modèle de génération d'image (ex: Stable Diffusion, DALL-E) pour créer un avatar style polar et génère le marqueur visuel.*
```json
{
  "success": true,
  "avatar_url": "https://storage.googleapis.com/murderparty/avatars/invite1.png",
  "visual_marker": "Une montre à gousset dorée dont les aiguilles sont arrêtées sur 22h10"
}
```

---

### 🌐 Webhook 4 : Mission Accomplie
* **Endpoint :** `POST /webhook/complete-mission`
* **Payload Envoyé par le Joueur :**
```json
{
  "email": "invite1@email.com",
  "mission_id": "mission_01",
  "points_earned": 2
}
```
* **Payload de Réponse Attendu (n8n) :**
*n8n met à jour Notion en ajoutant 2 points d'action au personnage et change le statut d'un indice lié à la mission de "Caché" à "Débloqué".*
```json
{
  "success": true,
  "new_action_points": 3,
  "unlocked_clue_name": "Carnet intime de la victime"
}
```

---

### 🌐 Webhook 5 : Fouiller un Lieu (Révélation d'Indice)
* **Endpoint :** `POST /webhook/reveal-index`
* **Payload Envoyé par le Joueur :**
```json
{
  "email": "invite1@email.com",
  "location_name": "Salon de musique"
}
```
* **Payload de Réponse Attendu (n8n) :**
*n8n vérifie le solde de points d'action dans Notion. S'il est >= 1, il déduit 1 point et renvoie les indices disponibles dans ce lieu.*
```json
{
  "success": true,
  "points_remaining": 2,
  "clues": [
    {
      "name": "Verre de champagne brisé",
      "description": "Des résidus suspects collent aux parois de la flûte en cristal. Elle dégage une légère odeur d'amande amère.",
      "image": "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=300"
    }
  ]
}
```
* **En cas de points insuffisants :**
```json
{
  "success": false,
  "error": "Points insuffisants",
  "points_remaining": 0
}
```

---

### 🌐 Webhook 6 : Demande de Code OTP (Connexion)
* **Endpoint :** `POST /webhook/request-otp`
* **Payload Envoyé par l'Utilisateur :**
```json
{
  "email": "invite1@email.com"
}
```
* **Payload de Réponse Attendu (n8n) :**
*n8n doit vérifier si cet e-mail est l'adresse organisateur ou est présent dans la table Notion `[MP] Personnages`. Si oui, il génère un code à 6 chiffres, l'envoie au joueur par e-mail, et enregistre temporairement ce code pour vérification.*
```json
{
  "success": true,
  "message": "Un code de connexion a été envoyé à votre adresse e-mail."
}
```
* **En cas d'e-mail non répertorié :**
```json
{
  "success": false,
  "error": "Cette adresse e-mail n'est pas répertoriée pour cette session."
}
```

---

### 🌐 Webhook 7 : Vérification du Code OTP
* **Endpoint :** `POST /webhook/verify-otp`
* **Payload Envoyé par l'Utilisateur :**
```json
{
  "email": "invite1@email.com",
  "otp": "123456"
}
```
* **Payload de Réponse Attendu (n8n) :**
*n8n valide le code. S'il est correct, il renvoie le rôle (organizer ou player) et l'état d'onboarding.*
```json
{
  "success": true,
  "role": "player", // "organizer" | "player"
  "onboarded": true, // true si l'avatar est déjà généré
  "playerDetails": {
    "roleName": "Mlle Rose",
    "avatarUrl": "https://storage.googleapis.com/...",
    "actionPoints": 2
  }
}
```
* **En cas de code erroné :**
```json
{
  "success": false,
  "error": "Code incorrect ou expiré."
}
```
