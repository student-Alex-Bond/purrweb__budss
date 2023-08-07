/* eslint-disable no-plusplus */
/* eslint-disable no-const-assign */
/* eslint-disable no-nested-ternary */
export default (() => {
    const button = document.querySelector('.influencer__btn');
    const showPopup = document.querySelector('.form__popup');
    const form = document.querySelector('.form');
    const closeForm = form.querySelector('.form__btn-close');
    const inputs = form.querySelectorAll('.required__field');
    const error = form.querySelector('.form__error-message--bottom');
    const formBtn = form.querySelector('.form__btn');
    const modalSuccess = document.querySelector('.success');
    const inputName = 0;
    const inputEmail = 1;
    const inputTel = 2;

    const showForm = () => {
        showPopup.classList.toggle('show-form');
    };

    inputs[inputTel].classList.add('flag');
    const validateForm = (event) => {
        const isEmptyInputName = Boolean(inputs[inputName].value);
        const isEmptyInputEmail = Boolean(inputs[inputEmail].value);
        const isEmptyInputTel = Boolean(inputs[inputTel].value);

        const element = event.target;
        const silbingElement = element.nextElementSibling;
        if (element.value === '') {
            element.classList.add('form__input--error');
            silbingElement.style.display = 'block';
        } else {
            element.classList.remove('form__input--error');
            silbingElement.style.display = 'none';
        }
        if (isEmptyInputName && isEmptyInputEmail && isEmptyInputTel) {
            formBtn.classList.remove('btn-disabled');
            error.style.display = 'none';
            formBtn.disabled = false;
        } else {
            formBtn.disabled = true;
            error.style.display = 'block';
            formBtn.classList.add('btn-disabled');
        }
    };

    const inputNumberMask = (event) => {
        const matrix = '+7(___) ___-__-__';
        let i = 0;

        const def = matrix.replace(/\D/g, '');
        let val = event.target.value.replace(/\D/g, '');
        if (event.type === 'blur') {
            if (val.length < matrix.match(/([\\_\d])/g).length) {
                // eslint-disable-next-line no-param-reassign
                event.target.value = '';
                return;
            }
        }
        if (def.length >= val.length) val = def;
        // no-nested-ternary, no-const-assign, no-plusplus, no-param-reassign
        // eslint-disable-next-line no-param-reassign
        event.target.value = matrix.replace(/./g, (a) => (/[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a));
    };

    const sendForm = (event) => {
        event.preventDefault();
        showForm();
        modalSuccess.style.animationDuration = '1s';
        modalSuccess.style.animationName = 'animation-for-modal-success';
        modalSuccess.classList.add('show-success');
    };
    inputs[inputTel].addEventListener('input', inputNumberMask);
    inputs.forEach((input) => {
        input.addEventListener('keyup', validateForm);
    });
    closeForm.addEventListener('click', showForm);
    button.addEventListener('click', showForm);
    form.addEventListener('submit', sendForm);
})();
