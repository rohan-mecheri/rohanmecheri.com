'use client'; // Enable client-side rendering for interactivity

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
          width: '160px',
          height: '155px',
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />

      {/* Headline */}
      <h1 style={{ marginTop: '6px', textAlign: 'center', fontSize: '20px' }}>Rohan Mecheri</h1>
      {/* Section Separator */}
      <div
        style={{
          width: '45%',
          height: '2px',
          backgroundColor: '#0070f3',
          margin: '13px 0',
        }}
      />
        <p style={{ lineHeight: '1.5', textAlign: 'center' }}>Carnegie Mellon University</p>
        <p style={{ lineHeight: '1.5', textAlign: 'center' }}>Applied Math & Computer Science</p>



        <div
       style={{
         width: '100%', // Make the line span the full width
         textAlign: 'center', // Center align the text
         marginTop: '20px', // Add spacing from the previous section
       }}
     >
       <p style={{ margin: 0,lineHeight: '1.5' }}>
         Previously at{' '}
         <a
           href="https://www.pando.ai/"
           target="_blank"
           rel="noopener noreferrer"
           style={{
             color: '#0070f3', // Link color
             textDecoration: 'none', // Remove underline
           }}
           onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')} // Hover effect
           onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
         >
           Pando
         </a>
         ,{' '}
         <a
           href="https://www.indiumsoftware.com/"
           target="_blank"
           rel="noopener noreferrer"
           style={{
             color: '#0070f3',
             textDecoration: 'none',
           }}
           onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
           onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
         >
           Indium
         </a>
         , and{' '}
         <a
           href="https://www.crayondata.com/"
           target="_blank"
           rel="noopener noreferrer"
           style={{
             color: '#0070f3',
             textDecoration: 'none',
           }}
           onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
           onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
         >
           Crayon Data
         </a>
       </p>
     </div>


        <div
        style={{
          width: '45%',
          height: '2px',
          backgroundColor: '#0070f3',
          margin: '13px 0',
        }}
      />
     
    
      {/* About Me */}
      <p style={{ textAlign: 'center',padding: '0 20px' }}>
      As a sophomore at Carnegie Mellon University, I'm driven by developing and deploying solutions that address real-world issues. My experience includes areas like Machine Learning, where I've developed models leveraging deep learning architectures, including recurrent neural networks, for predictive modeling and natural language processing.
      </p>
      <p style={{ textAlign: 'center',padding: '0 20px' }}>
      <br></br>I possess a strong foundation in programming languages and a growing expertise in machine learning frameworks, which I continuously strive to expand through experience and learning.
      </p>

      {/* Section Separator */}
      <div
        style={{
          width: '45%',
          height: '2px',
          backgroundColor: '#0070f3',
          margin: '13px 0',
        }}
      />

      {/* Social Links */}
      <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        {/* GitHub Button */}
        <div style={{ marginTop: '0px' }}>
          <a
            href="https://github.com/rohan-mecheri"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              width: '30px',
              height: '60px',
              backgroundImage: "url('/github-logo.png')",
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              opacity: 0.4,
              transition: 'transform 0.2s ease, opacity 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.3)'; // Hover effect: enlarge
              e.currentTarget.style.opacity = '1'; // Full opacity
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)'; // Reset size
              e.currentTarget.style.opacity = '0.4'; // Reset opacity
            }}
          />
        </div>

        {/* LinkedIn Button */}
        <div style={{ marginTop: '0px' }}>
          <a
            href="https://linkedin.com/in/rohanmecheri"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              width: '30px',
              height: '60px',
              backgroundImage: "url('/linkedin-logo.png')",
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              opacity: 0.4,
              transition: 'transform 0.2s ease, opacity 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = 'scale(1.3)'; // Hover effect: enlarge
              e.currentTarget.style.opacity = '1'; // Full opacity
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = 'scale(1)'; // Reset size
              e.currentTarget.style.opacity = '0.4'; // Reset opacity
            }}
          />
        </div>
      </div>
    </div>
  );
}