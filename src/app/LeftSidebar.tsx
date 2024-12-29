'use client'; // This directive enables client-side rendering

export default function LeftSidebar() {
  return (
    <div
      style={{
        flex: '35%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#f4f4f4',
        padding: '20px',
        height: '100vh',
      }}
    >
      {/* Profile Picture */}
      <img
        src="/profile.jpg"
        alt="Profile Picture"
        style={{
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          objectFit: 'cover', // Ensures the image fits properly
        }}
      />

      {/* Headline */}
      <h1 style={{ marginTop: '20px' }}>Rohan Mecheri</h1>
      <p style={{ lineHeight: '1.5' }}>Applied Math & CS @ Carnegie Mellon University</p>

      {/* About Me */}
      <p style={{ marginTop: '20px', textAlign: 'center', padding: '0 20px' }}>
        Hi, I'm Rohan! I'm passionate about building innovative web applications and solving complex problems.
        With experience in software engineering, data analysis, and NLP, I strive to deliver impactful solutions.
      </p>

      {/* Social Links */}
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {/* GitHub */}
        <div style={{ marginTop: '10px' }}>
          <a
            href="https://github.com/rohan-mecheri"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              width: '40px',
              height: '60px',
              backgroundImage: "url('/github-logo.png')",
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              opacity: 0.4,
              transition: 'transform 0.2s ease, opacity 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.3)';
              e.currentTarget.style.opacity = '1';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.opacity = '0.4';
            }}
          />
        </div>

        {/* LinkedIn */}
        <div style={{ marginTop: '10px' }}>
          <a
            href="https://linkedin.com/in/rohanmecheri"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              width: '40px',
              height: '60px',
              backgroundImage: "url('/linkedin-logo.png')",
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              opacity: 0.5,
              transition: 'transform 0.2s ease, opacity 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.3)';
              e.currentTarget.style.opacity = '1';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.opacity = '0.4';
            }}
          />
        </div>
      </div>
    </div>
  );
}