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
    logs: [],          // Live feed logs
    loginStep: 'email',// 'email' | 'otp'
    pendingEmail: '',  // email input in progress
    mockOtp: '',       // generated OTP code for mock testing
    n8nBaseUrl: 'http://localhost:5678', // default n8n Base URL
    orgaView: 'landing' // Track active organizer view
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
    appState.n8nBaseUrl = 'http://localhost:5678'; // Hardcoded to run "for real" on localhost:5678
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

        // Manage OTP step vs Email step
        const loginEmailStep = document.getElementById('loginEmailStep');
        const loginOtpStep = document.getElementById('loginOtpStep');
        if (appState.loginStep === 'otp') {
            loginEmailStep.classList.add('hidden');
            loginOtpStep.classList.remove('hidden');
            document.getElementById('sentOtpEmailDisplay').textContent = appState.pendingEmail;
            document.getElementById('loginOtp').setAttribute('required', 'true');
            document.getElementById('loginOtp').focus();
        } else {
            loginEmailStep.classList.remove('hidden');
            loginOtpStep.classList.add('hidden');
            document.getElementById('loginOtp').removeAttribute('required');
        }
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
    const landingPanel = document.getElementById('orgaLandingPanel');
    const creationPanel = document.getElementById('sessionCreationPanel');
    const activePanel = document.getElementById('sessionActivePanel');
    
    if (!appState.orgaView) {
        appState.orgaView = 'landing';
    }

    // 1. Toggle panels visibility based on appState.orgaView
    if (appState.orgaView === 'landing') {
        if (landingPanel) landingPanel.classList.remove('hidden');
        if (creationPanel) creationPanel.classList.add('hidden');
        if (activePanel) activePanel.classList.add('hidden');

        // Show active session button only if session exists and is not 'A initier'
        const activeBtn = document.getElementById('orgaActiveSessionBtn');
        if (activeBtn) {
            const hasActive = appState.session && appState.session.status && appState.session.status !== 'A initier';
            if (hasActive) {
                activeBtn.classList.remove('hidden');
            } else {
                activeBtn.classList.add('hidden');
            }
        }
    } else if (appState.orgaView === 'create') {
        if (landingPanel) landingPanel.classList.add('hidden');
        if (creationPanel) creationPanel.classList.remove('hidden');
        if (activePanel) activePanel.classList.add('hidden');

        // Populate default 16 emails if empty
        const emailArea = document.getElementById('sessionEmails');
        if (emailArea && !emailArea.value.trim()) {
            const dummyEmails = Array.from({length: 16}, (_, i) => `invite${i+1}@email.com`).join('\n');
            emailArea.value = dummyEmails;
        }

        // Stylize creation sub-buttons based on scenarioMode state
        const modeInput = document.getElementById('scenarioMode');
        const createBtnCard = document.getElementById('orgaBtnCreateScenarioOption');
        const selectBtnCard = document.getElementById('orgaBtnSelectScenarioOption');
        const formContainer = document.getElementById('unifiedSessionForm');
        const createFields = document.getElementById('createScenarioFormFields');
        const selectFields = document.getElementById('selectScenarioFormFields');

        if (modeInput && modeInput.value) {
            if (formContainer) formContainer.classList.remove('hidden');
            if (modeInput.value === 'create') {
                if (createBtnCard) createBtnCard.className = "orga-option-card active p-6 rounded-xl text-center space-y-2";
                if (selectBtnCard) selectBtnCard.className = "orga-option-card p-6 rounded-xl text-center space-y-2";
                if (createFields) createFields.classList.remove('hidden');
                if (selectFields) selectFields.classList.add('hidden');
            } else {
                if (createBtnCard) createBtnCard.className = "orga-option-card p-6 rounded-xl text-center space-y-2";
                if (selectBtnCard) selectBtnCard.className = "orga-option-card active p-6 rounded-xl text-center space-y-2";
                if (createFields) createFields.classList.add('hidden');
                if (selectFields) selectFields.classList.remove('hidden');
            }
        } else {
            if (formContainer) formContainer.classList.add('hidden');
            if (createBtnCard) createBtnCard.className = "orga-option-card p-6 rounded-xl text-center space-y-2";
            if (selectBtnCard) selectBtnCard.className = "orga-option-card p-6 rounded-xl text-center space-y-2";
        }
    } else if (appState.orgaView === 'active') {
        if (landingPanel) landingPanel.classList.add('hidden');
        if (creationPanel) creationPanel.classList.add('hidden');
        if (activePanel) activePanel.classList.remove('hidden');

        // Render Active Scenario Details
        if (appState.scenario) {
            document.getElementById('activeScenarioTitle').textContent = appState.scenario.title;
            document.getElementById('activeScenarioPitch').textContent = appState.scenario.pitch;
            document.getElementById('activeScenarioCrimeRoom').textContent = appState.scenario.crimeRoom;
            document.getElementById('activeScenarioCluesCount').textContent = appState.scenario.cluesCount;
        }

        // Render Session Economy Stats
        if (appState.session) {
            document.getElementById('statTotalClues').textContent = appState.session.totalClues || '--';
            document.getElementById('statPointsPerPlayer').textContent = appState.session.pointsPerPlayer || '--';
        }

        // Render Players List Table
        const tbody = document.getElementById('orgPlayersTableBody');
        if (tbody) {
            tbody.innerHTML = '';
            if (appState.players.length === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="3" class="py-6 text-center text-slate-500">Aucun joueur dans la session.</td>
                    </tr>
                `;
            } else {
                appState.players.forEach(p => {
                    let roleBadgeClass = "bg-slate-900 border border-slate-700 text-slate-400";
                    if (p.roleType === "Coupable") roleBadgeClass = "bg-red-950/20 border border-red-900/60 text-red-500 font-extrabold";
                    if (p.roleType === "Faux-Coupable") roleBadgeClass = "bg-slate-900 border border-slate-800 text-slate-300";

                    const tr = document.createElement('tr');
                    tr.className = "border-b border-white/5 hover:bg-noir-card/50 transition-colors";
                    tr.innerHTML = `
                        <td class="py-3 font-semibold text-slate-200">
                            <div class="flex items-center gap-2">
                                <span class="w-2.5 h-2.5 rounded-full ${p.avatarUrl ? 'bg-red-550 shadow-[0_0_5px_#b30b0b]' : 'bg-red-900 animate-pulse'}" title="${p.avatarUrl ? 'Profil généré' : 'En attente d\'onboarding'}"></span>
                                ${p.roleName}
                            </div>
                        </td>
                        <td class="py-3 font-mono text-2xs text-slate-400">${p.email}</td>
                        <td class="py-3 text-right">
                            <span class="px-2 py-0.5 text-3xs uppercase tracking-wider rounded font-semibold ${roleBadgeClass}">${p.roleType}</span>
                        </td>
                    `;
                    tbody.appendChild(tr);
                });
            }
        }
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
// Note: handleToggleScenarioMode removed since mode switching is managed by direct card clicks and renderOrganizerDashboard.

async function handleUnifiedSessionSubmit(e) {
    e.preventDefault();
    
    const name = document.getElementById('sessionName').value.trim();
    const location = document.getElementById('sessionLocation').value.trim();
    const emailsText = document.getElementById('sessionEmails').value.trim();
    const scenarioMode = document.getElementById('scenarioMode').value;
    const submitBtn = document.getElementById('unifiedSubmitBtn');

    const emails = emailsText.split('\n').map(email => email.trim()).filter(email => email.length > 0);
    
    if (emails.length !== 16) {
        showToast("Erreur de joueurs", `Il faut exactement 16 adresses e-mail de joueurs invités (Actuellement: ${emails.length}).`, "error");
        return;
    }

    submitBtn.setAttribute('disabled', 'true');
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner animate-spin text-sm"></i> Orchestration IA en cours...`;
    
    appState.logs = []; // Clear old logs
    addLiveLog(`[Démarrage] Initialisation de la session "${name}"...`);
    renderOrganizerDashboard();

    try {
        let scenarioId = "";
        let totalClues = 24;
        let pointsPerPlayer = 1;

        if (scenarioMode === 'create') {
            const theme = document.getElementById('scenarioTheme').value.trim();
            const userPitch = document.getElementById('scenarioPitch').value.trim();
            const epoch = document.getElementById('scenarioEpoch').value;

            if (!theme) {
                throw new Error("Veuillez renseigner un thème pour la génération de scénario.");
            }

            addLiveLog(`[Agent 1: Scénariste] Génération de l'intrigue (Thème: "${theme}", Époque: "${epoch}")...`);
            renderOrganizerDashboard();
            
            let dataScenario = null;
            if (appState.n8nBaseUrl) {
                // Call real n8n agent orchestration
                const response = await fetch(`${appState.n8nBaseUrl}/webhook/mp-generate-scenario`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        theme: theme,
                        pitch_global: userPitch,
                        epoch: epoch,
                        organizer_email: appState.currentUser ? appState.currentUser.email : 'organisateur@email.com'
                    })
                });
                if (!response.ok) throw new Error("Erreur de communication avec l'Agent Scénariste.");
                dataScenario = await response.json();
            } else {
                // Local simulation fallback
                await sleep(2000);
                dataScenario = {
                    success: true,
                    scenario_id: "sc_" + Math.random().toString(36).substr(2, 9),
                    title: "Le Dernier Souffle du Speakeasy",
                    murder_room: "Le Bureau de l'arrière-boutique",
                    clues_count: 24,
                    pitch: userPitch || "Un meurtre mystérieux a eu lieu."
                };
            }

            appState.scenario = {
                id: dataScenario.scenario_id,
                title: dataScenario.title,
                theme: theme,
                pitch: dataScenario.pitch,
                crimeRoom: dataScenario.murder_room,
                cluesCount: dataScenario.clues_count || 24
            };

            scenarioId = dataScenario.scenario_id;
            totalClues = dataScenario.clues_count || 24;

            addLiveLog(`[Agent 2: Légiste] Scène du crime et indices d'opportunité conçus.`);
            renderOrganizerDashboard();
            await sleep(500);
            
            addLiveLog(`[Agent 3: Profiler] 16 biographies de personnages et indices personnels créés.`);
            renderOrganizerDashboard();
            await sleep(500);

            addLiveLog(`[Agent 4: Chronologue] Fil d'Ariane des missions secrètes généré.`);
            renderOrganizerDashboard();
            await sleep(500);

            addLiveLog(`[Agent 5: Photographe] 3 portraits témoins IA générés (H/F/NB).`);
            renderOrganizerDashboard();
            await sleep(500);

            addLiveLog(`[Agent 5: Vision] Analyse et transcription des descriptions de style sauvegardées.`);
            renderOrganizerDashboard();
            await sleep(500);

            addLiveLog(`Succès : Scénario "${appState.scenario.title}" créé et injecté dans Notion !`);
            renderOrganizerDashboard();

        } else {
            // Select scenario mode
            const existingSelect = document.getElementById('existingScenarioSelect');
            scenarioId = existingSelect.value;
            const scenarioTitle = existingSelect.options[existingSelect.selectedIndex].text;

            appState.scenario = {
                id: scenarioId,
                title: scenarioTitle.split(' (')[0],
                theme: "Chargé",
                pitch: "Scénario pré-existant chargé depuis Notion.",
                crimeRoom: "Le Bureau",
                cluesCount: 24
            };

            addLiveLog(`Scénario sélectionné : "${appState.scenario.title}".`);
            renderOrganizerDashboard();
        }

        // Calculate economy
        pointsPerPlayer = Math.round((totalClues / 16) / 1.5) || 1;

        addLiveLog(`[Orchestrateur] Lancement des invitations et distribution des rôles...`);
        renderOrganizerDashboard();

        let sessionId = "sess_" + Math.random().toString(36).substr(2, 9);
        if (appState.n8nBaseUrl) {
            const response = await fetch(`${appState.n8nBaseUrl}/webhook/mp-send-invitations`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    scenario_id: scenarioId,
                    session_name: name,
                    date: new Date().toISOString(),
                    location: location,
                    emails: emails
                })
            });
            if (!response.ok) throw new Error("Erreur de communication lors de l'envoi des invitations.");
            const dataInv = await response.json();
            sessionId = dataInv.session_id || sessionId;
            pointsPerPlayer = dataInv.points_per_player || pointsPerPlayer;
        } else {
            await sleep(1500);
        }

        appState.session = {
            id: sessionId,
            name: name,
            location: location,
            totalClues: totalClues,
            pointsPerPlayer: pointsPerPlayer,
            status: "Invitations Envoyées"
        };

        // Distribute local state for roles
        const shuffledEmails = [...emails];
        shuffleArray(shuffledEmails);
        
        const rolesDist = [];
        shuffledEmails.forEach((email, index) => {
            let type = "Innocent";
            if (index === 0) type = "Coupable";
            else if (index === 1 || index === 2) type = "Faux-Coupable";
            rolesDist.push({ email: email, type: type });
        });

        appState.players = CHARACTER_TEMPLATES.map((charTemplate, index) => {
            const assignment = rolesDist[index];
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
                characterTraits: "",
                avatarUrl: "",
                actionPoints: pointsPerPlayer,
                status: "Invité",
                knowledge: [knowledge1, knowledge2],
                missions: [
                    { id: `mission_${index}_1`, title: `Fouiller le lieu : ${Object.keys(ROOMS_DB)[index % 6]}`, completed: false, points: 2, targetRoom: Object.keys(ROOMS_DB)[index % 6] },
                    { id: `mission_${index}_2`, title: `Retrouver le suspect possédant le marqueur visuel : "${otherChars[2].marker}"`, completed: false, points: 2 }
                ]
            };
        });

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

        addLiveLog(`Succès final : Session de jeu configurée et lancée !`);
        appState.orgaView = 'active'; // Redirect to active dashboard
        savePersistedState();
        showToast("Session Créée !", "Les invitations ont été envoyées et l'intrigue est prête.", "success");

    } catch(err) {
        console.error(err);
        addLiveLog(`Erreur : ${err.message}`);
        showToast("Erreur d'orchestration", err.message || "Une erreur est survenue.", "error");
    } finally {
        submitBtn.removeAttribute('disabled');
        submitBtn.innerHTML = `<i class="fa-solid fa-skull"></i> Lancer la Session & Envoyer les Invitations`;
        renderOrganizerDashboard();
    }
}

