/* ==========================================================================
   MOCK DATABASES & CONSTANTS
   ========================================================================== */

// 16 Suspect Characters profile templates
const CHARACTER_TEMPLATES = [
    { name: "Mlle Rose", role: "Invitée Mystère", marker: "Une plume de boa pourpre parfumée", bio: "Fille d'un riche industriel, elle voyage incognito et cache un lourd secret de famille.", relation: "Elle est la fille biologique illégitime de la victime, qui l'a déshéritée la veille.", alibi: "Elle prétend s'être reposée dans le Grand Salon au moment du crime." },
    { name: "Colonel Moutarde", role: "Officier à la retraite", marker: "Une médaille militaire rayée", bio: "Héros de guerre décoré, homme fier au tempérament impulsif et autoritaire.", relation: "La victime détenait des preuves compromettantes de sa trahison passée.", alibi: "Il lisait un ouvrage d'histoire militaire dans la Bibliothèque." },
    { name: "Madame Pervenche", role: "Amie d'enfance", marker: "Un étui à cigarettes en nacre", bio: "Veuve mondaine élégante, impliquée dans toutes les œuvres de charité de la haute société.", relation: "La victime faisait chanter son fils unique au sujet d'une dette colossale.", alibi: "Elle préparait une infusion de camomille dans la Cuisine." },
    { name: "Professeur Violet", role: "Chercheur en chimie", marker: "Un carnet de notes à reliure violette", bio: "Universitaire brillant mais excentrique, travaillant sur des composants synthétiques.", relation: "La victime a volé ses brevets scientifiques pour faire fortune.", alibi: "Il faisait des prélèvements dans son bureau temporaire." },
    { name: "Madame Leblanc", role: "Gouvernante en chef", marker: "Un trousseau de clés en laiton usé", bio: "Au service du domaine depuis 30 ans, elle connaît chaque recoin et chaque secret.", relation: "Elle protège sa fille, qui a été renvoyée injustement par la victime.", alibi: "Elle rangeait le linge de maison dans la lingerie." },
    { name: "Monsieur Lenoir", role: "Médecin de famille", marker: "Un stéthoscope ancien argenté", bio: "Praticien réputé, discret, confident de toutes les maladies honteuses des environs.", relation: "Il a fourni des substances illégales à la victime sous la contrainte.", alibi: "Il rédigeait des ordonnances dans le Jardin d'Hiver." },
    { name: "Dr Orchid", role: "Biologiste et botaniste", marker: "Une orchidée séchée dans sa poche", bio: "Chercheuse passionnée, elle étudie les plantes toxiques exotiques.", relation: "La victime menaçait de fermer ses laboratoires de recherche.", alibi: "Elle examinait les plantes dans la Serre principale." },
    { name: "Inspecteur Adams", role: "Détective invité", marker: "Une loupe à manche d'ébène", bio: "Ami de la victime, invité pour assurer la sécurité mais arrivé trop tard.", relation: "Il menait une enquête secrète sur les affaires frauduleuses de la victime.", alibi: "Il fumait sa pipe sur la terrasse arrière." },
    { name: "Baptiste le Valet", role: "Majordome particulier", marker: "Un gant blanc taché de cire", bio: "Froid et méticuleux, il orchestre le service de la maison d'une main de fer.", relation: "Il a été surpris en train de voler des bijoux par la victime juste avant le meurtre.", alibi: "Il servait des boissons dans le grand vestibule." },
    { name: "Rosa la Cantatrice", role: "Artiste lyrique", marker: "Un éventail en dentelle noire", bio: "Cantatrice célèbre à la voix d'or, habituée des salons feutrés.", relation: "La victime menaçait de briser sa carrière en révélant sa perte de voix.", alibi: "Elle s'échauffait la voix dans la Salle de Musique." },
    { name: "Gaston le Cuisinier", role: "Chef de cuisine", marker: "Un couteau d'office très affûté", bio: "Artiste culinaire colérique, passionné par les épices rares et toxiques.", relation: "La victime s'apprêtait à le licencier sans indemnités après un scandale.", alibi: "Il préparait le dessert de minuit dans la Cuisine." },
    { name: "Jeanne la Secrétaire", role: "Assistante personnelle", marker: "Un poudrier en or ciselé", bio: "Jeune femme ambitieuse gérant les comptes et la correspondance privée.", relation: "Elle avait détourné des fonds et la victime s'en était rendu compte.", alibi: "Elle tapait des lettres confidentielles dans le Boudoir." },
    { name: "Dupuis l'Avocat", role: "Conseiller juridique", marker: "Un stylo plume à plume d'or", bio: "Homme de loi cynique qui rédige les testaments et gère les litiges.", relation: "Il a falsifié le dernier testament de la victime à son avantage.", alibi: "Il révisait des documents légaux dans le petit salon." },
    { name: "Agatha la Romancière", role: "Auteure de romans policiers", marker: "Un mini calepin en cuir usé", bio: "Elle cherche l'inspiration pour son prochain livre de meurtre.", relation: "La victime lui servait de modèle pour le rôle du coupable détestable.", alibi: "Elle observait discrètement les invités depuis la mezzanine." },
    { name: "Pierre le Jardinier", role: "Jardinier du domaine", marker: "Un sécateur rouillé dans l'étui", bio: "Homme taciturne proche de la nature, qui déteste la haute société.", relation: "La victime voulait raser son jardin historique pour construire un garage.", alibi: "Il taillait les rosiers grimpants dans la Cour d'honneur." },
    { name: "Clara la Journaliste", role: "Reporter d'investigation", marker: "Un carnet de presse jaune vif", bio: "Toujours à l'affût d'un scoop, elle s'est infiltrée parmi les invités.", relation: "Elle s'apprêtait à publier un article accablant sur les fraudes de la victime.", alibi: "Elle prenait des notes discrètes près du vestiaire." }
];

