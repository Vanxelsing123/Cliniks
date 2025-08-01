const headers = document.querySelectorAll('.calculator__card-accardion-title')
const summaryBlock = document.querySelector('.calculator__card-summary')
const summaryCount = summaryBlock.querySelector('.calculator__summary-count')
const summaryTotal = summaryBlock.querySelector('.calculator__summary-total')
const showListBtn = summaryBlock.querySelector('.calculator__show-list-btn')
const contactsBlock = document.querySelector('.calculator__card-contacts')

function createModal() {
	if (document.querySelector('.custom-modal')) return
	const modalHTML = `
    <div class="custom-modal-overlay">
      <div class="custom-modal">
        <button class="custom-modal-close" aria-label="Закрыть">
          <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.7227 8.20666L8.1813 22.748" stroke="#535353" stroke-width="2.6551" stroke-linecap="round"/>
            <path d="M8.18126 8.20703L22.7227 22.7484" stroke="#535353" stroke-width="2.6551" stroke-linecap="round"/>
          </svg>
        </button>
        <h2 class="custom-modal-title">Список анализов</h2>
        <ul class="custom-modal-list"></ul>
        <div class="custom-modal-total">
          <span>Итог сумма:</span>
          <span class="custom-modal-total-sum">0 ₽</span>
        </div>
        <div class="custom-modal-buttons">
          <button class="custom-modal-btn share-btn bth-reset">
          <svg width="55" height="54" viewBox="0 0 55 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M41.3804 12.3634C40.4855 12.5225 39.2434 12.9321 37.3571 13.5609L20.2571 19.2609C17.5909 20.1497 15.6764 20.7889 14.3171 21.354C12.88 21.9514 12.4287 22.3304 12.303 22.5128C11.6357 23.4806 11.6357 24.7601 12.303 25.7279C12.4287 25.9103 12.88 26.2893 14.3171 26.8867C15.6764 27.4518 17.5909 28.091 20.2571 28.9798C20.3095 28.9973 20.3613 29.0145 20.4124 29.0315C21.3229 29.3344 22.0287 29.5692 22.6469 29.958C23.4129 30.4396 24.0607 31.0875 24.5424 31.8534C24.9311 32.4717 25.1659 33.1774 25.4689 34.0879C25.4859 34.139 25.5031 34.1908 25.5206 34.2433C26.4093 36.9095 27.0485 38.8239 27.6137 40.1833C28.2111 41.6203 28.5901 42.0716 28.7725 42.1974C29.7403 42.8646 31.0197 42.8646 31.9876 42.1974C32.1699 42.0716 32.5489 41.6203 33.1464 40.1833C33.7115 38.8239 34.3507 36.9095 35.2394 34.2432L40.9394 17.1432C41.5682 15.2569 41.9778 14.0149 42.137 13.12C42.2141 12.6868 42.2083 12.4526 42.1897 12.3388C42.1882 12.3296 42.1867 12.3217 42.1853 12.3151C42.1786 12.3136 42.1707 12.3121 42.1616 12.3106C42.0478 12.292 41.8136 12.2863 41.3804 12.3634ZM40.8199 9.21281C41.9902 9.00464 43.3922 8.98274 44.4549 10.0454C45.5176 11.1081 45.4957 12.5102 45.2875 13.6804C45.0822 14.8349 44.5929 16.3025 44.0163 18.032L43.9752 18.1552L38.2752 35.2552L38.2526 35.3231C37.3913 37.9071 36.7162 39.9323 36.1012 41.4117C35.5131 42.8263 34.8418 44.1163 33.804 44.8319C31.7426 46.2531 29.0175 46.2531 26.9561 44.8319C25.9182 44.1163 25.2469 42.8263 24.6588 41.4117C24.0438 39.9322 23.3687 37.907 22.5074 35.3229L22.4848 35.2552C22.1058 34.1182 21.9908 33.8071 21.8334 33.5569C21.6073 33.1972 21.3031 32.8931 20.9435 32.6669C20.6932 32.5096 20.3822 32.3946 19.2452 32.0156L19.1775 31.993C16.5933 31.1316 14.5681 30.4566 13.0887 29.8415C11.6741 29.2534 10.384 28.5821 9.66848 27.5443C8.24723 25.4829 8.24723 22.7578 9.66848 20.6964C10.384 19.6585 11.6741 18.9872 13.0887 18.3992C14.5681 17.7841 16.5934 17.1091 19.1775 16.2477L19.2452 16.2251L36.3452 10.5251L36.4683 10.4841C38.1978 9.90749 39.6654 9.4182 40.8199 9.21281Z" fill="#897CFF"/>
          </svg>
          Поделиться
          </button>
          <button class="custom-modal-btn profile-btn bth-reset">
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="19.2206" cy="16.8241" r="8.86415" stroke="#897CFF" stroke-width="3" stroke-linecap="round"/>
          <path d="M43.6006 19.04L43.6006 32.3363" stroke="#897CFF" stroke-width="3" stroke-linecap="round"/>
          <path d="M50.2471 25.6885L36.9508 25.6885" stroke="#897CFF" stroke-width="3" stroke-linecap="round"/>
          <path d="M35.5205 46.1844C35.5205 37.7136 28.2233 30.8467 19.2217 30.8467C10.2201 30.8467 2.92285 37.7136 2.92285 46.1844" stroke="#897CFF" stroke-width="3" stroke-linecap="round"/>
          </svg>
          Добавить в профиль
          </button>
          <button class="custom-modal-btn print-btn bth-reset">
          <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40.0368 30.396H41.1448C43.2341 30.396 44.2788 30.396 44.9279 29.747C45.5769 29.0979 45.5769 28.0533 45.5769 25.964V23.7479C45.5769 19.5693 45.5769 17.48 44.2788 16.1819C42.9807 14.8838 40.8914 14.8838 36.7128 14.8838H16.7684C12.5898 14.8838 10.5005 14.8838 9.20242 16.1819C7.9043 17.48 7.9043 19.5693 7.9043 23.7479V28.18C7.9043 29.2247 7.9043 29.747 8.22883 30.0715C8.55336 30.396 9.07568 30.396 10.1203 30.396H13.4444" stroke="#897CFF" stroke-width="2.49304"/>
          <path d="M14.5527 44.3709L14.5527 25.9639C14.5527 23.8746 14.5527 22.8299 15.2018 22.1809C15.8509 21.5318 16.8955 21.5318 18.9848 21.5318L34.4971 21.5318C36.5864 21.5318 37.631 21.5318 38.2801 22.1809C38.9291 22.8299 38.9291 23.8746 38.9291 25.9639L38.9291 44.3709C38.9291 45.0724 38.9291 45.4232 38.6991 45.589C38.469 45.7548 38.1362 45.6439 37.4707 45.4221L32.6661 43.8205C32.4756 43.757 32.3803 43.7253 32.2821 43.7282C32.1839 43.731 32.0906 43.7683 31.9042 43.8429L27.1524 45.7436C26.9492 45.8249 26.8476 45.8655 26.7409 45.8655C26.6342 45.8655 26.5326 45.8249 26.3294 45.7436L21.5777 43.8429C21.3912 43.7683 21.298 43.731 21.1998 43.7281C21.1016 43.7253 21.0063 43.757 20.8158 43.8205L16.0111 45.4221C15.3456 45.6439 15.0129 45.7548 14.7828 45.589C14.5527 45.4232 14.5527 45.0724 14.5527 44.3709Z" stroke="#897CFF" stroke-width="2.49304"/>
          <path d="M21.2012 30.3955L30.0653 30.3955" stroke="#897CFF" stroke-width="2.49304" stroke-linecap="round"/>
          <path d="M21.2012 37.0439L32.2814 37.0439" stroke="#897CFF" stroke-width="2.49304" stroke-linecap="round"/>
          <path d="M38.9291 14.8837V13.9973C38.9291 10.2365 38.9291 8.35615 37.7608 7.18784C36.5925 6.01953 34.7121 6.01953 30.9514 6.01953H22.5305C18.7697 6.01953 16.8894 6.01953 15.721 7.18784C14.5527 8.35615 14.5527 10.2365 14.5527 13.9973V14.8837" stroke="#897CFF" stroke-width="2.49304"/>
          </svg>
          Распечатать
          </button>
        </div>
        <button class="calculator__show-list-btn bth-reset">
              Закрыть
              <svg class="calculator__show-btn" width="45" height="45" viewBox="0 0 45 45" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <circle cx="22.399" cy="22.7616" r="21.8817" fill="white"></circle>
                <path d="M29.7828 26.8467V15.3781M29.7828 15.3781H18.3143M29.7828 15.3781L15.0165 30.1445"
                  stroke="#535353" stroke-width="2.66" stroke-linecap="round" stroke-linejoin="round"></path>
              </svg>
            </button>
      </div>
    </div>`
	document.body.insertAdjacentHTML('beforeend', modalHTML)
}

