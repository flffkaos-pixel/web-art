import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const inputPath = fileURLToPath(new URL('./ocean.original.html', import.meta.url));
const outputPath = fileURLToPath(new URL('../ocean.html', import.meta.url));
const raw = readFileSync(inputPath, 'utf8');

const moduleIdx = raw.indexOf('<script type="module">');
if (moduleIdx < 0) throw new Error('ocean.original.html: module script marker not found');

let prefix = raw.slice(0, moduleIdx);
prefix = prefix.replace(/<script type="importmap">[\s\S]*?<\/script>/, '');

const block = `<style id="ultra-water-ui">
  #pads{display:none!important}
  #hud{left:12px;bottom:78px}
  #ui{padding:0;margin:0}
  #panel .lil-gui{
    --font-size:11px;--font-family:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;
    --background-color:transparent;--text-color:#cfe3ee;--title-background-color:transparent;--title-text-color:#5fd0e8;
    --widget-color:rgba(140,200,230,.14);--hover-color:rgba(140,200,230,.26);--focus-color:rgba(95,208,232,.42);
    --number-color:#5fd0e8;--string-color:#7ce0c0;
  }
  #panel .lil-gui.lil-root{position:static;width:100%;max-height:none;background:transparent;border:0;border-radius:0;box-shadow:none}
  #panel .lil-gui.lil-root>.lil-title{display:none}
  #panel .lil-gui .lil-children{border-left-color:rgba(140,200,230,.14)}
  #panel .lil-controller>.lil-name{color:#9fb6c4}
</style>
<script type="module">
import { createOcean } from './assets/ultra-water/ultra-ocean.js';

const bootEl = document.getElementById('boot');
const bootMsg = document.getElementById('bootmsg');
const errEl = document.getElementById('err');
const step = (m) => { if (bootMsg) bootMsg.textContent = m; };
function fatal(msg){ if (errEl){ errEl.style.display = 'flex'; errEl.innerHTML = msg; } if (bootEl) bootEl.classList.add('gone'); }

try {
  const test = document.createElement('canvas').getContext('webgl2');
  if (!test) throw new Error('WebGL2 is required.<br>Please use a recent desktop browser.');
  if (!test.getExtension('EXT_color_buffer_float')) throw new Error('EXT_color_buffer_float is unavailable.<br>Floating-point render targets are required for the simulation.');
} catch (e) { fatal(e.message || String(e)); }

step('compiling shaders…');

let app = null;
try {
  app = createOcean({
    canvas: document.getElementById('c'),
    container: document.getElementById('ui'),
    title: 'Spectral FFT Ocean',
    perfPanel: false,
    hud: { fps: document.getElementById('fps'), stat: document.getElementById('stat') },
    onReady: () => { if (bootEl){ bootEl.classList.add('gone'); setTimeout(() => bootEl.remove(), 800); } },
  });
} catch (e) {
  fatal('Startup failed:<br><code style="color:#ffb">' + (e && e.message ? e.message : e) + '</code>');
}

const hint = document.querySelector('#hud .desk-hint');
if (hint) hint.innerHTML = '<kbd>drag</kbd> orbit &nbsp; <kbd>wheel</kbd> zoom &nbsp; <kbd>right-drag</kbd> pan';

{
  const hideBtn = document.getElementById('tools-hide'), showBtn = document.getElementById('tools-show');
  const setTools = (open) => {
    document.body.classList.toggle('tools-hidden', !open);
    hideBtn?.setAttribute('aria-expanded', String(open));
    showBtn?.setAttribute('aria-expanded', String(open));
  };
  hideBtn?.addEventListener('click', e => { e.preventDefault(); setTools(false); });
  showBtn?.addEventListener('click', e => { e.preventDefault(); setTools(true); });
}

{
  const audio = new Audio('assets/audio/island-ocean.mp3');
  audio.loop = true; audio.volume = 0.6;
  const btn = document.getElementById('sound-toggle'), lbl = document.getElementById('sound-label');
  let on = false;
  btn?.addEventListener('click', async () => {
    on = !on;
    try { on ? await audio.play() : audio.pause(); } catch (e) {}
    btn.setAttribute('aria-pressed', String(on));
    if (lbl) lbl.textContent = on ? 'sound on' : 'sound off';
  });
}

window.addEventListener('error', (e) => { if (!app) fatal('Startup failed:<br><code style="color:#ffb">' + (e.message || e) + '</code>'); });
</script>
</body>
</html>
`;

writeFileSync(outputPath, prefix + block, 'utf8');
console.log('ocean.html rebuilt:', (prefix + block).length, 'bytes');
