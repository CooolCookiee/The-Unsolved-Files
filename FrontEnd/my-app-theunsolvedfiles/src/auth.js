// src/auth.js

export const saveToken = (provider, token) => {
    localStorage.setItem(`${provider}Token`, token);
  };
  
  export const getToken = (provider) => {
    return localStorage.getItem(`${provider}Token`);
  };
  
  export const removeToken = (provider) => {
    localStorage.removeItem(`${provider}Token`);
  };
  
  // Puedes agregar otras funciones de autenticación aquí, como:
  // - isAuthenticated(provider): Verifica si el usuario está autenticado con un proveedor específico.
  // - logout(provider): Cierra la sesión del usuario con un proveedor específico.
  