function handleResetSession() {
    if (confirm("Voulez-vous vraiment réinitialiser la session en cours ? Toutes les données locales seront effacées.")) {
        appState.session = null;
        appState.scenario = null;
        appState.players = [];
        appState.clues = [];
        appState.logs = [];
        appState.orgaView = 'landing'; // Return to landing board
        savePersistedState();
        
        // Reset inputs in creation form
        document.getElementById('sessionName').value = '';
        document.getElementById('sessionLocation').value = '';
        const emailArea = document.getElementById('sessionEmails');
        if (emailArea) {
            const dummyEmails = Array.from({length: 16}, (_, i) => `invite${i+1}@email.com`).join('\n');
            emailArea.value = dummyEmails;
        }
        
        renderOrganizerDashboard();
        showToast("Session réinitialisée", "Vous pouvez maintenant créer une nouvelle session.", "info");
    }
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
    
    try {
        let avatarUrl = "";
        let visualMarker = "Une broche ancienne en argent poli";

        if (appState.n8nBaseUrl) {
            const response = await fetch(`${appState.n8nBaseUrl}/webhook/mp-generate-avatar`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: appState.currentUser.email,
                    traits: traits.split(',').map(t => t.trim()),
                    photo_base64: "data:image/jpeg;base64,mock"
                })
            });
            if (!response.ok) throw new Error("Erreur de génération d'avatar.");
            const data = await response.json();
            avatarUrl = data.avatar_url;
            visualMarker = data.visual_marker || visualMarker;
        } else {
            await sleep(3000);
            const portraitPool = [
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&fit=crop&q=80",
                "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&fit=crop&q=80",
                "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&fit=crop&q=80",
                "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&fit=crop&q=80"
            ];
            const playerIndex = appState.players.findIndex(p => p.email === appState.currentUser.email);
            avatarUrl = portraitPool[playerIndex !== -1 ? playerIndex % portraitPool.length : 0];
        }

        const playerIndex = appState.players.findIndex(p => p.email === appState.currentUser.email);
        if (playerIndex !== -1) {
            appState.players[playerIndex].characterTraits = traits;
            appState.players[playerIndex].avatarUrl = avatarUrl;
            appState.players[playerIndex].marker = visualMarker;
            appState.players[playerIndex].status = "Prêt";
            
            addLiveLog(`Succès Webhook: Avatar généré pour ${appState.players[playerIndex].roleName} (${appState.currentUser.email})`);
            savePersistedState();
        }
        showToast("Avatar Généré !", "Votre personnage est prêt pour l'enquête.", "success");

    } catch(err) {
        console.error(err);
        showToast("Erreur onboarding", err.message || "Impossible de contacter n8n.", "error");
    } finally {
        overlay.classList.add('hidden');
        routeApp();
    }
}

