import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa'
function Footer() {
  return (
    <footer className="bg-neutral-800 text-gray-400 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-20">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-green-400">CelebX</h2>
          <p className="mt-4 text-sm">
            The world&apos;s leading platform for trading personality stocks. Join
            the future of social trading.
          </p>
          <div className="mt-4 flex space-x-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaTwitter />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-400"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#home" className="hover:text-green-400">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-green-400">
                About Us
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-green-400">
                Features
              </a>
            </li>
            <li>
              <a href="#pricing" className="hover:text-green-400">
                Pricing
              </a>
            </li>
          </ul>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-semibold text-white">Support</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <a href="#help-center" className="hover:text-green-400">
                Help Center
              </a>
            </li>
            <li>
              <a href="#api-docs" className="hover:text-green-400">
                API Documentation
              </a>
            </li>
            <li>
              <a href="#terms" className="hover:text-green-400">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#privacy" className="hover:text-green-400">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center md:text-left">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">
            © 2024 PersonaX. All rights reserved.
          </div>
          <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#terms" className="hover:text-green-400">
              Terms
            </a>
            <a href="#privacy" className="hover:text-green-400">
              Privacy
            </a>
            <a href="#cookies" className="hover:text-green-400">
              Cookies
            </a>
          </div>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 text-sm">
            <a href="mailto:support@personax.com" className="hover:text-green-400">
              support@personax.com
            </a>
            <span className="hover:text-green-400">+1 (555) 123-4567</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
