import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="footer" itemScope itemType="https://schema.org/WPFooter">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#" className="footer__logo" aria-label="Level-Up Gamer - Inicio">
              <span className="footer__logo-icon" aria-hidden="true">⚡</span>
              <span className="footer__logo-text">
                Level<span className="footer__logo-accent">Up</span>
              </span>
            </a>
            <p className="footer__desc">
              Tu tienda de accesorios gamer y artículos electrónicos de confianza en Valparaíso, Chile.
              Periféricos, componentes de PC, monitores gaming y todo lo que necesitas
              para llevar tu setup al siguiente nivel. Envío rápido en toda la región.
            </p>
            <div className="footer__social" aria-label="Redes sociales">
              <a href="https://instagram.com/levelupgamer" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Level-Up Gamer" className="footer__social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://facebook.com/levelupgamer" target="_blank" rel="noopener noreferrer" aria-label="Facebook de Level-Up Gamer" className="footer__social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://tiktok.com/@levelupgamer" target="_blank" rel="noopener noreferrer" aria-label="TikTok de Level-Up Gamer" className="footer__social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1 0-5.78 2.93 2.93 0 0 1 .88.13V9.02a6.21 6.21 0 0 0-.88-.07 6.3 6.3 0 0 0 0 12.59 6.3 6.3 0 0 0 6.3-6.3V8.69a8.16 8.16 0 0 0 3.8.94V6.69z"/></svg>
              </a>
            </div>
          </div>
          <nav className="footer__col" aria-label="Navegacion de tienda">
            <h4 className="footer__col-title">Tienda</h4>
            <ul>
              <li><a href="#productos">Productos Gamer</a></li>
              <li><a href="#categorias">Categorías</a></li>
              <li><a href="#ofertas">Ofertas y Descuentos</a></li>
              <li><a href="#">Nuevos Ingresos</a></li>
              <li><a href="#">Mouse Gaming</a></li>
              <li><a href="#">Teclados Mecánicos</a></li>
            </ul>
          </nav>
          <nav className="footer__col" aria-label="Navegacion de soporte">
            <h4 className="footer__col-title">Soporte</h4>
            <ul>
              <li><a href="#">Centro de Ayuda</a></li>
              <li><a href="#">Envíos en Valparaíso</a></li>
              <li><a href="#">Devoluciones</a></li>
              <li><a href="#">Garantía de Productos</a></li>
              <li><a href="#">Preguntas Frecuentes</a></li>
            </ul>
          </nav>
          <div className="footer__col" itemScope itemType="https://schema.org/LocalBusiness">
            <h4 className="footer__col-title">Contacto</h4>
            <meta itemProp="name" content="Level-Up Gamer Valparaiso" />
            <ul>
              <li>
                <span aria-hidden="true">📍</span>
                <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <span itemProp="addressLocality">Valparaíso</span>, <span itemProp="addressCountry">Chile</span>
                </span>
              </li>
              <li>
                <span aria-hidden="true">📧</span>
                <a href="mailto:contacto@levelup.cl" itemProp="email">contacto@levelup.cl</a>
              </li>
              <li>
                <span aria-hidden="true">📞</span>
                <a href="tel:+56912345678" itemProp="telephone">+56 9 1234 5678</a>
              </li>
              <li>
                <span aria-hidden="true">🕐</span>
                Lun-Vie: 10:00 - 19:00
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2026 Level-Up Gamer Valparaíso. Todos los derechos reservados.</p>
          <nav className="footer__bottom-links" aria-label="Enlaces legales">
            <a href="#">Política de Privacidad</a>
            <a href="#">Términos y Condiciones</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
