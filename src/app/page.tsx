export default function Home() {
  const projects = [
    { title: 'Project 1', description: 'A brief description of Project 1.', githubLink: 'https://github.com/rohan/project1' },
    { title: 'Project 2', description: 'A brief description of Project 2.', githubLink: 'https://github.com/rohan/project2' },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      {/* Left Side - 35% */}
      <div style={{ flex: '35%', padding: '20px', backgroundColor: '#f4f4f4', textAlign: 'center' }}>
        <img
          src="/profile.jpg" // Replace this with your actual profile image in the public folder
          alt="Profile Picture"
          style={{ width: '70%', borderRadius: '50%' }}
        />
        <h1>Rohan Mecheri</h1>
        <p>Aspiring Software Engineer | Web Developer</p>
        <a
          href="/cv.pdf" // Replace this with your CV file in the public folder
          target="_blank"
          style={{
            display: 'inline-block',
            marginTop: '10px',
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '5px',
          }}
        >
          Download CV
        </a>
      </div>

      {/* Right Side - 65% */}
      <div style={{ flex: '65%', padding: '20px' }}>
        <h2 style={{ marginBottom: '20px' }}>My Projects</h2>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {projects.map((project, index) => (
            <li key={index} style={{ marginBottom: '20px' }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#0070f3', textDecoration: 'underline' }}
              >
                View on GitHub
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}