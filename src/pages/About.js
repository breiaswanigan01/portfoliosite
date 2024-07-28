import React from "react";

const AboutMe = () => {
  return (
    <section className="p-8 rounded-lg shadow-lg max-w-4xl mx-auto my-16 bg-gradient-to-r from-blue-500 to-blue-300 opacity-75">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-4 text-white inline-block relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-full after:h-0.5 after:bg-white">
          About Me
        </h2>
      </div>
      <p className="text-lg mb-8 text-white text-center">
        Hi, I'm Breia Swanigan, a 22-year-old self-taught Front End Developer
        with advanced skills in HTML, CSS (Grid, Flexbox, and Animations),
        JavaScript, ReactJS, and Git. Since 2019, I've worked on diverse
        projects from static websites to complex web applications. I'm also
        enhancing my expertise in NodeJs and UX/UI design, with a growing
        interest in SQL. Outside of coding, I enjoy working out, playing the
        piano, and binge-watching TV series. I'm always eager to learn and grow,
        whether through open-source projects, new technologies, or online
        courses. Feel free to explore my portfolio and reach out to collaborate!
      </p>

      {/* Skills Section */}
      <div className="mb-8">
        <h3 className="text-3xl font-bold mb-4 text-white text-center">
          Skills
        </h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between">
              <h4 className="text-lg font-bold text-white">HTML</h4>
              <p className=" text-white font-bold">95%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: "95%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <h4 className="text-lg font-bold text-white">
                CSS (Grid, Flexbox, Animations)
              </h4>
              <p className=" text-white font-bold">85%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <h4 className="text-lg font-bold text-white">JavaScript</h4>
              <p className=" text-white font-bold">80%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <h4 className="text-lg font-bold text-white">ReactJS</h4>
              <p className=" text-white font-bold">75%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: "75%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
            <h4 className="text-lg font-bold text-white">Git</h4>
            <p className=" text-white font-bold">80%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: "80%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
            <h4 className="text-lg font-bold text-white">
              NodeJs (Intermediate)
            </h4>
            <p className=" text-white font-bold">60%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: "60%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
            <h4 className="text-lg font-bold text-white">
              UX/UI Design (Intermediate)
            </h4>
            <p className=" text-white font-bold">65%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: "65%" }}
              ></div>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
            <h4 className="text-lg font-bold text-white">SQL (Beginner)</h4>
            <p className=" text-white font-bold">40%</p>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: "40%" }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4 text-white text-center">
          Education
        </h3>
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <ul className="list-none">
            <li className="mb-4">
              <h4 className="text-xl font-bold">Self-Taught</h4>
              <p className="text-gray-700">
                Online Courses, Tutorials, and Documentation
              </p>
            </li>
            <li className="mb-4">
              <h4 className="text-xl font-bold">
                Grand Circus Bootcamp Detroit, MI
              </h4>
              <p className="text-gray-700">
                [Front End Developer Bootcamp], [2020]
              </p>
              <p className="text-gray-700">
                Gained in-depth knowledge and practical experience with weekly
                assesments in front-end development.
              </p>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Information */}
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-bold mb-4 text-white">Contact Me</h3>
        <p className="text-lg text-white">
          Feel free to{" "}
          <a href="/contact" className="underline">
            reach out
          </a>{" "}
          if you'd like to collaborate or just want to connect!
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
