// Enhancement only: all journal content and links work without JavaScript.
// Highlights the corresponding week as visitors scroll between entries.
const entries = document.querySelectorAll('.entry[id]');
const links = document.querySelectorAll('.week-link');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((items) => {
    for (const item of items) {
      if (!item.isIntersecting) continue;
      for (const link of links) {
        if (link.hash === '#' + item.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      }
    }
  }, { rootMargin: '0px 0px -65% 0px', threshold: 0 });
  entries.forEach(entry => observer.observe(entry));
}

// Load the live study only on request; removing it stops its animation.
const previewToggle = document.getElementById('preview-toggle');
const previewWrap = document.getElementById('water-frame-wrap');
if (previewToggle && previewWrap) {
  previewToggle.addEventListener('click', () => {
    const opening = previewToggle.getAttribute('aria-expanded') !== 'true';
    previewToggle.setAttribute('aria-expanded', String(opening));
    previewToggle.textContent = opening ? 'Close preview' : 'Open preview';
    previewWrap.hidden = !opening;
    previewWrap.replaceChildren();
    if (opening) {
      const frame = document.createElement('iframe');
      frame.title = 'Week 4 interactive island and water-current prototype';
      frame.src = 'https://alibaba1555.github.io/CART-470-Water-Effect-Test/';
      frame.allowFullscreen = true;
      previewWrap.appendChild(frame);
    }
  });
}

// Week 8: create the iframe only when requested; closing unloads the animation.
const creditsToggle = document.getElementById('credits-preview-toggle');
const creditsWrap = document.getElementById('credits-frame-wrap');
if (creditsToggle && creditsWrap) {
  creditsToggle.addEventListener('click', () => {
    const opening = creditsToggle.getAttribute('aria-expanded') !== 'true';
    creditsToggle.setAttribute('aria-expanded', String(opening));
    creditsToggle.textContent = opening ? 'Close live preview' : 'Open live preview';
    creditsWrap.hidden = !opening;
    creditsWrap.replaceChildren();
    if (opening) {
      const frame = document.createElement('iframe');
      frame.title = 'Week 8 Hochelaga Archipelago interactive credits prototype';
      frame.src = 'https://alibaba1555.github.io/CART470-Credits-Test/';
      frame.allowFullscreen = true;
      creditsWrap.appendChild(frame);
    }
  });
}
