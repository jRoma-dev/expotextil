import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

// ==========================================
// COMPONENTE: HEADER STICKY
// ==========================================
const Header: React.FC = () => {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      backgroundColor: '#fce4ec', // Rosa pastel muy suave
      padding: '1rem 3rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
      zIndex: 1000,
    }}>
      {/* Logo o Título */}
      <div style={{ 
        fontWeight: '800', 
        fontSize: '1.5rem', 
        color: '#880e4f', // Contraste fuerte para legibilidad
        letterSpacing: '1px' 
      }}>
        EXPO TEXTIL
      </div>

      {/* Navegación */}
      <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <NavLink 
          to="/" 
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? '#880e4f' : '#ad1457',
            fontWeight: isActive ? '700' : '500',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            backgroundColor: isActive ? '#f8bbd0' : 'transparent',
            transition: 'all 0.3s ease'
          })}
        >
          INICIO
        </NavLink>
        
        <NavLink 
          to="/pagos" 
          style={({ isActive }) => ({
            textDecoration: 'none',
            color: isActive ? '#880e4f' : '#ad1457',
            fontWeight: isActive ? '700' : '500',
            padding: '0.5rem 1rem',
            borderRadius: '20px',
            backgroundColor: isActive ? '#f8bbd0' : 'transparent',
            transition: 'all 0.3s ease'
          })}
        >
          PAGOS
        </NavLink>

        {/* Botón CTA Destacado */}
        <NavLink 
          to="/registro" 
          style={{
            textDecoration: 'none',
            color: '#ffffff',
            fontWeight: 'bold',
            padding: '0.6rem 1.8rem',
            borderRadius: '25px',
            backgroundColor: '#f06292', // Rosa vibrante/pastel para llamar la atención
            boxShadow: '0 4px 6px rgba(240, 98, 146, 0.3)',
            transition: 'transform 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
        >
          REGISTRO
        </NavLink>
      </nav>
    </header>
  );
};

// ==========================================
// VISTA: HOME (Inicio)
// ==========================================
const Home: React.FC = () => {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      
      {/* Sección Hero */}
      <section style={{ 
        backgroundColor: '#e8eaf6', // Azul lavanda pastel
        padding: '5rem 2rem', 
        borderRadius: '20px', 
        marginBottom: '3rem' 
      }}>
        <h1 style={{ fontSize: '3.5rem', color: '#283593', margin: '0 0 1rem 0' }}>
          Expo Textil Gráfica 2026
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#3f51b5', fontWeight: '500' }}>
          26 y 27 de Septiembre · Centro de Convenciones Concordia
        </p>
      </section>

      {/* Espacios para rellenar información (Tarjetas) */}
      <section style={{ 
        display: 'flex', 
        gap: '2rem', 
        justifyContent: 'center', 
        flexWrap: 'wrap' 
      }}>
        <div style={{ backgroundColor: '#e0f2f1', padding: '2.5rem', borderRadius: '16px', flex: '1', minWidth: '300px', textAlign: 'left' }}>
          <h2 style={{ color: '#00695c', marginTop: 0 }}>¿Qué es la Expo?</h2>
          <p style={{ color: '#00796b', lineHeight: '1.6' }}>
            Aquí irá el texto descriptivo de la exposición. Un espacio diseñado para que la industria textil y gráfica converja, generando nuevas oportunidades de negocio.
          </p>
        </div>

        <div style={{ backgroundColor: '#fff8e1', padding: '2.5rem', borderRadius: '16px', flex: '1', minWidth: '300px', textAlign: 'left' }}>
          <h2 style={{ color: '#ff8f00', marginTop: 0 }}>¿Por qué participar?</h2>
          <p style={{ color: '#ffa000', lineHeight: '1.6' }}>
            En este espacio destacaremos los beneficios para los emprendedores y empresas. Networking, exhibición de marca y talleres exclusivos.
          </p>
        </div>

        <div style={{ backgroundColor: '#f3e5f5', padding: '2.5rem', borderRadius: '16px', flex: '1', minWidth: '300px', textAlign: 'left' }}>
          <h2 style={{ color: '#6a1b9a', marginTop: 0 }}>Stands Disponibles</h2>
          <p style={{ color: '#7b1fa2', lineHeight: '1.6' }}>
            Detalla aquí las medidas de los stands, las ubicaciones dentro del Centro de Convenciones y qué incluye cada paquete comercial.
          </p>
        </div>
      </section>
    </main>
  );
};

