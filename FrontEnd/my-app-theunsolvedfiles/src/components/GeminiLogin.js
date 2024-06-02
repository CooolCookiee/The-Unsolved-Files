import React, { useState } from 'react';
import { saveToken } from '../auth';
import { useNavigate } from 'react-router-dom';

function GeminiLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // Estado para el mensaje de error

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(''); // Limpia el mensaje de error al enviar el formulario

    try {
      // Lógica para autenticar con la API de Gemini
      const response = await fetch('/api/gemini/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        saveToken('gemini', data.token);
        navigate('/'); // Redirige a la página principal
      } else {
        setError('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
      }
    } catch (error) {
      setError('Ocurrió un error al iniciar sesión. Por favor, inténtalo más tarde.');
    }
  };

  return (
    <div className="login-modal" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
    }}>
      <form onSubmit={handleSubmit} style={{
        backgroundColor: '#fff',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        width: '350px',
        display: 'flex',
        flexDirection: 'column',
      }}>
        <p style={{ marginBottom: '0.5rem', color:'black' }}>Correo electrónico:</p>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: '0.8rem', marginBottom: '1rem', border: '1px solid #ccc', borderRadius: '4px' }}
        />

        <p style={{ marginBottom: '0.5rem' , color:'black'}}>Contraseña:</p>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: '0.8rem', marginBottom: '1rem', border: '1px solid #ccc', borderRadius: '4px' }}
        />

        <button type="submit" style={{
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '0.8rem',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}>Iniciar sesión</button>

        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Mensaje de error */}
        
        <button type="button" onClick={() => navigate('/')} style={{
          backgroundColor: '#f44336',
          color: 'white',
          padding: '0.8rem',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold',
          marginTop: '1rem',
        }}>Volver</button>
      </form>
    </div>
  );
}

export default GeminiLogin;
