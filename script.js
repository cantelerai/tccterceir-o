/***********************
 * Dados iniciais (padrão)
 ***********************/
const defaultData = {
    heroTitle: "Igreja Assembleia de Deus - Gralha Azul",
    address: "Rua Nossa Senhora do Perpétuo Socorro, 322 - Bairro Costeira - Araucária",
    phone: "(41) 999601251",
    email: "igrejaassembleiaaraucaria@gmail.com",
    pix: "116.796.689-94",
    aboutTitle: "Nossa História",
    aboutSubtitle: "Conheça um pouco sobre nossa igreja e nossa missão",
    aboutText1: "A Igreja Assembleia de Deus em Araucária tem como missão servir a comunidade local, pregando o Evangelho de Jesus Cristo e promovendo o crescimento espiritual de seus membros.",
    aboutText2: "Nossa congregação está localizada no Bairro Costeira e temos orgulho de fazer parte desta comunidade há vários anos.",
    aboutText3: "Estamos comprometidos com os valores cristãos e com o bem-estar espiritual de todos que buscam a Deus.",
    ministriesTitle: "Nossos Ministérios",
    ministriesSubtitle: "Conheça as diferentes formas de se conectar e servir em nossa comunidade",
    ministries: [
        { id: 1, name: "Ministério de Acolhimento", description: "Voltado para receber novos membros e integrá-los à comunidade.", icon: "fas fa-hands-helping" },
        { id: 2, name: "Ministério de Louvor", description: "Responsável pela música e adoração em nossos cultos.", icon: "fas fa-music" },
        { id: 3, name: "Ministério Social", description: "Desenvolve projetos de assistência e apoio à comunidade local.", icon: "fas fa-hands" }
    ],
    eventsTitle: "Próximos Eventos",
    eventsSubtitle: "Participe de nossas celebrações e atividades",
    events: [
        { id: 1, day: "20", month: "Set", title: "Culto da Unaadar", time: "19:00 - 21:30", location: "Igreja Assembleia Sede" },
        { id: 2, day: "03 a 05", month: "Out", title: "Congresso Unaadar", time: "19:00 - 21:30", location: "Igreja Assembleia Sede" },
        { id: 3, day: "12", month: "Out", title: "Congresso Kids", time: "09:00 - 16:00", location: "Igreja Assembleia Gralha Azul" }
    ],
    sermonsTitle: "Pregações Recentes",
    sermonsSubtitle: "Assista ou ouça nossas mensagens mais recentes",
    sermons: [
        { id: 1, title: "A Fé em Tempos de Incerteza", pastor: "Pastor João Silva", date: "18 de Junho, 2023", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", url: "https://youtu.be/1OSIXF3MA7k?feature=shared", description: "Uma mensagem sobre como manter a fé em meio às adversidades da vida." },
        { id: 2, title: "O Poder da Oração", pastor: "Pastora Maria Santos", date: "11 de Junho, 2023", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", url: "https://youtu.be/1OSIXF3MA7k?feature=shared", description: "Entenda como a oração pode transformar sua vida e suas circunstâncias." }
    ],
    contactTitle: "Entre em Contato",
    contactSubtitle: "Estamos à disposição para responder suas perguntas",
    donationTitle: "Faça uma Doação",
    donationSubtitle: "Suporte nossa missão e ajude a manter nosso trabalho",
    donationText: "Sua doação é fundamental para mantermos nossas atividades e projetos sociais. Com seu apoio, podemos continuar espalhando a palavra de Deus e ajudando nossa comunidade.",
    pixDescription: "Faça uma doação rápida e segura via PIX",
    presentialDonationText: "Você também pode fazer sua doação pessoalmente em nossa igreja",
    serviceTimes: `Segunda: 20h00 (Oração)
Terça-feira: 20h00 (Culto de ensino Sede)
Quarta-feira: 19h00 (Ensaio irmãs)
Quinta-feira: 19h00 (Ensaio irmãos)
Sexta-feira: 20h00 (Culto de ensino)
Domingo: 09h00 (EBD)
Domingo: 19h00 (Culto)`,
    emails: [
        { id: 1, name: "João Silva", email: "joao.silva@email.com", category: "membro", date: "2023-10-15", subscribed: true },
        { id: 2, name: "Maria Santos", email: "maria.santos@email.com", category: "visitante", date: "2023-10-16", subscribed: true },
        { id: 3, name: "Pedro Oliveira", email: "pedro.oliveira@email.com", category: "voluntario", date: "2023-10-17", subscribed: true }
    ]
};

const STORAGE_KEY = 'churchData_v3';
const AUTH_KEY = 'isAdmin_v1';

/***********************
 * Utilitários
 ***********************/
function loadData() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
        return JSON.parse(JSON.stringify(defaultData));
    }
    try {
        return JSON.parse(raw);
    } catch (e) {
        console.error('Erro ao parsear dados, restaurando padrão.', e);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultData));
        return JSON.parse(JSON.stringify(defaultData));
    }
}

