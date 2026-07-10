/* =========================================================================
   Portfolio behaviour — renders content from data.js and wires interactions.
   ========================================================================= */
(function () {
  "use strict";

  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const el = (tag, cls, html) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  };

  /* ---------------------------------------------------------------- icons */
  const ICONS = {
    chip: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3"/></svg>',
    compress: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 9V5a1 1 0 011-1h4M20 9V5a1 1 0 00-1-1h-4M4 15v4a1 1 0 001 1h4M20 15v4a1 1 0 01-1 1h-4M8 12h8"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>',
    factory: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M3 21h18M4 21V10l5 3V10l5 3V6l6 4v11"/><path d="M9 21v-4M14 21v-4"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>',
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3-8.6A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.4 1.8.7 2.7a2 2 0 01-.5 2.1L8.1 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4c.9.3 1.8.6 2.7.7a2 2 0 011.7 2z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 105 0 2.5 2.5 0 00-2.52-2.5zM3 8.98H7V21H3zM9 8.98h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21H20.6v-5.3c0-1.26-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H13V8.98z"/></svg>',
    scholar: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3 1 9l11 6 9-4.9V17h2V9L12 3zM5 13.2V17c0 1.7 3.13 3 7 3s7-1.3 7-3v-3.8l-7 3.8-7-3.8z"/></svg>',
    orcid: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zM8 6.4a.9.9 0 110 1.8.9.9 0 010-1.8zM7.1 9.4h1.7v8H7.1v-8zm3.4 0h3.3c3.1 0 4.5 2.2 4.5 4s-1.4 4-4.5 4h-3.3v-8zm1.7 1.5v4.9h1.4c2 0 2.7-1.5 2.7-2.5 0-1.6-1-2.4-2.7-2.4h-1.4z"/></svg>',
    github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5A11.5 11.5 0 00.5 12a11.5 11.5 0 007.86 10.92c.57.1.78-.25.78-.55v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.3-1.7-1.3-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.79 1.2 1.79 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.3-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.18-3.1-.12-.3-.51-1.5.11-3.12 0 0 .97-.31 3.18 1.18a11 11 0 015.8 0c2.2-1.5 3.17-1.18 3.17-1.18.63 1.62.24 2.82.12 3.12.74.8 1.18 1.84 1.18 3.1 0 4.43-2.7 5.4-5.26 5.7.42.36.79 1.06.79 2.14v3.17c0 .3.2.66.79.55A11.5 11.5 0 0023.5 12 11.5 11.5 0 0012 .5z"/></svg>',
    web: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 010 18M12 3a15 15 0 000 18"/></svg>'
  };

  const P = window.PORTFOLIO;

  /* ---------------------------------------------------------------- hero */
  function renderHero() {
    $("#heroName").textContent = P.profile.name;
    $("#heroTagline").textContent = P.profile.tagline;
    $("#heroSub").textContent = P.profile.subtagline;
    $("#heroInstitution").textContent = "🎓 " + P.profile.institution;
    $("#heroLocation").textContent = "📍 " + P.profile.location;
    const photo = $("#heroPhoto");
    photo.src = P.profile.photo;
    photo.alt = P.profile.name;

    const c = P.contacts;
    const socials = [
      c.linkedin && { icon: "linkedin", url: c.linkedin, label: "LinkedIn" },
      c.scholar && { icon: "scholar", url: c.scholar, label: "Google Scholar" },
      c.orcid && { icon: "orcid", url: c.orcid, label: "ORCID" },
      c.emailPrimary && { icon: "mail", url: "mailto:" + c.emailPrimary, label: "Email" }
    ].filter(Boolean);
    const wrap = $("#heroSocials");
    socials.forEach((s) => {
      const a = el("a", null, ICONS[s.icon]);
      a.href = s.url;
      a.setAttribute("aria-label", s.label);
      if (s.url.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
      wrap.appendChild(a);
    });
  }

  /* ---------------------------------------------------------------- about */
  function renderAbout() {
    const t = $("#aboutText");
    P.profile.about.forEach((p) => t.appendChild(el("p", null, p)));

    const grid = $("#statGrid");
    P.stats.forEach((s) => {
      const card = el("div", "stat-card");
      card.appendChild(el("div", "stat-value", s.value));
      card.appendChild(el("div", "stat-label", s.label));
      grid.appendChild(card);
    });

    $("#cvAcademic").href = P.profile.resumeAcademic;
    $("#cvProfessional").href = P.profile.resumeProfessional;
  }

  /* ---------------------------------------------------------------- research */
  function renderResearch() {
    $("#researchIntro").textContent = P.research.intro;
    const grid = $("#researchGrid");
    P.research.interests.forEach((r) => {
      const card = el("div", "research-card");
      card.setAttribute("data-reveal", "");
      card.appendChild(el("div", "research-icon", ICONS[r.icon] || ICONS.chip));
      card.appendChild(el("h4", null, r.title));
      card.appendChild(el("p", null, r.text));
      grid.appendChild(card);
    });

    const ongoing = $("#ongoingList");
    P.research.ongoing.forEach((o) => {
      const item = el("div", "ongoing-item");
      item.setAttribute("data-reveal", "");
      item.appendChild(el("h4", null, o.title));
      item.appendChild(el("p", null, o.text));
      ongoing.appendChild(item);
    });
  }

  /* ---------------------------------------------------------------- experience */
  function renderExperience() {
    const tl = $("#experienceTimeline");
    P.experience.forEach((x) => {
      const item = el("div", "tl-item");
      item.setAttribute("data-reveal", "");
      item.appendChild(el("div", "tl-period", x.period));
      item.appendChild(el("div", "tl-role", x.role));
      item.appendChild(el("div", "tl-org", x.org));
      item.appendChild(el("div", "tl-loc", x.location));
      const ul = el("ul", "tl-points");
      x.points.forEach((pt) => ul.appendChild(el("li", null, pt)));
      item.appendChild(ul);
      tl.appendChild(item);
    });

    const edu = $("#educationList");
    P.education.forEach((e) => {
      const card = el("div", "edu-card");
      card.setAttribute("data-reveal", "");
      card.appendChild(el("div", "edu-degree", e.degree));
      card.appendChild(el("div", "edu-school", e.school));
      card.appendChild(el("div", "edu-meta", e.location + " · " + e.period));
      edu.appendChild(card);
    });
  }

  /* ---------------------------------------------------------------- projects */
  function renderProjects() {
    const cats = ["All", ...Array.from(new Set(P.projects.map((p) => p.category)))];
    const filterBar = $("#projectFilters");
    cats.forEach((c, i) => {
      const b = el("button", "filter-btn" + (i === 0 ? " active" : ""), c);
      b.dataset.cat = c;
      b.addEventListener("click", () => applyFilter(c, b));
      filterBar.appendChild(b);
    });

    const grid = $("#projectGrid");
    P.projects.forEach((p) => {
      const card = el("div", "project-card");
      card.setAttribute("data-reveal", "");
      card.dataset.cat = p.category;
      card.appendChild(el("div", "project-cat", p.category));
      card.appendChild(el("h4", null, p.title));
      card.appendChild(el("p", null, p.text));
      const tags = el("div", "project-tags");
      p.tags.forEach((t) => tags.appendChild(el("span", null, t)));
      card.appendChild(tags);
      grid.appendChild(card);
    });
  }

  function applyFilter(cat, btn) {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    document.querySelectorAll(".project-card").forEach((card) => {
      const show = cat === "All" || card.dataset.cat === cat;
      card.classList.toggle("hide", !show);
    });
  }

  /* ---------------------------------------------------------------- publications */
  function renderPublications() {
    const list = $("#publicationList");
    P.publications.forEach((pub) => {
      const item = el("div", "pub-item");
      item.setAttribute("data-reveal", "");
      item.appendChild(el("div", "pub-year", pub.year));
      const body = el("div");
      body.appendChild(el("div", "pub-title", pub.title));
      body.appendChild(el("div", "pub-authors", pub.authors));
      body.appendChild(el("div", "pub-venue", pub.venue));
      if (pub.doi) {
        const a = el("a", "pub-doi", ICONS.web + "View Publication");
        a.href = pub.doi; a.target = "_blank"; a.rel = "noopener";
        body.appendChild(a);
      }
      item.appendChild(body);
      list.appendChild(item);
    });

    const ack = $("#acknowledgeList");
    P.acknowledgements.forEach((a) => {
      const item = el("div", "ack-item");
      item.setAttribute("data-reveal", "");
      item.innerHTML = a.text + (a.doi ? ' <a href="' + a.doi + '" target="_blank" rel="noopener">[DOI]</a>' : "");
      ack.appendChild(item);
    });
  }

  /* ---------------------------------------------------------------- skills */
  function renderSkills() {
    const grid = $("#skillGrid");
    P.skills.forEach((s) => {
      const card = el("div", "skill-card");
      card.setAttribute("data-reveal", "");
      card.appendChild(el("h4", null, s.group));
      const tags = el("div", "skill-tags");
      s.items.forEach((i) => tags.appendChild(el("span", null, i)));
      card.appendChild(tags);
      grid.appendChild(card);
    });
  }

  /* ---------------------------------------------------------------- beyond */
  function renderBeyond() {
    const awards = $("#awardList");
    P.awards.forEach((a) => {
      const card = el("div", "mini-card");
      card.innerHTML =
        '<div class="award-badge"><span class="medal">🏆</span><div>' +
        '<div class="mini-title">' + a.title + "</div>" +
        '<div class="mini-org">' + a.org + "</div>" +
        '<div class="mini-date">' + a.year + "</div></div></div>";
      awards.appendChild(card);
    });

    const speaking = $("#speakingList");
    P.speaking.forEach((s) => {
      const card = el("div", "mini-card");
      card.appendChild(el("div", "mini-title", s.role + " — " + s.title));
      card.appendChild(el("div", "mini-org", s.org));
      card.appendChild(el("div", "mini-date", s.date));
      speaking.appendChild(card);
    });

    const lead = $("#leadershipList");
    P.leadership.forEach((l) => {
      const card = el("div", "mini-card");
      card.appendChild(el("div", "mini-title", l.role));
      card.appendChild(el("div", "mini-org", l.org));
      card.appendChild(el("div", "mini-date", l.date));
      lead.appendChild(card);
    });
  }

  /* ---------------------------------------------------------------- contact */
  function renderContact() {
    const c = P.contacts;
    const grid = $("#contactGrid");
    const cards = [
      { icon: "mail", label: "Email (University)", value: c.emailPrimary, url: "mailto:" + c.emailPrimary },
      { icon: "mail", label: "Email (Personal)", value: c.emailSecondary, url: "mailto:" + c.emailSecondary },
      { icon: "phone", label: "Phone", value: c.phone, url: "tel:" + c.phone.replace(/\s/g, "") },
      { icon: "linkedin", label: "LinkedIn", value: "in/md-mushfiqur-rahaman", url: c.linkedin },
      { icon: "scholar", label: "Google Scholar", value: "Publications & Citations", url: c.scholar },
      { icon: "orcid", label: "ORCID", value: "0009-0005-2418-817X", url: c.orcid }
    ];
    cards.forEach((card) => {
      const a = el("a", "contact-card");
      a.href = card.url;
      if (card.url.startsWith("http")) { a.target = "_blank"; a.rel = "noopener"; }
      a.appendChild(el("div", "contact-ic", ICONS[card.icon]));
      const info = el("div");
      info.appendChild(el("div", "contact-label", card.label));
      info.appendChild(el("div", "contact-value", card.value));
      a.appendChild(info);
      grid.appendChild(a);
    });

    $("#footerName").textContent = "© " + P.profile.name;
    $("#footerYear").textContent = "2026";
  }

  /* ---------------------------------------------------------------- theme */
  function initTheme() {
    const saved = localStorage.getItem("theme");
    if (saved) document.documentElement.setAttribute("data-theme", saved);
    $("#themeToggle").addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme");
      const next = cur === "dark" ? "light" : "dark";
      document.documentElement.setAttribute("data-theme", next);
      localStorage.setItem("theme", next);
    });
  }

  /* ---------------------------------------------------------------- nav + scroll */
  function initNav() {
    const navbar = $("#navbar");
    const toggle = $("#navToggle");
    const links = $("#navLinks");
    const progress = $("#scrollProgress");
    const toTop = $("#toTop");

    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open);
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );

    const onScroll = () => {
      const y = window.scrollY;
      navbar.classList.toggle("scrolled", y > 40);
      toTop.classList.toggle("show", y > 600);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
      highlightNav();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    toTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  }

  function highlightNav() {
    const sections = document.querySelectorAll("main section[id]");
    let current = "";
    const pos = window.scrollY + 120;
    sections.forEach((s) => {
      if (pos >= s.offsetTop) current = s.id;
    });
    document.querySelectorAll(".nav-links a").forEach((a) => {
      a.style.color = a.getAttribute("href") === "#" + current ? "var(--accent)" : "";
    });
  }

  /* ---------------------------------------------------------------- reveal */
  function initReveal() {
    const els = document.querySelectorAll("[data-reveal]");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    els.forEach((e) => io.observe(e));
  }

  /* ---------------------------------------------------------------- init */
  document.addEventListener("DOMContentLoaded", () => {
    renderHero();
    renderAbout();
    renderResearch();
    renderExperience();
    renderProjects();
    renderPublications();
    renderSkills();
    renderBeyond();
    renderContact();
    initTheme();
    initNav();
    initReveal();
  });
})();
