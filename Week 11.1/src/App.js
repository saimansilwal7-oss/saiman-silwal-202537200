import React, { useMemo, useState } from "react";
import FilterBar from "./components/FilterBar";
import ProjectList from "./components/ProjectList";
import projects from "./data/projects";

function App() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "ALL") return projects;
    return projects.filter((project) =>
      project.category.includes(activeFilter) ||
      project.techStack.some((technology) =>
        technology.toUpperCase() === activeFilter
      )
    );
  }, [activeFilter]);

  return (
    <main className="page-shell">
      <header className="hero">
        <div className="hero-topline">
          <span className="eyebrow">WEB PROGRAMMING / WEEK 11.1</span>
          <span className="student-id">STUDENT · 202537200</span>
        </div>
        <p className="hero-kicker">A collection of things I've built</p>
        <h1>My Project<br /><span>Gallery.</span></h1>
        <p className="hero-description">
          I'm Saiman Silwal. I'm studying Computer Engineering and still learning web development step by step. These are some of the projects I've worked on. You can use the buttons below to filter them.
        </p>
        <a className="hero-link" href="https://github.com/saimansilwal7-oss" target="_blank" rel="noreferrer">
          Explore my GitHub <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="gallery-section" aria-labelledby="gallery-title">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SELECTED WORK</span>
            <h2 id="gallery-title">Projects <span>({filteredProjects.length})</span></h2>
          </div>
          <p>Choose a technology to filter the gallery.</p>
        </div>

        <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        <ProjectList projects={filteredProjects} />
      </section>

      <footer className="page-footer">
        <span>SAIMAN SILWAL · 202537200</span>
        <span>Built with React</span>
      </footer>
    </main>
  );
}

export default App;