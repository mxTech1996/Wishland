import { dataSite } from '@/data';
import { useCart } from 'ecommerce-mxtech';
import { motion } from 'framer-motion';

const team = dataSite.products;

const getInitials = (name) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

export default function ProductSection() {
  const { handleAddOrRemoveProduct, validateProductInCart } = useCart();
  return (
    <section id='products' className='bg-black text-white px-6 py-20'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex items-center justify-between mb-10'>
          <h2 className='text-3xl font-bold'>Our Products </h2>
        </div>

        <div className='grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {team.map((member, i) => {
            const isInCart = validateProductInCart(member.id);
            const handleClick = () => {
              handleAddOrRemoveProduct(member.id);
            };
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className='bg-neutral-900 rounded-lg overflow-hidden text-center shadow-md'
              >
                <div className='w-full aspect-[3/4] bg-neutral-800 flex items-center justify-center'>
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className='w-full h-full object-cover'
                    />
                  ) : (
                    <div className='w-full h-full flex items-center justify-center text-4xl font-bold text-black bg-yellow-500'>
                      {getInitials(member.name)}
                    </div>
                  )}
                </div>
                <div className='py-4'>
                  <h3 className='text-lg font-semibold'>{member.name}</h3>
                  <p className='text-sm text-gray-400'>${member.price}</p>
                  <p className='text-sm text-gray-400'>{member.description}</p>
                  {/* add to cart button */}
                  <button
                    onClick={handleClick}
                    className={`mt-2 rounded-full px-4 py-2 text-sm transition ${
                      isInCart ? 'bg-red-500' : 'bg-yellow-500'
                    } text-black hover:bg-yellow-400`}
                  >
                    {isInCart ? 'Remove from Cart' : 'Add to Cart'}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