// List of rooms with potential clues
const ROOMS_DB = {
    "Le Grand Salon": [
        { name: "Verre de champagne brisé", description: "Une flûte en cristal gît en morceaux sous une table. Une légère odeur d'amande amère s'en dégage.", type: "Fouille de Pièce" },
        { name: "Foulard en soie égaré", description: "Un luxueux foulard en soie monogrammé 'R', coincé dans la charnière d'un fauteuil.", type: "Fouille de Pièce" },
        { name: "Cendrier tiède", description: "Contient des cendres de cigares haut de gamme importés, identiques à ceux du Colonel.", type: "Fouille de Pièce" }
    ],
    "La Bibliothèque": [
        { name: "Livre d'alchimie déplacé", description: "Un ouvrage poussiéreux sur les poisons végétaux est posé à l'envers sur une étagère.", type: "Fouille de Pièce" },
        { name: "Lettre de chantage déchirée", description: "Des morceaux de papier révélant une demande de rançon de 100 000 francs.", type: "Fouille de Pièce" },
        { name: "Montre à gousset cassée", description: "Une montre dont le verre est brisé, arrêtée précisément sur 21h45.", type: "Fouille de Pièce" }
    ],
    "La Cuisine": [
        { name: "Fiole d'Arsenic vide", description: "Un flacon d'apothicaire caché au fond du placard à épices. L'étiquette mentionne 'Arsenic'.", type: "Fouille de Pièce" },
        { name: "Couteau de cuisine manquant", description: "Un emplacement est vide dans le bloc de couteaux du chef Gaston.", type: "Fouille de Pièce" },
        { name: "Tisanière encore chaude", description: "Une tasse de camomille entamée, contenant des résidus de poudre blanche.", type: "Fouille de Pièce" }
    ],
    "Le Jardin d'Hiver": [
        { name: "Terre meuble suspecte", description: "La terre d'une grande plante verte semble avoir été retournée récemment. Quelque chose y est enfoui.", type: "Fouille de Pièce" },
        { name: "Clé dorée", description: "Une petite clé en laiton retrouvée sous un pot de fleur. Elle semble ouvrir un tiroir secret.", type: "Fouille de Pièce" },
        { name: "Traces de pas boueuses", description: "Des empreintes menant de la porte vitrée vers le fauteuil du fond.", type: "Fouille de Pièce" }
    ],
    "La Chambre de la Victime": [
        { name: "Coffre-fort ouvert", description: "Le coffre dissimulé derrière le tableau est grand ouvert. Il est vide de tout document légal.", type: "Fouille de Pièce" },
        { name: "Dernier Testament", description: "Un brouillon de testament déshéritant les proches de la victime au profit d'une œuvre caritative.", type: "Fouille de Pièce" },
        { name: "Chemise ensanglantée", description: "Une chemise d'homme froissée portant des taches de sang, dissimulée dans le panier à linge.", type: "Fouille de Pièce" }
    ],
    "La Cave à Vins": [
        { name: "Bouteille de grand cru entamée", description: "Un château Margaux 1918 ouvert, contenant des traces de sédatif liquide.", type: "Fouille de Pièce" },
        { name: "Mégot de cigarette pourpre", description: "Un mégot de cigarette portant une trace de rouge à lèvres rouge vif.", type: "Fouille de Pièce" },
        { name: "Bouton de manchette en or", description: "Un bouton gravé d'un blason militaire, perdu près des casiers de Bourgogne.", type: "Fouille de Pièce" }
    ]
};

// Default suggested onboarding character traits
const SUGGESTED_TRAITS = ["Calculateur", "Menteur", "Observateur", "Froid", "Manipulateur", "Nerveux", "Silencieux", "Arrogant"];

/* ==========================================================================
   STATE MANAGEMENT
   ========================================================================== */
let appState = {
    currentUser: null, // { email, role }
    scenario: null,    // { id, title, theme, pitch, crimeRoom, cluesCount }
    session: null,     // { id, name, location, totalClues, pointsPerPlayer, status }
    players: [],       // Array of 16 players
    clues: [],         // Global clues state
    logs: []           // Live feed logs
};

// Load State from LocalStorage
function loadPersistedState() {
    const saved = localStorage.getItem('mp_engine_state');
    if (saved) {
        try {
            appState = JSON.parse(saved);
        } catch(e) {
            console.error("Failed to load local state", e);
        }
    }
}

