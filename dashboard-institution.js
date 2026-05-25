/**
 * Atlantis Connect — Institution Portal JS
 * Vanilla JS, no frameworks. Full SPA navigation, data rendering, interactions.
 */

// ═══════════════════════════════ DATA ═══════════════════════════════

const PROGS = [
    {
        id: "p1",
        name: "Solar PV Installer Training",
        type: "Vocational Training",
        cred: "National Cert: Solar PV Systems",
        duration: "01 Jul – 15 Dec 2026",
        format: "In-Person",
        filled: 28,
        capacity: 30,
        status: "Published",
        skills: ["Solar Wiring", "PV Alignment", "Safety Standards"],
        roles: ["Solar Technician", "Grid Assistant"],
        risk: 0,
        nextSession: "27 May 2026",
    },
    {
        id: "p2",
        name: "Electrical Infrastructure Systems",
        type: "Learnership",
        cred: "FET Certificate: Electrical Systems",
        duration: "15 Jan – 15 Dec 2026",
        format: "Hybrid",
        filled: 45,
        capacity: 50,
        status: "Published",
        skills: ["Three-Phase Wiring", "Safety Isolation", "Load Management"],
        roles: ["Apprentice Electrician", "Maintenance Tech"],
        risk: 3,
        nextSession: "26 May 2026",
    },
    {
        id: "p3",
        name: "Advanced CNC Automation",
        type: "Short Course",
        cred: "Certificate of Competence: CNC Mill Op",
        duration: "01 Aug – 30 Oct 2026",
        format: "In-Person",
        filled: 12,
        capacity: 15,
        status: "Published",
        skills: ["CNC G-Code", "Precision Milling", "Quality Control"],
        roles: ["Machinist Operator", "Production Tech"],
        risk: 0,
        nextSession: "30 May 2026",
    },
];

const PARTICIPANTS = [
    {
        id: "r1",
        name: "Thabo M.",
        prog: "Solar PV Installer Training",
        enrolled: "2026-01-15",
        progress: 85,
        attendance: 92,
        passport: "Strong",
        status: "on-track",
    },
    {
        id: "r2",
        name: "Chantel W.",
        prog: "Electrical Infrastructure Systems",
        enrolled: "2026-01-20",
        progress: 60,
        attendance: 74,
        passport: "Moderate",
        status: "at-risk",
        reason: "Missed 3 consecutive lab sessions due to transport constraints.",
    },
    {
        id: "r3",
        name: "Zolani N.",
        prog: "Advanced CNC Automation",
        enrolled: "2026-02-01",
        progress: 100,
        attendance: 96,
        passport: "Verified Expert",
        status: "completed",
    },
    {
        id: "r4",
        name: "Precious D.",
        prog: "Solar PV Installer Training",
        enrolled: "2026-01-15",
        progress: 90,
        attendance: 94,
        passport: "Strong",
        status: "on-track",
    },
    {
        id: "r5",
        name: "Gerrit K.",
        prog: "Electrical Infrastructure Systems",
        enrolled: "2026-01-20",
        progress: 45,
        attendance: 55,
        passport: "Unactivated",
        status: "at-risk",
        reason: "No platform activity in over 14 consecutive days.",
    },
    {
        id: "r6",
        name: "Nomvula D.",
        prog: "Solar PV Installer Training",
        enrolled: "2026-01-15",
        progress: 100,
        attendance: 98,
        passport: "Verified Expert",
        status: "placed",
        employer: "GreenTech Infrastructure Corp",
        role: "Junior Solar Technician",
    },
];

const GRADS = [
    {
        id: "g1",
        name: "Nomvula D.",
        prog: "Solar PV Installation",
        outcome: "Placed",
        employer: "GreenTech Infrastructure Corp",
        role: "Junior Solar Technician",
        verification: "Employer Verified",
        feedback:
            "Excellent technical grounding. Credentials aligned perfectly with our operations.",
        verified: true,
    },
    {
        id: "g2",
        name: "Lethabo M.",
        prog: "Wind Energy Asset Specialist",
        outcome: "Placed",
        employer: "Enel Green Systems",
        role: "Blade Repair Associate",
        verification: "Self-Reported",
        feedback: "Contract hire declared independently via WhatsApp.",
        verified: false,
    },
    {
        id: "g3",
        name: "Charlton V.",
        prog: "Advanced Eco-Manufacturing",
        outcome: "Actively Applying",
        employer: "—",
        role: "—",
        verification: "3 applications active",
        feedback: "",
        verified: false,
    },
    {
        id: "g4",
        name: "Pieter S.",
        prog: "Solar PV Installation",
        outcome: "Unknown",
        employer: "—",
        role: "—",
        verification: "No contact",
        feedback: "",
        verified: false,
    },
    {
        id: "g5",
        name: "Sipho M.",
        prog: "Solar PV Systems",
        outcome: "Placed",
        employer: "GigaEnergy Manufacturing",
        role: "Junior Technician",
        verification: "Employer Verified",
        feedback:
            "Performed above expectations in first 90 days. Strong safety protocol awareness.",
        verified: true,
    },
];

const COHORTS = [
    {
        name: "Jan 2026 — Solar PV",
        participants: 30,
        completed: 28,
        placed: 22,
        rate: "78.6%",
        avgTime: "7.2 wks",
    },
    {
        name: "Jul 2025 — Electrical Systems",
        participants: 50,
        completed: 44,
        placed: 30,
        rate: "68.2%",
        avgTime: "10.4 wks",
    },
    {
        name: "Mar 2025 — CNC Automation",
        participants: 15,
        completed: 15,
        placed: 13,
        rate: "86.7%",
        avgTime: "5.8 wks",
    },
];

