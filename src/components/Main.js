import React, { useEffect } from "react";
// import Footer from '../components/Footer';

const Main = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallax = document.querySelector(".parallax");
      let scrollPosition = window.pageYOffset;
      parallax.style.transform = "translateY(" + scrollPosition * 0.5 + "px)";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen  bg-gradient-to-r from-blue-500 to-blue-300 opacity-75">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="parallax absolute inset-0 bg-hero-pattern bg-cover bg-center"></div>
        <div className="absolute inset-0  bg-gradient-to-r from-blue-500 to-blue-300 opacity-75"></div>
        <div className="flex items-center justify-center h-full relative z-10 text-center">
          <div>
            <h1 className="text-5xl font-bold text-white mb-4 animate-typing">
              Hi, I'm Breia Swanigan
            </h1>
            <p className="text-xl text-white mb-8">
              A Passionate Front End Developer
            </p>
            <a
              href="/about"
              className="px-6 py-3 bg-white text-blue-600 rounded-full text-lg hover:bg-gray-200 transition duration-300 transform hover:scale-105"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
