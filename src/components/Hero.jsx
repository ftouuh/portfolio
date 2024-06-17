
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/comps/hero.css'

import { useEffect } from "react";

const skillsIcons = [
  {
    img: "https://skillicons.dev/icons?i=ae,pr",
    id: 1,
  }
];

export default function Hero() {

  useEffect(() => {

    AOS.init({ duration: 1500 })
  })

  return (
    <>
      <section id="home" className="hero">
        <div className="container">
          <div className="content" data-aos='fade-up'>
            <div className="hero-main" style={{ zIndex: 200 }}>
              <div className="hero-text">
                <h1>Professional <br /> Video Editor</h1>
                <p>
                  Hi, I'm Ftouh Zayd. A passionate Video Editor
                  based in Tetouan, Morocco. 📍
                </p>
                <span>
                </span>
              </div>
              <div className="hero-img">
              </div>
            </div>
            {/*  */}
            <div className="skills">
              <p>I use</p>
              <div className="logos">
                <ul>
                  {skillsIcons.map((icon) => (
                    <li key={icon.id}>
                      <img src={icon.img} alt="skill-icon" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

