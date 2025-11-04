import { motion } from 'framer-motion'

const Footer = () => {
  const navItems = ['Benefits', 'Specifications', 'How-to', 'Contact Us']

  return (
    <footer id="contact-us" className="bg-text-dark text-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-section-title font-bold mb-6">
            Connect with us
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-white text-text-dark rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Learn More
          </motion.button>
        </motion.div>

        <div className="border-t border-gray-800 pt-12 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl font-bold"
            >
              Area
            </motion.div>

            <motion.nav
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-6 md:gap-8"
            >
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href={item === 'Specifications' ? '#specifications' : item === 'How-to' ? '#how-to' : item === 'Contact Us' ? '#contact-us' : '#benefits'}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                  className="text-gray-400 hover:text-white transition-colors text-lg"
                >
                  {item}
                </motion.a>
              ))}
            </motion.nav>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16 pt-8 border-t border-gray-800 text-gray-400 text-lg"
          >
            <p>© Area. 2025</p>
            <p className="mt-2">All Rights Reserved</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

