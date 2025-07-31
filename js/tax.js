const modal = document.getElementById('modal');
const openBtn = document.getElementById('openModalBtn');
const closeBtn = document.getElementById('modal__close');
const copyCheckbox = document.getElementById('copyPayerData');
const submitBtn = document.getElementById('submitBtn');
const acceptTerms = document.getElementById('acceptTerms');

// Открыть модальное окно
openBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

// Закрыть модальное окно
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Закрыть при клике вне содержимого
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// Копирование данных налогоплательщика в данные пациента
copyCheckbox.addEventListener('change', () => {
  const payerName = document.getElementById('payerName').value;
  const payerBirth = document.getElementById('payerBirth').value;

  const patientName = document.getElementById('patientName');
  const patientBirth = document.getElementById('patientBirth');

  if (copyCheckbox.checked) {
    patientName.value = payerName;
    patientBirth.value = payerBirth;
    patientName.readOnly = true;
    patientBirth.readOnly = true;
  } else {
    patientName.readOnly = false;
    patientBirth.readOnly = false;
    patientName.value = '';
    patientBirth.value = '';
  }
});

// Включаем кнопку отправки только если пользователь принял условия
acceptTerms.addEventListener('change', () => {
  submitBtn.disabled = !acceptTerms.checked;
});

// Обработка отправки формы (пример)
document.getElementById('taxForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Заявка отправлена!');
  modal.style.display = 'none';
  e.target.reset();
  submitBtn.disabled = true;
});

// Кнопка "Добавить пациента" (пример)
document.getElementById('addPatientBtn').addEventListener('click', () => {
  alert('Функция добавления пациента пока не реализована.');
});