const iconClose = document.querySelector('.nav__img');
const buttonBurger = document.querySelector('.hamburger');
const overlay = document.querySelector('.nav__overlay');

const showMenu = () => {
    overlay.classList.add('showMenu');
};
const closeMenu = () => {
    overlay.classList.remove('showMenu');
};
buttonBurger.addEventListener('click', showMenu);
iconClose.addEventListener('click', closeMenu);
