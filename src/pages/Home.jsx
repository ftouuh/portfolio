import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import '../styles/global/colors.css';

window.onload = function() {
    var div1 = document.querySelector('.hero');
    var div2 = document.querySelector('.bubbles');
    updateDiv2Height(div1, div2);
  
    window.addEventListener('resize', function() {
      updateDiv2Height(div1, div2);
    });
  };
  
  function updateDiv2Height(div1, div2) {
    var height = div1.clientHeight;
    div2.style.height = height + 'px';
  }
function Home() {

    return (
        <>
        
            <div>
                <div class="bubbles">
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
                    <div class="bubble"></div>
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
