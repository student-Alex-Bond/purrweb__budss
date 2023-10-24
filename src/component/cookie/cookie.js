export default (() => {
    const cookie = document.querySelector('.cookie');
    const childrenButtonsCookie = cookie.querySelectorAll('button');

    const timerId = setTimeout(() => {
        cookie.classList.add('view-cookie');
        clearTimeout(timerId);
    }, 3000);

    const removeCookie = () => {
        cookie.classList.remove('view-cookie');
    };

    childrenButtonsCookie.forEach((elem) => {
        elem.addEventListener('click', removeCookie);
    });
})();
