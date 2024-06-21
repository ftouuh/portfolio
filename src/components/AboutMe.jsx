
import { useEffect } from 'react';
import '../styles/comps/about.css'
import Aos from 'aos';
export default function AboutMe() {
  useEffect(() => {
                              
    Aos.init({duration :1200})
  })
  return (
    <>
{/*       <section className="about" id="about">
        <div className="container">
          <div className="about-content" data-aos='fade-up'>
          <div className="img-side">
              <img src='https://en.idei.club/uploads/posts/2023-08/thumbs/1690933294_en-idei-club-p-coding-room-setup-dizain-instagram-14.jpg' alt="mee" className="img-side__main-img" />
            </div>
            <div className="text-side">
              <h3>About me</h3>
              <h4>
                Professional Video Editor <br /> based in Tetouan, Morocco 📍
              </h4>
              <p>
                Hey, my name is Zayd, and I make cool videos for cool people.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}


