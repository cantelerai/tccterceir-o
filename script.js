<script type="module">
  // ==============================
  // 1) SUPABASE
  // ==============================
  const SUPABASE_URL = 'https://xskasveyyprxuuilkavit.supabase.co';
  const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhza2FzdnNleXB2eHV1bGtldmlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTgyOTEyODgsImV4cCI6MjA3Mzg2NzI4OH0.QMJOGkErNQPhW0ZnRKc6fC5f7Wxze68GnW7hf9lmMXo';
  const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  console.log('✅ Supabase client OK');

  // Helpers
  const $ = (s) => document.querySelector(s);
  const setText = (id, val) => { const el = document.getElementById(id); if (el && val != null) el.textContent = val; };
  const html = (strings, ...vals) => strings.map((s,i)=>s+(vals[i]??'')).join('');

  // Meses PT-BR abreviados -> índice (0-11)
  const PT_MONTH_INDEX = { jan:0, fev:1, mar:2, abr:3, mai:4, jun:5, jul:6, ago:7, set:8, out:9, nov:10, dez:11 };
  const monthToIndex = (m) => m ? PT_MONTH_INDEX[m.trim().toLowerCase().slice(0,3).normalize('NFD').replace(/\p{Diacritic}/gu,'')] ?? 99 : 99;
  const parseDayNumber = (d) => { const m = String(d||'').match(/(\d{1,2})/); return m ? parseInt(m[1],10) : 99; };

  // ==============================
  // 2) site_config -> preenche IDs que existem no HTML
  // ==============================
  async function carregarConfiguracoes() {
    try {
      const { data, error } = await supabase.from('site_config').select('key,value');
      if (error) throw error;
      const cfg = Object.fromEntries((data||[]).map(r => [r.key, r.value]));

      // Hero / Sobre / Títulos
      setText('heroTitle',        cfg.heroTitle);
      setText('addressText',      cfg.address);
      setText('aboutTitle',       cfg.aboutTitle);
      setText('aboutSubtitle',    cfg.aboutSubtitle);
      setText('aboutText1',       cfg.aboutText1);
      setText('aboutText2',       cfg.aboutText2);
      setText('aboutText3',       cfg.aboutText3);

      // Seções
      setText('ministriesTitle',  cfg.ministriesTitle);
      setText('ministriesSubtitle', cfg.ministriesSubtitle);
      setText('eventsTitle',      cfg.eventsTitle);
      setText('eventsSubtitle',   cfg.eventsSubtitle);
      setText('sermonsTitle',     cfg.sermonsTitle);
      setText('sermonsSubtitle',  cfg.sermonsSubtitle);
      setText('contactTitle',     cfg.contactTitle);
      setText('contactSubtitle',  cfg.contactSubtitle);
      setText('donationTitle',    cfg.donationTitle);
      setText('donationSubtitle', cfg.donationSubtitle);
      setText('donationText',     cfg.donationText);
      setText('pixDescription',   cfg.pixDescription);
      setText('pixKey',           cfg.pix);

      // Bloco de contato (monta horários como lista)
      const contactInfo = $('#contactInfo');
      if (contactInfo) {
        const serviceList = (cfg.serviceTimes||'')
          .split(/\r?\n/).map(s=>s.trim()).filter(Boolean)
          .map(s=>`<li><i class="fas fa-clock"></i> ${s}</li>`).join('');
        contactInfo.innerHTML = html`
          <h3>Informações</h3>
          ${cfg.address ? `<p><i class="fas fa-map-marker-alt"></i> ${cfg.address}</p>` : ''}
          ${cfg.email   ? `<p><i class="fas fa-envelope"></i> ${cfg.email}</p>` : ''}
          ${cfg.phone   ? `<p><i class="fas fa-phone"></i> ${cfg.phone}</p>` : ''}
          ${serviceList ? `<h3 style="margin-top:16px;">Horários</h3><ul>${serviceList}</ul>` : ''}
        `;
      }
    } catch (err) {
      console.error('❌ site_config:', err);
    }
  }

  // ==============================
  // 3) Ministérios
  // ==============================
  async function carregarMinisterios() {
    const grid = $('#ministriesGrid');
    if (!grid) return;
    try {
      const { data, error } = await supabase.from('ministries').select('*').order('id', { ascending: true });
      if (error) throw error;
      grid.innerHTML = (data||[]).map(m => html`
        <div class="feature-card">
          <div class="feature-icon"><i class="${m.icon || 'fas fa-people-group'}"></i></div>
          <div class="feature-content">
            <h3>${m.name}</h3>
            <p>${m.description ?? ''}</p>
          </div>
        </div>
      `).join('') || "<p class='muted'>Nenhum ministério cadastrado.</p>";
    } catch (err) {
      console.error('❌ ministries:', err);
    }
  }

  // ==============================
  // 4) Eventos (usa day/month/title/time/location do seu schema)
  // ==============================
  async function carregarEventos() {
    const grid = $('#eventsGrid');
    if (!grid) return;

    try {
      const { data, error } = await supabase
        .from('events')
        .select('id, day, month, title, time, location, created_at');
      if (error) throw error;

      const sorted = (data||[]).slice().sort((a,b) => {
        const ma = monthToIndex(a.month), mb = monthToIndex(b.month);
        if (ma !== mb) return ma - mb;
        return parseDayNumber(a.day) - parseDayNumber(b.day);
      });

      const hasForm = !!document.getElementById('inscricao-form');

      grid.innerHTML = sorted.map(ev => {
        const firstDay = String(ev.day||'').split(' ')[0] || '--';
        const monthUp  = (ev.month||'--').toUpperCase();
        return html`
          <div class="event-card">
            <div class="event-date">
              <h3>${firstDay}</h3>
              <span>${monthUp}</span>
            </div>
            <div class="event-content">
              <h3>${ev.title}</h3>
              ${ev.time ? `<p><i class="fas fa-clock"></i>${ev.time}</p>` : ''}
              ${ev.location ? `<p><i class="fas fa-map-marker-alt"></i>${ev.location}</p>` : ''}
              ${hasForm ? `<button class="btn btn-secondary" onclick="iniciarInscricao(${ev.id}, ${JSON.stringify(ev.title)})">Quero me inscrever</button>` : ''}
            </div>
          </div>
        `;
      }).join('') || "<p class='muted'>Nenhum evento por enquanto.</p>";
    } catch (err) {
      console.error('❌ events:', err);
      grid.innerHTML = '<p class="muted">Erro ao carregar eventos.</p>';
    }
  }

  // ==============================
  // 5) Pregações
  // ==============================
  async function carregarPregacoes() {
    const list = $('#sermonList');
    if (!list) return;
    try {
      const { data, error } = await supabase.from('sermons').select('*').order('id', { ascending: false }).limit(6);
      if (error) throw error;
      list.innerHTML = (data||[]).map(s => html`
        <div class="sermon-card">
          <img class="sermon-img" src="${s.img_url || 'https://picsum.photos/300/300?grayscale'}" alt="${s.title}">
          <div class="sermon-content">
            <h3>${s.title}</h3>
            <p><strong>Pregador:</strong> ${s.pastor ?? '—'}</p>
            <p><strong>Data:</strong> ${s.date ?? ''}</p>
            <div class="sermon-actions">
              ${s.video_url ? `<a class="btn btn-outline" href="${s.video_url}" target="_blank"><i class="fas fa-play"></i> Assistir</a>` : ''}
            </div>
          </div>
        </div>
      `).join('') || "<p class='muted'>Sem pregações cadastradas ainda.</p>";
    } catch (err) {
      console.error('❌ sermons:', err);
    }
  }

  // ==============================
  // 6) Inscrição em eventos (opcional)
  // ==============================
  window.iniciarInscricao = function iniciarInscricao(eventId, eventTitle) {
    const idInput  = document.getElementById('event-id-input');
    const display  = document.getElementById('evento-selecionado-display');
    const form     = document.getElementById('inscricao-form');

    if (idInput) idInput.value = eventId;
    if (display) {
      display.innerHTML = `Você está se inscrevendo para o evento: <strong>${eventTitle}</strong>.`;
      display.classList.remove('alert-info', 'alert-danger');
      display.classList.add('alert-success');
    }
    if (form) form.scrollIntoView({ behavior: 'smooth' });
  };

  async function fazerInscricao(e) {
    e.preventDefault();
    const nome   = document.getElementById('nome-inscrito')?.value?.trim();
    const email  = document.getElementById('email-inscrito')?.value?.trim();
    const eventId= document.getElementById('event-id-input')?.value;
    const msgEl  = document.getElementById('form-message');
    if (!nome || !email || !eventId) {
      if (msgEl) msgEl.innerHTML = '<span class="text-danger">Preencha nome, email e selecione um evento.</span>';
      return;
    }
    if (msgEl) msgEl.innerHTML = '<span class="text-info">Enviando inscrição…</span>';

    try {
      // Tabela 'inscricoes' é opcional — veja SQL abaixo
      const { error } = await supabase.from('inscricoes').insert([{ name: nome, email, event_id: Number(eventId) }]);
      if (error) throw error;

      if (msgEl) msgEl.innerHTML = '<span class="text-success">✅ Inscrição realizada com sucesso!</span>';
      document.getElementById('inscricao-form')?.reset();
      const display = document.getElementById('evento-selecionado-display');
      if (display) {
        display.innerHTML = 'Selecione um evento clicando em "Quero me inscrever".';
        display.classList.remove('alert-success');
        display.classList.add('alert-info');
      }
    } catch (err) {
      console.error('❌ inscrição:', err);
      if (msgEl) msgEl.innerHTML = '<span class="text-danger">Erro ao enviar. Tente novamente.</span>';
    }
  }

  // ==============================
  // 7) PIX + Menu mobile
  // ==============================
  window.copyPixKey = function copyPixKey(){
    const key = document.getElementById('pixKey')?.textContent?.trim() || '';
    if (!key) return;
    navigator.clipboard.writeText(key)
      .then(()=>alert('Chave PIX copiada!'))
      .catch(()=>alert('Não foi possível copiar a chave.'));
  };

  (function bindMobileMenu(){
    const btn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('header nav');
    if (!btn || !nav) return;
    btn.addEventListener('click', () => nav.classList.toggle('active'));
  })();

  // ==============================
  // 8) Boot
  // ==============================
  document.addEventListener('DOMContentLoaded', () => {
    carregarConfiguracoes();
    carregarMinisterios();
    carregarEventos();
    carregarPregacoes();

    const form = document.getElementById('inscricao-form');
    if (form) form.addEventListener('submit', fazerInscricao);
  });
</script>

