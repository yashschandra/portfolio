import React from "react";
import resume from '../resume.json';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <>
            <div className="projects-container" id="projects">
                <h1>Personal Projects</h1>
                <div className="projects-grid">
                    {resume.projects.map(({name, description, url}) => (
                        <div className="project" key={name}>
                            {url ? <a href={url} target="_blank" rel="noreferrer"><h2>{name}</h2></a> : <h2>{name}</h2>}
                            <p>{description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="projects-container" id="open-source">
                <h1>Open-Source Contributions</h1>
                <div className="projects-grid">
                    {resume.contributions.map(({name, description, url}) => (
                        <div className="project" key={name}>
                            <a href={url || undefined} target="_blank" rel="noreferrer"><h2>{name}</h2></a>
                            <p>{description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="projects-container" id="education">
                <h1>Education</h1>
                <h2>Indian Institute of Technology (BHU), Varanasi</h2>
                <p>Bachelor of Technology (B.Tech) | Computer Science</p>
                <p>Jul 2013 - May 2017</p>
            </div>
        </>
    );
}

export default Project;
