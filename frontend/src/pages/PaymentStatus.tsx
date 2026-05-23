import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PaymentStatus: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determinamos el estado basándonos en la ruta actual
  const isSuccess = location.pathname.includes('exito');
  const isFailure = location.pathname.includes('fallo');
  const isPending = location.pathname.includes('pendiente');

  let title = 'Procesando...';
  let message = 'Por favor, aguarda un momento.';
  let color = '#333';
  let bgColor = '#f5f5f5';

  if (isSuccess) {
    title = '¡Pago Aprobado!';
    message = 'Tu reserva se ha confirmado exitosamente. ¡Ya eres Expositor Oficial de la Expo Textil 2026!';
    color = '#2e7d32'; // Verde
    bgColor = '#e8f5e9';
  } else if (isFailure) {
    title = 'Pago Rechazado';
    message = 'Hubo un problema procesando tu tarjeta. Tu reserva ha sido cancelada y el cupo devuelto. Por favor, intenta con otro medio de pago.';
    color = '#c62828'; // Rojo oscuro
    bgColor = '#ffebee';
  } else if (isPending) {
    title = 'Pago Pendiente';
    message = 'Tu pago está siendo procesado por Mercado Pago. Recibirás un correo cuando se apruebe. Tu stand permanecerá reservado temporalmente.';
    color = '#f57f17'; // Naranja
    bgColor = '#fffde7';
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh', padding: '2rem', backgroundColor: '#fafafa' }}>
      <div style={{ 
        backgroundColor: bgColor, 
        border: `2px solid ${color}`,
        borderRadius: '16px', 
        padding: '3rem', 
        textAlign: 'center',
        maxWidth: '500px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ color: color, fontSize: '2rem', marginBottom: '1rem' }}>{title}</h1>
        <p style={{ color: '#555', fontSize: '1.1rem', lineHeight: '1.6', marginBottom: '2.5rem' }}>
          {message}
        </p>
        <button 
          onClick={() => navigate('/')}
          style={{
            backgroundColor: color,
            color: '#fff',
            border: 'none',
            padding: '1rem 2.5rem',
            borderRadius: '30px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'opacity 0.3s',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          Volver al Inicio
        </button>
      </div>
    </div>
  );
};

export default PaymentStatus;
