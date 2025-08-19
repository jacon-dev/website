import React from 'react';
import './Global.css';
import './Achievements.css';

const Achievements = () => (
  <div class="content-div">
    <h1>Achievements</h1>
    <p>
        Below are some of the key achievements in my career that highlight my contributions and impact in various roles.
        If you want to discuss any of these achievements in detail, feel free to reach out!
    </p>    
    <div class="gradient-divider"></div>
    <div class="achievement-columns">
      <div class="achievement-col">
        <section>
          <h2>Sainsbury's Digital, Tech and Data</h2>
          <ul>
            <li>Design and delivery of Core Commercial Transformation program for Finance</li>
            <li>Delivery of Enterprise level integration framework for SAP in Finance area</li>
          </ul>
        </section>
        <section>
          <h2>ENSEK</h2>
          <ul>
            <li>Migration and Delivery of Test Automation Framework from Java to .NET 8</li>
            <li>Successful performance improvement for multiple underperforming employees</li>
            <li>Delivery of Real Time Monitoring Solution</li>
            <li>.NET Coach and mentor for Apprentice Program</li>
            <li>Design and Delivery of two major greenfield projects for automating manual intensive work</li>
          </ul>
        </section>
      </div>
      <div class="achievement-col">
        <section>
          <h2>Infosys</h2>
          <ul>
            <li>Migration of core CRM application to .NET 4.5.2</li>
            <li>Primary onshore change consultant</li>
          </ul>
          <h2>E.ON IT UK Ltd.</h2>
          <ul>
            <li>Design and Delivery of new Incident Alerting system</li>
            <li>Incident Manager for National and International Incidents</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default Achievements;