/**
 * Atlantis Connect Employer Hub - Logic Controller
 */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Initialize Icons
    feather.replace();

    // 2. Routing Engine (Single Page App Simulation)
    const navButtons = document.querySelectorAll(
        ".nav-item[data-target], .mob-nav-item[data-target]",
    );
    const pages = document.querySelectorAll(".page-section");

    const switchPage = (targetId) => {
        // Hide all pages
        pages.forEach((page) => page.classList.remove("active"));
        // Deactivate all nav buttons
        navButtons.forEach((btn) => btn.classList.remove("active"));

        // Show target page
        const targetPage = document.getElementById(targetId);
        if (targetPage) targetPage.classList.add("active");

        // Activate corresponding nav buttons
        document
            .querySelectorAll(`[data-target="${targetId}"]`)
            .forEach((btn) => {
                btn.classList.add("active");
            });

        // Specific actions on page load
        if (targetId === "dashboard-impact") {
            initChart();
        }
    };

    navButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            const targetId = e.currentTarget.getAttribute("data-target");
            switchPage(targetId);
        });
    });

    // 3. Time-Based Greeting
    const updateGreeting = () => {
        const greetingEl = document.getElementById("timeGreeting");
        const hour = new Date().getHours();
        let greeting = "Good evening";

        if (hour < 12) greeting = "Good morning";
        else if (hour < 17) greeting = "Good afternoon";

        greetingEl.textContent = `${greeting}, Pieter`;
    };
    updateGreeting();

    // 4. Animate Number (Local Hire Rate)
    const animateValue = (obj, start, end, duration) => {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min(
                (timestamp - startTimestamp) / duration,
                1,
            );
            obj.innerHTML = Math.floor(progress * (end - start) + start) + "%";
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    };

    // Trigger animation slightly after load
    setTimeout(() => {
        const rateObj = document.getElementById("localHireRate");
        if (rateObj) animateValue(rateObj, 0, 78, 1500);
    }, 500);
});

// 5. Form Revealer (Post Opportunity Page)
window.openForm = (formId) => {
    const form = document.getElementById(formId);
    if (form) {
        form.classList.remove("hidden");
        form.scrollIntoView({ behavior: "smooth", block: "start" });
    }
};

// 6. KANBAN Drag and Drop Logic (HTML5 API)
window.drag = (ev) => {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.target.style.opacity = "0.5"; // Visual feedback
};

window.allowDrop = (ev) => {
    ev.preventDefault(); // Necessary to allow dropping
};

window.drop = (ev, columnId) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const card = document.getElementById(data);
    card.style.opacity = "1";

    // Find the dropzone inside the targeted column
    const dropzone = document.querySelector(`#${columnId} .kanban-dropzone`);
    if (dropzone) {
        dropzone.appendChild(card);
        updateColumnCounts();
    }
};

// Reset opacity if drag ends outside dropzone
document.addEventListener("dragend", (ev) => {
    if (ev.target.classList.contains("kanban-card")) {
        ev.target.style.opacity = "1";
    }
});

const updateColumnCounts = () => {
    document.querySelectorAll(".kanban-column").forEach((col) => {
        const count = col.querySelectorAll(".kanban-card").length;
        const badge = col.querySelector(".col-header .badge");
        if (badge) badge.textContent = count;
    });
};

// 7. Impact Dashboard Chart Initialization
let isChartInitialized = false;
window.initChart = () => {
    if (isChartInitialized) return;

    const ctx = document.getElementById("hiresChart");
    if (!ctx) return;

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
            datasets: [
                {
                    label: "Local Hires from Atlantis",
                    data: [4, 6, 3, 8, 12, 9],
                    backgroundColor: "#0f9f68", // var(--color-accent)
                    borderRadius: 4,
                },
                {
                    label: "Outside Atlantis",
                    data: [2, 1, 1, 3, 4, 2],
                    backgroundColor: "#e6efef", // var(--color-primary-light)
                    borderRadius: 4,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { beginAtZero: true, grid: { display: false } },
                x: { grid: { display: false } },
            },
            plugins: {
                legend: { position: "bottom" },
            },
        },
    });
    isChartInitialized = true;
};
// --- OPPORTUNITY TRACKING MANAGEMENT FUNCTIONS ---

