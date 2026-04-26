"use client";

import { useMemo, useState } from "react";
import Header from "../components/Header";
import ResumeModal from "../components/ResumeModal";

const TOOLS = [
  { name: "Python", group: "AI / Data", icon: "PY" },
  { name: "TensorFlow", group: "AI / Data", icon: "TF" },
  { name: "PyTorch", group: "AI / Data", icon: "PT" },
  { name: "OpenCV", group: "AI / Data", icon: "CV" },
  { name: "Pandas", group: "AI / Data", icon: "PD" },
  { name: "JavaScript", group: "Frontend", icon: "JS" },
  { name: "React", group: "Frontend", icon: "RX" },
  { name: "Next.js", group: "Frontend", icon: "NX" },
  { name: "CSS", group: "Frontend", icon: "CS" },
  { name: "FastAPI", group: "Backend", icon: "FA" },
  { name: "SQL", group: "Backend", icon: "SQ" },
  { name: "MongoDB", group: "Backend", icon: "MO" },
  { name: "PostgreSQL", group: "Backend", icon: "PG" },
  { name: "Git", group: "Workflow", icon: "GT" },
  { name: "Vercel", group: "Workflow", icon: "VC" },
  { name: "Google Cloud", group: "Workflow", icon: "GC" },
];

const EXPERIENCE = [
  {
    title: "Student Tutor",
    org: "Center for Academic Excellence, Hofstra University",
    date: "September 2023 - Present",
    kind: "Teaching",
    desc: "Tutor students in Python, C++, and Java while breaking down algorithms, debugging patterns, and core programming concepts into clear, teachable steps.",
  },
  {
    title: "Project Management Intern",
    org: "Delivery Hobe, Bangladesh",
    date: "June 2022 - December 2022",
    kind: "Operations",
    desc: "Coordinated three product launches, ran stand-ups, tracked blockers, and supported 1,000 voice-order confirmations during the first month of rollout.",
  },
  {
    title: "Branding Intern",
    org: "ZSA Interweave, Bangladesh",
    date: "January 2021 - October 2021",
    kind: "Web",
    desc: "Built a Next.js company website, secured Google verification, and contributed to measurable growth in digital reach and audience engagement.",
  },
];

const PROJECTS = [
  {
    title: "Deep Guard",
    type: "AI",
    stack: ["Python", "TensorFlow", "OpenCV"],
    impact: "Dual image and video analysis pipelines",
    desc: "Designed a deepfake detection system with ensemble CNNs for image classification and an EfficientNet + LSTM model for sequential video analysis.",
  },
  {
    title: "ETF Recommender",
    type: "Data",
    stack: ["Python", "SQL", "MongoDB"],
    impact: "Normalized scraped market data",
    desc: "Scraped and normalized financial data with Selenium, BeautifulSoup, and Pandas, then used SQL analysis to surface ticker correlations and performance trends.",
  },
  {
    title: "Hoftaps",
    type: "Web",
    stack: ["HTML", "JavaScript", "CSS", "Firebase"],
    impact: "Peer-to-peer textbook marketplace",
    desc: "Built with vanilla JavaScript, Firebase Authentication, and Firestore. Handles real-time listing updates, user session management, and client-side routing without any frontend framework.",
  },
  {
    title: "Classification Analysis",
    type: "AI",
    stack: ["Python", "scikit-learn", "Matplotlib"],
    impact: "Model behavior comparison",
    desc: "Compared Perceptron, Logistic Regression, and Decision Tree models with ROC-AUC, loss curves, accuracy scoring, and decision boundary plots.",
  },
  {
    title: "RoboPathFinder",
    type: "Systems",
    stack: ["C", "Algorithms"],
    impact: "Autonomous pathfinding logic",
    desc: "Programmed an autonomous robot control system in C with low-level pathfinding logic and efficient decision flow.",
  },
];

const HONORS = [
  {
    title: "Theta Tau",
    desc: "Scribe and Brotherhood Chair since October 2023, contributing to collaborative engineering projects and hackathon activities.",
  },
  {
    title: "Academic Distinction",
    desc: "Recognized by Rabinowitz Honors College in January 2025.",
  },
  {
    title: "Duke of Edinburgh Award",
    desc: "Gold, Silver, and Bronze distinctions earned between 2017 and 2020.",
  },
];

