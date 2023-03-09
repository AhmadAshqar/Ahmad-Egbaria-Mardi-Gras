const accordionButtons = document.querySelectorAll('.btn-link');

accordionButtons.forEach(button => {
    button.addEventListener('click', () => {
        const target = document.querySelector(button.getAttribute('data-target'));

        target.classList.toggle('show');
    });
});
