function searchShop() {
    const input = document.getElementById("search-input").value.toLowerCase();
    const shops = document.querySelectorAll(".shop-card");
    const notFoundMessage = document.getElementById("not-found-message");
    let found = false;

    shops.forEach(shop => {
        const shopName = shop.getAttribute("data-name").toLowerCase();
        if (shopName.includes(input)) {
            const shopLink = shop.querySelector(".shop-button").href;
            window.location.href = shopLink; // 🔥 Переход на страницу магазина
            found = true;
        }
    });

    if (!found) {
        notFoundMessage.classList.remove("hidden");
        setTimeout(() => notFoundMessage.classList.add("hidden"), 3000);
    }
}
