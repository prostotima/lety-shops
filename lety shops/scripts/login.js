document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const savedEmail = localStorage.getItem("userEmail") || "user@example.com"; // ✅ Берём сохранённый email (или стандартный)
    const savedPassword = localStorage.getItem("userPassword") || "password123"; // ✅ Берём сохранённый пароль (или стандартный)
    const errorMessage = document.getElementById("error-message");

    if (email === savedEmail && password === savedPassword) {
        window.location.href = "account.html"; // 🔥 Переход в аккаунт
    } else {
        errorMessage.classList.remove("hidden"); // ❌ Показываем ошибку
        setTimeout(() => errorMessage.classList.add("hidden"), 3000);
    }
});
