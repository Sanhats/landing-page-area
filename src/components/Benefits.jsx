import { motion } from 'framer-motion'

const Benefits = () => {
  const benefits = [
    {
      title: 'Amplify Insights',
      description: 'Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.',
      icon: '📊',
    },
    {
      title: 'Control Your Global Presence',
      description: 'Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.',
      icon: '🌍',
    },
    {
      title: 'Remove Language Barriers',
      description: 'Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.',
      icon: '🌐',
    },
    {
      title: 'Visualize Growth',
      description: 'Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.',
      icon: '📈',
    },
  ]

  return (
    <section id="benefits" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-section-title font-bold text-text-dark mb-6">
            Benefits
          </h2>
          <p className="text-2xl text-text-gray mb-3 font-medium">We've cracked the code.</p>
          <p className="text-xl text-text-light font-normal">
            Area provides real insights, without the data overload.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="bg-white p-10 rounded-3xl shadow-md hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="text-5xl flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-text-dark mb-4 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-lg text-text-gray leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Phone illustration - más estilizado y realista */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 flex justify-center"
        >
          <div className="relative w-28 h-28 bg-black rounded-[1.5rem] p-2 shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center relative overflow-hidden">
              {/* Simple phone screen content */}
              <div className="absolute inset-2 bg-white rounded-lg flex items-center justify-center">
                <div className="text-4xl">📱</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Benefits

