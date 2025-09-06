// components/Testimonials/Testimonials.jsx
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Metamesh Labs helped clients streamline our operations with AI automation—cutting costs by 30% in 6 months.",
      author: "Tech Startup CEO"
    },
    {
      id: 2,
      text: "Our crypto awareness workshops gave our team the confidence to explore blockchain in business safely and effectively.",
      author: "Financial Services Director"
    },
    {
      id: 3,
      text: "The digital transformation strategy provided a clear roadmap that was easy to implement and showed immediate results.",
      author: "Operations Manager"
    }
  ];

  return (
    <div className="w-full text-white py-16 px-6 md:px-20 border-t border-gray-500 bg-gradient-to-b from-[#0d3b5c] to-[#0e4a6f]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            🌟 Trusted by Forward-Thinking Clients
          </h1>
          <p className="text-gray-300 text-lg">
            Discover how our solutions have helped businesses innovate and grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-gray-800/30 p-6 rounded-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <div className="flex space-x-1 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-200 mb-4 italic">"{testimonial.text}"</p>
              <p className="text-blue-300 font-medium">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;