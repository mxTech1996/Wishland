'use client';
import { useCart } from 'ecommerce-mxtech';
import { useEffect, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { products } = useCart();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <nav className='max-w-7xl mx-auto flex items-center justify-between px-6 py-4 text-white'>
        <div className='text-3xl font-extrabold text-yellow-400'>Wishland</div>
        <ul className='hidden md:flex gap-8 font-medium text-white'>
          <li>
            <a href='/#about'>About</a>
          </li>
          <li>
            <a href='/#products'>Products</a>
          </li>
          <li>
            <a href='/#services'>Services</a>
          </li>
          <li>
            <a href='/#testimonials'>Testimonials</a>
          </li>
          <li>
            <a href='/more-information'>Contact Us</a>
          </li>
        </ul>
        <div className='hidden md:block'>
          <button className='relative border border-white rounded-full px-5 py-2 hover:bg-white hover:text-black transition'>
            <FaShoppingCart className='text-2xl' />
            <span className='absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-sm'>
              {products.length}
            </span>
          </button>
        </div>
      </nav>
    </header>
  );
}
