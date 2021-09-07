const navButton = document.querySelector('.head__nav-btn');
const navMenu = document.querySelector('.head__menu');

navButton.addEventListener('click', () => document.querySelector('.head__menu').classList.toggle('head__menu--mobile'));

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    navMenu.classList.remove('head__menu--mobile');
  }
});