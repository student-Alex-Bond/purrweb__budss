export default (() => {
    const paragraphs = document.querySelectorAll('.advantages__string');

    const lastElement = 2;
    const string = `<span class='advantages__string'>
             Growth in New <br class='advantages__br'> Customers</span>`;

    paragraphs[lastElement].insertAdjacentHTML('afterend', string);
    paragraphs[lastElement].parentNode.removeChild(paragraphs[lastElement]);
}
)();
