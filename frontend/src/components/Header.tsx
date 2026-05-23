import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImg from '../assets/logo.png';

const Header: React.FC = () => {
  const isLoggedIn = !!localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/';
  };

  return (
    <header className="resp-header" style={{
      position: 'sticky',
      top: 0,
      backgroundColor: '#0a0a0a',
      padding: '1rem 3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
      zIndex: 1000,
      borderBottom: '1px solid #222'
    }}>
      {/* Logo y Título */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        {/* Logo */}
        <img 
          src={logoImg} 
          alt="Logo Expo Textil 2026" 
          style={{
            width: '45px',
            height: '45px',
            objectFit: 'contain',
            borderRadius: '4px'
          }}
        />
        
        <div style={{ 
          fontWeight: '900', 
          fontSize: '1.5rem', 
          color: '#ffffff',
          letterSpacing: '1px' 
        }}>
          EXPO TEXTIL <span style={{ color: '#ff0000' }}>2026</span>
        </div>
      </div>

      {/* Navegación */}
      <nav className="resp-nav" style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <NavLink 
          to="/" 
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? '#ff0000' : '#cccccc',
            fontWeight: isActive ? '700' : '500',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            backgroundColor: isActive ? 'rgba(255,0,0,0.1)' : 'transparent',
            transition: 'all 0.3s ease'
          })}
        >
          INICIO
        </NavLink>
        
        {isLoggedIn && (
          <NavLink 
            to="/pagos" 
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? '#ff0000' : '#cccccc',
              fontWeight: isActive ? '700' : '500',
              padding: '0.5rem 1rem',
              borderRadius: '20px',
              backgroundColor: isActive ? 'rgba(255,0,0,0.1)' : 'transparent',
              transition: 'all 0.3s ease'
            })}
          >
            PAGOS
          </NavLink>
        )}

        {!isLoggedIn ? (
          <>
            <NavLink 
              to="/login" 
              style={({ isActive }) => ({
                textDecoration: 'none',
                color: isActive ? '#ff0000' : '#ffffff',
                fontWeight: isActive ? '700' : '600',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                backgroundColor: isActive ? 'rgba(255,0,0,0.1)' : 'transparent',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(255,255,255,0.2)'
              })}
            >
              INICIAR SESIÓN
            </NavLink>

            <NavLink 
              to="/registro" 
              style={{
                textDecoration: 'none',
                color: '#ffffff',
                fontWeight: 'bold',
                padding: '0.6rem 1.8rem 0.8rem',
                borderRadius: '25px',
                backgroundColor: '#ff0000',
                boxShadow: '0 4px 15px rgba(255, 0, 0, 0.4)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.backgroundColor = '#cc0000';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.backgroundColor = '#ff0000';
              }}
            >
              REGISTRO
            </NavLink>
          </>
        ) : (
          <button 
            onClick={handleLogout}
            style={{
              cursor: 'pointer',
              border: '1px solid #ff0000',
              background: 'transparent',
              color: '#ff0000',
              fontWeight: 'bold',
              padding: '0.6rem 1.8rem 0.8rem',
              borderRadius: '25px',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ff0000';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#ff0000';
            }}
          >
            CERRAR SESIÓN
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
