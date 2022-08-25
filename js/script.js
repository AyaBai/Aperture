function burgerMenu() {
  const navMenu  = document.querySelector ('.container_mobile');
  const menuBurger  = document.querySelector ('.menu_icon');
  document.body.classList.toggle('lock');
  navMenu.classList.toggle('_active');
  menuBurger.classList.toggle('_active');
}


