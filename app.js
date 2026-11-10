/* =========================================================
   Digital Khata – Vendor Management System (Offline PWA)
   Storage: IndexedDB  |  No external libraries
   ========================================================= */
'use strict';

/* ---------------- Icons ---------------- */
const ICONS = {
  home: ['M3 11l9-8 9 8', 'M5 9.5V20h5v-6h4v6h5V9.5'],
  users: ['c:9,8,3.2', 'M2.5 20c0-3.6 2.9-6.3 6.5-6.3s6.5 2.7 6.5 6.3', 'c:17.2,9,2.5', 'M16.5 13.8c2.9.2 5 2.6 5 5.7'],
  billAdd: ['M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6', 'M13 3l6 6h-6z', 'M8 12h6M8 16h3', 'c:18,18,4', 'M18 16v4M16 18h4'],
  bills: ['M6 3h9l5 5v13H6z', 'M15 3v5h5', 'M9 12h8M9 16h8M9 8h3'],
  pay: ['c:15,6.5,4', 'M15 4.5v4M13.6 6.5h2.8', 'M2 13.5h3.5l4.5 2h4.2a1.6 1.6 0 0 1 0 3.2H10', 'M5.5 20.5l3.5 1h6.5l6.3-4.7a1.7 1.7 0 0 0-2.1-2.7l-3.4 2.4', 'M2 13v8'],
  book: ['M2 5c3.2-1.6 6.8-1.6 10 1 3.2-2.6 6.8-2.6 10-1v14c-3.2-1.6-6.8-1.6-10 1-3.2-2.6-6.8-2.6-10-1z', 'M12 6v14', 'M5 9.5h4M5 13h4M15 9.5h4M15 13h4'],
  bars: ['M5 20v-6M10 20V9M15 20v-8M20 20V4', 'M3 21h19'],
  io: ['M7 3v14M3 13l4 4 4-4', 'M17 21V7M13 11l4-4 4 4'],
  lock: ['r:4.5,10.5,15,10.5,2.5', 'M8 10.5V7a4 4 0 0 1 8 0v3.5', 'M12 14.5v2.5'],
  search: ['c:10.5,10.5,6.5', 'M20.5 20.5l-5.2-5.2'],
  bell: ['M6 16.5V11a6 6 0 0 1 12 0v5.5l1.8 1.8H4.2z', 'M10 20.5a2 2 0 0 0 4 0'],
  gear: ['c:12,12,3', 'M12 2.5v3M12 18.5v3M3.8 7.3l2.6 1.5M17.6 15.2l2.6 1.5M3.8 16.7l2.6-1.5M17.6 8.8l2.6-1.5', 'c:12,12,7'],
  user: ['c:12,12,10', 'c:12,10,3.3', 'M5.8 19c1.3-2.7 3.5-4 6.2-4s4.9 1.3 6.2 4'],
  menu: ['M3 6h18M3 12h18M3 18h18'],
  edit: ['M4 20h4L19 9l-4-4L4 16z', 'M13.5 6.5l4 4'],
  trash: ['M4 7h16', 'M9 7V4h6v3', 'M6 7l1 13h10l1-13', 'M10 11v6M14 11v6'],
  eye: ['M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z', 'c:12,12,3'],
  image: ['r:3,4,18,16,2', 'c:9,10,2', 'M21 16l-5-5-9 9'],
  pdf: ['M6 3h9l5 5v13H6z', 'M15 3v5h5', 'M8.5 17v-4h1.5a1.3 1.3 0 0 1 0 2.6H8.5M13 13v4h1a2 2 0 0 0 0-4z'],
  download: ['M12 3v12', 'M7 10l5 5 5-5', 'M4 20h16'],
  upload: ['M12 16V4', 'M7 9l5-5 5 5', 'M4 20h16'],
  check: ['M5 12.5l4.5 4.5L19 7'],
  x: ['M6 6l12 12M18 6L6 18'],
  scale: ['M12 3v17', 'M8 20.5h8', 'M5 6.5h14', 'M5 6.5l-3 7a3 3 0 0 0 6 0z', 'M19 6.5l-3 7a3 3 0 0 0 6 0z'],
  wifi: ['M2 8.8a15 15 0 0 1 20 0', 'M5.2 12.3a10.5 10.5 0 0 1 13.6 0', 'M8.6 15.8a5.5 5.5 0 0 1 6.8 0', 'c:12,19.3,.6'],
  replace: ['M4 11a8 8 0 0 1 14-4.5L20 8', 'M20 3.5V8h-4.5', 'M20 13a8 8 0 0 1-14 4.5L4 16', 'M4 20.5V16h4.5'],
  phone: ['M5 3.5h3.5l2 5-2.5 1.5a11 11 0 0 0 6 6l1.5-2.5 5 2V19a2 2 0 0 1-2 2A17 17 0 0 1 3 5.5a2 2 0 0 1 2-2'],
  pin: ['M12 21s-7-6.2-7-11.2a7 7 0 0 1 14 0C19 14.8 12 21 12 21z', 'c:12,9.8,2.5'],
  chev: ['M15 6l-6 6 6 6'],
  laptop: ['r:4,4.5,16,11,1.5', 'M2 19h20'],
  clock: ['c:12,12,9', 'M12 7v5l3.5 2'],
  cheque: ['r:2,6,20,12,2', 'M5.5 14h6M14.5 14h4', 'M5.5 10h13'],
  calc: ['r:5,2.5,14,19,2', 'r:8,5.5,8,4,1', 'M8.5 13h.01M12 13h.01M15.5 13h.01M8.5 16.5h.01M12 16.5h.01M15.5 16.5h.01'],
  plus: ['M12 5v14M5 12h14'],
  cloud: ['M7 18.5h10.5a4 4 0 0 0 .6-7.95A6 6 0 0 0 6.6 9.3 4.6 4.6 0 0 0 7 18.5z', 'M9.5 13.5l2 2 3.5-3.5'],
  save: ['M5 3h11l3 3v15H5z', 'M8 3v5h7V3', 'r:8,13,8,8,1'],
  share: ['c:18,5,2.5', 'c:6,12,2.5', 'c:18,19,2.5', 'M8.2 10.8l7.6-4.4M8.2 13.2l7.6 4.4'],
  logo: ['r:3,2.5,12.5,19,2', 'M6 6.5h6.5M6 9.5h6.5M6 12.5h3.5', 'r:11.5,11,9.5,10.5,1.8', 'r:13.5,12.8,5.5,2.4,.6', 'M14 17.3h.01M16.25 17.3h.01M18.5 17.3h.01M14 19.4h.01M16.25 19.4h.01M18.5 19.4h.01']
};
function ic(name, extra = '') {
  const parts = (ICONS[name] || []).map(p => {
    if (p.startsWith('c:')) { const [cx, cy, r] = p.slice(2).split(','); return `<circle cx="${cx}" cy="${cy}" r="${r}"/>`; }
    if (p.startsWith('r:')) { const [x, y, w, h, rx] = p.slice(2).split(','); return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}"/>`; }
    return `<path d="${p}"/>`;
  }).join('');
  return `<svg class="i ${extra}" viewBox="0 0 24 24" aria-hidden="true">${parts}</svg>`;
}

/* ---------------- Helpers ---------------- */
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const num = v => { const n = parseFloat(String(v == null ? '' : v).replace(/,/g, '')); return isFinite(n) ? n : 0; };
const r2 = n => Math.round(n * 100) / 100;
const fmtN = n => Number(n || 0).toLocaleString('en-US', { maximumFractionDigits: 2 });
const rs = n => 'Rs. ' + fmtN(n);
const fmtD = d => { if (!d) return ''; const [y, m, dd] = d.split('-'); return `${dd}-${m}-${y}`; };
const today = () => { const d = new Date(); return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10); };
const uid = () => (crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(36) + Math.random().toString(36).slice(2, 10));
const sleep = ms => new Promise(r => setTimeout(r, ms));

const L = (ur, en) => (window.I18N && I18N.isEn() ? en : ur);
const METHOD = { cash: 'نقد', cheque: 'چیک', online: 'آن لائن' };
const METHOD_EN = { cash: 'Cash', cheque: 'Cheque', online: 'Online' };
const STATUS = { cleared: 'کلیئر', pending: 'زیرِ التوا', bounced: 'باؤنس', replaced: 'تبدیل شدہ' };
const STATUS_EN = { cleared: 'Cleared', pending: 'Pending', bounced: 'Bounced', replaced: 'Replaced' };

/* ---------------- IndexedDB ---------------- */
const DB_NAME = 'digitalKhataDB', DB_VER = 1;
const STORES = ['vendors', 'bills', 'payments', 'replacements', 'images', 'meta'];
let idb;
function openDB() {
  return new Promise((res, rej) => {
    const r = indexedDB.open(DB_NAME, DB_VER);
    r.onupgradeneeded = () => { const d = r.result; STORES.forEach(s => { if (!d.objectStoreNames.contains(s)) d.createObjectStore(s, { keyPath: 'id' }); }); };
    r.onsuccess = () => res(r.result);
    r.onerror = () => rej(r.error);
  });
}
function tx(stores, mode, fn) {
  return new Promise((res, rej) => {
    const t = idb.transaction(stores, mode); let out;
    const r = fn(t);
    if (r && 'onsuccess' in r) r.onsuccess = () => { out = r.result; };
    t.oncomplete = () => res(out); t.onerror = () => rej(t.error); t.onabort = () => rej(t.error);
  });
}
const dbGetAll = s => tx(s, 'readonly', t => t.objectStore(s).getAll());
const dbGet = (s, id) => tx(s, 'readonly', t => t.objectStore(s).get(id));
const dbPut = (s, v) => tx(s, 'readwrite', t => t.objectStore(s).put(v));
const dbDel = (s, id) => tx(s, 'readwrite', t => t.objectStore(s).delete(id));

const state = { vendors: [], bills: [], payments: [], replacements: [] };
async function loadAll() { for (const k of Object.keys(state)) state[k] = await dbGetAll(k); }
async function save(store, obj) {
  obj.updatedAt = Date.now(); if (!obj.createdAt) obj.createdAt = Date.now();
  await dbPut(store, obj);
  const arr = state[store], i = arr.findIndex(x => x.id === obj.id);
  if (i >= 0) arr[i] = obj; else arr.push(obj);
  markDirty();
}
async function removeRec(store, id) { await dbDel(store, id); state[store] = state[store].filter(x => x.id !== id); markDirty(); }

/* ---------------- Business logic (single source of truth) ---------------- */
const vendorById = id => state.vendors.find(v => v.id === id);
const payById = id => state.payments.find(p => p.id === id);
const billById = id => state.bills.find(b => b.id === id);
const repById = id => state.replacements.find(r => r.id === id);
const repsFor = pid => state.replacements.filter(r => r.paymentId === pid);
const repVendorId = r => { const p = payById(r.paymentId); return p ? p.vendorId : null; };
function chequeStatus(p) {
  if (p.method !== 'cheque') return null;
  if (repsFor(p.id).length) return 'replaced';
  return p.chequeStatus || 'cleared';
}
const payCounts = p => p.method !== 'cheque' || chequeStatus(p) === 'cleared';
const payEffDate = p => p.method === 'cheque' ? (p.clearDate || p.chequeDate || p.date) : p.date;

function vendorTotals(vid) {
  let bills = 0, billCount = 0, paid = 0, payCount = 0;
  state.bills.forEach(b => { if (b.vendorId === vid) { bills += num(b.amount); billCount++; } });
  state.payments.forEach(p => { if (p.vendorId === vid && payCounts(p)) { paid += num(p.amount); payCount++; } });
  state.replacements.forEach(r => { if (repVendorId(r) === vid) { paid += num(r.amount); payCount++; } });
  return { bills: r2(bills), billCount, paid: r2(paid), payCount, balance: r2(bills - paid) };
}
function payDetail(p) {
  if (p.method !== 'cheque') return [L(METHOD[p.method], METHOD_EN[p.method]), p.accountTitle, p.accountInfo, p.note].filter(Boolean).join(' – ');
  const st = chequeStatus(p);
  return L(`چیک #${p.chequeNo || '-'} (${STATUS[st]})`, `Cheque #${p.chequeNo || '-'} (${STATUS_EN[st]})`);
}
function khataEntries(vid) {
  const E = [];
  state.bills.filter(b => b.vendorId === vid).forEach(b =>
    E.push({ kind: 'bill', date: b.date, billNo: b.billNo, bill: num(b.amount), pay: 0, counted: true, ref: b, ct: b.createdAt || 0, detail: b.desc || L('بل', 'Bill') }));
  state.payments.filter(p => p.vendorId === vid).forEach(p =>
    E.push({ kind: 'pay', date: payEffDate(p), pay: num(p.amount), counted: payCounts(p), st: chequeStatus(p), ref: p, ct: p.createdAt || 0, detail: payDetail(p) }));
  state.replacements.filter(r => repVendorId(r) === vid).forEach(r => {
    const c = payById(r.paymentId);
    E.push({ kind: 'rep', date: r.date, pay: num(r.amount), counted: true, ref: r, ct: r.createdAt || 0, detail: L(`چیک #${c ? c.chequeNo : '-'} کی جگہ ${METHOD[r.method]}`, `${METHOD_EN[r.method]} in place of cheque #${c ? c.chequeNo : '-'}`) });
  });
  E.sort((a, b) => (a.date || '').localeCompare(b.date || '') || ((a.kind === 'bill' ? 0 : 1) - (b.kind === 'bill' ? 0 : 1)) || a.ct - b.ct);
  let bal = 0;
  E.forEach(e => { if (e.kind === 'bill') bal += e.bill; else if (e.counted) bal -= e.pay; e.bal = r2(bal); });
  return E;
}

/* ---------------- UI primitives ---------------- */
function toast(msg, err) {
  const t = document.createElement('div'); t.className = 'toast' + (err ? ' err' : ''); t.textContent = msg;
  $('#toast').appendChild(t); setTimeout(() => t.remove(), 2800);
}
function openModal(title, body, { wide } = {}) {
  const bg = document.createElement('div'); bg.className = 'modal-bg';
  bg.innerHTML = `<div class="modal ${wide ? 'wide' : ''}"><div class="modal-h"><h3>${title}</h3><button class="x" aria-label="Close">${ic('x')}</button></div><div class="modal-b">${body}</div></div>`;
  const close = () => bg.remove();
  bg.addEventListener('click', e => { if (e.target === bg || e.target.closest('.x')) close(); });
  $('#modalRoot').appendChild(bg);
  return { el: bg, close };
}
function confirmBox(msg, { ok = 'ہاں، حذف کریں', danger = true } = {}) {
  return new Promise(res => {
    const m = openModal('تصدیق کریں', `<p style="margin-bottom:10px">${msg}</p><div class="btn-row"><button class="btn ${danger ? 'btn-danger' : 'btn-primary'}" data-y>${ok}</button><button class="btn btn-light" data-n>منسوخ</button></div>`);
    m.el.addEventListener('click', e => {
      if (e.target.closest('[data-y]')) { m.close(); res(true); }
      else if (e.target.closest('[data-n]') || e.target === m.el || e.target.closest('.x')) { m.close(); res(false); }
    });
  });
}
async function withBusy(msg, fn) {
  const b = document.createElement('div'); b.className = 'busy'; b.innerHTML = `<div class="spinner"></div><div>${msg}</div>`;
  document.body.appendChild(b);
  try { return await fn(); } finally { b.remove(); }
}
function fieldErr(msg, el) { toast(msg, true); if (el) { el.focus(); el.style.borderColor = 'var(--red)'; setTimeout(() => el.style.borderColor = '', 2000); } }

