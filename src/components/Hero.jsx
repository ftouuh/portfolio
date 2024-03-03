
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import AOS from 'aos'
import 'aos/dist/aos.css'
import '../styles/comps/hero.css'

import { useEffect } from "react";

const skillsIcons = [
  {
    img: "https://skillicons.dev/icons?i=html,css",
    id: 1,
  },
  {
    img: "https://skillicons.dev/icons?i=js,react",
    id: 2,
  },
  {
    img: "https://skillicons.dev/icons?i=mysql,mongodb",
    id: 3,
  },
  {
    img: "https://skillicons.dev/icons?i=java,spring",
    id: 4,
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
                <h1>Full Stack <br /> Web Developer</h1>
                <p>
                  Hi, I'm Ftouh Zayd. A passionate Full Stack Web Developement Trainee
                  based in Tetouan, Morocco. 📍
                </p>
                <span>
                  <a
                    aria-label="linkedin"
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com/in/zayd-ftouh/"
                  >
                    <IconBrandLinkedin width={32} height={32} />
                  </a>
                  <a
                    aria-label="github"
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/ftouuh"
                  >
                    <IconBrandGithub width={32} height={32} />
                  </a>
                </span>
              </div>
              <div className="hero-img">
              </div>
            </div>
            {/*  */}
            <div className="skills">
              <p>Tech Stack</p>
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

