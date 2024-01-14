const list = document.querySelector(".mobile-menu-container");
const closeButton = document.querySelector(".close-menu-btn");
const openButton = document.querySelector(".open-menu-btn");
openButton.addEventListener("click", () => list.classList.toggle("is-open"));
closeButton.addEventListener("click", () => list.classList.toggle("is-open"));