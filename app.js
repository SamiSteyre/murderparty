/* ==========================================================================
   STATE & CONFIGURATION
   ========================================================================== */

// Suspects data
const SUSPECTS = {
    "Mlle Rose": {
        name: "Mlle Rose",
        role: "Invitée Mystère",
        avatarClass: "bg-rose",
        avatarText: "MR",
        welcomeMessage: "Bonjour Détective. Que voulez-vous savoir ? Je n'ai absolument rien à me reprocher... Je passais juste la soirée dans le salon."
    },
    "Colonel Moutarde": {
        name: "Colonel Moutarde",
        role: "Militaire à la retraite",
        avatarClass: "bg-mustard",
        avatarText: "CM",
        welcomeMessage: "Détective. Allons droit au but, je n'aime pas perdre mon temps. J'étais dans la bibliothèque au moment du drame, je lisais un ouvrage historique."
    },
    "Madame Pervenche": {
        name: "Madame Pervenche",
        role: "Amie de longue date de la victime",
        avatarClass: "bg-periwinkle",
        avatarText: "MP",
        welcomeMessage: "C'est une tragédie épouvantable ! Je suis bouleversée... Qu'aimeriez-vous savoir ? J'étais dans la cuisine pour me préparer une tisane."
    },
    "Professeur Violet": {
        name: "Professeur Violet",
        role: "Scientifique excentrique",
        avatarClass: "bg-violet",
        avatarText: "PV",
        welcomeMessage: "Ah, l'enquêteur ! Fascinant processus que celui de la déduction. Posez vos questions, j'analysais des prélèvements dans mon bureau ambulant."
    }
};

// Default Configurations
const DEFAULT_CONFIG = {
    playerId: "Détective Adams",
    chatWebhook: "",
    clueWebhook: ""
};

// Application State
let state = {
    playerId: DEFAULT_CONFIG.playerId,
    chatWebhook: DEFAULT_CONFIG.chatWebhook,
    clueWebhook: DEFAULT_CONFIG.clueWebhook,
    activeSuspect: "Mlle Rose",
    chatHistories: {}, // Will store message arrays per suspect
    discoveredClues: [] // Discovered clues list
};

// Mock Clues for offline / test mode
const MOCK_CLUES_DB = {
    "ROUGE2026": {
        name: "Rouge à lèvres écarlate",
        description: "Un tube de rouge à lèvres de marque de luxe, retrouvé dissimulé derrière un canapé du grand salon. La teinte correspond précisément aux traces sur le verre brisé.",
        image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&auto=format&fit=crop&q=80"
    },
    "POISON": {
        name: "Fiole d'Arsenic",
        description: "Une petite bouteille en verre sombre avec une étiquette à tête de mort. Presque vide. Trouvée dans les tiroirs secrets du bureau.",
        image: "https://images.unsplash.com/photo-1607619056574-7b8f304b3c72?w=300&auto=format&fit=crop&q=80"
    },
    "BIBLIOTHEQUE": {
        name: "Empreintes de pas",
        description: "Des traces de pas boueuses menant de la fenêtre de la bibliothèque jusqu'au couloir principal.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&auto=format&fit=crop&q=80"
    }
};

// Mock Replies for offline / test mode
const MOCK_REPLIES = {
    "Mlle Rose": [
        "Le Colonel Moutarde ? Il me semble très nerveux ce soir, vous ne trouvez pas ?",
        "Je n'ai pas vu le Professeur Violet depuis le début du dîner.",
        "Le propriétaire avait beaucoup d'ennemis... Mais je n'ai aucune raison de lui vouloir du mal."
    ],
    "Colonel Moutarde": [
        "Madame Pervenche prétend être bouleversée, mais je l'ai vue ricaner dans le couloir.",
        "Mon passé militaire m'a appris à observer. Gardez un œil sur le Professeur.",
        "Je n'ai rien entendu d'inhabituel depuis la bibliothèque."
    ],
    "Madame Pervenche": [
        "Mlle Rose portait une robe splendide... Un peu trop voyante pour une soirée si intime, non ?",
        "Je suis sûre d'avoir entendu une dispute éclater près du bureau vers 21h30.",
        "Ne me regardez pas comme ça, je suis incapable de faire du mal à une mouche."
    ],
    "Professeur Violet": [
        "D'un point de vue purement scientifique, la victime a été exposée à un agent chimique rapide.",
        "Les alibis de chacun me semblent bien trop parfaits pour être honnêtes.",
        "Intéressant... Mais avez-vous analysé la fiole retrouvée ?"
    ]
};

/* ==========================================================================
   DOM ELEMENTS
   ========================================================================== */
