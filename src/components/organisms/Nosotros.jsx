import React from 'react';


export default function Nosotros() {
  return (
    <div className="nosotros-container">

      <section className="nosotros-hero">
        <div className="hero-overlay">
          <h1 className="hero-title">🎮 Level Up Gamer</h1>
          <p className="hero-subtitle">Donde los gamers encuentran su hogar</p>
          <div className="hero-tagline">"Game On, Level Up!"</div>
        </div>
      </section>
      <div className="nosotros-content">

        <section className="nosotros-section" id="quienes-somos">
          <div className="section-header">
            <h2 className="section-title">👥 Quiénes Somos</h2>
            <div className="section-divider"></div>
          </div>
          <div className="section-content">
            <p className="section-text">
              <strong>Level Up Gamer</strong> es mas que una tienda, somos una comunidad apasionada por el mundo del gaming. 
              Fundada en 2025 por un grupo de gamers profesionales, nuestra tienda nacio de la necesidad de crear 
              un espacio donde los jugadores pudieran encontrar todo lo que necesitan para llevar su experiencia 
              de juego al siguiente nivel.
            </p>
            <p className="section-text">
              Somos un equipo de <strong>3 apasionados gamers</strong> que combinamos nuestro amor por los videojuegos 
              con años de experiencia en tecnologia y atencion al cliente. Desde el estudiante que juega 
              en sus tiempos libres hasta el profesional del eSports, entendemos las necesidades de cada tipo de jugador.
            </p>
            <div className="team-stats">
              <div className="stat-card">
                <div className="stat-number">15+</div>
                <div className="stat-label">Gamers en el equipo</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">2025</div>
                <div className="stat-label">Año de fundación</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">5000+</div>
                <div className="stat-label">Clientes satisfechos</div>
              </div>
            </div>
          </div>
        </section>

        <div className="mission-vision-grid">

          <section className="mission-section" id="mision">
            <div className="card-icon">🎯</div>
            <h3 className="card-title">Nuestra Misión</h3>
            <blockquote className="card-quote">
              "Potenciar la experiencia gaming de cada jugador, proporcionando productos de calidad, 
              asesoramiento experto y un espacio donde la comunidad pueda crecer y compartir su pasion 
              por los videojuegos."
            </blockquote>
            <div className="card-points">
              <div className="point">
                <span className="point-icon">✓</span>
                <span>Seleccionar cuidadosamente cada producto</span>
              </div>
              <div className="point">
                <span className="point-icon">✓</span>
                <span>Ofrecer precios competitivos sin comprometer calidad</span>
              </div>
              <div className="point">
                <span className="point-icon">✓</span>
                <span>Brindar asesoramiento personalizado basado en experiencia real</span>
              </div>
              <div className="point">
                <span className="point-icon">✓</span>
                <span>Crear una comunidad donde los gamers se sientan en casa</span>
              </div>
            </div>
          </section>

          <section className="vision-section" id="vision">
            <div className="card-icon">🌟</div>
            <h3 className="card-title">Nuestra Vision</h3>
            <blockquote className="card-quote">
              "Ser la tienda gamer de referencia en Latinoamérica para 2030, reconocida por nuestra calidad, 
              innovacion y compromiso con la comunidad gaming."
            </blockquote>
            <div className="vision-goals">
              <h4 className="goals-title">Nuestras Metas:</h4>
              <div className="goal-item">
                <span className="goal-badge">🚀</span>
                <span>Expandirnos a 10 tiendas físicas</span>
              </div>
              <div className="goal-item">
                <span className="goal-badge">🎨</span>
                <span>Desarrollar línea exclusiva Level Up</span>
              </div>
              <div className="goal-item">
                <span className="goal-badge">🏆</span>
                <span>Crear nuestro propio eSports team</span>
              </div>
              <div className="goal-item">
                <span className="goal-badge">🎬</span>
                <span>Implementar reality shows y torneos</span>
              </div>
            </div>
          </section>
        </div>
        <section className="nosotros-section" id="que-ofrecemos">
          <div className="section-header">
            <h2 className="section-title"> Lo Que Ofrecemos</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎮</div>
              <h4 className="service-title">Productos de Calidad</h4>
              <ul className="service-list">
                <li>Consolas de última generación</li>
                <li>PC Gamer y componentes</li>
                <li>Periféricos profesionales</li>
                <li>Sillas ergonómicas gamer</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h4 className="service-title">Servicios Especializados</h4>
              <ul className="service-list">
                <li>Armado de PC personalizadas</li>
                <li>Mantenimiento y limpieza</li>
                <li>Asesoría técnica gratuita</li>
                <li>Prueba de productos</li>
                <li>Soporte post-venta</li>
                <li>Garantías extendidas</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🏆</div>
              <h4 className="service-title">Comunidad y Eventos</h4>
              <ul className="service-list">
                <li>Torneos Mensuales con premios</li>
                <li>Noches de juego gratuitas</li>
                <li>Talleres y workshops</li>
                <li>Zona LAN equipada</li>
                <li>Eventos exclusivos</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">🚚</div>
              <h4 className="service-title">Logística Impecable</h4>
              <ul className="service-list">
                <li>Envío express 24-48 horas</li>
                <li>Retiro en tienda sin costo</li>
                <li>Pagos seguros múltiples</li>
                <li>Garantía extendida</li>
                <li>Política de devoluciones flexible</li>
                <li>Atención personalizada</li>
              </ul>
            </div>
          </div>
        </section>
        <section className="nosotros-section" id="valores">
          <div className="section-header">
            <h2 className="section-title"> Nuestros Valores</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎮</div>
              <h4 className="value-title">Pasión Gaming</h4>
              <p className="value-desc">Vivimos y respiramos videojuegos. Cada recomendación viene de experiencia real.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4 className="value-title">Honestidad Transparente</h4>
              <p className="value-desc">Te decimos exactamente lo que necesitas, sin venderte de más.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h4 className="value-title">Innovación Constante</h4>
              <p className="value-desc">Siempre a la vanguardia de las últimas tendencias y tecnologías.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">👥</div>
              <h4 className="value-title">Comunidad First</h4>
              <p className="value-desc">Tu satisfacción es nuestro éxito. Escuchamos y crecemos juntos.</p>
            </div>
            
            <div className="value-card">
              <div className="value-icon">🛡️</div>
              <h4 className="value-title">Calidad Garantizada</h4>
              <p className="value-desc">Trabajamos solo con marcas reconocidas y probadas.</p>
            </div>
          </div>
        </section>
        <section className="nosotros-section" id="horarios-contacto">
          <div className="section-header">
            <h2 className="section-title">⏰ Horarios y Contacto</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="contact-grid">
            <div className="contact-card">
              <h3 className="contact-title">📅 Horarios de Atención</h3>
              
              <div className="schedule-section">
                <h4 className="schedule-title">📍 Tienda Física</h4>
                <div className="schedule-item">
                  <span className="schedule-days">Lunes a Viernes</span>
                  <span className="schedule-hours">8:00 AM - 8:00 PM</span>
                </div>
                <div className="schedule-item">
                  <span className="schedule-days">Sábados y Domingos</span>
                  <span className="schedule-hours">10:00 AM - 8:00 PM</span>
                </div>
              </div>
              
              <div className="schedule-section">
                <h4 className="schedule-title">🌐 Tienda Online</h4>
                <div className="schedule-item">
                  <span className="schedule-days">Tienda Virtual</span>
                  <span className="schedule-hours highlight">24/7 - Siempre abierta</span>
                </div>
                <div className="schedule-item">
                  <span className="schedule-days">Soporte en vivo</span>
                  <span className="schedule-hours">9:00 AM - 9:00 PM</span>
                </div>
              </div>
            </div>
            <div className="contact-card">
              <h3 className="contact-title">📞 Contacto</h3>
              
              <div className="contact-info">
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div>
                    <div className="contact-label">Teléfono</div>
                    <div className="contact-value">+56 9 7552 5335</div>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">💬</span>
                  <div>
                    <div className="contact-label">WhatsApp</div>
                    <div className="contact-value">+56 9 7552 5335</div>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <div>
                    <div className="contact-label">Email</div>
                    <div className="contact-value">hola@levelupgamer.cl</div>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📍</span>
                  <div>
                    <div className="contact-label">Dirección</div>
                    <div className="contact-value">Calle Gamer 123, Santiago Centro</div>
                  </div>
                </div>
                
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <div>
                    <div className="contact-label">Redes Sociales</div>
                    <div className="contact-social">
                      <span className="social-item">📸 @levelupgamer_cl</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="promise-section">
          <div className="promise-content">
            <div className="promise-icon">✨</div>
            <h3 className="promise-title">Nuestra Promesa</h3>
            <blockquote className="promise-text">
              "No solo vendemos productos gaming, construimos experiencias. Cada compra en Level Up Gamer 
              viene con nuestro compromiso de calidad, nuestra pasión por los videojuegos y nuestra dedicación 
              a hacerte sentir parte de algo más grande: la comunidad gaming."
            </blockquote>
            <div className="promise-cta">
              <p className="cta-text">¡Ven a visitarnos y descubre por qué somos la elección de los verdaderos gamers!</p>
              <div className="cta-buttons">
                <a href="/catalogo" className="btn-primary">🛒 Explorar Catálogo</a>
              </div>
            </div>
          </div>
        </section>
        <section className="final-cta">
          <h3 className="final-title">🎮 ¿Listo para el siguiente nivel?</h3>
          <div className="final-actions">
            <a  className="action-link">🛒 Explora nuestro catálogo</a>
            <a className="action-link">🎯 Únete a nuestros torneos</a>
            <a className="action-link">💬 Sé parte de la comunidad</a>
            <a  className="action-link">⭐ Comparte tu experiencia</a>
          </div>
          <div className="final-tagline">
            <strong>Level Up Gamer</strong> - Donde los gamers encuentran su hogar.
          </div>
        </section>
      </div>
    </div>
  );
}