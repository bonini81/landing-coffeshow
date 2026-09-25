/**
 * Coffee Show 2027 — main.js
 *
 * 1) LINKS: paste the real URLs here once you have them (ticket sales on
 *    buenplan.com.ec, and the social profiles). Leaving a value as '#'
 *    keeps the button/icon visible but inert (no new tab).
 * 2) Image fallback: until the real files exist in assets/img/, any
 *    broken image is swapped for a readable placeholder built from its
 *    alt text, so the page still looks intentional. Nothing to configure
 *    there — it just works once you drop in real images.
 */

const LINKS = {
  ticketsGeneral: '#', // botón principal "Comprar Entradas" del hero
  ticketsSat: '#',     // botón "Comprar Entradas" — Sábado 27 feb
  ticketsSun: '#',     // botón "Comprar Entradas" — Domingo 28 feb
  instagram: '#',
  tiktok: '#',
  facebook: '#',
};

(function wireLinks() {
  document.querySelectorAll('[data-link]').forEach((el) => {
    const key = el.getAttribute('data-link');
    const url = LINKS[key];
    if (!url) return;

    el.setAttribute('href', url);

    // No real URL yet — don't send the visitor through a dead new tab.
    if (url === '#') {
      el.removeAttribute('target');
    }
  });
})();

(function wireImageFallbacks() {
  const applyFallback = (img) => {
    const wrap = img.closest('.img-wrap');
    const alt = img.getAttribute('alt') || '';

    if (wrap) {
      wrap.classList.add('img-missing');
      if (alt) {
        wrap.setAttribute('aria-label', alt);
        // Show the alt text as visible fallback content.
        if (!wrap.querySelector('.img-missing__label')) {
          const label = document.createElement('span');
          label.className = 'img-missing__label';
          label.textContent = alt;
          wrap.appendChild(label);
        }
      }
    } else {
      // Decorative image with no wrapper (e.g. hero/program lips) — just hide it.
      img.classList.add('img-missing');
    }
  };

  const checkImage = (img) => {
    if (img.complete && img.naturalWidth === 0) {
      applyFallback(img);
    }
  };

  document.querySelectorAll('img').forEach((img) => {
    img.addEventListener('error', () => applyFallback(img), { once: true });
    checkImage(img);
  });
})();
