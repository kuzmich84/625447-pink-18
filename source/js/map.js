ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    // Центр карты, указываем коордианты
    center: [59.93608917819094, 30.321109347221313],
    // Масштаб, тут все просто
    zoom: 16,
    // Отключаем все элементы управления
    controls: []
  });

  var myGeoObjects = [];

  // Наша метка, указываем коордианты
  var x = 36;
  var y = 36;

  myGeoObjects[0] = new ymaps.Placemark([59.93608917819094, 30.321109347221313], {
    balloonContentBody: 'Текст в балуне',
  }, {
    iconLayout: 'default#image',
    // Путь до нашей картинки
    iconImageHref: 'img/icon-map-marker.svg',
    // Размер по ширине и высоте
    iconImageSize: [x, y],
    // Смещение левого верхнего угла иконки относительно
    // её «ножки» (точки привязки).
    iconImageOffset: [-19, -27]
  });
  var clusterer = new ymaps.Clusterer({
    clusterDisableClickZoom: false,
    clusterOpenBalloonOnClick: false,
  });

  clusterer.add(myGeoObjects);
  myMap.geoObjects.add(clusterer);
  // Отлючаем возможность изменения масштаба
  myMap.behaviors.disable('scrollZoom');

}
