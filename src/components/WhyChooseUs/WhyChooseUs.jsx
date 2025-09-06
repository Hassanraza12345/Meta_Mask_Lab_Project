import React from "react";
import WhyChooseUs_img from '../../assets/WhyChooseUs.jpg';

function WhyChooseUs() {
  return (
    <div className="w-full min-h-screen text-white flex flex-col items-center py-16 px-6 md:px-20 border-t border-gray-500 bg-gradient-to-b from-[#0b2a3d] to-[#0d3b5c]">
      {/* Heading */}
      <div className="text-center max-w-3xl mb-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Why <span className="text-blue-400">Partner With Us?</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl">
          We are passionate about building digital experiences that help
          businesses grow, innovate, and connect with their audiences. Our team
          focuses on creativity, performance, and modern technology.
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full max-w-6xl">
        
        {/* Left: Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            Who <span className="text-blue-400">We Are</span>
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed text-lg">
            At Metamesh Labs, we empower businesses and individuals to stay ahead in the ever-changing digital economy. 
            From Artificial Intelligence to Blockchain and Crypto, we provide consulting, training, and hands-on support 
            to help you embrace the technologies shaping the future. We are not just advisors—we're your partners in 
            transformation, ensuring smooth adoption of AI, automation, and digital tools that unlock growth and efficiency.
          </p>
          
          {/* Benefits Checklist */}
          <div className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/50">
            <h3 className="text-xl font-semibold mb-4 text-blue-300">Our Advantages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-500/20 p-1 rounded-full mt-1">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-200">Tailored Solutions, Not One-Size-Fits-All</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-500/20 p-1 rounded-full mt-1">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-200">Future-Focused Strategy</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-500/20 p-1 rounded-full mt-1">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-200">Hands-on Training & Support</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-blue-500/20 p-1 rounded-full mt-1">
                  <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-200">Proven ROI-Driven Results</span>
              </div>
            </div>
          </div>
          
          {/* Additional Info */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="bg-blue-900/20 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-blue-300">10+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="bg-blue-900/20 p-4 rounded-xl text-center">
              <div className="text-2xl font-bold text-blue-300">Global</div>
              <div className="text-sm text-gray-300">Clientele</div>
            </div>
          </div>
        </div>
        
        {/* Right: Image */}
        <div className="w-full lg:w-1/2 relative">
          <div className="relative group">
            <img
              src={WhyChooseUs_img}
              alt="Why Choose Us"
              className="w-full h-[400px] object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-blue-500/10 rounded-2xl group-hover:bg-transparent transition-colors duration-500"></div>
            <div className="absolute -inset-2 border border-blue-400/30 rounded-2xl group-hover:border-blue-400/50 group-hover:-inset-3 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
          </div>
          
          {/* Floating Stats Card */}
          <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-600 to-blue-800 p-4 rounded-xl shadow-lg">
            <div className="text-white font-bold">Cross-Industry Expertise</div>
            <div className="text-blue-200 text-sm">Delivering results across sectors</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;