const FILTERS = ["All", "AI", "Data", "Web", "Systems"];
const TOOL_GROUPS = ["AI / Data", "Frontend", "Backend", "Workflow"];

function Icon({ name }) {
  const paths = {
    mail: "M4 6h16v12H4z M4 7l8 6 8-6",
    github: "M9 19c-4 1.5-4-2-5-2m10 4v-3.5c0-1 .3-1.7 1-2.3-3.3-.4-6.8-1.7-6.8-7.5 0-1.7.6-3 1.6-4.1-.2-.4-.7-2 .2-4.1 0 0 1.3-.4 4.2 1.6a14 14 0 0 1 7.6 0C24.7-.4 26 0 26 0c.9 2.1.4 3.7.2 4.1 1 1.1 1.6 2.4 1.6 4.1 0 5.8-3.5 7.1-6.9 7.5.6.5 1.1 1.5 1.1 3V22",
    arrow: "M5 12h14m-6-6 6 6-6 6",
    search: "M11 19a8 8 0 1 1 5.7-2.3L21 21",
    moon: "M21 12.8A8.5 8.5 0 1 1 11.2 3 7 7 0 0 0 21 12.8z",
    sun: "M12 4V2m0 20v-2m8-8h2M2 12h2m14.4-6.4 1.4-1.4M4.2 19.8l1.4-1.4m0-12.8L4.2 4.2m15.6 15.6-1.4-1.4M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z",
    menu: "M4 7h16M4 12h16M4 17h16",
    close: "M6 6l12 12M18 6 6 18",
    chevron: "M6 9l6 6 6-6",
  };

  return (
    <svg aria-hidden="true" className="icon" fill="none" viewBox="0 0 24 24">
      <path d={paths[name]} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
    </svg>
  );
}

function MetricCard({ value, label, active }) {
  return (
    <article className={`metric-card ${active ? "is-active" : ""}`}>
      <span className="metric-value">{value}</span>
      <span className="metric-label">{label}</span>
    </article>
  );
}

