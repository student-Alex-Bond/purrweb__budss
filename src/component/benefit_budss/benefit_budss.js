import src from '../../images/benefit__item-2-2.svg';
import srcNext from '../../images/benefit__item-2-3.svg';
import firstImg from '../../images/benefit__item-1.svg';
import desktopWebpImg from '../../images/benefit__item-1__desktop.webp';
import desktopWebpBigImg from '../../images/benefit__item-1__desktop__2x.webp';

export default (() => {
    const listItems = document.querySelectorAll('.benefit-budss__item');
    const deletedImg = listItems[0].querySelector('img');
    const arr = [src, srcNext];
    const firstElement = 0;
    const secondElement = 1;
    for (let i = 0; i < 2; i += 1) {
        const img = document.createElement('img');
        img.src = arr[i];
        img.classList.add(`benefit-budss__item-img-1-${i + 1}`);
        img.setAttribute('alt', 'some image');
        listItems[secondElement].appendChild(img);
    }
    const html = `
        <picture class='benefit-budss__item-img-0 benefit-budss__item-img '>
            <source media="(max-width: 376px)" srcset=${firstImg}></source>
            <source media="(min-width: 1240px)" srcset=${desktopWebpImg}></source>
            <source media="(min-width: 1440px)" srcset='${desktopWebpBigImg} 2x'></source>
            <img class='benefit-budss__item-img-0 benefit-budss__item-img' alt='some img' src=${firstImg}/>
        <picture/>
    `;
    listItems[firstElement].removeChild(deletedImg);
    listItems[firstElement].insertAdjacentHTML('beforeend', html);
}
)();