const SKILLS_DATA = [
    {
        name: "Solar Electrical Wiring",
        listings: 34,
        growth: "+18%",
        trend: "+18%",
        match: true,
        growthVal: 18,
    },
    {
        name: "CNC Automated Tooling",
        listings: 28,
        growth: "+12%",
        trend: "+12%",
        match: true,
        growthVal: 12,
    },
    {
        name: "Green Hydrogen Pipeline Welding",
        listings: 19,
        growth: "+45%",
        trend: "+45%",
        match: false,
        growthVal: 45,
    },
    {
        name: "Industrial SCADA Diagnostics",
        listings: 15,
        growth: "+8%",
        trend: "+8%",
        match: true,
        growthVal: 8,
    },
    {
        name: "Fibre-Optic Fusion Splicing",
        listings: 12,
        growth: "+22%",
        trend: "+22%",
        match: false,
        growthVal: 22,
    },
    {
        name: "PV Array Commissioning",
        listings: 11,
        growth: "+9%",
        trend: "+9%",
        match: true,
        growthVal: 9,
    },
    {
        name: "Wind Turbine Maintenance",
        listings: 9,
        growth: "+15%",
        trend: "+15%",
        match: false,
        growthVal: 15,
    },
    {
        name: "Electrical Safety (OSHA)",
        listings: 8,
        growth: "+5%",
        trend: "+5%",
        match: true,
        growthVal: 5,
    },
    {
        name: "3D Printing & Additive Mfg",
        listings: 7,
        growth: "+30%",
        trend: "+30%",
        match: false,
        growthVal: 30,
    },
    {
        name: "Battery Storage Systems",
        listings: 6,
        growth: "+28%",
        trend: "+28%",
        match: false,
        growthVal: 28,
    },
];

const INDUSTRIES = [
    {
        name: "Renewable Energy",
        listings: 88,
        aligned: true,
        topSkills: "Solar Wiring, PV Commissioning, Wind Turbine",
    },
    {
        name: "Green Manufacturing",
        listings: 64,
        aligned: true,
        topSkills: "CNC Tooling, Precision Milling, Quality Control",
    },
    {
        name: "Electrical & Mechanical",
        listings: 52,
        aligned: true,
        topSkills: "Electrical Safety, Three-Phase Wiring, SCADA",
    },
    {
        name: "Green Hydrogen",
        listings: 31,
        aligned: false,
        topSkills: "Pipeline Welding, Hydrogen Safety, Pressure Systems",
    },
    {
        name: "Construction & Civil",
        listings: 24,
        aligned: false,
        topSkills: "Structural Steel, Green Building, Water Infrastructure",
    },
    {
        name: "Digital & Business Services",
        listings: 18,
        aligned: false,
        topSkills: "Data Analytics, Project Management, ERP Systems",
    },
];

const TREND_ALERTS = [
    {
        skill: "Green Hydrogen Pipeline Welding",
        pct: "+45%",
        driver: "SunHydrogen SA announced 3 new processing facilities in Atlantis SEZ",
        prompt: "Consider fast-tracking a short welding course.",
    },
    {
        skill: "Battery Storage Installation",
        pct: "+28%",
        driver: "National grid storage tender opens — 12 employers posted requirements this week",
        prompt: "Explore a short course addition to your Solar PV programme.",
    },
    {
        skill: "3D Printing & Additive Manufacturing",
        pct: "+30%",
        driver: "Atlantis Precision Engineering & 2 new entrants expanding capacity",
        prompt: "Could complement your CNC Automation programme.",
    },
    {
        skill: "Fibre-Optic Fusion Splicing",
        pct: "+22%",
        driver: "Western Cape broadband infrastructure rollout accelerating",
        prompt: "Short course opportunity — 12 listings with no matching local provider.",
    },
    {
        skill: "Wind Turbine Maintenance",
        pct: "+15%",
        driver: "Coastal wind farm expansions in Atlantis and Koeberg corridor",
        prompt: "Review whether your renewable energy track covers this adequately.",
    },
];

const PARTNERS_ACTIVE = [
    {
        name: "GigaEnergy Manufacturing SA",
        sector: "Green Energy",
        type: "Graduate Pipeline + WIL",
        placed: 18,
        hired: 34,
        health: "strong",
    },
    {
        name: "Atlantis Precision Engineering",
        sector: "Advanced Manufacturing",
        type: "Programme Co-design + WIL",
        placed: 8,
        hired: 22,
        health: "strong",
    },
    {
        name: "SunHydrogen SA",
        sector: "Green Hydrogen",
        type: "Work-integrated Learning",
        placed: 4,
        hired: 8,
        health: "developing",
    },
    {
        name: "EcoVanguard Manufacturing",
        sector: "Green Manufacturing",
        type: "Graduate Pipeline",
        placed: 6,
        hired: 14,
        health: "developing",
    },
];

const PARTNERS_POTENTIAL = [
    {
        name: "Atlantis Wind Energy Corp",
        sector: "Renewable Energy",
        listings: 9,
        hiresFromInst: 3,
        priorEngagement: true,
    },
    {
        name: "Green Logistics SA",
        sector: "Green Logistics",
        listings: 6,
        hiresFromInst: 0,
        priorEngagement: false,
    },
    {
        name: "CarbonCap Technologies",
        sector: "Green Manufacturing",
        listings: 4,
        hiresFromInst: 2,
        priorEngagement: true,
    },
];

const PARTNER_REQUESTS = [
    {
        employer: "NextGen Solar Installs",
        proposal:
            "Requesting a co-designed NQF Level 3 short course for entry-level solar rooftop installers. Looking to hire 8–12 graduates per cohort.",
        date: "23 May 2026",
    },
    {
        employer: "Atlantis Water Utilities",
        proposal:
            "Interested in exploring a WIL placement programme for plumbing and water infrastructure students. Initial intake of 5 students.",
        date: "19 May 2026",
    },
];

const INTERACTIONS = {
    "GigaEnergy Manufacturing SA": [
        {
            date: "2026-05-10",
            type: "In-Person Meeting",
            note: "Reviewed Cohort B performance. Plant Director expressed high satisfaction with electrical grounding competencies.",
        },
        {
            date: "2026-03-14",
            type: "Curriculum Alignment Session",
            note: "Synchronised programme outline with corporate B-BBEE compliance requirements.",
        },
    ],
    "Atlantis Precision Engineering": [
        {
            date: "2026-04-22",
            type: "Video Call",
            note: "Discussed alignment for specialised CNC operator pipeline. Programme calendar adjustment targeted for Q3 intake.",
        },
    ],
};

