ymaps.ready(init);
let myPlacemark;
function init(){ 
    // Создание карты.    
    let myMap = new ymaps.Map("map", {
        center: [59.919666, 30.354046],
        zoom: 15
    });
    myMap.behaviors.disable('scrollZoom');
    myPlacemark = new ymaps.Placemark(
      [59.919666, 30.354046],{
        hintContent: 'Mr Burger'
      },
      {
        iconLayout: 'default#image',
        iconImageHref: '../img/icons/map-marker.svg',
        iconImageSize: [50, 60]
      }
    );
    myPlacemark2 = new ymaps.Placemark(
      [59.920145, 30.346064],{
        hintContent: 'Mr Burger'
      },
      {
        iconLayout: 'default#image',
        iconImageHref: '../img/icons/map-marker.svg',
        iconImageSize: [50, 60]
      }
    );
    myMap.geoObjects.add(myPlacemark).add(myPlacemark2);
}