import React from "react";
import linkedin from "../../assets/linkedin.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import contactImage from "../../assets/Contect Us.jpg";

const ContactSection = () => {
  const phoneNumber = "+971566550121";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    "Hello, I'm interested in your services. Can you provide more information?"
  )}`;

  return (
    <section
      id="contact-section"
      className="relative w-full py-20 px-6 md:px-20 text-white overflow-hidden"
    >
      {/* Background gradient + glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1e33] via-[#0d3b5c] to-[#0e4a6f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(3,114,250,0.2),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(0,240,255,0.15),transparent_70%)]" />

      <div className="relative max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 drop-shadow-[0_0_10px_rgba(3,114,250,0.7)]">
            📩 Let’s Connect
          </h2>
          <p className="text-blue-100 text-lg">
            Have questions or ready to start your project? Reach out to us —
            we’d love to hear from you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Image */}
          <div className="w-full lg:w-2/3">
            <div className="rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(3,114,250,0.5)]">
              <img
                src={contactImage}
                alt="Contact us"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white/10 backdrop-blur-md border border-blue-400/30 rounded-2xl shadow-xl p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 text-cyan-300">
                Get in Touch
              </h3>

              <div className="space-y-6">
                {/* Emails */}
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200">Emails</h4>
                    <a
                      href="mailto:info@metameshlabs.com"
                      className="block text-blue-300 hover:text-cyan-200"
                    >
                      info@metameshlabs.com
                    </a>
                    <a
                      href="mailto:Sydra@metameshlabs.com"
                      className="block text-blue-300 hover:text-cyan-200"
                    >
                      Sydra@metameshlabs.com
                    </a>
                    <a
                      href="mailto:Bookforacall@metameshlabs.com"
                      className="block text-blue-300 hover:text-cyan-200"
                    >
                      Bookforacall@metameshlabs.com
                    </a>
                    <a
                      href="mailto:zk@metameshlabs.com"
                      className="block text-blue-300 hover:text-cyan-200"
                    >
                      zk@metameshlabs.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start">
                  <div className="bg-blue-500/20 p-3 rounded-lg mr-4">
                    <svg
                      className="w-6 h-6 text-cyan-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-200">Phone</h4>
                    <a
                      href="tel:+971566550121"
                      className="text-blue-300 hover:text-cyan-200"
                    >
                      +971 56 655 0121
                    </a>
                  </div>
                </div>

                {/* Socials */}
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">Socials</h4>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/metameshlabs?igsh=MWp3YW13aDJ2YXI2Zw=="
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/20 hover:bg-blue-500/40 transition-all shadow-[0_0_10px_rgba(3,114,250,0.6)]"
                    >
                      <img src={instagram} alt="Instagram" className="h-5 w-5" />
                    </a>
                    {/* <a
                      href="https://www.linkedin.com/company/metameshlabs"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/20 hover:bg-blue-500/40 transition-all shadow-[0_0_10px_rgba(3,114,250,0.6)]"
                    >
                      <img src={linkedin} alt="LinkedIn" className="h-5 w-5" />
                    </a>
                    <a
                      href="https://www.facebook.com/metameshlabs"
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-500/20 hover:bg-blue-500/40 transition-all shadow-[0_0_10px_rgba(3,114,250,0.6)]"
                    >
                      <img src={facebook} alt="Facebook" className="h-5 w-5" />
                    </a> */}
                  </div>
                </div>

                {/* WhatsApp */}
                <div>
                  <h4 className="font-semibold text-gray-200 mb-2">WhatsApp</h4>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-gradient-to-r from-green-500 to-green-700 px-6 py-3 rounded-full text-white font-semibold shadow-[0_0_20px_rgba(34,197,94,0.7)] hover:scale-105 transition-transform"
                  >
                    💬 Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-10 pt-6 border-t border-blue-400/30">
                <h4 className="font-semibold text-gray-200 mb-3">
                  Business Hours
                </h4>
                <p className="text-blue-100">Mon - Fri: 9AM - 6PM</p>
                <p className="text-blue-100">Saturday: 10AM - 4PM</p>
                <p className="text-blue-100">Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
