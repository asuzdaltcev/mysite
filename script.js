const burgerButton = document.querySelector(".header__burger");
const burgerMenu = document.querySelector(".burger__menu");
const closeButton = document.querySelector(".burger__menu__exit");

burgerButton.addEventListener("click", () => {
  burgerMenu.classList.toggle("burger__menu--active");
});

closeButton.addEventListener("click", () => {
  burgerMenu.classList.remove("burger__menu--active");
});