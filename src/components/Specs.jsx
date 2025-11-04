import { motion } from 'framer-motion'

const CheckIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

const Specs = () => {
  const products = [
    {
      name: 'Area',
      features: [
        'Ultra-fast browsing',
        'Advanced AI insights',
        'Seamless integration',
        'Full UTF-8 support',
      ],
      highlighted: true,
    },
    {
      name: 'WebSurge',
      features: [
        'Fast browsing',
        'Basic AI recommendations',
        'Restricts customization',
        'Potential display errors',
      ],
      highlighted: false,
    },
    {
      name: 'HyperView',
      features: [
        'Moderate speeds',
        'No AI assistance',
        'Steep learning curve',
        'Partial UTF-8 support',
      ],
      highlighted: false,
    },
  ]

  return (
    <section id="specifications" className="py-24 md:py-32 bg-gradient-to-b from-white to-warm-cream relative overflow-hidden">
      {/* Background decoration - más sutil */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-section-title font-bold text-text-dark mb-6">
            Specs
          </h2>
          <p className="text-2xl text-text-gray mb-3 font-medium">Why Choose Area?</p>
          <p className="text-xl text-text-light max-w-3xl mx-auto leading-relaxed">
            You need a solution that keeps up. That's why we developed Area. A developer-friendly approach to streamline your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`relative p-10 rounded-3xl shadow-lg transition-all border ${
                product.highlighted
                  ? 'bg-text-dark text-white scale-105 border-text-dark shadow-2xl'
                  : 'bg-white text-text-dark border-gray-200'
              }`}
            >
              {product.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-text-dark px-5 py-2 rounded-full text-sm font-semibold text-white shadow-lg">
                  Recommended
                </div>
              )}
              
              <h3 className={`text-3xl font-bold mb-8 ${
                product.highlighted ? 'text-white' : 'text-text-dark'
              }`}>
                {product.name}
              </h3>
              
              <ul className="space-y-5">
                {product.features.map((feature, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 + idx * 0.05 }}
                    className="flex items-start space-x-4"
                  >
                    {product.highlighted ? (
                      <div className="text-green-400 flex-shrink-0 mt-1">
                        <CheckIcon />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-gray-300 flex-shrink-0 mt-1" />
                    )}
                    <span className={`text-lg ${product.highlighted ? 'text-gray-200' : 'text-text-gray'}`}>
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-text-dark text-white rounded-xl font-semibold text-lg hover:bg-gray-800 transition-colors shadow-lg"
          >
            Discover More
          </motion.button>
        </motion.div>

        {/* Concrete sphere illustration - balanced between spheres */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 flex justify-center items-center space-x-6"
        >
          {/* Left sphere - smaller */}
          <motion.div 
            className="w-20 h-20 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 rounded-full shadow-xl"
            style={{
              boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0 }}
          />
          {/* Center sphere - larger, balanced */}
          <motion.div 
            className="w-32 h-32 bg-gradient-to-br from-gray-500 via-gray-600 to-gray-700 rounded-full shadow-2xl"
            style={{
              boxShadow: '0 20px 40px rgba(0,0,0,0.25)',
            }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
          />
          {/* Right sphere - smaller */}
          <motion.div 
            className="w-20 h-20 bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 rounded-full shadow-xl"
            style={{
              boxShadow: '0 15px 35px rgba(0,0,0,0.2)',
            }}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.6 }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Specs

