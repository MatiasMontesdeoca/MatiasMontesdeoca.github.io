export function initializeTheme() {

    // Get DOM elements
    const themeToggle = document.getElementById("theme-toggle");

        if (!themeToggle) {

            console.error("Theme toggle button not found.");

            return;

        }

    // Load saved theme
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-theme");

        themeToggle.textContent = "☀️";

    }

    // Toggle theme
    function toggleTheme() {
        document.body.classList.toggle("dark-theme");
    }

    const isDark = document.body.classList.contains("dark-theme");

    themeToggle.textContent = isDark ? "☀️" : "🌙";

    // Save theme preference
    localStorage.setItem(

        "theme",

        isDark ? "dark" : "light"

    );  

    themeToggle.addEventListener(

        "click",

        toggleTheme

    );
}