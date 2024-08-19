document.addEventListener('DOMContentLoaded', function () {
    const modalToggleButton = document.querySelector('[data-modal-toggle="default-modal"]');
    const modal = document.getElementById('default-modal');
    const modalCloseButtons = document.querySelectorAll('[data-modal-hide="default-modal"]');

    modalToggleButton.addEventListener('click', function () {
        modal.classList.remove('hidden');
    });

    modalCloseButtons.forEach(button => {
        button.addEventListener('click', function () {
            modal.classList.add('hidden');
        });
    });

    // Close modal when clicking outside of it
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.classList.add('hidden');
        }
    });

    // Close modal when pressing Escape key
    const toggleButton = document.getElementById('toggle-bg-button');
    const modalSevenDiv =document.querySelector('.modal-seven');

    toggleButton.addEventListener('click', function () {
        modalSevenDiv.classList.toggle('toggle-bg');
    });
});
