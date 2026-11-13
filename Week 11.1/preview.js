const h = React.createElement;
const galleryProjects = [
  { id: 1, title: "Personal Portfolio Website", description: "A responsive personal website introducing my background, skills, coursework, and contact information.", tech: ["HTML", "CSS", "JavaScript"], github: "https://github.com/saimansilwal7-oss/portfolio", demo: "https://saimansilwal7-oss.github.io/portfolio/" },
  { id: 2, title: "Web Programming Assignment Archive", description: "A weekly collection of web programming exercises, API practice, forms, accessibility work, and project showcases.", tech: ["HTML", "CSS", "JavaScript"], github: "https://github.com/saimansilwal7-oss/WEB-PROGRAMMING", demo: "https://saimansilwal7-oss.github.io/saiman-silwal-202537200/" },
  { id: 3, title: "Cloud-Based Assignment System", description: "A course project in progress exploring student submissions, instructor grading, cloud storage, and secure access.", tech: ["Node.js", "Cloud", "JavaScript"], github: "https://github.com/saimansilwal7-oss/saiman-silwal-202537200", demo: "https://saimansilwal7-oss.github.io/saiman-silwal-202537200/" },
  { id: 4, title: "React Portfolio Gallery", description: "A component-based gallery demonstrating reusable React cards and technology filtering.", tech: ["React", "JavaScript", "CSS"], github: "https://github.com/saimansilwal7-oss/saiman-silwal-202537200/tree/main/Week%2011.1", demo: "https://saimansilwal7-oss.github.io/saiman-silwal-202537200/Week%2011.1/preview.html" }
];
function ProjectCard({ project }) {
  return h("article", { className: "project-card" },
    h("div", { className: "project-card-top" }, h("span", { className: "project-number" }, "PROJECT / " + String(project.id).padStart(2, "0")), h("span", { className: "project-mark", "aria-hidden": "true" }, "↗")),
    h("h3", null, project.title),
    h("p", { className: "project-description" }, project.description),
    h("div", { className: "tech-stack", "aria-label": "Technology stack" }, project.tech.map((tag) => h("span", { className: "tech-tag", key: tag }, tag))),
    h("div", { className: "project-links" },
      h("a", { href: project.github, target: "_blank", rel: "noreferrer" }, "GitHub ↗"),
      h("a", { className: "demo-link", href: project.demo, target: "_blank", rel: "noreferrer" }, "Live demo ↗")
    )
  );
}
function ProjectList({ projects }) {
  return projects.length
    ? h("div", { className: "project-grid" }, projects.map((project) => h(ProjectCard, { project, key: project.id })))
    : h("p", { className: "empty-state" }, "No projects match this technology yet.");
}
function FilterBar({ activeFilter, onFilterChange }) {
  return h("div", { className: "filter-bar", role: "group", "aria-label": "Filter projects by technology" },
    ["ALL", "REACT", "NODE", "CSS"].map((filter) => h("button", {
      key: filter, type: "button",
      className: activeFilter === filter ? "filter-button active" : "filter-button",
      "aria-pressed": activeFilter === filter,
      onClick: () => onFilterChange(filter)
    }, filter))
  );
}
function App() {
  const [activeFilter, setActiveFilter] = React.useState("ALL");
  const visible = galleryProjects.filter((project) => activeFilter === "ALL" || project.tech.some((tech) => tech.toUpperCase() === activeFilter));
  return h("main", { className: "page-shell" },
    h("header", { className: "hero" },
      h("div", { className: "hero-topline" }, h("span", { className: "eyebrow" }, "WEB PROGRAMMING / WEEK 11.1"), h("span", { className: "student-id" }, "STUDENT · 202537200")),
      h("p", { className: "hero-kicker" }, "A collection of things I've built"),
      h("h1", null, "My Project", h("br"), h("span", null, "Gallery.")),
      h("p", { className: "hero-description" }, "I'm Saiman Silwal, a Computer Engineering student learning by building. Explore my projects and filter them by the technologies I use."),
      h("a", { className: "hero-link", href: "https://github.com/saimansilwal7-oss", target: "_blank", rel: "noreferrer" }, "Explore my GitHub ↗")
    ),
    h("section", { className: "gallery-section", "aria-labelledby": "gallery-title" },
      h("div", { className: "section-heading" },
        h("div", null, h("span", { className: "eyebrow" }, "SELECTED WORK"), h("h2", { id: "gallery-title" }, "Projects ", h("span", null, "(" + visible.length + ")"))),
        h("p", null, "Choose a technology to filter the gallery.")
      ),
      h(FilterBar, { activeFilter, onFilterChange: setActiveFilter }),
      h(ProjectList, { projects: visible })
    ),
    h("footer", { className: "page-footer" }, h("span", null, "SAIMAN SILWAL · 202537200"), h("span", null, "Built with React"))
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(h(React.StrictMode, null, h(App)));