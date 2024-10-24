const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const modalImg = document.getElementById('modal-img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentIndex = 0;

galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    modalImg.src = item.src;
    currentIndex = index;
  });
});

document.querySelector('.close').addEventListener('click', () => {
  lightbox.style.display = 'none';
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
  modalImg.src = galleryItems[currentIndex].src;
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
  modalImg.src = galleryItems[currentIndex].src;
});
