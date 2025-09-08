import React from "react";
import { motion } from "framer-motion";

function Card({ title, description, benefits = [], imageUrl }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="w-full max-w-md bg-[#0a0f1c] text-white rounded-2xl 
                 shadow-[0_0_20px_rgba(3,114,250,0.4)] 
                 border border-transparent hover:border-neonBlue 
                 hover:shadow-[0_0_35px_rgba(3,114,250,0.8)] 
                 overflow-hidden transition-all duration-500"
    >
      {/* Image Section */}
      <div className="w-full h-52 bg-gradient-to-r from-[#021026] to-[#062248] relative">
        <img
          src={imageUrl || "https://source.unsplash.com/600x400/?technology,futuristic"}
          alt={title}
          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent"></div>
      </div>

      {/* Text Section */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-300 mb-4">{description}</p>

        {/* Benefits List */}
        {benefits.length > 0 && (
          <ul className="space-y-2 mb-4 text-gray-200">
            {benefits.map((benefit, index) => (
              <li className="flex items-center gap-2" key={index}>
                <span className="text-blue-400">⚡</span> {benefit}
              </li>
            ))}
          </ul>
        )}

        {/* CTA Button */}
        <button
          className="w-full py-3 rounded-xl font-semibold text-lg
                     bg-gradient-to-r from-blue-500 to-blue-700
                     shadow-[0_0_15px_rgba(3,114,250,0.7)]
                     hover:shadow-[0_0_25px_rgba(3,114,250,1)]
                     hover:scale-105 transition duration-300"
        >
          Explore AI & Crypto 🚀
        </button>
      </div>
    </motion.div>
  );
}

export default Card;
