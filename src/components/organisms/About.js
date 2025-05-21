import { dataSite } from '@/data';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id='about' className='bg-neutral-900 text-white px-6 py-20'>
      <div className='max-w-6xl mx-auto text-center mb-14'>
        <h2 className='text-3xl md:text-4xl font-bold leading-tight'>
          Our Core Principles in Audiovisual Consulting
        </h2>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto'>
        {dataSite.info.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className='bg-neutral-800 border border-neutral-700 p-6 rounded-lg text-left'
          >
            <div className='flex items-start gap-4'>
              <div className='text-4xl font-extrabold text-yellow-400'>
                0{i + 1}.
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-2'>{item.title}</h3>
                <p className='text-gray-300 text-sm leading-relaxed'>
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