/* Generic search-as-you-type picker */
function makePicker(host, { items, label, sub, match, onSelect, placeholder, info }) {
  host.classList.add('vp');
  host.innerHTML = `<input class="inp vp-in" autocomplete="off" placeholder="${esc(placeholder)}"><div class="vp-list"></div><div class="vp-info"></div>`;
  const inp = $('input', host), list = $('.vp-list', host), infoEl = $('.vp-info', host);
  let sel = null, hl = -1, cur = [];
  const draw = () => {
    const q = inp.value.trim().toLowerCase();
    cur = items().filter(x => !q || match(x, q)).sort((a, b) => {
      const as = label(a).toLowerCase().startsWith(q) ? 0 : 1, bs = label(b).toLowerCase().startsWith(q) ? 0 : 1;
      return as - bs || label(a).localeCompare(label(b));
    }).slice(0, 40);
    list.innerHTML = cur.length ? cur.map((x, i) => `<div class="vp-item ${i === hl ? 'hl' : ''}" data-i="${i}"><b translate="no">${esc(label(x))}</b><small>${esc(sub(x))}</small></div>`).join('')
      : `<div class="vp-empty">کوئی ریکارڈ نہیں ملا</div>`;
    list.classList.add('open');
    const h = $('.hl', list); if (h) h.scrollIntoView({ block: 'nearest' });
  };
  const showInfo = () => { if (info && sel) { infoEl.innerHTML = info(sel); infoEl.classList.add('show'); } else { infoEl.innerHTML = ''; infoEl.classList.remove('show'); } };
  const pick = (x, silent) => { sel = x || null; inp.value = sel ? label(sel) : ''; list.classList.remove('open'); hl = -1; showInfo(); if (!silent && onSelect) onSelect(sel); };
  inp.addEventListener('focus', draw);
  inp.addEventListener('input', () => { hl = -1; if (sel && inp.value !== label(sel)) { sel = null; showInfo(); onSelect && onSelect(null); } draw(); });
  inp.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown') { hl = Math.min(hl + 1, cur.length - 1); draw(); e.preventDefault(); }
    else if (e.key === 'ArrowUp') { hl = Math.max(hl - 1, 0); draw(); e.preventDefault(); }
    else if (e.key === 'Enter') { if (list.classList.contains('open') && cur.length) { pick(cur[Math.max(hl, 0)]); e.preventDefault(); } }
    else if (e.key === 'Escape') list.classList.remove('open');
  });
  list.addEventListener('mousedown', e => { e.preventDefault(); const it = e.target.closest('.vp-item'); if (it) pick(cur[+it.dataset.i]); });
  inp.addEventListener('blur', () => setTimeout(() => list.classList.remove('open'), 150));
  return { get value() { return sel; }, set(x, silent) { pick(x, silent); }, input: inp, refresh: showInfo };
}
function vendorPicker(host, { id, onSelect, placeholder, info = true } = {}) {
  const p = makePicker(host, {
    items: () => state.vendors, label: v => v.name, sub: v => [v.mobile, v.city].filter(Boolean).join(' · '),
    match: (v, q) => v.name.toLowerCase().includes(q) || (v.mobile || '').includes(q) || (v.city || '').toLowerCase().includes(q),
    onSelect, placeholder: placeholder || 'وینڈر کا نام لکھیں… (Type vendor name)',
    info: info ? v => {
      const t = vendorTotals(v.id);
      return `${v.mobile ? `<span class="chip">${ic('phone')}<span class="en">${esc(v.mobile)}</span></span>` : ''}${v.city ? `<span class="chip">${ic('pin')}${esc(v.city)}</span>` : ''}<span class="chip">بلز: <span class="en">${t.billCount}</span></span><span class="chip bal">بقایا: <span class="en">${rs(t.balance)}</span></span>`;
    } : null
  });
  if (id) { const v = vendorById(id); if (v) p.set(v, true); }
  return { get id() { return p.value ? p.value.id : null; }, get vendor() { return p.value; }, set: (vid, s) => p.set(vendorById(vid), s), input: p.input, refresh: p.refresh };
}

/* ---------------- Navigation ---------------- */
const NAV = [
  { r: 'home', ur: 'ہوم (ڈیش بورڈ)', ic: 'home' },
  { r: 'vendors', ur: 'وینڈر مینجمنٹ', ic: 'users' },
  { r: 'addbill', ur: 'نیا بل شامل کریں', ic: 'billAdd' },
  { r: 'bills', ur: 'وینڈر بلز', ic: 'bills' },
  { r: 'payments', ur: 'وینڈر پیمنٹس', ic: 'pay' },
  { r: 'khata', ur: 'ڈیجیٹل کھاتہ', ic: 'book' },
  { r: 'reports', ur: 'رپورٹس', ic: 'bars' },
  { r: 'data', ur: 'ڈیٹا امپورٹ / ایکسپورٹ', ic: 'io' },
  { r: 'password', ur: 'پاس ورڈ سیٹنگ', ic: 'lock' }
];
const BOTTOM = [
  { r: 'home', ur: 'ہوم', ic: 'home' }, { r: 'bills', ur: 'بلز', ic: 'bills', also: ['addbill'] },
  { r: 'payments', ur: 'پیمنٹس', ic: 'pay' }, { r: 'khata', ur: 'کھاتہ', ic: 'book' }, { r: 'reports', ur: 'رپورٹس', ic: 'bars' }
];
const routes = {};
function go(r, params) {
  const q = params ? '?' + new URLSearchParams(Object.entries(params).filter(([, v]) => v != null && v !== '')).toString() : '';
  const h = '#/' + r + (q === '?' ? '' : q);
  if (location.hash === h) render(); else location.hash = h;
}
function parseHash() {
  const h = location.hash.slice(2) || 'home'; const [r, q] = h.split('?');
  return { r: routes[r] ? r : 'home', q: Object.fromEntries(new URLSearchParams(q || '')) };
}
function render() {
  const { r, q } = parseHash();
  $$('#nav a').forEach(a => a.classList.toggle('active', a.dataset.r === r));
  $$('#bottomNav a').forEach(a => a.classList.toggle('active', a.dataset.r === r || (a.dataset.also || '').split(',').includes(r)));
  closeDrawer(); $('#modalRoot').innerHTML = '';
  const main = $('#main'); main.innerHTML = '';
  routes[r](main, q);
  window.scrollTo(0, 0);
  updateBell();
}
function closeDrawer() { $('#sidebar').classList.remove('open'); $('#drawerBg').classList.remove('open'); }
function titleBar(icon, ur, en, actions = '') {
  return `<div class="view-title"><div class="ic">${ic(icon)}</div><div><h2>${ur}</h2><div class="en">${en}</div></div><div class="actions">${actions}</div></div>`;
}
function updateBell() {
  const n = state.payments.filter(p => p.method === 'cheque' && chequeStatus(p) === 'pending').length;
  $('#bellBtn').innerHTML = ic('bell') + (n ? `<span class="dot">${n}</span>` : '');
}

/* ---------------- Shared table builders ---------------- */
const th = (ur, en) => `<th>${ur}${en ? `<span class="en">${en}</span>` : ''}</th>`;
const actBtns = (kind, id, extra = '') => `<div class="acts">${extra}<button data-act="${kind}-edit" data-id="${id}" title="Edit / ترمیم">${ic('edit')}</button><button class="del" data-act="${kind}-del" data-id="${id}" title="Delete / حذف">${ic('trash')}</button></div>`;

function billsTable(list, { showVendor = true } = {}) {
  if (!list.length) return `<div class="table-wrap"><div class="empty">کوئی بل موجود نہیں — No bills</div></div>`;
  list = [...list].sort((a, b) => (b.date || '').localeCompare(a.date || '') || (b.createdAt || 0) - (a.createdAt || 0));
  const total = list.reduce((a, b) => a + num(b.amount), 0);
  return `<div class="table-wrap"><table class="t"><thead><tr>${th('#')}${th('بل کی تاریخ', 'Bill Date')}${showVendor ? th('وینڈر', 'Vendor') : ''}${th('بل نمبر', 'Bill No')}${th('آئٹم کی تفصیل', 'Description')}${th('مقدار', 'Qty')}${th('ریٹ', 'Rate')}${th('رقم', 'Amount')}${th('تصویر', 'Image')}${th('ایکشن', 'Actions')}</tr></thead><tbody>
  ${list.map((b, i) => `<tr><td>${i + 1}</td><td class="dt">${fmtD(b.date)}</td>${showVendor ? `<td class="vname" translate="no" data-act="v-khata" data-id="${b.vendorId}">${esc((vendorById(b.vendorId) || {}).name)}</td>` : ''}<td class="en">${esc(b.billNo)}</td><td class="txt" translate="no">${esc(b.desc)}</td><td class="en">${b.qty ? fmtN(b.qty) + ' ' + (b.unit || '') : ''}</td><td class="num">${b.rate ? fmtN(b.rate) : ''}</td><td class="num">${fmtN(b.amount)}</td>
  <td>${b.imageId ? `<button class="img-link" data-act="bill-img" data-id="${b.id}" title="View bill image">${ic('image')}</button>` : '—'}</td>
  <td>${actBtns('bill', b.id, `<button data-act="bill-view" data-id="${b.id}" title="View / دیکھیں">${ic('eye')}</button>`)}</td></tr>`).join('')}
  </tbody><tfoot><tr><td colspan="${showVendor ? 7 : 6}">کل بل رقم — Total</td><td class="num">${fmtN(total)}</td><td colspan="2"></td></tr></tfoot></table></div>`;
}
function methodBadge(m) { return `<span class="badge b-${m}">${METHOD[m]}</span>`; }
function statusBadge(s) { return s ? `<span class="badge b-${s}">${STATUS[s]}</span>` : '—'; }
function paymentsTable(list, { showVendor = true } = {}) {
  if (!list.length) return `<div class="table-wrap"><div class="empty">کوئی پیمنٹ موجود نہیں — No payments</div></div>`;
  list = [...list].sort((a, b) => (b.date || '').localeCompare(a.date || '') || (b.createdAt || 0) - (a.createdAt || 0));
  const total = list.filter(payCounts).reduce((a, p) => a + num(p.amount), 0);
  return `<div class="table-wrap"><table class="t"><thead><tr>${th('#')}${th('پیمنٹ کی تاریخ', 'Payment Date')}${showVendor ? th('وینڈر', 'Vendor') : ''}${th('طریقہ', 'Method')}${th('چیک نمبر', 'Cheque No')}${th('چیک کی تاریخ', 'Cheque Date')}${th('کلیئر تاریخ', 'Clear Date')}${th('اسٹیٹس', 'Status')}${th('رقم', 'Amount')}${th('ایکشن', 'Actions')}</tr></thead><tbody>
  ${list.map((p, i) => { const st = chequeStatus(p); return `<tr class="${payCounts(p) ? '' : 'muted'}"><td>${i + 1}</td><td class="dt">${fmtD(p.date)}</td>${showVendor ? `<td class="vname" translate="no" data-act="v-khata" data-id="${p.vendorId}">${esc((vendorById(p.vendorId) || {}).name)}</td>` : ''}<td>${methodBadge(p.method)}</td><td class="en">${esc(p.chequeNo || '—')}</td><td class="dt">${fmtD(p.chequeDate) || '—'}</td><td class="dt">${fmtD(p.clearDate) || '—'}</td><td>${p.method === 'cheque' ? statusBadge(st) : '<span class="badge b-cleared">ادا شدہ</span>'}</td><td class="num">${fmtN(p.amount)}</td>
  <td>${actBtns('pay', p.id, p.method === 'cheque' && st !== 'replaced' ? `${st !== 'cleared' ? `<button class="ok" data-act="chq-clear" data-id="${p.id}" title="Mark cleared">${ic('check')}</button>` : ''}<button class="rep" data-act="chq-rep" data-id="${p.id}" title="Cheque replace">${ic('replace')}</button>` : '')}</td></tr>`; }).join('')}
  </tbody><tfoot><tr><td colspan="${showVendor ? 8 : 7}">کل ادا شدہ رقم — Total Paid (cleared only)</td><td class="num">${fmtN(total)}</td><td></td></tr></tfoot></table></div>`;
}

/* =================== VIEWS =================== */

/* ---------- Home ---------- */
routes.home = (main) => {
  const totBal = state.vendors.reduce((a, v) => a + vendorTotals(v.id).balance, 0);
  const all = [];
  state.vendors.forEach(v => khataEntries(v.id).forEach(e => all.push({ ...e, vname: v.name, vid: v.id })));
  all.sort((a, b) => (b.date || '').localeCompare(a.date || '') || b.ct - a.ct);
  const recent = all.slice(0, 8);
  main.innerHTML = `
  <div class="stats">
    <div class="stat blue" data-act="go" data-id="vendors"><div class="si">${ic('users')}</div><div class="st"><span>کل وینڈرز</span><b>${state.vendors.length}</b></div></div>
    <div class="stat green" data-act="go" data-id="bills"><div class="si">${ic('bills')}</div><div class="st"><span>کل بلز</span><b>${state.bills.length}</b></div></div>
    <div class="stat pink" data-act="go" data-id="payments"><div class="si">${ic('pay')}</div><div class="st"><span>کل پیمنٹس</span><b>${state.payments.length + state.replacements.length}</b></div></div>
    <div class="stat amber" data-act="go" data-id="khata"><div class="si">${ic('scale')}</div><div class="st"><span>بقایا رقم</span><b>${rs(totBal)}</b></div></div>
  </div>
  <div class="tiles">
    <button class="tile c1" data-act="go" data-id="vendors">${ic('users')}<span>نیا وینڈر شامل کریں</span></button>
    <button class="tile c2" data-act="go" data-id="addbill">${ic('billAdd')}<span>نیا بل شامل کریں</span></button>
    <button class="tile c3" data-act="go" data-id="payments">${ic('pay')}<span>پیمنٹ درج کریں</span></button>
    <button class="tile c4" data-act="go" data-id="khata">${ic('book')}<span>ڈیجیٹل کھاتہ دیکھیں</span></button>
    <button class="tile c5" data-act="go" data-id="reports">${ic('bars')}<span>رپورٹس</span></button>
  </div>
  <div class="grid-2">
    <div class="panel"><div class="panel-h">${ic('clock')}<h3>حالیہ ٹرانزیکشنز</h3><span class="sub">تازہ ترین بلز اور پیمنٹس</span></div>
      <div class="panel-b" style="padding:0">${recent.length ? `<div class="table-wrap" style="border:none;border-radius:0"><table class="t"><thead><tr>${th('#')}${th('تاریخ', 'Date')}${th('وینڈر کا نام', 'Vendor')}${th('بل نمبر', 'Bill No')}${th('بل رقم (Rs)', 'Bill')}${th('پیمنٹ (Rs)', 'Payment')}${th('بقایا (Rs)', 'Balance')}${th('تفصیل', 'Type')}</tr></thead><tbody>
      ${recent.map((e, i) => `<tr class="${e.counted ? '' : 'muted'}"><td>${i + 1}</td><td class="dt">${fmtD(e.date)}</td><td class="vname" translate="no" data-act="v-khata" data-id="${e.vid}">${esc(e.vname)}</td><td class="en">${esc(e.kind === 'bill' ? e.billNo : (e.kind === 'pay' && e.ref.chequeNo ? 'CHQ ' + e.ref.chequeNo : '—'))}</td><td class="num">${e.kind === 'bill' ? fmtN(e.bill) : '0'}</td><td class="num">${e.kind !== 'bill' ? fmtN(e.pay) : '0'}</td><td class="num">${fmtN(e.bal)}</td><td>${e.kind === 'bill' ? '<span class="badge b-bill">بل</span>' : e.kind === 'rep' ? '<span class="badge b-rep">چیک تبدیلی</span>' : (e.counted ? `<span class="badge b-pay">پیمنٹ · ${METHOD[e.ref.method]}</span>` : `<span class="badge b-${e.st}">چیک · ${STATUS[e.st]}</span>`)}</td></tr>`).join('')}
      </tbody></table></div>` : `<div class="empty">ابھی کوئی ٹرانزیکشن نہیں۔ شروع کرنے کے لیے پہلے وینڈر شامل کریں۔</div>`}</div></div>
    <div class="panel"><div class="panel-h">${ic('bills')}<h3>فوری رپورٹس</h3></div><div class="panel-b">
      <button class="qr-btn b" data-act="report" data-id="bill">${ic('bills')}<span>وینڈر بل کی تفصیل</span>${ic('chev', 'chev')}</button>
      <button class="qr-btn g" data-act="report" data-id="pay">${ic('pay')}<span>وینڈر پیمنٹ کی تفصیل</span>${ic('chev', 'chev')}</button>
      <button class="qr-btn p" data-act="report" data-id="khata">${ic('book')}<span>وینڈر کا ڈیجیٹل کھاتہ</span>${ic('chev', 'chev')}</button>
    </div></div>
  </div>
  <div class="features">
    <div class="feat">${ic('lock')}<span>پاس ورڈ<br>سیکیورٹی</span></div>
    <div class="feat">${ic('io')}<span>ڈیٹا امپورٹ<br>اور ایکسپورٹ</span></div>
    <div class="feat">${ic('pdf')}<span class="en">PDF & Image<br>Download</span></div>
    <div class="feat">${ic('edit')}<span>ایڈٹ / ڈیلیٹ<br>تمام ریکارڈز</span></div>
    <div class="feat">${ic('wifi')}<span>آف لائن کام کرتا ہے<br><span class="en">(PWA)</span></span></div>
    <div class="feat">${ic('laptop')}<span><span class="en">Android & Windows</span><br>دونوں کے لیے</span></div>
  </div>`;
};

