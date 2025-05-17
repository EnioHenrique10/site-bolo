import React from 'react';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import FeaturedProducts from '../components/featured-products';
import ProductCategories from '../components/product-categories';
import Testimonials from '../components/testimonials';
import Contact from '../components/contact';
import Footer from '../components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f3e6]">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <ProductCategories />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}