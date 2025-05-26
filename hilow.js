// hilow.js (обновлённая версия + вдохновляющее сообщение + обработка формы обратной связи)

const form = document.getElementById("regForm");
if (form) {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const service = document.getElementById("service");
  const message = document.getElementById("message");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    message.style.color = "red";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name.value.trim()) {
      message.textContent = "Введите имя.";
      return;
    }

    if (!emailPattern.test(email.value)) {
      message.textContent = "Введите корректный email.";
      return;
    }

    if (password.value.length < 6) {
      message.textContent = "Пароль должен быть не менее 6 символов.";
      return;
    }

    if (password.value !== confirmPassword.value) {
      message.textContent = "Пароли не совпадают.";
      return;
    }

    if (!service.value) {
      message.textContent = "Выберите тип услуги.";
      return;
    }

    message.style.color = "#00ff99";
    message.textContent = "Регистрация прошла успешно! Добро пожаловать в сообщество тех, кто создаёт будущее! 🚀";
    form.reset();
  });
}

// Обработка формы обратной связи на главной
const feedbackForm = document.getElementById("feedbackForm");
const feedbackMessage = document.getElementById("feedbackMessage");

if (feedbackForm) {
  feedbackForm.addEventListener("submit", function (e) {
    e.preventDefault();
    feedbackMessage.textContent = "Спасибо за сообщение! Мы обязательно свяжемся с вами.";
    feedbackMessage.style.color = "#00ff99";
    feedbackForm.reset();
  });
}
