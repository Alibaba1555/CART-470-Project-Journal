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
