/* =========================================================================
   Valiant Title — site behavior
   Mobile menu · footer year · header scroll state · scroll-reveal motion.
   Loaded with `defer` on every page. No dependencies.
   ========================================================================= */
(function () {
  "use strict";

  /* ---- Mobile menu ---- */
  (function () {
    var btn   = document.querySelector('[data-nav-toggle]');
    var menu  = document.querySelector('[data-mobile-menu]');
    var close = document.querySelector('[data-nav-close]');
    if (!btn || !menu) return;
    // The sticky header uses backdrop-filter, which makes it the containing
    // block for fixed-position children — that collapses this overlay to the
    // header's height. Re-parent it to <body> so inset:0 fills the viewport.
    if (menu.parentElement !== document.body) document.body.appendChild(menu);
    function open() {
      menu.dataset.open = 'true';
      menu.setAttribute('aria-hidden', 'false');
      btn.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden';
    }
    function shut() {
      menu.dataset.open = 'false';
      menu.setAttribute('aria-hidden', 'true');
      btn.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    }
    btn.addEventListener('click', open);
    if (close) close.addEventListener('click', shut);
    menu.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', shut); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') shut(); });

    // Safety: if the viewport grows to desktop while the menu is open,
    // force it closed so body scroll is never left locked (prevents "freeze").
    var desktop = window.matchMedia('(min-width: 1024px)');
    function onDesktopChange(e) { if (e.matches) shut(); }
    if (desktop.addEventListener) desktop.addEventListener('change', onDesktopChange);
    else if (desktop.addListener) desktop.addListener(onDesktopChange);
  })();

  /* ---- Footer year ---- */
  (function () {
    var y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();
  })();

  /* ---- Header scroll state (compact + shadow once scrolled) ---- */
  (function () {
    var header = document.querySelector('.site-header');
    if (!header) return;
    var ticking = false;
    function update() {
      header.classList.toggle('is-scrolled', window.scrollY > 12);
      ticking = false;
    }
    window.addEventListener('scroll', function () {
      if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
    update();
  })();

  /* ---- Scroll-reveal motion ---- */
  (function () {
    var els = Array.prototype.slice.call(document.querySelectorAll('[data-reveal]'));
    if (!els.length) return;

    var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

    els.forEach(function (el) { io.observe(el); });
  })();

})();
