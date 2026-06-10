'use client';

import { useState } from 'react';
import Image from 'next/image';

const BG = '#f0ede8';
const FG = '#1a1a1a';
const MUTED = '#56504c';
const LINK_COLOR = '#1e3a7a';
const DIVIDER = '#c8c0b8';

type WorkItem = {
  role: string;
  company: string;
  url?: string;
  descriptor?: string;
  description?: string;
};

type ProjectItem = {
  name: string;
  url: string;
  description: string;
};

const WORK_ITEMS: WorkItem[] = [
  {
    role: 'Teaching Assistant',
    company: 'Carnegie Mellon University',
    description: 'Differential Equations · Concepts of Mathematics',
  },
  {
    role: 'Software Engineering Intern',
    company: 'Pando',
    url: 'https://www.pando.ai/',
    description: 'Worked on data infrastructure and growth engineering.',
  },
  {
    role: 'Software Engineering Intern',
    company: 'Indium Software',
    url: 'https://www.indiumsoftware.com/',
    description: 'Built Market Basket Analysis models and distributed ML frameworks for pricing and recommendations.',
  },
  {
    role: 'Software Engineering Intern',
    company: 'Crayon Data',
    url: 'https://www.crayondata.com/',
    description: 'Built NLP-powered search and scalable microservices.',
  },
  {
    role: 'Head Mentor',
    company: 'CoderDojo',
    url: 'https://www.coderdojo.com',
  },
];

const PROJECT_ITEMS: ProjectItem[] = [
  {
    name: 'BayesTune',
    url: 'https://github.com/rohan-mecheri/BayesTune',
    description:
      'Distributed hyperparameter tuning using Bayesian Optimization and multiprocessing. Automated SVM hyperparameter search with Dockerized deployment; 97.2% cross-validation accuracy.',
  },
  {
    name: 'Predictify',
    url: 'https://github.com/rohan-mecheri/lstm-enhanced-predictive-maintenance',
    description:
      'Predictive maintenance via Keras LSTM networks estimating Remaining Useful Life of industrial equipment. Time-series feature engineering on sensor data; 7% MAE improvement over baseline.',
  },
  {
    name: 'PhishEye',
    url: 'https://github.com/rohan-mecheri/phisheye',
    description:
      'Phishing URL detection using NLP — Logistic Regression and SVM classifiers on lexical patterns and sentiment features. 89% accuracy with custom vectorization.',
  },
  {
    name: 'BetterJava',
    url: 'https://github.com/rohan-mecheri/BetterJava',
    description: 'A Java pre-processor that transpiles indentation-based syntax into traditional bracket syntax.',
  },
  {
    name: 'Chennai Volunteers',
    url: 'https://www.chennaivolunteers.org',
    description: 'A micro-volunteering portal for the Giving Matters Foundation in Chennai.',
  },
];

const EASE = 'cubic-bezier(0.22, 1, 0.36, 1)';

function WorkRow({ item }: { item: WorkItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ padding: '14px 0', borderBottom: `1px solid ${DIVIDER}` }}
    >
      <div style={{ fontSize: '18px', display: 'flex', alignItems: 'baseline', gap: '6px' }}>
        <span style={{ fontWeight: 600, color: FG }}>{item.role}</span>
        <span style={{ color: MUTED, fontWeight: 400 }}>·</span>
        {item.url ? (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: MUTED, fontWeight: 400, textDecoration: 'none', transition: 'color 0.2s ease' }}
            onMouseOver={e => { e.currentTarget.style.color = LINK_COLOR; e.currentTarget.style.textDecoration = 'underline'; }}
            onMouseOut={e => { e.currentTarget.style.color = MUTED; e.currentTarget.style.textDecoration = 'none'; }}
          >
            {item.company}
          </a>
        ) : (
          <span style={{ color: MUTED, fontWeight: 400 }}>{item.company}</span>
        )}
      </div>
      {item.description && (
        <div
          style={{
            fontSize: '15px',
            color: MUTED,
            lineHeight: 1.65,
            maxHeight: hovered ? '80px' : '0',
            overflow: 'hidden',
            opacity: hovered ? 1 : 0,
            marginTop: hovered ? '8px' : '0',
            transition: `max-height 0.6s ${EASE}, opacity 0.55s ${EASE}, margin-top 0.5s ${EASE}`,
          }}
        >
          {item.description}
        </div>
      )}
    </div>
  );
}