const DOM = {
    // Header
    headerPlayerName: document.getElementById('headerPlayerName'),
    openSettingsBtn: document.getElementById('openSettingsBtn'),
    
    // Clue Panel
    clueForm: document.getElementById('clueForm'),
    clueCodeInput: document.getElementById('clueCodeInput'),
    clueSubmitFeedback: document.getElementById('clueSubmitFeedback'),
    cluesList: document.getElementById('cluesList'),
    
    // Interrogation Panel
    suspectsList: document.getElementById('suspectsList'),
    activeSuspectAvatar: document.getElementById('activeSuspectAvatar'),
    activeSuspectName: document.getElementById('activeSuspectName'),
    chatMessages: document.getElementById('chatMessages'),
    chatForm: document.getElementById('chatForm'),
    chatMessageInput: document.getElementById('chatMessageInput'),
    
    // Settings Modal
    settingsModal: document.getElementById('settingsModal'),
    settingsForm: document.getElementById('settingsForm'),
    settingsPlayerId: document.getElementById('settingsPlayerId'),
    settingsChatWebhook: document.getElementById('settingsChatWebhook'),
    settingsClueWebhook: document.getElementById('settingsClueWebhook'),
    closeSettingsBtn: document.getElementById('closeSettingsBtn'),
    cancelSettingsBtn: document.getElementById('cancelSettingsBtn')
};

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
function init() {
    loadSettings();
    initChatHistories();
    renderSuspects();
    renderClues();
    setupEventListeners();
    
    // Load default suspect
    selectSuspect(state.activeSuspect);
}

// Load configurations from localStorage
function loadSettings() {
    state.playerId = localStorage.getItem('mp_playerId') || DEFAULT_CONFIG.playerId;
    state.chatWebhook = localStorage.getItem('mp_chatWebhook') || DEFAULT_CONFIG.chatWebhook;
    state.clueWebhook = localStorage.getItem('mp_clueWebhook') || DEFAULT_CONFIG.clueWebhook;
    
    // Update UI badge
    DOM.headerPlayerName.textContent = state.playerId;
    
    // Load saved clues
    const savedClues = localStorage.getItem('mp_discoveredClues');
    if (savedClues) {
        try {
            state.discoveredClues = JSON.parse(savedClues);
        } catch(e) {
            state.discoveredClues = [];
        }
    }
}

// Set up welcome messages in histories
function initChatHistories() {
    Object.keys(SUSPECTS).forEach(suspectName => {
        state.chatHistories[suspectName] = [
            {
                type: 'system',
                content: `Vous commencez l'interrogatoire de ${suspectName}. Soyez perspicace.`
            },
            {
                type: 'incoming',
                content: SUSPECTS[suspectName].welcomeMessage,
                time: getFormattedTime()
            }
        ];
    });
}

/* ==========================================================================
   UI RENDERING FUNCTIONS
   ========================================================================== */

// Render suspect list in sidebar
function renderSuspects() {
    DOM.suspectsList.innerHTML = '';
    
    Object.values(SUSPECTS).forEach(suspect => {
        const isActive = suspect.name === state.activeSuspect;
        const item = document.createElement('div');
        item.className = `suspect-item ${isActive ? 'active' : ''}`;
        item.setAttribute('data-suspect', suspect.name);
        
        item.innerHTML = `
            <div class="avatar ${suspect.avatarClass}">${suspect.avatarText}</div>
            <div class="suspect-details">
                <div class="suspect-name">${suspect.name}</div>
                <div class="suspect-status">${isActive ? 'En cours' : 'Disponible'}</div>
            </div>
        `;
        
        item.addEventListener('click', () => selectSuspect(suspect.name));
        DOM.suspectsList.appendChild(item);
    });
}

// Render historical chat messages for active suspect
function renderActiveChat() {
    DOM.chatMessages.innerHTML = '';
    const messages = state.chatHistories[state.activeSuspect] || [];
    
    messages.forEach(msg => {
        appendMessageToDOM(msg);
    });
    
    scrollToBottom();
}

// Append message directly to DOM
function appendMessageToDOM(msg) {
    const msgDiv = document.createElement('div');
    
    if (msg.type === 'system') {
        msgDiv.className = 'message system-message';
        msgDiv.textContent = msg.content;
    } else {
        msgDiv.className = `message ${msg.type}`;
        msgDiv.innerHTML = `
            <div class="message-content">${escapeHTML(msg.content)}</div>
            <div class="message-time">${msg.time}</div>
        `;
    }
    
    DOM.chatMessages.appendChild(msgDiv);
}

