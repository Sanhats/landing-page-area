import { motion } from 'framer-motion'

const SeeTheBigPicture = () => {
  const features = [
    {
      number: '01',
      title: 'Spot Trends in Seconds',
      description: 'No more digging through numbers.',
    },
    {
      number: '02',
      title: 'Get Everyone on the Same Page',
      description: 'Share easy-to-understand reports with your team.',
    },
    {
      number: '03',
      title: 'Make Presentations Pop',
      description: 'Interactive maps and dashboards keep your audience engaged.',
    },
    {
      number: '04',
      title: 'Your Global Snapshot',
      description: 'Get a quick, clear overview of your entire operation.',
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-warm-cream to-background relative overflow-hidden">
      {/* Full-width image section - mountain range */}
      <div className="absolute inset-0 w-full h-full opacity-30">
        {/* Sky gradient */}
        <div className="absolute top-0 left-0 right-0 h-2/3 bg-gradient-to-b from-blue-100 via-blue-50 to-warm-cream" />
        {/* Mountains - múltiples capas más definidas */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3">
          <div className="absolute bottom-0 left-0 right-0 h-full">
            <div className="absolute bottom-0 left-1/4 w-48 h-36 bg-gradient-to-t from-gray-600 via-gray-500 to-gray-400 rounded-t-full opacity-60" />
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-44 bg-gradient-to-t from-gray-700 via-gray-600 to-gray-500 rounded-t-full opacity-70" />
            <div className="absolute bottom-0 right-1/4 w-56 h-40 bg-gradient-to-t from-gray-600 via-gray-500 to-gray-400 rounded-t-full opacity-60" />
            <div className="absolute bottom-0 left-1/8 w-32 h-24 bg-gradient-to-t from-gray-500 to-gray-400 rounded-t-full opacity-50" />
            <div className="absolute bottom-0 right-1/8 w-36 h-28 bg-gradient-to-t from-gray-500 to-gray-400 rounded-t-full opacity-50" />
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
            See the Big Picture
          </h2>
          <p className="text-base md:text-lg text-text-gray max-w-4xl mx-auto leading-relaxed font-sans">
            Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
          {features.map((feature, index) => (
            <motion.div
              key={feature.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <div className="flex items-start space-x-6">
                <span className="text-5xl font-bold text-gray-300 flex-shrink-0 leading-none font-serif">
                  {feature.number}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3 leading-tight">
                    {feature.title}: {feature.description}
                  </h3>
                </div>
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

        {/* Cylindrical columns illustration - white columns sobre fondo crema cálido */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 flex justify-center items-end space-x-8 pb-12 px-8 py-12 rounded-3xl bg-warm-cream"
        >
          {[
            { height: 'h-40', width: 'w-16', delay: 0 },
            { height: 'h-52', width: 'w-20', delay: 0.2 },
            { height: 'h-44', width: 'w-16', delay: 0.4 },
          ].map((col, i) => (
            <motion.div
              key={i}
              className={`${col.width} ${col.height} bg-white rounded-full shadow-lg`}
              style={{
                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              }}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: col.delay }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SeeTheBigPicture

