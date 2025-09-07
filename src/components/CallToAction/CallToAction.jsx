// components/CallToAction/CallToAction.jsx
import React from "react";

const CallToAction = () => {
  const handleClick = () => {
    // Scroll to contact section or open a modal
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-16 px-6 md:px-20 bg-gradient-to-b from-[#0d3b5c] to-[#0e4a6f] text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          🚀 Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Let's shape the future together. Book a free 30-minute consultation with our experts and discover how we can guide your growth.
        </p>
        {/* <button 
          onClick={handleClick}
          className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center mx-auto"
        >
          👉 Get Started Now
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </button> */}
      </div>
    </section>
  );
};

export default CallToAction;