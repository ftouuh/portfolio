import { useEffect, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import '../styles/comps/nav.css'
import '../styles/global/colors.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode, selectDarkMode } from '../redux/darkModeSlice';
export default function Navbar() {
  const [hamburger, setHamburger] = useState(false)
  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  }
  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  }
  const navlinks = [
    {
      name: "Home",
      link: "#home",
    },
    {
      name: "About",
      link: "#about",
    },
    {
      name: "Projects",
      link: "#projects",
    },
    {
      name: "Contact",
      link: "#contact",
    },
  ];

  useEffect(() => {
    const handleSmoothScroll = (event) => {
      event.preventDefault();
      const targetId = event.target.getAttribute("href").substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.querySelectorAll("a[href^='#']").forEach((anchor) => {
      anchor.addEventListener("click", handleSmoothScroll);
    });

    return () => {
      document.querySelectorAll("a[href^='#']").forEach((anchor) => {
        anchor.removeEventListener("click", handleSmoothScroll);
      });
    };
  }, []);
  useEffect(() => {
    AOS.init({ duration: 500 })
  })

  const [isactive, setisactive] = useState(false)
  const change = () => {
    setisactive(!isactive);

  }



    const isDarkMode = useSelector(selectDarkMode);
    const dispatch = useDispatch();
  
    const handleToggleDarkMode = () => {
      dispatch(toggleDarkMode());
    };
  return (
    <>
      <nav>
        <h1 onClick={pageUp} className="logo" data-aos='fade-down'>
          ftouh
        </h1>
        <ul className='desk' data-aos='fade-down'>
          {navlinks.map((item) => (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
        <button className={`hamburger ${isactive ? 'is-active' : ''}`} onClick={change}>
          <div className="bar"></div>
        </button>
      </nav>

      <nav className={`mobile-nav ${isactive ? 'is-active' : ''}`}>
        <ul>
          {navlinks.map((item) => (
            <li key={item.name}>
              <a href={item.link}>{item.name}</a>
            </li>
          ))}
        </ul>
        <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
          <button className="theme-mobile" onClick={handleToggleDarkMode}>
            {isDarkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
          </button>
        </div>
      </nav>

    </>
  );
}