const NOTIFS = [
    {
        id: "n1",
        type: "enroll",
        title: "New Participant Enrolled",
        text: "Lerato D. completed screening and enrolled in Solar PV Cohort C.",
        time: "12 mins ago",
        unread: true,
        link: "page-participants",
    },
    {
        id: "n2",
        type: "placement",
        title: "Graduate Secured Placement",
        text: "Sipho M. confirmed as a full-time hire at GigaEnergy Manufacturing.",
        time: "2 hrs ago",
        unread: true,
        link: "page-outcomes",
    },
    {
        id: "n3",
        type: "risk",
        title: "At-Risk Participant Flagged",
        text: "Gerrit K. has fallen below minimum attendance threshold for Electrical Systems learnership.",
        time: "1 day ago",
        unread: true,
        link: "page-participants",
    },
    {
        id: "n4",
        type: "signal",
        title: "Demand Spike: Green Hydrogen Welding",
        text: "Employer demand for hydrogen pipeline welding increased 45% following new SEZ infrastructure announcement.",
        time: "2 days ago",
        unread: false,
        link: "page-signals",
    },
    {
        id: "n5",
        type: "partner",
        title: "Partnership Request Received",
        text: "NextGen Solar Installs has sent a co-design partnership proposal.",
        time: "3 days ago",
        unread: false,
        link: "page-partnerships",
    },
];

const REMINDERS = [
    {
        date: "Tomorrow",
        label: "Solar PV — Practical Assessment",
        detail: "28 participants · Lab A, 9:00 AM",
        urgent: true,
    },
    {
        date: "26 May",
        label: "Electrical Systems — Module 4 Review",
        detail: "45 participants · Hybrid, 2:00 PM",
        urgent: false,
    },
    {
        date: "28 May",
        label: "Solar PV Midterm Assessment",
        detail: "28 participants · Practical Evaluation",
        urgent: false,
    },
    {
        date: "29 May",
        label: "B-BBEE Compliance Filing",
        detail: "Upload data summary for annual audit",
        urgent: false,
    },
    {
        date: "02 Jun",
        label: "Apprenticeship Enrolment Deadline",
        detail: "Final registration window for Winter term",
        urgent: false,
    },
];

// ═══════════════════════════════ STATE ═══════════════════════════════
let selectedParticipants = new Set();
let activeParticipantFilter = "all";
let activeGradKey = null;
let activeParticipantId = null;
let activePartnerName = null;
let sectorChart = null;
let demoChart = null;

// ═══════════════════════════════ INIT ═══════════════════════════════
document.addEventListener("DOMContentLoaded", () => {
    feather.replace();
    setGreeting();
    renderHome();
    renderProgrammes();
    renderParticipants();
    renderGradTable();
    renderFunnel();
    renderCohortCompare();
    renderSkillsGrid();
    renderIndustryBreakdown();
    renderTrendAlerts();
    renderGapMatrix();
    renderPartners();
    renderPartnerRequests();
    renderNotifications();
    setupNav();
    setupTabs();
    setupChips();
    setupBnavItems();
});

// ═══════════════════════════════ GREETING ═══════════════════════════════
function setGreeting() {
    const h = new Date().getHours();
    const g =
        h < 12 ? "Good morning" : h < 18 ? "Good afternoon" : "Good evening";
    const phrase = `${g}, Andile`;
    document.getElementById("timeGreeting").textContent = phrase;
    const bg = document.getElementById("bannerGreeting");
    if (bg) bg.textContent = phrase;
}

// ═══════════════════════════════ NAV ═══════════════════════════════
function setupNav() {
    document
        .querySelectorAll(".nav-item[data-target], .bnav-item[data-target]")
        .forEach((btn) => {
            btn.addEventListener("click", () =>
                switchPage(btn.getAttribute("data-target"), btn),
            );
        });
}

function switchPage(id, trigger = null) {
    document
        .querySelectorAll(".page-section")
        .forEach((s) => s.classList.remove("active"));
    const target = document.getElementById(id);
    if (target) target.classList.add("active");

    document
        .querySelectorAll(".nav-item[data-target], .bnav-item[data-target]")
        .forEach((b) => {
            b.classList.toggle("active", b.getAttribute("data-target") === id);
        });

    if (id === "page-outcomes") setTimeout(initCharts, 60);
    window.scrollTo(0, 0);
}

function handleMobileNav(btn) {
    toggleMobileDrawer();
    switchPage(btn.getAttribute("data-target"), btn);
}

function toggleMobileDrawer() {
    document.getElementById("mobileDrawer").classList.toggle("open");
    document.getElementById("drawerOverlay").classList.toggle("open");
}

// ═══════════════════════════════ TABS ═══════════════════════════════
function setupTabs() {
    document.querySelectorAll(".tab-btn[data-group]").forEach((btn) => {
        btn.addEventListener("click", () => {
            const group = btn.getAttribute("data-group");
            const pane = btn.getAttribute("data-pane");
            document
                .querySelectorAll(`.tab-btn[data-group="${group}"]`)
                .forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
            document
                .querySelectorAll(`.tab-btn[data-group="${group}"]`)
                .forEach((b) => {
                    const p = document.getElementById(
                        b.getAttribute("data-pane"),
                    );
                    if (p) p.classList.remove("active");
                });
            const target = document.getElementById(pane);
            if (target) target.classList.add("active");
        });
    });
}

// ═══════════════════════════════ FILTER CHIPS ═══════════════════════════════
function setupChips() {
    document.querySelectorAll("#participantChips .chip").forEach((chip) => {
        chip.addEventListener("click", () => {
            document
                .querySelectorAll("#participantChips .chip")
                .forEach((c) => c.classList.remove("active"));
            chip.classList.add("active");
            activeParticipantFilter = chip.getAttribute("data-filter");
            renderParticipants();
        });
    });
}

// ═══════════════════════════════ HOME ═══════════════════════════════
function renderHome() {
    renderProgHealth();
    renderOutcomeHighlights();
    renderHomeDemand();
    renderReminders();
}

function renderProgHealth() {
    const el = document.getElementById("progHealthList");
    if (!el) return;
    el.innerHTML = PROGS.map((p) => {
        const pct = Math.round((p.filled / p.capacity) * 100);
        return `<div class="prog-health-row">
      <div class="prog-h-name">
        <strong>${p.name}</strong>
        <span>${p.type} · ${p.format}</span>
      </div>
      <div class="prog-fill-bar">
        <span class="prog-fill-lbl">Enrolment: ${p.filled} / ${p.capacity}</span>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="risk-badge ${p.risk > 0 ? "risk" : "safe"}">
        ${p.risk > 0 ? `<i data-feather="alert-triangle"></i> ${p.risk} At Risk` : `<i data-feather="smile"></i> All Good`}
      </div>
      <button class="btn btn-sm btn-ghost" onclick="switchPage('page-programmes')">Manage</button>
    </div>`;
    }).join("");
    feather.replace();
}

