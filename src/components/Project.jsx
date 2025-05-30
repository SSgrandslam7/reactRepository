import React from 'react';

function Project({ title, image, deployedLink, repoLink }) {
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} alt={`${title} screenshot`} />
      <p>
        <a href={deployedLink} target="_blank" rel="noreferrer">Live Site</a> | 
        <a href={repoLink} target="_blank" rel="noreferrer">GitHub Repo</a>
      </p>
    </div>
  );
}

export default Project;