// Save State to LocalStorage
function savePersistedState() {
    localStorage.setItem('mp_engine_state', JSON.stringify(appState));
}

/* ==========================================================================
   NAVIGATION & VIEW ROUTING
   ========================================================================== */
function routeApp() {
    const loginScreen = document.getElementById('loginScreen');
    const appShell = document.getElementById('appShell');
    const organizerView = document.getElementById('organizerView');
    const playerView = document.getElementById('playerView');
    const playerOnboarding = document.getElementById('playerOnboarding');
    const playerDashboard = document.getElementById('playerDashboard');

    if (!appState.currentUser) {
        // Show Login Screen
        loginScreen.classList.remove('hidden');
        appShell.classList.add('hidden');
        return;
    }

    // Show App Shell
    loginScreen.classList.add('hidden');
    appShell.classList.remove('hidden');

    // Update Header
    document.getElementById('currentUserEmail').textContent = appState.currentUser.email;
    const roleBadge = document.getElementById('roleBadge');
    
    if (appState.currentUser.role === 'organizer') {
        // Organizer Route
        organizerView.classList.remove('hidden');
        playerView.classList.add('hidden');
        
        roleBadge.textContent = "Organisateur";
        roleBadge.className = "px-3 py-1 text-2xs uppercase tracking-widest font-black rounded-full border border-gold text-gold bg-gold/5";
        
        renderOrganizerDashboard();
    } else {
        // Player Route
        organizerView.classList.add('hidden');
        playerView.classList.remove('hidden');
        
        roleBadge.textContent = "Suspect / Joueur";
        roleBadge.className = "px-3 py-1 text-2xs uppercase tracking-widest font-black rounded-full border border-blood text-blood bg-blood/5";

        // Find Player in session
        const player = getActivePlayer();
        if (!player) {
            showToast("Session non active", "Vous ne faites pas partie de la liste des invités ou aucune session n'est lancée.", "error");
            logout();
            return;
        }

        if (!player.avatarUrl) {
            // Step 1: Onboarding
            playerOnboarding.classList.remove('hidden');
            playerDashboard.classList.add('hidden');
            renderPlayerOnboarding();
        } else {
            // Step 2: Dashboard Game Loop
            playerOnboarding.classList.add('hidden');
            playerDashboard.classList.remove('hidden');
            renderPlayerDashboard(player);
        }
    }
}

function getActivePlayer() {
    if (!appState.currentUser || appState.currentUser.role !== 'player') return null;
    return appState.players.find(p => p.email === appState.currentUser.email);
}

/* ==========================================================================
   ORGANIZER DASHBOARD RENDERING
   ========================================================================== */
