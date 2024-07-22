import React from 'react'

const Footer = () => {
  return (
    <>
       {/* Quick Links Section */}
       <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Quick Links</h2>
          <div className="flex flex-wrap justify-center space-x-4">
            <a
              href="/about"
              className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition duration-300 mb-4 transform hover:scale-105"
            >
              About Me
            </a>
            <a
              href="/projects"
              className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition duration-300 mb-4 transform hover:scale-105"
            >
              My Projects
            </a>
            <a
              href="/contact"
              className="px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition duration-300 mb-4 transform hover:scale-105"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

    <footer className="py-8 bg-gray-800 text-white text-center">
    <div className="container mx-auto px-4">
      <p className="mb-4">&copy; 2024 Breia Swanigan. All rights reserved.</p>
      <div className="flex justify-center space-x-4">
        {/* Example Social Media Icon */}
        <a href="#" className="hover:text-blue-400 transition duration-300">
          <i className="fab fa-twitter"></i>
        </a>
        {/* Repeat for other social media icons */}
      </div>
    </div>
  </footer>
  </>
  )
}

export default Footer