// Бургер
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("burger").addEventListener("click", function () {
    const header = document.querySelector("header");
    header.classList.toggle("open");

    
    document.body.classList.toggle("no-scroll");
  });
});




