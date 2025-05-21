import { dataSite } from '@/data';
import { motion } from 'framer-motion';

const testimonials = dataSite.references;
const getInitials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

const star = '⭐';

export default function TestimonialsSection() {
  return (
    <section id='testimonials' className='bg-black text-white px-6 py-20'>
      <div className='max-w-7xl mx-auto grid md:grid-cols-3 gap-8'>
        {testimonials.map((testimonial, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className='border border-white/10 p-6 rounded-lg bg-neutral-900 shadow-md'
          >
            {/* Stars */}
            <div className='text-yellow-400 text-lg mb-2'>
              {star.repeat(testimonial.rating)}
            </div>

            {/* Testimonial Text */}
            <p className='text-sm text-gray-200 mb-6'>
              {testimonial.description}
            </p>

            {/* Author */}
            <div className='flex items-center gap-3'>
              {testimonial.image ? (
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className='w-10 h-10 rounded-full object-cover'
                />
              ) : (
                <div className='w-10 h-10 rounded-full bg-yellow-600 flex items-center justify-center text-black font-bold'>
                  {getInitials(testimonial.name)}
                </div>
              )}
              <span className='font-semibold'>{testimonial.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