/* ---------- Vendors ---------- */
routes.vendors = (main, q) => {
  const ed = q.edit ? vendorById(q.edit) : null;
  main.innerHTML = titleBar('users', 'وینڈر مینجمنٹ', 'Vendor Management') + `
  <div class="panel"><div class="panel-h">${ic(ed ? 'edit' : 'plus')}<h3>${ed ? 'وینڈر میں ترمیم کریں' : 'نیا وینڈر شامل کریں'}</h3><span class="sub en">${ed ? 'Edit Vendor' : 'Add New Vendor'}</span></div><div class="panel-b">
    ${ed ? `<div class="edit-banner">${ic('edit')} ترمیم موڈ: نام تبدیل کرنے سے تمام بلز، پیمنٹس اور رپورٹس میں خود بخود اپڈیٹ ہو جائے گا۔</div>` : ''}
    <div class="form-grid">
      <div class="field"><label>وینڈر کا نام <span class="req">*</span><span class="en">Vendor Name</span></label><input class="inp" id="vName" value="${esc(ed ? ed.name : '')}" placeholder="مثلاً: احمد ٹریڈرز"></div>
      <div class="field"><label>موبائل نمبر<span class="en">Mobile (optional)</span></label><input class="inp ltr" id="vMobile" inputmode="tel" value="${esc(ed ? ed.mobile : '')}" placeholder="03xx-xxxxxxx"></div>
      <div class="field"><label>شہر<span class="en">City (optional)</span></label><input class="inp" id="vCity" value="${esc(ed ? ed.city : '')}" placeholder="مثلاً: علی پور چٹھہ"></div>
    </div>
    <div class="btn-row"><button class="btn btn-primary" id="vSave">${ic('save')}${ed ? 'تبدیلیاں محفوظ کریں' : 'وینڈر محفوظ کریں'}</button>${ed ? `<button class="btn btn-light" id="vCancel">منسوخ</button>` : ''}</div>
  </div></div>
  <div class="panel"><div class="panel-h">${ic('users')}<h3>وینڈر ٹیبل</h3><span class="sub en">Vendor Table (${state.vendors.length})</span></div><div class="panel-b">
    <div class="toolbar"><div class="field"><input class="inp" id="vFilter" placeholder="تلاش کریں: نام، موبائل یا شہر…"></div></div>
    <div id="vTable"></div>
  </div></div>`;
  const drawTable = () => {
    const qq = $('#vFilter').value.trim().toLowerCase();
    const list = state.vendors.filter(v => !qq || v.name.toLowerCase().includes(qq) || (v.mobile || '').includes(qq) || (v.city || '').toLowerCase().includes(qq))
      .sort((a, b) => a.name.localeCompare(b.name));
    $('#vTable').innerHTML = list.length ? `<div class="table-wrap"><table class="t"><thead><tr>${th('#')}${th('وینڈر کا نام', 'Vendor Name')}${th('موبائل', 'Mobile')}${th('شہر', 'City')}${th('بلز', 'Bills')}${th('کل بل رقم', 'Total Bills')}${th('کل ادائیگی', 'Total Paid')}${th('بقایا', 'Balance')}${th('ایکشن', 'Actions')}</tr></thead><tbody>
    ${list.map((v, i) => { const t = vendorTotals(v.id); return `<tr><td>${i + 1}</td><td class="txt vname" translate="no" data-act="v-khata" data-id="${v.id}">${esc(v.name)}</td><td class="en">${esc(v.mobile || '—')}</td><td>${esc(v.city || '—')}</td><td class="en">${t.billCount}</td><td class="num">${fmtN(t.bills)}</td><td class="num">${fmtN(t.paid)}</td><td class="num" style="color:${t.balance > 0 ? 'var(--pink)' : 'var(--green)'}">${fmtN(t.balance)}</td><td>${actBtns('v', v.id, `<button data-act="v-khata" data-id="${v.id}" title="Digital Khata">${ic('book')}</button>`)}</td></tr>`; }).join('')}
    </tbody></table></div>` : `<div class="table-wrap"><div class="empty">${state.vendors.length ? 'کوئی میچ نہیں ملا' : 'ابھی کوئی وینڈر نہیں — اوپر فارم سے پہلا وینڈر شامل کریں'}</div></div>`;
  };
  $('#vFilter').addEventListener('input', drawTable); drawTable();
  if (ed) $('#vCancel').onclick = () => go('vendors');
  $('#vName').focus();
  $('#vSave').onclick = async () => {
    const name = $('#vName').value.trim().replace(/\s+/g, ' ');
    if (!name) return fieldErr('وینڈر کا نام لازمی ہے', $('#vName'));
    const dup = state.vendors.find(v => v.name.toLowerCase() === name.toLowerCase() && (!ed || v.id !== ed.id));
    if (dup) return fieldErr('یہ وینڈر پہلے سے موجود ہے — ہر وینڈر کا ریکارڈ منفرد ہونا چاہیے', $('#vName'));
    const obj = ed ? { ...ed } : { id: uid() };
    Object.assign(obj, { name, mobile: $('#vMobile').value.trim(), city: $('#vCity').value.trim() });
    await save('vendors', obj);
    toast(ed ? 'وینڈر اپڈیٹ ہو گیا ✓' : 'وینڈر محفوظ ہو گیا ✓');
    go('vendors');
  };
  [$('#vName'), $('#vMobile'), $('#vCity')].forEach(el => el.addEventListener('keydown', e => { if (e.key === 'Enter') $('#vSave').click(); }));
};

/* ---------- Add / Edit Bill ---------- */
async function fileToImage(file) {
  const url = await new Promise((res, rej) => { const fr = new FileReader(); fr.onload = () => res(fr.result); fr.onerror = rej; fr.readAsDataURL(file); });
  if (file.size <= 1.5 * 1024 * 1024 && /jpe?g|png|webp/i.test(file.type)) return url; // keep original
  const img = await new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = url; });
  const max = 2000, sc = Math.min(1, max / Math.max(img.width, img.height));
  const c = document.createElement('canvas'); c.width = Math.round(img.width * sc); c.height = Math.round(img.height * sc);
  const x = c.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, c.width, c.height); x.drawImage(img, 0, 0, c.width, c.height);
  return c.toDataURL('image/jpeg', 0.9);
}
routes.addbill = (main, q) => {
  const ed = q.edit ? billById(q.edit) : null;
  let pendingImg = null, removeImg = false, existingImg = null;
  main.innerHTML = titleBar('billAdd', ed ? 'بل میں ترمیم' : 'نیا بل شامل کریں', ed ? 'Edit Bill' : 'Add New Bill', `<button class="btn btn-light btn-sm" data-act="go" data-id="bills">${ic('bills')}تمام بلز</button>`) + `
  <div class="panel"><div class="panel-b">
    ${ed ? `<div class="edit-banner">${ic('edit')} ترمیم موڈ — محفوظ کرنے پر کھاتہ، بقایا اور رپورٹس خود بخود اپڈیٹ ہو جائیں گی۔</div>` : ''}
    <div class="form-grid">
      <div class="field span2"><label>وینڈر کا نام <span class="req">*</span><span class="en">Vendor Name</span></label><div id="bVendor"></div></div>
      <div class="field"><label>بل نمبر <span class="req">*</span><span class="en">Bill Number</span></label><input class="inp ltr" id="bNo" value="${esc(ed ? ed.billNo : '')}" placeholder="B-0001"></div>
      <div class="field"><label>بل کی تاریخ<span class="en">Bill Date</span></label><input type="date" class="inp" id="bDate" value="${ed ? ed.date : today()}"></div>
      <div class="field span2"><label>بل کی تصویر<span class="en">Attach Bill Image (optional)</span></label>
        <div class="img-attach"><label class="btn btn-light" style="margin:0">${ic('image')} تصویر منتخب کریں<input type="file" id="bImg" accept="image/*" hidden></label><span id="bImgPrev"></span></div></div>
      <div class="field full"><label>آئٹم کی تفصیل<span class="en">Item Description (optional)</span></label><input class="inp" id="bDesc" value="${esc(ed ? ed.desc : '')}" placeholder="مثلاً: سریا، سیمنٹ، گھی…"></div>
      <div class="field"><label>مقدار<span class="en">Quantity (optional)</span></label><div class="qty-row"><input type="number" class="inp" id="bQty" step="any" min="0" inputmode="decimal" value="${ed && ed.qty ? ed.qty : ''}" placeholder="500"><select class="inp" id="bUnit"><option>KG</option><option>LTR</option><option>PCS</option></select></div></div>
      <div class="field"><label>ریٹ<span class="en">Rate (optional)</span></label><input type="number" class="inp" id="bRate" step="any" min="0" inputmode="decimal" value="${ed && ed.rate ? ed.rate : ''}" placeholder="0"></div>
      <div class="field"><label>رقم (Rs) <span class="req">*</span><span class="en">Amount</span></label><input type="number" class="inp" id="bAmt" step="any" min="0" inputmode="decimal" value="${ed ? ed.amount : ''}" placeholder="0"><div class="hint" id="bAmtHint">مقدار × ریٹ درج کریں تو رقم خود بنے گی، ورنہ رقم خود لکھیں</div></div>
    </div>
    <div class="btn-row"><button class="btn btn-primary" id="bSave">${ic('save')}${ed ? 'تبدیلیاں محفوظ کریں' : 'بل محفوظ کریں (Save Bill)'}</button>${ed ? `<button class="btn btn-light" id="bCancel">منسوخ</button>` : `<button class="btn btn-light" id="bReset">فارم صاف کریں</button>`}</div>
  </div></div>
  <div class="panel hidden" id="bVendorBillsP"><div class="panel-h">${ic('bills')}<h3 id="bVBTitle">وینڈر کے بلز</h3></div><div class="panel-b" id="bVendorBills"></div></div>`;
  if (ed && ed.unit) $('#bUnit').value = ed.unit;
  const showVendorBills = () => {
    const vid = vp.id, p = $('#bVendorBillsP');
    if (!vid) { p.classList.add('hidden'); return; }
    p.classList.remove('hidden');
    $('#bVBTitle').textContent = `${vp.vendor.name} — ${L('بل ریکارڈ', 'Bill Records')}`;
    $('#bVendorBills').innerHTML = billsTable(state.bills.filter(b => b.vendorId === vid), { showVendor: false });
  };
  const vp = vendorPicker($('#bVendor'), { id: ed ? ed.vendorId : q.v, onSelect: showVendorBills });
  showVendorBills();
  const calc = () => {
    const qn = num($('#bQty').value), rt = num($('#bRate').value), a = $('#bAmt');
    if (qn > 0 && rt > 0) { a.value = r2(qn * rt); a.readOnly = true; $('#bAmtHint').textContent = `خودکار: ${fmtN(qn)} ${$('#bUnit').value} × ${fmtN(rt)} = ${fmtN(r2(qn * rt))}`; }
    else { a.readOnly = false; $('#bAmtHint').textContent = 'مقدار × ریٹ درج کریں تو رقم خود بنے گی، ورنہ رقم خود لکھیں'; }
  };
  ['bQty', 'bRate', 'bUnit'].forEach(id => $('#' + id).addEventListener('input', calc)); calc();
  const drawPrev = () => {
    const src = pendingImg || (!removeImg && existingImg);
    $('#bImgPrev').innerHTML = src ? `<img class="img-thumb" src="${src}" id="bThumb" alt="bill"> <button class="btn btn-danger btn-sm" id="bImgDel">${ic('trash')}ہٹائیں</button>` : '<span class="small">کوئی تصویر منسلک نہیں</span>';
    if (src) { $('#bThumb').onclick = () => viewImage(src, 'بل کی تصویر'); $('#bImgDel').onclick = () => { pendingImg = null; removeImg = true; $('#bImg').value = ''; drawPrev(); }; }
  };
  if (ed && ed.imageId) dbGet('images', ed.imageId).then(r => { existingImg = r ? r.data : null; drawPrev(); }); else drawPrev();
  $('#bImg').onchange = async e => { const f = e.target.files[0]; if (!f) return; try { pendingImg = await fileToImage(f); removeImg = false; drawPrev(); } catch { toast('تصویر لوڈ نہیں ہو سکی', true); } };
  if (ed) $('#bCancel').onclick = () => history.back();
  else $('#bReset').onclick = () => go('addbill', { v: vp.id });
  $('#bSave').onclick = async () => {
    if (!vp.id) return fieldErr('وینڈر منتخب کریں — موجودہ وینڈر ٹیبل سے', vp.input);
    const billNo = $('#bNo').value.trim();
    if (!billNo) return fieldErr('بل نمبر لازمی ہے', $('#bNo'));
    const amount = r2(num($('#bAmt').value));
    if (!(amount > 0)) return fieldErr('بل کی رقم درج کریں', $('#bAmt'));
    const dup = state.bills.find(b => b.vendorId === vp.id && b.billNo.toLowerCase() === billNo.toLowerCase() && (!ed || b.id !== ed.id));
    if (dup && !(await confirmBox(L(`اس وینڈر کا بل نمبر <b class="en">${esc(billNo)}</b> پہلے سے موجود ہے۔ کیا پھر بھی محفوظ کریں؟`, `Bill number <b>${esc(billNo)}</b> already exists for this vendor. Save anyway?`), { ok: 'ہاں، محفوظ کریں', danger: false }))) return;
    let imageId = ed ? ed.imageId || null : null;
    if (removeImg && imageId && !pendingImg) { await dbDel('images', imageId); imageId = null; }
    if (pendingImg) { if (!imageId) imageId = uid(); await dbPut('images', { id: imageId, data: pendingImg }); }
    const obj = ed ? { ...ed } : { id: uid() };
    Object.assign(obj, { vendorId: vp.id, billNo, date: $('#bDate').value || today(), desc: $('#bDesc').value.trim(), qty: num($('#bQty').value) || '', unit: $('#bUnit').value, rate: num($('#bRate').value) || '', amount, imageId });
    await save('bills', obj);
    toast(ed ? 'بل اپڈیٹ ہو گیا ✓ کھاتہ اپڈیٹ' : 'بل محفوظ ہو گیا ✓ کھاتہ اپڈیٹ');
    if (ed) go('bills', { v: obj.vendorId }); else go('addbill', { v: obj.vendorId });
  };
};