// 1. Tab Swapper Engine
window.switchPostingsTab = (tabId, targetButton) => {
    // Hide all internal tab structures
    const container = targetButton.closest(".postings-management-container");
    container.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.add("hidden");
    });

    // Remove active attributes from tab controls selectors
    container.querySelectorAll(".tab-btn").forEach((btn) => {
        btn.classList.remove("active");
    });

    // Mount active configuration states
    document.getElementById(tabId).classList.remove("hidden");
    targetButton.classList.add("active");
};

// 2. Action Simulation Handler (Simulates Archive actions immediately)
window.changePostingStatus = (buttonElement, targetStatusLabel) => {
    const cardNode = buttonElement.closest(".posting-row-card");
    if (
        confirm(
            `Are you sure you want to transition this listing to ${targetStatusLabel}?`,
        )
    ) {
        cardNode.style.opacity = "0.4";
        cardNode.style.pointerEvents = "none";

        setTimeout(() => {
            alert(
                "Listing position closed successfully and indexed to archives database.",
            );
            cardNode.remove();
            // Optional layout callback function handles counters adjustments dynamically here
        }, 400);
    }
};
// --- TALENT POOL WORKSPACE LOGIC CONTROLLERS ---

// 1. Mobile Filter Slider Toggle Trigger Component
window.toggleSecondaryFilters = () => {
    const panel = document.getElementById("advancedFiltersPanel");
    if (panel) {
        panel.classList.toggle("hidden-mobile");
    }
};

// 2. Clear out filtering state values resets configuration
window.resetTalentFilters = (event) => {
    if (event) event.preventDefault();
    const panel = document.getElementById("advancedFiltersPanel");
    if (panel) {
        panel
            .querySelectorAll("select")
            .forEach((sel) => (sel.selectedIndex = 0));
        const chk = panel.querySelector('input[type="checkbox"]');
        if (chk) chk.checked = false;
        const sld = panel.querySelector('input[type="range"]');
        if (sld) {
            sld.value = 70;
            document.getElementById("strengthSliderVal").innerText = "70%";
        }
    }
    alert("Talent search filtering conditions flushed.");
};

// 3. Impact Passport Side Panel Drawer Actions Handlers
let runtimeActiveSelectedCandidate = "";

window.openPassportDrawer = (candidateName, strengthScore, isSipho) => {
    runtimeActiveSelectedCandidate = candidateName;

    // Set dynamic properties inside drawer
    document.getElementById("drawerCandidateName").innerText =
        `${candidateName}'s Impact Passport`;
    document.getElementById("drawerStrengthPill").innerText =
        `${strengthScore}%`;

    // Configure mock privacy mask behaviors based on candidate identity definitions
    const maskText = document.getElementById("maskedSurname");
    if (isSipho) {
        maskText.innerText = "Sipho Masondo (Masked)";
    } else {
        maskText.innerText = "Thandi Ndlovu (Masked)";
    }

    // Wire up footer button redirection pathing directly
    document
        .getElementById("drawerShortlistBtn")
        .setAttribute("onclick", `openShortlistWorkflow('${candidateName}')`);

    // Bring elements into view context smoothly
    document.getElementById("passportDrawerOverlay").classList.remove("hidden");
    document.getElementById("passportDrawer").classList.remove("hidden");

    if (window.feather) window.feather.replace();
};

window.closePassportDrawer = () => {
    document.getElementById("passportDrawerOverlay").classList.add("hidden");
    document.getElementById("passportDrawer").classList.add("hidden");
};

// 4. Shortlisting Workflow System Multi-Stage Process Modal Logics
window.openShortlistWorkflow = (candidateName) => {
    runtimeActiveSelectedCandidate = candidateName;
    document.getElementById("shortlistTargetName").innerText = candidateName;

    // Mount visibility tags flags adjustments
    document.getElementById("shortlistModalFrame").classList.remove("hidden");
    if (window.feather) window.feather.replace();
};

