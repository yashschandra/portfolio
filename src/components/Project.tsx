import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                {/*<a href="https://github.com/yashschandra/upscayl-cli" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>*/}
                <a href="https://github.com/yashschandra/upscayl-cli" target="_blank" rel="noreferrer"><h2>Upscayl CLI</h2></a>
                <p>Built a CLI tool for AI powered image upscaling eliminating need for GUI.</p>
            </div>
            <div className="project">
                {/*<a href="https://github.com/yashschandra/deardiary" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>*/}
                <a href="https://github.com/yashschandra/deardiary" target="_blank" rel="noreferrer"><h2>Dear Diary</h2></a>
                <p>Developed a voice based serverless AI diary app using Whisper and Ollama running on AWS Lambda and DynamoDB.</p>
            </div>
            <div className="project">
                {/*<a href="https://github.com/yashschandra/powerspeech" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>*/}
                <a href="https://github.com/yashschandra/powerspeech" target="_blank" rel="noreferrer"><h2>Power Speech</h2></a>
                <p>Created a local speech correction tool using Whisper Ollama and MeloTTS.</p>
            </div>
            <div className="project">
                {/*<a href="https://github.com/yashschandra/FreeTube" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>*/}
                <a href="https://github.com/yashschandra/FreeTube" target="_blank" rel="noreferrer"><h2>FreeTube</h2></a>
                <p>Built a Puppeteer based YouTube browser for ad free video playback.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
