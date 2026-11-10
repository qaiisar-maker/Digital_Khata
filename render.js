/* =========================================================
   Digital Khata – Report renderer (Canvas → HD Image / PDF)
   No external libraries: works 100% offline.
   ========================================================= */
(function () {
  'use strict';
  const S = 2; // HD scale factor (image = 1440 x 2560 px, PDF = A4 @ ~192 dpi)
  const SIZES = {
    image: { w: 720, h: 1280, fs: 12.5 }, // 9:16 – fits Android screens
    pdf: { w: 794, h: 1123, fs: 12.5 }    // A4 portrait
  };
  const C = {
    navy: '#0b3a4c', navy2: '#0f5268', navy3: '#14657e', gold: '#d9a441', gold2: '#f0c96b',
    line: '#d8e0e6', text: '#17303b', muted: '#97a6ae', alt: '#f6f9fb',
    amber: ['#fcf0d6', '#7a4f05'], green: ['#def4e6', '#14713d'], pink: ['#fbe3ea', '#a3214a'], blue: ['#e3eefc', '#1d4f9c']
  };
  const UR = /[؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿]/;
  const F = (sz, wt) => `${wt || 400} ${sz}px Inter, "Noto Nastaliq Urdu", sans-serif`;
  const sleep = ms => new Promise(r => setTimeout(r, ms));

  async function ensureFonts() {
    try {
      await Promise.all([400, 700].map(w => document.fonts.load(F(16, w), 'اردو کھاتہ Ab12')));
      await document.fonts.ready;
    } catch (e) { /* ignore */ }
  }
  const lineH = (t, fs) => (UR.test(t) ? fs * 2.15 : fs * 1.6);

  function drawText(ctx, text, x, y, align, dir) { // y = vertical centre of the line
    text = String(text == null ? '' : text);
    ctx.direction = dir || (UR.test(text) ? 'rtl' : 'ltr');
    ctx.textAlign = align || 'center';
    ctx.textBaseline = 'alphabetic';
    const m = ctx.measureText(text);
    const asc = m.actualBoundingBoxAscent || 0, desc = m.actualBoundingBoxDescent || 0;
    ctx.fillText(text, x, y + (asc - desc) / 2);
  }

  function wrap(ctx, text, maxW) {
    const out = [];
    String(text == null ? '' : text).split('\n').forEach(para => {
      const words = para.split(/\s+/).filter(Boolean);
      if (!words.length) { out.push(''); return; }
      let line = '';
      words.forEach(w => {
        const t = line ? line + ' ' + w : w;
        if (!line || ctx.measureText(t).width <= maxW) line = t;
        else { out.push(line); line = w; }
      });
      out.push(line);
    });
    return out;
  }

  // Lay out one cell: wrap text, shrink font if a single word is still too wide → nothing is ever cut off
  function layoutCell(ctx, text, maxW, fs, wt) {
    ctx.font = F(fs, wt);
    let lines = wrap(ctx, text, maxW);
    const worst = Math.max(0, ...lines.map(l => ctx.measureText(l).width));
    if (worst > maxW) {
      fs = Math.max(7.5, fs * maxW / worst - 0.2);
      ctx.font = F(fs, wt);
      lines = wrap(ctx, text, maxW);
    }
    const h = lines.reduce((a, l) => a + lineH(l || 'a', fs), 0);
    return { lines, fs, wt, h };
  }

  function rrect(ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath();
  }

  function loadImg(src) {
    return new Promise((res, rej) => { const i = new Image(); i.onload = () => res(i); i.onerror = rej; i.src = src; });
  }

  function nowStr() {
    const d = new Date(), p = n => String(n).padStart(2, '0');
    let h = d.getHours(); const ap = h >= 12 ? 'PM' : 'AM'; h = h % 12 || 12;
    return `${p(d.getDate())}-${p(d.getMonth() + 1)}-${d.getFullYear()} ${p(h)}:${p(d.getMinutes())} ${ap}`;
  }

  /* rep = { titleUr, titleEn, vendor:{name,mobile,city}, meta:[[label,value]], columns:[{ur,en,w,align}],
             rows:[{cells:[], muted, bold}], summary:[{ur,en,value,color}], image, imageTitle } */
  async function renderPages(rep, fmt) {
    await ensureFonts();
    const { w, h, fs } = SIZES[fmt];
    const M = 26, TW = w - 2 * M, PAD = 6, HB = 86, FOOT = 40;
    const bottom = () => h - FOOT - 10;
    const mctx = document.createElement('canvas').getContext('2d');

    const LTR = rep.lang === 'en';
    const totalW = rep.columns.reduce((a, c) => a + c.w, 0) || 1;
    let xr = w - M, xl = M;
    const cols = rep.columns.map(c => {
      const px = c.w / totalW * TW;
      if (LTR) { const o = { ...c, px, x0: xl, x1: xl + px }; xl += px; return o; }
      const o = { ...c, px, x1: xr, x0: xr - px }; xr -= px; return o;
    });
    const cellX = c => c.align === 'r' ? (LTR ? c.x0 + PAD : c.x1 - PAD) : (c.x0 + c.x1) / 2;
    const cellA = c => c.align === 'r' ? (LTR ? 'left' : 'right') : 'center';
    // header layout
    const head = cols.map(c => {
      const a = layoutCell(mctx, LTR ? (c.en || c.ur) : c.ur, c.px - PAD * 2, fs + 0.5, 700);
      const b = c.en && !LTR ? layoutCell(mctx, c.en, c.px - PAD * 2, fs - 3, 600) : { lines: [], h: 0, fs: 0 };
      return { a, b, h: a.h + b.h };
    });
    const headH = Math.max(...head.map(x => x.h), 20) + PAD * 2;
    const rows = rep.rows.map(r => {
      const cells = r.cells.map((t, i) => layoutCell(mctx, t, cols[i].px - PAD * 2, fs, r.bold ? 700 : 400));
      return { ...r, cells, h: Math.max(...cells.map(c => c.h)) + PAD * 2 };
    });

    const pages = []; let ctx, y;

    function drawBand() {
      const g = ctx.createLinearGradient(0, 0, w, 0);
      g.addColorStop(0, C.navy); g.addColorStop(1, C.navy3);
      ctx.fillStyle = g; ctx.fillRect(0, 0, w, HB);
      ctx.fillStyle = C.gold; ctx.fillRect(0, HB, w, 4);
      // logo
      ctx.fillStyle = 'rgba(255,255,255,.14)'; rrect(ctx, M, 20, 44, 44, 9); ctx.fill();
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 2;
      rrect(ctx, M + 10, 28, 24, 28, 3); ctx.stroke();
      ctx.beginPath(); [36, 42, 48].forEach(yy => { ctx.moveTo(M + 15, yy); ctx.lineTo(M + 29, yy); }); ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.font = F(21, 700); drawText(ctx, 'Digital Khata', M + 54, 35, 'left');
      ctx.font = F(10.5, 400); ctx.fillStyle = 'rgba(255,255,255,.85)'; drawText(ctx, 'Vendor Management System', M + 54, 56, 'left');
      ctx.fillStyle = '#fff'; ctx.font = F(LTR ? 18 : 19, 700); drawText(ctx, LTR ? rep.titleEn : rep.titleUr, w - M, LTR ? 42 : 32, 'right');
      if (!LTR) { ctx.fillStyle = C.gold2; ctx.font = F(11.5, 600); drawText(ctx, rep.titleEn || '', w - M, 64, 'right'); }
    }

    function drawVendorBlock() {
      const v = rep.vendor || {};
      const left = [];
      if (v.mobile) left.push('Mobile: ' + v.mobile);
      if (v.city) left.push('City: ' + v.city);
      (rep.meta || []).forEach(m => left.push(m[0] + ': ' + m[1]));
      left.push('Generated: ' + nowStr());
      const bh = Math.max(84, left.length * 17 + 22);
      ctx.fillStyle = '#f2f6f8'; rrect(ctx, M, y, TW, bh, 10); ctx.fill();
      const NX = LTR ? M + 16 : w - M - 16, NA = LTR ? 'left' : 'right', DX = LTR ? w - M - 14 : M + 14, DA = LTR ? 'right' : 'left';
      ctx.fillStyle = C.gold; ctx.fillRect(LTR ? M : w - M - 5, y + 8, 5, bh - 16);
      ctx.fillStyle = '#6b7f89'; ctx.font = F(11, 600); drawText(ctx, LTR ? 'Vendor Name' : 'وینڈر کا نام  /  Vendor Name', NX, y + 20, NA);
      // vendor name – shrink if very long
      let nfs = 22; ctx.font = F(nfs, 700);
      const maxN = TW * 0.58;
      while (ctx.measureText(v.name || '-').width > maxN && nfs > 12) { nfs -= 1; ctx.font = F(nfs, 700); }
      ctx.fillStyle = C.navy; drawText(ctx, v.name || '-', NX, y + bh / 2 + 12, NA);
      ctx.fillStyle = C.text; ctx.font = F(11.5, 400);
      const sy = y + bh / 2 - (left.length - 1) * 17 / 2;
      left.forEach((t, i) => drawText(ctx, t, DX, sy + i * 17, DA, 'ltr'));
      y += bh + 14;
    }

    function drawHead() {
      ctx.fillStyle = C.navy2; rrect(ctx, M, y, TW, headH, 8); ctx.fill();
      ctx.fillRect(M, y + headH - 8, TW, 8);
      cols.forEach((c, i) => {
        const hd = head[i]; let cy = y + (headH - hd.h) / 2;
        const ax = cellX(c), al = cellA(c);
        ctx.fillStyle = '#fff'; ctx.font = F(hd.a.fs, 700);
        hd.a.lines.forEach(l => { const lh = lineH(l, hd.a.fs); drawText(ctx, l, ax, cy + lh / 2, al); cy += lh; });
        ctx.fillStyle = C.gold2; ctx.font = F(hd.b.fs, 600);
        hd.b.lines.forEach(l => { const lh = lineH(l, hd.b.fs); drawText(ctx, l, ax, cy + lh / 2, al); cy += lh; });
        if (i > 0) { const bx = LTR ? c.x0 : c.x1; ctx.strokeStyle = 'rgba(255,255,255,.18)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(bx, y + 6); ctx.lineTo(bx, y + headH - 6); ctx.stroke(); }
      });
      y += headH;
    }

    function drawRow(r, idx) {
      ctx.fillStyle = r.fill || (idx % 2 ? C.alt : '#fff'); ctx.fillRect(M, y, TW, r.h);
      cols.forEach((c, i) => {
        const cell = r.cells[i]; let cy = y + (r.h - cell.h) / 2;
        const ax = cellX(c), al = cellA(c);
        ctx.fillStyle = r.muted ? C.muted : (r.color || C.text); ctx.font = F(cell.fs, cell.wt);
        cell.lines.forEach(l => {
          const lh = lineH(l || 'a', cell.fs); drawText(ctx, l, ax, cy + lh / 2, al);
          if (r.muted && c.num && l) { const tw = ctx.measureText(l).width; ctx.fillRect(ax - tw / 2, cy + lh / 2, tw, 1); }
          cy += lh;
        });
        ctx.strokeStyle = C.line; ctx.lineWidth = 0.8;
        ctx.beginPath(); ctx.moveTo(c.x0, y); ctx.lineTo(c.x0, y + r.h); ctx.stroke();
      });
      ctx.strokeStyle = C.line; ctx.lineWidth = 0.8;
      ctx.beginPath(); ctx.moveTo(M, y + r.h); ctx.lineTo(w - M, y + r.h); ctx.moveTo(w - M, y); ctx.lineTo(w - M, y + r.h); ctx.moveTo(M, y); ctx.lineTo(M, y + r.h); ctx.stroke();
      y += r.h;
    }

    function drawSummary() {
      const n = rep.summary.length, gap = 10, bw = (TW - gap * (n - 1)) / n, bh = 66;
      rep.summary.forEach((s, i) => {
        const x0 = LTR ? M + i * (bw + gap) : w - M - i * (bw + gap) - bw, x1 = x0 + bw, col = C[s.color] || C.amber;
        const tx = LTR ? x0 + 12 : x1 - 12, ta = LTR ? 'left' : 'right';
        ctx.fillStyle = col[0]; rrect(ctx, x0, y, bw, bh, 10); ctx.fill();
        ctx.fillStyle = col[1]; ctx.font = F(12.5, 700); drawText(ctx, LTR ? (s.en || s.ur) : s.ur, tx, y + 18, ta);
        if (!LTR) { ctx.font = F(9.5, 600); drawText(ctx, s.en || '', x0 + 12, y + 18, 'left'); }
        let vf = 19; ctx.font = F(vf, 700);
        while (ctx.measureText(s.value).width > bw - 24 && vf > 10) { vf--; ctx.font = F(vf, 700); }
        drawText(ctx, s.value, tx, y + 46, ta);
      });
      y += bh;
    }

    function drawFooter(c, i, n) {
      c.strokeStyle = C.line; c.lineWidth = 1; c.beginPath(); c.moveTo(M, h - FOOT); c.lineTo(w - M, h - FOOT); c.stroke();
      c.fillStyle = C.navy; c.font = F(11.5, 700);
      drawText(c, `Page ${i} of ${n}`, w / 2, h - FOOT / 2, 'center');
      c.fillStyle = '#6b7f89'; c.font = F(10, 400);
      drawText(c, 'Digital Khata PWA', M, h - FOOT / 2, 'left');
      drawText(c, LTR ? 'Vendor Management System' : `صفحہ ${i} از ${n}`, w - M, h - FOOT / 2, 'right');
    }

    function start() {
      const cv = document.createElement('canvas'); cv.width = w * S; cv.height = h * S;
      ctx = cv.getContext('2d'); ctx.scale(S, S);
      ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, w, h);
      drawBand(); y = HB + 16; pages.push({ cv, ctx });
    }

    start(); drawVendorBlock();
    if (cols.length) {
      if (y + headH + (rows[0] ? rows[0].h : 30) > bottom()) start();
      drawHead();
      if (!rows.length) {
        ctx.fillStyle = '#fff'; ctx.fillRect(M, y, TW, 40);
        ctx.fillStyle = C.muted; ctx.font = F(13, 400); drawText(ctx, LTR ? 'No records found' : 'کوئی ریکارڈ موجود نہیں  —  No records found', w / 2, y + 20, 'center');
        y += 40;
      }
      rows.forEach((r, i) => {
        if (y + r.h > bottom()) { start(); drawHead(); } // page break – same table header repeated
        drawRow(r, i);
      });
    }
    if (rep.summary && rep.summary.length) {
      if (y + 14 + 66 > bottom()) start();
      y += 14; drawSummary();
    }
    if (rep.image) {
      try {
        const img = await loadImg(rep.image);
        let avail = bottom() - y - 44;
        if (avail < 300) { start(); avail = bottom() - y - 44; }
        y += 14;
        ctx.fillStyle = C.navy; ctx.font = F(14, 700); drawText(ctx, rep.imageTitle || (LTR ? 'Original Bill Image' : 'بل کی اصل تصویر  /  Original Bill Image'), LTR ? M : w - M, y + 12, LTR ? 'left' : 'right');
        y += 30;
        const sc = Math.min(TW / img.width, avail / img.height);
        const iw = img.width * sc, ih = img.height * sc, ix = M + (TW - iw) / 2;
        ctx.drawImage(img, ix, y, iw, ih);
        ctx.strokeStyle = C.line; ctx.lineWidth = 1; ctx.strokeRect(ix, y, iw, ih);
        y += ih;
      } catch (e) { /* image could not be loaded */ }
    }
    pages.forEach((p, i) => drawFooter(p.ctx, i + 1, pages.length));
    return pages.map(p => p.cv);
  }

  /* ---------- Minimal PDF writer (JPEG pages) ---------- */
  function dataUrlToBytes(u) {
    const b = atob(u.split(',')[1]); const a = new Uint8Array(b.length);
    for (let i = 0; i < b.length; i++) a[i] = b.charCodeAt(i);
    return a;
  }
  function buildPdf(imgs, pxW, pxH) {
    const PW = 595.28, PH = +(PW * pxH / pxW).toFixed(2);
    const enc = new TextEncoder(); const parts = []; let len = 0; const offs = [];
    const put = d => { const b = typeof d === 'string' ? enc.encode(d) : d; parts.push(b); len += b.length; };
    put(new Uint8Array([37, 80, 68, 70, 45, 49, 46, 52, 10, 37, 226, 227, 207, 211, 10]));
    const n = imgs.length, total = 2 + 3 * n;
    const begin = k => { offs[k] = len; put(`${k} 0 obj\n`); };
    begin(1); put('<< /Type /Catalog /Pages 2 0 R >>\nendobj\n');
    begin(2); put(`<< /Type /Pages /Kids [${imgs.map((_, i) => `${3 + 3 * i} 0 R`).join(' ')}] /Count ${n} >>\nendobj\n`);
    imgs.forEach((b, i) => {
      const p = 3 + 3 * i, c = p + 1, im = p + 2;
      begin(p); put(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PW} ${PH}] /Resources << /XObject << /Im${i} ${im} 0 R >> >> /Contents ${c} 0 R >>\nendobj\n`);
      const cs = `q ${PW} 0 0 ${PH} 0 0 cm /Im${i} Do Q`;
      begin(c); put(`<< /Length ${cs.length} >>\nstream\n${cs}\nendstream\nendobj\n`);
      begin(im); put(`<< /Type /XObject /Subtype /Image /Width ${pxW} /Height ${pxH} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${b.length} >>\nstream\n`);
      put(b); put('\nendstream\nendobj\n');
    });
    const xref = len;
    let x = `xref\n0 ${total + 1}\n0000000000 65535 f \n`;
    for (let k = 1; k <= total; k++) x += String(offs[k]).padStart(10, '0') + ' 00000 n \n';
    put(x); put(`trailer\n<< /Size ${total + 1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`);
    return new Blob(parts, { type: 'application/pdf' });
  }

  function download(blob, name) {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob); a.download = name;
    document.body.appendChild(a); a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 5000);
  }
  const safe = s => String(s || 'report').replace(/[\\/:*?"<>|]+/g, '').replace(/\s+/g, '_').slice(0, 80);

  async function downloadImages(rep, base) {
    const cvs = await renderPages(rep, 'image');
    for (let i = 0; i < cvs.length; i++) {
      const b = await new Promise(r => cvs[i].toBlob(r, 'image/png'));
      download(b, cvs.length > 1 ? `${safe(base)}_page${i + 1}.png` : `${safe(base)}.png`);
      if (cvs.length > 1) await sleep(800);
    }
    return cvs.length;
  }
  async function makePdfBlob(rep) {
    const cvs = await renderPages(rep, 'pdf');
    const imgs = cvs.map(c => dataUrlToBytes(c.toDataURL('image/jpeg', 0.93)));
    return { blob: buildPdf(imgs, cvs[0].width, cvs[0].height), pages: cvs.length };
  }
  async function downloadPdf(rep, base) {
    const { blob, pages } = await makePdfBlob(rep);
    download(blob, safe(base) + '.pdf');
    return pages;
  }

  window.Render = { renderPages, downloadImages, downloadPdf, makePdfBlob, download };
})();