// 4. Webhook: POST /webhook/complete-mission
async function completePlayerMission(missionId) {
    const player = getActivePlayer();
    if (!player) return;
    
    const missionIndex = player.missions.findIndex(m => m.id === missionId);
    if (missionIndex === -1 || player.missions[missionIndex].completed) return;
    
    addLiveLog(`Joueur ${player.email} : Validation de la mission "${player.missions[missionIndex].title}"...`);
    
    try {
        let actionPoints = player.actionPoints + 2;
        let unlockedClueName = "";

        if (appState.n8nBaseUrl) {
            const response = await fetch(`${appState.n8nBaseUrl}/webhook/mp-complete-mission`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: player.email,
                    mission_id: missionId,
                    points_earned: 2
                })
            });
            if (!response.ok) throw new Error("Erreur de validation de mission.");
            const data = await response.json();
            actionPoints = data.new_action_points ?? actionPoints;
            unlockedClueName = data.unlocked_clue_name;
        } else {
            await sleep(1000);
        }

        player.missions[missionIndex].completed = true;
        player.actionPoints = actionPoints;

        const targetRoom = player.missions[missionIndex].targetRoom;
        if (targetRoom) {
            const hiddenClue = appState.clues.find(c => c.location === targetRoom && c.status === "Caché");
            if (hiddenClue) {
                hiddenClue.status = "Débloqué";
                hiddenClue.foundBy = player.email;
                if (unlockedClueName) hiddenClue.name = unlockedClueName;
                addLiveLog(`Succès Webhook: Mission validée. +2 PA pour ${player.roleName}. Indice débloqué : "${hiddenClue.name}".`);
            } else {
                addLiveLog(`Succès Webhook: Mission validée. +2 PA pour ${player.roleName}. (Tous les indices de ce lieu sont déjà découverts).`);
            }
        } else {
            addLiveLog(`Succès Webhook: Mission validée. +2 PA pour ${player.roleName}.`);
        }

        savePersistedState();
        showToast("Mission validée !", "Vous gagnez +2 Points d'Action et avez fait progresser l'enquête.", "success");

    } catch(err) {
        console.error(err);
        showToast("Erreur mission", err.message || "Impossible de contacter n8n.", "error");
    } finally {
        renderPlayerDashboard(player);
    }
}

