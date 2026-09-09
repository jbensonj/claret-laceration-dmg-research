const base = document.getElementById('base');
const bonus = document.getElementById('laceration');
const rule = document.getElementById('rounding');
const output = document.getElementById('calc-output');
function update() {
  const b = Number(base.value), l = Number(bonus.value) / 100;
  if (base.value === '' || bonus.value === '' || !Number.isFinite(b) || !Number.isFinite(l) || b < 0 || l < 0) {
    output.textContent = 'Enter non-negative values for base damage and Laceration bonus.'; return;
  }
  output.replaceChildren();
  for (let k = 0; k < 3; k++) {
    const raw = b * (1 + l) ** k;
    const value = rule.value === 'nearest' ? Math.round(raw) : rule.value === 'floor' ? Math.floor(raw) : raw;
    const cell = document.createElement('div'), label = document.createElement('small'), number = document.createElement('strong');
    label.textContent = `${k} ${k === 1 ? 'application' : 'applications'}`;
    number.textContent = Number.isFinite(value) ? value.toLocaleString('en-US', { maximumFractionDigits: 3 }) : 'Out of range';
    cell.append(label, number); output.append(cell);
  }
}
for (const input of [base, bonus, rule]) input.addEventListener('input', update);
document.getElementById('reset-model').addEventListener('click', () => { base.value = '2067.9'; bonus.value = '150'; rule.value = 'nearest'; update(); });
document.querySelectorAll('[data-video]').forEach(button => button.addEventListener('click', () => {
  const video = document.getElementById(button.dataset.video);
  const seek = () => { video.pause(); video.currentTime = Number(button.dataset.time); video.focus(); };
  if (video.readyState >= 1) seek(); else { video.addEventListener('loadedmetadata', seek, { once:true }); video.load(); }
}));
document.getElementById('speed').addEventListener('change', event => document.querySelectorAll('video').forEach(video => { video.playbackRate = Number(event.target.value); }));
update();
