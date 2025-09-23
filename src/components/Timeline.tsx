import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="Mar 2025 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Staff Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Mobile Premier League (MPL)</h4>
            <p>
              Led a team of 4 developers to design and build MPL’s in house Poker product supporting 5 formats (NLH PLO 4/5/6 Rapid) with millions of monthly users.<br/>
              Designed a new autoscaling deployment architecture reducing infrastructure costs by $40K per month while improving stability.<br/>
              Automated Grafana dashboard panel and alert creation using Grafana SDK enhancing monitoring efficiency and implementing observability as code.<br/>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Oct 2021 - Mar 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Co-Founder & CTO</h3>
            <h4 className="vertical-timeline-element-subtitle">CloudFeather Games (Acquired by MPL)</h4>
            <p>
              Led technical due diligence discussions during the company’s acquisition process with MPL.<br/>
              Contributed to investor presentations and discussions, helping secure $1.25M in seed funding for gaming infrastructure tools.<br/>
              Directed all technical functions including backend DevOps web and Android engineering.<br/>
              Built a scalable real money card game backend processing 50K+ games/day with optimized matchmaking from scratch.<br/>
              Managed a cross functional team of 5 across backend Android web and Unity.<br/>
              Integrated and maintained partnerships with 10+ external gaming platforms (MPL Winzo etc.) for authentication payments and settlements.<br/>
              Developed a Kubernetes based custom game server orchestrator reducing infrastructure costs by 50%.<br/>
              Led end to end development of Bountyverse a social competitive gaming platform with 30+ games and Google Play/Discord integrations with 1000+ DAU.<br/>
              Built a machine learning pipeline using TensorFlow Lite and Keras for score extraction across top games with automated synthetic data generation.<br/>
              Automated daily analytics reporting for 1000+ users using CleverTap and Google Sheets integration.<br/>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Aug 2019 - Oct 2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer (Risk and Settlement)</h3>
            <h4 className="vertical-timeline-element-subtitle">Grab</h4>
            <p>
              Integrated Grab’s fraud detection system with Maybank increasing fraud detection by 3%.<br/>
              Enhanced anti money laundering tools to analyze 100K+ daily transactions creating dashboards for flagged activity.<br/>
              Designed and implemented a Kafka based delay queue replacing cron jobs processing 100K+ settlements in 15 minutes.<br/>
              Built a settlement pipeline enabling instant payouts for 1000+ merchants.<br/>
              Developed a DnD (Docker in Docker) integration testing framework covering Redis PostgreSQL Aerospike and Kafka.<br/>
              Contributed to internal open source tools for code coverage enforcement and introduced structured logging for easier debugging.<br/>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="Dec 2018 - Aug 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Development Engineer (Core Matchmaking)</h3>
            <h4 className="vertical-timeline-element-subtitle">Urban Company</h4>
            <p>
              Increased job fulfilment by implementing a reverse matchmaking system.<br/>
              Implemented bulk scheduling and job assignment algorithms to manage 500+ daily requests and 50+ providers.<br/>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jun 2017 - Dec 2018"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Development Engineer (Samsung DeX)</h3>
            <h4 className="vertical-timeline-element-subtitle">Samsung Electronics</h4>
            <p>
              Built a secondary taskbar for dual screen Samsung DeX mode improving multitasking.<br/>
              Developed Smart View On Display to show notifications and time during phone idle state.<br/>
              Reduced on prem build time by 30% by creating an Android build queue system for a 6 member dev team supporting single build concurrency with failure management.<br/>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="Jun 2015 - Apr 2017"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Founding Member</h3>
            <h4 className="vertical-timeline-element-subtitle">Infistart LLP</h4>
            <p>
              Built a backend system for coaching management handling enrollments fees realtime updates and data sync for 10K+ students.<br/>
              Developed an OMR sheet grading tool processing 50 scans per minute using image preprocessing and feature extraction.<br/>
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="May 2016 - Jul 2016"
              iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">Flipkart</h4>
            <p>
              Contributed to backend systems for Flipkart's internal security dashboard used by 1600 engineers to monitor compliance and system health.<br/>
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;