// 5. Webhook: POST /webhook/reveal-index
async function handleRoomSearch() {
    const player = getActivePlayer();
    if (!player) return;

    const roomSelect = document.getElementById('searchRoomSelect');
    const selectedRoom = roomSelect.value;
    const feedback = document.getElementById('searchFeedbackMessage');
    
    if (player.actionPoints < 1) {
        feedback.className = "text-3xs font-semibold text-center text-blood";
        feedback.textContent = "Action impossible : Vous avez 0 PA. Échangez des indices ou validez des missions.";
        addLiveLog(`Action bloquée: ${player.roleName} (${player.email}) a tenté de fouiller ${selectedRoom} avec 0 PA.`);
        showToast("Points insuffisants !", "Vous n'avez plus de points d'action pour fouiller.", "error");
        return;
    }

    feedback.className = "text-3xs font-semibold text-center text-slate-400";
    feedback.textContent = "Fouille de la pièce en cours...";
    
    try {
        let pointsRemaining = player.actionPoints - 1;
        let webhookClues = null;

        if (appState.n8nBaseUrl) {
            const response = await fetch(`${appState.n8nBaseUrl}/webhook/mp-reveal-index`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: player.email,
                    location_name: selectedRoom
                })
            });
            if (!response.ok) throw new Error("Erreur lors de la fouille.");
            const data = await response.json();
            pointsRemaining = data.points_remaining ?? pointsRemaining;
            webhookClues = data.clues;
        } else {
            await sleep(1200);
        }

        player.actionPoints = pointsRemaining;

        const hiddenClue = appState.clues.find(c => c.location === selectedRoom && c.status === "Caché");
        
        if (webhookClues && webhookClues.length > 0) {
            const c = webhookClues[0];
            const activeClue = appState.clues.find(lc => lc.name === c.name) || hiddenClue;
            if (activeClue) {
                activeClue.name = c.name;
                activeClue.description = c.description;
                activeClue.image = c.image;
                activeClue.status = "Débloqué";
                activeClue.foundBy = player.email;
                
                feedback.className = "text-3xs font-semibold text-center text-emerald-400";
                feedback.textContent = `🔍 Indice découvert: ${activeClue.name}`;
                addLiveLog(`${player.roleName} a fouillé ${selectedRoom} (-1 PA). Indice débloqué: "${activeClue.name}".`);
                showToast("Indice Découvert !", `Vous avez trouvé : ${activeClue.name}`, "success");
            }
        } else if (!appState.n8nBaseUrl && hiddenClue) {
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

    } catch(err) {
        console.error(err);
        showToast("Erreur de fouille", err.message || "Impossible de contacter n8n.", "error");
        feedback.className = "text-3xs font-semibold text-center text-blood";
        feedback.textContent = "Erreur de connexion avec n8n.";
    } finally {
        savePersistedState();
        renderPlayerDashboard(player);
    }
}

