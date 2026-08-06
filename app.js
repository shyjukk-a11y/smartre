/* ============================================================
   SMART RE — shared app data + logic (every page includes this)
   ============================================================ */

/* ---------- Master property dataset (single source of truth) ---------- */
const PROPS = [
  { id:1, img:"1613490493576-7fde63acd811", gallery:["1613490493576-7fde63acd811","1613977257363-707ba9348227","1618221195710-dd6b41faaea6","1616486338812-3dadae4b4ace"],
    tag:"Featured", tagClass:"tag-featured", type:"Villa", cat:"villa", title:"Hittin Modern Villa", loc:"Hittin, Riyadh", city:"Riyadh",
    price:3450000, beds:5, baths:6, sqm:420, lat:24.7743, lng:46.6215, year:2023,
    agent:"Ahmed Al-Rashidi", role:"Luxury Specialist", av:"1500648767791-00dcc994a43e", phone:"+966 50 123 4567",
    desc:"A striking contemporary villa in the heart of Hittin, built around a sunken courtyard and floor-to-ceiling glazing. Finished to a five-star standard with a home cinema, private elevator, and a rooftop majlis overlooking the district.",
    amenities:["Private Pool","Landscaped Garden","Majlis","Maid's Room","Driver's Room","Smart Home System","4-Car Garage","Elevator","Rooftop Terrace","Central AC"],
    aiScore:null, sellDays:24, rentYield:5.1 },
  { id:2, img:"1600596542815-ffad4c1539a9", gallery:["1600596542815-ffad4c1539a9","1600607687939-ce8a6c25118c","1616594039964-ae9021a400a0","1615529182904-14819c35db37"],
    tag:"AI Match 94%", tagClass:"tag-ai", type:"Villa", cat:"villa", title:"Al Nakheel Family Home", loc:"Al Nakheel, Riyadh", city:"Riyadh",
    price:2650000, beds:4, baths:5, sqm:360, lat:24.7215, lng:46.6480, year:2021,
    agent:"Sara Al-Otaibi", role:"Residential Advisor", av:"1544005313-94ddf0286df2", phone:"+966 55 234 5678",
    desc:"Warm, family-oriented villa on a quiet cul-de-sac, three minutes from Al Nakheel schools and the neighborhood park. Recently refreshed kitchen and bathrooms, with a shaded garden built for children.",
    amenities:["Landscaped Garden","Maid's Room","Central AC","2-Car Garage","Built-in Storage","Covered Parking","Near Schools"],
    aiScore:94, sellDays:31, rentYield:4.8 },
  { id:3, img:"1600585154340-be6161a56a0c", gallery:["1600585154340-be6161a56a0c","1600047509807-ba8f99d2cdde","1497366811353-6870744d04b2"],
    tag:"New", tagClass:"tag-new", type:"Apartment", cat:"apartment", title:"Al Hamra Sky Residence", loc:"Al Hamra, Jeddah", city:"Jeddah",
    price:1180000, beds:3, baths:3, sqm:190, lat:21.5764, lng:39.1325, year:2024,
    agent:"Khalid Al-Harbi", role:"Sales Broker", av:"1507003211169-0a1dd7228f2d", phone:"+966 54 345 6789",
    desc:"High-floor apartment in a new Al Hamra tower with uninterrupted Red Sea views from the living room and both bedrooms. Building includes a shared pool, gym, and 24/7 concierge.",
    amenities:["Sea View","Shared Pool","Gym","24/7 Security","Covered Parking","Balcony","Concierge","Central AC"],
    aiScore:null, sellDays:19, rentYield:6.4 },
  { id:4, img:"1512917774080-9991f1c4c750", gallery:["1512917774080-9991f1c4c750","1613977257363-707ba9348227","1580587771525-78b9dba3b914"],
    tag:"Featured", tagClass:"tag-featured", type:"Villa", cat:"villa", title:"Corniche Grand Villa", loc:"Al Khobar", city:"Al Khobar",
    price:4200000, beds:6, baths:7, sqm:520, lat:26.2870, lng:50.2083, year:2022,
    agent:"Ahmed Al-Rashidi", role:"Luxury Specialist", av:"1500648767791-00dcc994a43e", phone:"+966 50 123 4567",
    desc:"A grand waterfront-adjacent villa minutes from the Corniche, with two majlis wings for hosting, a private pool terrace, and a self-contained guest annex.",
    amenities:["Private Pool","Guest Annex","Majlis (x2)","Landscaped Garden","Smart Home System","6-Car Garage","Elevator","Central AC"],
    aiScore:null, sellDays:38, rentYield:4.3 },
  { id:5, img:"1497366754035-f200968a6e72", gallery:["1497366754035-f200968a6e72","1497366811353-6870744d04b2","1715593949273-09009558300a"],
    tag:"Commercial", tagClass:"tag-featured", type:"Office", cat:"commercial", title:"KAFD Office Suite", loc:"Al Aqiq, Riyadh", city:"Riyadh",
    price:6800000, beds:0, baths:4, sqm:640, lat:24.7659, lng:46.6412, year:2023,
    agent:"Sara Al-Otaibi", role:"Commercial Advisor", av:"1544005313-94ddf0286df2", phone:"+966 55 234 5678",
    desc:"Full-floor office suite inside the King Abdullah Financial District, fitted with 6 meeting rooms, a boardroom, and floor-to-ceiling views across the district skyline.",
    amenities:["Meeting Rooms (x6)","Boardroom","Fiber Internet","Reception Area","24/7 Access","Covered Parking","Pantry","Central AC"],
    aiScore:null, sellDays:52, rentYield:7.2 },
  { id:6, img:"1580216643062-cf460548a66a", gallery:["1580216643062-cf460548a66a","1600596542815-ffad4c1539a9","1613490493576-7fde63acd811"],
    tag:"New", tagClass:"tag-new", type:"Townhouse", cat:"new", title:"Diriyah Gate Townhouse", loc:"Diriyah, Riyadh", city:"Riyadh",
    price:2950000, beds:4, baths:4, sqm:340, lat:24.7332, lng:46.5750, year:2025,
    agent:"Khalid Al-Harbi", role:"Off-Plan Broker", av:"1507003211169-0a1dd7228f2d", phone:"+966 54 345 6789",
    desc:"Off-plan townhouse in the new Diriyah Gate development, walking distance from At-Turaif UNESCO site. Traditional Najdi-inspired facade with a fully modern interior layout.",
    amenities:["Community Pool","Landscaped Courtyard","Walking Trails","Retail Promenade Access","2-Car Garage","Central AC","Smart Home Ready"],
    aiScore:null, sellDays:45, rentYield:5.6 },
  { id:7, img:"1600585154340-be6161a56a0c", gallery:["1600585154340-be6161a56a0c","1613977257363-707ba9348227","1618221195710-dd6b41faaea6"],
    tag:"AI Match 96%", tagClass:"tag-ai", type:"Villa", cat:"villa", title:"Al Malqa Garden Villa", loc:"Al Malqa, Riyadh", city:"Riyadh",
    price:2350000, beds:4, baths:4, sqm:340, lat:24.8150, lng:46.6200, year:2022,
    agent:"Ahmed Al-Rashidi", role:"Luxury Specialist", av:"1500648767791-00dcc994a43e", phone:"+966 50 123 4567",
    desc:"Bright, garden-facing villa 680m from King Abdullah School — a favorite for families wanting a quiet street without sacrificing a short school run. Large private garden with mature shade trees.",
    amenities:["Private Garden","Near Schools","Maid's Room","Central AC","2-Car Garage","Storage Room","Covered Parking"],
    aiScore:96, sellDays:22, rentYield:5.3 },
  { id:8, img:"1600607687939-ce8a6c25118c", gallery:["1600607687939-ce8a6c25118c","1600596542815-ffad4c1539a9","1616486338812-3dadae4b4ace"],
    tag:"AI Match 91%", tagClass:"tag-ai", type:"Villa", cat:"villa", title:"Hittin Courtyard Villa", loc:"Hittin, Riyadh", city:"Riyadh",
    price:2480000, beds:4, baths:5, sqm:365, lat:24.7790, lng:46.6260, year:2021,
    agent:"Sara Al-Otaibi", role:"Residential Advisor", av:"1544005313-94ddf0286df2", phone:"+966 55 234 5678",
    desc:"Classic courtyard-plan villa with a central shaded atrium, four generous bedrooms, and a separate majlis entrance for guests.",
    amenities:["Central Courtyard","Majlis","Maid's Room","Central AC","2-Car Garage","Landscaped Garden"],
    aiScore:91, sellDays:27, rentYield:5.0 },
  { id:9, img:"1600047509807-ba8f99d2cdde", gallery:["1600047509807-ba8f99d2cdde","1600585154340-be6161a56a0c","1616594039964-ae9021a400a0"],
    tag:"AI Match 88%", tagClass:"tag-ai", type:"Villa", cat:"villa", title:"Al Nakheel Modern Villa", loc:"Al Nakheel, Riyadh", city:"Riyadh",
    price:2290000, beds:4, baths:4, sqm:330, lat:24.7250, lng:46.6510, year:2020,
    agent:"Khalid Al-Harbi", role:"Sales Broker", av:"1507003211169-0a1dd7228f2d", phone:"+966 54 345 6789",
    desc:"Clean-lined modern villa with an open-plan living area and a compact low-maintenance garden — ideal as a first family home or a rental investment.",
    amenities:["Private Garden","Central AC","2-Car Garage","Built-in Storage","Covered Parking"],
    aiScore:88, sellDays:29, rentYield:5.4 },
  { id:10, img:"1633962700977-052398785a25", gallery:["1633962700977-052398785a25","1596370377457-1fcf84d0afb0"],
    tag:"Land", tagClass:"tag-featured", type:"Land", cat:"land", title:"Al Yasmin Residential Land", loc:"Al Yasmin, Riyadh", city:"Riyadh",
    price:1450000, beds:0, baths:0, sqm:600, lat:24.8480, lng:46.6550, year:null,
    agent:"Sara Al-Otaibi", role:"Land & Plots Advisor", av:"1544005313-94ddf0286df2", phone:"+966 55 234 5678",
    desc:"Flat, corner residential plot in Al Yasmin with dual street access and all utilities already connected — ready to build. Zoned for a single villa up to 4 floors.",
    amenities:["Corner Plot","Two Street Access","Utilities Connected","Residential Zoning","Flat Terrain","Ready to Build"],
    aiScore:null, sellDays:60, rentYield:null }
];

