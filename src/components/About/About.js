import React from 'react';
import '../Global.css';
import './About.css';
import profile from '../../assets/profile.jpg';

const About = () => (
  <div class="content-div">
    <div class="about-header">
      <img src={profile} alt="Profile" class="profile-pic" />
      <div class="about-text">
        <h1>James Conlin</h1>
        <h3>Software Engineer and People Leader</h3>
        <p>
            I’m an engineer and technical leader, enthusiastic about designing and building software in an agile way that consistently delivers value, retains resilience and that people love to use.
            I strive to empower and inspire my colleagues and peers as well as provide coaching and mentoring to help improve their performance and foster growth in their careers.
        </p>
      </div>
    </div>
    <div class="gradient-divider"></div>
    <div class="about-extra">
      <h3>About me</h3>
      <p>
        I'm a software engineer and technical leader with over a decade of experience designing resilient, scalable systems that deliver real value.
        From architecting greenfield solutions in .NET and React to spearheading incident response across global teams, I thrive at the intersection of engineering precision and human impact.
        My work spans CRM migrations, real-time monitoring, and automation frameworks with each project grounded in agile principles and a commitment to clean, maintainable code.
      </p>
      <p>
        Beyond the codebase, I’m passionate about empowering others. 
        I've mentored apprentices, coached underperforming engineers into confident contributors, and cultivated high-performing teams through trust, feedback, and shared ownership.
        Whether I'm diagramming C4 models, debugging production issues, or leading squad rituals, I bring curiosity, clarity, and a drive to elevate both the product and the people behind it.
      </p>
      <p>
        Outside of work I'm a father first and foremost to three beautiful girls, spending as much time where I can with them.
        I'm also a keen gamer, whether its solo or with friends, playing games that span the genres of FPS and RPG's, such as The Witcher, Battlefield, Final Fantasy, Zelda and many more.
        I also enjoy reading, with a preference for graphic novesl from Marvel, Star Wars, Sandman and many more.
      </p>
    </div>
  </div>
);

export default About;