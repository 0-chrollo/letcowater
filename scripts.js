const nav = document.getElementById('nav');
const menuBtn = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

function setMenu(open) {
  menuBtn.setAttribute('aria-expanded', String(open));
  menu.classList.toggle('is-open', open);
}

menuBtn.addEventListener('click', () => {
  setMenu(menuBtn.getAttribute('aria-expanded') !== 'true');
});
menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

function onScroll() { nav.classList.toggle('is-scrolled', window.scrollY > 10); }
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();













document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('backToTop');
    if (!btn) return;
  
    var SHOW_AFTER = 300;   // CHANGE: how far down before the arrow appears
  
    function getScroll() {
      return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }
  
    function toggle(e) {
      var y = getScroll();
      // if another element is the one scrolling, use its position
      if (e && e.target && e.target !== document && e.target.scrollTop) {
        y = Math.max(y, e.target.scrollTop);
      }
      btn.classList.toggle('is-visible', y > SHOW_AFTER);
    }
  
    window.addEventListener('scroll', toggle, { passive: true });
    document.addEventListener('scroll', toggle, { capture: true, passive: true });
    toggle();   // also check once when the page loads
  
    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });