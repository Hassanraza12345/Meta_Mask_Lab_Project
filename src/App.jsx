import React, { useRef, useEffect, useState, useCallback, memo } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";

// Import components with React.lazy for code splitting
const Nav = React.lazy(() => import("./components/Nav/Nav"));
const Hero = React.lazy(() => import("./components/hero/Hero"));
const AboutUs = React.lazy(() => import("./components/AboutUs/AboutUs"));
const Services = React.lazy(() => import("./components/Services/Services"));
const WhyChooseUs = React.lazy(() => import("./components/WhyChooseUs/WhyChooseUs"));
const Testimonials = React.lazy(() => import("./components/Testimonials/Testimonials"));
const CallToAction = React.lazy(() => import("./components/CallToAction/CallToAction"));
const ContactSection = React.lazy(() => import("./components/ContactSection/ContactSection"));

// Loading component for Suspense fallback
const LoadingPlaceholder = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Custom hook for mobile detection
const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      const userAgent = navigator.userAgent;
      const mobileRegex = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      return mobileRegex.test(userAgent) || window.innerWidth <= 768;
    };
    
    setIsMobile(checkIsMobile());
    
    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

// LazyImage component for optimized image loading
const LazyImage = ({ src, alt, className, width, height }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && (
        <div 
          className={`bg-gray-200 animate-pulse ${className}`}
          style={{ width, height }}
        ></div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoaded ? 'block' : 'hidden'}`}
        loading="lazy"
        width={width}
        height={height}
        onLoad={() => setIsLoaded(true)}
        decoding="async"
      />
    </>
  );
};

// ✅ Memoized components to prevent unnecessary re-renders
const MemoizedNav = memo(Nav);
const MemoizedHero = memo(Hero);
const MemoizedAboutUs = memo(AboutUs);
const MemoizedServices = memo(Services);
const MemoizedWhyChooseUs = memo(WhyChooseUs);
const MemoizedTestimonials = memo(Testimonials);
const MemoizedCallToAction = memo(CallToAction);
const MemoizedContactSection = memo(ContactSection);

// Throttle function to limit how often a function can be called
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

function App() {
  // Create refs for all sections
  const hero_ref = useRef(null);
  const about_ref = useRef(null);
  const services_ref = useRef(null);
  const whychooseus_ref = useRef(null);
  const testimonials_ref = useRef(null);
  const calltoaction_ref = useRef(null);
  const contact_ref = useRef(null);
  
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMobileDetect();
  const rafId = useRef(null);

  // Section configuration for easier management
  const sectionsConfig = [
    { id: "hero", ref: hero_ref },
    { id: "about", ref: about_ref },
    { id: "services", ref: services_ref },
    { id: "whychooseus", ref: whychooseus_ref },
    { id: "testimonials", ref: testimonials_ref },
    { id: "calltoaction", ref: calltoaction_ref },
    { id: "contact", ref: contact_ref },
  ];

  // Set mounted state after initial render
  useEffect(() => {
    setIsMounted(true);
    
    // Add a class to body for mobile optimization
    if (isMobile) {
      document.body.classList.add('is-mobile');
    }
    
    return () => {
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [isMobile]);

  // Memoized smooth scroll function
  const scrollToSection = useCallback((sectionRef) => {
    if (sectionRef && sectionRef.current) {
      setIsScrolling(true);
      
      // Use a more performant scroll method for mobile
      if (isMobile) {
        const yOffset = -80; // Adjust for fixed header
        const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

      // Clear any existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
      
      // Reset scrolling flag after scroll completes
      scrollTimeout.current = setTimeout(() => setIsScrolling(false), 800);
    }
  }, [isMobile]);

  // Optimized scroll tracking with throttling
  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = throttle(() => {
      if (isScrolling) return;
      
      const scrollPosition = window.scrollY + 100;
      
      // Find the current active section
      let currentActive = "hero";
      let minDistance = Infinity;
      
      sectionsConfig.forEach(({ id, ref }) => {
        if (ref.current) {
          const distance = Math.abs(ref.current.offsetTop - scrollPosition);
          if (distance < minDistance) {
            minDistance = distance;
            currentActive = id;
          }
        }
      });
      
      setActiveSection(currentActive);
    }, isMobile ? 250 : 100); // More aggressive throttling on mobile

    // Use passive scroll listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [isScrolling, sectionsConfig, isMounted, isMobile]);

  // Don't render until mounted to avoid CSP issues
  if (!isMounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Simplified animations for mobile - disable on low-end devices
  const mobileAnimationProps = isMobile ? {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { duration: 0.3 },
    viewport: { once: true, margin: "0px" }
  } : {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" },
    viewport: { once: true, margin: "-50px" }
  };

  return (
    <React.Suspense fallback={<LoadingPlaceholder />}>
      {/* Fixed Navbar - simplified for mobile */}
      <div className="top-0 w-full h-max-10 fixed z-50">
        <MemoizedNav
          Hero_ref={hero_ref}
          About_ref={about_ref}
          Services_ref={services_ref}
          Contact_ref={contact_ref}
          scrollToSection={scrollToSection}
          activeSection={activeSection}
          isMobile={isMobile}
        />
      </div>

      {/* Sections */}
      <div ref={hero_ref}>
        <MemoizedHero
          Services_ref={services_ref}
          BookNow_ref={contact_ref}
          scrollToSection={scrollToSection}
          isMobile={isMobile}
          LazyImage={LazyImage}
        />
      </div>

      {/* ✅ LazyMotion wraps all animated sections */}
      <LazyMotion features={domAnimation}>
        <div ref={about_ref}>
          <m.div {...mobileAnimationProps}>
            <MemoizedAboutUs isMobile={isMobile} LazyImage={LazyImage} />
          </m.div>
        </div>

        <div ref={services_ref}>
          <m.div {...mobileAnimationProps}>
            <MemoizedServices isMobile={isMobile} LazyImage={LazyImage} />
          </m.div>
        </div>

        <div ref={whychooseus_ref}>
          <m.div {...mobileAnimationProps}>
            <MemoizedWhyChooseUs isMobile={isMobile} LazyImage={LazyImage} />
          </m.div>
        </div>

        <div ref={testimonials_ref}>
          <m.div {...mobileAnimationProps}>
            <MemoizedTestimonials isMobile={isMobile} LazyImage={LazyImage} />
          </m.div>
        </div>

        <div ref={calltoaction_ref}>
          <m.div {...mobileAnimationProps}>
            <MemoizedCallToAction isMobile={isMobile} LazyImage={LazyImage} />
          </m.div>
        </div>

        <div ref={contact_ref}>
          <m.div {...mobileAnimationProps}>
            <MemoizedContactSection isMobile={isMobile} LazyImage={LazyImage} />
          </m.div>
        </div>
      </LazyMotion>
    </React.Suspense>
  );
}

export default App;