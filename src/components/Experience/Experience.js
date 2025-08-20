import React, { useState } from 'react';
import '../Global.css';
import './Experience.css';
import companies from './data/experienceData'

const Experience = () => {

  

  const [selectedCompany, setSelectedCompany] = useState(0);
  const [selectedRole, setSelectedRole] = useState(0);

  const company = companies[selectedCompany];
  const roles = company.roles;

  return (
    <div class="content-div">
      <h1>Experience</h1>
      <p>
        Below you will find a timeline of my professional experience, detailing the companies I've worked for, the roles I've held, and the key contributions I've made.
        Click on a company to view the roles and their details.
        If you have any questions or would like to discuss my experience further, please feel free to reach out!
      </p>    
      <div class="gradient-divider"></div>
      <div class="timeline-container">
        <div class="timeline">
          {companies.map((company, idx) => (
            
            <React.Fragment key={company.name}>
              <div
                key={company.name}
                class={`timeline-item${selectedCompany === idx ? ' active' : ''}`}
                onClick={() => {
                  setSelectedCompany(idx);
                  setSelectedRole(0);
                }}
              >
                <div class="timeline-dot" />
                <div class="timeline-label">
                  <strong>{company.name}</strong>
                  <span>{company.period}</span>
                </div>
              </div>
              {idx < companies.length - 1 && (
                <div class="timeline-line"></div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div class="timeline-details">
          <div class="roles-list">
            {roles.map((role, idx) => (
              <div
                key={role.title}
                class={`role-item${selectedRole === idx ? ' active' : ''}`}
                onClick={() => setSelectedRole(idx)}
                style={{ cursor: 'pointer', marginBottom: '10px' }}
              >
                {role.title} <span class="role-period">{role.period}</span>
              </div>
            ))}
          </div>
          <div class="role-details">
            {roles[selectedRole].details}
          </div>
        </div>
      </div>
      <sub>
        My previous career history is not techncial so its excluded from this timeline. If you want to know more about what I did before my IT career, please feel free to reach out!
      </sub>
    </div>
  );
};

export default Experience;