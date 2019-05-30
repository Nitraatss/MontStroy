const DESKTOP_WIDTH = 1200;
const ICONS_SIZES = {
  DESKTOP: {sizes: [72, 98], offset: [-35, -90]},
  MOBILE: {sizes: [21, 28], offset: [-11, -18]}
};

const map = () => {
  document.addEventListener(`DOMContentLoaded`, () => {
    const setIconSizes = () => {
      let icon;

      if (window.innerWidth >= DESKTOP_WIDTH) {
        icon = ICONS_SIZES.DESKTOP;
      } else {
        icon = ICONS_SIZES.MOBILE;
      }

      return icon;
    };

    const map = document.querySelector(`#map`);

    if (map) {
      const initiateMap = () => {
        const bigMap = new ymaps.Map(map, {
          center: [55.631813, 37.618403],
          zoom: 16
        });

        let icon = setIconSizes();

        let iconLocation;
        if (window.location.href.split(`/build/`).length > 1) {
          iconLocation = `${
            window.location.href.split(`/build/`)[0]
          }/build/img/icons/geo.svg`;
        } else {
          iconLocation = `${document.location.origin}/img/icons/geo.svg`;
        }

        const point = new ymaps.Placemark([55.631813, 37.618403], null, {
          iconLayout: `default#imageWithContent`,
          iconImageHref: iconLocation,
          iconImageSize: icon.sizes,
          iconImageOffset: icon.offset
        });

        bigMap.geoObjects.add(point);

        window.addEventListener(`resize`, () => {
          let changedIcon = setIconSizes();

          if (icon.sizes[0] !== changedIcon.sizes[0]) {
            point.options.set(`iconImageSize`, changedIcon.sizes);
            point.options.set(`iconImageOffset`, changedIcon.offset);
            icon = changedIcon;
          }
        });
      };

      ymaps.ready(initiateMap);
    }
  });
};

export default map;
