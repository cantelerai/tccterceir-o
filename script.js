/***********************
 * DADOS INICIAIS (PADRÃO)
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
        { 
            id: 1, 
            name: "Ministério de Acolhimento", 
            description: "Voltado para receber novos membros e integrá-los à comunidade.", 
            icon: "fas fa-hands-helping" 
        },
        { 
            id: 2, 
            name: "Ministério de Louvor", 
            description: "Responsável pela música e adoração em nossos cultos.", 
            icon: "fas fa-music" 
        },
        { 
            id: 3, 
            name: "Ministério Social", 
            description: "Desenvolve projetos de assistência e apoio à comunidade local.", 
            icon: "fas fa-hands" 
        },
        { 
            id: 4, 
            name: "Ministério Infantil", 
            description: "Ensino bíblico e atividades para crianças de todas as idades.", 
            icon: "fas fa-child" 
        },
        { 
            id: 5, 
            name: "Ministério de Jovens", 
            description: "Atividades e estudos voltados para a juventude cristã.", 
            icon: "fas fa-users" 
        },
        { 
            id: 6, 
            name: "Ministério de Oração", 
            description: "Grupo dedicado à intercessão e vida de oração.", 
            icon: "fas fa-pray" 
        }
    ],
    eventsTitle: "Próximos Eventos",
    eventsSubtitle: "Participe de nossas celebrações e atividades",
    events: [
        { 
            id: 1, 
            day: "20", 
            month: "Set", 
            title: "Culto da Unaadar", 
            time: "19:00 - 21:30", 
            location: "Igreja Assembleia Sede" 
        },
        { 
            id: 2, 
            day: "03 a 05", 
            month: "Out", 
            title: "Congresso Unaadar", 
            time: "19:00 - 21:30", 
            location: "Igreja Assembleia Sede" 
        },
        { 
            id: 3, 
            day: "12", 
            month: "Out", 
            title: "Congresso Kids", 
            time: "09:00 - 16:00", 
            location: "Igreja Assembleia Gralha Azul" 
        },
        { 
            id: 4, 
            day: "25", 
            month: "Out", 
            title: "Encontro de Mulheres", 
            time: "14:00 - 17:00", 
            location: "Salão Social" 
        }
    ],
    sermonsTitle: "Pregações Recentes",
    sermonsSubtitle: "Assista ou ouça nossas mensagens mais recentes",
    sermons: [
        { 
            id: 1, 
            title: "A Fé em Tempos de Incerteza", 
            pastor: "Pastor João Silva", 
            date: "18 de Junho, 2023", 
            img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", 
            url: "https://youtu.be/1OSIXF3MA7k?feature=shared", 
            description: "Uma mensagem sobre como manter a fé em meio às adversidades da vida." 
        },
        { 
            id: 2, 
            title: "O Poder da Oração", 
            pastor: "Pastora Maria Santos", 
            date: "11 de Junho, 2023", 
            img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", 
            url: "https://youtu.be/1OSIXF3MA7k?feature=shared", 
            description: "Entenda como a oração pode transformar sua vida e suas circunstâncias." 
        },
        { 
            id: 3, 
            title: "Vivendo em Comunhão", 
            pastor: "Pastor Carlos Oliveira", 
            date: "04 de Junho, 2023", 
            img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80", 
            url: "https://youtu.be/1OSIXF3MA7k?feature=shared", 
            description: "A importância da vida em comunidade para o crescimento espiritual." 
        }
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
        { 
            id: 1, 
            name: "João Silva", 
            email: "joao.silva@email.com", 
            category: "membro", 
            date: "2023-10-15", 
            subscribed: true 
        },
        { 
            id: 2, 
            name: "Maria Santos", 
            email: "maria.santos@email.com", 
            category: "visitante", 
            date: "2023-10-16", 
            subscribed: true 
        },
        { 
            id: 3, 
            name: "Pedro Oliveira", 
            email: "pedro.oliveira@email.com", 
            category: "voluntario", 
            date: "2023-10-17", 
            subscribed: true 
        },
        { 
            id: 4, 
            name: "Ana Costa", 
            email: "ana.costa@email.com", 
            category: "doador", 
            date: "2023-10-18", 
            subscribed: true 
        }
    ]
};

/***********************
 * CONSTANTES E CONFIGURAÇÕES
 ***********************/
