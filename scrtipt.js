const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navbar = document.querySelector(".navbar");

// 1. Updated Toggle (works for all screen sizes handled by CSS)
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    
    // Switch between ☰ and ✕ for a better user experience
    if (navLinks.classList.contains("active")) {
        menuToggle.innerHTML = "✕";
    } else {
        menuToggle.innerHTML = "☰";
    }
});

// 2. Scroll Effect: Makes navbar readable when scrolling down
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.background = "rgba(0, 0, 0, 0.95)";
        navbar.style.padding = "10px 40px";
    } else {
        navbar.style.background = "transparent";
        navbar.style.padding = "20px 40px";
    }
});

// 3. Auto-Close menu when clicking a link (optional but recommended)
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.innerHTML = "☰";
    });
});