// Site-wide enhancements. Everything here is optional: if a browser lacks a
// feature, the page works exactly the same without it.

// Prerender same-site pages when a link is hovered, so clicks feel instant
// (Chrome and Edge). PDFs, images, and the Plotly app are left out so a hover
// never pulls a heavy file.
if (HTMLScriptElement.supports?.('speculationrules')) {
  const rules = document.createElement('script');
  rules.type = 'speculationrules';
  rules.textContent = JSON.stringify({
    prerender: [{
      where: {
        and: [
          { href_matches: '/*' },
          { not: { href_matches: '/media/*' } },
          { not: { href_matches: '/backscatter-radio-viz/*' } }
        ]
      },
      eagerness: 'moderate'
    }]
  });
  document.head.append(rules);
}

// Card spotlight: track the pointer once per frame and hand its position to CSS
if (matchMedia('(hover: hover) and (pointer: fine)').matches) {
  const CARDS = '.feature-card, .interest-card, .projects-grid .project, .certification, .timeline-card, .next-card';
  let frame = 0;
  let last = null;

  document.addEventListener('pointermove', e => {
    last = e;
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0;
      const card = last.target.closest?.(CARDS);
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${last.clientX - r.left}px`);
      card.style.setProperty('--my', `${last.clientY - r.top}px`);
    });
  }, { passive: true });
}