function renderOutcomeHighlights() {
    const el = document.getElementById("outcomeHighlights");
    if (!el) return;
    const placed = GRADS.filter((g) => g.outcome === "Placed").slice(0, 4);
    el.innerHTML = placed
        .map(
            (g) => `
    <div class="outcome-card">
      <div class="oc-head">
        <strong>${g.name}</strong>
        <span class="badge ${g.verified ? "badge-green" : "badge-amber"}">${g.verified ? "Employer Verified" : "Self-Reported"}</span>
      </div>
      <p class="oc-prog">${g.prog}</p>
      <p class="oc-result">Placed at <strong>${g.employer}</strong> as ${g.role}.</p>
    </div>
  `,
        )
        .join("");
}

function renderHomeDemand() {
    const el = document.getElementById("homeDemandList");
    if (!el) return;
    el.innerHTML = SKILLS_DATA.slice(0, 5)
        .map(
            (s, i) => `
    <div class="demand-mini-row" style="animation-delay:${i * 0.08}s">
      <div class="demand-mini-info">
        <strong>${s.name}</strong>
        <span>${s.listings} listings · <span style="color:var(--accent)">${s.growth} trend</span></span>
      </div>
      <div class="sparkline-sim"></div>
      ${
          s.match
              ? `<span class="badge badge-green">Covered</span>`
              : `<span class="badge badge-amber" style="cursor:pointer" onclick="switchPage('page-programmes')">Consider Adding</span>`
      }
    </div>
  `,
        )
        .join("");
}

function renderReminders() {
    const el = document.getElementById("remindersList");
    if (!el) return;
    el.innerHTML = REMINDERS.map(
        (r) => `
    <div class="reminder-row ${r.urgent ? "urgent" : ""}">
      <span class="rem-date">${r.date}</span>
      <div class="rem-info">
        <strong>${r.label}</strong>
        <p>${r.detail}</p>
      </div>
    </div>
  `,
    ).join("");
}

// ═══════════════════════════════ PROGRAMMES ═══════════════════════════════
function renderProgrammes() {
    const grid = document.getElementById("progCardsGrid");
    if (!grid) return;
    grid.innerHTML = PROGS.map((p) => {
        const pct = Math.round((p.filled / p.capacity) * 100);
        const isFull = p.filled >= p.capacity;
        const isLow = pct < 50;
        const skillTags = p.skills
            .map((s) => `<span class="tag tag-green">${s}</span>`)
            .join("");
        const roleTags = p.roles
            .map((r) => `<span class="tag tag-grey">${r}</span>`)
            .join("");
        return `
    <div class="prog-card">
      <div class="prog-card-top">
        <div>
          <h4>${p.name}</h4>
          <div style="font-size:0.72rem;color:var(--text-muted);font-weight:600;margin-top:0.15rem;">${p.type}</div>
        </div>
        <div style="display:flex;flex-direction:column;gap:0.3rem;align-items:flex-end;">
          <span class="badge badge-green">${p.status}</span>
          ${isFull ? `<span class="badge badge-primary">Full</span>` : ""}
          ${isLow ? `<span class="badge badge-amber">Open Spots</span>` : ""}
        </div>
      </div>
      <div class="prog-card-meta">
        <span><strong>Credential:</strong> ${p.cred}</span>
        <span><strong>Dates:</strong> ${p.duration}</span>
        <span><strong>Format:</strong> ${p.format}</span>
        <span><strong>Enrolment:</strong> ${p.filled} / ${p.capacity}</span>
      </div>
      <div class="bar-track" style="margin-bottom:0.75rem;"><div class="bar-fill" style="width:${pct}%"></div></div>
      <div style="font-size:0.72rem;font-weight:600;color:var(--charcoal);margin-bottom:0.25rem;">Skills</div>
      <div class="tags-row">${skillTags}</div>
      <div style="font-size:0.72rem;font-weight:600;color:var(--charcoal);margin-bottom:0.25rem;">Job Types</div>
      <div class="tags-row">${roleTags}</div>
      <div class="prog-card-foot">
        <button class="btn btn-sm btn-outline" onclick="alert('Opening programme editor…')">Edit</button>
        <button class="btn btn-sm btn-ghost" onclick="alert('Opening public listing preview…')">Preview</button>
        <button class="btn btn-sm btn-primary" onclick="switchPage('page-participants')">Participants</button>
      </div>
    </div>`;
    }).join("");
}

