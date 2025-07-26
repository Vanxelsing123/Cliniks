// Получаем элементы модалок и кнопок
const bookingModal = document.getElementById("bookingModal");
const successModal = document.getElementById("successModal");
const submitBtn = document.getElementById("submitBtn");
const phoneInput = document.getElementById('phone');

// Элементы закрытия и оверлеи
const bookingCloseBtn = bookingModal.querySelector(".modal__close");
const successCloseBtn = successModal.querySelector(".modal__close");
const bookingOverlay = bookingModal.querySelector(".modal__overlay");
const successOverlay = successModal.querySelector(".modal__overlay");
const modalOkBtn = document.getElementById("modalOkBtn");

// Модалка записи — данные врача
const modal = bookingModal;
const modalImg = modal.querySelector(".modal__doctor-img");
const modalName = modal.querySelector(".modal__doctor-name");
const modalSpecialty = modal.querySelector(".modal__doctor-specialty");

// Добавляем обработчик открытия bookingModal при клике по расписанию
document.querySelectorAll(".schedule__items").forEach((item) => {
  item.addEventListener("click", () => {
    const block = item.closest(".schedule__block");
    const name = block.querySelector(".schedule__block-doctor-name")?.textContent || "";
    const img = block.querySelector("img")?.getAttribute("src") || "";
    const specEl = block.querySelector(".schedule__specialists-item");
    const specialty = specEl ? specEl.textContent : "Аллерголог-иммунолог";

    const day = item.querySelector(".card-day")?.textContent;
    const date = item.querySelector(".card-date")?.textContent;
    const time = item.querySelector(".card-time")?.textContent;

    modal.querySelector(".modal__date-text").textContent = `${day} ${date}`;
    modal.querySelector(".modal__time-text").textContent = `${time}`;

    modalImg.src = img;
    modalName.textContent = name;
    modalSpecialty.textContent = specialty;

    bookingModal.classList.add("active");
  });
});

// Закрытие bookingModal по крестику
bookingCloseBtn.addEventListener("click", () => {
  bookingModal.classList.remove("active");
});

successCloseBtn.addEventListener("click", () => {
  successModal.classList.remove("active");
});

// Закрытие bookingModal по клику на оверлей
bookingOverlay.addEventListener("click", () => {
  bookingModal.classList.remove("active");
});

// Закрытие successModal по кнопке "Понятно"
modalOkBtn.addEventListener("click", () => {
  successModal.classList.remove("active");
});

// Закрытие successModal по клику на оверлей
successOverlay.addEventListener("click", () => {
  successModal.classList.remove("active");
});

// Маска на телефон (предполагается, что IMask уже подключен)
IMask(phoneInput, {
  mask: '+{7} (000) 000-00-00'
});

// Валидация телефона и показ successModal при клике на кнопку "Записаться"
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const phoneValue = phoneInput.value.trim();
  const phonePattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;

  if (!phonePattern.test(phoneValue)) {
    phoneInput.classList.add("modal__phone--error");
    phoneInput.focus();
    return;
  }

  phoneInput.classList.remove("modal__phone--error");
  bookingModal.classList.remove("active");
  successModal.classList.add("active");
});
