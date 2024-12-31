'use client';

import LeftSidebar from './LeftSidebar'; // Adjust the path based on where you place the file

export default function Home() {
  return (
    <div style={{ display: 'flex', height: '100%', fontFamily: 'Arial, sans-serif' }}>
      <LeftSidebar />

      {/* Right Side */}
      <div style={{ flex: '65%', padding: '20px', overflowY: 'scroll' }}>
        {/* Projects and Student Initiatives Heading */}
        <h2
          style={{
            marginBottom: '20px',
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: 'bold',
          }}
        >
          Projects and Student Initiatives
        </h2>

        {/* Predictify */}
        <div style={{ marginBottom: '30px' }}>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li style={{ color: '#000', fontWeight: 'bold', fontSize: '18px' }}>
              <a
                href="https://github.com/rohan-mecheri/predictify"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: '#0070f3',
                  transition: 'text-decoration 0.2s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                Predictify
              </a>
            </li>
          </ul>
          <ul style={{ paddingLeft: '40px', marginTop: '10px', listStyleType: 'none' }}>
            <li>- Developed a predictive maintenance framework using Keras and LSTM neural networks to estimate Remaining Useful Life (RUL) of industrial equipment.</li>
            <li>- Implemented advanced feature engineering techniques, such as time-series decomposition and lag features, to extract insights from sensor data.</li>
            <li>- Conducted rigorous hyperparameter tuning, achieving a 7% improvement in Mean Absolute Error (MAE) compared to a baseline model.</li>
          </ul>
        </div>

        {/* PhishEye */}
        <div style={{ marginBottom: '30px' }}>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li style={{ color: '#000', fontWeight: 'bold', fontSize: '18px' }}>
              <a
                href="https://github.com/rohan-mecheri/phisheye"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: '#0070f3',
                  transition: 'text-decoration 0.2s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                PhishEye
              </a>
            </li>
          </ul>
          <ul style={{ paddingLeft: '40px', marginTop: '10px', listStyleType: 'none' }}>
            <li>- Developed a phishing detection system using Natural Language Processing (NLP) techniques, including Logistic Regression and Support Vector Machine classifiers, to identify malicious URLs based on lexical patterns and sentiment analysis.</li>
            <li>- Achieved an 89% accuracy rate by utilizing custom vectorization techniques.</li>
          </ul>
        </div>
        {/* Chennai Volunteers */}
          <div style={{ marginBottom: '30px' }}>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li style={{ fontSize: '18px', color: '#000' }}>
              <a
                href="https://www.chennaivolunteers.org"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: '#0070f3',
                  fontWeight: 'bold',
                  transition: 'text-decoration 0.2s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                Chennai Volunteers
              </a>
              <span style={{ fontSize: '16px', color: '#000' }}>
                , a micro-volunteering portal for the Giving Matters Foundation.
              </span>
            </li>
          </ul>
        </div>
        {/* CoderDojo */}
        <div style={{ marginBottom: '30px' }}>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li style={{ color: '#000', fontWeight: 'bold', fontSize: '18px' }}>
              <a
                href="https://coderdojo.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: '#0070f3',
                  transition: 'text-decoration 0.2s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                CoderDojo
              </a>
            </li>
          </ul>
          <ul style={{ paddingLeft: '40px', marginTop: '10px', listStyleType: 'none' }}>
            <li>- CoderDojo is a global network of free, volunteer-led coding clubs for young people ages 7 to 17.</li>
            <li>- Taught programming to over 500 students over the course of 4 years.</li>
            <li>- Recognized as CoderDojo&apos;s youngest-ever mentor in South Asia.</li>
          </ul>
        </div>

        {/* Supplemental Instructor */}
        <div style={{ marginBottom: '30px' }}>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li style={{ color: '#000', fontWeight: 'bold', fontSize: '18px' }}>
              Instructor
            </li>
          </ul>
          <ul style={{ paddingLeft: '40px', marginTop: '10px', listStyleType: 'none' }}>
            <li>
              - Supplemental Instructor for 21-260 - Differential Equations under{' '}
              <a
                href="https://www.linkedin.com/in/junichi-koganemaru/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: '#0070f3',
                  transition: 'text-decoration 0.2s ease',
                }}
                onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
                onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
              >
                Prof. Junichi Koganemaru
              </a>{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}