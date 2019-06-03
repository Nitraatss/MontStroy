const initiatePartners = () => {
  const partners = document.querySelector(`.partners`);
  const partnersSlider = partners.querySelector(`.partners__slider`);
  const buttonPrevious = partners.querySelector(`.partners__button--previous`);
  const buttonNext = partners.querySelector(`.partners__button--next`);

  const swiperSlider = new Swiper(partnersSlider, {
    direction: `horizontal`,
    slidesPerView: 4,
    allowTouchMove: true,
    spaceBetween: 30,
    breakpoints: {
      767: {
        slidesPerView: 1,
        spaceBetween: 0
      },
      1199: {
        slidesPerView: 3,
        centeredSlides: true,
        spaceBetween: 0
      }
    },
    pagination: {
      el: `.swiper-pagination`,
      clickable: true
    }
  });

  buttonNext.addEventListener(`click`, () => {
    swiperSlider.slideNext();
  });
  buttonPrevious.addEventListener(`click`, () => {
    swiperSlider.slidePrev();
  });
};

export default initiatePartners;
