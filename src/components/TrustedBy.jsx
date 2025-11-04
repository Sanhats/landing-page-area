import { motion } from 'framer-motion'

const TrustedBy = () => {
  const logos = Array(6).fill('Logoipsum')

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-text-light text-sm font-medium mb-8"
        >
          Trusted by:
        </motion.p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-text-light font-semibold text-xl"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrustedBy

