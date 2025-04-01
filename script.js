const burgerButton = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".burger__menu");
const closeButton = document.querySelector(".burger__menu__exit");

burgerButton.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger__menu--active");
});

closeButton.addEventListener("click", () => {
  burgerMenu.classList.remove("burger__menu--active");
});

// Contact Modal functionality
const contactModal = document.getElementById('contactModal');
const hireMeBtn = document.querySelector('.btn');
const closeContactBtn = document.querySelector('.modal__close-btn');
const contactForm = document.querySelector('.modal__form');

if (contactModal && hireMeBtn && closeContactBtn && contactForm) {
  // Open modal
  hireMeBtn.addEventListener('click', () => {
    contactModal.classList.add('modal--active');
    document.body.style.overflow = 'hidden';
  });

  // Close modal
  closeContactBtn.addEventListener('click', () => {
    contactModal.classList.remove('modal--active');
    document.body.style.overflow = '';
  });

  // Close modal when clicking outside
  contactModal.addEventListener('click', (e) => {
    if (e.target === contactModal) {
      contactModal.classList.remove('modal--active');
      document.body.style.overflow = '';
    }
  });

  // Handle form submission
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Here you can add your form submission logic
    console.log('Form data:', data);
    
    // Close modal after submission
    contactModal.classList.remove('modal--active');
    document.body.style.overflow = '';
    contactForm.reset();
  });
}

// Contacts form functionality
const contactsForm = document.querySelector('.contacts__form-wrapper');
if (contactsForm) {
  contactsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactsForm);
    const data = Object.fromEntries(formData);
    
    // Here you can add your form submission logic
    console.log('Contacts form data:', data);
    
    // Reset form after submission
    contactsForm.reset();
  });
}

// Gallery Modal functionality
const galleryModal = document.getElementById('galleryModal');
const galleryItems = document.querySelectorAll('.gallery-item');
const modalImage = document.querySelector('.modal__gallery-image');
const closeGalleryBtn = document.querySelector('.modal--gallery .modal__close-btn');

if (galleryModal && galleryItems.length > 0 && modalImage && closeGalleryBtn) {
  // Open modal with image
  galleryItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const imageSrc = item.getAttribute('data-image');
      modalImage.src = imageSrc;
      galleryModal.classList.add('modal--active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close modal
  closeGalleryBtn.addEventListener('click', () => {
    galleryModal.classList.remove('modal--active');
    document.body.style.overflow = '';
  });

  // Close modal when clicking outside
  galleryModal.addEventListener('click', (e) => {
    if (e.target === galleryModal) {
      galleryModal.classList.remove('modal--active');
      document.body.style.overflow = '';
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && galleryModal.classList.contains('modal--active')) {
      galleryModal.classList.remove('modal--active');
      document.body.style.overflow = '';
    }
  });
}