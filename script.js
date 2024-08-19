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

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggle-bg-button');
    const body = document.body;
    
    toggleButton.addEventListener('click', function () {
      // Toggle the dark mode class on the body
      body.classList.toggle('dark');
  
      // Switch the icon and data-toggle-dark attribute
      if (body.classList.contains('dark')) {
        toggleButton.setAttribute('data-toggle-dark', 'dark');
        document.querySelector('[data-toggle-icon="moon"]').classList.add('hidden');
        document.querySelector('[data-toggle-icon="sun"]').classList.remove('hidden');
      } else {
        toggleButton.setAttribute('data-toggle-dark', 'light');
        document.querySelector('[data-toggle-icon="sun"]').classList.add('hidden');
        document.querySelector('[data-toggle-icon="moon"]').classList.remove('hidden');
      }
    });
});
  
