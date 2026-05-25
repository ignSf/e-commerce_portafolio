import './Newsletter.css';

export default function Newsletter() {
  return (
    <section className="newsletter" id="contacto">
      <div className="newsletter__container">
        <div className="newsletter__content">
          <h2 className="newsletter__title">¿No te pierdas nada?</h2>
          <p className="newsletter__text">
            Suscríbete y recibe ofertas exclusivas, lanzamientos y novedades
            gamer directamente en tu correo.
          </p>
          <form className="newsletter__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              className="newsletter__input"
              placeholder="tu@email.com"
              aria-label="Correo electrónico"
              id="newsletter-email"
            />
            <button type="submit" className="btn btn--primary newsletter__btn" id="newsletter-submit">
              Suscribirme
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
