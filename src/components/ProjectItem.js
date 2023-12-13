import React from "react";


function ProjectItem({ name, about, technologies }) {
  console.log(name, about, technologies);

  const projectElements = Array.isArray(technologies)
  ? technologies.map(technology => {
    return <span key={technology}>{technology}</span>;
  })
  : null;

  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {projectElements}
      </div>
    </div>
  );
}

export default ProjectItem;
