document.addEventListener("DOMContentLoaded", () => {
    // --- NAVIGATION MANAGEMENT ---
    const navbar = document.getElementById("navbar");
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");

    // Handle scroll opacity changes safely
    window.addEventListener("scroll", () => {
        if (window.scrollY > 60) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Handle Mobile Hamburger Menu Drawer Actions
    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isExpanded);
        navMenu.classList.toggle("active");
    });

    // Close mobile nav overlay when clicking outside the core menu drawer area
    document.addEventListener("click", (event) => {
        const isClickInsideNav = navbar.contains(event.target);
        if (!isClickInsideNav && navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });

    // --- INTERSECTION OBSERVER SLIDE-UP ANIMATIONS ---
    const animationOptions = {
        root: null, // Default viewport tracking boundaries
        rootMargin: "0px",
        threshold: 0.15, // Animate once 15% of target object visibility matches
    };

    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Introduce visual transitions smoothly
                entry.target.classList.add("visible");
                // Opt out of redundant scroll evaluations for processed nodes
                observer.unobserve(entry.target);
            }
        });
    }, animationOptions);

    // Bind structural visual containers to the intersection listener system
    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((element) => {
        scrollObserver.observe(element);
    });
});

// Close mobile nav drawer when clicking any link item inside it
const navLinks = document.querySelectorAll(".nav-link-item, .nav-buttons .btn");
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        if (navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
});
