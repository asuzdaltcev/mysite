// Тестирование формы контактов
const contactsForm = document.querySelector('.contacts__form-wrapper');

if (contactsForm) {
  // Тест 1: Проверка наличия всех необходимых полей
  const requiredFields = ['name', 'email', 'message'];
  const allFieldsPresent = requiredFields.every(field => 
    contactsForm.querySelector(`[name="${field}"]`)
  );
  console.log('Тест 1: Все необходимые поля присутствуют:', allFieldsPresent);

  // Тест 2: Проверка валидации email
  const emailInput = contactsForm.querySelector('[name="email"]');
  if (emailInput) {
    emailInput.addEventListener('input', () => {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isValidEmail = emailPattern.test(emailInput.value);
      console.log('Тест 2: Валидный email:', isValidEmail);
    });
  }

  // Тест 3: Проверка отправки формы
  contactsForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactsForm);
    const data = Object.fromEntries(formData);
    
    // Проверяем, что все поля заполнены
    const allFieldsFilled = Object.values(data).every(value => value.trim() !== '');
    console.log('Тест 3: Все поля заполнены:', allFieldsFilled);
    console.log('Тест 3: Данные формы:', data);
    
    // Очищаем форму после отправки
    contactsForm.reset();
  });

  // Тест 4: Проверка стилей полей
  const formInputs = contactsForm.querySelectorAll('input, textarea');
  formInputs.forEach(input => {
    input.addEventListener('focus', () => {
      console.log('Тест 4: Поле получило фокус:', input.name);
    });
    
    input.addEventListener('blur', () => {
      console.log('Тест 4: Поле потеряло фокус:', input.name);
    });
  });
} 