// Render clues list
function renderClues() {
    DOM.cluesList.innerHTML = '';
    
    if (state.discoveredClues.length === 0) {
        DOM.cluesList.innerHTML = `
            <div class="empty-state">
                <i class="fa-solid fa-receipt empty-icon"></i>
                <p>Aucun indice n'a encore été analysé.</p>
                <p class="sub-text">Astuce: Entrez un code comme "ROUGE2026" ou "POISON" pour tester la démo.</p>
            </div>
        `;
        return;
    }
    
    state.discoveredClues.forEach(clue => {
        const card = document.createElement('div');
        card.className = 'clue-card';
        
        let imgHtml = '';
        if (clue.image) {
            imgHtml = `<img src="${clue.image}" alt="${clue.name}" class="clue-img">`;
        }
        
        card.innerHTML = `
            <div class="clue-card-header">
                <div class="clue-title">${escapeHTML(clue.name)}</div>
                <div class="clue-badge">Validé</div>
            </div>
            <div class="clue-desc">${escapeHTML(clue.description)}</div>
            ${imgHtml}
        `;
        
        DOM.cluesList.appendChild(card);
    });
}

/* ==========================================================================
   USER ACTIONS / HANDLERS
   ========================================================================== */

// Switch suspect chat
function selectSuspect(suspectName) {
    if (!SUSPECTS[suspectName]) return;
    
    state.activeSuspect = suspectName;
    
    // Update Sidebar CSS
    document.querySelectorAll('.suspect-item').forEach(item => {
        const name = item.getAttribute('data-suspect');
        if (name === suspectName) {
            item.classList.add('active');
            item.querySelector('.suspect-status').textContent = 'En cours';
        } else {
            item.classList.remove('active');
            item.querySelector('.suspect-status').textContent = 'Disponible';
        }
    });
    
    // Update Chat Header
    const s = SUSPECTS[suspectName];
    DOM.activeSuspectName.textContent = s.name;
    DOM.activeSuspectAvatar.textContent = s.avatarText;
    DOM.activeSuspectAvatar.className = `avatar ${s.avatarClass}`;
    document.querySelector('.suspect-role').textContent = `Rôle : ${s.role}`;
    
    // Render Chat
    renderActiveChat();
}

// Send Chat Message to suspect
async function handleSendMessage(e) {
    e.preventDefault();
    const text = DOM.chatMessageInput.value.trim();
    if (!text) return;
    
    DOM.chatMessageInput.value = '';
    
    const timeNow = getFormattedTime();
    const userMsg = { type: 'outgoing', content: text, time: timeNow };
    
    // Push and display
    state.chatHistories[state.activeSuspect].push(userMsg);
    appendMessageToDOM(userMsg);
    scrollToBottom();
    
    // Show typing indicator
    showTypingIndicator();
    
    try {
        let replyText = "";
        
        if (state.chatWebhook) {
            // Integration Node
            const response = await fetch(state.chatWebhook, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    suspectId: state.activeSuspect,
                    message: text,
                    playerId: state.playerId
                })
            });
            
            if (!response.ok) throw new Error("Webhook Error");
            const data = await response.json();
            // Handle n8n response format. Assuming { output: "..." } or { text: "..." } or simple string
            replyText = data.output || data.text || data.reply || (typeof data === 'string' ? data : JSON.stringify(data));
        } else {
            // Mock Fallback
            await sleep(1500); // Simulate network latency
            const replies = MOCK_REPLIES[state.activeSuspect];
            replyText = replies[Math.floor(Math.random() * replies.length)] + " *(Mode Démo : Configurez le Webhook n8n dans les paramètres)*";
        }
        
        // Hide typing indicator and append response
        hideTypingIndicator();
        const suspectMsg = { type: 'incoming', content: replyText, time: getFormattedTime() };
        state.chatHistories[state.activeSuspect].push(suspectMsg);
        appendMessageToDOM(suspectMsg);
        scrollToBottom();
        
    } catch(err) {
        console.error(err);
        hideTypingIndicator();
        
        const errorMsg = { 
            type: 'incoming', 
            content: "Le suspect refuse de répondre. (Erreur de connexion au Webhook n8n. Veuillez vérifier l'URL et l'état du serveur n8n).", 
            time: getFormattedTime() 
        };
        state.chatHistories[state.activeSuspect].push(errorMsg);
        appendMessageToDOM(errorMsg);
        scrollToBottom();
    }
}

