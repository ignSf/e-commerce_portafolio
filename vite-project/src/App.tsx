import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import PromoBanner from './components/PromoBanner';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Categories />
        <Products />
        <PromoBanner />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

export default App;
