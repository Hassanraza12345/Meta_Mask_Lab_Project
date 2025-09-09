import React, { useRef, useEffect, useState, memo } from "react";
import { LazyMotion, domAnimation, m } from "framer-motion";
import Nav from "./components/Nav/Nav";
import Hero from "./components/hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Testimonials from "./components/Testimonials/Testimonials";
import CallToAction from "./components/CallToAction/CallToAction";
import ContactSection from "./components/ContactSection/ContactSection";

// ✅ Memoized Nav so it doesn't re-render on scroll
const MemoizedNav = memo(Nav);

function App() {
  // Refs for sections
  const Hero_ref = useRef(null);
  const About_ref = useRef(null);
  const Services_ref = useRef(null);
  const WhyChooseUs_ref = useRef(null);
  const Testimonials_ref = useRef(null);
  const CallToAction_ref = useRef(null);
  const Contact_ref = useRef(null);

  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolling, setIsScrolling] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      setIsScrolling(true);
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Reset scrolling flag after a delay
      setTimeout(() => setIsScrolling(false), 1000);
    }
  };

  // Optimized scroll tracking with requestAnimationFrame
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!isScrolling) {
            const scrollPosition = window.scrollY + 100;

            const positions = [
              { id: "hero", top: Hero_ref.current?.offsetTop || 0 },
              { id: "about", top: About_ref.current?.offsetTop || 0 },
              { id: "services", top: Services_ref.current?.offsetTop || 0 },
              { id: "whychooseus", top: WhyChooseUs_ref.current?.offsetTop || 0 },
              { id: "testimonials", top: Testimonials_ref.current?.offsetTop || 0 },
              { id: "calltoaction", top: CallToAction_ref.current?.offsetTop || 0 },
              { id: "contact", top: Contact_ref.current?.offsetTop || 0 },
            ];

            // Find last section above scroll
            const active = positions.reduce(
              (acc, sec) => (scrollPosition >= sec.top ? sec.id : acc),
              "hero"
            );

            setActiveSection(active);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  return (
    <>
      {/* Fixed Navbar */}
      <div className="top-0 w-full h-max-10 fixed z-50">
        <MemoizedNav
          Hero_ref={Hero_ref}
          About_ref={About_ref}
          Services_ref={Services_ref}
          Contact_ref={Contact_ref}
          scrollToSection={scrollToSection}
          activeSection={activeSection}
        />
      </div>

      {/* Sections */}
      <div ref={Hero_ref}>
        <Hero
          Services_ref={Services_ref}
          BookNow_ref={Contact_ref}
          scrollToSection={scrollToSection}
        />
      </div>

      {/* ✅ LazyMotion wraps all animated sections */}
      <LazyMotion features={domAnimation}>
        <div ref={About_ref}>
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <AboutUs />
          </m.div>
        </div>

        <div ref={Services_ref}>
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Services />
          </m.div>
        </div>

        <div ref={WhyChooseUs_ref}>
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <WhyChooseUs />
          </m.div>
        </div>

        <div ref={Testimonials_ref}>
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Testimonials />
          </m.div>
        </div>

        <div ref={CallToAction_ref}>
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <CallToAction />
          </m.div>
        </div>

        <div ref={Contact_ref}>
          <m.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <ContactSection />
          </m.div>
        </div>
      </LazyMotion>
    </>
  );
}

export default App;
