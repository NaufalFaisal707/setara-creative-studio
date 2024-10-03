// assets
import logoSetaraText from "@/assets/logo-setara-text.webp";
import logoSetara from "@/assets/logo-setara.webp";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#B0EDED]">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mx-4 flex min-h-16 gap-x-4">
          {/* prop logo */}
          <div className="grid min-w-fit place-content-center">
            <a href="#">
              <img
                width={20}
                className="block md:hidden"
                src={logoSetara}
                alt="logo setara"
              />
              <img
                width={80}
                className="hidden md:block"
                src={logoSetaraText}
                alt="logo setara"
              />
            </a>
          </div>

          {/* prop link */}
          <div className="st-nav-link hidden md:inline">
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