const STORAGE_KEY = 'churchData_v4';
const AUTH_KEY = 'isAdmin_v1';
const ADMIN_CREDENTIALS = { 
    email: 'admin@igreja.com', 
    pass: '123456' 
};

/***********************
 * FUNÇÕES UTILITÁRIAS
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
        console.error('Erro ao carregar dados, restaurando padrão.', e);
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

function copyPixKey() {
    const pixKey = document.getElementById('pixKey').textContent;
    navigator.clipboard.writeText(pixKey).then(() => {
        alert('Chave PIX copiada para a área de transferência!');
    }).catch(() => {
        // Fallback para navegadores mais antigos
        const textArea = document.createElement('textarea');
        textArea.value = pixKey;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Chave PIX copiada para a área de transferência!');
    });
}

/***********************
 * RENDERIZAÇÃO DO CONTEÚDO
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
    
    ministries.forEach(ministry => {
        const card = document.createElement('div');
        card.className = 'ministry-card';
        card.innerHTML = `
            <div class="ministry-icon">
                <i class="${ministry.icon}"></i>
            </div>
            <div class="ministry-content">
                <h3>${ministry.name}</h3>
                <p>${ministry.description}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderEvents(events) {
    const grid = document.getElementById('eventsGrid');
    grid.innerHTML = '';
    
    events.forEach(event => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
            <div class="event-date">
                <h3>${event.day}</h3>
                <span>${event.month}</span>
            </div>
            <div class="event-content">
                <h3>${event.title}</h3>
                <p><i class="far fa-clock"></i> ${event.time || ''}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${event.location || ''}</p>
            </div>
        `;
        grid.appendChild(card);
    });
}

function renderSermons(sermons) {
    const list = document.getElementById('sermonList');
    list.innerHTML = '';
    
    sermons.forEach(sermon => {
        const card = document.createElement('div');
        card.className = 'sermon-card';
        card.innerHTML = `
            <img src="${sermon.img}" alt="${sermon.title}" class="sermon-img">
            <div class="sermon-content">
                <h3>${sermon.title}</h3>
                <p><strong>${sermon.pastor}</strong> | ${sermon.date}</p>
                <p>${sermon.description}</p>
                <div class="sermon-actions">
                    <a href="${sermon.url || '#'}" target="_blank" class="btn">
                        <i class="fas fa-play"></i> Assistir
                    </a>
                    <a href="${sermon.url || '#'}" target="_blank" class="btn btn-outline">
                        <i class="fas fa-download"></i> Download
                    </a>
                </div>
            </div>
        `;
        list.appendChild(card);
    });
}

function renderContact(data) {
    const contactInfo = document.getElementById('contactInfo');
    contactInfo.innerHTML = `
        <h3>Informações de Contato</h3>
        <p><i class="fas fa-map-marker-alt"></i> ${data.address}</p>
        <p><i class="fas fa-phone"></i> ${data.phone}</p>
        <p><i class="fas fa-envelope"></i> ${data.email}</p>
        
        <h3 style="margin-top: 30px;">Horários de Culto</h3>
        <div style="white-space: pre-line;">${data.serviceTimes}</div>
    `;
}

/***********************
 * SISTEMA DE EMAILS
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
    updateEmailStats(data.emails || []);
    
    // Renderizar lista
    emailsList.innerHTML = '';
    
    if (filteredEmails.length === 0) {
        emailsList.innerHTML = '<p class="muted text-center">Nenhum email encontrado</p>';
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
                    <button class="btn btn-outline" onclick="editEmail(${email.id})">Editar</button>
                    <button class="btn btn-danger" onclick="deleteEmail(${email.id})">Excluir</button>
                </div>
            </div>
        `;
        emailsList.appendChild(emailItem);
    });
}

function updateEmailStats(emails) {
    const totalEmails = emails.length;
    const newThisWeek = emails.filter(email => isThisWeek(new Date(email.date))).length;
    const subscribed = emails.filter(email => email.subscribed).length;
    
    document.getElementById('totalEmails').textContent = totalEmails;
    document.getElementById('newThisWeek').textContent = newThisWeek;
    document.getElementById('subscribed').textContent = subscribed;
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
 * PAINEL ADMINISTRATIVO
 ***********************/
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
    
    // Preencher campos do formulário
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
    
    // Preencher listas dinâmicas
    populateAdminMinistries(data.ministries);
    populateAdminEvents(data.events);
    populateAdminSermons(data.sermons);
    populateAdminSettings(data);
    
    // Renderizar emails
    renderEmails();
}