window.closeShortlistWorkflow = () => {
    document.getElementById("shortlistModalFrame").classList.add("hidden");
};

window.confirmAndExecuteShortlist = () => {
    const selectedListing = document.getElementById(
        "shortlistListingSelect",
    ).value;

    // Simulate API database commit updates dispatch actions immediately
    alert(
        `Success! ${runtimeActiveSelectedCandidate} has been added to the shortlist for: "${selectedListing}".\n\n` +
            `Ecosystem Gateway Broadcast Status:\n` +
            `• Live Web Application Push Notification: Dispatched Successfully\n` +
            `• Encrypted WhatsApp/SMS Node Broadcast API: Dispatched Successfully`,
    );

    // Close panels out cleanly sequentially
    closeShortlistWorkflow();
    closePassportDrawer();
};

// --- HIRING CENTRE REQUISITION MANAGEMENT & KANBAN LOGIC ENGINE ---

// 1. Sub-Category Category Filtering Swapper Engine
window.switchHiringCategoryTab = (categoryType, buttonNode) => {
    // Remove active styles from row siblings layout elements
    const tabsContainer = buttonNode.closest(".sub-tabs-wrapper");
    tabsContainer.querySelectorAll("button").forEach((btn) => {
        btn.className = "sub-tab";
    });
    buttonNode.className = "sub-tabactive";

    // Toggle target cards parameters instantly matching attribute indices
    const cards = document.querySelectorAll(
        "#listingsCardsContainer .listing-item-card",
    );
    cards.forEach((card) => {
        if (
            categoryType === "all" ||
            card.getAttribute("data-category") === categoryType
        ) {
            card.classList.remove("hidden");
        } else {
            card.classList.add("hidden");
        }
    });
};

// 2. Listing Concluding Archive Actions Mock Processor
window.archiveListingCard = (buttonElement, statusType) => {
    const card = buttonElement.closest(".listing-item-card");
    if (
        confirm(
            `Are you sure you want to flag this requirement as "${statusType}"? This will shift tracking logs over to the history database archive.`,
        )
    ) {
        card.style.opacity = "0.3";
        card.style.pointerEvents = "none";
        setTimeout(() => {
            card.remove();
            alert(
                `Listing closed cleanly. Database status indexed to Closed Logs.`,
            );
        }, 350);
    }
};

// 3. Navigation workspace switcher mechanics
window.openApplicationPipeline = (jobTitleString) => {
    document.getElementById("pipelineTargetJobTitle").innerText =
        `${jobTitleString} • Candidate Processing Pipeline`;
    document.getElementById("listingsMainView").classList.add("hidden");
    document
        .getElementById("applicationPipelineWorkspace")
        .classList.remove("hidden");
    if (window.feather) window.feather.replace();
};

window.closeApplicationPipeline = () => {
    document
        .getElementById("applicationPipelineWorkspace")
        .classList.add("hidden");
    document.getElementById("listingsMainView").classList.remove("hidden");
};

// 4. Kanban Core Native Drag & Drop Infrastructure Mimic Nodes
let localRuntimeDraggedCandidateName = "";

window.handleCardDragStart = (event, candidateName) => {
    localRuntimeDraggedCandidateName = candidateName;
    event.dataTransfer.setData("text/plain", candidateName);
};

window.allowCardDrop = (event) => {
    event.preventDefault();
};

window.handleCardDrop = (event, targetColumnName) => {
    event.preventDefault();
    processCandidatePipelineStageShift(
        localRuntimeDraggedCandidateName,
        targetColumnName,
    );
};

// Centralized processing execution tracking parameters
function processCandidatePipelineStageShift(candidateName, targetStage) {
    console.log(
        `Ecosystem Stage Update Log: Moving ${candidateName} to ${targetStage}`,
    );

    // Intercept target stage shifts for automated context triggers
    if (targetStage === "Decision Made") {
        triggerFeedbackWorkflow(candidateName);
    } else if (targetStage === "Interview Scheduled") {
        triggerInterviewScheduler(candidateName);
    } else {
        alert(
            `Pipeline Updated: ${candidateName} successfully transitioned to the "${targetStage}" processing column.`,
        );
    }
}

