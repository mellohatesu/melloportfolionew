/* ─────────────────────────────────────────────
   MELLO IGE — main.js
   Cursor · Dynamic Island · Nav · Modal
   iMessage · Scroll Reveal
───────────────────────────────────────────── */

/* ── CURSOR ── */
function initCursor() {
  const dot  = document.getElementById('cur');
  const ring = document.getElementById('cur2');
  if (!dot || !ring) return;

  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
  });

  document.querySelectorAll('a, button, .m-thumb, .chip').forEach(el => {
    el.addEventListener('mouseenter', () => {
      dot.style.width  = '16px';
      dot.style.height = '16px';
      ring.style.width  = '52px';
      ring.style.height = '52px';
    });
    el.addEventListener('mouseleave', () => {
      dot.style.width  = '8px';
      dot.style.height = '8px';
      ring.style.width  = '40px';
      ring.style.height = '40px';
    });
  });

  (function follow() {
    rx += (mx - rx) * 0.1;
    ry += (my - ry) * 0.1;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(follow);
  })();
}

/* ── DYNAMIC ISLAND ── */
function initIsland() {
  const island = document.getElementById('island');
  if (!island) return;

  let timer;

  function expand() {
    island.classList.add('expanded');
    clearTimeout(timer);
    timer = setTimeout(() => island.classList.remove('expanded'), 3500);
  }

  setTimeout(expand, 1800);
  setInterval(expand, 9000);
  island.addEventListener('mouseenter', expand);
}

/* ── MOBILE NAV ── */
function initNav() {
  const ham    = document.getElementById('navHam');
  const drawer = document.getElementById('navDrawer');
  if (!ham || !drawer) return;

  ham.addEventListener('click', () => {
    ham.classList.toggle('open');
    drawer.classList.toggle('open');
  });

  // close on any anchor link click
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', closeNav);
  });
}

function closeNav() {
  const ham    = document.getElementById('navHam');
  const drawer = document.getElementById('navDrawer');
  if (ham)    ham.classList.remove('open');
  if (drawer) drawer.classList.remove('open');
}

/* ── MODAL ── */
function renderMain(item) {
  const el = document.getElementById('mMain');
  el.innerHTML = '';

  if (item.type === 'vimeo') {
    const f  = document.createElement('iframe');
    f.src    = `https://player.vimeo.com/video/${item.id}?autoplay=1&loop=1&color=ffffff&title=0&byline=0&portrait=0`;
    f.allow  = 'autoplay; fullscreen; picture-in-picture';
    el.appendChild(f);

  } else if (item.type === 'image') {
    const img = document.createElement('img');
    img.src   = item.src;
    img.alt   = '';
    el.appendChild(img);

  } else {
    const ph        = document.createElement('span');
    ph.className    = 'm-ph';
    ph.textContent  = item.label || 'MEDIA';
    el.appendChild(ph);
  }
}

function buildThumbs(media) {
  const strip = document.getElementById('mThumbs');
  strip.innerHTML = '';

  media.forEach((item, i) => {
    const t = document.createElement('div');
    t.className = 'm-thumb'
      + (i === 0 ? ' active' : '')
      + (item.type === 'vimeo' ? ' is-vid' : '');

    if (item.type === 'image' && item.thumb) {
      const img = document.createElement('img');
      img.src = item.thumb;
      t.appendChild(img);
    } else {
      const lbl       = document.createElement('span');
      lbl.className   = 'm-thumb-lbl';
      lbl.textContent = item.type === 'vimeo' ? 'VIDEO' : (item.label || 'IMG');
      t.appendChild(lbl);
    }

t.addEventListener('click', () => {
      strip.querySelectorAll('.m-thumb').forEach(x => x.classList.remove('active'));
      t.classList.add('active');
      currentMediaIndex = i;
      renderMain(item);
    });

    strip.appendChild(t);
  });
}

let currentMediaIndex = 0;
let currentMedia = [];

function stepMedia(dir) {
  const thumbs = document.getElementById('mThumbs');
  const allThumbs = thumbs.querySelectorAll('.m-thumb');
  const total = allThumbs.length;
  if (total <= 1) return;

  currentMediaIndex = (currentMediaIndex + dir + total) % total;

  allThumbs.forEach(t => t.classList.remove('active'));
  allThumbs[currentMediaIndex].classList.add('active');
  renderMain(currentMedia[currentMediaIndex]);
  updateArrows(total);
}

function updateArrows(total) {
  const prev = document.getElementById('mPrev');
  const next = document.getElementById('mNext');
  if (!prev || !next) return;
  if (total <= 1) {
    prev.classList.add('hidden');
    next.classList.add('hidden');
  } else {
    prev.classList.remove('hidden');
    next.classList.remove('hidden');
  }
}

