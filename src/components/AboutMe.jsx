
import { useEffect } from 'react';
import '../styles/comps/about.css'
import Aos from 'aos';
export default function AboutMe() {
  useEffect(() => {
                              
    Aos.init({duration :1200})
  })
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="about-content" data-aos='fade-up'>
          <div className="img-side">
              <img src='https://en.idei.club/uploads/posts/2023-08/thumbs/1690933294_en-idei-club-p-coding-room-setup-dizain-instagram-14.jpg' alt="mee" className="img-side__main-img" />
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                Full Stack - Web Developer <br /> based in Tetouan, Morocco 📍
              </h4>
              <p>
                Hey, my name is Zayd, and I'm a Full Stack Web Developer. My passion
                is to create and develop great websites for my users.
                <br />
                <br />
                My main stack currently is React/Next.js in combination with
                MongoDB or MySQL.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


