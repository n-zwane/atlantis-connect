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

    // --- URL PARAMS: preselect tab and registration role ---
    try {
        const params = new URLSearchParams(window.location.search);
        const tabParam = params.get("tab");
        const roleParam = params.get("role");

        if (tabParam) {
            // normalize and apply tab selection (login | register)
            const normalized = String(tabParam).toLowerCase();
            if (normalized === "register" || normalized === "login") {
                // Clear current active states
                tabButtons.forEach((btn) => btn.classList.remove("active"));
                forms.forEach((form) => form.classList.remove("active"));

                const targetBtn = document.querySelector(
                    `.tab-btn[data-tab="${normalized}"]`
                );
                if (targetBtn) targetBtn.classList.add("active");

                const targetFormId = normalized === "login" ? "loginForm" : "registerForm";
                const targetForm = document.getElementById(targetFormId);
                if (targetForm) targetForm.classList.add("active");
            }
        }

        if (roleParam) {
            const role = String(roleParam).toLowerCase();
            const regRoleEl = document.getElementById("regRole");
            if (regRoleEl) {
                const option = Array.from(regRoleEl.options).find(
                    (o) => o.value.toLowerCase() === role
                );
                if (option) regRoleEl.value = option.value;
            }
        }
    } catch (err) {
        // silent fail — do not block portal functionality
        console.warn("portal: failed to apply URL params", err);
    }
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
