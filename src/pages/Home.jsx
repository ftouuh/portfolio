import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import '../styles/global/colors.css';

function useDivHeightSync() {
  const [div2Height, setDiv2Height] = useState(0);

  useEffect(() => {
    function handleResize() {
      const div1Height = document.querySelector('.hero').clientHeight;
      setDiv2Height(div1Height);
    }

    handleResize(); // Initial call to set height
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return div2Height;
}

function Home() {
  const div2Height = useDivHeightSync();

  useEffect(() => {

    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div>
        <div className="bubbles" style={{ height: `${div2Height}px` }}>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
          <div className="bubble"></div>
        </div>
        <Navbar />
        <Hero />
        <AboutMe />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default Home;
