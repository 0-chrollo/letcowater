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













(function () {
    var btn = document.getElementById('backToTop');

    window.addEventListener('scroll', function () {
      if (window.scrollY > 600) {          // CHANGE: how far down before the arrow appears
        btn.classList.add('is-visible');
      } else {
        btn.classList.remove('is-visible');
      }
    });

    btn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  })();