import LeftSidebar from './LeftSidebar'; // Adjust the path based on where you place the file

export default function Home() {
  const projects = [
    {
      title: 'Predictify',
      description: 'Predictive maintenance framework using LSTM to estimate Remaining Useful Life.',
      githubLink: 'https://github.com/rohan-mecheri/predictify',
    },
    {
      title: 'PhishEye',
      description: 'Phishing detection system using NLP and Logistic Regression models.',
      githubLink: 'https://github.com/rohan-mecheri/phisheye',
    },
    {
      title: 'mAskAround',
      description: 'Raised $15,000 for PPE procurement during COVID-19.',
      githubLink: null,
    },
  ];

  return (
    <div style={{ display: 'flex', height: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <LeftSidebar />

      {/* Right Side */}
      <div style={{ flex: '65%', padding: '20px' }}>
        <h2 style={{ marginBottom: '20px' }}>Projects</h2>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {projects.map((project, index) => (
            <li key={index} style={{ marginBottom: '20px' }}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#0070f3', textDecoration: 'underline' }}
                >
                  View on GitHub
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}