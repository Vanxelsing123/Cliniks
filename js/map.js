/* map Yandex   */
const map = document.getElementById('yandex-map')
map.parentElement.addEventListener('click', () => {
	map.style.pointerEvents = 'auto'
})

document.addEventListener('DOMContentLoaded', () => {
	ymaps.ready(init)

	let map
	const locations = [
		{
			coords: [55.577721, 37.9076],
			title: 'Семейная клиника',
			icon: 'img/pin.active.svg',
		},
		{
			coords: [55.589636, 37.906533],
			title: 'Стоматология, Косметология',
			icon: 'img/pin.active.svg',
		},
	]

	let placemarks = []

	function init() {
		map = new ymaps.Map('yandex-map', {
			center: locations[0].coords,
			zoom: 15,
			controls: ['zoomControl'],
		})

		// Чёрно-белая карта
		map.layers.get(0).get(0).options.set('pane', 'ground')
		map.panes.get('ground').getElement().style.filter = 'grayscale(100%)'

		// Добавляем оба маркера
		locations.forEach((loc, index) => {
			const mark = new ymaps.Placemark(
				loc.coords,
				{
					hintContent: loc.title,
					balloonContent: loc.title,
				},
				{
					iconLayout: 'default#image',
					iconImageHref: index === 0 ? loc.icon : 'img/pin.deactivated.svg', // первый активный
					iconImageSize: [40, 40],
					iconImageOffset: [-20, -40],
				}
			)
			placemarks.push(mark)
			map.geoObjects.add(mark)
		})

		// Переключение адресов
		document.querySelectorAll('.map__item').forEach((item, index) => {
			item.addEventListener('click', () => {
				// Центрирование карты
				map.setCenter(locations[index].coords, 15, { duration: 300 })

				// Обновление маркеров
				placemarks.forEach((mark, i) => {
					mark.options.set(
						'iconImageHref',
						i === index ? locations[i].icon : 'img/pin.inactive.svg'
					)
				})

				// Подсветка активного адреса
				document
					.querySelectorAll('.map__item')
					.forEach(el => el.classList.remove('active'))
				item.classList.add('active')
			})
		})

		// 🔹 Блокировка карты до клика
		const overlay = document.querySelector('.map-overlay')
		overlay.addEventListener('click', () => {
			overlay.style.display = 'none'
			setTimeout(() => {
				overlay.style.display = 'block'
			}, 5000)
		})
	}
})

document.querySelectorAll('.map__item').forEach(item => {
	item.addEventListener('click', () => {
		document
			.querySelectorAll('.map__item')
			.forEach(el => el.classList.remove('active'))
		item.classList.add('active')
	})
})
