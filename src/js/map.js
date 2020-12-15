if ($("#map").length > 0) {
	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
				center: [55.723141, 37.685296],
				controls: ['zoomControl'],
				zoom: 16
			}, {
				searchControlProvider: 'yandex#search'
			}),

			myPlacemark = new ymaps.Placemark([55.723141, 37.685296], {
				hintContent: 'Москва, Волгоградский пр-кт, дом 32, стр. 29',
				balloonContent: ''
			}, {
				iconLayout: 'default#image',
				iconImageHref: 'img/contacts/marker.svg',
				iconImageSize: [36, 48],
				iconImageOffset: [-10, -46]
			});
		myMap.behaviors.disable('scrollZoom');
		myMap.geoObjects
			.add(myPlacemark);
	});
}