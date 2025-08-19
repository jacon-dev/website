import React from 'react';
import './Global.css';
import './Skills.css';

const Skills = () => (
  <div class="content-div">
    <h1>Skills</h1>
    <p>
        Over the years I've gained a wealth of experience and skills that I can call upon at anytime in any role to drive success.
        Below is a summary of the majority of skills I have obtained, but I am always learning and improving so this list is not exhaustive.
        If you would like to know more about my skills, please feel free to contact me.
    </p>    
    <div class="gradient-divider"></div>
    <div class="skills-columns">
      <div class="skills-col">
        <section>
          <h2>Languages & Frameworks</h2>
          <h3>C# .NET</h3>
          <ul>
            <li>ASP.NET</li>
            <li>Entity Framework, Dapper</li>
            <li>XUnit, NUnit, Moq, FakeIteasy</li>
            <li>Selenium, Reqnroll, SpecFlow</li>
            <li>WCF, WPF</li>
          </ul>
          <h3>JavaScript</h3>
          <ul>
            <li>Angular JS</li>
            <li>React.js</li>
            <li>CSS</li>
            <li>HTML</li>
          </ul>
          <h3>Java</h3>
          <ul>
            <li>Apache Camel Core</li>
          </ul>
          <h3>Database Management Systems</h3>
          <ul>
            <li>MSSQL</li>
            <li>Oracle</li>
            <li>Databricks</li>
          </ul>
        </section>
        <section>
          <h2>Patterns and Concepts</h2>
          <ul>
            <li>Microservices</li>
            <li>RESTful APIs</li>
            <li>Continuous Integration / Deployment</li>
            <li>Event Driven Architecture</li>
            <li>OOP, SOLID, DRY, YAGNI</li>
            <li>IoC / DI, Generics</li>
            <li>TDD, DDD, BDD</li>
            <li>Agile, Scrum, DevOps</li>
          </ul>
        </section>
      </div>
      <div class="skills-col">
        <section>
          <h2>Tools and Platforms</h2>
          <ul>
            <li>Visual Studio, Jetbrains</li>
            <li>AWS, Azure</li>
            <li>Azure Repos, Git, TFS</li>
            <li>Azure Pipelines, GitHub Actions</li>
            <li>Azure DevOps</li>
            <li>SonarQube, SonarCloud</li>
            <li>Postman, Swagger</li>
            <li>Jira, Confluence</li>
            <li>NuGet, NPM</li>
          </ul>
          <h3>Containerisation</h3>
          <ul>
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>YAML</li>
          </ul>
        </section>
        <section>
          <h2>Soft Skills</h2>
          <ul>
            <li>Technical Leadership, Mentoring</li>
            <li>People management, performance improvement</li>
            <li>Pair programming, code reviews</li>
            <li>Incident management, monitoring</li>
            <li>Troubleshooting, debugging</li>
            <li>Technical documentation, C4, Docs as Code</li>
            <li>Technical discovery by product requirements</li>
            <li>Stakeholder management</li>
            <li>Service delivery and management</li>
          </ul>
        </section>
      </div>
    </div>
  </div>
);

export default Skills;