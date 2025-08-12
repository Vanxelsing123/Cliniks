/* map Yandex   */
const map = document.getElementById('yandex-map')
map.parentElement.addEventListener('click', () => {
	map.style.pointerEvents = 'auto'
})
map.parentElement.addEventListener('mouseleave', () => {
	map.style.pointerEvents = 'none'
})

src =
	'https://api-maps.yandex.ru/2.1/?lang=ru_RU' >
	document.addEventListener('DOMContentLoaded', () => {
		ymaps.ready(init)

		let map, placemark
		const locations = [
			{ coords: [55.577721, 37.9076], title: 'Семейная клиника' },
			{ coords: [55.577721, 37.9076], title: 'Стоматология, Косметология' },
		]

		function init() {
			map = new ymaps.Map('yandex-map', {
				center: locations[0].coords,
				zoom: 15,
				controls: ['zoomControl'],
			})

			// Чёрно-белая карта
			map.layers.get(0).get(0).options.set('pane', 'ground')
			map.panes.get('ground').getElement().style.filter = 'grayscale(100%)'

			// Кастомный маркер
			placemark = new ymaps.Placemark(
				locations[0].coords,
				{
					hintContent: locations[0].title,
					balloonContent: locations[0].title,
				},
				{
					iconLayout: 'default#image',
					iconImageHref: 'img/Pin.svg',
					iconImageSize: [40, 40],
					iconImageOffset: [-20, -40],
				}
			)
			map.geoObjects.add(placemark)

			// Переключение адресов
			document.querySelectorAll('.map__item').forEach((item, index) => {
				item.addEventListener('click', () => {
					map.setCenter(locations[index].coords, 15, { duration: 300 })
					placemark.geometry.setCoordinates(locations[index].coords)
					placemark.properties.set({
						hintContent: locations[index].title,
						balloonContent: locations[index].title,
					})
				})
			})

			// 🔹 Блокировка карты до клика
			const overlay = document.querySelector('.map-overlay')
			overlay.addEventListener('click', () => {
				overlay.style.display = 'none'
				setTimeout(() => {
					overlay.style.display = 'block'
				}, 5000) // вернёт защиту через 5 секунд
			})
		}
	})
