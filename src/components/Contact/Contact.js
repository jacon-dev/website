import React from 'react';
import '../Global.css';
import './Contact.css';
import linkedinLogo from '../../assets/linkedin-logo.png';
import githubLogo from '../../assets/github-logo.png';
import emailLogo from '../../assets/outlook-logo.png';

const Contact = () => (
  <div className="content-div">
    <h1>Contact</h1>
    <p>
        If you would like to get in touch with me, feel free to reach out via any of the platforms below.
        I am always open to discussing new opportunities, collaborations, or simply connecting with like-minded individuals.
    </p>
    <div className="gradient-divider"></div>
    <p>
      You can find me on LinkedIn, GitHub, or send me an email. I look forward to hearing from you!
    </p>
    <span>
      <a href="https://www.linkedin.com/in/james-conlin-0326b7149/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinLogo} alt="LinkedIn" class="contact-logo" />
      </a>
      <a href="https://github.com/jacon-dev" target="_blank" rel="noopener noreferrer">
        <img src={githubLogo} alt="GitHub" class="contact-logo" />
      </a>
      <a href="mailto:jacon.dev@outlook.com" target="_blank" rel="noopener noreferrer">
        <img src={emailLogo} alt="Email" class="contact-logo" />
      </a>
    </span>
  </div>
);

export default Contact;