function populateAdminMinistries(ministries) {
    const container = document.getElementById('adminMinistriesList');
    container.innerHTML = '';
    
    ministries.forEach(ministry => {
        const row = createMinistryRow(ministry);
        container.appendChild(row);
    });
}

function createMinistryRow(ministry) {
    const row = document.createElement('div');
    row.className = 'admin-item-row';
    row.innerHTML = `
        <input type="text" value="${ministry.name}" placeholder="Nome do ministério" class="ministry-name">
        <input type="text" value="${ministry.description}" placeholder="Descrição" class="ministry-desc">
        <input type="text" value="${ministry.icon}" placeholder="Ícone FontAwesome" class="ministry-icon">
        <button class="btn btn-danger remove-ministry">Remover</button>
    `;
    
    row.querySelector('.remove-ministry').addEventListener('click', () => {
        row.remove();
    });
    
    return row;
}

function populateAdminEvents(events) {
    const container = document.getElementById('adminEventsList');
    container.innerHTML = '';
    
    events.forEach(event => {
        const row = createEventRow(event);
        container.appendChild(row);
    });
}

function createEventRow(event) {
    const row = document.createElement('div');
    row.className = 'admin-item-row';
    row.innerHTML = `
        <input type="text" value="${event.day}" placeholder="Dia" class="event-day">
        <input type="text" value="${event.month}" placeholder="Mês" class="event-month">
        <input type="text" value="${event.title}" placeholder="Título" class="event-title">
        <input type="text" value="${event.time || ''}" placeholder="Horário" class="event-time">
        <input type="text" value="${event.location || ''}" placeholder="Local" class="event-location">
        <button class="btn btn-danger remove-event">Remover</button>
    `;
    
    row.querySelector('.remove-event').addEventListener('click', () => {
        row.remove();
    });
    
    return row;
}

function populateAdminSermons(sermons) {
    const container = document.getElementById('adminSermonsList');
    container.innerHTML = '';
    
    sermons.forEach(sermon => {
        const row = createSermonRow(sermon);
        container.appendChild(row);
    });
}

function createSermonRow(sermon) {
    const row = document.createElement('div');
    row.className = 'admin-item-row';
    row.innerHTML = `
        <input type="text" value="${sermon.title}" placeholder="Título" class="sermon-title">
        <input type="text" value="${sermon.pastor}" placeholder="Pastor" class="sermon-pastor">
        <input type="text" value="${sermon.date}" placeholder="Data" class="sermon-date">
        <input type="text" value="${sermon.img}" placeholder="URL da imagem" class="sermon-img">
        <input type="text" value="${sermon.url}" placeholder="URL do vídeo" class="sermon-url">
        <input type="text" value="${sermon.description}" placeholder="Descrição" class="sermon-desc">
        <button class="btn btn-danger remove-sermon">Remover</button>
    `;
    
    row.querySelector('.remove-sermon').addEventListener('click', () => {
        row.remove();
    });
    
    return row;
}

function populateAdminSettings(data) {
    document.getElementById('adminContactAddress').value = data.address;
    document.getElementById('adminPhone').value = data.phone;
    document.getElementById('adminEmail').value = data.email;
    document.getElementById('adminPix').value = data.pix;
    document.getElementById('adminServiceTimes').value = data.serviceTimes;
}