function saveData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function isAdmin() {
    return localStorage.getItem(AUTH_KEY) === "true";
}

function setAdmin(flag) {
    localStorage.setItem(AUTH_KEY, flag ? "true" : "false");
}

function uid() {
    return Math.floor(Math.random() * 1000000);
}

/***********************
 * Renderizadores
 ***********************/
function renderAll() {
    const data = loadData();
    
    // Renderizar conteúdo textual
    document.getElementById('heroTitle').textContent = data.heroTitle;
    document.getElementById('addressText').textContent = data.address;
    document.getElementById('aboutTitle').textContent = data.aboutTitle;
    document.getElementById('aboutSubtitle').textContent = data.aboutSubtitle;
    document.getElementById('aboutText1').textContent = data.aboutText1;
    document.getElementById('aboutText2').textContent = data.aboutText2;
    document.getElementById('aboutText3').textContent = data.aboutText3;
    document.getElementById('ministriesTitle').textContent = data.ministriesTitle;
    document.getElementById('ministriesSubtitle').textContent = data.ministriesSubtitle;
    document.getElementById('eventsTitle').textContent = data.eventsTitle;
    document.getElementById('eventsSubtitle').textContent = data.eventsSubtitle;
    document.getElementById('sermonsTitle').textContent = data.sermonsTitle;
    document.getElementById('sermonsSubtitle').textContent = data.sermonsSubtitle;
    document.getElementById('contactTitle').textContent = data.contactTitle;
    document.getElementById('contactSubtitle').textContent = data.contactSubtitle;
    document.getElementById('donationTitle').textContent = data.donationTitle;
    document.getElementById('donationSubtitle').textContent = data.donationSubtitle;
    document.getElementById('donationText').textContent = data.donationText;
    document.getElementById('pixDescription').textContent = data.pixDescription;
    document.getElementById('presentialDonationText').textContent = data.presentialDonationText;
    document.getElementById('pixKey').textContent = data.pix;
    
    // Renderizar elementos dinâmicos
    renderMinistries(data.ministries);
    renderEvents(data.events);
    renderSermons(data.sermons);
    renderContact(data);
}

