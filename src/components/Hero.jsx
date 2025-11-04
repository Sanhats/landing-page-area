import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
      {/* Background más limpio y blanco */}
      <div className="absolute inset-0 bg-white" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-hero font-bold text-text-dark mb-8 leading-tight"
          >
            Browse everything.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-text-gray mb-16 font-normal"
          >
            Data points on top of landscape
          </motion.p>

          {/* iPhone mockup - diseño más realista con paisaje */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative mt-8"
          >
            <div className="relative mx-auto w-full max-w-xs md:max-w-sm">
              {/* Phone frame - más realista */}
              <div className="aspect-[9/19] bg-black rounded-[3rem] p-2 shadow-2xl">
                {/* Notch */}
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-full z-10" />
                {/* Screen con paisaje y datos */}
                <div className="w-full h-full bg-white rounded-[2.5rem] relative overflow-hidden">
                  {/* Landscape background - verde/azul como en el diseño */}
                  <div className="absolute inset-0">
                    {/* Sky */}
                    <div className="absolute top-0 left-0 right-0 h-2/3 bg-gradient-to-b from-blue-100 via-blue-50 to-white" />
                    {/* Landscape - verde */}
                    <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-green-400 via-green-300 to-green-200" />
                    {/* Mountain silhouettes */}
                    <div className="absolute bottom-1/3 left-0 right-0 h-24">
                      <div className="absolute bottom-0 left-1/4 w-32 h-20 bg-gradient-to-t from-gray-600 to-gray-400 rounded-t-full opacity-60" />
                      <div className="absolute bottom-0 right-1/4 w-40 h-24 bg-gradient-to-t from-gray-700 to-gray-500 rounded-t-full opacity-70" />
                    </div>
                  </div>
                  
                  {/* Data points floating over landscape */}
                  <div className="absolute inset-0 z-10">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-600 rounded-full"
                        style={{
                          left: `${20 + (i % 4) * 20}%`,
                          top: `${40 + Math.floor(i / 4) * 15}%`,
                        }}
                        animate={{
                          y: [0, -15, 0],
                          opacity: [0.6, 1, 0.6],
                          scale: [1, 1.3, 1],
                        }}
                        transition={{
                          duration: 2 + i * 0.2,
                          repeat: Infinity,
                          delay: i * 0.15,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating data points around phone */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 bg-blue-500 rounded-full shadow-md"
                  style={{
                    left: `${10 + (i % 3) * 30}%`,
                    top: `${20 + Math.floor(i / 3) * 60}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.5, 0.9, 0.5],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2.5 + i * 0.3,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-text-light rounded-full flex justify-center">
          <div className="w-1 h-3 bg-text-light rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