/* ---------- Bills list ---------- */
routes.bills = (main, q) => {
  main.innerHTML = titleBar('bills', 'وینڈر بلز', 'Vendor Bills', `<button class="btn btn-primary btn-sm" data-act="go" data-id="addbill">${ic('plus')}نیا بل</button>`) + `
  <div class="panel"><div class="panel-b">
    <div class="toolbar"><div class="field"><label>وینڈر تلاش کریں<span class="en">Search Vendor</span></label><div id="blV"></div></div>
    <div class="field" style="max-width:240px"><label>بل نمبر / تفصیل<span class="en">Bill No / Item</span></label><input class="inp" id="blQ" placeholder="تلاش…"></div></div>
    <div id="blT"></div></div></div>`;
  const draw = () => {
    const vid = vp.id, s = $('#blQ').value.trim().toLowerCase();
    const list = state.bills.filter(b => (!vid || b.vendorId === vid) && (!s || (b.billNo || '').toLowerCase().includes(s) || (b.desc || '').toLowerCase().includes(s)));
    $('#blT').innerHTML = billsTable(list, { showVendor: !vid });
  };
  const vp = vendorPicker($('#blV'), { id: q.v, onSelect: draw, placeholder: 'تمام وینڈرز — نام لکھ کر منتخب کریں' });
  $('#blQ').addEventListener('input', draw); draw();
};
async function getBillImage(b) { if (!b || !b.imageId) return null; const r = await dbGet('images', b.imageId); return r ? r.data : null; }
function viewImage(src, title) {
  const m = openModal(title || 'تصویر', `<img class="modal-img" src="${src}" alt="bill image"><div class="btn-row"><button class="btn btn-light" id="imgDl">${ic('download')}اصل تصویر ڈاؤن لوڈ کریں</button></div>`, { wide: true });
  $('#imgDl', m.el).onclick = async () => { const b = await (await fetch(src)).blob(); Render.download(b, 'Bill_Image.' + (b.type.split('/')[1] || 'jpg')); };
}
function billRep(b, img) {
  const v = vendorById(b.vendorId) || {};
  return {
    titleUr: 'وینڈر بل', titleEn: 'Vendor Bill', vendor: v, userCols: [1],
    columns: [{ ur: 'تفصیل', en: 'Field', w: 1, align: 'r' }, { ur: 'معلومات', en: 'Details', w: 1.7 }],
    rows: [[L('بل نمبر  Bill No', 'Bill No'), b.billNo], [L('بل کی تاریخ  Bill Date', 'Bill Date'), fmtD(b.date)], [L('آئٹم کی تفصیل  Item', 'Item Description'), b.desc || '—'],
      [L('مقدار  Quantity', 'Quantity'), b.qty ? fmtN(b.qty) + ' ' + (b.unit || '') : '—'], [L('ریٹ  Rate', 'Rate'), b.rate ? rs(b.rate) : '—'], [L('رقم  Amount', 'Amount'), rs(b.amount)]]
      .map((c, i) => ({ cells: c, bold: i === 5 })),
    summary: [{ ur: 'بل کی کل رقم', en: 'Bill Amount', value: rs(b.amount), color: 'amber' }],
    image: img || null
  };
}
async function showBill(id) {
  const b = billById(id); if (!b) return;
  const v = vendorById(b.vendorId) || {}, img = await getBillImage(b);
  const m = openModal('بل کی تفصیل — Bill Detail', `
    <dl class="kv"><dt>وینڈر</dt><dd translate="no">${esc(v.name)}</dd><dt>بل نمبر</dt><dd class="en">${esc(b.billNo)}</dd><dt>تاریخ</dt><dd class="en">${fmtD(b.date)}</dd>
    <dt>تفصیل</dt><dd translate="no">${esc(b.desc || '—')}</dd><dt>مقدار</dt><dd class="en">${b.qty ? fmtN(b.qty) + ' ' + b.unit : '—'}</dd><dt>ریٹ</dt><dd class="en">${b.rate ? fmtN(b.rate) : '—'}</dd>
    <dt>رقم</dt><dd class="en" style="font-size:20px;color:var(--navy)">${rs(b.amount)}</dd></dl>
    ${img ? `<div class="box-title">${ic('image')}اصل بل کی تصویر (کلک کریں)</div><img src="${img}" class="modal-img" id="mbImg" style="max-height:260px;object-fit:contain;cursor:zoom-in;background:#f3f6f8">` : '<p class="small">کوئی تصویر منسلک نہیں</p>'}
    <div class="btn-row"><button class="btn btn-primary" id="mbPng">${ic('image')}بل بطور Image</button><button class="btn btn-gold" id="mbPdf">${ic('pdf')}بل بطور PDF</button>
    <button class="btn btn-light" data-act="bill-edit" data-id="${b.id}">${ic('edit')}ترمیم</button><button class="btn btn-danger" data-act="bill-del" data-id="${b.id}">${ic('trash')}حذف</button></div>`);
  if (img) $('#mbImg', m.el).onclick = () => viewImage(img, 'بل کی تصویر — ' + b.billNo);
  const base = `Bill_${v.name}_${b.billNo}`;
  $('#mbPng', m.el).onclick = () => withBusy('Image تیار ہو رہی ہے…', async () => { const n = await Render.downloadImages(localizeRep(billRep(b, img)), base); toast(`Image ڈاؤن لوڈ (${n} صفحہ)`); });
  $('#mbPdf', m.el).onclick = () => withBusy('PDF تیار ہو رہی ہے…', async () => { const n = await Render.downloadPdf(localizeRep(billRep(b, img)), base); toast(`PDF ڈاؤن لوڈ (${n} صفحات)`); });
  m.el.addEventListener('click', e => { if (e.target.closest('[data-act]')) m.close(); });
}

/* ---------- Payments (entry, cheques, replacement) ---------- */
routes.payments = (main, q) => {
  const tab = q.tab || 'pay';
  main.innerHTML = titleBar('pay', 'وینڈر پیمنٹس', 'Vendor Payment Management') + `
  <div class="tabs"><button class="tab ${tab === 'pay' ? 'active' : ''}" data-act="ptab" data-id="pay">پیمنٹ درج کریں</button>
  <button class="tab ${tab === 'cheques' ? 'active' : ''}" data-act="ptab" data-id="cheques">چیک ریکارڈز</button>
  <button class="tab ${tab === 'replace' ? 'active' : ''}" data-act="ptab" data-id="replace">چیک تبدیلی (Replace)</button></div><div id="ptBody"></div>`;
  ({ pay: payTab, cheques: chequeTab, replace: replaceTab })[tab]($('#ptBody'), q);
};
function payTab(host, q) {
  const ed = q.edit ? payById(q.edit) : null;
  host.innerHTML = `<div class="panel"><div class="panel-h">${ic(ed ? 'edit' : 'plus')}<h3>${ed ? 'پیمنٹ میں ترمیم' : 'نئی پیمنٹ درج کریں'}</h3><span class="sub en">${ed ? 'Edit Payment' : 'Payment Entry'}</span></div><div class="panel-b">
    ${ed ? `<div class="edit-banner">${ic('edit')} ترمیم موڈ — محفوظ کرنے پر وینڈر کی پیمنٹ ہسٹری اور بقایا خود اپڈیٹ ہوں گے۔</div>` : ''}
    <div class="form-grid">
      <div class="field span2"><label>وینڈر کا نام <span class="req">*</span><span class="en">Vendor Name</span></label><div id="pV"></div></div>
      <div class="field"><label>پیمنٹ کی تاریخ<span class="en">Payment Date</span></label><input type="date" class="inp" id="pDate" value="${ed ? ed.date : today()}"></div>
      <div class="field"><label>پیمنٹ کی رقم (Rs) <span class="req">*</span><span class="en">Payment Amount</span></label><input type="number" class="inp" id="pAmt" step="any" min="0" inputmode="decimal" value="${ed ? ed.amount : ''}" placeholder="0"></div>
      <div class="field span2"><label>طریقہ ادائیگی<span class="en">Payment Method</span></label><div class="seg">
        <label><input type="radio" name="pM" value="cash" ${!ed || ed.method === 'cash' ? 'checked' : ''}>نقد <span class="en">Cash</span></label>
        <label><input type="radio" name="pM" value="cheque" ${ed && ed.method === 'cheque' ? 'checked' : ''}>چیک <span class="en">Cheque</span></label>
        <label><input type="radio" name="pM" value="online" ${ed && ed.method === 'online' ? 'checked' : ''}>آن لائن <span class="en">Online</span></label></div></div>
      <div class="full box hidden" id="pChq"><div class="box-title">${ic('cheque')}چیک کی تفصیل — Cheque Details</div><div class="form-grid">
        <div class="field"><label>چیک نمبر <span class="req">*</span><span class="en">Cheque Number</span></label><input class="inp ltr" id="pChqNo" value="${esc(ed ? ed.chequeNo || '' : '')}" placeholder="203344"></div>
        <div class="field"><label>چیک پر درج تاریخ<span class="en">Cheque Given Date</span></label><input type="date" class="inp" id="pChqDate" value="${ed ? ed.chequeDate || '' : ''}"></div>
        <div class="field"><label>چیک کلیئر ہونے کی تاریخ<span class="en">Cheque Clear Date (optional)</span></label><input type="date" class="inp" id="pClrDate" value="${ed ? ed.clearDate || '' : ''}"></div>
        <div class="field full"><label>چیک اسٹیٹس<span class="en">Cheque Status</span></label><div class="seg">
          <label><input type="radio" name="pSt" value="cleared">کلیئر <span class="en">Cleared</span></label>
          <label><input type="radio" name="pSt" value="pending">زیرِ التوا <span class="en">Pending</span></label>
          <label><input type="radio" name="pSt" value="bounced">باؤنس <span class="en">Not Cleared</span></label></div>
          <div class="hint">اگر چیک اسی تاریخ کو کلیئر ہوا جو چیک پر درج ہے تو کلیئر تاریخ خالی چھوڑ دیں۔ "زیرِ التوا" اور "باؤنس" چیک کھاتے میں ادائیگی شمار نہیں ہوتے۔</div></div>
      </div></div>
      <div class="full box hidden" id="pOnl"><div class="box-title">${ic('pay')}آن لائن اکاؤنٹ کی تفصیل — Online Account Details</div><div class="form-grid">
        <div class="field"><label>اکاؤنٹ ٹائٹل<span class="en">Account Title (optional)</span></label><input class="inp" id="pAccT" value="${esc(ed ? ed.accountTitle || '' : '')}"></div>
        <div class="field span2"><label>اکاؤنٹ کی معلومات<span class="en">Account Information (optional)</span></label><input class="inp" id="pAccI" value="${esc(ed ? ed.accountInfo || '' : '')}" placeholder="Bank / A/C No / IBAN / JazzCash"></div></div></div>
      <div class="field full"><label>نوٹ / حوالہ<span class="en">Note / Reference (optional)</span></label><input class="inp" id="pNote" value="${esc(ed ? ed.note || '' : '')}" placeholder="مثلاً: بینک ٹرانزیکشن آئی ڈی، وصول کنندہ…"></div>
    </div>
    <div class="btn-row"><button class="btn btn-primary" id="pSave">${ic('save')}${ed ? 'تبدیلیاں محفوظ کریں' : 'پیمنٹ محفوظ کریں (Save Payment)'}</button>${ed ? `<button class="btn btn-light" id="pCancel">منسوخ</button>` : ''}</div>
  </div></div>
  <div class="panel"><div class="panel-h">${ic('pay')}<h3 id="pListT">پیمنٹ ٹیبل</h3><span class="sub en">Vendor Payment Table</span></div><div class="panel-b" id="pList"></div></div>`;
  let stTouched = !!ed;
  const stVal = ed && ed.method === 'cheque' ? (ed.chequeStatus || 'cleared') : 'cleared';
  $(`input[name=pSt][value=${stVal}]`).checked = true;
  $$('input[name=pSt]').forEach(r => r.addEventListener('change', () => { stTouched = true; }));
  const method = () => $('input[name=pM]:checked').value;
  const toggle = () => { $('#pChq').classList.toggle('hidden', method() !== 'cheque'); $('#pOnl').classList.toggle('hidden', method() !== 'online'); };
  $$('input[name=pM]').forEach(r => r.addEventListener('change', toggle)); toggle();
  $('#pChqDate').addEventListener('change', () => { // post-dated cheque → suggest Pending
    if (stTouched || $('#pClrDate').value) return;
    $(`input[name=pSt][value=${$('#pChqDate').value > today() ? 'pending' : 'cleared'}]`).checked = true;
  });
  $('#pClrDate').addEventListener('change', () => { if ($('#pClrDate').value) $('input[name=pSt][value=cleared]').checked = true; });
  const drawList = () => {
    const vid = vp.id;
    $('#pListT').textContent = vid ? `${vp.vendor.name} — ${L('پیمنٹ ہسٹری', 'Payment History')}` : L('پیمنٹ ٹیبل (تمام وینڈرز)', 'Payment Table (all vendors)');
    $('#pList').innerHTML = paymentsTable(state.payments.filter(p => !vid || p.vendorId === vid), { showVendor: !vid });
  };
  const vp = vendorPicker($('#pV'), { id: ed ? ed.vendorId : q.v, onSelect: drawList });
  drawList();
  if (ed) $('#pCancel').onclick = () => history.back();
  $('#pSave').onclick = async () => {
    if (!vp.id) return fieldErr('وینڈر منتخب کریں', vp.input);
    const amount = r2(num($('#pAmt').value));
    if (!(amount > 0)) return fieldErr('پیمنٹ کی رقم درج کریں', $('#pAmt'));
    const m = method();
    const obj = ed ? { ...ed } : { id: uid() };
    Object.assign(obj, { vendorId: vp.id, date: $('#pDate').value || today(), amount, method: m, note: $('#pNote').value.trim(),
      accountTitle: m === 'online' ? $('#pAccT').value.trim() : '', accountInfo: m === 'online' ? $('#pAccI').value.trim() : '' });
    if (m === 'cheque') {
      const no = $('#pChqNo').value.trim();
      if (!no) return fieldErr('چیک نمبر درج کریں', $('#pChqNo'));
      Object.assign(obj, { chequeNo: no, chequeDate: $('#pChqDate').value || obj.date, clearDate: $('#pClrDate').value || '', chequeStatus: $('input[name=pSt]:checked').value });
    } else {
      if (ed && ed.method === 'cheque' && repsFor(ed.id).length && !(await confirmBox('اس چیک کے ساتھ تبدیلی (replacement) ریکارڈ منسلک ہیں۔ طریقہ بدلنے سے وہ بھی حذف ہو جائیں گے۔ جاری رکھیں؟'))) return;
      if (ed && ed.method === 'cheque') for (const r of repsFor(ed.id)) await removeRec('replacements', r.id);
      Object.assign(obj, { chequeNo: '', chequeDate: '', clearDate: '', chequeStatus: '' });
    }
    await save('payments', obj);
    toast(ed ? 'پیمنٹ اپڈیٹ ہو گئی ✓' : 'پیمنٹ محفوظ ہو گئی ✓ کھاتہ اپڈیٹ');
    if (ed) go('payments', { v: obj.vendorId }); else go('payments', { v: obj.vendorId });
  };
}
function chequeTab(host, q) {
  host.innerHTML = `<div class="panel"><div class="panel-h">${ic('cheque')}<h3>چیک ریکارڈز</h3><span class="sub en">Cheque Records</span></div><div class="panel-b">
    <div class="toolbar"><div class="field"><label>وینڈر<span class="en">Vendor</span></label><div id="cV"></div></div>
    <div class="field" style="max-width:220px"><label>اسٹیٹس<span class="en">Status</span></label><select class="inp" id="cSt"><option value="">تمام</option><option value="pending">زیرِ التوا</option><option value="cleared">کلیئر</option><option value="bounced">باؤنس</option><option value="replaced">تبدیل شدہ</option></select></div></div>
    <div id="cT"></div></div></div>`;
  if (q.st) $('#cSt').value = q.st;
  const draw = () => {
    const vid = vp.id, st = $('#cSt').value;
    const list = state.payments.filter(p => p.method === 'cheque' && (!vid || p.vendorId === vid) && (!st || chequeStatus(p) === st))
      .sort((a, b) => (b.chequeDate || '').localeCompare(a.chequeDate || ''));
    $('#cT').innerHTML = list.length ? `<div class="table-wrap"><table class="t"><thead><tr>${th('#')}${th('چیک نمبر', 'Cheque No')}${th('وینڈر', 'Vendor')}${th('پیمنٹ تاریخ', 'Payment Date')}${th('چیک کی تاریخ', 'Cheque Date')}${th('کلیئر تاریخ', 'Clear Date')}${th('رقم', 'Amount')}${th('اسٹیٹس', 'Status')}${th('تبدیلی کی تفصیل', 'Replacement')}${th('ایکشن', 'Actions')}</tr></thead><tbody>
    ${list.map((p, i) => { const s = chequeStatus(p), reps = repsFor(p.id); return `<tr><td>${i + 1}</td><td class="en"><b>${esc(p.chequeNo)}</b></td><td class="vname" translate="no" data-act="v-khata" data-id="${p.vendorId}">${esc((vendorById(p.vendorId) || {}).name)}</td><td class="dt">${fmtD(p.date)}</td><td class="dt">${fmtD(p.chequeDate)}</td><td class="dt">${fmtD(p.clearDate) || (s === 'cleared' ? '<span class="small">چیک تاریخ</span>' : '—')}</td><td class="num">${fmtN(p.amount)}</td><td>${statusBadge(s)}</td>
    <td class="txt" style="font-size:12.5px">${reps.length ? reps.map(r => `${fmtD(r.date)} · ${METHOD[r.method]} · <b class="en">${rs(r.amount)}</b>`).join('<br>') : '—'}</td>
    <td>${actBtns('pay', p.id, `${s === 'pending' || s === 'bounced' ? `<button class="ok" data-act="chq-clear" data-id="${p.id}" title="کلیئر مارک کریں">${ic('check')}</button>` : ''}<button class="rep" data-act="chq-rep" data-id="${p.id}" title="Cheque Replace">${ic('replace')}</button>`)}</td></tr>`; }).join('')}
    </tbody></table></div>` : `<div class="table-wrap"><div class="empty">کوئی چیک ریکارڈ نہیں</div></div>`;
  };
  const vp = vendorPicker($('#cV'), { id: q.v, onSelect: draw, placeholder: 'تمام وینڈرز', info: false });
  $('#cSt').onchange = draw; draw();
}
function chequePicker(host, { onSelect }) {
  return makePicker(host, {
    items: () => state.payments.filter(p => p.method === 'cheque'),
    label: p => p.chequeNo || '-', sub: p => `${(vendorById(p.vendorId) || {}).name || ''} · ${rs(p.amount)} · ${STATUS_EN[chequeStatus(p)]}`,
    match: (p, q) => (p.chequeNo || '').toLowerCase().includes(q) || ((vendorById(p.vendorId) || {}).name || '').toLowerCase().includes(q),
    onSelect, placeholder: 'اصل چیک نمبر لکھیں… مثلاً 203344',
    info: p => `<span class="chip">${ic('users')}${esc((vendorById(p.vendorId) || {}).name)}</span><span class="chip">چیک تاریخ: <span class="en">${fmtD(p.chequeDate)}</span></span><span class="chip bal">رقم: <span class="en">${rs(p.amount)}</span></span>${statusBadge(chequeStatus(p))}`
  });
}
function replaceTab(host, q) {
  const ed = q.edit ? repById(q.edit) : null;
  host.innerHTML = `<div class="panel"><div class="panel-h">${ic('replace')}<h3>${ed ? 'چیک تبدیلی میں ترمیم' : 'چیک تبدیلی / متبادل ادائیگی'}</h3><span class="sub en">Cheque Replacement Payment</span></div><div class="panel-b">
    <p class="hint" style="margin-bottom:10px">جب کوئی چیک کلیئر نہ ہو اور وینڈر نقد یا آن لائن ادائیگی مانگے تو یہاں درج کریں۔ اصل چیک کھاتے سے ہٹ جائے گا اور صرف متبادل رقم بطور ادائیگی شمار ہوگی۔</p>
    <div class="form-grid">
      <div class="field full"><label>اصل چیک نمبر <span class="req">*</span><span class="en">Original Cheque Number</span></label><div id="rChq"></div></div>
      <div class="field"><label>متبادل ادائیگی کی تاریخ<span class="en">Replacement Payment Date</span></label><input type="date" class="inp" id="rDate" value="${ed ? ed.date : today()}"></div>
      <div class="field span2"><label>متبادل طریقہ<span class="en">Replacement Method</span></label><div class="seg">
        <label><input type="radio" name="rM" value="online" ${!ed || ed.method === 'online' ? 'checked' : ''}>آن لائن <span class="en">Online</span></label>
        <label><input type="radio" name="rM" value="cash" ${ed && ed.method === 'cash' ? 'checked' : ''}>نقد <span class="en">Cash</span></label></div></div>
      <div class="full box" id="rOnline"><div class="form-grid">
        <div class="field"><label>اکاؤنٹ ٹائٹل<span class="en">Account Title</span></label><input class="inp" id="rAccT" value="${esc(ed ? ed.accountTitle || '' : '')}"></div>
        <div class="field span2"><label>اکاؤنٹ کی معلومات<span class="en">Account Information (Bank / A/C No / IBAN)</span></label><input class="inp" id="rAccI" value="${esc(ed ? ed.accountInfo || '' : '')}"></div></div></div>
      <div class="full box hidden" id="rCash"><div class="field"><label>نقد وصول کرنے والے کا نام<span class="en">Cash Received By</span></label><input class="inp" id="rPerson" value="${esc(ed ? ed.personName || '' : '')}"></div></div>
      <div class="field"><label>متبادل رقم (Rs) <span class="req">*</span><span class="en">Replacement Amount</span></label><input type="number" class="inp" id="rAmt" step="any" min="0" inputmode="decimal" value="${ed ? ed.amount : ''}"></div>
    </div>
    <div class="btn-row"><button class="btn btn-primary" id="rSave">${ic('save')}${ed ? 'تبدیلیاں محفوظ کریں' : 'محفوظ کریں (Save)'}</button>${ed ? `<button class="btn btn-light" id="rCancel">منسوخ</button>` : ''}</div>
  </div></div>
  <div class="panel"><div class="panel-h">${ic('clock')}<h3>چیک تبدیلی ہسٹری</h3><span class="sub en">Cheque Replacement History</span></div><div class="panel-b" id="rList"></div></div>`;
  const cp = chequePicker($('#rChq'), {
    onSelect: p => {
      if (p && !ed && !$('#rAmt').value) { const done = repsFor(p.id).reduce((a, r) => a + num(r.amount), 0); $('#rAmt').value = Math.max(0, r2(num(p.amount) - done)) || p.amount; }
    }
  });
  const pre = ed ? payById(ed.paymentId) : (q.chq ? payById(q.chq) : null);
  if (pre) cp.set(pre, !!ed);
  const tg = () => { const m = $('input[name=rM]:checked').value; $('#rOnline').classList.toggle('hidden', m !== 'online'); $('#rCash').classList.toggle('hidden', m !== 'cash'); };
  $$('input[name=rM]').forEach(r => r.addEventListener('change', tg)); tg();
  const list = [...state.replacements].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  $('#rList').innerHTML = list.length ? `<div class="table-wrap"><table class="t"><thead><tr>${th('#')}${th('اصل چیک نمبر', 'Original Cheque')}${th('وینڈر', 'Vendor')}${th('چیک رقم', 'Cheque Amt')}${th('تاریخ', 'Date')}${th('طریقہ', 'Method')}${th('اکاؤنٹ / وصول کنندہ', 'Account / Person')}${th('متبادل رقم', 'Amount')}${th('ایکشن', 'Actions')}</tr></thead><tbody>
    ${list.map((r, i) => { const c = payById(r.paymentId) || {}; return `<tr><td>${i + 1}</td><td class="en"><b>${esc(c.chequeNo)}</b></td><td class="vname" translate="no" data-act="v-khata" data-id="${c.vendorId}">${esc((vendorById(c.vendorId) || {}).name)}</td><td class="num">${fmtN(c.amount)}</td><td class="dt">${fmtD(r.date)}</td><td>${methodBadge(r.method)}</td><td class="txt">${esc(r.method === 'online' ? [r.accountTitle, r.accountInfo].filter(Boolean).join(' — ') : r.personName) || '—'}</td><td class="num">${fmtN(r.amount)}</td><td>${actBtns('rep', r.id)}</td></tr>`; }).join('')}
    </tbody></table></div>` : `<div class="table-wrap"><div class="empty">ابھی کوئی چیک تبدیلی ریکارڈ نہیں</div></div>`;
  if (ed) $('#rCancel').onclick = () => go('payments', { tab: 'replace' });
  $('#rSave').onclick = async () => {
    const c = cp.value;
    if (!c) return fieldErr('اصل چیک منتخب کریں', cp.input);
    const amount = r2(num($('#rAmt').value));
    if (!(amount > 0)) return fieldErr('متبادل رقم درج کریں', $('#rAmt'));
    const m = $('input[name=rM]:checked').value;
    const obj = ed ? { ...ed } : { id: uid() };
    Object.assign(obj, { paymentId: c.id, date: $('#rDate').value || today(), method: m,
      accountTitle: m === 'online' ? $('#rAccT').value.trim() : '', accountInfo: m === 'online' ? $('#rAccI').value.trim() : '',
      personName: m === 'cash' ? $('#rPerson').value.trim() : '', amount });
    await save('replacements', obj);
    if (c.chequeStatus !== 'bounced') { const cc = { ...c, chequeStatus: 'bounced', clearDate: '' }; await save('payments', cc); }
    toast('چیک تبدیلی محفوظ ✓ کھاتہ اپڈیٹ');
    go('payments', { tab: 'replace' });
  };
}
function markCleared(id) {
  const p = payById(id); if (!p) return;
  const m = openModal('چیک کلیئر مارک کریں', `<p>چیک نمبر <b class="en">${esc(p.chequeNo)}</b> — <span class="en">${rs(p.amount)}</span></p>
    <div class="field" style="margin:10px 0"><label>کلیئر ہونے کی تاریخ<span class="en">Clear Date</span></label><input type="date" class="inp" id="mcD" value="${p.chequeDate && p.chequeDate <= today() ? p.chequeDate : today()}"></div>
    <div class="btn-row"><button class="btn btn-green" id="mcOk">${ic('check')}کلیئر محفوظ کریں</button></div>`);
  $('#mcOk', m.el).onclick = async () => {
    const d = $('#mcD', m.el).value;
    await save('payments', { ...p, chequeStatus: 'cleared', clearDate: d && d !== p.chequeDate ? d : '' });
    m.close(); toast('چیک کلیئر ✓ کھاتہ اپڈیٹ'); render();
  };
}

