import React from "react";
import about_img from '../../assets/about_img.png'

function AboutUs() {
  return (
    <div className="w-full min-h-screen text-white flex flex-col items-center py-16 px-6 md:px-20 bg-gradient-to-b from-[#0d3b5c] to-[#0e4a6f]">
      {/* Heading */}
      <div className="text-center max-w-2xl mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          About <span className="text-blue-400">Us</span>
        </h1>
        <p className="text-gray-300 text-lg">
          We are passionate about building digital experiences that help
          businesses grow, innovate, and connect with their audiences. Our team
          focuses on creativity, performance, and modern technology.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 w-full max-w-6xl">
        {/* Left: Image */}
        <div className="w-full md:w-1/2">
          <img
            src={about_img}
            alt="About Us"
            className="w-full h-[350px] object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Right: Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Who <span className="text-blue-400">We Are</span>
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
           At Metamesh Labs, we empower businesses and individuals to stay ahead in the ever-changing digital economy. 
           From Artificial Intelligence to Blockchain and Crypto, we provide consulting, training, and hands-on support 
           to help you embrace the technologies shaping the future.We are not just advisors—we’re your partners in 
           transformation, ensuring smooth adoption of AI, automation, and digital tools that unlock growth and efficiency.

          </p>
          <ul className="space-y-3 text-gray-300">
            <li>✅ Experienced Developers & Designers</li>
            <li>✅ Focused on Innovation & Quality</li>
            <li>✅ Customer-Centric Approach</li>
            <li>✅ Transparent & Reliable Process</li>
            <li>🌍 10+ Years Combined Experience</li>
            <li>🤝 Global Clientele</li>
            <li>📊 Cross-Industry Expertise</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
