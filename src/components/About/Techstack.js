import React from 'react';
import {
  SiPython,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiTensorflow,
  SiKeras,
  SiReact,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiCplusplus,
  SiFirebase,
  SiMysql,
  SiGit,
  SiGithub
} from 'react-icons/si';

const Techstack = () => {
  const techIcons = [
    { icon: <SiPython />, name: 'Python' },
    { icon: <SiNumpy />, name: 'NumPy' },
    { icon: <SiPandas />, name: 'Pandas' },
    { icon: <SiScikitlearn />, name: 'Scikit-learn' },
    { icon: <SiTensorflow />, name: 'TensorFlow' },
    { icon: <SiKeras />, name: 'Keras' },
    { icon: <SiReact />, name: 'React' },
    { icon: <SiHtml5 />, name: 'HTML5' },
    { icon: <SiCss3 />, name: 'CSS3' },
    { icon: <SiJavascript />, name: 'JavaScript' },
    { icon: <SiCplusplus />, name: 'C++' },
    { icon: <SiFirebase />, name: 'Firebase' },
    { icon: <SiMysql />, name: 'MySQL' },
    { icon: <SiGit />, name: 'Git' },
    { icon: <SiGithub />, name: 'GitHub' }
  ];

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Tech Stack</h2>
      <div style={styles.grid}>
        {techIcons.map((tech, index) => (
          <div key={index} style={styles.iconBox}>
            <div style={styles.icon}>{tech.icon}</div>
            <p style={styles.label}>{tech.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// 🔧 Updated styles for dark mode, shadow, borders, and bigger icons
const styles = {
  container: {
    backgroundColor: '#0d0b1b',
    padding: '3rem 1rem',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#a259ff',
    marginBottom: '2rem',
  },
  grid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  iconBox: {
    width: '140px',
    height: '120px',
    backgroundColor: '#111122',
    border: '1px solid #a259ff',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(162, 89, 255, 0.2)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.2s ease, box-shadow 0.3s ease',
  },
  icon: {
    fontSize: '3.5rem',
    color: '#ffffff',
    marginBottom: '0.5rem',
  },
  label: {
    fontSize: '0.9rem',
    color: '#ffffff',
    marginTop: '0.25rem',
  },
};

export default Techstack;
