import './Categories.css';
import { categories } from '../data/products';

export default function Categories() {
  return (
    <section className="categories" id="categorias">
      <div className="categories__container">
        <div className="section-header">
          <span className="section-tag">Explora</span>
          <h2 className="section-title">Categorías</h2>
          <p className="section-subtitle">
            Encuentra exactamente lo que necesitas para tu setup perfecto
          </p>
        </div>
        <div className="categories__grid">
          {categories.map((cat, i) => (
            <a
              href="#productos"
              className="category-card"
              key={cat.name}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <span className="category-card__icon">{cat.icon}</span>
              <span className="category-card__name">{cat.name}</span>
              <span className="category-card__count">{cat.count} productos</span>
              <div className="category-card__glow" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
