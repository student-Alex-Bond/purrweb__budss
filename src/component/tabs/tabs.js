export default (() => {
    const btns = document.querySelectorAll('.tabs__button');

    const toggleBtn = (event) => {
        btns.forEach((btn) => {
            btn.classList.remove('tabs__button-active');
        });
        event.target.classList.add('tabs__button-active');
    };

    btns.forEach((it) => {
        it.addEventListener('click', toggleBtn);
    });
})();
