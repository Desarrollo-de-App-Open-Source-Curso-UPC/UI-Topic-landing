function toggleFaq(element) {
    const faqBox = element.closest('.faq-box');
    const flecha = faqBox.querySelector('.flecha');
    const respuesta = faqBox.querySelector('.respuesta');

    faqBox.classList.toggle('abierto');

    // Mostrar u ocultar la respuesta
    if (faqBox.classList.contains('abierto')) {
        respuesta.style.display = 'block';
    } else {
        respuesta.style.display = 'none';
    }
}
