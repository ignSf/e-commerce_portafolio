import './ProductCard.css';
import type { Product } from '../data/products';
import { formatPrice } from '../data/products';

interface Props {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: Props) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <article
      className="product-card"
      style={{ animationDelay: `${index * 0.1}s` }}
      id={`product-${product.id}`}
      itemScope
      itemType="https://schema.org/Product"
    >
      {product.badge && (
        <span className={`product-card__badge product-card__badge--${product.badge.toLowerCase().replace(' ', '-')}`}>
          {product.badge}
        </span>
      )}
      {discount && (
        <span className="product-card__discount">-{discount}%</span>
      )}
      <div className="product-card__image-wrap">
        <img
          src={product.image}
          alt={`${product.name} - ${product.category} gamer en Valparaiso`}
          className="product-card__image"
          loading="lazy"
          width="280"
          height="180"
          itemProp="image"
        />
        <div className="product-card__image-glow" />
      </div>
      <div className="product-card__info">
        <span className="product-card__category">{product.category}</span>
        <h3 className="product-card__name" itemProp="name">{product.name}</h3>
        <meta itemProp="description" content={`${product.name} - compra en Level-Up Gamer Valparaiso al mejor precio`} />
        <div className="product-card__rating" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
          <span className="product-card__stars" aria-label={`Valoracion ${product.rating} de 5 estrellas`}>
            {'★'.repeat(Math.floor(product.rating))}
            {product.rating % 1 >= 0.5 ? '½' : ''}
          </span>
          <meta itemProp="ratingValue" content={String(product.rating)} />
          <meta itemProp="reviewCount" content={String(product.reviews)} />
          <span className="product-card__reviews">({product.reviews})</span>
        </div>
        <div className="product-card__pricing" itemProp="offers" itemScope itemType="https://schema.org/Offer">
          <meta itemProp="priceCurrency" content="CLP" />
          <meta itemProp="availability" content="https://schema.org/InStock" />
          <span className="product-card__price" itemProp="price" content={String(product.price)}>
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="product-card__original">{formatPrice(product.originalPrice)}</span>
          )}
        </div>
      </div>
      <button className="product-card__btn" aria-label={`Agregar ${product.name} al carrito de compras`}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
        </svg>
        Agregar
      </button>
    </article>
  );
}