function renderOrganizerDashboard() {
    // 1. Scenario Info Box
    const resultBox = document.getElementById('scenarioResultBox');
    const sendInvitationsBtn = document.getElementById('sendInvitationsBtn');
    
    if (appState.scenario) {
        resultBox.classList.remove('hidden');
        document.getElementById('activeScenarioTitle').textContent = appState.scenario.title;
        document.getElementById('activeScenarioPitch').textContent = appState.scenario.pitch;
        document.getElementById('activeScenarioCrimeRoom').textContent = appState.scenario.crimeRoom;
        document.getElementById('activeScenarioCluesCount').textContent = appState.scenario.cluesCount;
        sendInvitationsBtn.removeAttribute('disabled');
    } else {
        resultBox.classList.add('hidden');
        sendInvitationsBtn.setAttribute('disabled', 'true');
    }

    // 2. Session Info & Economy Stats Card
    const statsBox = document.getElementById('sessionStatsBox');
    if (appState.session && appState.session.status !== 'Configuration') {
        statsBox.classList.remove('hidden');
        document.getElementById('statTotalClues').textContent = appState.session.totalClues;
        document.getElementById('statPointsPerPlayer').textContent = appState.session.pointsPerPlayer;
        
        // Populate inputs with existing values
        document.getElementById('sessionName').value = appState.session.name;
        document.getElementById('sessionLocation').value = appState.session.location;
    } else {
        statsBox.classList.add('hidden');
    }

    // Populate default 16 emails if empty
    const emailArea = document.getElementById('sessionEmails');
    if (!emailArea.value.trim()) {
        const dummyEmails = Array.from({length: 16}, (_, i) => `invite${i+1}@email.com`).join('\n');
        emailArea.value = dummyEmails;
    }

    // 3. Render Players list
    const tbody = document.getElementById('orgPlayersTableBody');
    tbody.innerHTML = '';
    
    if (appState.players.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="4" class="py-6 text-center text-slate-500">Aucune session active. Distribuez les invitations pour populer les rôles.</td>
            </tr>
        `;
    } else {
        appState.players.forEach(p => {
            let roleBadgeClass = "bg-slate-900 border border-slate-700 text-slate-400";
            if (p.roleType === "Coupable") roleBadgeClass = "bg-red-950 border border-red-800 text-red-400 font-extrabold";
            if (p.roleType === "Faux-Coupable") roleBadgeClass = "bg-amber-950 border border-amber-800 text-amber-400";
            
            const tr = document.createElement('tr');
            tr.className = "border-b border-noir-border/30 hover:bg-noir-card/50 transition-colors";
            tr.innerHTML = `
                <td class="py-3 font-semibold text-slate-200">
                    <div class="flex items-center gap-2">
                        <span class="w-2.5 h-2.5 rounded-full ${p.avatarUrl ? 'bg-emerald-500 shadow-[0_0_5px_#10b981]' : 'bg-yellow-500'}" title="${p.avatarUrl ? 'Profil généré' : 'En attente d\'onboarding'}"></span>
                        ${p.roleName}
                    </div>
                </td>
                <td class="py-3 font-mono text-2xs text-slate-400">${p.email}</td>
                <td class="py-3">
                    <span class="px-2 py-0.5 text-3xs uppercase tracking-wider rounded font-semibold ${roleBadgeClass}">${p.roleType}</span>
                </td>
                <td class="py-3 text-right font-bold text-blood">${p.actionPoints} PA</td>
            `;
            tbody.appendChild(tr);
        });
    }

    // 4. Render Live Console Logs
    const consoleDiv = document.getElementById('monitoringConsole');
    consoleDiv.innerHTML = '';
    
    if (appState.logs.length === 0) {
        consoleDiv.innerHTML = '<div class="text-slate-500">>> En attente du démarrage de la session...</div>';
    } else {
        appState.logs.forEach(log => {
            const div = document.createElement('div');
            
            // Format log colors based on content keywords
            if (log.includes("Génération") || log.includes("créée")) {
                div.className = "log-info";
            } else if (log.includes("Succès") || log.includes("accompli") || log.includes("débloqué")) {
                div.className = "log-success";
            } else if (log.includes("fouillé")) {
                div.className = "log-warning";
            } else if (log.includes("bloquée") || log.includes("0 PA")) {
                div.className = "log-danger";
            }
            
            div.textContent = log;
            consoleDiv.appendChild(div);
        });
        // Auto scroll to bottom
        consoleDiv.scrollTop = consoleDiv.scrollHeight;
    }
}

/* ==========================================================================
   PLAYER ONBOARDING RENDERING
   ========================================================================== */
function renderPlayerOnboarding() {
    const tagsContainer = document.getElementById('traitSuggestionTags');
    tagsContainer.innerHTML = '';
    
    SUGGESTED_TRAITS.forEach(trait => {
        const span = document.createElement('span');
        span.className = "trait-tag";
        span.textContent = trait;
        span.addEventListener('click', () => {
            span.classList.toggle('selected');
            updateTraitsInputFromTags();
        });
        tagsContainer.appendChild(span);
    });

    // File input mock interaction
    const container = document.getElementById('photoUploadContainer');
    const fileInput = document.getElementById('playerPhotoFile');
    const uploadIcon = document.getElementById('photoUploadIcon');
    const uploadText = document.getElementById('photoUploadText');

    container.onclick = () => fileInput.click();
    fileInput.onchange = (e) => {
        if (e.target.files && e.target.files[0]) {
            uploadIcon.className = "fa-solid fa-circle-check text-2xl text-gold";
            uploadText.innerHTML = `Photo sélectionnée : <span class="text-gold font-mono text-3xs">${e.target.files[0].name}</span>`;
            container.classList.add('border-gold');
        }
    };
}

function updateTraitsInputFromTags() {
    const selectedSpans = document.querySelectorAll('#traitSuggestionTags .trait-tag.selected');
    const traits = Array.from(selectedSpans).map(s => s.textContent);
    document.getElementById('playerTraitsInput').value = traits.join(', ');
}

/* ==========================================================================
   PLAYER GAMEPLAY DASHBOARD RENDERING
   ========================================================================== */
function renderPlayerDashboard(player) {
    // 1. Stats and Gauges Row
    document.getElementById('dashPlayerRoleName').textContent = player.roleName;
    document.getElementById('dashPlayerSecretStatus').textContent = player.roleType;
    document.getElementById('dashActionPointsDisplay').textContent = player.actionPoints;

    // Circle SVG calculation (175 is stroke-dasharray)
    // Starting action points (PointsPerPlayer) as 100% capacity
    const initialPA = appState.session ? appState.session.pointsPerPlayer : 10;
    const progressPercent = initialPA > 0 ? (player.actionPoints / initialPA) : 0;
    const offset = 175 - (175 * Math.min(progressPercent, 1));
    document.getElementById('dashProgressCircle').setAttribute('stroke-dashoffset', offset);

    // Update Avatar image and badge
    const avatarCircle = document.getElementById('dashPlayerAvatarCircle');
    const avatarImg = document.getElementById('dashAvatarImg');
    
    avatarCircle.innerHTML = `<img src="${player.avatarUrl}" class="w-full h-full object-cover">`;
    avatarImg.src = player.avatarUrl;
    
    document.getElementById('dashVisualMarker').textContent = player.marker;

    // 2. Character Backstory Details
    document.getElementById('dashPlayerHistory').textContent = player.history;
    document.getElementById('dashPlayerLienVictime').textContent = player.lienVictime;

    // Render Knowledge List
    const knowledgeBox = document.getElementById('dashPlayerKnowledge');
    knowledgeBox.innerHTML = '';
    
    if (player.knowledge.length === 0) {
        knowledgeBox.innerHTML = `<div class="text-slate-500 italic">Aucune information glanée pour l'instant.</div>`;
    } else {
        player.knowledge.forEach(k => {
            const div = document.createElement('div');
            div.className = "bg-noir-input/40 border border-noir-border/30 p-2.5 rounded-lg text-slate-300 leading-normal";
            
            // Format name bold
            const index = k.indexOf(':');
            if (index !== -1) {
                const name = k.substring(0, index);
                const info = k.substring(index + 1);
                div.innerHTML = `<strong class="text-gold">${name}</strong>:${info}`;
            } else {
                div.textContent = k;
            }
            knowledgeBox.appendChild(div);
        });
    }

    // 3. Render Missions Checkbox list
    const missionsBox = document.getElementById('playerMissionsList');
    missionsBox.innerHTML = '';
    
    player.missions.forEach((m, idx) => {
        const item = document.createElement('div');
        item.className = `p-3 rounded-xl border flex justify-between items-center gap-3 transition-colors ${
            m.completed 
            ? 'bg-emerald-950/20 border-emerald-900/40 text-slate-400' 
            : 'bg-noir-card border-noir-border hover:border-noir-border/80'
        }`;
        
        let buttonHtml = '';
        if (!m.completed) {
            // Only make next chronological mission unlockable
            const isSelectable = idx === 0 || player.missions[idx - 1].completed;
            buttonHtml = `
                <button onclick="completePlayerMission('${m.id}')" ${!isSelectable ? 'disabled' : ''} 
                        class="bg-blood hover:bg-blood-hover disabled:opacity-30 disabled:hover:bg-blood text-white font-bold text-3xs py-1.5 px-2.5 rounded-lg flex items-center gap-1 transition-colors whitespace-nowrap">
                    <i class="fa-solid fa-circle-check"></i> Valider (+2 PA)
                </button>
            `;
        } else {
            buttonHtml = `<span class="text-emerald-500 text-xs font-bold"><i class="fa-solid fa-check-double"></i> Fait</span>`;
        }

        item.innerHTML = `
            <div class="flex flex-col gap-0.5">
                <span class="text-3xs text-slate-500 uppercase tracking-widest font-bold">Objectif ${idx + 1}</span>
                <span class="text-xs font-semibold leading-snug ${m.completed ? 'line-through text-slate-500' : 'text-slate-200'}">${m.title}</span>
            </div>
            ${buttonHtml}
        `;
        
        missionsBox.appendChild(item);
    });

    // 4. Room Search Dropdown & Discovered Clues Grid
    const roomSelect = document.getElementById('searchRoomSelect');
    roomSelect.innerHTML = '';
    
    Object.keys(ROOMS_DB).forEach(roomName => {
        const option = document.createElement('option');
        option.value = roomName;
        option.textContent = roomName;
        roomSelect.appendChild(option);
    });

    // Render Clues list for this player
    const cluesContainer = document.getElementById('playerCluesContainer');
    cluesContainer.innerHTML = '';
    
    // Find clues belonging to this session that are status="Débloqué" AND matched with this player
    const unlockedClues = appState.clues.filter(c => c.status === "Débloqué" && c.foundBy === player.email);
    
    if (unlockedClues.length === 0) {
        cluesContainer.innerHTML = `
            <div class="border border-dashed border-noir-border/50 rounded-xl p-6 text-center text-slate-500 text-3xs">
                <i class="fa-solid fa-receipt text-lg opacity-40 mb-1.5"></i>
                <p>Aucun indice débloqué.</p>
                <p class="mt-0.5 text-slate-600">Dépensez vos PA pour fouiller les pièces !</p>
            </div>
        `;
    } else {
        unlockedClues.forEach(c => {
            const card = document.createElement('div');
            card.className = "bg-noir-card border border-noir-border rounded-xl p-3.5 space-y-2 hover:border-gold/30 transition-all";
            
            let imgHtml = '';
            if (c.image) {
                imgHtml = `<img src="${c.image}" alt="${c.name}" class="w-full max-h-24 object-cover rounded-lg border border-noir-border">`;
            }
            
            card.innerHTML = `
                <div class="flex justify-between items-center">
                    <span class="text-xs font-bold text-gold">${c.name}</span>
                    <span class="text-3xs bg-noir-input border border-noir-border text-slate-400 px-2 py-0.5 rounded">${c.location}</span>
                </div>
                <p class="text-2xs text-slate-300 leading-normal">${c.description}</p>
                ${imgHtml}
            `;
            cluesContainer.appendChild(card);
        });
    }
}

