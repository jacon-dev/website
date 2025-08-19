import React, { useState } from 'react';
import './Global.css';
import './Experience.css';
import companies from './experienceData'

const Experience = () => {

  

  const [selectedCompany, setSelectedCompany] = useState(0);
  const [selectedRole, setSelectedRole] = useState(0);

  const company = companies[selectedCompany];
  const roles = company.roles;

  return (
    <div className="content-div">
      <h1>Experience</h1>
      <p>
        Below you will find a timeline of my professional experience, detailing the companies I've worked for, the roles I've held, and the key contributions I've made.
        Click on a company to view the roles and their details.
        If you have any questions or would like to discuss my experience further, please feel free to reach out!
      </p>    
      <div class="gradient-divider"></div>
      <div className="timeline-container">
        <div className="timeline">
          {companies.map((company, idx) => (
            <div
              key={company.name}
              className={`timeline-item${selectedCompany === idx ? ' active' : ''}`}
              onClick={() => {
                setSelectedCompany(idx);
                setSelectedRole(0);
              }}
            >
              <div className="timeline-dot" />
              <div className="timeline-label">
                <strong>{company.name}</strong>
                <span>{company.period}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="timeline-details">
          <div className="roles-list">
            {roles.map((role, idx) => (
              <div
                key={role.title}
                className={`role-item${selectedRole === idx ? ' active' : ''}`}
                onClick={() => setSelectedRole(idx)}
                style={{ cursor: 'pointer', marginBottom: '10px' }}
              >
                {role.title} <span class="role-period">{role.period}</span>
              </div>
            ))}
          </div>
          <div className="role-details">
            {roles[selectedRole].details}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;