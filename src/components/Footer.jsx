 import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";
import '../styles/comps/footer.css'
export default function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footerc">
            <h3>
              Copyright © {new Date().getFullYear()}. Scalezare LLC. All rights reserved.
            </h3>
            <div className="footerc__socials">
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