// Clue Submission
async function handleClueSubmit(e) {
    e.preventDefault();
    const code = DOM.clueCodeInput.value.trim().toUpperCase();
    if (!code) return;
    
    DOM.clueCodeInput.value = '';
    showFeedback("Analyse du code en cours...", "pending");
    
    // Check if we already found it locally
    const alreadyFound = state.discoveredClues.find(c => c.code === code);
    if (alreadyFound) {
        showFeedback("Cet indice a déjà été répertorié dans votre carnet.", "error");
        return;
    }
    
    try {
        let newClue = null;
        
        if (state.clueWebhook) {
            // Live integration
            const response = await fetch(state.clueWebhook, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ code: code, playerId: state.playerId })
            });
            
            if (!response.ok) throw new Error("Code non reconnu ou erreur de serveur.");
            const data = await response.json();
            
            // Assume webhook returns { name, description, image }
            if (data && data.name) {
                newClue = {
                    code: code,
                    name: data.name,
                    description: data.description || "Aucune description fournie.",
                    image: data.image || ""
                };
            } else {
                throw new Error("L'indice renvoyé par le webhook est incomplet.");
            }
        } else {
            // Mock Offline database check
            await sleep(1000);
            if (MOCK_CLUES_DB[code]) {
                newClue = {
                    code: code,
                    ...MOCK_CLUES_DB[code]
                };
            }
        }
        
        if (newClue) {
            state.discoveredClues.unshift(newClue); // Add to beginning
            localStorage.setItem('mp_discoveredClues', JSON.stringify(state.discoveredClues));
            renderClues();
            showFeedback(`🔍 Succès ! Indice trouvé : ${newClue.name}`, "success");
        } else {
            showFeedback("Code incorrect. Cet indice n'existe pas.", "error");
        }
        
    } catch(err) {
        console.error(err);
        showFeedback("Erreur de connexion au Webhook d'indice n8n.", "error");
    }
}

/* ==========================================================================
   SETTINGS MODAL LOGIC
   ========================================================================== */
function openSettings() {
    DOM.settingsPlayerId.value = state.playerId;
    DOM.settingsChatWebhook.value = state.chatWebhook;
    DOM.settingsClueWebhook.value = state.clueWebhook;
    DOM.settingsModal.classList.add('open');
}

function closeSettings() {
    DOM.settingsModal.classList.remove('open');
}

function handleSaveSettings(e) {
    e.preventDefault();
    
    state.playerId = DOM.settingsPlayerId.value.trim() || DEFAULT_CONFIG.playerId;
    state.chatWebhook = DOM.settingsChatWebhook.value.trim();
    state.clueWebhook = DOM.settingsClueWebhook.value.trim();
    
    localStorage.setItem('mp_playerId', state.playerId);
    localStorage.setItem('mp_chatWebhook', state.chatWebhook);
    localStorage.setItem('mp_clueWebhook', state.clueWebhook);
    
    DOM.headerPlayerName.textContent = state.playerId;
    
    closeSettings();
    
    // Add system message about settings updated
    const updateMsg = {
        type: 'system',
        content: `Configuration mise à jour. Nom du Détective réglé sur "${state.playerId}".`
    };
    state.chatHistories[state.activeSuspect].push(updateMsg);
    appendMessageToDOM(updateMsg);
    scrollToBottom();
}

/* ==========================================================================
   HELPERS & EVENT LISTENERS
   ========================================================================== */

function setupEventListeners() {
    // Chat Form Submit
    DOM.chatForm.addEventListener('submit', handleSendMessage);
    
    // Clue Form Submit
    DOM.clueForm.addEventListener('submit', handleClueSubmit);
    
    // Settings actions
    DOM.openSettingsBtn.addEventListener('click', openSettings);
    DOM.closeSettingsBtn.addEventListener('click', closeSettings);
    DOM.cancelSettingsBtn.addEventListener('click', closeSettings);
    DOM.settingsForm.addEventListener('submit', handleSaveSettings);
    
    // Close modal on click outside content
    window.addEventListener('click', (e) => {
        if (e.target === DOM.settingsModal) {
            closeSettings();
        }
    });
}

function showTypingIndicator() {
    const indicator = document.createElement('div');
    indicator.className = 'message incoming typing-container';
    indicator.innerHTML = `
        <div class="typing-indicator">
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
            <div class="typing-dot"></div>
        </div>
    `;
    DOM.chatMessages.appendChild(indicator);
    scrollToBottom();
}

function hideTypingIndicator() {
    const container = document.querySelector('.typing-container');
    if (container) {
        container.remove();
    }
}

function showFeedback(text, type) {
    DOM.clueSubmitFeedback.textContent = text;
    DOM.clueSubmitFeedback.className = 'feedback-message';
    
    if (type === 'success') DOM.clueSubmitFeedback.classList.add('feedback-success');
    if (type === 'error') DOM.clueSubmitFeedback.classList.add('feedback-error');
}

function getFormattedTime() {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function scrollToBottom() {
    DOM.chatMessages.scrollTop = DOM.chatMessages.scrollHeight;
}

// Start the app
window.addEventListener('DOMContentLoaded', init);
