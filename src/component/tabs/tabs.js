export default (() => {
    const btns = document.querySelectorAll('.tabs__button');

    btns.forEach((it) => {
        it.addEventListener('click', (event) => {
            btns.forEach((btn) => {
                btn.classList.remove('tabs__button-active');
            });
            event.target.classList.add('tabs__button-active');
        });
    });
})();
