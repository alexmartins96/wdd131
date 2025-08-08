const hamburgerBtn = document.getElementById("hamburgerBtn");
const primaryNav = document.getElementById("primaryNav");

hamburgerBtn.addEventListener("click", () => {
    primaryNav.classList.toggle("open");
    hamburgerBtn.textContent = primaryNav.classList.contains("open") ? "✖" : "☰";
});

