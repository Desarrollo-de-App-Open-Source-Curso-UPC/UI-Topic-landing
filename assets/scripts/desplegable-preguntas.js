function toggleFaq(element) {
    const faqBox = element.closest('.faq-box');
    const flecha = faqBox.querySelector('.flecha');
    const respuesta = faqBox.querySelector('.respuesta');

    faqBox.classList.toggle('abierto');

    if (faqBox.classList.contains('abierto')) {
        respuesta.style.display = 'block';
    } else {
        respuesta.style.display = 'none';
    }
}

const btnMore = document.querySelector('.btn-more button');
const extraFaqs = document.querySelectorAll('.faq-box.extra');

btnMore.addEventListener('click', () => {
    const isShowingMore = btnMore.textContent === 'SEE LESS';

    extraFaqs.forEach(faq => {
        faq.classList.toggle('hidden', isShowingMore);
    });

    btnMore.textContent = isShowingMore ? 'SEE MORE' : 'SEE LESS';
});