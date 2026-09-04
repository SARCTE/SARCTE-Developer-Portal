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