function propById(id){ return PROPS.find(p=>String(p.id)===String(id)); }
function u(id,w){return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w||600}&q=80`;}
function fmtSAR(n){ return "SAR " + Number(n).toLocaleString('en-US'); }

/* ---------- derived listing/agent extras (computed, not hand-authored per property) ---------- */
const AGENCY_BY_AGENT = {
  "Ahmed Al-Rashidi": { agency:"Al Malqa Real Estate", rega:"RE-104829" },
  "Sara Al-Otaibi":   { agency:"Hittin Properties Group", rega:"RE-119374" },
  "Khalid Al-Harbi":  { agency:"Riyadh Realty Partners", rega:"RE-108562" }
};
function propExtras(p){
  const floors = p.type==='Land' ? null : p.type==='Office' ? 1 : (p.sqm>450 ? 3 : p.sqm>320 ? 2 : 1);
  const parking = p.type==='Land' ? 0 : p.type==='Office' ? Math.max(2,Math.round(p.sqm/150)) : Math.max(1,Math.round((p.beds||1)*0.7));
  const info = AGENCY_BY_AGENT[p.agent] || { agency:"SMART RE Partners", rega:"RE-100000" };
  return { floors, parking, agency:info.agency, rega:info.rega };
}
function waLink(phone, text){ return 'https://wa.me/'+phone.replace(/[^\d]/g,'')+'?text='+encodeURIComponent(text||''); }

function heartSVG(){return '<svg viewBox="0 0 24 24"><path d="M12 21s-7.5-4.9-10-9.3C.4 8.4 2 4.5 5.5 4.5c2 0 3.4 1.2 4.5 2.6 1.1-1.4 2.5-2.6 4.5-2.6 3.5 0 5.1 3.9 3.5 7.2C19.5 16.1 12 21 12 21z" stroke-width="1.8"/></svg>';}

/* ---------- localStorage helpers (saved properties / searches / compare / notifications) ---------- */
const LS_SAVED = 'sre_saved_ids';
const LS_SEARCHES = 'sre_saved_searches';
const LS_COMPARE = 'sre_compare_ids';
const LS_NOTIFS_READ = 'sre_notifs_read';

function lsGet(key, fallback){ try{ const v = JSON.parse(localStorage.getItem(key)); return v==null?fallback:v; }catch(e){ return fallback; } }
function lsSet(key, val){ try{ localStorage.setItem(key, JSON.stringify(val)); }catch(e){} }

function getSavedIds(){ return lsGet(LS_SAVED, []); }
function isSaved(id){ return getSavedIds().includes(Number(id)); }
function toggleSaved(id){
  id = Number(id);
  let list = getSavedIds();
  const was = list.includes(id);
  list = was ? list.filter(x=>x!==id) : [...list, id];
  lsSet(LS_SAVED, list);
  refreshSavedBadge();
  toast(was ? 'Removed from saved properties' : 'Saved to your properties', 'ok');
  return !was;
}

function getSavedSearches(){ return lsGet(LS_SEARCHES, []); }
function addSavedSearch(query, meta){
  const list = getSavedSearches();
  list.unshift({ id: Date.now(), query, meta: meta||'', alerts:true, created: new Date().toISOString() });
  lsSet(LS_SEARCHES, list);
  toast('Search saved — we\'ll alert you to new matches', 'ok');
}
function removeSavedSearch(id){
  lsSet(LS_SEARCHES, getSavedSearches().filter(s=>s.id!==id));
}
function toggleSearchAlerts(id){
  const list = getSavedSearches();
  const s = list.find(x=>x.id===id);
  if(s){ s.alerts = !s.alerts; lsSet(LS_SEARCHES, list); }
}

function getCompareIds(){ return lsGet(LS_COMPARE, []); }
function toggleCompareId(id){
  id = Number(id);
  let list = getCompareIds();
  if(list.includes(id)){ list = list.filter(x=>x!==id); }
  else{
    if(list.length>=4){ toast('You can compare up to 4 properties at a time','warn'); return false; }
    list = [...list, id];
  }
  lsSet(LS_COMPARE, list);
  return true;
}

/* ---------- toast ---------- */
function toast(msg, kind){
  let wrap = document.getElementById('toastWrap');
  if(!wrap){ wrap = document.createElement('div'); wrap.id='toastWrap'; wrap.className='toast-wrap'; document.body.appendChild(wrap); }
  const t = document.createElement('div');
  t.className = 'toast' + (kind==='ok' ? ' ok' : '');
  t.textContent = msg;
  wrap.appendChild(t);
  setTimeout(()=>{ t.style.transition='opacity .3s'; t.style.opacity='0'; setTimeout(()=>t.remove(),300); }, 2600);
}

/* ---------- shared modal + sign-in helpers (used on every page) ---------- */
function openModal(id){ const el=document.getElementById(id); if(el) el.classList.add('open'); }
function closeModal(id){ const el=document.getElementById(id); if(el) el.classList.remove('open'); }
function openSignIn(){ openModal('signInOverlay'); }
function doSignIn(e){
  if(e) e.preventDefault();
  toast('Signed in — redirecting…','ok');
  setTimeout(()=>location.href='customer-portal.html', 700);
  return false;
}

const LS_AGENT_SESSION = 'sre_agent_signed_in';
function isAgentSignedIn(){ return lsGet(LS_AGENT_SESSION, false) === true; }
function doAgentSignIn(e){
  if(e) e.preventDefault();
  lsSet(LS_AGENT_SESSION, true);
  return false;
}
function agentSignOut(){ lsSet(LS_AGENT_SESSION, false); location.href='index.html'; }

/* ---------- property card renderer (used on every page) ---------- */
function propCard(p, opts){
  opts = opts || {};
  const bedStat = p.beds>0 ? `<span class="s">🛏 ${p.beds} Beds</span>` : (p.type==='Land' ? `<span class="s">📐 Plot</span>` : `<span class="s">🏢 Open Plan</span>`);
  const liked = isSaved(p.id) ? ' liked' : '';
  const compareBox = opts.compare ? `<label class="prop-compare-chk" onclick="event.stopPropagation()"><input type="checkbox" ${getCompareIds().includes(p.id)?'checked':''} onchange="onCompareCheck(${p.id},this)"> Compare</label>` : '';
  return `<a class="prop" data-cat="${p.cat}" href="property.html?id=${p.id}">
    ${compareBox}
    <div class="prop-img">
      <img src="${u(p.img,600)}" alt="${p.title}" loading="lazy">
      <span class="prop-tag ${p.tagClass}">${p.tag}</span>
      <button class="heart-btn${liked}" onclick="event.preventDefault();event.stopPropagation();toggleHeartBtn(this,${p.id})" aria-label="Save">${heartSVG()}</button>
    </div>
    <div class="prop-body">
      <div class="prop-type">🏡 ${p.type} · 📍 ${p.loc}</div>
      <div class="prop-title">${p.title}</div>
      <div class="prop-price">${fmtSAR(p.price)}</div>
      <div class="prop-stats">
        ${bedStat}
        ${p.baths>0?`<span class="s">🛁 ${p.baths} Baths</span>`:''}
        <span class="s">📐 ${p.sqm} sqm</span>
      </div>
      <div class="prop-agent">
        <div class="agent-info">
          <img class="agent-av" src="${u(p.av,80)}" alt="${p.agent}">
          <div class="agent-name">${p.agent}<span>${p.role}</span></div>
        </div>
        <button class="btn btn-navy btn-sm" onclick="event.preventDefault();event.stopPropagation();window.location.href='property.html?id=${p.id}'">View</button>
      </div>
    </div>
  </a>`;
}

function toggleHeartBtn(el, id){
  const liked = toggleSaved(id);
  el.classList.toggle('liked', liked);
}
/* legacy alias used by a couple of inline handlers */
function toggleHeart(el,e){ if(e){e.stopPropagation();e.preventDefault();} el.classList.toggle('liked'); }

function onCompareCheck(id, el){
  const ok = toggleCompareId(id);
  if(!ok) el.checked = false;
}

/* ---------- shared nav behavior (call on every page) ---------- */
function initSharedNav(){
  const nav=document.getElementById('nav');
  if(nav) window.addEventListener('scroll',()=>{ nav.classList.toggle('scrolled', window.scrollY>10); });

  document.querySelectorAll('#langToggle span').forEach(s=>{
    s.addEventListener('click',()=>{
      document.querySelectorAll('#langToggle span').forEach(x=>x.classList.remove('active'));
      s.classList.add('active');
    });
  });

  refreshSavedBadge();
  renderNotifications();

  const bell = document.getElementById('notifBell');
  if(bell){
    bell.addEventListener('click', (e)=>{ e.stopPropagation(); document.getElementById('notifPanel').classList.toggle('open'); });
    document.addEventListener('click', ()=>{ document.getElementById('notifPanel').classList.remove('open'); });
  }
}

function refreshSavedBadge(){
  const el = document.getElementById('savedCount');
  if(!el) return;
  const n = getSavedIds().length;
  el.textContent = n;
  el.classList.toggle('hide', n===0);
}

/* ---------- notifications (sample alerts, read-state persisted) ---------- */
const NOTIFS = [
  { id:'n1', kind:'match', text:'New <b>AI Match 95%</b> villa just listed in Al Malqa, matching your saved search.', time:'2h ago' },
  { id:'n2', kind:'drop', text:'Price drop: <b>Hittin Courtyard Villa</b> reduced by SAR 70,000.', time:'1d ago' },
  { id:'n3', kind:'new', text:'12 new listings added in Riyadh this week.', time:'2d ago' },
  { id:'n4', kind:'match', text:'A broker replied to your enquiry on <b>Corniche Grand Villa</b>.', time:'3d ago' }
];
function getReadNotifs(){ return lsGet(LS_NOTIFS_READ, []); }
function renderNotifications(){
  const list = document.getElementById('notifList');
  const countEl = document.getElementById('notifCount');
  if(!list) return;
  const read = getReadNotifs();
  const unreadCount = NOTIFS.filter(n=>!read.includes(n.id)).length;
  if(countEl){ countEl.textContent = unreadCount; countEl.classList.toggle('hide', unreadCount===0); }
  const icons = { match:'✨', drop:'📉', new:'🏠' };
  list.innerHTML = NOTIFS.map(n=>`
    <div class="notif-item${read.includes(n.id)?'':' unread'}" onclick="markNotifRead('${n.id}')">
      <div class="notif-ic ${n.kind}">${icons[n.kind]||'🔔'}</div>
      <div class="notif-txt">${n.text}<span class="time">${n.time}</span></div>
    </div>`).join('') || '<div class="notif-empty">You\'re all caught up.</div>';
}
function markNotifRead(id){
  const read = getReadNotifs();
  if(!read.includes(id)){ read.push(id); lsSet(LS_NOTIFS_READ, read); renderNotifications(); }
}
function clearAllNotifs(){
  lsSet(LS_NOTIFS_READ, NOTIFS.map(n=>n.id));
  renderNotifications();
}

/* ---------- mortgage calculator (shared math) ---------- */
function calcMortgage(price, downPct, ratePct, years){
  const down = price * (downPct/100);
  const loan = price - down;
  const r = (ratePct/100)/12;
  const n = years*12;
  const monthly = r===0 ? loan/n : loan * (r * Math.pow(1+r,n)) / (Math.pow(1+r,n) - 1);
  const totalPaid = monthly*n;
  const totalInterest = totalPaid - loan;
  return { down, loan, monthly, totalPaid, totalInterest, n };
}

/* ---------- floor plan SVG templates (by property type) ---------- */
function floorplanSVG(type){
  const wall = '#1B3A6B', room = '#F8FAFC', line = '#E5E7EB', label = '#374151';
  if(type==='Apartment'){
    return `<svg width="360" height="260" viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="344" height="244" fill="${room}" stroke="${wall}" stroke-width="4"/>
      <line x1="8" y1="120" x2="200" y2="120" stroke="${wall}" stroke-width="3"/>
      <line x1="200" y1="8" x2="200" y2="252" stroke="${wall}" stroke-width="3"/>
      <line x1="200" y1="170" x2="352" y2="170" stroke="${wall}" stroke-width="3"/>
      <line x1="280" y1="8" x2="280" y2="120" stroke="${wall}" stroke-width="3"/>
      <text x="100" y="70" font-family="DM Sans" font-size="13" fill="${label}" text-anchor="middle">Living / Dining</text>
      <text x="100" y="88" font-family="DM Sans" font-size="10" fill="#9CA3AF" text-anchor="middle">6.2 × 4.8 m</text>
      <text x="240" y="60" font-family="DM Sans" font-size="12" fill="${label}" text-anchor="middle">Kitchen</text>
      <text x="316" y="60" font-family="DM Sans" font-size="12" fill="${label}" text-anchor="middle">Bed 3</text>
      <text x="276" y="145" font-family="DM Sans" font-size="12" fill="${label}" text-anchor="middle">Bath</text>
      <text x="100" y="195" font-family="DM Sans" font-size="12" fill="${label}" text-anchor="middle">Bedroom 1</text>
      <text x="276" y="210" font-family="DM Sans" font-size="12" fill="${label}" text-anchor="middle">Bedroom 2</text>
    </svg>`;
  }
  if(type==='Office'){
    return `<svg width="360" height="260" viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="8" width="344" height="244" fill="${room}" stroke="${wall}" stroke-width="4"/>
      <line x1="8" y1="90" x2="352" y2="90" stroke="${wall}" stroke-width="3"/>
      <line x1="140" y1="90" x2="140" y2="252" stroke="${wall}" stroke-width="3"/>
      <line x1="250" y1="90" x2="250" y2="252" stroke="${wall}" stroke-width="3"/>
      <text x="180" y="52" font-family="DM Sans" font-size="13" fill="${label}" text-anchor="middle">Open Floor / Desks</text>
      <text x="74" y="175" font-family="DM Sans" font-size="12" fill="${label}" text-anchor="middle">Meeting</text>
      <text x="195" y="175" font-family="DM Sans" font-size="12" fill="${label}" text-anchor="middle">Boardroom</text>
      <text x="300" y="150" font-family="DM Sans" font-size="12" fill="${label}" text-anchor="middle">Reception</text>
      <text x="300" y="215" font-family="DM Sans" font-size="12" fill="${label}" text-anchor="middle">Pantry</text>
    </svg>`;
  }
  /* Villa / Townhouse default */
  return `<svg width="360" height="260" viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="344" height="244" fill="${room}" stroke="${wall}" stroke-width="4"/>
    <line x1="8" y1="130" x2="352" y2="130" stroke="${wall}" stroke-width="3"/>
    <line x1="180" y1="8" x2="180" y2="130" stroke="${wall}" stroke-width="3"/>
    <line x1="90" y1="130" x2="90" y2="252" stroke="${wall}" stroke-width="3"/>
    <line x1="180" y1="130" x2="180" y2="252" stroke="${wall}" stroke-width="3"/>
    <line x1="266" y1="130" x2="266" y2="252" stroke="${wall}" stroke-width="3"/>
    <text x="94" y="72" font-family="DM Sans" font-size="13" fill="${label}" text-anchor="middle">Majlis</text>
    <text x="266" y="60" font-family="DM Sans" font-size="13" fill="${label}" text-anchor="middle">Living / Dining</text>
    <text x="266" y="78" font-family="DM Sans" font-size="10" fill="#9CA3AF" text-anchor="middle">7.0 × 5.4 m</text>
    <text x="48" y="195" font-family="DM Sans" font-size="12" fill="${label}" text-anchor="middle">Bed 1</text>
    <text x="135" y="195" font-family="DM Sans" font-size="12" fill="${label}" text-anchor="middle">Bed 2</text>
    <text x="222" y="195" font-family="DM Sans" font-size="12" fill="${label}" text-anchor="middle">Bed 3</text>
    <text x="308" y="195" font-family="DM Sans" font-size="12" fill="${label}" text-anchor="middle">Kitchen</text>
  </svg>`;
}

/* ============================================================
   FLOATING CHATBOT (shared across every page)
   ============================================================ */
let cbotOpen=false, cbotGreeted=false;
const CBOT_GREETING="👋 Hi! I'm your SMART RE assistant. Tell me what you're looking for — like <b>\"3-bed villa in Al Malqa under SAR 2.5M\"</b> — in Arabic or English.";
function cbotEsc(s){ return s.replace(/[&<>\"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
function cbotScroll(){ const b=document.getElementById('cbotBody'); if(b) b.scrollTop=b.scrollHeight; }
function cbotAppend(html,cls){ const b=document.getElementById('cbotBody'); if(!b) return; const d=document.createElement('div'); d.className='cbot-msg '+cls; d.innerHTML=html; b.appendChild(d); cbotScroll(); }
function toggleChat(){
  cbotOpen=!cbotOpen;
  document.getElementById('cbotPanel').classList.toggle('open',cbotOpen);
  document.getElementById('cbotFab').classList.toggle('open',cbotOpen);
  if(cbotOpen && !cbotGreeted){ cbotGreeted=true; setTimeout(()=>cbotAppend(CBOT_GREETING,'bot'),340); }
  if(cbotOpen) setTimeout(()=>{ const i=document.getElementById('cbotInput'); if(i) i.focus(); },320);
}
function cbotCard(img,t,l,p,m){
  return `<div class="cbot-card"><img src="${u(img,320)}" alt=""><div class="cc"><div class="t">${t}</div><div class="l">📍 ${l}</div><div class="p">${p}</div><span class="m">${m}</span></div></div>`;
}
function cbotReply(text){
  const q=text.toLowerCase();
  if(/(compare)/.test(q))
    return "You can compare up to 4 properties side by side — price, size, beds, AI score and amenities. Open <b>Compare</b> from the menu, or tap Compare on any listing card.";
  if(/(mortgage|loan|calculator|monthly payment|afford)/.test(q))
    return "I can estimate your monthly payment. Try the <b>Mortgage Calculator</b> from the menu — enter a price, down payment and term and it computes it instantly.";
  if(/(map|near me|around|radius)/.test(q))
    return "Our <b>Map Search</b> shows every listing as a pin with a radius filter — open Map from the menu and drag the radius slider around any area.";
  if(/(invest|yield|roi|return)/.test(q))
    return "Our <b>Investment view</b> shows rental yield, cap rate and 5-year appreciation projections for any listing — worth a look before you commit.";
  if(/(villa|buy|sale|riyadh|malqa|hittin|nakheel)/.test(q))
    return "Great choice! I found <b>12 villas</b> matching your criteria. Here's the top AI match 👇"+cbotCard('1600585154340-be6161a56a0c','Al Malqa Garden Villa','Al Malqa, Riyadh','SAR 2,350,000','AI Match 96%')+"Want me to <b>book a viewing</b> or show more options?";
  if(/(rent|lease|apartment|flat|jeddah)/.test(q))
    return "Here are rentals that fit 👇 flexible terms in prime areas."+cbotCard('1600047509807-ba8f99d2cdde','Al Hamra Sky Apartment','Al Hamra, Jeddah','SAR 85,000 / year','AI Match 92%')+"Shall I filter by budget or number of bedrooms?";
  if(/(book|viewing|visit|tour|schedule|appointment)/.test(q))
    return "I can arrange that 📅 Our AI coordinates the buyer, seller and broker automatically — one click. What day works, this week or next?";
  if(/(broker|agent|contact|call|human|speak)/.test(q))
    return "I'll connect you with a top-rated broker 👤<br><b>Ahmed Al-Rashidi</b> — Luxury Specialist, Riyadh · 4.9★. Want me to share your details so he reaches out?";
  if(/(price|value|worth|valuation|estimate)/.test(q))
    return "Our AI pricing engine estimates fair market value from thousands of comparable sales — with a confidence score and a days-to-sell forecast. Share an address and I'll price it for you.";
  if(/(hi|hello|hey|salam|مرحبا|السلام|اهلا)/.test(q))
    return "Hello! 👋 How can I help today — <b>buying, renting, pricing</b>, or <b>booking a viewing</b>?";
  return "Got it! I can help you <b>buy, rent, price a property, compare listings, or calculate a mortgage</b>. Tell me a city, budget or property type — e.g. <i>\"villa in Hittin under SAR 3M\"</i>.";
}
function cbotFlow(text){
  const b=document.getElementById('cbotBody');
  const ty=document.createElement('div'); ty.className='cbot-typing'; ty.id='cbotTyping';
  ty.innerHTML='<span></span><span></span><span></span>'; b.appendChild(ty); cbotScroll();
  setTimeout(()=>{ const t=document.getElementById('cbotTyping'); if(t) t.remove(); cbotAppend(cbotReply(text),'bot'); }, 1000+Math.random()*500);
}
function cbotSend(){
  const inp=document.getElementById('cbotInput'); const text=inp.value.trim(); if(!text) return;
  inp.value=''; cbotAppend(cbotEsc(text),'user'); cbotFlow(text);
}
function cbotQuick(text){ if(!cbotGreeted){cbotGreeted=true;} cbotAppend(cbotEsc(text),'user'); cbotFlow(text); }

document.addEventListener('DOMContentLoaded', initSharedNav);
