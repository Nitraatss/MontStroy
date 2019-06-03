const DESKTOP_WIDTH = 1200;

const initiateMenu = () => {
  const mainHeader = document.querySelector(`.main-header`);
  const menuToggler = mainHeader.querySelector(`.main-header__toggler`);
  const menuList = mainHeader.querySelector(`.main-header__list`);

  const toggleMenu = () => {
    menuToggler.classList.toggle(`main-header__toggler--active`);
    menuList.classList.toggle(`main-header__list--active`);
  };

  const hideMenu = () => {
    menuToggler.classList.remove(`main-header__toggler--active`);
    menuList.classList.remove(`main-header__list--active`);
  };

  menuToggler.addEventListener(`click`, toggleMenu);

  document.addEventListener(`keydown`, (evt) => {
    if (evt.keyCode === 27) {
      hideMenu();
    }
  });

  window.addEventListener(`resize`, () => {
    if (window.innerWidth >= DESKTOP_WIDTH) {
      hideMenu();
    }
  });
};

export default initiateMenu;