function ProjectExplorer() {
  const [filter, setFilter] = useState("All");
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(PROJECTS[0]);

  const visibleProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesFilter = filter === "All" || project.type === filter;
      const searchable = `${project.title} ${project.type} ${project.stack.join(" ")} ${project.desc}`.toLowerCase();
      return matchesFilter && searchable.includes(query.toLowerCase());
    });
  }, [filter, query]);

  return (
    <section className="section-panel" id="projects">
      <div className="section-heading">
        <p className="eyebrow">Projects</p>
        <h2>Five projects. Three domains. One consistent standard.</h2>
      </div>

      <div className="project-shell">
        <div className="command-panel">
          <label className="search-box">
            <Icon name="search" />
            <span className="sr-only">Search projects</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search projects, tools, or outcomes"
            />
          </label>

          <div className="segmented-control" role="tablist" aria-label="Project filters">
            {FILTERS.map((item) => (
              <button
                aria-selected={filter === item}
                className={filter === item ? "is-selected" : ""}
                key={item}
                onClick={() => setFilter(item)}
                role="tab"
                type="button"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="project-list" aria-live="polite">
            {visibleProjects.map((project) => (
              <button
                className={`project-row ${selected.title === project.title ? "is-active" : ""}`}
                key={project.title}
                onClick={() => setSelected(project)}
                type="button"
              >
                <span>
                  <strong>{project.title}</strong>
                  <small>{project.impact}</small>
                </span>
                <span className="tag">{project.type}</span>
              </button>
            ))}
            {visibleProjects.length === 0 && (
              <p className="empty-state">No matching projects. Try a broader search.</p>
            )}
          </div>
        </div>

        <article className="project-detail">
          <p className="eyebrow">{selected.type}</p>
          <h3>{selected.title}</h3>
          <p>{selected.desc}</p>
          <div className="stack-list">
            {selected.stack.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function SkillsWorkbench() {
  const [activeGroup, setActiveGroup] = useState("AI / Data");
  const activeTools = TOOLS.filter((tool) => tool.group === activeGroup);

  return (
    <section className="section-panel section-grid" id="about">
      <div className="section-heading">
        <p className="eyebrow">Skills Workbench</p>
        <h2>A practical stack across models, interfaces, APIs, and data pipelines.</h2>
      </div>

      <div className="skills-panel">
        <div className="tab-list" role="tablist" aria-label="Skill groups">
          {TOOL_GROUPS.map((group) => (
            <button
              aria-selected={activeGroup === group}
              className={activeGroup === group ? "is-selected" : ""}
              key={group}
              onClick={() => setActiveGroup(group)}
              role="tab"
              type="button"
            >
              {group}
            </button>
          ))}
        </div>

        <div className="skill-card-grid">
          {activeTools.map((tool) => (
            <article className="skill-chip-card" data-group={tool.group} key={tool.name}>
              <span className="skill-icon" aria-hidden="true">{tool.icon}</span>
              <strong>{tool.name}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-panel" id="experience">
      <div className="section-heading compact-heading">
        <p className="eyebrow">Experience</p>
        <h2>Roles shaped by teaching, coordination, and digital execution.</h2>
      </div>

      <div className="accordion">
        {EXPERIENCE.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <article className={`accordion-item ${isOpen ? "is-open" : ""}`} key={item.title}>
              <button
                aria-controls={`experience-${index}`}
                aria-expanded={isOpen}
                className="accordion-trigger"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                type="button"
              >
                <span>
                  <small>{item.kind}</small>
                  <strong>{item.title}</strong>
                  <em>{item.org}</em>
                </span>
                <span className="accordion-date">{item.date}</span>
                <Icon name="chevron" />
              </button>
              <div className="accordion-content" hidden={!isOpen} id={`experience-${index}`}>
                <p>{item.desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function HonorsStrip() {
  return (
    <section className="honors-strip" aria-label="Leadership and honors">
      {HONORS.map((honor) => (
        <article key={honor.title}>
          <h3>{honor.title}</h3>
          <p>{honor.desc}</p>
        </article>
      ))}
    </section>
  );
}

export default function Home() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>

      <div className={`page-shell ${darkMode ? "theme-dark" : ""}`}>
        <Header darkMode={darkMode} onThemeToggle={() => setDarkMode((value) => !value)} />

        <main id="main">
          <section className="hero-section" id="top">
            <div className="hero-copy">
              <p className="hero-name">Awab Abedin</p>
              <p className="eyebrow">Computer Science and Artificial Intelligence Student</p>
              <h1>Full-stack engineer with a focus on applied machine learning.</h1>
              <p className="hero-text">
                Computer science and AI student at Hofstra University, shipping machine learning
                pipelines, full-stack web apps, and data-driven products.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="mailto:abedinawab1@gmail.com">
                  <Icon name="mail" />
                  Email Awab
                </a>
                <button className="button button-secondary" onClick={() => setResumeOpen(true)} type="button">
                  View Resume
                  <Icon name="arrow" />
                </button>
                <a className="icon-button" href="https://github.com/Abedin02" target="_blank" rel="noreferrer" aria-label="Open GitHub profile">
                  <Icon name="github" />
                </a>
              </div>
            </div>

            <aside className="profile-console" aria-label="Portfolio summary">
              <div className="console-top">
                <span className="avatar-mark">AA</span>
                <div>
                  <p>Currently</p>
                  <strong>Hofstra University</strong>
                </div>
              </div>
              <p className="console-copy">
                BS in Computer Science and Artificial Intelligence. Expected graduation: May 2026.
              </p>
              <div className="metric-grid">
                <MetricCard active label="Cumulative GPA" value="3.20" />
                <MetricCard label="Graduation" value="2026" />
                <MetricCard label="Key Projects" value="5+" />
                <MetricCard label="Career Roles" value="3" />
              </div>
            </aside>
          </section>

          <SkillsWorkbench />
          <ExperienceAccordion />
          <ProjectExplorer />
          <HonorsStrip />
        </main>

        <footer className="site-footer" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Let us build something useful.</h2>
          </div>
          <div className="footer-actions">
            <a className="button button-primary" href="mailto:abedinawab1@gmail.com">
              <Icon name="mail" />
              Start a Conversation
            </a>
            <a className="button button-secondary" href="tel:+16317100270">
              (631) 710-0270
            </a>
          </div>
        </footer>
      </div>

      {resumeOpen && <ResumeModal onClose={() => setResumeOpen(false)} />}
    </>
  );
}
