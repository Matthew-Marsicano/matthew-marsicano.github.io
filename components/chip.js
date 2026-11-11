// Home page chip: the probe line under the package reads out whichever block
// is hovered or focused. Pure enhancement; the blocks are plain links.
(() => {
  const die = document.querySelector('.die');
  const out = document.querySelector('.probe-text');
  if (!die || !out) return;

  const idle = out.textContent;
  let current = null;

  const show = el => {
    const target = el?.closest('[data-probe]') || el?.closest('.blk')?.querySelector('[data-probe]');
    if (!target || target === current) return;
    current = target;
    const blk = target.closest('.blk');
    const ref = blk?.querySelector('.blk-ref')?.textContent.trim() || '';
    out.textContent = `${ref}  >  ${target.dataset.probe}`;
    die.querySelectorAll('.blk.is-probed').forEach(b => b.classList.remove('is-probed'));
    blk?.classList.add('is-probed');
  };

  const clear = () => {
    current = null;
    out.textContent = idle;
    die.querySelectorAll('.blk.is-probed').forEach(b => b.classList.remove('is-probed'));
  };

  die.addEventListener('pointerover', e => show(e.target));
  die.addEventListener('pointerleave', clear);
  die.addEventListener('focusin', e => show(e.target));
  die.addEventListener('focusout', e => { if (!die.contains(e.relatedTarget)) clear(); });
})();
