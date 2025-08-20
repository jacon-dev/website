const projects = [
  {
    name: "Personal Website",
    details: (
      <>
        <h2>Personal Website</h2>
        <p>
            This website showcases my portfolio, skills, and achievements. It serves as a platform to share my professional journey and connect with others.
            I've wanted to build a personal website for a long time, and I'm excited to finally have it up and running.
        </p>
        <ul>
          <li>Built with React and CSS modules</li>
          <li>Responsive design for all devices</li>
          <li>Deployed on GitHub Pages using GitHub Actions</li>
        </ul>
      </>
    ),
  },
  {
    name: "Discord RPG Bot",
    details: (
      <>
        <h2>Discord RPG Bot</h2>
        <p>
            Behind the scenes I'm developing a Discord RPG bot that allows users to engage in text-based role-playing games in a Discord server.
            The bot supports various RPG mechanics, including character creation, combat, levelling with much more to come.
            It's a fun project that combines my love for gaming with programming and serves as a learning experience in building interactive applications.
        </p>
        <ul>
          <li>Built in .NET 8 using Discord.NET</li>
          <li>Uses SQLite for Data Storage</li>
          <li>SonarQube and Build Quality Gates via GitHub</li>
        </ul>
      </>
    ),
  }
];

export default projects;