/* ---------- Digital Khata ---------- */
routes.khata = (main, q) => {
  main.innerHTML = titleBar('book', 'ڈیجیٹل کھاتہ', 'Vendor Debit & Credit Account') + `
  <div class="panel"><div class="panel-b"><div class="field"><label>وینڈر کا نام تلاش کریں<span class="en">Vendor Name Search</span></label><div id="kV"></div></div><div id="kBody"></div></div></div>`;
  const draw = () => {
    const v = vp.vendor;
    if (!v) { $('#kBody').innerHTML = `<div class="empty">${ic('book')}<br>وینڈر کا نام لکھ کر منتخب کریں — مکمل کھاتہ خود بخود ظاہر ہوگا</div>`; return; }
    if (q.v !== v.id) history.replaceState(null, '', '#/khata?v=' + v.id);
    const t = vendorTotals(v.id), E = khataEntries(v.id);
    $('#kBody').innerHTML = `
    <div class="sum-cards"><div class="sum s1"><span>کل بل رقم <span class="en small">Total Bill Amount</span></span><b>${rs(t.bills)}</b></div>
    <div class="sum s2"><span>کل ادائیگی <span class="en small">Total Payment Amount</span></span><b>${rs(t.paid)}</b></div>
    <div class="sum s3 ${t.balance <= 0 ? 'zero' : ''}"><span>کل بقایا <span class="en small">Remaining Balance</span></span><b>${rs(t.balance)}</b></div></div>
    <div class="toolbar" style="justify-content:space-between"><div class="dl-row">
      <button class="btn btn-primary btn-sm" data-act="dl-img" data-id="khata">${ic('image')}کھاتہ بطور Image</button>
      <button class="btn btn-gold btn-sm" data-act="dl-pdf" data-id="khata">${ic('pdf')}کھاتہ بطور PDF</button></div>
      <div class="dl-row"><button class="btn btn-light btn-sm" data-act="go-v" data-id="addbill">${ic('billAdd')}نیا بل</button><button class="btn btn-light btn-sm" data-act="go-v" data-id="payments">${ic('pay')}نئی پیمنٹ</button></div></div>
    ${E.length ? `<div class="table-wrap"><table class="t"><thead><tr>${th('#')}${th('بل کی تاریخ', 'Bill Date')}${th('بل نمبر', 'Bill Number')}${th('بل رقم', 'Bill Amount')}${th('پیمنٹ رقم', 'Payment Amount')}${th('پیمنٹ کی تاریخ', 'Payment Date')}${th('تفصیل', 'Details')}${th('بقایا', 'Balance')}${th('ایکشن', 'Actions')}</tr></thead><tbody>
    ${E.map((e, i) => `<tr class="${e.counted ? '' : 'muted'}"><td>${i + 1}</td><td class="dt">${e.kind === 'bill' ? fmtD(e.date) : ''}</td><td class="en">${e.kind === 'bill' ? esc(e.billNo) : ''}</td><td class="num" style="color:#8a5b07">${e.kind === 'bill' ? fmtN(e.bill) : ''}</td><td class="num" style="color:var(--green)">${e.kind !== 'bill' ? fmtN(e.pay) : ''}</td><td class="dt">${e.kind !== 'bill' ? fmtD(e.date) : ''}</td><td class="txt" style="font-size:13px" translate="no">${e.kind === 'bill' ? (e.ref.imageId ? `<button class="img-link" data-act="bill-img" data-id="${e.ref.id}">${ic('image')}</button> ` : '') + esc(e.detail) : esc(e.detail) + (e.counted ? '' : ` — <b>${L('شمار نہیں', 'not counted')}</b>`)}</td><td class="num">${fmtN(e.bal)}</td>
    <td>${e.kind === 'bill' ? actBtns('bill', e.ref.id) : e.kind === 'pay' ? actBtns('pay', e.ref.id) : actBtns('rep', e.ref.id)}</td></tr>`).join('')}
    </tbody><tfoot><tr><td colspan="3">کل — Total</td><td class="num">${fmtN(t.bills)}</td><td class="num">${fmtN(t.paid)}</td><td colspan="2">بقایا — Remaining</td><td class="num">${fmtN(t.balance)}</td><td></td></tr></tfoot></table></div>`
      : `<div class="table-wrap"><div class="empty">اس وینڈر کا ابھی کوئی ریکارڈ نہیں</div></div>`}`;
    curReport = { type: 'khata', vid: v.id };
  };
  const vp = vendorPicker($('#kV'), { id: q.v, onSelect: draw });
  draw();
};