/* ==========================================================================
   AUTHENTICATION LOGIC
   ========================================================================== */
async function handleRequestOtp(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim().toLowerCase();
    
    if (!email) return;

    const requestBtn = document.getElementById('requestOtpBtn');
    requestBtn.setAttribute('disabled', 'true');
    requestBtn.innerHTML = `<i class="fa-solid fa-spinner animate-spin"></i> Envoi en cours...`;

    addLiveLog(`Demande de code OTP pour l'adresse : ${email}...`);

    try {
        const webhookUrl = appState.n8nBaseUrl ? `${appState.n8nBaseUrl}/webhook/mp-request-otp` : '';
        
        if (webhookUrl) {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email })
            });
            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.error || "Erreur lors de la requete de l'OTP.");
            }
        } else {
            // Local simulation
            await sleep(1500); // Simulate network latency

            const isOrga = email === 'organisateur@email.com';
            const isGuest = appState.players.some(p => p.email === email);

            if (!isOrga && (!appState.session || appState.players.length === 0)) {
                throw new Error("Aucune session n'est active. Demandez à l'organisateur d'initialiser la partie.");
            }

            if (!isOrga && !isGuest) {
                throw new Error("Cette adresse e-mail n'est pas répertoriée pour cette session.");
            }
            
            const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
            appState.mockOtp = otpCode;
        }

        appState.pendingEmail = email;
        appState.loginStep = 'otp';
        savePersistedState();
        routeApp();

        if (!webhookUrl) {
            showToast("Code de test généré !", `Le code envoyé par mail est : ${appState.mockOtp}`, "warning");
            addLiveLog(`[Simulation Auth] Code OTP généré pour ${email} : ${appState.mockOtp}`);
        } else {
            showToast("Code envoyé !", "Veuillez vérifier votre boîte de réception.", "success");
        }

    } catch(err) {
        console.error(err);
        showToast("Erreur de connexion", err.message || "Impossible d'envoyer le code.", "error");
    } finally {
        requestBtn.removeAttribute('disabled');
        requestBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i> Obtenir un code de connexion`;
    }
}

async function handleLogin(e) {
    e.preventDefault();
    const otp = document.getElementById('loginOtp').value.trim();
    const email = appState.pendingEmail;

    if (!email || !otp) return;

    const submitBtn = e.target.querySelector('button[type="submit"]');
    submitBtn.setAttribute('disabled', 'true');
    submitBtn.innerHTML = `<i class="fa-solid fa-spinner animate-spin"></i> Vérification...`;

    try {
        const verifyWebhookUrl = appState.n8nBaseUrl ? `${appState.n8nBaseUrl}/webhook/mp-verify-otp` : '';
        let role = '';

        if (verifyWebhookUrl) {
            const response = await fetch(verifyWebhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: email, otp: otp })
            });
            if (!response.ok) {
                const errData = await response.json();
                throw new Error(errData.error || "Code OTP invalide.");
            }
            const data = await response.json();
            role = data.role;
            if (data.playerDetails) {
                const playerIndex = appState.players.findIndex(p => p.email === email);
                if (playerIndex !== -1) {
                    appState.players[playerIndex].roleName = data.playerDetails.roleName || appState.players[playerIndex].roleName;
                    appState.players[playerIndex].avatarUrl = data.playerDetails.avatarUrl || appState.players[playerIndex].avatarUrl;
                    appState.players[playerIndex].actionPoints = data.playerDetails.actionPoints !== undefined && data.playerDetails.actionPoints !== null ? Number(data.playerDetails.actionPoints) : appState.players[playerIndex].actionPoints;
                }
            }
        } else {
            await sleep(1000);
            
            if (otp !== appState.mockOtp && otp !== "123456") {
                throw new Error("Le code de connexion est incorrect ou expiré.");
            }
            
            role = email === 'organisateur@email.com' ? 'organizer' : 'player';
        }

        appState.currentUser = { email: email, role: role };
        appState.loginStep = 'email';
        appState.pendingEmail = '';
        appState.mockOtp = '';
        savePersistedState();
        
        document.getElementById('loginEmail').value = '';
        document.getElementById('loginOtp').value = '';

        routeApp();
        showToast("Connexion réussie", `Bienvenue sur votre espace.`, "success");
        addLiveLog(`${email} connecté avec succès via OTP.`);

    } catch(err) {
        console.error(err);
        showToast("Code invalide", err.message || "Erreur de validation.", "error");
        document.getElementById('loginOtp').value = '';
        document.getElementById('loginOtp').focus();
    } finally {
        submitBtn.removeAttribute('disabled');
        submitBtn.innerHTML = `<i class="fa-solid fa-right-to-bracket"></i> Valider et se connecter`;
    }
}

function handleBackToEmail() {
    appState.loginStep = 'email';
    appState.pendingEmail = '';
    appState.mockOtp = '';
    savePersistedState();
    routeApp();
}

function logout() {
    appState.currentUser = null;
    appState.loginStep = 'email';
    appState.pendingEmail = '';
    appState.mockOtp = '';
    appState.orgaView = 'landing'; // Reset dashboard view
    savePersistedState();
    
    document.getElementById('loginEmail').value = '';
    document.getElementById('loginOtp').value = '';
    
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
    document.getElementById('requestOtpBtn').addEventListener('click', handleRequestOtp);
    document.getElementById('backToEmailBtn').addEventListener('click', handleBackToEmail);
    document.getElementById('logoutBtn').addEventListener('click', logout);
    
    // Organizer Navigation Links
    const orgaCreateSessionBtn = document.getElementById('orgaCreateSessionBtn');
    if (orgaCreateSessionBtn) {
        orgaCreateSessionBtn.addEventListener('click', () => {
            appState.orgaView = 'create';
            const modeInput = document.getElementById('scenarioMode');
            if (modeInput) modeInput.value = ''; // Reset option initially
            savePersistedState();
            renderOrganizerDashboard();
        });
    }

    const orgaActiveSessionBtn = document.getElementById('orgaActiveSessionBtn');
    if (orgaActiveSessionBtn) {
        orgaActiveSessionBtn.addEventListener('click', () => {
            appState.orgaView = 'active';
            savePersistedState();
            renderOrganizerDashboard();
        });
    }

    const orgaBackToLandingBtn = document.getElementById('orgaBackToLandingBtn');
    if (orgaBackToLandingBtn) {
        orgaBackToLandingBtn.addEventListener('click', () => {
            appState.orgaView = 'landing';
            savePersistedState();
            renderOrganizerDashboard();
        });
    }

    const orgaActiveBackToLandingBtn = document.getElementById('orgaActiveBackToLandingBtn');
    if (orgaActiveBackToLandingBtn) {
        orgaActiveBackToLandingBtn.addEventListener('click', () => {
            appState.orgaView = 'landing';
            savePersistedState();
            renderOrganizerDashboard();
        });
    }

    // Wizard Scenario Options Cards
    const orgaBtnCreateScenarioOption = document.getElementById('orgaBtnCreateScenarioOption');
    if (orgaBtnCreateScenarioOption) {
        orgaBtnCreateScenarioOption.addEventListener('click', () => {
            const modeInput = document.getElementById('scenarioMode');
            if (modeInput) modeInput.value = 'create';
            savePersistedState();
            renderOrganizerDashboard();
        });
    }

    const orgaBtnSelectScenarioOption = document.getElementById('orgaBtnSelectScenarioOption');
    if (orgaBtnSelectScenarioOption) {
        orgaBtnSelectScenarioOption.addEventListener('click', () => {
            const modeInput = document.getElementById('scenarioMode');
            if (modeInput) modeInput.value = 'select';
            savePersistedState();
            renderOrganizerDashboard();
        });
    }

    // Organizer Forms (Unified Panel)
    const unifiedForm = document.getElementById('unifiedSessionForm');
    if (unifiedForm) unifiedForm.addEventListener('submit', handleUnifiedSessionSubmit);

    const resetBtn = document.getElementById('resetSessionBtn');
    if (resetBtn) resetBtn.addEventListener('click', handleResetSession);
    
    // Onboarding Form
    document.getElementById('onboardingForm').addEventListener('submit', handlePlayerOnboarding);
    
    // Player Gameplay trigger
    document.getElementById('searchRoomBtn').addEventListener('click', handleRoomSearch);
}

window.addEventListener('DOMContentLoaded', init);
