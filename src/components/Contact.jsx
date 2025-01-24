 import { IconMail, IconMapSearch } from "@tabler/icons-react";
import '../styles/comps/contact.css'
export default function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact__content">
            <div className="contact__title">
              <p>contact</p>
              <h3>Don't be shy! Hit us up! 👇</h3>
            </div>
            <div className="contact__icons">
{/*               <div className="contact__icon-box">
                <span>
                   <IconMapSearch width={30} height={30} />
                </span>
                <div className="contact__info">
                  <h3>Location</h3>
                  <p>Tetouan, Morocco</p>
                </div>
              </div> */}

              <div className="contact__icon-box">
                <span>
                  <IconMail width={30} height={30} /> 
                </span>
                <div className="contact__info">
                  <h3>Mail</h3>
                  <a href="mailto:stefan.topallovic@gmail.com">
                    contact@scalezare.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