window.manualMoveStagePrompt = (candidateName) => {
    const stage = prompt(
        `Manually route ${candidateName} processing profile.\n\nEnter target state choice:\n[Applied, Under Review, Shortlisted, Interview Scheduled, Decision Made]`,
    );
    if (stage) {
        processCandidatePipelineStageShift(candidateName, stage);
    }
};

// 5. Centralized Bulk Selection Checkbox Engines
window.toggleAllPipelineCheckboxes = (masterControlNode) => {
    const checkboxElements = document.querySelectorAll(
        ".pipeline-item-selector",
    );
    checkboxElements.forEach(
        (box) => (box.checked = masterControlNode.checked),
    );
    updateSelectedCounter();
};

window.updateSelectedCounter = () => {
    const activeCheckedCount = document.querySelectorAll(
        ".pipeline-item-selector:checked",
    ).length;
    document.getElementById("selectedCountLbl").innerText =
        activeCheckedCount > 0
            ? `${activeCheckedCount} Candidates Chosen`
            : `Select All Stage Items`;
};

window.executeBulkAction = (actionKeyName) => {
    const selectedCount = document.querySelectorAll(
        ".pipeline-item-selector:checked",
    ).length;
    if (selectedCount === 0) {
        alert(
            "Please choose at least one candidate checkbox element inside your pipeline tracking columns first.",
        );
        return;
    }

    if (actionKeyName === "move") {
        const targetStage = document.getElementById("bulkStageTarget").value;
        if (!targetStage) {
            alert(
                "Please select a valid stage routing target from the drop-down menu layer.",
            );
            return;
        }
        alert(
            `Success! Successfully shifted ${selectedCount} profiles directly to the "${targetStage}" stage column layout logs.`,
        );
    } else if (actionKeyName === "message") {
        alert(
            `Broadcast System Initialized: Broadcast workspace panel prepared for bulk dispatching across ${selectedCount} records.`,
        );
    } else if (actionKeyName === "reject") {
        if (
            confirm(
                `Flag ${selectedCount} applicants as unsuccessful? Automated feedback rejection messages will be compiled based on regional taxonomy settings.`,
            )
        ) {
            alert(
                `Batch Processing Concluded: ${selectedCount} profiles moved to database failure archive metrics.`,
            );
        }
    }
};

// 6. Modal Windows Management Logic Triggers
let localActiveTargetCandidateName = "";

window.triggerInterviewScheduler = (candidateName) => {
    localActiveTargetCandidateName = candidateName;
    document.getElementById("interviewTargetCandidateName").innerText =
        candidateName;
    document
        .getElementById("interviewSchedulerModal")
        .classList.remove("hidden");
};

window.closeInterviewScheduler = () => {
    document.getElementById("interviewSchedulerModal").classList.add("hidden");
};

window.commitInterviewArrangement = () => {
    const dateVal = document.getElementById("interviewDate").value;
    const timeVal = document.getElementById("interviewTime").value;
    const locVal = document.getElementById("interviewLocation").value;

    if (!dateVal || !timeVal || !locVal) {
        alert(
            "Please satisfy all validation parameters marked with an asterisk (*).",
        );
        return;
    }

    alert(
        `Interview successfully arranged for ${localActiveTargetCandidateName}!\n\n` +
            `Ecosystem Messaging Broadcast Status:\n` +
            `• Live Web Platform Notification Node: Synchronized and Dispatched\n` +
            `• Encrypted Mobile Carrier SMS / WhatsApp Endpoint Node: Transmitted Successfully\n\n` +
            `The event has been pinned onto your Home Dashboard's Upcoming Tasks layout frame.`,
    );
    closeInterviewScheduler();
};

window.triggerFeedbackWorkflow = (candidateName) => {
    localActiveTargetCandidateName = candidateName;
    document.getElementById("feedbackTargetCandidateName").innerText =
        candidateName;
    document
        .getElementById("feedbackSubmissionModal")
        .classList.remove("hidden");
};

