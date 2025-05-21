'use client';

import AboutSection from '@/components/organisms/About';
import FaqSection from '@/components/organisms/Faqs';
import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/Hero';
import Intro from '@/components/organisms/Intro';
import Navbar from '@/components/organisms/Navbar';
import ProductSection from '@/components/organisms/Products';
import ServicesSection from '@/components/organisms/Services';
import TestimonialsSection from '@/components/organisms/Testimonials';

export default function Home() {
  return (
    <main className='bg-black '>
      <Navbar />
      <Hero />
      <Intro />
      <AboutSection />
      <ServicesSection />
      <ProductSection />
      <FaqSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
