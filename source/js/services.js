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

  const hideServiceList = (serviceTitle, serviceList) => {
    serviceTitle.classList.remove(`single-service__title--active`);
    serviceList.classList.remove(`single-service__list--active`);
  };

  singleServices.forEach((service, index) => {
    const serviceTitle = service.querySelector(`.single-service__title`);
    const serviceList = service.querySelector(`.single-service__list`);

    serviceTitle.addEventListener(`click`, () => {
      singleServices.forEach((service, subindex) => {
        const subServiceTitle = service.querySelector(`.single-service__title`);
        const subServiceList = service.querySelector(`.single-service__list`);

        if (index !== subindex) {
          hideServiceList(subServiceTitle, subServiceList);
        }
      });

      toggleServiceList(serviceTitle, serviceList);
    });

    window.addEventListener(`resize`, () => {
      if (window.innerWidth >= DESKTOP_WIDTH) {
        hideServiceList(serviceTitle, serviceList);
      }
    });
  });
};

export default initiateServices;
