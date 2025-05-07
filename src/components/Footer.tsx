
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ekhie-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-semibold mb-4">EKHIE Business Solutions</h3>
            <p className="text-gray-300 mb-4">
              Providing comprehensive legal services, recruitment solutions, CSR initiatives, 
              internships, and corporate gifting services.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://facebook.com" className="hover:text-ekhie-gold transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" className="hover:text-ekhie-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="hover:text-ekhie-gold transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-ekhie-gold transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/legal-services" className="text-gray-300 hover:text-white transition-colors">
                  Legal Services
                </Link>
              </li>
              <li>
                <Link to="/csr" className="text-gray-300 hover:text-white transition-colors">
                  CSR Event Planning
                </Link>
              </li>
              <li>
                <Link to="/recruitment" className="text-gray-300 hover:text-white transition-colors">
                  Recruitment Services
                </Link>
              </li>
              <li>
                <Link to="/internships" className="text-gray-300 hover:text-white transition-colors">
                  Internships
                </Link>
              </li>
              <li>
                <Link to="/souvenir" className="text-gray-300 hover:text-white transition-colors">
                  Corporate Gifting
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 mt-1 flex-shrink-0 text-ekhie-teal" size={18} />
                <span className="text-gray-300">
                  4/8/A7, Ground Floor, John Square, Marthandam, Kanyakumari, TN – 629165
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-ekhie-teal" size={18} />
                <a href="tel:+919894482228" className="text-gray-300 hover:text-white transition-colors">
                  +91-9894482228
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-ekhie-teal" size={18} />
                <a href="mailto:info@ekhie.org" className="text-gray-300 hover:text-white transition-colors">
                  info@ekhie.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} EKHIE Business Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
