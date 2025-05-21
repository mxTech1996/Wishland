'use client';
import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import { FaVideo, FaBullhorn, FaEdit, FaRegPlayCircle } from 'react-icons/fa';

const services = dataSite.services;

export default function ServicesSection() {
  return (
    <section id='services' className='bg-black py-16'>
      <h1 className='text-center text-4xl font-bold text-white mb-10'>
        Our Services
      </h1>
      <div className='max-w-7xl mx-auto px-6'>
        <div className='grid md:grid-cols-3 gap-8'>
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300 }}
              className='bg-[#1e1e1e] p-8 rounded-md shadow-md hover:shadow-xl transition-shadow'
            >
              <img
                src={service.image}
                alt={service.title}
                className='mb-6 w-60 h-60 object-cover rounded-md'
              />
              <h3 className='text-white text-2xl font-semibold mb-3'>
                {service.title}
              </h3>
              <p className='text-gray-300 leading-relaxed'>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
