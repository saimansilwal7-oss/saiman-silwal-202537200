import React from "react";

function ProjectCard({ project }) {
  const { title, description, techStack, githubUrl, demoUrl } = project;

  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="project-number">PROJECT / {String(project.id).padStart(2, "0")}</span>
        <span className="project-mark" aria-hidden="true">↗</span>
      </div>

      <h3>{title}</h3>
      <p className="project-description">{description}</p>

      <div className="tech-stack" aria-label="Technology stack">
        {techStack.map((technology) => (
          <span className="tech-tag" key={technology}>{technology}</span>
        ))}
      </div>

      <div className="project-links">
        <a href={githubUrl} target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        {demoUrl ? (
          <a className="demo-link" href={demoUrl} target="_blank" rel="noreferrer">Live demo <span aria-hidden="true">↗</span></a>
        ) : (
          <span className="project-status">Still working on it</span>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;