const DESKTOP_WIDTH = 1200;

const initiateServices = () => {
  const services = document.querySelector(`.services`);
  const singleServices = [].slice.call(
      services.querySelectorAll(`.single-service`)
  );

  const toggleServiceList = (serviceTitle, serviceList) => {
    serviceTitle.classList.toggle(`single-service__title--active`);
    serviceList.classList.toggle(`single-service__list--active`);
  };

  singleServices.forEach((service, index) => {
    const serviceTitle = service.querySelector(`.single-service__title`);
    const serviceList = service.querySelector(`.single-service__list`);
    serviceList.style.zIndex = `${40 - singleServices.length - index}`;

    serviceTitle.addEventListener(`click`, () => {
      singleServices.forEach((service) => {
        const serviceTitle = service.querySelector(`.single-service__title`);
        const serviceList = service.querySelector(`.single-service__list`);
        serviceTitle.classList.remove(`single-service__title--active`);
        serviceList.classList.remove(`single-service__list--active`);
      });

      toggleServiceList(serviceTitle, serviceList);
    });

    window.addEventListener(`resize`, () => {
      if (window.innerWidth >= DESKTOP_WIDTH) {
        serviceTitle.classList.remove(`single-service__title--active`);
        serviceList.classList.remove(`single-service__list--active`);
      }
    });
  });
};

export default initiateServices;
