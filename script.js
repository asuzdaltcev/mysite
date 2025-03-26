const burgerButton = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".burger__menu");
const closeButton = document.querySelector(".burger__menu__exit");

burgerButton.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger__menu--active");
});

closeButton.addEventListener("click", () => {
  burgerMenu.classList.remove("burger__menu--active");
});

// Modal functionality
const modal = document.getElementById('contactModal');
const hireMeBtn = document.querySelector('.btn');
const closeModalBtn = document.querySelector('.modal__close-btn');
const contactForm = document.querySelector('.modal__form');

// Open modal
hireMeBtn.addEventListener('click', () => {
  modal.classList.add('modal--active');
  document.body.style.overflow = 'hidden';
});

// Close modal
closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('modal--active');
  document.body.style.overflow = '';
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('modal--active');
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
  modal.classList.remove('modal--active');
  document.body.style.overflow = '';
  contactForm.reset();
});

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