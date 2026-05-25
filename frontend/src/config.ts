// En desarrollo usa localhost, en producción usa el subdominio de Hostinger real para la API
export const API_URL = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
  ? 'http://localhost:3000'
  : 'https://api.expotextilgrafica.com';
