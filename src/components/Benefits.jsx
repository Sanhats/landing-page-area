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
    <section id="benefits" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Benefits
          </h2>
          <p className="text-lg md:text-xl text-text-gray mb-3 font-serif font-medium">We've cracked the code.</p>
          <p className="text-base md:text-lg text-text-light font-sans font-normal">
            Area provides real insights, without the data overload.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <div className="flex flex-col items-start space-y-4">
                <div className="text-5xl flex-shrink-0">{benefit.icon}</div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-foreground mb-3 leading-tight">
                    {benefit.title}
                  </h3>
                  <p className="text-base text-text-gray leading-relaxed font-sans">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Phone illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-24 flex justify-center"
        >
          <div className="relative w-28 h-28 bg-black rounded-[1.5rem] p-2 shadow-2xl">
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center relative overflow-hidden">
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

