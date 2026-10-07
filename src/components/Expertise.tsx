import React from "react";
import resume from '../resume.json';
import '../assets/styles/Expertise.scss';

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>About Me</h1>
                <p>{resume.summary}</p>
                <h2>Technical Skills</h2>
                {resume.skills.map(({category, items}) => (
                    <p key={category}><strong>{category}:</strong> {items}</p>
                ))}
            </div>
        </div>
    );
}

export default Expertise;
