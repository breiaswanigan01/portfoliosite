import React from "react";
import Main from "../components/Main";
import AboutMe from "./About";
import Footer from "../components/Footer";
import Projects from "../pages/Projects";
const Home = () => {
  return (
    <>
      <div>
        <Main />
        <AboutMe />
        <Projects />
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};
export default Home;