// ═══════════════════════════════ PARTICIPANTS ═══════════════════════════════
function renderParticipants() {
    const grid = document.getElementById("participantGrid");
    if (!grid) return;
    const query = (
        document.getElementById("participantSearch")?.value || ""
    ).toLowerCase();

    const filtered = PARTICIPANTS.filter((p) => {
        if (
            activeParticipantFilter !== "all" &&
            p.status !== activeParticipantFilter
        )
            return false;
        if (query)
            return (
                p.name.toLowerCase().includes(query) ||
                p.prog.toLowerCase().includes(query)
            );
        return true;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `<div class="empty-state"><i data-feather="users"></i><h4>No participants found</h4><p>Try adjusting your search or filter.</p></div>`;
        feather.replace();
        return;
    }

    grid.innerHTML = filtered
        .map((p) => {
            const pct = p.progress;
            const attClass =
                p.attendance >= 80 ? "hi" : p.attendance >= 60 ? "mid" : "lo";
            const borderClass =
                p.status === "at-risk"
                    ? "at-risk-border"
                    : p.status === "completed" || p.status === "placed"
                      ? "completed-border"
                      : "";
            const badgeClass =
                p.status === "completed" || p.status === "placed"
                    ? "badge-green"
                    : p.status === "at-risk"
                      ? "badge-amber"
                      : "badge-primary";
            const checked = selectedParticipants.has(p.id) ? "checked" : "";
            return `
    <div class="p-card ${borderClass}">
      <div class="p-checkbox"><input type="checkbox" ${checked} onchange="toggleSelect('${p.id}', this)"/></div>
      <div class="p-name"><strong>${p.name}</strong><span>${p.enrolled}</span></div>
      <div class="p-prog hide-mob">${p.prog}</div>
      <div class="p-progress hide-mob">
        <span class="p-progress-lbl">${pct}% complete</span>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%"></div></div>
      </div>
      <div class="attend-badge ${attClass} hide-mob">${p.attendance}% attendance</div>
      <div><span class="badge ${badgeClass}">${p.status.replace("-", " ")}</span></div>
      <div style="display:flex;gap:0.35rem;">
        ${
            p.status === "at-risk"
                ? `<button class="btn btn-sm btn-primary" onclick="reachOut('${p.id}')">Reach Out</button>`
                : `<button class="btn btn-sm btn-outline" onclick="openParticipantDrawer('${p.id}')">View Profile</button>`
        }
      </div>
    </div>`;
        })
        .join("");
    feather.replace();
    updateBulkToolbar();
}

function filterParticipants() {
    renderParticipants();
}

function toggleSelect(id, cb) {
    if (cb.checked) selectedParticipants.add(id);
    else selectedParticipants.delete(id);
    updateBulkToolbar();
}

function updateBulkToolbar() {
    const toolbar = document.getElementById("bulkToolbar");
    const count = document.getElementById("bulkCount");
    if (!toolbar) return;
    if (selectedParticipants.size > 0) {
        toolbar.classList.add("visible");
        toolbar.style.display = "flex";
        count.textContent = `${selectedParticipants.size} participant${selectedParticipants.size > 1 ? "s" : ""} selected`;
    } else {
        toolbar.classList.remove("visible");
        toolbar.style.display = "none";
    }
}

function bulkMarkComplete() {
    if (selectedParticipants.size === 0) return;
    const n = selectedParticipants.size;
    PARTICIPANTS.forEach((p) => {
        if (selectedParticipants.has(p.id)) {
            p.status = "completed";
            p.progress = 100;
        }
    });
    clearBulkSelection();
    renderParticipants();
    alert(
        `${n} participant${n > 1 ? "s" : ""} marked as complete. Training credentials added to their Impact Passports.`,
    );
}

function bulkExport() {
    alert("Exporting selected participant data to CSV…");
}

function clearBulkSelection() {
    selectedParticipants.clear();
    document
        .querySelectorAll(".p-checkbox input")
        .forEach((cb) => (cb.checked = false));
    updateBulkToolbar();
}

function reachOut(id) {
    const p = PARTICIPANTS.find((x) => x.id === id);
    if (!p) return;
    const msg = `Good morning ${p.name},\n\nWe've noticed your recent attendance has dropped and we want to make sure you have the support you need to complete your programme.\n\nPlease reach out to us — we can help with transport, scheduling, or anything else that's getting in the way.\n\nKind regards,\nWest Coast TVET College`;
    if (
        confirm(
            `Reason flagged:\n"${p.reason}"\n\nSend a check-in message to ${p.name} via WhatsApp?`,
        )
    ) {
        window.open(
            `https://wa.me/27834129855?text=${encodeURIComponent(msg)}`,
            "_blank",
        );
    }
}

function openParticipantDrawer(id) {
    const p = PARTICIPANTS.find((x) => x.id === id);
    if (!p) return;
    activeParticipantId = id;
    document.getElementById("pdName").textContent = p.name;
    document.getElementById("pdProg").textContent = p.prog;
    document.getElementById("pdProgress").textContent = p.progress + "%";
    document.getElementById("pdAttend").textContent = p.attendance + "%";
    document.getElementById("pdPassport").textContent = p.passport;
    document.getElementById("pdStatus").value = p.status;
    document.getElementById("participantDrawer").classList.add("open");
    document.getElementById("participantDrawerOverlay").classList.add("open");
    feather.replace();
}

function closeParticipantDrawer() {
    document.getElementById("participantDrawer").classList.remove("open");
    document
        .getElementById("participantDrawerOverlay")
        .classList.remove("open");
}

function contactParticipant() {
    const p = PARTICIPANTS.find((x) => x.id === activeParticipantId);
    if (!p) return;
    alert(`Opening WhatsApp to contact ${p.name}…`);
}

function saveParticipantUpdate() {
    const p = PARTICIPANTS.find((x) => x.id === activeParticipantId);
    if (!p) return;
    p.status = document.getElementById("pdStatus").value;
    renderParticipants();
    closeParticipantDrawer();
    alert("Participant profile updated successfully.");
}

// ═══════════════════════════════ OUTCOMES ═══════════════════════════════
function renderFunnel() {
    const el = document.getElementById("placementFunnel");
    if (!el) return;
    const steps = [
        { label: "Programme Completed", n: 248, w: "100%" },
        { label: "Impact Passport Active", n: 223, w: "90%", drop: "↓10%" },
        { label: "Applied to Opportunities", n: 193, w: "78%", drop: "↓13%" },
        { label: "Shortlisted", n: 154, w: "62%", drop: "↓20%" },
        { label: "Placed", n: 184, w: "50%" },
    ];
    el.innerHTML = `<div class="funnel-wrap">${steps
        .map(
            (s, i) => `
    <div class="funnel-step" style="--w:${s.w};animation-delay:${i * 0.12}s">
      <span>${s.label}</span>
      <div style="display:flex;gap:0.65rem;align-items:center;">
        ${s.drop ? `<span class="funnel-drop">${s.drop}</span>` : ""}
        <span class="funnel-badge">${s.n}</span>
      </div>
    </div>`,
        )
        .join("")}
  </div>`;
}

function renderGradTable() {
    const tbody = document.getElementById("gradTableBody");
    if (!tbody) return;
    tbody.innerHTML = GRADS.map((g) => {
        const outcomeClass =
            g.outcome === "Placed"
                ? "badge-green"
                : g.outcome === "Actively Applying"
                  ? "badge-primary"
                  : "badge-amber";
        const verif = g.verified
            ? `<span style="color:#0d9488;font-size:0.8rem;font-weight:500;display:flex;align-items:center;gap:0.2rem;"><i data-feather="shield" style="width:12px;height:12px;"></i>Employer Verified</span>`
            : `<span class="badge badge-grey">${g.verification}</span>`;
        const actions =
            g.outcome === "Placed"
                ? `<button class="btn btn-sm btn-outline" onclick="openGradDetail('${g.id}')">View Placement</button>`
                : g.outcome === "Unknown"
                  ? `<button class="btn btn-sm btn-outline" style="border-color:var(--amber);color:var(--amber);" onclick="followUpGrad('${g.id}')"><i data-feather="message-circle"></i>Follow Up</button>`
                  : `<span style="font-size:0.78rem;color:var(--text-muted);">—</span>`;
        return `<tr class="grad-row" data-id="${g.id}">
      <td><strong style="display:block">${g.name}</strong></td>
      <td style="color:var(--primary)">${g.prog}</td>
      <td><span class="badge ${outcomeClass}">${g.outcome}</span></td>
      <td>${verif}</td>
      <td style="text-align:right">${actions}</td>
    </tr>`;
    }).join("");
    feather.replace();
}

function openGradDetail(id) {
    const g = GRADS.find((x) => x.id === id);
    if (!g) return;
    document
        .querySelectorAll(".grad-row")
        .forEach((r) => r.classList.remove("active-row"));
    const row = document.querySelector(`.grad-row[data-id="${id}"]`);
    if (row) row.classList.add("active-row");
    if (activeGradKey === id) {
        closeGradDetail();
        return;
    }
    activeGradKey = id;
    document.getElementById("idpName").textContent =
        `${g.name} — Placement Details`;
    document.getElementById("idpEmployer").textContent = g.employer;
    document.getElementById("idpRole").textContent = g.role;
    document.getElementById("idpFeedback").textContent = g.feedback
        ? `"${g.feedback}"`
        : "—";
    const panel = document.getElementById("gradDetailPanel");
    panel.classList.add("open");
    panel.style.display = "block";
}

function closeGradDetail() {
    document.getElementById("gradDetailPanel").classList.remove("open");
    document.getElementById("gradDetailPanel").style.display = "none";
    document
        .querySelectorAll(".grad-row")
        .forEach((r) => r.classList.remove("active-row"));
    activeGradKey = null;
}

function filterGrads(q) {
    document.querySelectorAll(".grad-row").forEach((row) => {
        const text = row.textContent.toLowerCase();
        row.style.display = !q || text.includes(q.toLowerCase()) ? "" : "none";
    });
}

function followUpGrad(id) {
    const g = GRADS.find((x) => x.id === id);
    if (!g) return;
    alert(`Sending outcome check-in prompt to ${g.name} via WhatsApp and SMS…`);
}

function generateOutcomeReport() {
    alert(
        "Generating outcome report as PDF. This may take a moment…\nIn a live system, this would download a formatted PDF with all outcome data, charts, and cohort analysis.",
    );
}

function renderCohortCompare() {
    const el = document.getElementById("cohortCompareGrid");
    if (!el) return;
    el.innerHTML = COHORTS.map(
        (c) => `
    <div class="cohort-card">
      <h5>${c.name}</h5>
      <div class="cohort-stat"><span>Participants</span><strong>${c.participants}</strong></div>
      <div class="cohort-stat"><span>Completed</span><strong>${c.completed}</strong></div>
      <div class="cohort-stat"><span>Placed</span><strong>${c.placed}</strong></div>
      <div class="cohort-stat"><span>Placement Rate</span><strong style="color:var(--accent)">${c.rate}</strong></div>
      <div class="cohort-stat"><span>Avg. Time</span><strong style="color:#38bdf8">${c.avgTime}</strong></div>
    </div>
  `,
    ).join("");
}

// ═══════════════════════════════ CHARTS ═══════════════════════════════
function initCharts() {
    const s = document.getElementById("sectorChart");
    const d = document.getElementById("demoChart");
    if (!s || !d) return;
    if (sectorChart) sectorChart.destroy();
    if (demoChart) demoChart.destroy();

    sectorChart = new Chart(s, {
        type: "bar",
        data: {
            labels: [
                "Solar Energy",
                "Precision Tooling",
                "Green Logistics",
                "Water Infra",
            ],
            datasets: [
                {
                    label: "Graduates Placed",
                    data: [45, 32, 28, 18],
                    backgroundColor: [
                        "#004d4d",
                        "#006666",
                        "#0f9f68",
                        "#d97706",
                    ],
                    borderRadius: 4,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                y: { beginAtZero: true, grid: { display: false } },
                x: { grid: { display: false } },
            },
        },
    });

    demoChart = new Chart(d, {
        type: "doughnut",
        data: {
            labels: [
                "Youth (Under 35)",
                "Women Technicians",
                "Atlantis Residents",
            ],
            datasets: [
                {
                    data: [68, 55, 85],
                    backgroundColor: ["#0f9f68", "#004d4d", "#d97706"],
                    borderWidth: 2,
                    borderColor: "#fff",
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: "right",
                    labels: { boxWidth: 12, font: { size: 11 } },
                },
            },
        },
    });
}

// ═══════════════════════════════ SIGNALS ═══════════════════════════════
function renderSkillsGrid() {
    const el = document.getElementById("skillsGrid");
    if (!el) return;
    const sort = document.getElementById("skillsSort")?.value || "demand";
    let data = [...SKILLS_DATA];
    if (sort === "growth") data.sort((a, b) => b.growthVal - a.growthVal);
    else if (sort === "gap") data = data.filter((s) => !s.match);
    else data.sort((a, b) => b.listings - a.listings);

    el.innerHTML = data
        .map(
            (s, i) => `
    <div class="skill-row ${!s.match ? "gap-flag" : ""}" style="animation-delay:${i * 0.05}s">
      <div class="skill-info">
        <strong>${s.name}</strong>
        <span>${s.listings} active listings · <span style="color:var(--accent)">${s.growth} trend</span></span>
      </div>
      <div class="skill-meta">
        <div class="sparkline-sim"></div>
        ${
            s.match
                ? `<span class="badge badge-green"><i data-feather="check" style="width:10px;height:10px;"></i> Covered</span>`
                : `<span class="badge badge-amber" style="cursor:pointer" onclick="switchPage('page-programmes')">+ Consider Adding</span>`
        }
      </div>
    </div>
  `,
        )
        .join("");
    feather.replace();
}

function renderIndustryBreakdown() {
    const el = document.getElementById("industryBreakdown");
    if (!el) return;
    el.innerHTML = INDUSTRIES.map(
        (ind) => `
    <div class="industry-row">
      <div>
        <div class="ind-name">${ind.name} ${!ind.aligned ? `<span class="badge badge-amber" style="margin-left:0.4rem;">Consider Developing</span>` : ""}</div>
        <div class="ind-skills">${ind.topSkills}</div>
      </div>
      <span class="ind-count">${ind.listings} listings</span>
    </div>
  `,
    ).join("");
}

function renderTrendAlerts() {
    const el = document.getElementById("trendAlerts");
    if (!el) return;
    el.innerHTML = TREND_ALERTS.map(
        (t) => `
    <div class="trend-alert-row">
      <div class="trend-icon"><i data-feather="trending-up"></i></div>
      <div class="trend-info">
        <strong>${t.skill}</strong>
        <p>${t.driver}</p>
        <p style="color:var(--primary);font-weight:500;font-size:0.75rem;margin-top:0.2rem;">${t.prompt}</p>
      </div>
      <span class="trend-pct">${t.pct}</span>
    </div>
  `,
    ).join("");
    feather.replace();
}

function renderGapMatrix() {
    const el = document.getElementById("gapMatrix");
    if (!el) return;
    el.innerHTML = `
    <div class="gap-cell strength">
      <strong>High Demand · You Offer This</strong>
      <p>Solar Electrical Systems, CNC Mill Operation, Electrical Safety</p>
      <span class="gap-tag gt-green">Strength</span>
    </div>
    <div class="gap-cell opportunity">
      <strong>High Demand · No Programme Yet</strong>
      <p>Green Hydrogen Pipeline Welding, Fibre-Optic Fusion Splicing, Battery Storage</p>
      <span class="gap-tag gt-amber">Consider Developing</span>
    </div>
    <div class="gap-cell surplus">
      <strong>Low Demand · You Offer This</strong>
      <p>Legacy Mechanical Lathe Setup, Baseline Analog Circuit Drafting</p>
      <span class="gap-tag gt-primary">Review Relevance</span>
    </div>
    <div class="gap-cell low">
      <strong>Low Demand · No Programme</strong>
      <p>General Administration Systems</p>
      <span class="gap-tag gt-grey">Monitor</span>
    </div>
  `;
}

// ═══════════════════════════════ PARTNERSHIPS ═══════════════════════════════
function renderPartners() {
    const active = document.getElementById("partnerActiveGrid");
    if (active) {
        active.innerHTML = PARTNERS_ACTIVE.map(
            (p) => `
      <div class="partner-card">
        <div class="partner-card-head">
          <div>
            <h4>${p.name}</h4>
            <span class="sector">${p.sector} · ${p.type}</span>
          </div>
          <span class="health-chip ${p.health}">${p.health === "strong" ? "Strong" : p.health === "developing" ? "Developing" : "Needs Attention"}</span>
        </div>
        <div class="partner-metrics">
          <div class="pm-item"><strong>${p.placed}</strong><label>Currently Placed</label></div>
          <div class="pm-item"><strong>${p.hired}</strong><label>Graduates Hired to Date</label></div>
        </div>
        <div class="partner-card-foot">
          <button class="btn btn-sm btn-outline" onclick="openPartnerDrawer('${p.name}')">View History</button>
          <button class="btn btn-sm btn-primary" onclick="alert('Opening messaging channel…')">Send Message</button>
        </div>
      </div>
    `,
        ).join("");
    }

    const potential = document.getElementById("partnerPotentialGrid");
    if (potential) {
        potential.innerHTML = PARTNERS_POTENTIAL.map(
            (p) => `
      <div class="partner-card">
        <div class="partner-card-head">
          <div>
            <h4>${p.name}</h4>
            <span class="sector">${p.sector} · ${p.listings} active listings</span>
          </div>
          ${p.priorEngagement ? `<span class="badge badge-amber">Prior Engagement</span>` : ""}
        </div>
        <p style="font-size:0.83rem;color:var(--text-muted);line-height:1.5;margin-bottom:1rem;">
          ${p.hiresFromInst > 0 ? `Has hired ${p.hiresFromInst} of your graduates informally — a natural fit for a formal partnership.` : "Active employer in your programme area. No prior engagement recorded."}
        </p>
        <button class="btn btn-primary btn-sm" style="width:100%" onclick="alert('Sending partnership proposal to ${p.name}…')">Send Partnership Proposal</button>
      </div>
    `,
        ).join("");
    }
}

function renderPartnerRequests() {
    const el = document.getElementById("partnerRequestsList");
    if (!el) return;
    if (PARTNER_REQUESTS.length === 0) {
        el.innerHTML = `<div class="empty-state"><i data-feather="inbox"></i><h4>No Inbound Requests</h4><p>Partnership proposals from employers will appear here when received.</p></div>`;
        feather.replace();
        return;
    }
    el.innerHTML = PARTNER_REQUESTS.map(
        (r) => `
    <div class="request-card">
      <div class="request-head">
        <h4>${r.employer}</h4>
        <time>${r.date}</time>
      </div>
      <p class="request-desc">${r.proposal}</p>
      <div class="request-actions">
        <button class="btn btn-primary btn-sm" onclick="alert('Accepting partnership proposal from ${r.employer}. Initiating onboarding workflow…')"><i data-feather="check"></i>Accept &amp; Begin Partnership</button>
        <button class="btn btn-outline btn-sm" onclick="alert('Declining request from ${r.employer}…')">Decline</button>
      </div>
    </div>
  `,
    ).join("");
    feather.replace();
}

function openPartnerDrawer(name) {
    activePartnerName = name;
    document.getElementById("drawerPartnerName").textContent =
        `${name} — Partnership Details`;
    renderInteractionTimeline(name);
    document.getElementById("partnerDrawer").classList.add("open");
    document.getElementById("partnerDrawerOverlay").classList.add("open");
    feather.replace();
}

function closePartnerDrawer() {
    document.getElementById("partnerDrawer").classList.remove("open");
    document.getElementById("partnerDrawerOverlay").classList.remove("open");
}

function renderInteractionTimeline(name) {
    const el = document.getElementById("interactionTimeline");
    if (!el) return;
    const history = INTERACTIONS[name] || [];
    if (history.length === 0) {
        el.innerHTML = `<p style="font-size:0.83rem;color:var(--text-muted);font-style:italic;">No interactions logged yet for this partner.</p>`;
        return;
    }
    el.innerHTML = history
        .map(
            (h) => `
    <div class="timeline-item">
      <span class="tl-date">${h.date} — ${h.type}</span>
      <p class="tl-note">${h.note}</p>
    </div>
  `,
        )
        .join("");
}

function saveInteraction() {
    const type = document.getElementById("logType").value;
    const notes = document.getElementById("logNotes").value.trim();
    if (!notes) {
        alert("Please add notes before saving.");
        return;
    }
    if (!INTERACTIONS[activePartnerName]) INTERACTIONS[activePartnerName] = [];
    INTERACTIONS[activePartnerName].unshift({
        date: new Date().toISOString().split("T")[0],
        type,
        note: notes,
    });
    document.getElementById("logNotes").value = "";
    renderInteractionTimeline(activePartnerName);
    alert("Interaction logged successfully.");
}

// ═══════════════════════════════ NOTIFICATIONS ═══════════════════════════════
function renderNotifications() {
    const feed = document.getElementById("notifFeed");
    if (!feed) return;
    let unread = 0;
    feed.innerHTML = NOTIFS.map((n) => {
        if (n.unread) unread++;
        const iconMap = {
            enroll: "user-plus",
            placement: "trending-up",
            risk: "alert-triangle",
            signal: "activity",
            partner: "briefcase",
        };
        return `
    <div class="notif-row ${n.unread ? "unread" : ""}">
      <div class="notif-icon ${n.type}"><i data-feather="${iconMap[n.type] || "bell"}"></i></div>
      <div class="notif-msg">
        <strong>${n.title}</strong>
        <p>${n.text}</p>
        <a href="#" onclick="switchPage('${n.link}');return false;">View details &rarr;</a>
      </div>
      <span class="notif-time">${n.time}</span>
    </div>`;
    }).join("");
    const badge = document.getElementById("bellBadge");
    if (badge) {
        badge.textContent = unread;
        badge.style.display = unread > 0 ? "flex" : "none";
    }
    feather.replace();
}

function markAllRead() {
    NOTIFS.forEach((n) => (n.unread = false));
    renderNotifications();
}

function sendTestNotif() {
    alert(
        "Test alert sent!\n\n• Platform notification: delivered\n• Email to andile.cele@wc-tvet.edu.za: sent\n• WhatsApp to +27 83 412 9855: sent",
    );
    NOTIFS.unshift({
        id: "test" + Date.now(),
        type: "signal",
        title: "Test Alert — Delivery Confirmed",
        text: "Your alert configuration is working correctly.",
        time: "Just now",
        unread: true,
        link: "page-notifications",
    });
    renderNotifications();
}

// ═══════════════════════════════ PROGRAMME MODAL ═══════════════════════════════
function openProgModal() {
    document.getElementById("progModalOverlay").classList.add("open");
    feather.replace();
}

function closeProgModal() {
    document.getElementById("progModalOverlay").classList.remove("open");
}

function submitProgramme(e) {
    e.preventDefault();
    const name = document.getElementById("fName").value;
    const type = document.getElementById("fType").value;
    const capacity = parseInt(document.getElementById("fCapacity").value) || 0;
    const skills = document
        .getElementById("fSkills")
        .value.split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    const roles = document
        .getElementById("fRoles")
        .value.split(",")
        .map((s) => s.trim())
        .filter(Boolean);
    PROGS.unshift({
        id: "p_" + Date.now(),
        name,
        type,
        cred:
            document.getElementById("fCred").value ||
            "Certificate of Completion",
        duration: "Jul – Dec 2026",
        format: "In-Person",
        filled: 0,
        capacity,
        status: "Published",
        skills,
        roles,
        risk: 0,
        nextSession: "TBD",
    });
    renderProgrammes();
    renderProgHealth();
    closeProgModal();
    alert(
        `"${name}" has been published and is now visible to job seekers and employers on the platform.`,
    );
}

function updateDemandPanel() {
    const val = document.getElementById("fSkills")?.value || "";
    const badge = document.getElementById("dmpBadge");
    const text = document.getElementById("dmpText");
    if (!badge || !text) return;
    if (
        val.toLowerCase().includes("hydrogen") ||
        val.toLowerCase().includes("welding")
    ) {
        badge.textContent = "Match Score: 98% — High Priority";
        badge.style.background = "var(--amber)";
        text.textContent =
            "Urgent match — hydrogen welding demand up 45% in the SEZ.";
        text.style.color = "var(--amber)";
    } else {
        badge.textContent = "Match Score: 84%";
        badge.style.background = "var(--accent)";
        text.textContent =
            "High alignment — 4 active SEZ employer listings match these skills.";
        text.style.color = "var(--text-muted)";
    }
}

function toggleFormat(btn) {
    btn.closest(".format-toggles")
        .querySelectorAll(".format-btn")
        .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
}

function countWords(ta) {
    const words = ta.value
        .trim()
        .split(/\s+/)
        .filter((w) => w).length;
    const counter = document.getElementById("descCount");
    if (counter) counter.textContent = `${words} / 300 words`;
    if (words > 300) {
        counter.style.color = "var(--danger)";
    } else {
        counter.style.color = "var(--text-muted)";
    }
}

// ═══════════════════════════════ MOBILE BOTTOM NAV ═══════════════════════════════
function setupBnavItems() {
    document.querySelectorAll(".bnav-item").forEach((btn) => {
        btn.addEventListener("click", () => {
            document
                .querySelectorAll(".bnav-item")
                .forEach((b) => b.classList.remove("active"));
            btn.classList.add("active");
        });
    });
}

// Logout functionality - matches the employer page sign out
function handleLogout() {
    // Show confirmation dialog (optional)
    if (confirm("Are you sure you want to sign out?")) {
        // Clear any stored session data
        sessionStorage.clear();
        localStorage.removeItem("userToken");
        localStorage.removeItem("userSession");

        // Redirect to portal.html (matching the employer page)
        window.location.href = "portal.html";
    }
}

// Alternative without confirmation
function logout() {
    sessionStorage.clear();
    localStorage.removeItem("userToken");
    window.location.href = "portal.html";
}

// Attach logout to button (if using class selector)
document.querySelectorAll(".logout-trigger-btn, .logout-btn").forEach((btn) => {
    btn.addEventListener("click", function (e) {
        e.preventDefault();
        handleLogout();
    });
});
