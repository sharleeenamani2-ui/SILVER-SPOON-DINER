const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const navbar = document.querySelector(".navbar");

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        navbar.style.background = "rgba(10, 10, 10, 0.95)";
        navbar.style.height = "70px";
    } else {
        navbar.style.background = "transparent";
        navbar.style.height = "90px";
    }
});

// Mobile Toggle
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    menuToggle.innerHTML = navLinks.classList.contains("active") ? "✕" : "☰";
});

document.getElementById('footer-subscribe').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    
    // Simple UI feedback
    this.innerHTML = `<p style="color: #c5a059; font-size: 0.8rem; letter-spacing: 1px;">THANK YOU FOR SUBSCRIBING.</p>`;
    
    console.log("Newsletter subscription for:", email);
});








