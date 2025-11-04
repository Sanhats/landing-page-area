import { motion } from 'framer-motion'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 bg-background py-20">
      {/* Forma orgánica verde oliva detrás del iPhone */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/20 rounded-[40%] blur-2xl" 
          style={{
            clipPath: 'ellipse(50% 40% at 50% 50%)',
          }}
        />
      </motion.div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Texto */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-7xl md:text-8xl lg:text-9xl font-serif font-bold text-foreground mb-6 leading-[1.1] tracking-tight"
            >
              Browse everything.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-text-gray mb-8 font-sans font-normal"
            >
              Data points on top of landscape
            </motion.p>
          </div>

          {/* iPhone mockup con paisaje y puntos de datos - diseño mejorado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex-1 relative flex justify-center items-center"
          >
            <div className="relative w-full max-w-[280px] md:max-w-[320px]">
              {/* iPhone frame más realista */}
              <div className="relative">
                {/* Frame exterior del iPhone */}
                <div className="aspect-[9/19.5] bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 rounded-[2.5rem] p-[3px] shadow-2xl">
                  {/* Screen del iPhone */}
                  <div className="w-full h-full bg-black rounded-[2.25rem] overflow-hidden relative">
                    {/* Notch superior */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[28px] bg-black rounded-b-[20px] z-20" />
                    
                    {/* Contenido de la pantalla */}
                    <div className="w-full h-full relative overflow-hidden">
                      {/* Paisaje de fondo - más detallado y realista */}
                      <div className="absolute inset-0">
                        {/* Cielo con gradiente más suave */}
                        <div className="absolute top-0 left-0 right-0 h-[65%] bg-gradient-to-b from-blue-300 via-blue-200 to-blue-100" />
                        
                        {/* Capas de montañas en el fondo */}
                        <div className="absolute bottom-[35%] left-0 right-0 h-[40%]">
                          {/* Montañas distantes (más claras) */}
                          <div className="absolute bottom-0 left-0 w-full h-full">
                            <div className="absolute bottom-0 left-[10%] w-[35%] h-[60%] bg-gradient-to-t from-gray-500 to-gray-400 rounded-t-full opacity-50" />
                            <div className="absolute bottom-0 right-[10%] w-[30%] h-[50%] bg-gradient-to-t from-gray-500 to-gray-400 rounded-t-full opacity-50" />
                          </div>
                          
                          {/* Montañas principales */}
                          <div className="absolute bottom-0 left-0 w-full h-full">
                            <div className="absolute bottom-0 left-[5%] w-[40%] h-[75%] bg-gradient-to-t from-gray-700 via-gray-600 to-gray-500 rounded-t-full" />
                            <div className="absolute bottom-0 right-[5%] w-[45%] h-[85%] bg-gradient-to-t from-gray-800 via-gray-700 to-gray-600 rounded-t-full" />
                          </div>
                        </div>
                        
                        {/* Tierra/vegetación */}
                        <div className="absolute bottom-0 left-0 right-0 h-[35%] bg-gradient-to-t from-green-600 via-green-500 to-green-400">
                          {/* Detalles de vegetación */}
                          <div className="absolute bottom-0 left-0 right-0 h-full">
                            <div className="absolute bottom-0 left-[15%] w-[20%] h-[30%] bg-gradient-to-t from-green-700 to-green-600 rounded-t-full opacity-60" />
                            <div className="absolute bottom-0 right-[20%] w-[25%] h-[35%] bg-gradient-to-t from-green-700 to-green-600 rounded-t-full opacity-60" />
                          </div>
                        </div>
                      </div>
                      
                      {/* Puntos de datos flotantes sobre el paisaje - más visibles y mejor distribuidos */}
                      <div className="absolute inset-0 z-10">
                        {/* Puntos de datos organizados en el área del paisaje */}
                        {[
                          { x: 25, y: 50, size: 4 },
                          { x: 45, y: 45, size: 5 },
                          { x: 65, y: 50, size: 4 },
                          { x: 35, y: 60, size: 4 },
                          { x: 55, y: 55, size: 5 },
                          { x: 75, y: 58, size: 4 },
                          { x: 20, y: 65, size: 4 },
                          { x: 50, y: 62, size: 5 },
                          { x: 70, y: 65, size: 4 },
                        ].map((point, i) => (
                          <motion.div
                            key={i}
                            className="absolute bg-primary rounded-full shadow-lg"
                            style={{
                              left: `${point.x}%`,
                              top: `${point.y}%`,
                              width: `${point.size}px`,
                              height: `${point.size}px`,
                              transform: 'translate(-50%, -50%)',
                            }}
                            animate={{
                              y: [0, -12, 0],
                              opacity: [0.7, 1, 0.7],
                              scale: [1, 1.4, 1],
                            }}
                            transition={{
                              duration: 2.5 + i * 0.15,
                              repeat: Infinity,
                              delay: i * 0.2,
                              ease: "easeInOut",
                            }}
                          />
                        ))}
                        
                        {/* Líneas de conexión sutiles entre puntos */}
                        <svg className="absolute inset-0 w-full h-full opacity-30" style={{ zIndex: 9 }} viewBox="0 0 100 100" preserveAspectRatio="none">
                          {[
                            { x1: 25, y1: 50, x2: 45, y2: 45 },
                            { x1: 45, y1: 45, x2: 65, y2: 50 },
                            { x1: 35, y1: 60, x2: 55, y2: 55 },
                            { x1: 55, y1: 55, x2: 75, y2: 58 },
                          ].map((line, i) => (
                            <motion.path
                              key={i}
                              d={`M ${line.x1},${line.y1} L ${line.x2},${line.y2}`}
                              stroke="#6B7C4E"
                              strokeWidth="0.3"
                              fill="none"
                              opacity={0.3}
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 2, delay: i * 0.3 }}
                            />
                          ))}
                        </svg>
                      </div>
                      
                      {/* Barra de estado del iPhone */}
                      <div className="absolute top-2 left-0 right-0 z-20 flex justify-between items-center px-8 text-white text-xs font-semibold">
                        <span>9:41</span>
                        <div className="flex items-center gap-1">
                          <div className="w-4 h-2 border border-white rounded-sm">
                            <div className="w-3 h-1.5 bg-white rounded-sm m-0.5" />
                          </div>
                          <div className="w-1 h-1 bg-white rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Botón home del iPhone */}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full" />
              </div>
              
              {/* Puntos de datos flotantes alrededor del iPhone - más sutiles */}
              {[
                { x: -15, y: 30, size: 6 },
                { x: 115, y: 25, size: 5 },
                { x: -10, y: 70, size: 5 },
                { x: 110, y: 75, size: 6 },
              ].map((point, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-primary rounded-full shadow-lg opacity-60"
                  style={{
                    left: `${point.x}%`,
                    top: `${point.y}%`,
                    width: `${point.size}px`,
                    height: `${point.size}px`,
                  }}
                  animate={{
                    y: [0, -25, 0],
                    opacity: [0.4, 0.7, 0.4],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
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

