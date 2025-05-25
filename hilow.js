<!-- JS дополнение -->
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-theme");
});

// Прогресс-бар при прокрутке
const progressBar = document.getElementById("progressBar");
window.onscroll = function () {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  progressBar.style.width = scrolled + "%";
};

// Fade-in эффект
const fadeElems = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

fadeElems.forEach(el => observer.observe(el));
if (name.value.trim().length < 2) {
  message.textContent = "Введите имя длиной от 2 символов.";
  message.style.color = "red";
  return;
}
message.textContent = "Загрузка...";
setTimeout(() => {
  message.textContent = "Регистрация успешна!";
  message.style.color = "green";
}, 2000);
