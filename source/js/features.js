const initiateFeatures = () => {
  const features = document.querySelector(`.features`);
  const featuresSlider = features.querySelector(`.features__slider`);

  const swiperSliderFeatures = new Swiper(featuresSlider, {
    direction: `horizontal`,
    centeredSlides: true,
    allowTouchMove: true,
    loop: true,
    slidesPerView: 3,

    breakpoints: {
      767: {
        slidesPerView: 1
      }
    },

    pagination: {
      el: `.swiper-pagination`,
      clickable: true
    }
  });
};

export default initiateFeatures;
