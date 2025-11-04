import { motion } from 'framer-motion'

const MapYourSuccess = () => {
  const steps = [
    {
      number: '01',
      title: 'Get Started',
      description: "With our intuitive setup, you're up and running in minutes.",
    },
    {
      number: '02',
      title: 'Customize and Configure',
      description: 'Adapt Area to your specific requirements and preferences.',
    },
    {
      number: '03',
      title: 'Grow Your Business',
      description: 'Make informed decisions to exceed your goals.',
    },
  ]

  return (
    <section id="how-to" className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Full-width image section - eye-catching green landscape */}
      <div className="absolute inset-0 w-full h-full">
        {/* Sky */}
        <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-blue-50 via-white to-green-50" />
        {/* Green landscape layers */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2">
          <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-green-500 via-green-400 to-green-300" />
          <div className="absolute bottom-0 left-0 right-0 h-full">
            <div className="absolute bottom-0 left-1/4 w-48 h-32 bg-gradient-to-t from-green-600 via-green-500 to-green-400 rounded-t-full opacity-80" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-40 bg-gradient-to-t from-green-700 via-green-600 to-green-500 rounded-t-full opacity-90" />
            <div className="absolute bottom-0 right-1/4 w-56 h-36 bg-gradient-to-t from-green-600 via-green-500 to-green-400 rounded-t-full opacity-80" />
            <div className="absolute bottom-0 left-1/8 w-32 h-24 bg-gradient-to-t from-green-500 to-green-400 rounded-t-full opacity-70" />
            <div className="absolute bottom-0 right-1/8 w-36 h-28 bg-gradient-to-t from-green-500 to-green-400 rounded-t-full opacity-70" />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Map Your Success
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-10">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.01, y: -5 }}
              className="flex items-start space-x-8 bg-white p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
            >
              <span className="text-6xl font-bold text-gray-300 flex-shrink-0 leading-none font-serif">
                {step.number}
              </span>
              <div className="flex-1 pt-2">
                <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3 leading-tight">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-text-gray leading-relaxed font-sans">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-primary text-white rounded-lg font-semibold text-lg hover:opacity-90 transition-all shadow-md font-sans"
          >
            Discover More
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default MapYourSuccess

