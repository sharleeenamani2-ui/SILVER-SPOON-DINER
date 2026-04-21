
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
        navLinks.classList.toggle("active");
    }
});
