import React, { useState } from 'react';
import '../Global.css';
import './Projects.css';
import projects from './data/projectData';

const Projects = () => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="content-div">
      <h1>Projects</h1>
      <p>
        While family tends to fill my time, I also enjoy working on personal projects that allow me to apply my skills and learn new technologies.
        Below is a selection of my recent projects that I have worked on, or am still working on. 
        If you have any questions or would like to discuss these projects further, or want to collaborate on something please feel free to reach out!
      </p>
      <div className="gradient-divider"></div>
      <div className="projects-container">
        <div className="projects-timeline">
          {projects.map((project, idx) => (
            <div
              key={project.name}
              className={`project-item${selected === idx ? ' active' : ''}`}
              onClick={() => setSelected(idx)}
            >
              <div className="project-dot" />
              <div className="project-label">
                <strong>{project.name}</strong>
              </div>
              {idx < projects.length - 1 && (
                <div className="project-line"></div>
              )}
            </div>
          ))}
        </div>
        <div className="project-details">
          {projects[selected].details}
        </div>
      </div>
    </div>
  );
};

export default Projects;