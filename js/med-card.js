document.addEventListener("DOMContentLoaded", () => {
  const medTitle = document.getElementById('medTitle');
  const contentArea = document.getElementById('contentArea');
  const buttons = document.querySelectorAll('.menu button');

  
  // Массив эпизодов — его можно менять динамически
  const medicalEpisodes = [
    {
      episode: "Зажимы в спине",
      consultation: "Консультация невролога",
      doctorPhoto: "/img/doc1.png",
      doctorName: "Трофимова Галина Николаевна",
      specialties: "Невролог, детский невролог, физиотерапевт",
      date: "10.09.24"
    },
    {
      episode: "Признаки ОРВИ",
      consultation: "Общий анализ крови",
      doctorPhoto: `/img/Check.svg`,
      doctorName: "Результаты готовы",
      specialties: "",
      date: "15.08.24"
    },
    {
      episode: "Зажимы в спине",
      consultation: "Консультация невролога",
      doctorPhoto: "/img/doc1.png",
      doctorName: "Трофимова Галина Николаевна",
      specialties: "Невролог, детский невролог, физиотерапевт",
      date: "10.09.24"
    },
    {
      episode: "Признаки ОРВИ",
      consultation: "Общий анализ крови",
      doctorPhoto: `/img/Check.svg`,
      doctorName: "Результаты готовы",
      specialties: "",
      date: "15.08.24"
    },
    // ... другие эпизоды
  ];

  // Функция, создающая HTML для списка карточек
  function renderEpisodesWithNumbers(list) {
    return list.map((item) => `
      <div class="episode">
        <div class="episode-header">
          <div>
            <h3>Эпизод: ${item.episode}</h3>
            <p>${item.consultation}</p>
          </div>
          <div class="episode-date">${item.date}</div>
        </div>

        <div class="episode-body">
          <div class="doctor-photo">
            <img src="${item.doctorPhoto}" alt="${item.doctorName}" />
          </div>
          <div class="doctor-info">
            <p class="doctor-name">${item.doctorName}</p>
            <p class="doctor-specialties">${item.specialties}</p>
          </div>
          <div class="episode-actions">
            <button>Скачать файлы</button>
            <button>Распечатать заключение</button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Контент для каждой вкладки
  const contentData = {
    card: {
      title: "Медицинская карта",
      body: renderEpisodesWithNumbers(medicalEpisodes)  // подставляем динамически
    },
    appointments: {
      title: "Предстоящие визиты",
      body: `<p>Предстоящие визиты пользователя</p>`
    },
    profile: {
      title: "Профиль",
      body: `<p>Профиль пользователя</p>`
    }
  };

  // Обработчики кнопок
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const tab = button.getAttribute('data-tab');

      // Если вкладка "card", подставляем свежий список эпизодов
      if (tab === 'card') {
        contentArea.innerHTML = renderEpisodesWithNumbers(medicalEpisodes);
      } else {
        contentArea.innerHTML = contentData[tab].body;
      }
      medTitle.textContent = contentData[tab].title;
    });
  });

  // Показать контент при загрузке (по умолчанию "card")
  const defaultTab = 'card';
  document.querySelector(`.menu button[data-tab="${defaultTab}"]`).classList.add('active');
  medTitle.textContent = contentData[defaultTab].title;
  contentArea.innerHTML = renderEpisodesWithNumbers(medicalEpisodes);

  // Аватар — первая буква имени
  const userName = document.querySelector('.username').textContent.trim();
  document.getElementById('userAvatar').textContent = userName[0].toUpperCase();
});
