import AnchorLink from "react-anchor-link-smooth-scroll";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="bg-gray-50">
      <section className="h-auto">
        <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 sm:px-6 lg:px-8">
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-5">
            <AnchorLink
              href="#home"
              className="text-base leading-6 hover:text-custom-green"
            >
              Contact us
            </AnchorLink>
            <AnchorLink
              href="#calculator"
              className="text-base leading-6 hover:text-custom-green"
            >
              Privacy policy
            </AnchorLink>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center mt-8 space-x-6">
            <a href="#" aria-label="Facebook">
              <FaFacebook className="text-3xl hover:text-custom-green" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaSquareInstagram className="text-3xl hover:text-custom-green" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaXTwitter className="text-3xl hover:text-custom-green" />
            </a>
          </div>

          {/* Footer Text */}
          <p className="mt-8 text-sm font-light leading-6 text-center">
            © 2024 FarmMall, Inc. All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
