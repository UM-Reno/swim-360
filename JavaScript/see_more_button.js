document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.see-more-btn');

    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            const content = this.previousElementSibling.querySelector('.more-info');

            if (content) {
                if (content.style.display === 'none' || content.style.display === '') {
                    content.style.display = 'inline';
                    this.textContent = 'Read Less';
                } else {
                    content.style.display = 'none';
                    this.textContent = 'Read More';
                }
            }
        });
    });
});
