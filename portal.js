document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const forms = document.querySelectorAll(".portal-form");
    const loginForm = document.getElementById("loginForm");
    const registerForm = document.getElementById("registerForm");

    // --- TAB INTERACTION CONTROLLER ---
    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove active status from active buttons/forms
            tabButtons.forEach((btn) => btn.classList.remove("active"));
            forms.forEach((form) => form.classList.remove("active"));

            // Toggle active assignments
            button.classList.add("active");
            const targetFormId =
                button.getAttribute("data-tab") === "login"
                    ? "loginForm"
                    : "registerForm";
            document.getElementById(targetFormId).classList.add("active");
        });
    });

    // --- MOCK SIMULATED SUBMISSION PIPELINES ---

    // 1. Mock Login Action (Defaults to a Job Seeker Hub style experience)
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        // MVP Simulation Target Destination
        window.location.href = "dashboard-seeker.html";
    });

    // 2. Mock Registration Action (Routes based on dropdown selection choice)
    registerForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const structuralIdentitySelection =
            document.getElementById("regRole").value;

        // Dynamic structural environment target allocation
        const targetDashboardMap = {
            seeker: "dashboard-seeker.html",
            smme: "dashboard-smme.html",
            employer: "dashboard-employer.html",
            institution: "dashboard-institution.html",
        };

        window.location.href =
            targetDashboardMap[structuralIdentitySelection] ||
            "dashboard-seeker.html";
    });

    // --- DIRECT ROUTING BLOCK GRID CONTROLLER ---
    const mvpBypassButtons = document.querySelectorAll(".mvp-btn");
    mvpBypassButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const explicitDestinationTarget =
                button.getAttribute("data-target");
            window.location.href = explicitDestinationTarget;
        });
    });
});

// --- MOBILE NAVIGATION DRAWER CONTROLLER ---
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const portalNavbar = document.getElementById("portalNavbar");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", !isExpanded);
        navMenu.classList.toggle("active");
    });

    // Close the navigation drawer if a click occurs outside the area
    document.addEventListener("click", (event) => {
        const isClickInsideNav = portalNavbar.contains(event.target);
        if (!isClickInsideNav && navMenu.classList.contains("active")) {
            navMenu.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        }
    });
}
