import { useRef, useEffect, useState } from "react";
import Nav from "./components/Nav/Nav";
import Hero from "./components/hero/Hero";
import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Testimonials from "./components/Testimonials/Testimonials";
import CallToAction from "./components/CallToAction/CallToAction";
import ContactSection from "./components/ContactSection/ContactSection";

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

  // Smooth scroll
  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Track scroll position to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120; // offset for navbar

      const heroPosition = Hero_ref.current?.offsetTop || 0;
      const aboutPosition = About_ref.current?.offsetTop || 0;
      const servicesPosition = Services_ref.current?.offsetTop || 0;
      const whyChooseUsPosition = WhyChooseUs_ref.current?.offsetTop || 0;
      const testimonialsPosition = Testimonials_ref.current?.offsetTop || 0;
      const callToActionPosition = CallToAction_ref.current?.offsetTop || 0;
      const contactPosition = Contact_ref.current?.offsetTop || 0;

      if (scrollPosition < aboutPosition) {
        setActiveSection("hero");
      } else if (scrollPosition < servicesPosition) {
        setActiveSection("about");
      } else if (scrollPosition < whyChooseUsPosition) {
        setActiveSection("services");
      } else if (scrollPosition < testimonialsPosition) {
        setActiveSection("whychooseus");
      } else if (scrollPosition < callToActionPosition) {
        setActiveSection("testimonials");
      } else if (scrollPosition < contactPosition) {
        setActiveSection("calltoaction");
      } else {
        setActiveSection("contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Navbar */}
      <div className="top-0 w-full h-max-10 fixed z-50">
        <Nav
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
        <Hero Services_ref={Services_ref} BookNow_ref={Contact_ref} />
      </div>

      <div ref={About_ref}>
        <AboutUs />
      </div>

      <div ref={Services_ref}>
        <Services />
      </div>

      <div>
        <WhyChooseUs />
      </div>

      <div >
        <Testimonials />
      </div>

      <div>
        <CallToAction />
      </div>

      <div ref={Contact_ref}>
        <ContactSection />
      </div>
    </>
  );
}

export default App;