function collectAdminData() {
    const data = loadData();
    
    // Coletar dados básicos
    data.heroTitle = document.getElementById('adminHeroTitle').value;
    data.address = document.getElementById('adminAddress').value;
    data.aboutTitle = document.getElementById('adminAboutTitle').value;
    data.aboutSubtitle = document.getElementById('adminAboutSubtitle').value;
    data.aboutText1 = document.getElementById('adminAboutText1').value;
    data.aboutText2 = document.getElementById('adminAboutText2').value;
    data.aboutText3 = document.getElementById('adminAboutText3').value;
    data.ministriesTitle = document.getElementById('adminMinistriesTitle').value;
    data.ministriesSubtitle = document.getElementById('adminMinistriesSubtitle').value;
    data.donationTitle = document.getElementById('adminDonationTitle').value;
    data.donationSubtitle = document.getElementById('adminDonationSubtitle').value;
    data.donationText = document.getElementById('adminDonationText').value;
    data.pixDescription = document.getElementById('adminPixDescription').value;
    data.presentialDonationText = document.getElementById('adminPresentialDonationText').value;
    
    // Coletar ministérios
    data.ministries = Array.from(document.querySelectorAll('#adminMinistriesList .admin-item-row')).map((row, index) => ({
        id: data.ministries[index] ? data.ministries[index].id : uid(),
        name: row.querySelector('.ministry-name').value,
        description: row.querySelector('.ministry-desc').value,
        icon: row.querySelector('.ministry-icon').value
    }));
    
    // Coletar eventos
    data.events = Array.from(document.querySelectorAll('#adminEventsList .admin-item-row')).map((row, index) => ({
        id: data.events[index] ? data.events[index].id : uid(),
        day: row.querySelector('.event-day').value,
        month: row.querySelector('.event-month').value,
        title: row.querySelector('.event-title').value,
        time: row.querySelector('.event-time').value,
        location: row.querySelector('.event-location').value
    }));
    
    // Coletar pregações
    data.sermons = Array.from(document.querySelectorAll('#adminSermonsList .admin-item-row')).map((row, index) => ({
        id: data.sermons[index] ? data.sermons[index].id : uid(),
        title: row.querySelector('.sermon-title').value,
        pastor: row.querySelector('.sermon-pastor').value,
        date: row.querySelector('.sermon-date').value,
        img: row.querySelector('.sermon-img').value,
        url: row.querySelector('.sermon-url').value,
        description: row.querySelector('.sermon-desc').value
    }));
    
    // Coletar configurações
    data.address = document.getElementById('adminContactAddress').value;
    data.phone = document.getElementById('adminPhone').value;
    data.email = document.getElementById('adminEmail').value;
    data.pix = document.getElementById('adminPix').value;
    data.serviceTimes = document.getElementById('adminServiceTimes').value;
    
    return data;
}

function saveAdminData() {
    const data = collectAdminData();
    saveData(data);
    renderAll();
    alert('Alterações salvas com sucesso!');
}

function resetToDefault() {
    if (!confirm('Tem certeza que deseja restaurar os dados padrão? Todas as alterações serão perdidas.')) return;
    
    localStorage.removeItem(STORAGE_KEY);
    localStorage.removeItem(AUTH_KEY);
    
    const data = loadData();
    renderAll();
    populateAdminFields();
    
    alert('Dados restaurados para o padrão!');
}

