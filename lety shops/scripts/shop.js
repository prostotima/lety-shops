document.getElementById("search-input").addEventListener("input", function() {
    const input = this.value.toLowerCase().trim();
    const shops = document.querySelectorAll(".shop-card");
    let found = false;

    shops.forEach(shop => {
        const shopName = shop.querySelector("h3").textContent.toLowerCase();
        if (shopName.includes(input)) {
            shop.style.display = "block"; // 🔥 Показываем подходящий магазин
            found = true;
        } else {
            shop.style.display = "none"; // ❌ Скрываем магазины, которые не совпадают
        }
    });

    document.getElementById("not-found-message").classList.toggle("hidden", found);
});

function searchShop() {
    const input = document.getElementById("search-input").value.toLowerCase().trim();
    const shops = document.querySelectorAll(".shop-card");
    let found = false;

    shops.forEach(shop => {
        const shopName = shop.querySelector("h3").textContent.toLowerCase();
        if (shopName.includes(input)) {
            window.location.href = shop.querySelector("a").href; // 🔥 Переход на страницу магазина
            found = true;
        }
    });

    if (!found) {
        const notFoundMessage = document.getElementById("not-found-message");
        notFoundMessage.classList.remove("hidden");
        setTimeout(() => notFoundMessage.classList.add("hidden"), 3000);
    }
}
