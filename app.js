const ecosystem = [
  'Infrastructure','Virtualization','Networking','Monitoring','Cybersecurity','Vulnerability Management','SOC & SIEM','Automation','Documentation','Training','Development','Business Continuity'
];
const projects = [
  {name:'SARCTE Developer Portal',status:'PUBLIC',text:'Portale pubblico dei progetti, repository e risorse tecniche SARCTE.'},
  {name:'SARCTE Collector',status:'ACTIVE',text:'Framework per raccolta strutturata di evidenze, dati e allegati tecnici.'},
  {name:'SARCTE OS',status:'IN DEVELOPMENT',text:'Interfaccia operativa e dashboard unificata per l’ecosistema SARCTE.'},
  {name:'SARCTE Automation',status:'PLANNED',text:'Automazione con Ansible, script e workflow riproducibili.'},
  {name:'SARCTE Lab',status:'ACTIVE',text:'Laboratorio per infrastruttura, monitoring, sicurezza e validazione tecnica.'},
  {name:'SARCTE Documentation',status:'ACTIVE',text:'Documentazione tecnica e governance con separazione tra contenuti pubblici e interni.'}
];
const repositories = [
  {name:'SARCTE-Developer-Portal',text:'Codice sorgente del portale github.sarcte.eu.',url:'https://github.com/SARCTE/SARCTE-Developer-Portal'},
  {name:'SARCTE-Ecosystem',text:'Repository pubblico di presentazione dell’ecosistema SARCTE. In preparazione.',url:'https://github.com/SARCTE'},
  {name:'Altri repository',text:'I repository saranno pubblicati progressivamente dopo revisione e sanitizzazione.',url:'https://github.com/SARCTE'}
];
const ecoGrid=document.getElementById('ecosystemGrid');
ecosystem.forEach(item=>{const span=document.createElement('span');span.className='pill';span.textContent=item;ecoGrid.appendChild(span)});
const projectsGrid=document.getElementById('projectsGrid');
projects.forEach(p=>{const el=document.createElement('article');el.className='card';el.innerHTML=`<div class="card-meta"><span class="tag">${p.status}</span></div><h3>${p.name}</h3><p>${p.text}</p>`;projectsGrid.appendChild(el)});
const reposGrid=document.getElementById('repositoriesGrid');
repositories.forEach(r=>{const el=document.createElement('article');el.className='repo-card';el.innerHTML=`<span class="tag">GITHUB</span><h3>${r.name}</h3><p>${r.text}</p><a href="${r.url}">Apri repository ↗</a>`;reposGrid.appendChild(el)});


// Theme preference — dark by default, light optional.
(() => {
  const storageKey = 'sarcte-developer-theme';
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const label = toggle?.querySelector('.theme-toggle-label');
  const icon = toggle?.querySelector('.theme-toggle-icon');
  const themeMeta = document.getElementById('themeColorMeta');

  const applyTheme = (theme) => {
    root.dataset.theme = theme;
    const isLight = theme === 'light';

    if (toggle) {
      toggle.setAttribute('aria-pressed', String(isLight));
      toggle.setAttribute('aria-label', isLight ? 'Attiva tema scuro' : 'Attiva tema chiaro');
      toggle.title = isLight ? 'Attiva tema scuro' : 'Attiva tema chiaro';
    }
    if (label) label.textContent = isLight ? 'Tema scuro' : 'Tema chiaro';
    if (icon) icon.textContent = isLight ? '☾' : '☀';
    if (themeMeta) themeMeta.setAttribute('content', isLight ? '#f5f7fa' : '#0b0d12');
  };

  const saved = localStorage.getItem(storageKey);
  applyTheme(saved === 'light' ? 'light' : 'dark');

  toggle?.addEventListener('click', () => {
    const next = root.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem(storageKey, next);
    applyTheme(next);
  });
})();
