import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Golang",
    "Python",
    "JavaScript",
    "Distributed Systems",
    "PostgreSQL",
    "DynamoDB",
    "Redis",
    "Aerospike",
    "Kubernetes",
    "AWS",
    "Docker",
    "Infrastructure Optimization",
    "Web Development",
    "Monitoring and Observability",
    "Automation",
    "GCP"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>About Me</h1>
            <div className="skills-grid">
                <div className="skill">
                    <p>Fullstack software engineer with 8+
                        years of experience in backend
                        engineering, distributed systems,
                        and real time low latency platforms.
                        Skilled in designing and
                        implementing server authoritative
                        gaming architectures, scalable
                        gaming networks, financial risk
                        management modules, vendor
                        settlement systems and consumer
                        provider matchmaking platforms.
                        Proven expertise in leading
                        engineering teams, scaling high
                        traffic systems, optimizing
                        infrastructure costs, and building
                        resilient cloud native applications.
                        Contributor in high impact open
                        source projects including Grafana,
                        RedisInsight, and Anything-LLM.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;