// ==========================================
// VISTA: REGISTRO
// ==========================================
const Registro: React.FC = () => {
  // Estado para controlar si mostramos el popup de éxito
  const [registroExitoso, setRegistroExitoso] = React.useState(false);

  // Función que simula el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Evita que la página se recargue
    setRegistroExitoso(true);
    
    // Opcional: Ocultar el popup después de unos segundos y redirigir
    // setTimeout(() => setRegistroExitoso(false), 5000);
  };

  return (
    <main style={{ padding: '4rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', minHeight: '80vh' }}>
      
      {/* Título de la sección */}
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h1 style={{ color: '#880e4f', fontSize: '2.5rem', marginBottom: '0.5rem' }}>Inscripción de Expositores</h1>
        <p style={{ color: '#555', fontSize: '1.1rem' }}>Completá el formulario para reservar tu stand en la Expo Textil Gráfica 2026</p>
      </div>

      {/* Tarjeta del Formulario (El recuadro destacado) */}
      <div style={{
        backgroundColor: '#ffffff',
        padding: '3rem',
        borderRadius: '20px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.08)', // Sombra para destacar
        width: '100%',
        maxWidth: '600px', // Ancho máximo para que no se estire de más
        borderTop: '5px solid #f06292' // Detalle de color en la parte superior
      }}>
        
        {/* Si el registro fue exitoso, mostramos el mensaje de éxito */}
        {registroExitoso ? (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <div style={{ 
              fontSize: '4rem', 
              color: '#4caf50', 
              marginBottom: '1rem' 
            }}>
              ✓
            </div>
            <h2 style={{ color: '#2e7d32', marginBottom: '1rem' }}>¡Registro Exitoso!</h2>
            <p style={{ color: '#666', lineHeight: '1.5', marginBottom: '2rem' }}>
              Hemos recibido tus datos correctamente. A la brevedad nos pondremos en contacto vía WhatsApp o correo electrónico para continuar con la gestión de tu stand.
            </p>
            <button 
              onClick={() => setRegistroExitoso(false)}
              style={{
                backgroundColor: '#f06292',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
            >
              Enviar otra inscripción
            </button>
          </div>
        ) : (
          /* Si no se ha enviado, mostramos el formulario */
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            {/* Input: Nombre de la empresa */}
            <div>
              <input 
                type="text" 
                placeholder="Nombre de la empresa" 
                required
                style={{
                  width: '100%', padding: '12px 15px', borderRadius: '8px',
                  border: '1px solid #ccc', fontSize: '1rem', boxSizing: 'border-box',
                  backgroundColor: '#f9f9f9'
                }}
              />
            </div>

            {/* Input: Nombre y apellido */}
            <div>
              <input 
                type="text" 
                placeholder="Nombre y apellido del responsable" 
                required
                style={{
                  width: '100%', padding: '12px 15px', borderRadius: '8px',
                  border: '1px solid #ccc', fontSize: '1rem', boxSizing: 'border-box',
                  backgroundColor: '#f9f9f9'
                }}
              />
            </div>

            {/* Input: Correo electrónico */}
            <div>
              <input 
                type="email" 
                placeholder="Correo electrónico" 
                required
                style={{
                  width: '100%', padding: '12px 15px', borderRadius: '8px',
                  border: '1px solid #ccc', fontSize: '1rem', boxSizing: 'border-box',
                  backgroundColor: '#f9f9f9'
                }}
              />
            </div>

            {/* Input: WhatsApp */}
            <div>
              <input 
                type="tel" 
                placeholder="Número de WhatsApp" 
                required
                style={{
                  width: '100%', padding: '12px 15px', borderRadius: '8px',
                  border: '1px solid #ccc', fontSize: '1rem', boxSizing: 'border-box',
                  backgroundColor: '#f9f9f9'
                }}
              />
            </div>

            {/* Select: Tipo de stand */}
            <div>
              <select 
                required
                defaultValue=""
                style={{
                  width: '100%', padding: '12px 15px', borderRadius: '8px',
                  border: '1px solid #ccc', fontSize: '1rem', boxSizing: 'border-box',
                  backgroundColor: '#f9f9f9', color: '#555'
                }}
              >
                <option value="" disabled>Seleccionar tipo de stand</option>
                <option value="stand_a">Stand Categoría A (3x3m)</option>
                <option value="stand_b">Stand Categoría B (4x4m)</option>
                <option value="stand_vip">Isla VIP Central</option>
              </select>
            </div>

            {/* Textarea: Comentarios o dudas */}
            <div>
              <textarea 
                placeholder="¿Tienes algún requerimiento especial para tu stand?"
                rows={4}
                style={{
                  width: '100%', padding: '12px 15px', borderRadius: '8px',
                  border: '1px solid #ccc', fontSize: '1rem', boxSizing: 'border-box',
                  backgroundColor: '#f9f9f9', resize: 'vertical'
                }}
              ></textarea>
            </div>

            {/* Botón Enviar */}
            <button 
              type="submit"
              style={{
                backgroundColor: '#e60000', // El rojo clásico que tenía el cliente en su HTML
                color: 'white',
                border: 'none',
                padding: '15px',
                borderRadius: '8px',
                fontSize: '1.1rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                textTransform: 'uppercase',
                transition: 'background-color 0.3s ease',
                marginTop: '1rem'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#cc0000'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#e60000'}
            >
              ENVIAR FORMULARIO
            </button>
          </form>
        )}
      </div>
    </main>
  );
};

// ==========================================
// VISTA: PAGOS MOCKUP
// ==========================================
const PagosMockup: React.FC = () => {
  return (
    <main style={{ padding: '4rem 2rem', textAlign: 'center', minHeight: '80vh' }}>
      <h1 style={{ color: '#283593' }}>Checkout y Comprobantes</h1>
      <p style={{ color: '#555' }}>(Aquí simularemos la vista del carrito y el botón de Mercado Pago)</p>
    </main>
  );
};

// ==========================================
// APP PRINCIPAL (Enrutador)
// ==========================================
const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* Contenedor principal con fondo crema muy suave para toda la página */}
      <div style={{ 
        minHeight: '100vh', 
        backgroundColor: '#fafafa', 
        fontFamily: 'system-ui, -apple-system, sans-serif' 
      }}>
        <Header />
        
        {/* Contenedor de las rutas con un max-width para que no se estire infinito en pantallas grandes */}
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/pagos" element={<PagosMockup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;