import React from 'react';

function Navbar() {
  return (
    <nav style={{
      backgroundColor: '#222',
      color: 'white',
      padding: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 'bold'}}>
        <a href="/" style={{ color: 'white', textDecoration: 'none' }}>The Unsolved Files</a>
      </div>
      <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex' }}>
        <li style={{ marginRight: '1rem' }} className="connect-app">
          <a href="/login/gemini" style={{ color: 'white', textDecoration: 'none' }}>Conectar Gemini</a>
        </li>
        <li style={{ marginRight: '1rem' }} className="connect-app">
          <a href="/login/midjourney" style={{ color: 'white', textDecoration: 'none' }}>Conectar Midjourney</a>
        </li>
        <li>
          <a href="/login/d-id" style={{ color: 'white', textDecoration: 'none' }} className="connect-app">Conectar D-Id</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
