import React from 'react';

const NotFound = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>Oops! The page you're looking for doesn't exist.</p>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
    textAlign: 'center',
  },
  heading: {
    fontSize: '3rem',
    color: '#b99365',
  },
  text: {
    fontSize: '1.5rem',
  },
};

export default NotFound;