/***********************
 * INICIALIZAÇÃO
 ***********************/
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar conteúdo inicial
    renderAll();
    
    // Menu mobile
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('nav');
    
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    });
    
    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Formulário de contato
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
    
    // Sistema administrativo
    const openAdminBtn = document.getElementById('openAdminBtn');
    const loginModal = document.getElementById('loginModal');
    const submitLogin = document.getElementById('submitLogin');
    const cancelLogin = document.getElementById('cancelLogin');
    const adminPanel = document.getElementById('adminPanel');
    const logoutBtn = document.getElementById('logoutBtn');
    const closeAdminPanel = document.getElementById('closeAdminPanel');
    const saveAllBtn = document.getElementById('saveAllBtn');
    const resetDataBtn = document.getElementById('resetDataBtn');
    
    // Abrir painel admin
    openAdminBtn.addEventListener('click', () => {
        if (isAdmin()) {
            openAdminPanel();
        } else {
            loginModal.classList.add('show');
        }
    });
    
    // Login admin
    submitLogin.addEventListener('click', () => {
        const email = document.getElementById('adminEmailInput').value.trim();
        const pass = document.getElementById('adminPass').value.trim();
        
        if (email === ADMIN_CREDENTIALS.email && pass === ADMIN_CREDENTIALS.pass) {
            setAdmin(true);
            loginModal.classList.remove('show');
            openAdminPanel();
            alert('Login realizado com sucesso!');
            
            // Limpar campos
            document.getElementById('adminEmailInput').value = '';
            document.getElementById('adminPass').value = '';
        } else {
            alert('Credenciais inválidas. Tente novamente.');
        }
    });
    
    // Cancelar login
    cancelLogin.addEventListener('click', () => {
        loginModal.classList.remove('show');
    });
    
    // Fechar painel admin
    closeAdminPanel.addEventListener('click', closeAdminPanel);
    
    // Logout
    logoutBtn.addEventListener('click', () => {
        setAdmin(false);
        closeAdminPanel();
        alert('Logout realizado com sucesso!');
    });
    
    // Salvar dados
    saveAllBtn.addEventListener('click', saveAdminData);
    
    // Resetar dados
    resetDataBtn.addEventListener('click', resetToDefault);
    
    // Fechar modal ao clicar fora
    loginModal.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.classList.remove('show');
        }
    });
    
    // Navegação entre abas do admin
    document.querySelectorAll('.admin-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // Remover active de todas as abas
            document.querySelectorAll('.admin-tab').forEach(t => {
                t.classList.remove('active');
            });
            
            // Esconder todos os conteúdos
            document.querySelectorAll('.admin-tab-content').forEach(c => {
                c.classList.remove('active');
            });
            
            // Ativar aba clicada
            this.classList.add('active');
            
            // Mostrar conteúdo correspondente
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId + 'Tab').classList.add('active');
            
            // Se for a aba de emails, renderizar
            if (tabId === 'emails') {
                renderEmails();
            }
        });
    });
    
    // Botões de adicionar itens
    document.getElementById('addMinistryBtn').addEventListener('click', () => {
        const container = document.getElementById('adminMinistriesList');
        const newRow = createMinistryRow({
            name: '',
            description: '',
            icon: 'fas fa-hands-helping'
        });
        container.appendChild(newRow);
    });
    
    document.getElementById('addEventBtn').addEventListener('click', () => {
        const container = document.getElementById('adminEventsList');
        const newRow = createEventRow({
            day: '',
            month: '',
            title: '',
            time: '',
            location: ''
        });
        container.appendChild(newRow);
    });
    
    document.getElementById('addSermonBtn').addEventListener('click', () => {
        const container = document.getElementById('adminSermonsList');
        const newRow = createSermonRow({
            title: '',
            pastor: '',
            date: '',
            img: '',
            url: '',
            description: ''
        });
        container.appendChild(newRow);
    });
    
    // Busca e filtro de emails
    document.getElementById('searchEmail').addEventListener('input', renderEmails);
    document.getElementById('filterCategory').addEventListener('change', renderEmails);
    
    // Adicionar email manualmente
    document.getElementById('addManualEmail').addEventListener('click', addManualEmail);
    
    // Exportar emails
    document.getElementById('exportEmails').addEventListener('click', exportEmails);
    
    // Mostrar botão de logout se já estiver logado
    if (isAdmin()) {
        document.getElementById('logoutBtn').style.display = 'inline-block';
    }
});

