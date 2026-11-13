import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p className="empty-state">No projects match this technology yet.</p>;
  }

  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;