function renderMinistries(ministries) {
    const grid = document.getElementById('ministriesGrid');
    grid.innerHTML = '';
    ministries.forEach(min => {
        const card = document.createElement('div');
        card.className = 'feature-card';
        card.innerHTML = `
            <div class="feature-icon"><i class="${min.icon}"></i></div>
            <div class="feature-content">
                <h3>${min.name}</h3>
                <p>${min.description}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderEvents(events) {
    const grid = document.getElementById('eventsGrid');
    grid.innerHTML = '';
    events.forEach(ev => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
            <div class="event-date">
                <h3>${ev.day}</h3>
                <span>${ev.month}</span>
            </div>
            <div class="event-content">
                <h3>${ev.title}</h3>
                <p><i class="far fa-clock"></i> ${ev.time || ''}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${ev.location || ''}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderSermons(sermons) {
    const list = document.getElementById('sermonList');
    list.innerHTML = '';
    sermons.forEach(s => {
        const card = document.createElement('div');
        card.className = 'sermon-card';
        card.innerHTML = `
            <img src="${s.img}" alt="${s.title}" class="sermon-img">
            <div class="sermon-content">
                <h3>${s.title}</h3>
                <p><strong>${s.pastor}</strong> | ${s.date}</p>
                <p>${s.description}</p>
                <div class="sermon-actions">
                    <a href="${s.url || '#'}" target="_blank" class="btn"><i class="fas fa-play"></i> Assistir</a>
                </div>
            </div>
        `;
        list.appendChild(card);
    });
}

function renderContact(data) {
    const el = document.getElementById('contactInfo');
    el.innerHTML = `
        <h3>Informações de Contato</h3>
        <p><i class="fas fa-map-marker-alt"></i> ${data.address}</p>
        <p><i class="fas fa-phone"></i> ${data.phone}</p>
        <p><i class="fas fa-envelope"></i> ${data.email}</p>
        
        <h3>Horários de Culto</h3>
        <div>${data.serviceTimes.replace(/\n/g, '<br>')}</div>
    `;
}

/***********************
 * Gerenciamento de Emails
 ***********************/
function renderEmails() {
    const data = loadData();
    const emailsList = document.getElementById('emailsList');
    const searchTerm = document.getElementById('searchEmail').value.toLowerCase();
    const filterCategory = document.getElementById('filterCategory').value;
    
    // Filtrar emails
    let filteredEmails = data.emails || [];
    if (searchTerm) {
        filteredEmails = filteredEmails.filter(email => 
            email.name.toLowerCase().includes(searchTerm) || 
            email.email.toLowerCase().includes(searchTerm)
        );
    }
    if (filterCategory) {
        filteredEmails = filteredEmails.filter(email => email.category === filterCategory);
    }
    
    // Atualizar estatísticas
    document.getElementById('totalEmails').textContent = data.emails ? data.emails.length : 0;
    document.getElementById('newThisWeek').textContent = data.emails ? 
        data.emails.filter(email => isThisWeek(new Date(email.date))).length : 0;
    document.getElementById('subscribed').textContent = data.emails ? 
        data.emails.filter(email => email.subscribed).length : 0;
    
    // Renderizar lista
    emailsList.innerHTML = '';
    if (filteredEmails.length === 0) {
        emailsList.innerHTML = '<p class="muted" style="text-align:center; padding:20px;">Nenhum email encontrado</p>';
        return;
    }
    
    filteredEmails.forEach(email => {
        const emailItem = document.createElement('div');
        emailItem.className = 'email-item';
        emailItem.innerHTML = `
            <div class="email-info">
                <div class="email-name">${email.name}</div>
                <div class="email-address">${email.email}</div>
            </div>
            <div style="display:flex; align-items:center; gap:10px;">
                <span class="email-category">${getCategoryLabel(email.category)}</span>
                <div class="email-actions">
                    <button class="btn btn-outline" onclick="editEmail(${email.id})" style="padding:4px 8px; font-size:0.8rem;">Editar</button>
                    <button class="btn btn-outline" onclick="deleteEmail(${email.id})" style="padding:4px 8px; font-size:0.8rem; background:#e53e3e; color:white;">Excluir</button>
                </div>
            </div>
        `;
        emailsList.appendChild(emailItem);
    });
}

function getCategoryLabel(category) {
    const labels = {
        'membro': 'Membro',
        'visitante': 'Visitante',
        'voluntario': 'Voluntário',
        'doador': 'Doador'
    };
    return labels[category] || category;
}

function isThisWeek(date) {
    const today = new Date();
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
    const endOfWeek = new Date(today.setDate(today.getDate() + 6));
    return date >= startOfWeek && date <= endOfWeek;
}

function addManualEmail() {
    const name = document.getElementById('newEmailName').value.trim();
    const email = document.getElementById('newEmailAddress').value.trim();
    const category = document.getElementById('newEmailCategory').value;
    
    if (!name || !email) {
        alert('Por favor, preencha nome e email.');
        return;
    }
    
    if (!validateEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }
    
    const data = loadData();
    if (!data.emails) data.emails = [];
    
    // Verificar se email já existe
    if (data.emails.some(e => e.email === email)) {
        alert('Este email já está cadastrado.');
        return;
    }
    
    const newEmail = {
        id: uid(),
        name: name,
        email: email,
        category: category,
        date: new Date().toISOString().split('T')[0],
        subscribed: true
    };
    
    data.emails.push(newEmail);
    saveData(data);
    
    // Limpar campos
    document.getElementById('newEmailName').value = '';
    document.getElementById('newEmailAddress').value = '';
    
    renderEmails();
    alert('Email adicionado com sucesso!');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function deleteEmail(id) {
    if (!confirm('Tem certeza que deseja excluir este email?')) return;
    
    const data = loadData();
    data.emails = data.emails.filter(email => email.id !== id);
    saveData(data);
    renderEmails();
    alert('Email excluído com sucesso!');
}

function editEmail(id) {
    const data = loadData();
    const email = data.emails.find(e => e.id === id);
    
    if (!email) return;
    
    const newName = prompt('Editar nome:', email.name);
    if (newName === null) return;
    
    const newCategory = prompt('Editar categoria (membro, visitante, voluntario, doador):', email.category);
    if (newCategory === null) return;
    
    email.name = newName.trim();
    email.category = newCategory.trim();
    
    saveData(data);
    renderEmails();
    alert('Email atualizado com sucesso!');
}

function exportEmails() {
    const data = loadData();
    const emails = data.emails || [];
    
    if (emails.length === 0) {
        alert('Não há emails para exportar.');
        return;
    }
    
    // Criar CSV
    let csv = 'Nome,Email,Categoria,Data,Inscrito\n';
    emails.forEach(email => {
        csv += `"${email.name}","${email.email}","${getCategoryLabel(email.category)}","${email.date}","${email.subscribed ? 'Sim' : 'Não'}"\n`;
    });
    
    // Criar arquivo para download
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'emails-igreja.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    alert(`Exportados ${emails.length} emails com sucesso!`);
}

/***********************
 * Admin panel: helpers para construir inputs dinamicamente
 ***********************/
function buildMinistryAdminRow(min) {
    const wrap = document.createElement('div');
    wrap.className = 'item-row';
    wrap.innerHTML = `
        <input type="text" data-field="name" value="${min.name}" placeholder="Nome do ministério">
        <input type="text" data-field="description" value="${min.description}" placeholder="Descrição">
        <input type="text" data-field="icon" value="${min.icon}" placeholder="Ícone (FontAwesome)">
        <button class="btn btn-outline btn-remove">Remover</button>
    `;
    wrap.querySelector('.btn-remove').addEventListener('click', () => wrap.remove());
    return wrap;
}

function buildEventAdminRow(ev) {
    const wrap = document.createElement('div');
    wrap.className = 'item-row';
    wrap.innerHTML = `
        <input type="text" data-field="day" value="${ev.day}" placeholder="Dia">
        <input type="text" data-field="month" value="${ev.month}" placeholder="Mês">
        <input type="text" data-field="title" value="${ev.title}" placeholder="Título">
        <input type="text" data-field="time" value="${ev.time || ''}" placeholder="Horário">
        <input type="text" data-field="location" value="${ev.location || ''}" placeholder="Local">
        <button class="btn btn-outline btn-remove">Remover</button>
    `;
    wrap.querySelector('.btn-remove').addEventListener('click', () => wrap.remove());
    return wrap;
}

function buildSermonAdminRow(s) {
    const wrap = document.createElement('div');
    wrap.className = 'item-row';
    wrap.innerHTML = `
        <input type="text" data-field="title" value="${s.title}" placeholder="Título">
        <input type="text" data-field="pastor" value="${s.pastor}" placeholder="Pastor">
        <input type="text" data-field="date" value="${s.date}" placeholder="Data">
        <input type="text" data-field="img" value="${s.img}" placeholder="URL da imagem">
        <input type="text" data-field="url" value="${s.url}" placeholder="URL do vídeo">
        <input type="text" data-field="description" value="${s.description}" placeholder="Descrição">
        <button class="btn btn-outline btn-remove">Remover</button>
    `;
    wrap.querySelector('.btn-remove').addEventListener('click', () => wrap.remove());
    return wrap;
}

function openAdminPanel() {
    document.getElementById('adminPanel').classList.add('show');
    document.getElementById('logoutBtn').style.display = 'inline-block';
    populateAdminFields();
}

function closeAdminPanel() {
    document.getElementById('adminPanel').classList.remove('show');
}

function populateAdminFields() {
    const data = loadData();
    
    // Conteúdo textual
    document.getElementById('adminHeroTitle').value = data.heroTitle;
    document.getElementById('adminAddress').value = data.address;
    document.getElementById('adminAboutTitle').value = data.aboutTitle;
    document.getElementById('adminAboutSubtitle').value = data.aboutSubtitle;
    document.getElementById('adminAboutText1').value = data.aboutText1;
    document.getElementById('adminAboutText2').value = data.aboutText2;
    document.getElementById('adminAboutText3').value = data.aboutText3;
    document.getElementById('adminMinistriesTitle').value = data.ministriesTitle;
    document.getElementById('adminMinistriesSubtitle').value = data.ministriesSubtitle;
    document.getElementById('adminDonationTitle').value = data.donationTitle;
    document.getElementById('adminDonationSubtitle').value = data.donationSubtitle;
    document.getElementById('adminDonationText').value = data.donationText;
    document.getElementById('adminPixDescription').value = data.pixDescription;
    document.getElementById('adminPresentialDonationText').value = data.presentialDonationText;
    
    // Ministérios
    const adminMinistriesList = document.getElementById('adminMinistriesList');
    adminMinistriesList.innerHTML = '';
    data.ministries.forEach(min => adminMinistriesList.appendChild(buildMinistryAdminRow(min)));
    
    // Eventos
    const adminEventsList = document.getElementById('adminEventsList');
    adminEventsList.innerHTML = '';
    data.events.forEach(ev => adminEventsList.appendChild(buildEventAdminRow(ev)));
    
    // Pregações
    const adminSermonList = document.getElementById('adminSermonList');
    adminSermonList.innerHTML = '';
    data.sermons.forEach(s => adminSermonList.appendChild(buildSermonAdminRow(s)));
    
    // Configurações
    document.getElementById('adminContactAddress').value = data.address;
    document.getElementById('adminPhone').value = data.phone;
    document.getElementById('adminEmail').value = data.email;
    document.getElementById('adminPix').value = data.pix;
    document.getElementById('adminServiceTimes').value = data.serviceTimes;
    
    // Emails
    renderEmails();
}

function collectAdminFieldsAndSave() {
    const data = loadData();

    // Coletar conteúdo textual
    data.heroTitle = document.getElementById('adminHeroTitle').value || data.heroTitle;
    data.address = document.getElementById('adminAddress').value || data.address;
    data.aboutTitle = document.getElementById('adminAboutTitle').value || data.aboutTitle;
    data.aboutSubtitle = document.getElementById('adminAboutSubtitle').value || data.aboutSubtitle;
    data.aboutText1 = document.getElementById('adminAboutText1').value || data.aboutText1;
    data.aboutText2 = document.getElementById('adminAboutText2').value || data.aboutText2;
    data.aboutText3 = document.getElementById('adminAboutText3').value || data.aboutText3;
    data.ministriesTitle = document.getElementById('adminMinistriesTitle').value || data.ministriesTitle;
    data.ministriesSubtitle = document.getElementById('adminMinistriesSubtitle').value || data.ministriesSubtitle;
    data.donationTitle = document.getElementById('adminDonationTitle').value || data.donationTitle;
    data.donationSubtitle = document.getElementById('adminDonationSubtitle').value || data.donationSubtitle;
    data.donationText = document.getElementById('adminDonationText').value || data.donationText;
    data.pixDescription = document.getElementById('adminPixDescription').value || data.pixDescription;
    data.presentialDonationText = document.getElementById('adminPresentialDonationText').value || data.presentialDonationText;
    
    // Coletar ministérios
    const ministryNodes = Array.from(document.getElementById('adminMinistriesList').querySelectorAll('.item-row'));
    const ministries = ministryNodes.map((node, idx) => {
        return {
            id: data.ministries[idx] ? data.ministries[idx].id || uid() : uid(),
            name: node.querySelector('[data-field="name"]').value || '',
            description: node.querySelector('[data-field="description"]').value || '',
            icon: node.querySelector('[data-field="icon"]').value || 'fas fa-hands-helping'
        };
    });
    
    // Coletar eventos
    const eventNodes = Array.from(document.getElementById('adminEventsList').querySelectorAll('.item-row'));
    const events = eventNodes.map((node, idx) => {
        return {
            id: data.events[idx] ? data.events[idx].id || uid() : uid(),
            day: node.querySelector('[data-field="day"]').value || '',
            month: node.querySelector('[data-field="month"]').value || '',
            title: node.querySelector('[data-field="title"]').value || '',
            time: node.querySelector('[data-field="time"]').value || '',
            location: node.querySelector('[data-field="location"]').value || ''
        };
    });

    // Coletar pregações
    const sermonNodes = Array.from(document.getElementById('adminSermonList').querySelectorAll('.item-row'));
    const sermons = sermonNodes.map((node, idx) => {
        return {
            id: data.sermons[idx] ? data.sermons[idx].id || uid() : uid(),
            title: node.querySelector('[data-field="title"]').value || '',
            pastor: node.querySelector('[data-field="pastor"]').value || '',
            date: node.querySelector('[data-field="date"]').value || '',
            img: node.querySelector('[data-field="img"]').value || '',
            url: node.querySelector('[data-field="url"]').value || '',
            description: node.querySelector('[data-field="description"]').value || ''
        };
    });

    // Coletar configurações
    data.address = document.getElementById('adminContactAddress').value || data.address;
    data.phone = document.getElementById('adminPhone').value || data.phone;
    data.email = document.getElementById('adminEmail').value || data.email;
    data.pix = document.getElementById('adminPix').value || data.pix;
    data.serviceTimes = document.getElementById('adminServiceTimes').value || data.serviceTimes;

    // Atualizar dados
    data.ministries = ministries;
    data.events = events;
    data.sermons = sermons;

    saveData(data);
    renderAll();
    alert('Alterações salvas com sucesso!');
}

function resetToDefault() {
    if (!confirm('Restaurar os dados padrões? Essa ação sobrescreverá as alterações atuais.')) return;
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(AUTH_KEY);
    const data = loadData();
    renderAll();
    populateAdminFields();
    alert('Dados restaurados para o padrão.');
}

/***********************
 * Login / autenticação (apenas front-end)
 ***********************/
// credenciais de exemplo (troque para algo seguro se for usar)
const ADMIN_CREDENTIALS = { email: 'admin@igreja.com', pass: '123456' };

// PIX copy
window.copyPixKey = function() {
    const pixKey = document.getElementById('pixKey').textContent;
    const textArea = document.createElement('textarea');
    textArea.value = pixKey;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Chave PIX copiada para a área de transferência!');
};

/***********************
 * Inicialização
 ***********************/
document.addEventListener('DOMContentLoaded', function() {
    // render inicial
    renderAll();

    // mobile menu
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    mobileMenuBtn.addEventListener('click', () => nav.classList.toggle('active'));
    document.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => nav.classList.remove('active')));

    // smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({ top: targetElement.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });

    // contact form behavior
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('contact_name').value.trim();
        const email = document.getElementById('contact_email').value.trim();
        const message = document.getElementById('contact_message').value.trim();
        
        if (name && email && message) {
            // Salvar email no banco de dados
            const data = loadData();
            if (!data.emails) data.emails = [];
            
            // Verificar se email já existe
            if (!data.emails.some(e => e.email === email)) {
                const newEmail = {
                    id: uid(),
                    name: name,
                    email: email,
                    category: 'visitante',
                    date: new Date().toISOString().split('T')[0],
                    subscribed: true
                };
                
                data.emails.push(newEmail);
                saveData(data);
            }
            
            alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
            contactForm.reset();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });

    // Admin modal open
    const openAdminBtn = document.getElementById('openAdminBtn');
    const loginModal = document.getElementById('loginModal');
    const submitLogin = document.getElementById('submitLogin');
    const cancelLogin = document.getElementById('cancelLogin');
    const adminPanel = document.getElementById('adminPanel');
    const logoutBtn = document.getElementById('logoutBtn');
    const closeAdminPanel = document.getElementById('closeAdminPanel');

    openAdminBtn.addEventListener('click', () => {
        // if já logado, abrir painel direto
        if (isAdmin()) {
            openAdminPanel();
            return;
        }
        loginModal.classList.add('show');
        loginModal.setAttribute('aria-hidden', 'false');
    });

    cancelLogin.addEventListener('click', () => {
        loginModal.classList.remove('show');
        loginModal.setAttribute('aria-hidden', 'true');
    });

    submitLogin.addEventListener('click', () => {
        const email = document.getElementById('adminEmailInput').value.trim();
        const pass = document.getElementById('adminPass').value.trim();
        if (email === ADMIN_CREDENTIALS.email && pass === ADMIN_CREDENTIALS.pass) {
            setAdmin(true);
            loginModal.classList.remove('show');
            loginModal.setAttribute('aria-hidden', 'true');
            openAdminPanel();
            populateAdminFields();
            alert('Login bem-sucedido. Seja bem-vindo(a), administrador(a).');
            // limpar campos
            document.getElementById('adminEmailInput').value = '';
            document.getElementById('adminPass').value = '';
        } else {
            alert('Credenciais inválidas. Verifique e-mail e senha.');
        }
    });

    // CORREÇÃO: fechar painel admin
    closeAdminPanel.addEventListener('click', closeAdminPanel);

    // logout
    logoutBtn.addEventListener('click', function() {
        setAdmin(false);
        document.getElementById('logoutBtn').style.display = 'none';
        closeAdminPanel();
        alert('Você saiu da conta administrativa.');
    });

    // botões de adicionar item
    document.getElementById('addMinistryBtn').addEventListener('click', () => {
        const container = document.getElementById('adminMinistriesList');
        container.appendChild(buildMinistryAdminRow({ name: '', description: '', icon: 'fas fa-hands-helping' }));
    });
    
    document.getElementById('addEventBtn').addEventListener('click', () => {
        const container = document.getElementById('adminEventsList');
        container.appendChild(buildEventAdminRow({ day: '', month: '', title: '', time: '', location: '' }));
    });
    
    document.getElementById('addSermonBtn').addEventListener('click', () => {
        const container = document.getElementById('adminSermonList');
        container.appendChild(buildSermonAdminRow({ title: '', pastor: '', date: '', img: '', url: '', description: '' }));
    });

    // salvar alterações
    document.getElementById('saveAllBtn').addEventListener('click', collectAdminFieldsAndSave);

    // restaurar
    document.getElementById('resetDataBtn').addEventListener('click', resetToDefault);

    // quando abrir o painel, mostrar botão logout
    if (isAdmin()) {
        document.getElementById('logoutBtn').style.display = 'inline-block';
    }

    // quando fechar modal clicando fora
    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.classList.remove('show');
            loginModal.setAttribute('aria-hidden', 'true');
        }
    });

    // Navegação entre abas do admin
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active de todas as abas
            document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));
            
            // Adiciona active à aba clicada
            this.classList.add('active');
            
            // Mostra o conteúdo correspondente
            const tabId = this.getAttribute('data-tab');
            document.getElementById(`admin${tabId.charAt(0).toUpperCase() + tabId.slice(1)}Tab`).classList.add('active');
            
            // Se for a aba de emails, renderizar emails
            if (tabId === 'emails') {
                renderEmails();
            }
        });
    });

    // Eventos para busca e filtro de emails
    document.getElementById('searchEmail').addEventListener('input', renderEmails);
    document.getElementById('filterCategory').addEventListener('change', renderEmails);

    // Se admin já está autenticado, mostrar painel reduzido botão logout
    if (isAdmin()) {
        // não abrir automaticamente, apenas mostrar que está logado
        document.getElementById('logoutBtn').style.display = 'inline-block';
    }
});