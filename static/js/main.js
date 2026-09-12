document.addEventListener('DOMContentLoaded', () => {
    const deleteForms = document.querySelectorAll('.delete-form');
    deleteForms.forEach(form => {
        form.addEventListener('submit', (e) => {
            const confirmDelete = window.confirm('Are you sure you want to delete this story?');
            if (!confirmDelete) {
                e.preventDefault();
            }
        });
    });
});