function replaceClasses(el, map) {
	if (el.classList?.length) {
		Array.from(el.classList).forEach(
			c => map[c] && el.classList.replace(c, map[c])
		)
	}
	el.childNodes.forEach(
		child => child.nodeType === 1 && replaceClasses(child, map)
	)
}

function updateModalContent(selectedBlocks) {
	const modal = document.querySelector('.custom-modal')
	if (!modal) return
	const listEl = modal.querySelector('.custom-modal-list')
	const totalSumEl = modal.querySelector('.custom-modal-total-sum')
	listEl.innerHTML = ''

	const classMap = {
		'calculator__card-price-block': 'custom-modal-block',
		'calculator__card-block-span': 'custom-modal-span',
		'calculator__card-block-text': 'custom-modal-text',
		'calculator__card-block-price': 'custom-modal-price',
	}

	selectedBlocks.forEach(block => {
		const clone = block.cloneNode(true)
		clone.classList.remove('active')
		replaceClasses(clone, classMap)

		const wrapper = document.createElement('div')
		wrapper.className = 'custom-modal-price-wrapper'
		wrapper.style.flex = '1'
		wrapper.appendChild(clone)

		const btn = document.createElement('button')
		btn.type = 'button'
		btn.title = 'Удалить'
		btn.textContent = '×'
		btn.className = 'custom-modal-remove-btn'
		Object.assign(btn.style, {
			background: '#f5f7ff',
			border: 'none',
			fontSize: '40px',
			cursor: 'pointer',
			width: '55px',
			borderRadius: '12px',
			color: '#535353',
			lineHeight: '1',
			marginLeft: '5px',
			flexShrink: '0',
		})
		btn.onclick = () => {
			block.classList.remove('active')
			const hdr = block
				.closest('.calculator__card-accardion-item')
				?.querySelector('.calculator__card-accardion-title')
			hdr && updateSelectedCount(hdr)
			updateSummaryBlock()
			const newSel = getAllSelectedPriceBlocks()
			newSel.length ? updateModalContent(newSel) : closeModal()
		}

		const li = document.createElement('li')
		li.style.cssText = 'display:flex; margin-bottom:10px; position: relative'
		li.append(wrapper, btn)
		listEl.appendChild(li)
	})

	totalSumEl.textContent =
		calculateTotal(selectedBlocks).toLocaleString('ru-RU') + ' ₽'
}