window.closeFeedbackWorkflow = () => {
    document.getElementById("feedbackSubmissionModal").classList.add("hidden");
};

window.commitFeedbackAttestation = () => {
    alert(
        `Attestation Verified & Logged Successfully!\n\n` +
            `Performance metrics and review structures have been cryptographically signed and appended onto ${localActiveTargetCandidateName}'s public Impact Passport.`,
    );
    closeFeedbackWorkflow();
};

// --- LOCAL SUPPLIER DIRECTORY LOGIC ---

// 1. Open Supplier Profile Drawer
window.openSupplierDrawer = (supplierName, strengthScore) => {
    // Populate dynamic drawer data
    const nameEl = document.getElementById("drawerSupplierName");
    const scoreEl = document.getElementById("drawerSupplierStrength");

    if (nameEl) nameEl.innerText = supplierName;
    if (scoreEl) scoreEl.innerText = `${strengthScore}%`;

    // Open Drawer
    document.getElementById("supplierDrawerOverlay").classList.remove("hidden");
    document.getElementById("supplierDrawer").classList.remove("hidden");

    // Re-render icons if feather is available
    if (window.feather) window.feather.replace();
};

// 2. Close Supplier Drawer
window.closeSupplierDrawer = () => {
    document.getElementById("supplierDrawerOverlay").classList.add("hidden");
    document.getElementById("supplierDrawer").classList.add("hidden");
};

// 3. Post Direct Procurement Request
// This function closes the drawer, navigates the user to the "Post Opportunity" tab,
// and triggers the procurement form automatically.
window.triggerDirectProcurement = (supplierName) => {
    // Alert the user of the flow
    alert(
        `Initiating a direct procurement contract flow for ${supplierName}. Redirecting to form...`,
    );

    // Close the drawer if it's open
    closeSupplierDrawer();

    // Navigate to the "Post Opportunity" page natively using the existing router
    const postNavButton = document.querySelector(
        '[data-target="dashboard-post"]',
    );
    if (postNavButton) {
        postNavButton.click();
    }

    // Automatically open the procurement form inside the Post Opportunity page
    setTimeout(() => {
        const procCard = document.querySelector(
            ".opp-card i.feather-tool",
        )?.parentElement;
        if (procCard) {
            window.openForm("form-procurement", procCard);
        }
    }, 150);
};

// --- FEEDBACK & REPUTATION ENGINE ---

// Switch between "Pending Actions" and "Received Feedback" tabs
window.switchFeedbackTab = (tabId, targetButton) => {
    // Isolate the container
    const container = targetButton.closest(".feedback-management-container");

    // Hide all tab content
    container.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.add("hidden");
    });

    // Remove active state from all buttons
    container.querySelectorAll(".tab-btn").forEach((btn) => {
        btn.classList.remove("active");
    });

    // Activate the clicked target
    document.getElementById(tabId).classList.remove("hidden");
    targetButton.classList.add("active");
};

// --- NOTIFICATIONS & ALERTS SYSTEM ENGINE ---

// 1. Mark all notifications as read visually and clear the top-bar badge
window.markAllNotificationsRead = () => {
    const unreadItems = document.querySelectorAll(".notif-item.unread");

    if (unreadItems.length === 0) {
        alert("All notifications are already marked as read.");
        return;
    }

    // Remove the unread class which removes the teal border and background
    unreadItems.forEach((item) => {
        item.classList.remove("unread");
    });

    // Find the badge count in the top right header and hide it natively
    const badgeElement = document.querySelector(
        ".notification-trigger .badge-count",
    );
    if (badgeElement) {
        badgeElement.style.display = "none";
    }

    alert("Success: All unread notifications have been cleared.");
};

// 2. Dispatch a Test Alert across the configured channels
window.sendTestAlert = () => {
    alert(
        "Communication Test Initialized!\n\n" +
            "You should receive a sample notification across your selected channels shortly:\n" +
            "1. Platform Web Feed\n" +
            "2. Email Gateway (pieter.v@ecovanguard.co.za)\n" +
            "3. WhatsApp Gateway (+27 82 555 0192)",
    );
};
