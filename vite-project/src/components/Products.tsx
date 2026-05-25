import './Products.css';
import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function Products() {
  return (
    <section className="products" id="productos">
      <div className="products__container">
        <div className="section-header">
          <span className="section-tag">Catálogo</span>
          <h2 className="section-title">Productos Destacados</h2>
          <p className="section-subtitle">
            Lo más vendido y lo último en tecnología gamer
          </p>
        </div>
        <div className="products__grid">
          {products.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
        <div className="products__cta">
          <a href="#" className="btn btn--outline btn--lg">
            Ver Todo el Catálogo
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
