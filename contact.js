document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector(".navbar");
    const reveals = document.querySelectorAll(".reveal");

    /**
     * Handles Navbar visibility and background change on scroll
     */
    function handleNavbar() {
        if (window.scrollY > 60) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    }

    /**
     * Handles the fade-in effect for sections
     */
    function handleReveal() {
        for (let i = 0; i < reveals.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = reveals[i].getBoundingClientRect().top;
            let elementVisible = 100;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }

    // Initialize listeners
    window.addEventListener("scroll", function() {
        handleNavbar();
        handleReveal();
    });

    // Run once on startup
    handleNavbar();
    handleReveal();
});