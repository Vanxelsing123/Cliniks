const headers = document.querySelectorAll('.calculator__card-accardion-title');
const summaryBlock = document.querySelector('.calculator__card-summary');
const summaryCount = summaryBlock.querySelector('.calculator__summary-count');
const summaryTotal = summaryBlock.querySelector('.calculator__summary-total');
const showListBtn = summaryBlock.querySelector('.calculator__show-list-btn');
const contactsBlock = document.querySelector('.calculator__card-contacts');

function createModal() {
  if (document.querySelector('.custom-modal')) return;
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
          <button class="custom-modal-btn share-btn bth-reset">Поделиться</button>
          <button class="custom-modal-btn profile-btn bth-reset">Добавить в профиль</button>
          <button class="custom-modal-btn print-btn bth-reset">Распечатать</button>
        </div>
      </div>
    </div>`;
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function replaceClasses(el, map) {
  if (el.classList?.length) {
    Array.from(el.classList).forEach(c => map[c] && el.classList.replace(c, map[c]));
  }
  el.childNodes.forEach(child => child.nodeType === 1 && replaceClasses(child, map));
}

function updateModalContent(selectedBlocks) {
  const modal = document.querySelector('.custom-modal');
  if (!modal) return;
  const listEl = modal.querySelector('.custom-modal-list');
  const totalSumEl = modal.querySelector('.custom-modal-total-sum');
  listEl.innerHTML = '';

  const classMap = {
    'calculator__card-price-block': 'custom-modal-block',
    'calculator__card-block-span': 'custom-modal-span',
    'calculator__card-block-text': 'custom-modal-text',
    'calculator__card-block-price': 'custom-modal-price',
  };

  selectedBlocks.forEach(block => {
    const clone = block.cloneNode(true);
    clone.classList.remove('active');
    replaceClasses(clone, classMap);

    const wrapper = document.createElement('div');
    wrapper.className = 'custom-modal-price-wrapper';
    wrapper.style.flex = '1';
    wrapper.appendChild(clone);

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.title = 'Удалить';
    btn.textContent = '×';
    btn.className = 'custom-modal-remove-btn';
    Object.assign(btn.style, {
      background: '#f5f7ff', border: 'none', fontSize: '40px', cursor: 'pointer',
      width: '55px', borderRadius: '12px', color: '#535353', lineHeight: '1',
      marginLeft: '5px', flexShrink: '0'
    });
    btn.onclick = () => {
      block.classList.remove('active');
      const hdr = block.closest('.calculator__card-accardion-item')?.querySelector('.calculator__card-accardion-title');
      hdr && updateSelectedCount(hdr);
      updateSummaryBlock();
      const newSel = getAllSelectedPriceBlocks();
      newSel.length ? updateModalContent(newSel) : closeModal();
    };

    const li = document.createElement('li');
    li.style.cssText = 'display:flex; margin-bottom:10px';
    li.append(wrapper, btn);
    listEl.appendChild(li);
  });

  totalSumEl.textContent = calculateTotal(selectedBlocks).toLocaleString('ru-RU') + ' ₽';
}

function openModal() {
  createModal();
  const overlay = document.querySelector('.custom-modal-overlay');
  overlay.style.display = 'flex';

  overlay.querySelector('.custom-modal-close').onclick = closeModal;
  overlay.onclick = e => { if (e.target === overlay) closeModal(); };

  overlay.querySelector('.share-btn').onclick = () => alert('Функция "Поделиться" пока не реализована');
  overlay.querySelector('.profile-btn').onclick = () => alert('Функция "Добавить в профиль" пока не реализована');
  overlay.querySelector('.print-btn').onclick = () => window.print();

  updateModalContent(getAllSelectedPriceBlocks());
}

function closeModal() {
  const overlay = document.querySelector('.custom-modal-overlay');
  if (overlay) overlay.style.display = 'none';
}

headers.forEach(header => {
  let scrollBeforeOpen = 0;
  header.onclick = () => {
    const content = header.nextElementSibling;
    const svg = header.querySelector('.accordion__svg');
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      content.classList.remove('open');
      header.classList.remove('transparent');
      svg?.classList.remove('rotated');
      window.scrollTo({ top: scrollBeforeOpen, behavior: 'smooth' });
    } else {
      scrollBeforeOpen = window.pageYOffset || document.documentElement.scrollTop;
      content.style.maxHeight = content.scrollHeight + 'px';
      content.classList.add('open');
      header.classList.add('transparent');
      svg?.classList.add('rotated');
      const offsetTop = header.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: offsetTop - 20, behavior: 'smooth' });
    }
  };
});

function updateSelectedCount(header) {
  const content = header.nextElementSibling;
  if (!content) return;
  const count = content.querySelectorAll('.calculator__card-price-block.active').length;
  let span = header.querySelector('.selected-count');
  if (!span) {
    span = document.createElement('span');
    span.className = 'selected-count';
    header.appendChild(span);
  }
  span.textContent = count > 0 ? `${count} шт.` : '';
}

function getAllSelectedPriceBlocks() {
  return Array.from(document.querySelectorAll('.calculator__card-price-block.active'));
}

function calculateTotal(selectedBlocks) {
  return selectedBlocks.reduce((sum, block) => {
    const priceEl = block.querySelector('.calculator__card-block-price');
    if (!priceEl) return sum;
    const price = parseInt(priceEl.textContent.replace(/[^\d]/g, ''), 10) || 0;
    return sum + price;
  }, 0);
}

function updateSummaryBlock() {
  const selectedBlocks = getAllSelectedPriceBlocks();
  const count = selectedBlocks.length;
  const total = calculateTotal(selectedBlocks);

  if (count) {
    summaryCount.textContent = count + ' шт.';
    summaryTotal.textContent = total.toLocaleString('ru-RU') + ' ₽';
    summaryBlock.style.display = 'block';
    if (contactsBlock) contactsBlock.style.display = 'none';
  } else {
    summaryBlock.style.display = 'none';
    if (contactsBlock) contactsBlock.style.display = 'block';
  }
}

document.querySelectorAll('.calculator__card-price-block').forEach(block => {
  block.onclick = () => {
    block.classList.toggle('active');
    const hdr = block.closest('.calculator__card-accardion-item')?.querySelector('.calculator__card-accardion-title');
    hdr && updateSelectedCount(hdr);
    updateSummaryBlock();
  };
});

headers.forEach(updateSelectedCount);
updateSummaryBlock();

showListBtn.onclick = () => {
  const selected = getAllSelectedPriceBlocks();
  if (!selected.length) return alert('Ничего не выбрано');
  openModal();
};

