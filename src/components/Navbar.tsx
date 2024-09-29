import logoSetara from "@/assets/logo-setara.webp";
import logoSetaraText from "@/assets/logo-setara-text.webp";

export default function Navbar() {
  return (
    <nav className="h-14 bg-white">
      <div className="mx-4 h-full">
        <div className="max-w-7xl mx-auto h-full *:h-full flex gap-x-4">
          {/* prop logo */}
          <div className="min-w-fit grid place-content-center">
            <a href="#">
              <img
                width={20}
                className="md:hidden block"
                src={logoSetara}
                alt="logo setara"
              />
              <img
                width={80}
                className="md:block hidden"
                src={logoSetaraText}
                alt="logo setara"
              />
            </a>
          </div>

          {/* prop link */}
          <div className="st-nav-link md:inline hidden">
            <ul>
              <li>
                <a href="#our-services">Our Services</a>
              </li>
              <li>
                <a href="#our-projects">Our Projects</a>
              </li>
              <li>
                <a href="#our-team">Our Team</a>
              </li>
              <li>
                <a href="#about-us">About Us</a>
              </li>
              <li>
                <a href="#contact-us">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
