const themeToggle = document.getElementById("themeToggle");
const themeLabel = document.querySelector(".theme-label");

function updateThemeLabel() {
  const isDark = document.body.classList.contains("dark");

  if (isDark) {
    themeLabel.innerHTML = `Dark Mode <span class="status-dot"></span>`;
    themeToggle.textContent = "☀️";
  } else {
    themeLabel.innerHTML = `Light Mode <span class="status-dot"></span>`;
    themeToggle.textContent = "🌙";
  }
}

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  updateThemeLabel();
});

updateThemeLabel();
