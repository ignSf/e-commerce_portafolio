import './PromoBanner.css';

export default function PromoBanner() {
  return (
    <section className="promo" id="ofertas">
      <div className="promo__container">
        <div className="promo__content">
          <span className="promo__tag">🔥 Oferta Limitada</span>
          <h2 className="promo__title">Hasta 30% de Descuento</h2>
          <p className="promo__text">
            En periféricos y componentes seleccionados. Solo por tiempo limitado.
            ¡Arma tu setup gamer al mejor precio de Valparaíso!
          </p>
          <div className="promo__timer">
            <div className="promo__timer-block">
              <span className="promo__timer-num">02</span>
              <span className="promo__timer-label">Días</span>
            </div>
            <span className="promo__timer-sep">:</span>
            <div className="promo__timer-block">
              <span className="promo__timer-num">14</span>
              <span className="promo__timer-label">Hrs</span>
            </div>
            <span className="promo__timer-sep">:</span>
            <div className="promo__timer-block">
              <span className="promo__timer-num">38</span>
              <span className="promo__timer-label">Min</span>
            </div>
            <span className="promo__timer-sep">:</span>
            <div className="promo__timer-block">
              <span className="promo__timer-num">05</span>
              <span className="promo__timer-label">Seg</span>
            </div>
          </div>
          <a href="#productos" className="btn btn--primary btn--lg">Comprar Ahora</a>
        </div>
        <div className="promo__orbs">
          <div className="promo__orb promo__orb--1" />
          <div className="promo__orb promo__orb--2" />
        </div>
      </div>
    </section>
  );
}
