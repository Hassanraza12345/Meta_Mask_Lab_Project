import React from 'react'
import Herobackground from './Herobackground'

function Hero({ Services_ref, BookNow_ref }) {
  const handleScrollToServices = () => {
    Services_ref.current.scrollIntoView({ behavior: "smooth" })
  }
  const handleScrollToBookNow = () => {
    BookNow_ref.current.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <Herobackground />

      {/* Dark Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>

      {/* Foreground Content */}
      <div className="absolute z-10 w-full h-full flex flex-col justify-center items-center md:items-start text-center md:text-left px-6 md:px-20 text-white">
        <div className="w-full md:w-5/6 lg:w-3/4 pt-40">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Empowering Your Business for the Digital Future
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl">
            AI | Digital Transformation | Crypto Awareness | Business Consultancy
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex pt-40 flex-col sm:flex-row gap-4">
          <button 
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
          onClick={handleScrollToBookNow}>
            Book a Free Consultation
          </button>

          <button
            onClick={handleScrollToServices}
            className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition"
          >
            Explore Our Services
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
