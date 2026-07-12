export function initializeMenu(){
    // Get elements
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");
    const menuIcon = document.querySelector(".menu-icon");
    if (!menuToggle || !navbar || !menuIcon) {

        console.error("Menu elements not found.");

        return;

    }

        const navLinks = navbar.querySelectorAll("a");

    // Open/close menu function
    function toggleMenu() {

        const isOpen = navbar.classList.toggle("active");

        menuIcon.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute("aria-expanded", isOpen);
    
    }

    menuToggle.addEventListener("click", toggleMenu);

    // Close when clicking a link
    function closeMenu() {

        navbar.classList.remove("active");

        menuIcon.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    }

    navLinks.forEach(link => {

    link.addEventListener("click", closeMenu);

    });

    // Close when changing the window size
    function handleResize() {

        if (window.innerWidth > 992) {

            closeMenu();

        }

    }

    window.addEventListener("resize", handleResize);

    // Close with Escape key
    function handleEscape(event) {

        if (event.key === "Escape") {

            closeMenu();

        }

    }

    document.addEventListener("keydown", handleEscape);
}