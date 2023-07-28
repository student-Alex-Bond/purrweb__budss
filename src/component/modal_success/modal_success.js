const success = document.querySelector('.success');
const btns = success.querySelectorAll('button');

const showModal = () => {
    success.style.animation = '';
    success.classList.toggle('show-success');
};

btns.forEach((btn) => {
    btn.addEventListener('click', showModal);
});
