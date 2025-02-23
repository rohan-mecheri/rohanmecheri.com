'use client';

import LeftSidebar from './LeftSidebar'; 

export default function Home() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      <LeftSidebar />

      {/* Right Side */}
      <div style={{ flex: '65%', padding: '10px', overflowY: 'scroll' }}>
        {/* Projects and Student Initiatives Heading */}
        <h2
          style={{
            marginBottom: '13px',
            textAlign: 'center',
            fontSize: '23px',
            fontWeight: 'bold',
          }}
        >
          Projects and Student Initiatives
        </h2>

        {/* BayesTune */}
        <div style={{ marginBottom: '13px' }}>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li style={{ color: '#000', fontWeight: 'bold', fontSize: '17px' }}>
              <a
                href="https://github.com/rohan-mecheri/BayesTune"
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
                BayesTune
              </a>
            </li>
          </ul>
          <ul style={{ paddingLeft: '40px', marginTop: '5px', listStyleType: 'none' }}>
            <li>- Developed a distributed hyperparameter tuning system leveraging Bayesian Optimization and multiprocessing for parallel model evaluation.</li>
            <li>- Automated hyperparameter search for SVM models with dynamic result logging and Dockerized deployment.</li>
            <li>- Achieved 97.2% cross-validation accuracy in hyperparameter tuning for SVM models, with optimally computed hyperparameters</li>
          </ul>
        </div>

        {/* Predictify */}
        <div style={{ marginBottom: '13px' }}>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li style={{ color: '#000', fontWeight: 'bold', fontSize: '17px' }}>
              <a
                href="https://github.com/rohan-mecheri/lstm-enhanced-predictive-maintenance"
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
          <ul style={{ paddingLeft: '40px', marginTop: '5px', listStyleType: 'none' }}>
            <li>- Developed a predictive maintenance framework using Keras and LSTM neural networks to estimate Remaining Useful Life (RUL) of industrial equipment.</li>
            <li>- Implemented advanced feature engineering techniques, such as time-series decomposition and lag features, to extract insights from sensor data.</li>
            <li>- Conducted rigorous hyperparameter tuning, achieving a 7% improvement in Mean Absolute Error (MAE) compared to a baseline model.</li>
          </ul>
        </div>

        {/* PhishEye */}
        <div style={{ marginBottom: '13px' }}>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li style={{ color: '#000', fontWeight: 'bold', fontSize: '17px' }}>
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
          <ul style={{ paddingLeft: '40px', marginTop: '5px', listStyleType: 'none' }}>
            <li>- Developed a phishing detection system using Natural Language Processing (NLP) techniques, including Logistic Regression and Support Vector Machine classifiers, to identify malicious URLs based on lexical patterns and sentiment analysis.</li>
            <li>- Achieved an 89% accuracy rate by utilizing custom vectorization techniques.</li>
          </ul>
        </div>

        {/* BetterJava */}
        <div style={{ marginBottom: '13px' }}>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li style={{ fontSize: '17px', color: '#000' }}>
              <a
                href="https://github.com/rohan-mecheri/BetterJava"
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
                BetterJava
              </a>
              <span style={{ fontSize: '15px', color: '#000' }}>
                , a Java pre-processor that translates code written with indentation into brackets
              </span>
            </li>
          </ul>
        </div>

        {/* Chennai Volunteers */}
          <div style={{ marginBottom: '13px' }}>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li style={{ fontSize: '17px', color: '#000' }}>
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
              <span style={{ fontSize: '15px', color: '#000' }}>
                , a micro-volunteering portal for the Giving Matters Foundation.
              </span>
            </li>
          </ul>
        </div>

        {/* Supplemental Instructor */}
        <div style={{ marginBottom: '13px' }}>
          <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
            <li style={{ color: '#000', fontWeight: 'bold', fontSize: '17px' }}>
              Instructor
            </li>
          </ul>
          <ul style={{ paddingLeft: '40px', marginTop: '5px', listStyleType: 'none' }}>
            <li>
              - Supplemental Instructor for Carnegie Mellon&apos;s 21-260 - Differential Equations.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}