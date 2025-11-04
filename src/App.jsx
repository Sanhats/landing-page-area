import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Benefits from './components/Benefits'
import SeeTheBigPicture from './components/SeeTheBigPicture'
import Specs from './components/Specs'
import Testimonial from './components/Testimonial'
import MapYourSuccess from './components/MapYourSuccess'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrustedBy />
      <Benefits />
      <SeeTheBigPicture />
      <Specs />
      <Testimonial />
      <MapYourSuccess />
      <Footer />
    </div>
  )
}

export default App