/* ---------- Reports ---------- */
let curReport = null;
function inRange(d, from, to) { return (!from || d >= from) && (!to || d <= to); }
function buildReport(type, vid, from, to) {
  const v = vendorById(vid) || {};
  const meta = []; if (from || to) meta.push(['Period', `${fmtD(from) || 'Start'} to ${fmtD(to) || 'Today'}`]);
  if (type === 'bill') {
    const list = state.bills.filter(b => b.vendorId === vid && inRange(b.date, from, to)).sort((a, b) => a.date.localeCompare(b.date) || a.createdAt - b.createdAt);
    const total = list.reduce((a, b) => a + num(b.amount), 0);
    return { titleUr: 'وینڈر بل کی تفصیل', titleEn: 'Vendor Bill Detail Report', vendor: v, meta, userCols: [3],
      columns: [{ ur: '#', w: 0.5 }, { ur: 'بل کی تاریخ', en: 'Bill Date', w: 1.3 }, { ur: 'بل نمبر', en: 'Bill Number', w: 1.2 }, { ur: 'آئٹم کی تفصیل', en: 'Item Description', w: 2.5, align: 'r' }, { ur: 'مقدار', en: 'Quantity', w: 1.15 }, { ur: 'ریٹ', en: 'Rate', w: 1.05, num: 1 }, { ur: 'بل رقم', en: 'Bill Amount', w: 1.45, num: 1 }],
      rows: list.map((b, i) => ({ cells: [i + 1, fmtD(b.date), b.billNo, b.desc || '—', b.qty ? fmtN(b.qty) + ' ' + (b.unit || '') : '—', b.rate ? fmtN(b.rate) : '—', fmtN(b.amount)] })),
      summary: [{ ur: 'کل بلز', en: 'Total Bills', value: String(list.length), color: 'blue' }, { ur: 'کل بل رقم', en: 'Total Bill Amount', value: rs(total), color: 'amber' }] };
  }
  if (type === 'pay') {
    const rows = []; let total = 0, notCounted = 0;
    const items = [];
    state.payments.filter(p => p.vendorId === vid && inRange(p.date, from, to)).forEach(p => items.push({ k: 'p', d: p.date, ct: p.createdAt, p }));
    state.replacements.filter(r => repVendorId(r) === vid && inRange(r.date, from, to)).forEach(r => items.push({ k: 'r', d: r.date, ct: r.createdAt, r }));
    items.sort((a, b) => a.d.localeCompare(b.d) || a.ct - b.ct);
    items.forEach(it => {
      if (it.k === 'p') {
        const p = it.p, st = chequeStatus(p), counted = payCounts(p);
        if (counted) total += num(p.amount); else notCounted += num(p.amount);
        const reps = repsFor(p.id);
        rows.push({ muted: !counted, cells: [rows.length + 1, fmtD(p.date), L(METHOD[p.method] + ' ' + METHOD_EN[p.method], METHOD_EN[p.method]), p.chequeNo || '—', fmtD(p.chequeDate) || '—',
          p.method === 'cheque' ? (st === 'cleared' ? (fmtD(p.clearDate) || fmtD(p.chequeDate)) : L(STATUS[st] + ' ' + STATUS_EN[st], STATUS_EN[st])) : '—',
          reps.length ? reps.map(r => `${fmtD(r.date)} ${METHOD_EN[r.method]} ${rs(r.amount)}`).join('\n') : ([p.accountTitle, p.accountInfo, p.note].filter(Boolean).join(' / ') || '—'),
          fmtN(p.amount) + (counted ? '' : ' *')] });
      } else {
        const r = it.r, c = payById(r.paymentId) || {}; total += num(r.amount);
        const who = r.method === 'online' ? [r.accountTitle, r.accountInfo].filter(Boolean).join(' / ') : (r.personName ? 'Received by: ' + r.personName : '');
        rows.push({ cells: [rows.length + 1, fmtD(r.date), L('متبادل ' + METHOD_EN[r.method], 'Replacement ' + METHOD_EN[r.method]), c.chequeNo || '—', fmtD(c.chequeDate) || '—', 'Replaced',
          `Replacement of cheque #${c.chequeNo}${who ? ' – ' + who : ''}`, fmtN(r.amount)] });
      }
    });
    const summary = [{ ur: 'کل ادائیگی', en: 'Total Payment Amount', value: rs(total), color: 'green' }];
    if (notCounted) summary.push({ ur: 'غیر شمار شدہ چیک *', en: 'Pending / Bounced / Replaced', value: rs(notCounted), color: 'pink' });
    return { titleUr: 'وینڈر پیمنٹ کی تفصیل', titleEn: 'Vendor Payment Detail Report', vendor: v, meta, userCols: [6],
      columns: [{ ur: '#', w: 0.45 }, { ur: 'پیمنٹ تاریخ', en: 'Payment Date', w: 1.25 }, { ur: 'طریقہ', en: 'Method', w: 1.1 }, { ur: 'چیک نمبر', en: 'Cheque No', w: 1.05 }, { ur: 'چیک تاریخ', en: 'Cheque Given Date', w: 1.2 }, { ur: 'کلیئر تاریخ', en: 'Cheque Clear Date', w: 1.25 }, { ur: 'اکاؤنٹ / متبادل تفصیل', en: 'Account / Replacement Details', w: 2.1, align: 'r' }, { ur: 'رقم', en: 'Payment Amount', w: 1.3, num: 1 }],
      rows, summary };
  }
  // khata
  let E = khataEntries(vid); let opening = 0;
  if (from) { const prev = E.filter(e => e.date < from); opening = prev.length ? prev[prev.length - 1].bal : 0; }
  E = E.filter(e => inRange(e.date, from, to));
  let tb = 0, tp = 0;
  const rows = [];
  if (from) rows.push({ bold: true, fill: '#fff7e6', cells: ['', fmtD(from), '', '', '', '', L('سابقہ بقایا  Opening Balance', 'Opening Balance'), fmtN(opening)] });
  E.forEach(e => {
    if (e.kind === 'bill') tb += e.bill; else if (e.counted) tp += e.pay;
    rows.push({ muted: !e.counted, cells: [rows.length + (from ? 0 : 1), e.kind === 'bill' ? fmtD(e.date) : '', e.kind === 'bill' ? e.billNo : '', e.kind === 'bill' ? fmtN(e.bill) : '', e.kind !== 'bill' ? fmtN(e.pay) : '', e.kind !== 'bill' ? fmtD(e.date) : '', e.detail + (e.counted ? '' : L(' (شمار نہیں)', ' (not counted)')), fmtN(e.bal)] });
  });
  const summary = [{ ur: 'کل بلز', en: 'Total Bills', value: rs(tb), color: 'amber' }, { ur: 'کل ادائیگی', en: 'Total Payments', value: rs(tp), color: 'green' }, { ur: 'بقایا رقم', en: 'Remaining Balance', value: rs(r2(opening + tb - tp)), color: 'pink' }];
  return { titleUr: 'وینڈر کا ڈیجیٹل کھاتہ', titleEn: 'Vendor Digital Khata (Debit & Credit)', vendor: v, meta,
    userCols: [6], columns: [{ ur: '#', w: 0.45 }, { ur: 'بل کی تاریخ', en: 'Bill Date', w: 1.2 }, { ur: 'بل نمبر', en: 'Bill Number', w: 1.1 }, { ur: 'بل رقم', en: 'Bill Amount', w: 1.3, num: 1 }, { ur: 'پیمنٹ رقم', en: 'Payment Amount', w: 1.3, num: 1 }, { ur: 'پیمنٹ تاریخ', en: 'Payment Date', w: 1.2 }, { ur: 'تفصیل', en: 'Details', w: 1.75, align: 'r' }, { ur: 'بقایا', en: 'Balance', w: 1.35, num: 1 }],
    rows, summary };
}
function localizeRep(rep) {
  if (!I18N.isEn()) return rep;
  const t = I18N.tr, keep = rep.userCols || [];
  return { ...rep, lang: 'en', rows: rep.rows.map(r => ({ ...r, cells: r.cells.map((c, i) => keep.includes(i) ? c : t(String(c))) })),
    summary: rep.summary.map(s => ({ ...s, ur: s.en || t(s.ur) })) };
}
function repToHtml(rep) {
  return `<div class="table-wrap"><table class="t"><thead><tr>${rep.columns.map(c => th(c.ur, c.en)).join('')}</tr></thead><tbody>
  ${rep.rows.length ? rep.rows.map(r => `<tr class="${r.muted ? 'muted' : ''}" ${r.bold ? 'style="font-weight:700"' : ''}>${r.cells.map((c, i) => { const col = rep.columns[i]; return `<td class="${col.align === 'r' ? 'txt' : ''} ${col.num ? 'num' : ''}" ${(rep.userCols || []).includes(i) ? 'translate="no"' : ''}>${esc(c).replace(/\n/g, '<br>')}</td>`; }).join('')}</tr>`).join('') : `<tr><td colspan="${rep.columns.length}" class="empty">کوئی ریکارڈ نہیں</td></tr>`}
  </tbody></table></div><div class="sum-cards">${rep.summary.map((s, i) => `<div class="sum ${['s1', 's2', 's3'][i] || 's1'} ${s.color === 'green' ? 's2' : s.color === 'pink' ? 's3' : ''}"><span>${s.ur} <span class="en small">${s.en}</span></span><b>${esc(s.value)}</b></div>`).join('')}</div>`;
}
routes.reports = (main, q) => {
  const type = q.type || 'bill';
  const T = { bill: ['وینڈر بل کی تفصیل', 'Report 1: Vendor Bill Detail'], pay: ['وینڈر پیمنٹ کی تفصیل', 'Report 2: Vendor Payment Detail'], khata: ['وینڈر کا ڈیجیٹل کھاتہ', 'Report 3: Vendor Digital Khata'] };
  main.innerHTML = titleBar('bars', 'رپورٹس', 'Reports Section') + `
  <div class="tabs">${Object.entries(T).map(([k, t]) => `<button class="tab ${k === type ? 'active' : ''}" data-act="rtab" data-id="${k}">${t[0]}</button>`).join('')}</div>
  <div class="panel"><div class="panel-h">${ic('bars')}<h3>${T[type][0]}</h3><span class="sub en">${T[type][1]}</span></div><div class="panel-b">
    <div class="toolbar"><div class="field" style="min-width:260px"><label>وینڈر کا نام<span class="en">Search by Vendor Name</span></label><div id="rpV"></div></div>
    <div class="field" style="max-width:190px"><label>تاریخ سے<span class="en">From (optional)</span></label><input type="date" class="inp" id="rpF" value="${q.from || ''}"></div>
    <div class="field" style="max-width:190px"><label>تاریخ تک<span class="en">To (optional)</span></label><input type="date" class="inp" id="rpT" value="${q.to || ''}"></div></div>
    <div id="rpBody"></div></div></div>`;
  const draw = () => {
    const v = vp.vendor;
    if (!v) { $('#rpBody').innerHTML = `<div class="empty">رپورٹ دیکھنے کے لیے وینڈر منتخب کریں</div>`; curReport = null; return; }
    const from = $('#rpF').value, to = $('#rpT').value;
    curReport = { type, vid: v.id, from, to };
    const rep = buildReport(type, v.id, from, to);
    $('#rpBody').innerHTML = `<div class="dl-row" style="margin-bottom:12px"><button class="btn btn-primary" data-act="dl-img" data-id="${type}">${ic('image')}Download Image (HD)</button><button class="btn btn-gold" data-act="dl-pdf" data-id="${type}">${ic('pdf')}Download PDF</button></div>` + repToHtml(rep) +
      (type === 'pay' ? `<p class="hint">* زیرِ التوا، باؤنس یا تبدیل شدہ چیک کل ادائیگی میں شمار نہیں ہوتے۔ متبادل ادائیگی الگ لائن میں شمار ہوتی ہے۔</p>` : '');
  };
  const vp = vendorPicker($('#rpV'), { id: q.v, onSelect: draw, info: false });
  $('#rpF').onchange = draw; $('#rpT').onchange = draw; draw();
};
async function downloadReport(fmt) {
  if (!curReport) return toast('پہلے وینڈر منتخب کریں', true);
  const { type, vid, from, to } = curReport;
  const rep = localizeRep(buildReport(type, vid, from, to));
  const v = vendorById(vid) || {};
  const base = ({ bill: 'Vendor_Bills', pay: 'Payment_History', khata: 'Digital_Khata' })[type] + '_' + v.name + '_' + fmtD(today());
  await withBusy(fmt === 'pdf' ? 'PDF تیار ہو رہی ہے…' : 'HD Image تیار ہو رہی ہے…', async () => {
    const n = fmt === 'pdf' ? await Render.downloadPdf(rep, base) : await Render.downloadImages(rep, base);
    toast(`${fmt === 'pdf' ? 'PDF' : 'Image'} ڈاؤن لوڈ ہو گئی ✓ (${n} صفحات)`);
  });
}

/* ---------- Data Import / Export ---------- */
let installEvt = null;
routes.data = (main) => {
  main.innerHTML = titleBar('io', 'ڈیٹا امپورٹ / ایکسپورٹ', 'Data Import / Export') + `
  <div class="stats">
    <div class="stat blue"><div class="si">${ic('users')}</div><div class="st"><span>وینڈرز</span><b>${state.vendors.length}</b></div></div>
    <div class="stat green"><div class="si">${ic('bills')}</div><div class="st"><span>بلز</span><b>${state.bills.length}</b></div></div>
    <div class="stat pink"><div class="si">${ic('pay')}</div><div class="st"><span>پیمنٹس</span><b>${state.payments.length}</b></div></div>
    <div class="stat amber"><div class="si">${ic('replace')}</div><div class="st"><span>چیک تبدیلیاں</span><b>${state.replacements.length}</b></div></div>
  </div>
  <div class="grid-half">
    <div class="panel"><div class="panel-h">${ic('download')}<h3>ڈیٹا ایکسپورٹ (بیک اپ)</h3><span class="sub en">Export</span></div><div class="panel-b">
      <p>تمام وینڈرز، بلز، بل کی تصاویر، پیمنٹس، چیک ریکارڈز، چیک تبدیلیاں اور ڈیجیٹل کھاتہ ایک فائل میں محفوظ ہوں گے۔</p>
      <div class="btn-row"><button class="btn btn-primary" id="expBtn">${ic('download')}مکمل بیک اپ ڈاؤن لوڈ کریں</button></div>
      <p class="hint">مشورہ: ہر ہفتے بیک اپ لیں اور Google Drive یا USB میں محفوظ رکھیں۔</p></div></div>
    <div class="panel"><div class="panel-h">${ic('upload')}<h3>ڈیٹا امپورٹ (بحالی)</h3><span class="sub en">Import</span></div><div class="panel-b">
      <p>${L('پہلے سے ایکسپورٹ کی گئی <span class="en">.json</span> فائل منتخب کریں۔ تمام ریکارڈز، تعلقات اور تصاویر بحال ہو جائیں گی۔', 'Choose a previously exported <b>.json</b> file. All records, vendor links, payments and images will be restored.')}</p>
      <div class="btn-row"><label class="btn btn-gold" style="margin:0">${ic('upload')}بیک اپ فائل منتخب کریں<input type="file" id="impFile" accept=".json,application/json" hidden></label></div>
      <p class="hint" style="color:var(--red)">توجہ: امپورٹ کرنے سے اس ڈیوائس کا موجودہ ڈیٹا بیک اپ والے ڈیٹا سے تبدیل ہو جائے گا۔</p></div></div>
  </div>
  <div class="panel"><div class="panel-h">${ic('cloud')}<h3>گوگل ڈرائیو آٹو بیک اپ</h3><span class="sub en">Google Drive Auto Backup</span></div><div class="panel-b" id="gPanel"></div></div>
  <div class="panel"><div class="panel-h">${ic('wifi')}<h3>ایپ انسٹال اور آف لائن</h3><span class="sub en">Install / Offline</span></div><div class="panel-b">
    <p id="stInfo" class="small"></p>
    <div class="btn-row"><button class="btn btn-green ${installEvt ? '' : 'hidden'}" id="instBtn">${ic('download')}ایپ انسٹال کریں (Install App)</button></div>
    <p class="hint">${L('Android: Chrome مینو (⋮) ← "Add to Home screen / Install app"۔ Windows: Chrome/Edge ایڈریس بار میں انسٹال آئیکن۔ انسٹال کے بعد ایپ بغیر انٹرنیٹ کے کھلتی ہے۔', 'Android: Chrome menu (⋮) → "Add to Home screen / Install app". Windows: install icon in the Chrome/Edge address bar. After installing, the app opens without internet.')}</p></div></div>`;
  $('#expBtn').onclick = () => withBusy('بیک اپ تیار ہو رہا ہے…', exportData);
  drivePanel();
  $('#impFile').onchange = e => { const f = e.target.files[0]; e.target.value = ''; if (f) importData(f); };
  if ($('#instBtn')) $('#instBtn').onclick = async () => { if (!installEvt) return; installEvt.prompt(); await installEvt.userChoice; installEvt = null; $('#instBtn').classList.add('hidden'); };
  (async () => {
    let s = '';
    try { if (navigator.storage && navigator.storage.estimate) { const e = await navigator.storage.estimate(); s += `استعمال شدہ اسٹوریج: ${(e.usage / 1048576).toFixed(2)} MB. `; } } catch { }
    try { if (navigator.storage && navigator.storage.persisted) s += (await navigator.storage.persisted()) ? 'مستقل اسٹوریج: فعال ✓' : 'مستقل اسٹوریج: براؤزر کی اجازت درکار'; } catch { }
    const el = $('#stInfo'); if (el) el.textContent = s;
  })();
};
async function buildBackup() {
  const images = await dbGetAll('images');
  return {
    app: 'DigitalKhataPWA', version: 1, exportedAt: new Date().toISOString(),
    counts: { vendors: state.vendors.length, bills: state.bills.length, payments: state.payments.length, cheques: state.payments.filter(p => p.method === 'cheque').length, replacements: state.replacements.length, images: images.length },
    vendors: state.vendors, bills: state.bills, payments: state.payments,
    chequeRecords: state.payments.filter(p => p.method === 'cheque').map(p => ({ paymentId: p.id, chequeNo: p.chequeNo, vendorId: p.vendorId, amount: p.amount, chequeDate: p.chequeDate, clearDate: p.clearDate, status: chequeStatus(p) })),
    replacements: state.replacements, images,
    digitalKhata: state.vendors.map(v => ({ vendorId: v.id, vendorName: v.name, ...vendorTotals(v.id),
      entries: khataEntries(v.id).map(e => ({ type: e.kind, date: e.date, billNo: e.billNo || '', billAmount: e.kind === 'bill' ? e.bill : 0, paymentAmount: e.kind !== 'bill' && e.counted ? e.pay : 0, counted: e.counted, balance: e.bal })) }))
  };
}
async function exportData() {
  const data = await buildBackup();
  const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
  Render.download(blob, `DigitalKhata_Backup_${fmtD(today())}.json`);
  toast('بیک اپ ڈاؤن لوڈ ہو گیا ✓');
}
async function importData(file) {
  let data;
  try { data = JSON.parse(await file.text()); } catch { return toast('فائل درست نہیں (JSON پڑھی نہیں جا سکی)', true); }
  return importObject(data, file.name);
}
async function importObject(data, label) {
  if (!data || data.app !== 'DigitalKhataPWA' || !Array.isArray(data.vendors)) return toast('یہ Digital Khata کی بیک اپ فائل نہیں ہے', true);
  const msg = L(`بیک اپ میں: <b class="en">${data.vendors.length}</b> وینڈرز، <b class="en">${(data.bills || []).length}</b> بلز، <b class="en">${(data.payments || []).length}</b> پیمنٹس، <b class="en">${(data.images || []).length}</b> تصاویر۔<br>موجودہ ڈیٹا تبدیل ہو جائے گا۔ امپورٹ کریں؟`,
    `Backup contains: <b>${data.vendors.length}</b> vendors, <b>${(data.bills || []).length}</b> bills, <b>${(data.payments || []).length}</b> payments, <b>${(data.images || []).length}</b> images.<br>Current data will be replaced. Import?`) + (label ? `<br><span class="small" translate="no">${esc(label)}</span>` : '');
  if (!(await confirmBox(msg, { ok: 'ہاں، امپورٹ کریں', danger: false }))) return;
  await withBusy('ڈیٹا بحال ہو رہا ہے…', async () => {
    const map = { vendors: data.vendors, bills: data.bills || [], payments: data.payments || [], replacements: data.replacements || [], images: data.images || [] };
    await tx(Object.keys(map), 'readwrite', t => { Object.entries(map).forEach(([s, arr]) => { const st = t.objectStore(s); st.clear(); arr.forEach(x => x && x.id && st.put(x)); }); });
    await loadAll();
  });
  markDirty();
  toast('ڈیٹا کامیابی سے امپورٹ ہو گیا ✓');
  go('home');
}


