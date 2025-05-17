function searchShops() {
    let inputElement = document.getElementById("search");
    if (!inputElement) {
        console.error("Элемент #search не найден!");
        return;
    }

    let input = inputElement.value.toLowerCase();
    let shopCards = document.querySelectorAll(".shop-card");

    shopCards.forEach(card => {
        let shopName = card.getAttribute("data-name").toLowerCase();
        if (shopName.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
