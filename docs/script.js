const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.nav-links');

function closeMenu() {
  nav?.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
}

menuButton?.addEventListener('click', () => {
  const open = nav?.classList.toggle('is-open') ?? false;
  menuButton.setAttribute('aria-expanded', String(open));
});

nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => event.key === 'Escape' && closeMenu());

const demoButton = document.querySelector('.demo-button');
demoButton?.addEventListener('click', () => {
  demoButton.innerHTML = 'Готово — +25 XP <span>✓</span>';
  demoButton.setAttribute('aria-label', 'Практический шаг выполнен, начислено 25 очков опыта');
});