function ProjectRow({ item }: { item: ProjectItem }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ padding: '14px 0', borderBottom: `1px solid ${DIVIDER}` }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontSize: '18px',
            fontWeight: 600,
            color: hovered ? LINK_COLOR : FG,
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
        >
          {item.name}
        </a>
        <span style={{ fontSize: '13px', color: MUTED, opacity: hovered ? 1 : 0, transition: 'opacity 0.2s ease' }}>
          ↗
        </span>
      </div>
      <div
        style={{
          fontSize: '14px',
          color: MUTED,
          lineHeight: 1.65,
          maxHeight: hovered ? '120px' : '0',
          overflow: 'hidden',
          opacity: hovered ? 1 : 0,
          marginTop: hovered ? '6px' : '0',
          transition: `max-height 0.6s ${EASE}, opacity 0.55s ${EASE}, margin-top 0.5s ${EASE}`,
        }}
      >
        {item.description}
      </div>
    </div>
  );
}

type Tab = 'experience' | 'projects';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab | null>(null);

  const handleTab = (tab: Tab) => {
    setActiveTab(prev => (prev === tab ? null : tab));
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        backgroundColor: BG,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: '14vh',
        paddingBottom: '60px',
        paddingLeft: '20px',
        paddingRight: '20px',
      }}
    >
      <div style={{ width: '100%', maxWidth: '620px' }}>
        {/* Profile */}
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '24px', justifyContent: 'center' }}>
          <div style={{ width: '108px', height: '108px', borderRadius: '50%', overflow: 'hidden', border: `2px solid ${DIVIDER}`, flexShrink: 0 }}>
            <Image
              src="/profile.jpg"
              alt="Rohan Mecheri"
              width={108}
              height={108}
              style={{ width: '108px', height: '108px', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div>
            <h1 style={{ fontSize: '32px', fontWeight: 600, color: FG, letterSpacing: '-0.02em' }}>
              Rohan Mecheri
            </h1>
            <p style={{ fontSize: '17px', color: MUTED, marginTop: '6px', lineHeight: 1.6 }}>
              Carnegie Mellon University
              <br />
              Applied Mathematics & Computer Science
            </p>
          </div>
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginTop: '20px' }}>
          {[
            { label: 'GitHub', href: 'https://github.com/rohan-mecheri' },
            { label: 'LinkedIn', href: 'https://linkedin.com/in/rohanmecheri' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '15px', color: MUTED, textDecoration: 'none', transition: 'color 0.2s ease' }}
              onMouseOver={e => (e.currentTarget.style.color = FG)}
              onMouseOut={e => (e.currentTarget.style.color = MUTED)}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: DIVIDER, margin: '36px 0 28px' }} />

        {/* Tabs */}
        <div style={{ display: 'flex', gap: '32px', justifyContent: 'center' }}>
          {(['experience', 'projects'] as Tab[]).map(tab => (
            <button
              key={tab}
              onClick={() => handleTab(tab)}
              style={{
                background: 'none',
                border: 'none',
                borderBottom: `2px solid ${activeTab === tab ? FG : 'transparent'}`,
                padding: '0 0 6px 0',
                fontSize: '15px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: activeTab === tab ? FG : MUTED,
                cursor: 'pointer',
                transition: `color 0.2s ease, border-color 0.2s ease`,
                fontFamily: 'inherit',
                fontWeight: 500,
                borderRadius: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              {tab}
              <span
                style={{
                  fontSize: '16px',
                  display: 'inline-block',
                  transform: activeTab === tab ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: `transform 0.4s ${EASE}`,
                  lineHeight: 1,
                }}
              >
                ▾
              </span>
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          style={{
            maxHeight: activeTab ? '800px' : '0',
            overflow: 'hidden',
            opacity: activeTab ? 1 : 0,
            marginTop: activeTab ? '8px' : '0',
            transition: `max-height 0.7s ${EASE}, opacity 0.6s ${EASE}, margin-top 0.5s ${EASE}`,
          }}
        >
          <div style={{ paddingTop: '8px' }}>
            {activeTab === 'experience' && WORK_ITEMS.map(item => <WorkRow key={item.role + item.company} item={item} />)}
            {activeTab === 'projects' && PROJECT_ITEMS.map(item => <ProjectRow key={item.name} item={item} />)}
          </div>
        </div>
      </div>
    </main>
  );
}
