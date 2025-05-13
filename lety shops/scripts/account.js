function showSection(sectionId) {
    document.querySelectorAll(".account-section").forEach(section => {
        section.classList.add("hidden");
    });

    document.getElementById(sectionId).classList.remove("hidden");
}

function logout() {
    localStorage.removeItem("userEmail");
    window.location.href = "login.html";
}

function copyLink() {
    const linkField = document.getElementById("share-link");

    navigator.clipboard.writeText(linkField.value).then(() => {
        document.getElementById("copy-message").classList.remove("hidden");
        setTimeout(() => document.getElementById("copy-message").classList.add("hidden"), 3000);
    }).catch(err => {
        console.error("Помилка копіювання: ", err);
    });
}

document.getElementById("support-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("support-confirmation").classList.remove("hidden");
    setTimeout(() => document.getElementById("support-confirmation").classList.add("hidden"), 3000);
});
document.getElementById("settings-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const newEmail = document.getElementById("new-email").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmationMessage = document.getElementById("settings-confirmation");

    if (newEmail && newPassword) {
        localStorage.setItem("userEmail", newEmail); // ✅ Сохраняем новый email
        localStorage.setItem("userPassword", newPassword); // ✅ Сохраняем новый пароль

        confirmationMessage.classList.remove("hidden"); // ✅ Показываем сообщение об успешном изменении

        setTimeout(() => confirmationMessage.classList.add("hidden"), 3000);
    }
});
