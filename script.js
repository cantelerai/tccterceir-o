// ===============================================
// 1. CONFIGURAÇÃO SUPABASE (SEM IMPORT)
// ===============================================

// Supabase já está carregado via <script> no HTML
const SUPABASE_URL = 'https://xskasveyyprxuuilkavit.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhza2FzdnNleXB2eHV1bGtldmlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyOTEyODgsImV4cCI6MjA3Mzg2NzI4OH0.QMJOGkErNQPhW0ZnRKc6fC5f7Wxze68GnW7hf9lmMXo';

// Cria o cliente Supabase
const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
console.log("✅ Supabase Client Inicializado com sucesso.");

// ===============================================
// 2. FUNÇÃO PARA CARREGAR CONFIGURAÇÕES GERAIS (site_config)
// ===============================================
async function carregarConfiguracoes() {
    try {
        const { data: configData, error } = await supabase
            .from('site_config')
            .select('key, value');

        if (error) throw error;

        const config = configData.reduce((acc, item) => {
            acc[item.key] = item.value;
            return acc;
        }, {});
        
        const mappings = [
            { id: 'hero-title', key: 'heroTitle', type: 'text' },
            { id: 'about-title', key: 'aboutTitle', type: 'text' },
            { id: 'about-text-1', key: 'aboutText1', type: 'text' },
            { id: 'about-text-2', key: 'aboutText2', type: 'text' }, 
            { id: 'about-text-3', key: 'aboutText3', type: 'text' },
            { id: 'contact-phone', key: 'phone', type: 'text' },
            { id: 'footer-address', key: 'address', type: 'text' },
            { id: 'service-times-list', key: 'serviceTimes', type: 'html' } 
        ];

        mappings.forEach(map => {
            const element = document.getElementById(map.id);
            const value = config[map.key];

            if (element && value) {
                if (map.type === 'html') {
                    element.innerHTML = value.replace(/\n/g, '<br>');
                } else {
                    element.textContent = value;
                }
            }
        });
    } catch (err) {
        console.error('❌ Erro ao carregar configurações:', err);
    }
}

// ===============================================
// 3. FUNÇÃO PARA CARREGAR E EXIBIR EVENTOS
// ===============================================
async function carregarEventos() {
    const eventsListContainer = document.getElementById('events-list-container');
    if (!eventsListContainer) return;

    try {
        const { data: events, error } = await supabase
            .from('events')
            .select('id, event_datetime, title, location') 
            .gte('event_datetime', new Date().toISOString()) 
            .order('event_datetime', { ascending: true })
            .limit(5);

        if (error) throw error;

        if (!events || events.length === 0) {
            eventsListContainer.innerHTML = '<p>Não há eventos futuros programados no momento.</p>';
            return;
        }

        let htmlContent = '';
        events.forEach(event => {
            const date = new Date(event.event_datetime);
            const day = date.getDate().toString().padStart(2, '0'); 
            const month = new Intl.DateTimeFormat('pt-BR', { month: 'short' }).format(date).toUpperCase();
            const time = date.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
            const safeTitle = event.title.replace(/'/g, "\\'"); 

            htmlContent += `
                <div class="col-lg-4 col-md-6 mb-4">
                    <div class="event-item p-3 border rounded shadow-sm">
                        <div class="event-date">
                            <span class="day">${day}</span>
                            <span class="month">${month}</span>
                        </div>
                        <div class="event-details">
                            <h4 class="event-title">${event.title}</h4>
                            <p class="event-meta mb-2">
                                <i class="fas fa-clock"></i> ${time} | 
                                <i class="fas fa-map-marker-alt"></i> ${event.location}
                            </p>
                            <button class="btn btn-sm btn-success mt-2" 
                                    onclick="iniciarInscricao(${event.id}, '${safeTitle}')">
                                Quero me inscrever
                            </button>
                        </div>
                    </div>
                </div>
            `;
        });

        eventsListContainer.innerHTML = htmlContent;

    } catch (err) {
        console.error('❌ Erro ao carregar eventos:', err);
        eventsListContainer.innerHTML = '<p class="text-danger">Erro ao carregar a lista de eventos.</p>';
    }
}

// ===============================================
// 4. FUNÇÃO PARA INICIALIZAR A INSCRIÇÃO 
// ===============================================
function iniciarInscricao(eventId, eventTitle) {
    const eventIdInput = document.getElementById('event-id-input');
    const displayElement = document.getElementById('evento-selecionado-display');
    const formElement = document.getElementById('inscricao-form');
    
    if (eventIdInput && displayElement) {
        eventIdInput.value = eventId;
        displayElement.innerHTML = `Você está se inscrevendo para o evento: <strong>${eventTitle}</strong>.`;
        displayElement.classList.remove('alert-info', 'alert-success', 'alert-danger');
        displayElement.classList.add('alert-success');
    }
    
    if (formElement) {
        formElement.scrollIntoView({ behavior: 'smooth' });
    }
}

// ===============================================
// 5. FUNÇÃO PARA PROCESSAR O ENVIO DO FORMULÁRIO
// ===============================================
async function fazerInscricao(event) {
    event.preventDefault(); 

    const form = document.getElementById('inscricao-form');
    const nome = document.getElementById('nome-inscrito').value.trim();
    const email = document.getElementById('email-inscrito').value.trim();
    const eventId = document.getElementById('event-id-input').value; 
    const messageElement = document.getElementById('form-message');

    if (!nome || !email || !eventId) {
        messageElement.innerHTML = '<span class="text-danger">Por favor, preencha seu nome, email e selecione um evento.</span>';
        return;
    }
    
    messageElement.innerHTML = '<span class="text-info">Enviando inscrição...</span>';

    try {
        const { error } = await supabase
            .from('inscricoes')
            .insert([{ name: nome, email: email, event_id: eventId }]);

        if (error) throw error;

        messageElement.innerHTML = '<span class="text-success">✅ Inscrição realizada com sucesso! Que Deus o(a) abençoe!</span>';
        form.reset(); 
        
        const display = document.getElementById('evento-selecionado-display');
        display.innerHTML = 'Selecione um evento clicando no botão "Quero me inscrever".';
        display.classList.remove('alert-success');
        display.classList.add('alert-info');

    } catch (err) {
        console.error('❌ Erro ao salvar inscrição:', err);
        messageElement.innerHTML = '<span class="text-danger">Erro ao enviar: tente novamente.</span>';
    }
}

// ===============================================
// 6. CHAMADA PRINCIPAL 
// ===============================================
document.addEventListener('DOMContentLoaded', () => {
    carregarConfiguracoes();
    carregarEventos();
    
    const form = document.getElementById('inscricao-form');
    if (form) {
        form.addEventListener('submit', fazerInscricao);
    }
});
