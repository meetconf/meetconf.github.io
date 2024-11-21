// ну вроде бы не пришлось в итоге джс использовать но для формочки в будущем нужно будет

// Get elements
const modal = document.getElementById('pdfModal');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.querySelector('.close-btn');

// Open modal
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Close modal when clicking the close button
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