/* ---------- Google Drive auto backup ---------- */
const Drive = {
  token: null, exp: 0, busy: false, timer: null, rev: 0,
  async cfg() { return (await dbGet('meta', 'drive')) || { id: 'drive', clientId: '', auto: true, connected: false }; },
  async setCfg(p) { const c = { ...(await this.cfg()), ...p, id: 'drive' }; await dbPut('meta', c); return c; },
  hasToken() { return !!this.token && Date.now() < this.exp - 60000; },
  loadGis() {
    if (window.google && google.accounts && google.accounts.oauth2) return Promise.resolve();
    return new Promise((res, rej) => { const s = document.createElement('script'); s.src = 'https://accounts.google.com/gsi/client'; s.async = true; s.onload = res; s.onerror = () => rej(new Error('Google script not loaded')); document.head.appendChild(s); });
  },
  async auth(consent) {
    const c = await this.cfg(); if (!c.clientId) throw new Error('noclient');
    await this.loadGis();
    return new Promise((res, rej) => {
      const tc = google.accounts.oauth2.initTokenClient({
        client_id: c.clientId, scope: 'https://www.googleapis.com/auth/drive.file',
        callback: r => { if (r.error) return rej(new Error(r.error)); this.token = r.access_token; this.exp = Date.now() + (+r.expires_in || 3600) * 1000; res(this.token); },
        error_callback: e => rej(new Error((e && e.type) || 'popup'))
      });
      tc.requestAccessToken({ prompt: consent ? 'consent' : '' });
    });
  },
  async api(path, opts = {}) {
    if (!this.hasToken()) throw new Error('notoken');
    const r = await fetch('https://www.googleapis.com' + path, { ...opts, headers: { Authorization: 'Bearer ' + this.token, ...(opts.headers || {}) } });
    if (r.status === 401) { this.token = null; throw new Error('notoken'); }
    if (!r.ok) { const e = new Error('HTTP ' + r.status); e.status = r.status; throw e; }
    if (r.status === 204) return null;
    const txt = await r.text(); return txt ? JSON.parse(txt) : null;
  },
  async folderId() {
    const c = await this.cfg();
    if (c.folderId) { try { const f = await this.api(`/drive/v3/files/${c.folderId}?fields=id,trashed`); if (f && !f.trashed) return f.id; } catch (e) { if (e.message === 'notoken') throw e; } }
    const q = encodeURIComponent("name='Digital Khata Backup' and mimeType='application/vnd.google-apps.folder' and trashed=false");
    const l = await this.api(`/drive/v3/files?q=${q}&fields=files(id)`);
    let id = l && l.files && l.files[0] && l.files[0].id;
    if (!id) id = (await this.api('/drive/v3/files?fields=id', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: 'Digital Khata Backup', mimeType: 'application/vnd.google-apps.folder' }) })).id;
    await this.setCfg({ folderId: id }); return id;
  },
  upload(name, json, folder, fileId) {
    const b = 'dk' + Date.now().toString(36);
    const meta = fileId ? { name } : { name, parents: [folder], mimeType: 'application/json' };
    const body = new Blob([`--${b}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(meta)}\r\n--${b}\r\nContent-Type: application/json\r\n\r\n`, json, `\r\n--${b}--`]);
    return this.api(`/upload/drive/v3/files${fileId ? '/' + fileId : ''}?uploadType=multipart&fields=id,name,modifiedTime`, { method: fileId ? 'PATCH' : 'POST', headers: { 'Content-Type': 'multipart/related; boundary=' + b }, body });
  },
  async files(folder) {
    const q = encodeURIComponent(`'${folder}' in parents and trashed=false and name contains 'DigitalKhata_'`);
    const l = await this.api(`/drive/v3/files?q=${q}&orderBy=${encodeURIComponent('modifiedTime desc')}&fields=files(id,name,modifiedTime,size)&pageSize=100`);
    return (l && l.files) || [];
  },
  async backup() {
    if (this.busy) return false; this.busy = true; setCloud('busy');
    const rev = this.rev;
    try {
      const json = JSON.stringify(await buildBackup());
      const folder = await this.folderId(); const c = await this.cfg();
      let latest;
      try { latest = await this.upload('DigitalKhata_Latest.json', json, folder, c.latestId); }
      catch (e) { if (c.latestId && e.status === 404) latest = await this.upload('DigitalKhata_Latest.json', json, folder, null); else throw e; }
      const p = { latestId: latest.id, lastBackup: Date.now(), dirty: this.rev !== rev, connected: true };
      const d = today();
      if (c.lastDaily !== d) {
        await this.upload(`DigitalKhata_${fmtD(d)}.json`, json, folder, null); p.lastDaily = d;
        const daily = (await this.files(folder)).filter(f => f.name !== 'DigitalKhata_Latest.json');
        for (const f of daily.slice(10)) await this.api(`/drive/v3/files/${f.id}`, { method: 'DELETE' });
      }
      const nc = await this.setCfg(p); setCloud(nc.dirty ? 'pend' : 'ok'); return true;
    } catch (e) { setCloud('pend'); throw e; }
    finally { this.busy = false; }
  }
};
function setCloud(st) {
  const b = $('#cloudBtn'); if (!b) return;
  b.classList.toggle('hidden', st === 'off');
  b.className = 'ibtn cloud-btn ' + (st === 'off' ? 'hidden' : st);
  b.innerHTML = ic('cloud') + (st === 'pend' ? '<span class="dot">!</span>' : '');
  b.title = st === 'ok' ? 'Google Drive ✓' : st === 'pend' ? 'بیک اپ زیرِ التوا — ٹیپ کر کے سنک کریں' : 'Google Drive';
}
async function refreshCloud() { const c = await Drive.cfg(); setCloud(!c.connected ? 'off' : c.dirty ? 'pend' : 'ok'); }
async function markDirty() {
  Drive.rev++;
  if (!idb) return;
  const c = await Drive.cfg(); if (!c.connected || !c.auto) return;
  if (!c.dirty) await Drive.setCfg({ dirty: true });
  if (!Drive.busy) setCloud('pend');
  clearTimeout(Drive.timer); Drive.timer = setTimeout(autoBackup, 6000);
}
async function autoBackup() {
  const c = await Drive.cfg();
  if (!c.connected || !c.auto || !c.dirty || !navigator.onLine || !Drive.hasToken()) return;
  try { await Drive.backup(); if ($('#gPanel')) drivePanel(); } catch (e) { console.warn('Drive backup', e); }
}
// Called from a user tap (needed by Google to refresh the sign-in token)
async function driveSync(silentAuth) {
  const c = await Drive.cfg();
  if (!c.clientId || !c.connected) { go('data'); return; }
  if (!navigator.onLine) return toast('انٹرنیٹ نہیں — بیک اپ بعد میں ہوگا', true);
  try {
    if (!Drive.hasToken()) await Drive.auth(false);
    await withBusy('ڈرائیو پر بیک اپ ہو رہا ہے…', () => Drive.backup());
    toast('ڈرائیو پر بیک اپ ہو گیا ✓');
  } catch (e) { toast(L('ڈرائیو بیک اپ ناکام', 'Drive backup failed') + ' (' + e.message + ')', true); }
  if ($('#gPanel')) drivePanel();
}
async function drivePanel() {
  const host = $('#gPanel'); if (!host) return;
  const c = await Drive.cfg();
  const last = c.lastBackup ? new Date(c.lastBackup) : null;
  const lastStr = last ? `${fmtD(new Date(last.getTime() - last.getTimezoneOffset() * 60000).toISOString().slice(0, 10))} ${last.toTimeString().slice(0, 5)}` : '';
  host.innerHTML = `
    <div class="field"><label>Google OAuth Client ID</label><input class="inp ltr" id="gCid" value="${esc(c.clientId)}" placeholder="xxxxxxxx.apps.googleusercontent.com" autocomplete="off"></div>
    <p class="hint">Client ID بنانے کا طریقہ Testing / README فائل میں دیا گیا ہے۔</p>
    <div class="vp-info show" style="margin:10px 0">
      <span class="badge ${c.connected ? 'b-cleared' : 'b-pending'}">${c.connected ? 'کنیکٹ شدہ' : 'کنیکٹ نہیں'}</span>
      ${c.email ? `<span class="chip en" translate="no">${esc(c.email)}</span>` : ''}
      <span class="chip">${last ? 'آخری بیک اپ:' : 'ابھی تک کوئی بیک اپ نہیں'} ${last ? `<span class="en">${lastStr}</span>` : ''}</span>
      ${c.connected && c.dirty ? '<span class="badge b-pending">زیرِ التوا تبدیلیاں</span>' : ''}
    </div>
    <label class="chip" style="cursor:pointer;margin-bottom:6px"><input type="checkbox" id="gAuto" ${c.auto !== false ? 'checked' : ''}> <b>آٹو بیک اپ</b> — ہر تبدیلی کے بعد خود بخود بیک اپ</label>
    <div class="btn-row">
      ${c.connected ? `<button class="btn btn-primary" id="gNow">${ic('cloud')}ابھی بیک اپ لیں</button><button class="btn btn-gold" id="gRestore">${ic('download')}ڈرائیو سے بحال کریں</button><button class="btn btn-light" id="gDis">ڈسکنیکٹ</button>`
      : `<button class="btn btn-primary" id="gConn">${ic('cloud')}ڈرائیو سے کنیکٹ کریں</button>`}
    </div>
    <p class="hint">فائلیں "Digital Khata Backup" فولڈر میں محفوظ ہوتی ہیں: ایک تازہ ترین فائل + روزانہ کاپی (آخری 10)۔</p>`;
  const saveCid = async () => { const v = $('#gCid').value.trim(); if (v !== c.clientId) { await Drive.setCfg({ clientId: v, folderId: '', latestId: '' }); Drive.token = null; } return v; };
  $('#gCid').onchange = saveCid;
  $('#gAuto').onchange = async e => { await Drive.setCfg({ auto: e.target.checked }); };
  if ($('#gConn')) $('#gConn').onclick = async () => {
    const cid = await saveCid();
    if (!cid) return fieldErr('پہلے Client ID درج کریں', $('#gCid'));
    if (!navigator.onLine) return toast('انٹرنیٹ نہیں — بیک اپ بعد میں ہوگا', true);
    try {
      await Drive.auth(true);
      let email = '';
      try { const ab = await Drive.api('/drive/v3/about?fields=user(emailAddress)'); email = (ab && ab.user && ab.user.emailAddress) || ''; } catch { }
      await Drive.setCfg({ connected: true, email, dirty: true });
      toast('ڈرائیو کنیکٹ ہو گئی ✓');
      await withBusy('ڈرائیو پر بیک اپ ہو رہا ہے…', () => Drive.backup());
      toast('ڈرائیو پر بیک اپ ہو گیا ✓');
    } catch (e) { toast(L('ڈرائیو کنیکٹ نہیں ہو سکی', 'Could not connect Google Drive') + ' (' + e.message + ')', true); }
    drivePanel();
  };
  if ($('#gNow')) $('#gNow').onclick = () => driveSync();
  if ($('#gDis')) $('#gDis').onclick = async () => {
    try { if (Drive.token && window.google) google.accounts.oauth2.revoke(Drive.token, () => { }); } catch { }
    Drive.token = null; await Drive.setCfg({ connected: false, email: '', dirty: false }); setCloud('off'); drivePanel();
  };
  if ($('#gRestore')) $('#gRestore').onclick = async () => {
    if (!navigator.onLine) return toast('انٹرنیٹ نہیں — بیک اپ بعد میں ہوگا', true);
    try {
      if (!Drive.hasToken()) await Drive.auth(false);
      const m = openModal('ڈرائیو بیک اپ فائلیں', `<div id="gList" class="empty">لوڈ ہو رہا ہے…</div>`);
      const list = await Drive.files(await Drive.folderId());
      $('#gList', m.el).outerHTML = list.length ? `<div class="table-wrap"><table class="t" style="min-width:0"><tbody>${list.map(f => `<tr><td class="txt en" translate="no">${esc(f.name)}<br><span class="small">${new Date(f.modifiedTime).toLocaleString('en-GB')} · ${(+f.size / 1048576 || 0).toFixed(2)} MB</span></td><td><button class="btn btn-gold btn-sm" data-gid="${f.id}" data-gname="${esc(f.name)}">بحال کریں</button></td></tr>`).join('')}</tbody></table></div>` : `<div class="empty">کوئی بیک اپ فائل نہیں ملی</div>`;
      m.el.addEventListener('click', async e => {
        const btn = e.target.closest('[data-gid]'); if (!btn) return;
        const data = await withBusy('ڈرائیو سے ڈیٹا بحال ہو رہا ہے…', () => Drive.api(`/drive/v3/files/${btn.dataset.gid}?alt=media`));
        m.close(); importObject(data, 'Google Drive: ' + btn.dataset.gname);
      });
    } catch (e) { toast(L('ڈرائیو بیک اپ ناکام', 'Drive backup failed') + ' (' + e.message + ')', true); }
  };
}

