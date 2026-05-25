document.addEventListener("DOMContentLoaded", () => {
    // Nav & Pages
    const navItems = document.querySelectorAll(".nav-item");
    const dashboardPages = document.querySelectorAll(".dashboard-page");

    // Profile Trigger
    const profileTrigger = document.getElementById("profileTrigger");

    // Time-based Greeting
    const updateTimeGreeting = () => {
        const greetingTextElement = document.getElementById("time-greeting");
        if (!greetingTextElement) return;

        const currentHour = new Date().getHours();
        let greetingPhrase = "Good Morning, Sipho";
        if (currentHour >= 12 && currentHour < 17) {
            greetingPhrase = "Good Afternoon, Sipho";
        } else if (currentHour >= 17) {
            greetingPhrase = "Good Evening, Sipho";
        }
        greetingTextElement.textContent = greetingPhrase;
    };
    updateTimeGreeting();

    // FIXED NAVIGATION ENGINE: Prevent overlapping / bottom stacking
    const showDashboardPage = (targetPageId) => {
        if (!targetPageId) return;

        // Hide ALL pages completely
        dashboardPages.forEach((page) => {
            page.classList.remove("active");
            page.style.display = "none"; // Hard reset the display state
        });

        // Show ONLY the targeted page
        const targetSectionNode = document.getElementById(targetPageId);
        if (targetSectionNode) {
            targetSectionNode.style.display = "block";
            // Give a tiny timeout so the display: block registers before the animation fires via active class
            setTimeout(() => {
                targetSectionNode.classList.add("active");
            }, 10);
            localStorage.setItem("activeDashboardPage", targetPageId);
        }

        // Adjust sidebar visual selection
        navItems.forEach((item) => {
            if (item.getAttribute("data-page") === targetPageId) {
                item.classList.add("active");
            } else {
                item.classList.remove("active");
            }
        });
    };

    // Navigation click bindings
    navItems.forEach((item) => {
        item.addEventListener("click", () => {
            const chosenPageKey = item.getAttribute("data-page");
            if (chosenPageKey) showDashboardPage(chosenPageKey);
        });
    });

    // Auto-restore last selected page or default to Home
    const savedPage =
        localStorage.getItem("activeDashboardPage") || "dashboard-home";
    showDashboardPage(savedPage);

    // Mock functionality for Buttons
    document.querySelectorAll(".trigger-apply").forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const jobTitle = e.target.getAttribute("data-title");
            alert(
                `Your Impact Passport credentials have been securely transmitted for: ${jobTitle}.`,
            );
            e.target.textContent = "Applied";
            e.target.style.backgroundColor = "#526668";
            e.target.disabled = true;
        });
    });

    document.querySelectorAll(".logout-trigger-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            if (confirm("Are you sure you want to sign out?")) {
                localStorage.removeItem("activeDashboardPage");
                window.location.reload();
            }
        });
    });
});
