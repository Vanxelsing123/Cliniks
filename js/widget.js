const mainBtn = document.getElementById('mainBtn')

const widget = document.querySelector('.floating-widget')

mainBtn.addEventListener('click', () => {
	if (window.innerWidth <= 425) {
		widget.classList.toggle('active')
		mainBtn.classList.toggle('cross-active')
	}
})
