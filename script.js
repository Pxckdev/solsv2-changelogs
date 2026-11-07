// Draws the updates from changelogs.js. To post a new update, edit changelogs.js, not this file.

const TYPES = [
  ['added', 'Added'],
  ['changed', 'Changed'],
  ['fixed', 'Fixed'],
  ['removed', 'Removed'],
];

const escapeHTML = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function niceDate(iso) {
  const d = new Date(`${iso}T12:00:00`);
  return isNaN(d) ? iso : d.toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric' });
}

let filter = 'all';
const list = document.getElementById('list');
const search = document.getElementById('search');

function render() {
  const q = search.value.trim().toLowerCase();
  const html = CHANGELOGS.map((log, i) => {
    const groups = TYPES
      .filter(([key]) => filter === 'all' || filter === key)
      .map(([key, label]) => {
        const items = (log[key] || []).filter((t) => !q || t.toLowerCase().includes(q) || (log.title || '').toLowerCase().includes(q) || (log.version || '').toLowerCase().includes(q));
        if (!items.length) return '';
        return `<div class="group ${key}">
          <span class="tag ${key}">${label}</span>
          <ul>${items.map((t) => `<li>${escapeHTML(t)}</li>`).join('')}</ul>
        </div>`;
      })
      .join('');
    if (!groups) return '';
    return `<article class="card log">
      <header class="log-head">
        <div>
          <span class="version">${escapeHTML(log.version || '')}</span>
          ${i === 0 ? '<span class="latest">LATEST</span>' : ''}
          <h2 class="section-title">${escapeHTML(log.title || 'Update')}</h2>
        </div>
        <time datetime="${escapeHTML(log.date || '')}">${escapeHTML(niceDate(log.date || ''))}</time>
      </header>
      ${groups}
    </article>`;
  }).join('');

  list.innerHTML = html;
  document.getElementById('empty').hidden = html.trim() !== '';
}

document.getElementById('chips').addEventListener('click', (e) => {
  const b = e.target.closest('.chip');
  if (!b) return;
  filter = b.dataset.f;
  document.querySelectorAll('.chip').forEach((c) => c.classList.toggle('active', c === b));
  render();
});
search.addEventListener('input', render);

render();