/* ==========================================================================
   LOGIC : SIMULATION AND WEBHOOKS
   ========================================================================== */

// Helper: Add logging in organizer live monitor console
function addLiveLog(message) {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    appState.logs.push(`[${time}] ${message}`);
    savePersistedState();
    
    // If GM is looking, update immediately
    if (appState.currentUser && appState.currentUser.role === 'organizer') {
        renderOrganizerDashboard();
    }
}

// 1. Webhook: POST /webhook/generate-scenario
async function handleGenerateScenario(e) {
    e.preventDefault();
    
    const theme = document.getElementById('scenarioTheme').value.trim();
    const userPitch = document.getElementById('scenarioPitch').value.trim();
    const submitBtn = document.getElementById('generateScenarioBtn');
    
    submitBtn.setAttribute('disabled', 'true');
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner animate-spin"></i> Génération par n8n en cours...`;
    
    addLiveLog(`Génération du scénario (Thème: "${theme}") via Webhook n8n...`);
    
    // Simulate n8n asynchronous webhook call
    await sleep(2000);
    
    // Generate mock response based on theme
    let title = "Le Crime de l'Ombre";
    let crimeRoom = "La Bibliothèque";
    let cluesCount = 18;
    let pitch = userPitch || "Un meurtre inexpliqué perturbe une réunion de la haute société. 16 personnes détiennent la vérité.";

    if (theme.toLowerCase().includes(" prohibition") || theme.toLowerCase().includes("20")) {
        title = "Le Dernier Souffle du Speakeasy";
        crimeRoom = "Le Bureau de l'arrière-boutique";
        cluesCount = 24;
    } else if (theme.toLowerCase().includes("hanté") || theme.toLowerCase().includes("château")) {
        title = "La Malédiction des Verrières";
        crimeRoom = "La Serre aux orchidées";
        cluesCount = 20;
    } else if (theme.toLowerCase().includes("manoir") || theme.toLowerCase().includes("musique")) {
        title = "Le Crime du Salon de Musique";
        crimeRoom = "Le Salon de Musique";
        cluesCount = 30;
    }
    
    appState.scenario = {
        id: "sc_" + Math.random().toString(36).substr(2, 9),
        title: title,
        theme: theme,
        pitch: pitch,
        crimeRoom: crimeRoom,
        cluesCount: cluesCount
    };
    
    addLiveLog(`Succès Webhook: Scénario "${title}" vérifié et injecté dans Notion ! (${cluesCount} indices générés).`);
    savePersistedState();
    
    submitBtn.removeAttribute('disabled');
    submitBtn.innerHTML = `<i class="fa-solid fa-gears"></i> Lancer la génération IA (n8n)`;
    
    renderOrganizerDashboard();
}

