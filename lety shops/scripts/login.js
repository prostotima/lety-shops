document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const savedEmail = localStorage.getItem("userEmail") || "user@example.com";
    const savedPassword = localStorage.getItem("userPassword") || "password123";
    const errorMessage = document.getElementById("error-message");

    if (email === savedEmail && password === savedPassword) {
        window.location.href = "account.html"; // 🔥 Переход в аккаунт
    } else {
        errorMessage.classList.remove("hidden");
        errorMessage.style.opacity = "1"; // Плавное появление ошибки

        setTimeout(() => {
            errorMessage.style.opacity = "0"; // Плавное исчезновение
            errorMessage.classList.add("hidden");
            document.getElementById("password").value = ""; // Очистка поля пароля
        }, 3000);
    }
});
