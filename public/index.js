// Add this JavaScript code
document.addEventListener('DOMContentLoaded', function () {
    // Get all todo list items
    const todoItems = document.querySelectorAll('.todo-item');

    // Add click event listeners to each todo item
    todoItems.forEach(function (item) {
        item.addEventListener('click', function () {
            // Get the content of the clicked todo
            const todoContent = this.querySelector('.todo-content').innerText;

            // Display the modal with animation
            const modal = document.getElementById('modal');
            modal.style.display = 'block';
            modal.classList.add('fadeIn');

            // Set the content of the modal
            document.getElementById('modal-content').innerText = todoContent;
        });
    });

    // Function to close the modal
    window.closeModal = function () {
        const modal = document.getElementById('modal');
        modal.style.display = 'none';
        modal.classList.remove('fadeIn');
    };
});