function openM(index) {
  const p = PROJECTS[index];

  document.getElementById('mTitle').textContent = p.title;
  document.getElementById('mSub').textContent   = p.year + ' — ' + p.role;
  document.getElementById('mTags').innerHTML    = p.tags.map(t => `<span class="ptag">${t}</span>`).join('');
  document.getElementById('mText').innerHTML    = p.body;
  document.getElementById('mDets').innerHTML    = p.details.map(d =>
    `<div class="m-det">
       <div class="m-det-l">${d.l}</div>
       <div class="m-det-v">${d.v}</div>
     </div>`
  ).join('');

  // process sections
  const processEl = document.getElementById('mProcess');
  if (p.process && p.process.length) {
    processEl.innerHTML = p.process.map((s, i) =>
      `<div class="m-proc-item">
         <div class="m-proc-num">0${i + 1}</div>
         <div class="m-proc-content">
           <div class="m-proc-label">${s.label}</div>
           <p class="m-proc-body">${s.body}</p>
         </div>
       </div>`
    ).join('');
    processEl.style.display = 'block';
  } else {
    processEl.style.display = 'none';
  }

currentMedia = p.media;
  currentMediaIndex = 0;
  renderMain(p.media[0]);
  buildThumbs(p.media);
  updateArrows(p.media.length);

  document.getElementById('mOv').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeM() {
  document.getElementById('mMain').innerHTML = ''; // stops Vimeo playback
  document.getElementById('mOv').classList.remove('open');
  document.body.style.overflow = '';
}

function handleOv(e) {
  if (e.target === document.getElementById('mOv')) closeM();
}

function initModal() {
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeM();
  });
}

/* ── CARD VIDEO HOVER ── */
function initCardVideos() {
  document.querySelectorAll('.p').forEach(card => {
    const video = card.querySelector('.p-loop');
    if (!video) return;

    card.addEventListener('mouseenter', () => {
      video.play().catch(() => {}); // catch autoplay policy errors silently
    });
    card.addEventListener('mouseleave', () => {
      video.pause();
      video.currentTime = 0;
    });

    // mobile: play on tap, pause on second tap
    card.addEventListener('touchstart', () => {
      if (video.paused) { video.play().catch(() => {}); }
      else              { video.pause(); video.currentTime = 0; }
    }, { passive: true });
  });
}

/* ── SCROLL REVEAL ── */
function initReveal() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('on'), i * 60);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

  document.querySelectorAll('.rev').forEach(el => obs.observe(el));
}

/* ── IMESSAGE ── */
const KAO_MSGS = [
  { type: 'recv', text: '(˘ω˘) GLHF!'                },
  { type: 'sent', text: 'currently making things move ✦'   },
  { type: 'recv', text: 'ദ്ദി(˵ •̀ ᴗ - ˵) ✧'             },
  { type: 'sent', text: 'open for work btw'                 },
  { type: 'recv', text: '(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧'                   },
  { type: 'sent', text: 'based in chicago 🌃'              },
  { type: 'recv', text: '(⌐■_■) Pointdexter'                },
  { type: 'sent', text: 'lets make something ↗'             },
  { type: 'recv', text: '( ´ ▽ ` )ﾉ hiii'                 },
  { type: 'sent', text: '(っ˘ω˘ς) zzz'                    },
  { type: 'recv', text: 'ʕ•ᴥ•ʔ'                           },
];
const MAX_MSGS = 6;
let msgIndex   = 0;

function trimMsgs(container) {
  const all = [...container.children].filter(
    el => el.classList.contains('msg') || el.classList.contains('typing')
  );
  while (all.length > MAX_MSGS) { all[0].remove(); all.shift(); }
}

function addMsg() {
  const container = document.getElementById('phoneMsgs');
  if (!container) return;

  if (msgIndex >= KAO_MSGS.length) {
    // show typing indicator, then loop
    const t = document.createElement('div');
    t.className = 'typing';
    t.innerHTML = '<div class="t-dot"></div><div class="t-dot"></div><div class="t-dot"></div>';
    container.appendChild(t);
    trimMsgs(container);
    setTimeout(() => { t.remove(); msgIndex = 0; addMsg(); }, 1800);
    return;
  }

  const m        = KAO_MSGS[msgIndex];
  const el       = document.createElement('div');
  el.className   = 'msg ' + m.type;
  el.textContent = m.text;
  container.appendChild(el);
  trimMsgs(container);
  msgIndex++;

  setTimeout(addMsg, 900 + Math.random() * 700);
}

function initIMessage() {
  setTimeout(addMsg, 900);
}

/* ── BOOT ── */
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initIsland();
  initNav();
  initModal();
  initCardVideos();
  initReveal();
  initIMessage();
});
