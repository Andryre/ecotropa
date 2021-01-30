ymaps.ready(init);

var myMap;

function init () {
    // Параметры карты можно задать в конструкторе.
    myMap = new ymaps.Map(
        // ID DOM-элемента, в который будет добавлена карта.
        'map',
        // Параметры карты.
        {
            // Географические координаты центра отображаемой карты.
            center: [56.023498, 37.694333],
            // Масштаб.
            zoom: 15,
            // Тип покрытия карты: "Спутник".
            type: 'yandex#map'//satellite, hybrid
        }, {
            // Поиск по организациям.
            searchControlProvider: 'yandex#search'
        }
    );

        // Создаем геообъект с типом геометрии "Точка".
    var  myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [56.026673, 37.688008]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: '1',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: false
        });
    myMap.geoObjects
        .add(myGeoObject)
        .add(new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [56.027748, 37.690414]
            },
            properties: {
                iconContent: '2',
           }
        }, {
            preset: 'islands#blackStretchyIcon',
        }))
        .add(new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [56.027043, 37.691645]
            },
            properties: {
                iconContent: '3',
           }
        }, {
            preset: 'islands#blackStretchyIcon',
        }))
        .add(new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [56.025862, 37.692910]
            },
            properties: {
                iconContent: '4',
           }
        }, {
            preset: 'islands#blackStretchyIcon',
        }))
        .add(new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [56.023701, 37.696091]
            },
            properties: {
                iconContent: '5',
           }
        }, {
            preset: 'islands#blackStretchyIcon',
        }))
        .add(new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [56.023094, 37.698118]
            },
            properties: {
                iconContent: '6',
           }
        }, {
            preset: 'islands#blackStretchyIcon',
        }))
        .add(new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [56.021905, 37.696524]
            },
            properties: {
                iconContent: '7',
           }
        }, {
            preset: 'islands#blackStretchyIcon',
        }))
        .add(new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [56.018463, 37.685182]
            },
            properties: {
                iconContent: '8',
           }
        }, {
            preset: 'islands#blackStretchyIcon',
        }))
        ;

    ymaps.ready(['AnimatedLine']).then(init2);

}
function init2(ymaps) {

    var firstAnimatedLine = new ymaps.AnimatedLine([
        [56.026673, 37.688008],
        [56.027748, 37.690414],
        [56.026518, 37.692765],
        [56.026172, 37.692403],
        [56.026172, 37.692403],
        [56.024296, 37.694920],
        [56.023935, 37.694985],
        [56.023641, 37.695521],
        [56.023659, 37.696133],
        [56.023502, 37.696787],
        [56.023502, 37.696787],
        [56.023094, 37.698118]
    ], {}, {
        // Задаем цвет.
        strokeColor: "#339933",
        // Задаем ширину линии.
        strokeWidth: 5,
        // Задаем длительность анимации.
        animationTime: 4000
    });
    var secondAnimatedLine = new ymaps.AnimatedLine([
        [56.023094, 37.698118],
        [56.023065, 37.696929],
        [56.022975, 37.696650],
        [56.022590, 37.696671],
        [56.022350, 37.696929],
        [56.022038, 37.696854],
        [56.021377, 37.694985],
        [56.018483, 37.686046],
        [56.018463, 37.685182]
    ], {}, {
        strokeColor: "#339966",
        strokeWidth: 5,
        animationTime: 4000
    });
    var thirdAnimatedLine = new ymaps.AnimatedLine([
        [56.018463, 37.685182],
        [56.018625, 37.685171],
        [56.019591, 37.684738],
        [56.020620, 37.684972],
        [56.020620, 37.684972],
        [56.020577, 37.685095],
        [56.020585, 37.686302],
        [56.021647, 37.686501],
        [56.022092, 37.686232],
        [56.022845, 37.686491],
        [56.026304, 37.689387],
        [56.026573, 37.688326]
    ], {}, {
        strokeColor: "#339999",
        strokeWidth: 5,
        animationTime: 4000
    });
    // Добавляем линии на карту.
    myMap.geoObjects.add(firstAnimatedLine);
    myMap.geoObjects.add(secondAnimatedLine);
    myMap.geoObjects.add(thirdAnimatedLine);
    // Создаем метки.
    // https://yandex.ru/dev/maps/jsapi/doc/2.1/ref/reference/option.presetStorage.html
    //var firstPoint = new ymaps.Placemark([56.026673, 37.688008], {}, {
    //    preset: 'islands#blueObservationIcon'
    //});
    //var secondPoint = new ymaps.Placemark([56.023094, 37.698118], {}, {
    //    preset: 'islands#blueFamilyIcon'
    //});
    //var thirdPoint = new ymaps.Placemark([56.018463, 37.685182], {}, {
    //    preset: 'islands#blueVegetationIcon' //blueStarIcon
    //});
    var forthPoint = new ymaps.Placemark([56.026573, 37.688326], {}, {
        preset: 'islands#blueStarIcon' //blueStarIcon
    });
    // Функция анимации пути.
    function playAnimation() {
        // Убираем вторую линию.
        secondAnimatedLine.reset();
        thirdAnimatedLine.reset();
        // Добавляем первую метку на карту.
        //myMap.geoObjects.add(firstPoint);
        // Анимируем первую линию.
        firstAnimatedLine.animate()
            // После окончания анимации первой линии добавляем вторую метку на карту и анимируем вторую линию.
            .then(function() {
                //yMap.geoObjects.add(secondPoint);
                return secondAnimatedLine.animate();
            })
            .then(function() {
                //myMap.geoObjects.add(thirdPoint);
                return thirdAnimatedLine.animate();
            })
            // После окончания анимации второй линии добавляем третью метку на карту.
            .then(function() {
                myMap.geoObjects.add(forthPoint);
                // Добавляем паузу после анимации.
                return ymaps.vow.delay(null, 5000);
            })
            // После паузы перезапускаем анимацию.
            .then(function() {
                // Удаляем метки с карты.
               // myMap.geoObjects.remove(firstPoint);
                //myMap.geoObjects.remove(secondPoint);
                //myMap.geoObjects.remove(thirdPoint);
                myMap.geoObjects.remove(forthPoint);
                // Убираем вторую линию.
                secondAnimatedLine.reset();
                thirdAnimatedLine.reset();
                // Перезапускаем анимацию.
                playAnimation();
            });
    }
    // Запускаем анимацию пути.
    playAnimation();
}

function setCenter () {
    myMap.setCenter([56.023498, 37.694333]);
}

function setBounds () {
    // Bounds - границы видимой области карты.
    // Задаются в географических координатах самой юго-восточной и самой северо-западной точек видимой области.
    myMap.setBounds([[37, 38], [39, 40]]);
}

function setTypeAndPan () {
    // Меняем тип карты на "Гибрид".
    myMap.setType('yandex#hybrid');
    // Плавное перемещение центра карты в точку с новыми координатами.
    myMap.panTo([56.023498, 37.694333], {
            // Задержка между перемещениями.
            delay: 1500
        });
}