/* ---------- Password ---------- */
async function hashPwd(p, salt) {
  const s = salt + '|' + p;
  if (crypto.subtle) {
    const b = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
    return [...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('');
  }
  let h1 = 0x811c9dc5, h2 = 0x1505; for (let i = 0; i < s.length; i++) { h1 = Math.imul(h1 ^ s.charCodeAt(i), 16777619); h2 = (h2 * 33 + s.charCodeAt(i)) | 0; }
  return 'f' + (h1 >>> 0).toString(16) + (h2 >>> 0).toString(16);
}
const getAuth = () => dbGet('meta', 'auth');
async function setAuth(pwd, hint) { const salt = uid(); await dbPut('meta', { id: 'auth', salt, hash: await hashPwd(pwd, salt), hint: hint || '' }); }
async function checkPwd(pwd) { const a = await getAuth(); return !a || a.hash === await hashPwd(pwd, a.salt); }
routes.password = async (main) => {
  const a = await getAuth();
  main.innerHTML = titleBar('lock', 'پاس ورڈ سیٹنگ', 'Password Settings') + `
  <div class="panel" style="max-width:620px"><div class="panel-h">${ic('lock')}<h3>${a ? 'پاس ورڈ تبدیل کریں' : 'ایپ پاس ورڈ سیٹ کریں'}</h3><span class="sub en">${a ? 'Change Password' : 'Set Application Password'}</span></div><div class="panel-b">
    <p class="small" style="margin-bottom:8px">${a ? 'پاس ورڈ فعال ہے ✓ — ایپ کھولنے پر پاس ورڈ مانگا جاتا ہے۔' : 'ابھی کوئی پاس ورڈ نہیں۔ پاس ورڈ سیٹ کرنے کے بعد ایپ کھولنے پر پاس ورڈ اسکرین آئے گی۔'}</p>
    <div class="form-grid" style="grid-template-columns:1fr">
      ${a ? `<div class="field"><label>موجودہ پاس ورڈ<span class="en">Current Password</span></label><input type="password" class="inp ltr" id="pwOld" autocomplete="current-password"></div>` : ''}
      <div class="field"><label>نیا پاس ورڈ<span class="en">New Password (min 4)</span></label><input type="password" class="inp ltr" id="pwNew" autocomplete="new-password"></div>
      <div class="field"><label>نیا پاس ورڈ دوبارہ<span class="en">Confirm Password</span></label><input type="password" class="inp ltr" id="pwNew2" autocomplete="new-password"></div>
      <div class="field"><label>یاد دہانی اشارہ<span class="en">Password Hint (optional)</span></label><input class="inp" id="pwHint" value="${esc(a ? a.hint : '')}" placeholder="مثلاً: دکان کا پرانا نمبر"></div>
    </div>
    <div class="btn-row"><button class="btn btn-primary" id="pwSave">${ic('save')}${a ? 'پاس ورڈ تبدیل کریں' : 'پاس ورڈ سیٹ کریں'}</button>${a ? `<button class="btn btn-danger" id="pwRemove">${ic('trash')}پاس ورڈ ختم کریں</button><button class="btn btn-light" id="pwLock">${ic('lock')}ابھی لاک کریں</button>` : ''}</div>
  </div></div>`;
  $('#pwSave').onclick = async () => {
    if (a && !(await checkPwd($('#pwOld').value))) return fieldErr('موجودہ پاس ورڈ غلط ہے', $('#pwOld'));
    const n = $('#pwNew').value;
    if (n.length < 4) return fieldErr('پاس ورڈ کم از کم 4 حروف کا ہو', $('#pwNew'));
    if (n !== $('#pwNew2').value) return fieldErr('دونوں پاس ورڈ ایک جیسے نہیں', $('#pwNew2'));
    await setAuth(n, $('#pwHint').value.trim());
    toast(a ? 'پاس ورڈ تبدیل ہو گیا ✓' : 'پاس ورڈ سیٹ ہو گیا ✓'); render();
  };
  if (a) {
    $('#pwRemove').onclick = async () => {
      if (!(await checkPwd($('#pwOld').value))) return fieldErr('پہلے موجودہ پاس ورڈ درج کریں', $('#pwOld'));
      if (!(await confirmBox('پاس ورڈ ختم کر دیں؟ ایپ بغیر پاس ورڈ کے کھلے گی۔'))) return;
      await dbDel('meta', 'auth'); toast('پاس ورڈ ختم ہو گیا'); render();
    };
    $('#pwLock').onclick = () => showLock();
  }
};

/* ---------- Lock screen ---------- */
async function showLock(firstRun) {
  const a = await getAuth();
  $('#app').classList.add('hidden'); $('#lock').classList.remove('hidden');
  const body = $('#lockBody');
  if (!a && firstRun) {
    body.innerHTML = `<p style="color:var(--text);font-weight:700">خوش آمدید! ایپ کی حفاظت کے لیے پاس ورڈ سیٹ کریں</p>
      <div class="field"><label>نیا پاس ورڈ<span class="en">New Password</span></label><input type="password" class="inp ltr" id="lkN"></div>
      <div class="field" style="margin-top:6px"><label>دوبارہ لکھیں<span class="en">Confirm</span></label><input type="password" class="inp ltr" id="lkN2"></div>
      <div class="field" style="margin-top:6px"><label>اشارہ<span class="en">Hint (optional)</span></label><input class="inp" id="lkH"></div>
      <div class="lock-err" id="lkErr"></div>
      <div class="btn-row" style="margin-top:4px"><button class="btn btn-primary" id="lkSet" style="flex:1">${ic('lock')}پاس ورڈ سیٹ کریں</button><button class="btn btn-light" id="lkSkip">ابھی نہیں</button></div>`;
    $('#lkSet').onclick = async () => {
      const n = $('#lkN').value;
      if (n.length < 4) return $('#lkErr').textContent = 'پاس ورڈ کم از کم 4 حروف کا ہو';
      if (n !== $('#lkN2').value) return $('#lkErr').textContent = 'دونوں پاس ورڈ ایک جیسے نہیں';
      await setAuth(n, $('#lkH').value.trim()); await dbPut('meta', { id: 'setup', done: true }); unlock();
    };
    $('#lkSkip').onclick = async () => { await dbPut('meta', { id: 'setup', done: true }); unlock(); };
    return;
  }
  if (!a) return unlock();
  body.innerHTML = `<p style="color:var(--text);font-weight:700">ایپ کھولنے کے لیے پاس ورڈ درج کریں</p>
    <div class="field"><input type="password" class="inp ltr" id="lkP" placeholder="Password" autocomplete="current-password" style="text-align:center;font-size:20px;letter-spacing:4px"></div>
    <div class="lock-err" id="lkErr"></div>
    <button class="btn btn-primary" id="lkGo" style="width:100%">${ic('lock')}ایپ کھولیں — Unlock</button>
    <button class="small" id="lkHint" style="margin-top:10px;text-decoration:underline">پاس ورڈ بھول گئے؟</button>`;
  const p = $('#lkP'); setTimeout(() => p.focus(), 50);
  const tryIt = async () => { if (await checkPwd(p.value)) { driveOnGesture(); unlock(); } else { $('#lkErr').textContent = 'غلط پاس ورڈ — دوبارہ کوشش کریں'; p.value = ''; p.focus(); } };
  $('#lkGo').onclick = tryIt; p.addEventListener('keydown', e => { if (e.key === 'Enter') tryIt(); });
  $('#lkHint').onclick = () => { $('#lkErr').textContent = a.hint ? 'اشارہ: ' + a.hint : 'کوئی اشارہ محفوظ نہیں کیا گیا'; };
}
async function driveOnGesture() {
  try { const c = await Drive.cfg(); if (c.connected && c.auto && navigator.onLine && !Drive.hasToken()) { await Drive.auth(false); autoBackup(); } } catch (e) { refreshCloud(); }
}
function unlock() { $('#lock').classList.add('hidden'); $('#app').classList.remove('hidden'); render(); }

/* ---------- Global actions (event delegation) ---------- */
const ACTS = {
  go: id => go(id),
  'go-v': id => { const v = new URLSearchParams(location.hash.split('?')[1] || '').get('v'); go(id, { v }); },
  report: id => go('reports', { type: id, v: curReport && curReport.vid }),
  rtab: id => go('reports', { type: id, v: curReport && curReport.vid }),
  ptab: id => go('payments', { tab: id }),
  'v-khata': id => go('khata', { v: id }),
  'v-edit': id => go('vendors', { edit: id }),
  'v-del': async id => {
    const v = vendorById(id); if (!v) return;
    const bs = state.bills.filter(b => b.vendorId === id), ps = state.payments.filter(p => p.vendorId === id);
    const msg = L(`وینڈر <b translate="no">${esc(v.name)}</b> حذف کریں؟`, `Delete vendor <b translate="no">${esc(v.name)}</b>?`) + (bs.length || ps.length ? `<br><span style="color:var(--red)">${L(`اس کے <b class="en">${bs.length}</b> بلز اور <b class="en">${ps.length}</b> پیمنٹس بھی مستقل حذف ہو جائیں گے۔`, `Its ${bs.length} bills and ${ps.length} payments will also be permanently deleted.`)}</span>` : '');
    if (!(await confirmBox(msg))) return;
    for (const p of ps) { for (const r of repsFor(p.id)) await removeRec('replacements', r.id); await removeRec('payments', p.id); }
    for (const b of bs) { if (b.imageId) await dbDel('images', b.imageId); await removeRec('bills', b.id); }
    await removeRec('vendors', id); toast('وینڈر حذف ہو گیا'); render();
  },
  'bill-view': id => showBill(id),
  'bill-edit': id => go('addbill', { edit: id }),
  'bill-img': async id => { const img = await getBillImage(billById(id)); if (img) viewImage(img, 'بل کی تصویر — ' + billById(id).billNo); else toast('تصویر نہیں ملی', true); },
  'bill-del': async id => {
    const b = billById(id); if (!b) return;
    if (!(await confirmBox(L(`بل نمبر <b class="en">${esc(b.billNo)}</b> (<span class="en">${rs(b.amount)}</span>) حذف کریں؟ کھاتہ دوبارہ حساب ہوگا۔`, `Delete bill <b>${esc(b.billNo)}</b> (${rs(b.amount)})? The Khata will be recalculated.`)))) return;
    if (b.imageId) await dbDel('images', b.imageId);
    await removeRec('bills', id); toast('بل حذف ہو گیا — کھاتہ اپڈیٹ'); render();
  },
  'pay-edit': id => go('payments', { edit: id }),
  'pay-del': async id => {
    const p = payById(id); if (!p) return; const reps = repsFor(id);
    if (!(await confirmBox(L(`پیمنٹ <span class="en">${rs(p.amount)}</span> (${METHOD[p.method]}${p.chequeNo ? ' #' + esc(p.chequeNo) : ''}) حذف کریں؟${reps.length ? '<br>اس چیک کی تبدیلی کے ریکارڈ بھی حذف ہوں گے۔' : ''}`, `Delete payment ${rs(p.amount)} (${METHOD_EN[p.method]}${p.chequeNo ? ' #' + esc(p.chequeNo) : ''})?${reps.length ? '<br>Its cheque replacement records will also be deleted.' : ''}`)))) return;
    for (const r of reps) await removeRec('replacements', r.id);
    await removeRec('payments', id); toast('پیمنٹ حذف ہو گئی — کھاتہ اپڈیٹ'); render();
  },
  'chq-clear': id => markCleared(id),
  'chq-rep': id => go('payments', { tab: 'replace', chq: id }),
  'rep-edit': id => go('payments', { tab: 'replace', edit: id }),
  'rep-del': async id => {
    const r = repById(id); if (!r) return;
    if (!(await confirmBox(L(`چیک تبدیلی ریکارڈ (<span class="en">${rs(r.amount)}</span>) حذف کریں؟ اصل چیک دوبارہ "باؤنس" اسٹیٹس میں آ جائے گا۔`, `Delete this cheque replacement (${rs(r.amount)})? The original cheque goes back to "Bounced".`)))) return;
    await removeRec('replacements', id); toast('ریکارڈ حذف ہو گیا'); render();
  },
  'dl-img': () => downloadReport('image'),
  'dl-pdf': () => downloadReport('pdf')
};
document.addEventListener('keydown', e => { if (e.key === 'Escape') { const m = $$('#modalRoot .modal-bg').pop(); if (m) m.remove(); } });
document.addEventListener('click', e => {
  const el = e.target.closest('[data-act]'); if (!el) return;
  const fn = ACTS[el.dataset.act]; if (fn) { e.preventDefault(); fn(el.dataset.id); }
});

/* ---------- Boot ---------- */
function buildShell() {
  $('#lockLogo').innerHTML = ic('logo'); $('#brandLogo').innerHTML = ic('logo');
  $('#menuBtn').innerHTML = ic('menu'); $('#searchIc').innerHTML = ic('search'); $('#searchToggle').innerHTML = ic('search');
  $('#settingsBtn').innerHTML = ic('gear'); $('#lockBtn').innerHTML = ic('user');
  $('#nav').innerHTML = NAV.map(n => `<a href="#/${n.r}" data-r="${n.r}">${ic(n.ic)}<span>${n.ur}</span></a>`).join('');
  $('#bottomNav').innerHTML = BOTTOM.map(n => `<a href="#/${n.r}" data-r="${n.r}" data-also="${(n.also || []).join(',')}">${ic(n.ic)}<span>${n.ur}</span></a>`).join('');
  $('#menuBtn').onclick = () => { $('#sidebar').classList.add('open'); $('#drawerBg').classList.add('open'); };
  $('#drawerBg').onclick = closeDrawer;
  $('#searchToggle').onclick = () => { $('#topSearch').classList.toggle('open'); if ($('#topSearch').classList.contains('open')) gvp.input.focus(); };
  $('#bellBtn').onclick = () => go('payments', { tab: 'cheques', st: 'pending' });
  $('#settingsBtn').onclick = () => go('password');
  $('#langBtn').textContent = I18N.isEn() ? 'اردو' : 'EN';
  $('#langBtn').onclick = () => { try { sessionStorage.setItem('dk_skiplock', String(Date.now())); } catch { } I18N.setLang(I18N.isEn() ? 'ur' : 'en'); };
  $('#cloudBtn').onclick = () => driveSync();
  $('#lockBtn').onclick = async () => { if (await getAuth()) showLock(); else go('password'); };
  const gvp = vendorPicker($('#globalVp'), { info: false, placeholder: 'وینڈر تلاش کریں…', onSelect: v => { if (v) { go('khata', { v: v.id }); setTimeout(() => gvp.set(null, true), 50); $('#topSearch').classList.remove('open'); } } });
  const net = () => { const on = navigator.onLine; $('#netPill').className = 'offline-pill' + (on ? '' : ' off'); $('#netPill').innerHTML = `${ic('wifi')}<div>آف لائن موڈ<small class="en">(PWA) · ${on ? 'Online' : 'Offline – data safe'}</small></div>${on ? ic('check') : ''}`; };
  addEventListener('online', () => { net(); autoBackup(); }); addEventListener('offline', net); net();
}
window.addEventListener('beforeinstallprompt', e => { e.preventDefault(); installEvt = e; });
window.addEventListener('hashchange', () => { if (!$('#app').classList.contains('hidden')) render(); });

(async function boot() {
  buildShell();
  try { idb = await openDB(); await loadAll(); }
  catch (e) { document.body.innerHTML = '<p style="padding:30px;font-size:18px">IndexedDB دستیاب نہیں۔ براہ کرم Chrome / Edge استعمال کریں (Private/Incognito موڈ نہیں)۔</p>'; return; }
  try { if (navigator.storage && navigator.storage.persist) navigator.storage.persist(); } catch { }
  if ('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(() => { });
  I18N.start();
  const dc = await Drive.cfg();
  if (dc.connected) {
    if (dc.auto && dc.lastBackup && Date.now() - dc.lastBackup > 86400000) await Drive.setCfg({ dirty: true });
    refreshCloud();
    if (navigator.onLine) Drive.loadGis().catch(() => { });
  }
  let skip = false;
  try { const t = +sessionStorage.getItem('dk_skiplock'); sessionStorage.removeItem('dk_skiplock'); skip = t && Date.now() - t < 15000; } catch { }
  const setup = await dbGet('meta', 'setup');
  if (skip) unlock(); else if (await getAuth()) showLock(); else if (!setup) showLock(true); else unlock();
})();
