export default (() => {
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

    const prefixNumber = (str) => {
        if (str === '7') {
            return '7 (';
        }
        if (str === '8') {
            return '8 (';
        }
        if (str === '9') {
            return '7 (9';
        }
        return '7 (';
    };
    const inputNumberMask = () => {
        const value = inputs[inputTel].value.replace(/\D+/g, '');
        const numberLength = 11;

        let result;
        if (inputs[inputTel].value.includes('+8') || inputs[inputTel].value[0] === '8') {
            result = '';
        } else {
            result = '+';
        }
        for (let i = 0; i < value.length && i < numberLength; i += 1) {
            switch (i) {
            case 0:
                result += prefixNumber(value[i]);
                continue;
            case 4:
                result += ') ';
                break;
            case 7:
                result += '-';
                break;
            case 9:
                result += '-';
                break;
            default:
                break;
            }
            result += value[i];
        }
        inputs[inputTel].value = result;
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
    form.addEventListener('submit', sendForm);
    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains('show-form')) {
            showForm();
        }
    });
})();
