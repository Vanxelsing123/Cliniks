// Бургер + скрытие виджета на мобилках
document.addEventListener('DOMContentLoaded', () => {
	const burger = document.getElementById('burger')
	const header = document.querySelector('header')
	const widget = document.querySelector('.floating-widget')

	if (!burger || !header || !widget) {
		console.warn('burger/header/widget не найдены в DOM')
		return
	}

	const mq = window.matchMedia('(max-width: 425px)')

	const syncWidgetVisibility = () => {
		const isOpen = header.classList.contains('open')
		if (mq.matches) {
			// на мобилке: скрываем, если меню открыто
			if (isOpen) widget.classList.add('widget__mob')
			else widget.classList.remove('widget__mob')
		} else {
			// на десктопе всегда показываем
			widget.classList.remove('widget__mob')
		}
	}

	burger.addEventListener('click', () => {
		header.classList.toggle('open')
		document.body.classList.toggle('no-scroll')
		syncWidgetVisibility()
	})

	// если меняется ширина экрана — синхронизируем состояние
	mq.addEventListener('change', syncWidgetVisibility)
	syncWidgetVisibility()
})