function openModal() {
	createModal()
	const overlay = document.querySelector('.custom-modal-overlay')
	overlay.style.display = 'flex'

	overlay.querySelector('.custom-modal-close').onclick = closeModal
	overlay.onclick = e => {
		if (e.target === overlay) closeModal()
	}

	overlay.querySelector('.calculator__show-list-btn').onclick = closeModal
	overlay.onclick = e => {
		if (e.target === overlay) closeModal()
	}

	overlay.querySelector('.share-btn').onclick = () =>
		alert('Функция "Поделиться" пока не реализована')
	overlay.querySelector('.profile-btn').onclick = () =>
		alert('Функция "Добавить в профиль" пока не реализована')
	overlay.querySelector('.print-btn').onclick = () => window.print()

	updateModalContent(getAllSelectedPriceBlocks())
}

function closeModal() {
	const overlay = document.querySelector('.custom-modal-overlay')
	if (overlay) overlay.style.display = 'none'
}

headers.forEach(header => {
	let scrollBeforeOpen = 0
	header.onclick = () => {
		const content = header.nextElementSibling
		const svg = header.querySelector('.accordion__svg')

		if (content.style.maxHeight) {
			content.style.maxHeight = null
			content.classList.remove('open')
			header.classList.remove('transparent')
			svg?.classList.remove('rotated')
			window.scrollTo({ top: scrollBeforeOpen, behavior: 'smooth' })
		} else {
			// Закрываем все остальные
			headers.forEach(otherHeader => {
				if (otherHeader !== header) {
					const otherContent = otherHeader.nextElementSibling
					const otherSvg = otherHeader.querySelector('.accordion__svg')
					if (otherContent.style.maxHeight) {
						otherContent.style.maxHeight = null
						otherContent.classList.remove('open')
						otherHeader.classList.remove('transparent')
						otherSvg?.classList.remove('rotated')
					}
				}
			})

			// Получаем позицию заголовка относительно страницы
			const offsetTop = header.getBoundingClientRect().top + window.pageYOffset

			content.style.maxHeight = content.scrollHeight + 'px'
			content.classList.add('open')
			header.classList.add('transparent')
			svg?.classList.add('rotated')

			// Скроллим к заголовку с небольшим отступом сверху
			const scrollOffset = 20 // можно подкорректировать по желанию
			window.scrollTo({ top: offsetTop - scrollOffset, behavior: 'smooth' })
		}
	}
})

