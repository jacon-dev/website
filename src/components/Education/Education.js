import React from 'react';
import '../Global.css';
import './Education.css';

const Education = () => (
  <div class="content-div">
    <h1>Education</h1>
    <p>
      Below is a summary of my educational background, including certifications and courses that have contributed to my professional development.
      If you have any questions or would like to discuss my education further, please feel free to reach out!
    </p>
    <div class="gradient-divider"></div>
    <table class="education-table">
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>React</td>
          <td>Provided by Udemy - Certification ongoing</td>
        </tr>
        <tr>
          <td>Agile Certification</td>
          <td>Provided by Udemy - Certified as of 27th April 2020</td>
        </tr>
        <tr>
          <td>ITIL Foundation</td>
          <td>Provided by E.ON IT UK Ltd. - Certified as of 2nd March 2016</td>
        </tr>
        <tr>
          <td>C# WPF</td>
          <td>Provided by E.ON IT UK Ltd. - Completed with QA Training in 2015</td>
        </tr>
        <tr>
          <td>Oracle Programming</td>
          <td>Provided by E.ON IT UK Ltd. - Completed with QA Training in 2015</td>
        </tr>
        <tr>
          <td>11 GCSE</td>
          <td>High grade passes including Maths, English, and Dual Science Award</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Education;