// Adicionar alguns elementos dinâmicos ao DOM para o admin
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar containers para as listas admin
    const contentTab = document.getElementById('contentTab');
    const eventsTab = document.getElementById('eventsTab');
    const sermonsTab = document.getElementById('sermonsTab');
    const emailsTab = document.getElementById('emailsTab');
    const settingsTab = document.getElementById('settingsTab');
    
    // Conteúdo da aba de Conteúdo
    contentTab.innerHTML = `
        <div class="admin-section">
            <h4>Página Inicial</h4>
            <div class="form-group">
                <label>Título Principal</label>
                <input type="text" id="adminHeroTitle" class="form-control">
            </div>
            <div class="form-group">
                <label>Endereço</label>
                <input type="text" id="adminAddress" class="form-control">
            </div>
        </div>
        
        <div class="admin-section">
            <h4>Sobre a Igreja</h4>
            <div class="form-group">
                <label>Título da Seção</label>
                <input type="text" id="adminAboutTitle" class="form-control">
            </div>
            <div class="form-group">
                <label>Subtítulo</label>
                <input type="text" id="adminAboutSubtitle" class="form-control">
            </div>
            <div class="form-group">
                <label>Texto 1</label>
                <textarea id="adminAboutText1" class="form-control" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label>Texto 2</label>
                <textarea id="adminAboutText2" class="form-control" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label>Texto 3</label>
                <textarea id="adminAboutText3" class="form-control" rows="3"></textarea>
            </div>
        </div>
        
        <div class="admin-section">
            <h4>Ministérios</h4>
            <div class="form-group">
                <label>Título da Seção</label>
                <input type="text" id="adminMinistriesTitle" class="form-control">
            </div>
            <div class="form-group">
                <label>Subtítulo</label>
                <input type="text" id="adminMinistriesSubtitle" class="form-control">
            </div>
            <div id="adminMinistriesList"></div>
            <button id="addMinistryBtn" class="btn btn-outline">+ Adicionar Ministério</button>
        </div>
        
        <div class="admin-section">
            <h4>Doações</h4>
            <div class="form-group">
                <label>Título da Seção</label>
                <input type="text" id="adminDonationTitle" class="form-control">
            </div>
            <div class="form-group">
                <label>Subtítulo</label>
                <input type="text" id="adminDonationSubtitle" class="form-control">
            </div>
            <div class="form-group">
                <label>Texto Principal</label>
                <textarea id="adminDonationText" class="form-control" rows="3"></textarea>
            </div>
            <div class="form-group">
                <label>Descrição PIX</label>
                <input type="text" id="adminPixDescription" class="form-control">
            </div>
            <div class="form-group">
                <label>Texto Doação Presencial</label>
                <input type="text" id="adminPresentialDonationText" class="form-control">
            </div>
        </div>
    `;
    
    // Conteúdo da aba de Eventos
    eventsTab.innerHTML = `
        <div class="admin-section">
            <h4>Eventos</h4>
            <div class="form-group">
                <label>Título da Seção</label>
                <input type="text" id="adminEventsTitle" class="form-control">
            </div>
            <div class="form-group">
                <label>Subtítulo</label>
                <input type="text" id="adminEventsSubtitle" class="form-control">
            </div>
            <div id="adminEventsList"></div>
            <button id="addEventBtn" class="btn btn-outline">+ Adicionar Evento</button>
        </div>
    `;
    
    // Conteúdo da aba de Pregações
    sermonsTab.innerHTML = `
        <div class="admin-section">
            <h4>Pregações</h4>
            <div class="form-group">
                <label>Título da Seção</label>
                <input type="text" id="adminSermonsTitle" class="form-control">
            </div>
            <div class="form-group">
                <label>Subtítulo</label>
                <input type="text" id="adminSermonsSubtitle" class="form-control">
            </div>
            <div id="adminSermonsList"></div>
            <button id="addSermonBtn" class="btn btn-outline">+ Adicionar Pregação</button>
        </div>
    `;
    
    // Conteúdo da aba de Emails
    emailsTab.innerHTML = `
        <div class="admin-section">
            <h4>Gerenciar Emails</h4>
            <p class="muted">Gerencie os emails coletados através do formulário de contato</p>
            
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-number" id="totalEmails">0</div>
                    <div class="stat-label">Total de Emails</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number" id="newThisWeek">0</div>
                    <div class="stat-label">Novos esta semana</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number" id="subscribed">0</div>
                    <div class="stat-label">Inscritos</div>
                </div>
            </div>
            
            <div class="form-row">
                <div class="form-group">
                    <input type="text" id="searchEmail" placeholder="Buscar email..." class="form-control">
                </div>
                <div class="form-group">
                    <select id="filterCategory" class="form-control">
                        <option value="">Todas as categorias</option>
                        <option value="membro">Membro</option>
                        <option value="visitante">Visitante</option>
                        <option value="voluntario">Voluntário</option>
                        <option value="doador">Doador</option>
                    </select>
                </div>
            </div>
            
            <div id="emailsList" class="emails-container"></div>
            
            <button id="exportEmails" class="btn btn-primary">
                <i class="fas fa-download"></i> Exportar Emails (CSV)
            </button>
        </div>
        
        <div class="admin-section">
            <h4>Adicionar Email Manualmente</h4>
            <div class="form-row">
                <div class="form-group">
                    <input type="text" id="newEmailName" placeholder="Nome" class="form-control">
                </div>
                <div class="form-group">
                    <input type="email" id="newEmailAddress" placeholder="E-mail" class="form-control">
                </div>
                <div class="form-group">
                    <select id="newEmailCategory" class="form-control">
                        <option value="membro">Membro</option>
                        <option value="visitante">Visitante</option>
                        <option value="voluntario">Voluntário</option>
                        <option value="doador">Doador</option>
                    </select>
                </div>
                <div class="form-group">
                    <button id="addManualEmail" class="btn btn-outline">Adicionar</button>
                </div>
            </div>
        </div>
    `;
    
    // Conteúdo da aba de Configurações
    settingsTab.innerHTML = `
        <div class="admin-section">
            <h4>Contato & Horários</h4>
            <div class="form-group">
                <label>Endereço</label>
                <input type="text" id="adminContactAddress" class="form-control">
            </div>
            <div class="form-group">
                <label>Telefone</label>
                <input type="text" id="adminPhone" class="form-control">
            </div>
            <div class="form-group">
                <label>E-mail</label>
                <input type="email" id="adminEmail" class="form-control">
            </div>
            <div class="form-group">
                <label>Horários de Culto</label>
                <textarea id="adminServiceTimes" class="form-control" rows="6"></textarea>
            </div>
        </div>
        
        <div class="admin-section">
            <h4>PIX</h4>
            <div class="form-group">
                <label>Chave PIX</label>
                <input type="text" id="adminPix" class="form-control">
            </div>
        </div>
    `;
    
    // Adicionar alguns estilos dinâmicos
    const style = document.createElement('style');
    style.textContent = `
        .admin-item-row {
            display: flex;
            gap: 10px;
            margin-bottom: 10px;
            align-items: center;
            flex-wrap: wrap;
        }
        
        .admin-item-row input {
            flex: 1;
            min-width: 120px;
        }
        
        .form-row {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
        }
        
        .form-row .form-group {
            flex: 1;
            min-width: 150px;
        }
        
        .form-control {
            width: 100%;
            padding: 8px 12px;
            border: 1px solid var(--gray-light);
            border-radius: 4px;
            font-size: 0.9rem;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 10px;
            margin-bottom: 15px;
        }
        
        .stat-card {
            background: var(--light);
            padding: 15px;
            border-radius: 6px;
            text-align: center;
            border: 1px solid var(--gray-light);
        }
        
        .stat-number {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--primary);
        }
        
        .stat-label {
            font-size: 0.8rem;
            color: var(--gray);
        }
        
        .emails-container {
            max-height: 300px;
            overflow-y: auto;
            margin-bottom: 15px;
        }
        
        .email-item {
            background: var(--light);
            padding: 12px;
            border-radius: 6px;
            margin-bottom: 8px;
            border-left: 4px solid var(--primary);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .email-info {
            flex: 1;
        }
        
        .email-name {
            font-weight: 600;
            color: var(--dark);
        }
        
        .email-address {
            color: var(--gray);
            font-size: 0.9rem;
        }
        
        .email-category {
            background: var(--gray-light);
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 0.8rem;
            color: var(--dark);
        }
    `;
    document.head.appendChild(style);
});