// 2. Webhook: POST /webhook/send-invitations
async function handleSendInvitations(e) {
    e.preventDefault();
    
    const name = document.getElementById('sessionName').value.trim();
    const location = document.getElementById('sessionLocation').value.trim();
    const emailsText = document.getElementById('sessionEmails').value.trim();
    const submitBtn = document.getElementById('sendInvitationsBtn');
    
    const emails = emailsText.split('\n').map(email => email.trim()).filter(email => email.length > 0);
    
    if (emails.length !== 16) {
        alert(`Il faut exactement 16 adresses e-mail de joueurs invités (Actuellement: ${emails.length}).`);
        return;
    }
    
    submitBtn.setAttribute('disabled', 'true');
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner animate-spin"></i> Distribution n8n & Notion...`;
    
    addLiveLog(`Envoi des invitations et génération des rôles via Webhook n8n...`);
    
    await sleep(2500);
    
    // Formula for starting action points: Points = (Total Clues / 16) / 1.5
    const totalClues = appState.scenario ? appState.scenario.cluesCount : 24;
    const pointsPerPlayer = Math.round((totalClues / 16) / 1.5) || 1; // Default to at least 1 PA
    
    appState.session = {
        id: "sess_" + Math.random().toString(36).substr(2, 9),
        name: name,
        location: location,
        totalClues: totalClues,
        pointsPerPlayer: pointsPerPlayer,
        status: "Invitations Envoyées"
    };

    // Distribute Roles: 1 Coupable, 2 Faux-Coupables, 13 Innocents
    const shuffledEmails = [...emails];
    shuffleArray(shuffledEmails);
    
    const rolesDist = [];
    shuffledEmails.forEach((email, index) => {
        let type = "Innocent";
        if (index === 0) type = "Coupable";
        else if (index === 1 || index === 2) type = "Faux-Coupable";
        rolesDist.push({ email: email, type: type });
    });

    // Populate players list with character templates
    appState.players = CHARACTER_TEMPLATES.map((charTemplate, index) => {
        const assignment = rolesDist[index];
        
        // Assemble Knowledge list
        const otherChars = CHARACTER_TEMPLATES.filter(c => c.name !== charTemplate.name);
        const knowledge1 = `${otherChars[0].name} : Alibi suspect près de ${otherChars[0].alibi}.`;
        const knowledge2 = `${otherChars[1].name} : A été vu(e) avec ${charTemplate.marker} en main.`;
        
        return {
            email: assignment.email,
            roleType: assignment.type,
            roleName: charTemplate.name,
            history: charTemplate.bio,
            lienVictime: charTemplate.relation,
            marker: charTemplate.marker,
            characterTraits: "", // populated on onboarding
            avatarUrl: "",       // populated on onboarding
            actionPoints: pointsPerPlayer,
            status: "Invité",
            knowledge: [knowledge1, knowledge2],
            missions: [
                { id: `mission_${index}_1`, title: `Fouiller le lieu : ${Object.keys(ROOMS_DB)[index % 6]}`, completed: false, points: 2, targetRoom: Object.keys(ROOMS_DB)[index % 6] },
                { id: `mission_${index}_2`, title: `Retrouver le suspect possédant le marqueur visuel : "${otherChars[2].marker}"`, completed: false, points: 2 }
            ]
        };
    });

    // Populate Clues list in Notion state
    appState.clues = [];
    Object.entries(ROOMS_DB).forEach(([roomName, cluesList]) => {
        cluesList.forEach((c, idx) => {
            appState.clues.push({
                id: `clue_${roomName.replace(/\s+/g, '_')}_${idx}`,
                name: c.name,
                description: c.description,
                type: c.type,
                location: roomName,
                status: "Caché",
                foundBy: ""
            });
        });
    });
    
    addLiveLog(`Succès Webhook: Rôles attribués dans Notion. Économie de points initialisée (${pointsPerPlayer} PA par joueur).`);
    savePersistedState();
    
    submitBtn.removeAttribute('disabled');
    submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Distribuer les rôles & inviter (n8n)`;
    
    renderOrganizerDashboard();
    showToast("Invitations envoyées !", "Les rôles et budgets de points ont été initialisés dans Notion.", "success");
}

// 3. Webhook: POST /webhook/generate-avatar
async function handlePlayerOnboarding(e) {
    e.preventDefault();
    
    const traits = document.getElementById('playerTraitsInput').value.trim();
    const overlay = document.getElementById('onboardingLoadingOverlay');
    
    if (!traits) {
        alert("Veuillez renseigner vos traits de caractère.");
        return;
    }
    
    overlay.classList.remove('hidden');
    addLiveLog(`Joueur ${appState.currentUser.email} : Génération de l'avatar et du marqueur visuel via n8n...`);
    
    await sleep(3000);
    
    // Update player status in State
    const playerIndex = appState.players.findIndex(p => p.email === appState.currentUser.email);
    if (playerIndex !== -1) {
        appState.players[playerIndex].characterTraits = traits;
        
        // Random portrait placeholder style polar
        const portraitPool = [
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80",
            "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&fit=crop&q=80",
            "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&fit=crop&q=80",
            "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&fit=crop&q=80"
        ];
        
        appState.players[playerIndex].avatarUrl = portraitPool[playerIndex % portraitPool.length];
        appState.players[playerIndex].status = "Prêt";
        
        addLiveLog(`Succès Webhook: Avatar généré pour ${appState.players[playerIndex].roleName} (${appState.currentUser.email})`);
        savePersistedState();
    }
    
    overlay.classList.add('hidden');
    routeApp();
    showToast("Avatar Généré !", "Votre personnage est prêt pour l'enquête.", "success");
}