function updateSelectedCount(header) {
	const content = header.nextElementSibling
	if (!content) return
	const count = content.querySelectorAll(
		'.calculator__card-price-block.active'
	).length
	let span = header.querySelector('.selected-count')
	if (!span) {
		span = document.createElement('span')
		span.className = 'selected-count'
		header.appendChild(span)
	}
	span.textContent = count > 0 ? `${count} шт.` : ''
}

function getAllSelectedPriceBlocks() {
	return Array.from(
		document.querySelectorAll('.calculator__card-price-block.active')
	)
}

function calculateTotal(selectedBlocks) {
	return selectedBlocks.reduce((sum, block) => {
		const priceEl = block.querySelector('.calculator__card-block-price')
		if (!priceEl) return sum
		const price = parseInt(priceEl.textContent.replace(/[^\d]/g, ''), 10) || 0
		return sum + price
	}, 0)
}

function updateSummaryBlock() {
	const selectedBlocks = getAllSelectedPriceBlocks()
	const count = selectedBlocks.length
	const total = calculateTotal(selectedBlocks)

	if (count) {
		summaryCount.textContent = count + ' шт.'
		summaryTotal.textContent = total.toLocaleString('ru-RU') + ' ₽'
		summaryBlock.style.display = 'block'
		if (contactsBlock) contactsBlock.style.display = 'none'
	} else {
		summaryBlock.style.display = 'none'
		if (contactsBlock) contactsBlock.style.display = 'block'
	}
}

document.querySelectorAll('.calculator__card-price-block').forEach(block => {
	block.onclick = () => {
		block.classList.toggle('active')
		const hdr = block
			.closest('.calculator__card-accardion-item')
			?.querySelector('.calculator__card-accardion-title')
		hdr && updateSelectedCount(hdr)
		updateSummaryBlock()
	}
})

headers.forEach(updateSelectedCount)
updateSummaryBlock()

showListBtn.onclick = () => {
	const selected = getAllSelectedPriceBlocks()
	if (!selected.length) return alert('Ничего не выбрано')
	openModal()
}
