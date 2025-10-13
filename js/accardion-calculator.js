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
          <span class="custom__price">Итог:</span>
          <span class="custom-modal-total-sum">0 ₽</span>
        </div>
        <div class="custom-modal-buttons">
          <button class="custom-modal-btn share-btn bth-reset">
          <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.3791 19.2233L32.9061 10.7143C33.0078 10.6804 33.1046 10.7772 33.0707 10.879L24.5617 36.406C24.521 36.5281 24.3466 36.5233 24.3127 36.399L20.7051 23.1713C20.693 23.1268 20.6582 23.0921 20.6138 23.0799L7.38601 19.4724C7.26177 19.4385 7.25693 19.2641 7.3791 19.2233Z" stroke="#897CFF" stroke-width="2" stroke-linecap="round"/>
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
              <svg class="calculator__show-btn" width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="35" height="35" rx="17.5" fill="white"/>
<rect x="0.5" y="0.5" width="35" height="35" rx="17.5" stroke="#D8D5FD"/>
<path d="M24.0742 21.3608V11.9267M24.0742 11.9267H14.6401M24.0742 11.9267L11.9273 24.0736" stroke="#6A6A6A" stroke-width="2.00111" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

            </button>
      </div>
    </div>`
	document.body.insertAdjacentHTML('beforeend', modalHTML)
}

function replaceClasses(el, map) {
	if (el.classList?.length) {
		Array.from(el.classList).forEach(c => map[c] && el.classList.replace(c, map[c]))
	}
	el.childNodes.forEach(child => child.nodeType === 1 && replaceClasses(child, map))
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
		btn.innerHTML = `
  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="36" height="36" rx="18" fill="transparent"/>
<path d="M10.2929 11.7069C9.90237 11.3163 9.90237 10.6833 10.2929 10.2928C10.6834 9.90251 11.3165 9.90236 11.707 10.2928L17.9999 16.5858L24.2929 10.2928C24.6834 9.90251 25.3165 9.90235 25.707 10.2928C26.0974 10.6832 26.0972 11.3163 25.707 11.7069L19.414 17.9998L25.707 24.2928C26.0974 24.6832 26.0972 25.3163 25.707 25.7069C25.3164 26.0974 24.6834 26.0974 24.2929 25.7069L17.9999 19.4139L11.707 25.7069C11.3164 26.0974 10.6834 26.0974 10.2929 25.7069C9.90237 25.3163 9.90237 24.6833 10.2929 24.2928L16.5859 17.9998L10.2929 11.7069Z" fill="#6A6A6A"/>
</svg>

`
		Object.assign(btn.style, {
			border: 'none',
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
		li.classList.add('modal__li')
		li.append(wrapper, btn)
		listEl.appendChild(li)
	})

	totalSumEl.textContent = calculateTotal(selectedBlocks).toLocaleString('ru-RU') + ' ₽'
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
	header.onclick = () => {
		const content = header.nextElementSibling
		const svg = header.querySelector('.accordion__svg')
		const item = header.closest('.calculator__card-accardion-item')

		// Если уже открыт — закрываем
		if (content.style.maxHeight) {
			content.style.maxHeight = null
			content.classList.remove('open')
			header.classList.remove('transparent')
			svg?.classList.remove('rotated')
			return
		}

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

		// Открываем текущий
		content.style.maxHeight = content.scrollHeight + 'px'
		content.classList.add('open')
		header.classList.add('transparent')
		svg?.classList.add('rotated')

		// Ждём, пока max-height отработает (анимация)
		setTimeout(() => {
			const rect = content.getBoundingClientRect()
			const scrollOffset = 20

			// Проверка: если верх контента выше видимой зоны
			if (rect.top < scrollOffset || rect.bottom > window.innerHeight) {
				const targetY = window.pageYOffset + rect.top - scrollOffset
				window.scrollTo({ top: targetY, behavior: 'smooth' })
			}
		}, 300) // должно совпадать с transition-duration в CSS
	}
})

function updateSelectedCount(header) {
	const content = header.nextElementSibling
	if (!content) return
	const count = content.querySelectorAll('.calculator__card-price-block.active').length
	let span = header.querySelector('.selected-count')
	if (!span) {
		span = document.createElement('span')
		span.className = 'selected-count'
		header.appendChild(span)
	}
	span.textContent = count > 0 ? `${count} шт.` : ''
}

function getAllSelectedPriceBlocks() {
	return Array.from(document.querySelectorAll('.calculator__card-price-block.active'))
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
		if (contactsBlock) contactsBlock.style.display = 'flex'
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
