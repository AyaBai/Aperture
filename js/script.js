function burgerMenu() {
  const navMenu  = document.querySelector ('.container_mobile');
  const menuBurger  = document.querySelector ('.menu_icon');
  document.body.classList.toggle('lock');
  navMenu.classList.toggle('_active');
  menuBurger.classList.toggle('_active');
}


function scrollById(id) {
  let nav = document.getElementById(id);
  let offsetTop = nav.offsetTop;
  scrollTo({
      top: offsetTop,
      behavior: 'smooth'

  });

  nav.click()

  burgerMenu();
}