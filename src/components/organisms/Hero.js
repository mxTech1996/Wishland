'use client';

import { dataSite } from '@/data';

export default function Hero() {
  const url = dataSite.image_hero2;
  return (
    <section
      className='w-full h-[100vh] bg-cover bg-center bg-no-repeat relative text-white'
      style={{
        backgroundImage: `url(${url})`,
        // add shodow to see text
        backgroundBlendMode: 'overlay',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backgroundSize: 'cover',
      }} // Cambia a tu ruta
    >
      <div className='max-w-7xl mx-auto h-full flex flex-col justify-center px-6 pt-24 pb-12'>
        <h1 className='text-5xl md:text-6xl font-extrabold leading-tight mb-6'>
          {dataSite.subtitle}
        </h1>
        <p className='max-w-xl text-lg mb-8'>{dataSite.description}</p>
        <div className='flex gap-4'>
          <button
            onClick={() => (window.location.href = '#services')}
            className='bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-300'
          >
            OUR SERVICES
          </button>
          <button
            onClick={() => (window.location.href = '/more-information')}
            className='border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition'
          >
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Right-side stats */}
      <div className='absolute right-10 bottom-10 text-right space-y-10 text-white'>
        <div>
          <p className='text-5xl font-semibold'>50+</p>
          <p className='text-lg'>Happy Clients</p>
        </div>
        <div>
          <p className='text-5xl font-semibold'>20+</p>
          <p className='text-lg'>Worker Employed</p>
        </div>
      </div>
    </section>
  );
}
