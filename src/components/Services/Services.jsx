import React, { useRef, useState } from "react";
import Card from "../others/card";
import ai_integration_img from "../../assets/Ai_integration.jpg";
import Digital_transformation from "../../assets/Digital_transformatio.jpg";
import Crypto_Awareness from "../../assets/Crypto_Awareness.jpg";
import Consultancy from "../../assets/Consultancy.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Custom Navigation Component
const CustomNavigation = ({ swiperRef, className }) => {
  return (
    <div className={`flex items-center justify-center mt-8 space-x-4 ${className}`}>
      <button 
        className="custom-prev bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        className="custom-next bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
        onClick={() => swiperRef.current?.slideNext()}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

function Services() {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const cards_data = [
    {
      title: "AI Integration",
      description:
        "Strategy, implementation & training for AI tools like chatbots, predictive analytics, and automation.",
      benefits: ["Efficiency", "Cost reduction", "Better insights"],
      image: ai_integration_img,
    },
    {
      title: "Digital Transformation",
      description:
        "Streamlining operations with cloud migration, ERP, workflow automation, and digital adoption.",
      benefits: ["Scalability", "Improved productivity"],
      image: Digital_transformation,
    },
    {
      title: "Crypto Awareness & Adoption",
      description:
        "Workshops & strategies to understand blockchain, NFTs, DeFi, and crypto investment for businesses & individuals.",
      benefits: ["Future readiness", "Diversified assets"],
      image: Crypto_Awareness,
    },
    {
      title: "Consultancy Services",
      description:
        "Tailored advisory for organizations and individuals to make confident technology transitions.",
      benefits: [
        "Personalized roadmap",
        "Minimized risks",
        "Smarter decisions",
      ],
      image: Consultancy,
    },
  ];

  return (
    <div className="w-full min-h-screen text-white flex flex-col items-center py-16 px-6 md:px-20 border-t border-gray-500 bg-gradient-to-b from-[#0d3b5c] to-[#0e4a6f]">
      {/* Heading */}
      <div className="text-center max-w-2xl mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          What we <span className="text-blue-400">Offer</span>
        </h1>
      </div>

      {/* Cards Slider */}
      <div className="relative w-full max-w-6xl">
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          loop={true}
          spaceBetween={30}
          slidesPerView={2.5}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          breakpoints={{
            // Responsive breakpoints
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 30
            }
          }}
          className="w-full h-[500px]"
        >
          {cards_data.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="h-full flex">
                <Card
                  title={card.title}
                  description={card.description}
                  benefits={card.benefits}
                  imageUrl={card.image}
                  className="h-full w-full"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Buttons */}
        <CustomNavigation swiperRef={swiperRef} />
      </div>
    </div>
  );
}

export default Services;