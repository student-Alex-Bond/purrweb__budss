window.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slides__container');
    const slides = document.querySelectorAll('.slides__slide');
    const dotsContainer = document.querySelector('.slider__dots');
    const buttonRight = document.querySelector('.arrow_right');
    const buttonLeft = document.querySelector('.arrow_left');
    // переменные
    const arrayFromSourceImages = [];
    let currentIndex = 0;
    const firstImage = 0;
    const secondImage = 1;
    // заполнение массива тэгами из html документа
    slides.forEach(item => arrayFromSourceImages.push(item));
    // очищение контейнера от изображений
    sliderContainer.innerHTML = '';
    // вставка первого изображения
    const html = [arrayFromSourceImages[firstImage]]
        .map(img => `<img class="${img.className}" src="${img.src}" alt=""/>`);
    sliderContainer.insertAdjacentHTML('afterbegin', html.join(''));

    //функции

    const insertedImage = (insertionPoint, index) => {
        const insertImage = arrayFromSourceImages[index].cloneNode(true);
        if (insertionPoint === 'next') {
            insertImage.style.left = '100%';
            sliderContainer.appendChild(insertImage);
        }
        if (insertionPoint === 'back') {
            insertImage.style.left = '-100%';
            const firstElement = sliderContainer.firstElementChild;
            sliderContainer.insertBefore(insertImage, firstElement);
        }
    }
    const toggleActiveDot = (index) => {
        if (arrayFromSourceImages.length <= 1) return;
        const dots = document.querySelectorAll('.slider__dots-item');
        dots.forEach(item => item.classList.remove('slider__dots-circle--active'));
        dots[Number(index)].classList.add('slider__dots-circle--active');
    }

    const renderDots = () => {
        if (arrayFromSourceImages.length <= 1) return; // если одно изображение точки не рендерятся
        const arrayButtons = [];
        for (let i = 0; i <= arrayFromSourceImages.length - 1; i++) {
            arrayButtons.push(`<button class="slider__dots-item" data-id="${i}"></button>`)
        }
        dotsContainer.insertAdjacentHTML('afterbegin', arrayButtons.join(''));
        toggleActiveDot(currentIndex);
    }
    const toggleDisabledDots = (value) => {
        document.querySelectorAll('.slider__dots-item').forEach(dot => dot.disabled = value);
    }


    const showClickedSlide = (event) => {
        const id = event.target.dataset.id;
        if (id) {
            if (currentIndex === Number(id)) return; // выход из функции если нажали на ту же кнопку
            toggleDisabledDots(true);
            insertedImage('next', id);
            currentIndex = Number(id); // много времени заняло поиск этой ошибки(отсутсвие строгой типизации)
            toggleActiveDot(currentIndex);
            animateSlide('next');
        };
    }

    const toggleDisabledButtons = (mode) => {
        if (mode === 'disabled') {
            buttonLeft.disabled = true;
            buttonRight.disabled = true;
        }
        if (mode === 'enabled') {
            buttonLeft.disabled = false;
            buttonRight.disabled = false;
        }
    }

    const clearingStyleLeft = () => {
        document.querySelectorAll('.slides__slide').forEach(item => item.style = '');
    }


    const animateSlide = (direction) => {
        const slides = document.querySelectorAll('.slides__slide');
        const start = Date.now();

        const timer = setInterval(() => {

            const timePassed = Date.now() - start;
            const slideWidth = slides[firstImage].offsetWidth;
            const animationDuration = 300; // время анимации разделить на ширину одного слайда  
            const divider = animationDuration / slideWidth;

            if (timePassed >= animationDuration) {
                clearInterval(timer);
                // в то время как timePassed идёт от 0 до 2000 ms  делитель  2000/400 = 5
                // left изменяет значение от      0px до 400px 

                clearingStyleLeft();
                toggleDisabledDots(false);
                toggleActiveDot(currentIndex);
                toggleDisabledButtons('enabled');

                direction === 'next' ?
                    sliderContainer.firstElementChild.remove() :
                    sliderContainer.lastElementChild.remove();

                return; // закончить  анимацию 
            }
            if (direction === 'next') {
                slides[firstImage].style.left = `${Math.ceil(-timePassed / divider)}px`;
                slides[secondImage].style.left = `${Math.ceil(slideWidth - (timePassed / divider))}px`;
            } else {
                slides[secondImage].style.left = `${Math.ceil(timePassed / divider)}px`;
                slides[firstImage].style.left = `${Math.ceil(-slideWidth + (timePassed / divider))}px`;
            }

        }, 17);
    }

    const changeSlide = (direction) => {
        let value = 1;
        direction === 'next' ? value = 1 : value = -1;

        if (currentIndex + value < 0) {
            currentIndex = arrayFromSourceImages.length - 1;
        } else {
            currentIndex = (currentIndex + value) % arrayFromSourceImages.length;
        }

    }

    const nextSlide = () => {
        toggleDisabledButtons('disabled');
        changeSlide('next');
        insertedImage('next', currentIndex);
        animateSlide('next');
    }

    const previousSlide = () => {
        toggleDisabledButtons('disabled');
        changeSlide('back');
        insertedImage('back', currentIndex);
        animateSlide('back');

    }

    renderDots();

    // слушатели
    buttonRight.addEventListener('click', () => nextSlide());
    buttonLeft.addEventListener('click', () => previousSlide());
    dotsContainer.addEventListener('click', (event) => showClickedSlide(event));

})