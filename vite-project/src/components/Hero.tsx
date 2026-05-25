import './Hero.css';
import heroBanner from '../assets/images/hero_banner.png';

export default function Hero() {
  return (
    <section className="hero" id="inicio" aria-label="Seccion principal">
      <div className="hero__bg">
        <img
          src={heroBanner}
          alt="Setup gaming completo con monitor, teclado mecanico, mouse y audifonos gamer en Valparaiso"
          className="hero__bg-img"
          width="1920"
          height="1080"
        />
        <div className="hero__overlay" />
      </div>
      <div className="hero__content">
        <div className="hero__badge" role="status">
          <span className="hero__badge-dot" />
          Envío gratis en Valparaíso
        </div>
        <h1 className="hero__title">
          Accesorios gamer y articulos electronicos en valparaiso
        </h1>
        <p className="hero__subtitle">
          Periféricos, componentes de PC, monitores y todo lo que necesitas
          para tu setup gaming al mejor precio de la región de Valparaíso.
          Teclados mecánicos, mouse gaming, audífonos 7.1 y tarjetas gráficas RTX.
        </p>
        <div className="hero__cta">
          <a href="#productos" className="btn btn--primary btn--lg" aria-label="Ver catalogo de productos gamer">
            <span>Ver Productos</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
          <a href="#categorias" className="btn btn--outline btn--lg" aria-label="Explorar categorias de productos">
            Explorar Categorías
          </a>
        </div>
        <div className="hero__stats" aria-label="Estadisticas de la tienda">
          <div className="hero__stat">
            <span className="hero__stat-number">500+</span>
            <span className="hero__stat-label">Productos</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-number">2.5K</span>
            <span className="hero__stat-label">Clientes</span>
          </div>
          <div className="hero__stat-divider" aria-hidden="true" />
          <div className="hero__stat">
            <span className="hero__stat-number">4.9★</span>
            <span className="hero__stat-label">Valoración</span>
          </div>
        </div>
      </div>
    </section>
  );
}
