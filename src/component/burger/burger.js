export default (() => {
    const iconClose = document.querySelector('.nav__img');
    const buttonBurger = document.querySelector('.hamburger');
    const overlay = document.querySelector('.nav__overlay');

    const showMenu = () => {
        if (overlay.classList.contains('show-menu')) {
            document.body.style = '';
            overlay.classList.remove('show-menu');
        } else {
            document.body.style.overflowY = 'hidden';
            overlay.classList.add('show-menu');
        }
    };

    buttonBurger.addEventListener('click', showMenu);
    iconClose.addEventListener('click', showMenu);
}
)();
