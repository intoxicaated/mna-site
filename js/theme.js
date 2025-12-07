const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.querySelector(".theme-label");

function updateThemeLabel() {
    const isDark = document.body.classList.contains("dark-mode");

    if (isDark) {
        themeLabel.innerHTML = `Dark mode <span class="status-dot"></span>`;
        themeToggle.textContent = "☀️";
    } else {
        themeLabel.innerHTML = `Light mode <span class="status-dot"></span>`;
        themeToggle.textContent = "🌙";
    }
}

themeToggle.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateThemeLabel();
});

(function applySavedTheme() {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") document.body.classList.add("dark-mode");
    updateThemeLabel();
})();

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
});
