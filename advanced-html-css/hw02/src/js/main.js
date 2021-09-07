const burgerButton = document.querySelector('.head__nav-btn');
burgerButton.addEventListener('click', () => document.querySelector('.head__menu').classList.toggle('head__menu--visible'));