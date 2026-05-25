import './Features.css';

const features = [
  { icon: '🚚', title: 'Envío Rápido', desc: 'Despacho en 24-48 hrs en toda la región de Valparaíso' },
  { icon: '🛡️', title: 'Garantía', desc: 'Todos nuestros productos cuentan con garantía oficial' },
  { icon: '💳', title: 'Pago Seguro', desc: 'Paga con tarjeta, transferencia o hasta en 12 cuotas' },
  { icon: '🎧', title: 'Soporte 24/7', desc: 'Asistencia técnica y postventa todos los días' },
];

export default function Features() {
  return (
    <section className="features">
      <div className="features__container">
        {features.map((f, i) => (
          <div className="feature" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
            <span className="feature__icon">{f.icon}</span>
            <h3 className="feature__title">{f.title}</h3>
            <p className="feature__desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
