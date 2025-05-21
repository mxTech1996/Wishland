'use client';
import { dataSite } from '@/data';
import { motion } from 'framer-motion';
import { FaVideo, FaBullhorn, FaEdit, FaRegPlayCircle } from 'react-icons/fa';

const services = [
  {
    icon: <FaVideo size={40} className='text-yellow-400' />,
    title: 'Music Video Production',
    description:
      'From concept to final cut, we create compelling music videos that align with your artistic vision.',
  },
  {
    icon: <FaBullhorn size={40} className='text-yellow-400' />,
    title: 'Commercial Spots',
    description:
      'Engaging, brand-focused commercials designed to boost awareness and conversion.',
  },
  {
    icon: <FaEdit size={40} className='text-yellow-400' />,
    title: 'Post-Production Services',
    description:
      'Comprehensive editing, color grading, and sound design to bring your project to life.',
  },
];

export default function Intro() {
  return (
    <>
      <section className='bg-black py-16'>
        <div className='max-w-7xl mx-auto px-6'>
          <div className='grid md:grid-cols-3 gap-8'>
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className='bg-[#1e1e1e] p-8 rounded-md shadow-md hover:shadow-xl transition-shadow'
              >
                <div className='mb-6'>{service.icon}</div>
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
      <section className='bg-black text-white py-20'>
        <div className='max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center'>
          {/* Text Section */}
          <div>
            <h2 className='text-4xl font-bold mb-6'>Why choose us?</h2>
            <p className='text-lg text-gray-300 mb-8'>
              With over a decade of experience in creative visual production,
              our team blends cinematic expertise with brand strategy. We’ve
              helped clients produce high-impact music videos, ads, and branded
              content that connects emotionally and performs commercially.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='bg-yellow-400 text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2'
            >
              <FaRegPlayCircle />
              View Work
            </motion.button>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={dataSite.services[2].image}
              alt='Video Production'
              className='rounded-md w-full object-cover shadow-lg'
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
