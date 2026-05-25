import './Navbar.css';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} id="navbar">
      <div className="navbar__container">
        <a href="#" className="navbar__logo">
          <span className="navbar__logo-icon">⚡</span>
          <span className="navbar__logo-text">
            Level<span className="navbar__logo-accent">Up</span>
          </span>
        </a>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li><a href="#inicio" onClick={() => setMenuOpen(false)}>Inicio</a></li>
          <li><a href="#categorias" onClick={() => setMenuOpen(false)}>Categorías</a></li>
          <li><a href="#productos" onClick={() => setMenuOpen(false)}>Productos</a></li>
          <li><a href="#ofertas" onClick={() => setMenuOpen(false)}>Ofertas</a></li>
          <li><a href="#contacto" onClick={() => setMenuOpen(false)}>Contacto</a></li>
        </ul>

        <div className="navbar__actions">
          <button className="navbar__cart" id="cart-btn" aria-label="Carrito de compras">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
            </svg>
            <span className="navbar__cart-badge">3</span>
          </button>
          <button
            className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menú"
            id="hamburger-btn"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  );
}