// 4. Webhook: POST /webhook/complete-mission
async function completePlayerMission(missionId) {
    const player = getActivePlayer();
    if (!player) return;
    
    const missionIndex = player.missions.findIndex(m => m.id === missionId);
    if (missionIndex === -1 || player.missions[missionIndex].completed) return;
    
    addLiveLog(`Joueur ${player.email} : Validation de la mission "${player.missions[missionIndex].title}"...`);
    
    // Simulate n8n webhook response
    await sleep(1000);
    
    player.missions[missionIndex].completed = true;
    player.actionPoints += 2; // Reward 2 PA
    
    // Unlock a hidden clue somewhere in their targetRoom if applicable
    const targetRoom = player.missions[missionIndex].targetRoom;
    if (targetRoom) {
        const hiddenClue = appState.clues.find(c => c.location === targetRoom && c.status === "Caché");
        if (hiddenClue) {
            hiddenClue.status = "Débloqué";
            hiddenClue.foundBy = player.email;
            addLiveLog(`Succès Webhook: Mission validée. +2 PA pour ${player.roleName}. Indice débloqué : "${hiddenClue.name}".`);
        } else {
            addLiveLog(`Succès Webhook: Mission validée. +2 PA pour ${player.roleName}. (Tous les indices de ce lieu sont déjà découverts).`);
        }
    } else {
        addLiveLog(`Succès Webhook: Mission validée. +2 PA pour ${player.roleName}.`);
    }
    
    savePersistedState();
    renderPlayerDashboard(player);
    showToast("Mission validée !", "Vous gagnez +2 Points d'Action et avez fait progresser l'enquête.", "success");
}

