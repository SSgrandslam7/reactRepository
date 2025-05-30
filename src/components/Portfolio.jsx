import React from 'react';
import Project from './Project';

function Portfolio() {
  const projects = [
    // Add your project details here
    {
      title: 'Project 1',
      image: 'path/to/image1.png',
      deployedLink: 'https://deployed1.com',
      repoLink: 'https://github.com/user/project1'
    },
    // Repeat for other projects...
  ];

  return (
    <div>
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  );
}

export default Portfolio;