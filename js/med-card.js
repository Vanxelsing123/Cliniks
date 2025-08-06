document.addEventListener('DOMContentLoaded', () => {
	const medTitle = document.getElementById('medTitle')
	const contentArea = document.getElementById('contentArea')
	const buttons = document.querySelectorAll('.menu button')
	const backToMenuBtn = document.getElementById('backToMenu')
	const sidebar = document.querySelector('.sidebar')
	const mainContent = document.querySelector('.main-content')

	const medicalEpisodes = [
		{
			episode: 'Зажимы в спине',
			consultation: 'Консультация невролога',
			doctorPhoto: 'img/doc1.png',
			doctorName: 'Трофимова Галина Николаевна',
			specialties: 'Невролог, детский невролог, физиотерапевт',
			date: '10.09.24',
		},
		{
			episode: 'Признаки ОРВИ',
			consultation: 'Общий анализ крови',
			doctorPhoto: 'img/Check.svg',
			doctorName: 'Результаты готовы',
			specialties: '',
			date: '15.08.24',
		},
	]

	function renderEpisodes(list) {
		return list
			.map(
				item => `
      <div class="episode">
        <div class="episode-header">
          <div>
            <h3>Эпизод: ${item.episode}</h3>
            <p class="episode-consult">${item.consultation}</p>
          </div>
          <div class="episode-date">${item.date}</div>
        </div>
        <div class="episode-body">
          <div class="doctor__card">
          <div class="doctor-photo">
            <img src="${item.doctorPhoto}" alt="${item.doctorName}" />
          </div>
          <div class="doctor-info">
            <p class="doctor-name">${item.doctorName}</p>
            <p class="doctor-specialties">${item.specialties}</p>
          </div>
          </div>
          <div class="episode-actions">
            <button class="btn-card">Скачать файлы</button>
            <button class="btn-card">Распечатать заключение</button>
          </div>
        </div>
      </div>
    `
			)
			.join('')
	}

	const appointments = [
		{
			id: 1,
			episode: 'Консультация невролога',
			consultation: '1 декабря, в 15:00',
			data: 'г. Лыткарино, кв-л 3A, д.29',
			doctorPhoto: 'img/doc2.png',
			doctorName: 'Трофимова Галина Николаевна',
			specialties: 'Невролог, детский невролог, физиотерапевт',
		},
		{
			id: 2,
			episode: 'Консультация невролога',
			consultation: '1 декабря, в 15:00',
			data: 'г. Лыткарино, кв-л 3A, д.29',
			doctorPhoto: 'img/doc2.png',
			doctorName: 'Трофимова Галина Николаевна',
			specialties: 'Невролог, детский невролог, физиотерапевт',
		},
	]

	function renderAppointments() {
		return appointments
			.map(
				item => `
      <div class="episode" data-id="${item.id}">
        <div class="episode-header header-border">
          <div>
            <h3>${item.episode}</h3>
            <div class="episode__date">
              <p class="episode__time">${item.consultation}</p>
              <p class="episode__address">По адресу ${item.data}</p>
            </div>
          </div>
        </div>
        <div class="episode-body body-visit">
          <div class="doctor__card">
          <div class="doctor-photo">
            <img src="${item.doctorPhoto}" alt="${item.doctorName}" />
          </div>
          <div class="doctor-info">
            <p class="doctor-name">${item.doctorName}</p>
            <p class="doctor-specialties">${item.specialties}</p>
          </div>
          </div>
          <div class="episode-actions">
            <button class="reschedule-btn btn-visit">Перенести</button>
            <button class="cancel-btn btn-visit" data-id="${item.id}">Отменить</button>
          </div>
        </div>
      </div>
    `
			)
			.join('')
	}

	const svgEdit = `
    <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M28.5068 11.0381C29.2439 11.0382 29.8352 11.3503 30.3477 11.7412C30.834 12.1123 31.3669 12.6491 31.9727 13.2549L32.2969 13.5791C32.9027 14.1849 33.4395 14.7178 33.8105 15.2041C34.2016 15.7166 34.5137 16.3085 34.5137 17.0459C34.5136 17.783 34.2015 18.3743 33.8105 18.8867C33.4395 19.3731 32.9027 19.9059 32.2969 20.5117L18.4902 34.3184C18.2497 34.5548 18.0054 34.7739 17.7148 34.9385C17.3274 35.1578 16.8992 35.2559 16.4541 35.3672L11.4492 36.6182C11.1457 36.694 10.7925 36.7854 10.4951 36.8145C10.1837 36.8449 9.61981 36.8415 9.16504 36.3867C8.71028 35.9319 8.70688 35.368 8.7373 35.0566C8.7664 34.7593 8.85772 34.406 8.93359 34.1025L10.1855 29.0977C10.2968 28.6526 10.394 28.2243 10.6133 27.8369C10.8327 27.4493 11.15 27.1449 11.4746 26.8203L25.04 13.2549C25.6458 12.6491 26.1787 12.1123 26.665 11.7412C27.1776 11.3502 27.7695 11.0381 28.5068 11.0381Z" stroke="#D8D5FD" stroke-width="2.26272"/>
<path d="M23.793 14.2168L31.3354 21.7592" stroke="#D8D5FD" stroke-width="1.8856"/>
</svg>
`

	const svgSave = `
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="22.4526" cy="22.3588" r="21.0592" fill="#EFF3FC" stroke="#535353" stroke-width="0.978148"/>
<path d="M24.7495 30.3442L32.7354 22.3583M32.7354 22.3583L24.7495 14.3724M32.7354 22.3583L12.1708 22.3583" stroke="#535353" stroke-width="2.6551" stroke-linecap="round" stroke-linejoin="round"/>
<circle cx="22.4506" cy="22.3569" r="21.5483" fill="#EFF3FC"/>
<path d="M29.7227 15.0875L15.1813 29.6289" stroke="#535353" stroke-width="2.6551" stroke-linecap="round"/>
<path d="M15.1813 15.0859L29.7227 29.6273" stroke="#535353" stroke-width="2.6551" stroke-linecap="round"/>
</svg>
`

	const profileData = {
		fullName: 'Алексей Иванов',
		phone: '',
		email: '',
	}

	let editingField = null

	function renderProfile() {
		return `
      <div id="profileForm">
        ${Object.entries(profileData)
					.map(
						([key, value]) => `
          <div class="profile-field" data-key="${key}">
            <label>${
							key === 'fullName' ? 'ФИО' : key === 'phone' ? 'Телефон' : 'Email'
						}:</label>
            <div class="profile-value">
              ${
								editingField === key
									? `<input type="${
											key === 'email' ? 'email' : 'text'
									  }" value="${value}" class="edit-input" placeholder="Введите данные">
                   <button class="save-btn">${svgSave}</button>`
									: `<span class="field-text">${
											value || 'Введите данные'
									  }</span>
                   <button class="edit-btn">${svgEdit}</button>`
							}
            </div>
          </div>
        `
					)
					.join('')}
      </div>
    `
	}

	function setupProfileEventListeners() {
		document.querySelectorAll('.edit-btn').forEach(btn => {
			btn.addEventListener('click', e => {
				const key = e.target.closest('.profile-field').dataset.key
				editingField = key
				renderTab('profile')
				setTimeout(() => {
					const input = document.querySelector(
						'.profile-field[data-key="' + key + '"] input'
					)
					if (input) input.focus()
				}, 0)
			})
		})

		document.querySelectorAll('.save-btn').forEach(btn => {
			btn.addEventListener('click', e => {
				const fieldDiv = e.target.closest('.profile-field')
				const key = fieldDiv.dataset.key
				const input = fieldDiv.querySelector('input')
				if (input) {
					profileData[key] = input.value.trim()
				}
				editingField = null
				renderTab('profile')
			})
		})
	}

	const contentData = {
		card: {
			title: 'Медицинская карта',
			render: () => renderEpisodes(medicalEpisodes),
		},
		appointments: {
			title: 'Предстоящие визиты',
			render: () => renderAppointments(),
		},
		profile: {
			title: 'Профиль',
			render: () => renderProfile(),
		},
	}

	function renderTab(tab) {
		medTitle.textContent = contentData[tab].title
		contentArea.innerHTML = contentData[tab].render()

		if (tab === 'profile') {
			setupProfileEventListeners()
		}

		if (tab === 'appointments') {
			document.querySelectorAll('.cancel-btn').forEach(button => {
				button.addEventListener('click', () => {
					const id = +button.getAttribute('data-id')
					const confirmCancel = confirm(
						'Вы действительно хотите отменить визит?'
					)
					if (confirmCancel) {
						const index = appointments.findIndex(item => item.id === id)
						if (index !== -1) {
							appointments.splice(index, 1)
							renderTab('appointments')
						}
					}
				})
			})
		}

		// Адаптивное поведение для мобильных устройств
		if (window.innerWidth <= 768) {
			sidebar.style.display = 'none'
			mainContent.style.display = 'block'
			backToMenuBtn.style.display = 'flex'
		}
	}

	buttons.forEach(button => {
		button.addEventListener('click', () => {
			buttons.forEach(btn => btn.classList.remove('active'))
			button.classList.add('active')
			const tab = button.getAttribute('data-tab')
			renderTab(tab)
		})
	})

	backToMenuBtn.addEventListener('click', () => {
		if (window.innerWidth <= 768) {
			sidebar.style.display = 'block'
			mainContent.style.display = 'none'
			backToMenuBtn.style.display = 'none'
		}
	})

	// Определяем, моб. ли устройство
	const isMobile = window.innerWidth <= 768

	// Выбираем вкладку по умолчанию только на десктопе
	const defaultTab = 'card'
	if (!isMobile) {
		document
			.querySelector(`.menu button[data-tab="${defaultTab}"]`)
			.classList.add('active')
		renderTab(defaultTab)
	} else {
		sidebar.style.display = 'block'
		mainContent.style.display = 'none'
		backToMenuBtn.style.display = 'none'
	}

	const userName = document.querySelector('.username').textContent.trim()
	document.getElementById('userAvatar').textContent = userName[0].toUpperCase()
})

console.log('renderTab called at screen width:', window.innerWidth)