// 5. Webhook: POST /webhook/reveal-index
async function handleRoomSearch() {
    const player = getActivePlayer();
    if (!player) return;

    const roomSelect = document.getElementById('searchRoomSelect');
    const selectedRoom = roomSelect.value;
    const feedback = document.getElementById('searchFeedbackMessage');
    
    // Check Action Points balance
    if (player.actionPoints < 1) {
        feedback.className = "text-3xs font-semibold text-center text-blood";
        feedback.textContent = "Action impossible : Vous avez 0 PA. Échangez des indices ou validez des missions.";
        addLiveLog(`Action bloquée: ${player.roleName} (${player.email}) a tenté de fouiller ${selectedRoom} avec 0 PA.`);
        showToast("Points insuffisants !", "Vous n'avez plus de points d'action pour fouiller.", "error");
        return;
    }

    feedback.className = "text-3xs font-semibold text-center text-slate-400";
    feedback.textContent = "Fouille de la pièce en cours...";
    
    // Simulate n8n / Notion checking & deduction
    await sleep(1200);

    // Find next hidden clue in the selected room
    const hiddenClue = appState.clues.find(c => c.location === selectedRoom && c.status === "Caché");
    
    player.actionPoints -= 1; // Deduct 1 PA
    
    if (hiddenClue) {
        hiddenClue.status = "Débloqué";
        hiddenClue.foundBy = player.email;
        
        feedback.className = "text-3xs font-semibold text-center text-emerald-400";
        feedback.textContent = `🔍 Indice découvert: ${hiddenClue.name}`;
        
        addLiveLog(`${player.roleName} a fouillé ${selectedRoom} (-1 PA). Indice débloqué: "${hiddenClue.name}".`);
        showToast("Indice Découvert !", `Vous avez trouvé : ${hiddenClue.name}`, "success");
    } else {
        feedback.className = "text-3xs font-semibold text-center text-gold";
        feedback.textContent = "Pièce fouillée mais aucun nouvel indice trouvé.";
        
        addLiveLog(`${player.roleName} a fouillé ${selectedRoom} (-1 PA). Aucun nouvel indice trouvé.`);
        showToast("Rien trouvé", "Tous les indices de ce lieu ont déjà été découverts.", "warning");
    }

    savePersistedState();
    renderPlayerDashboard(player);
}

/* ==========================================================================
   AUTHENTICATION LOGIC
   ========================================================================== */
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    
    if (!email) return;

    if (email === 'organisateur@email.com') {
        appState.currentUser = { email: email, role: 'organizer' };
    } else {
        // Must check if a session is created and if player exists
        if (!appState.session || appState.players.length === 0) {
            alert("Aucune session n'est active. Demandez à l'organisateur de lancer la partie.");
            return;
        }
        
        const exists = appState.players.find(p => p.email === email);
        if (!exists) {
            alert(`L'adresse e-mail "${email}" n'est pas sur la liste des invités de cette session.`);
            return;
        }

        appState.currentUser = { email: email, role: 'player' };
    }

    savePersistedState();
    routeApp();
    showToast("Connexion réussie", `Bienvenue sur votre espace.`, "success");
}

function logout() {
    appState.currentUser = null;
    savePersistedState();
    
    // Reset forms
    document.getElementById('loginEmail').value = '';
    
    routeApp();
}

/* ==========================================================================
   HELPERS & TOASTS
   ========================================================================== */

function showToast(title, message, type = 'info') {
    const toast = document.getElementById('toastNotification');
    const icon = document.getElementById('toastIcon');
    const titleEl = document.getElementById('toastTitle');
    const msgEl = document.getElementById('toastMessage');

    titleEl.textContent = title;
    msgEl.textContent = message;

    // Toast styles based on type
    toast.className = "fixed bottom-6 right-6 z-50 bg-noir-panel border py-3 px-5 rounded-xl shadow-[0_5px_25px_rgba(0,0,0,0.5)] flex items-center gap-3 max-w-sm transition-all duration-300 toast-visible";
    
    if (type === 'success') {
        icon.className = "fa-solid fa-circle-check text-emerald-500 text-lg";
        toast.classList.add('border-emerald-500/50');
    } else if (type === 'error') {
        icon.className = "fa-solid fa-circle-exclamation text-blood text-lg";
        toast.classList.add('border-blood/50');
    } else if (type === 'warning') {
        icon.className = "fa-solid fa-triangle-exclamation text-gold text-lg";
        toast.classList.add('border-gold/50');
    } else {
        icon.className = "fa-solid fa-circle-info text-blue-500 text-lg";
        toast.classList.add('border-blue-500/50');
    }

    setTimeout(() => {
        toast.className = "toast-hidden fixed bottom-6 right-6 z-50 bg-noir-panel border py-3 px-5 rounded-xl flex items-center gap-3 max-w-sm transition-all duration-300";
    }, 4000);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* ==========================================================================
   INITIALIZATION & EVENT LISTENERS
   ========================================================================== */
function init() {
    loadPersistedState();
    
    // Global routes
    routeApp();

    // Event Listeners
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('logoutBtn').addEventListener('click', logout);
    
    // Organizer Forms
    document.getElementById('generateScenarioForm').addEventListener('submit', handleGenerateScenario);
    document.getElementById('sessionForm').addEventListener('submit', handleSendInvitations);
    
    // Onboarding Form
    document.getElementById('onboardingForm').addEventListener('submit', handlePlayerOnboarding);
    
    // Player Gameplay trigger
    document.getElementById('searchRoomBtn').addEventListener('click', handleRoomSearch);
}

window.addEventListener('DOMContentLoaded', init);
