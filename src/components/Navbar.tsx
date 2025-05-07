
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Legal Services', path: '/legal-services' },
  { name: 'CSR', path: '/csr' },
  { name: 'Recruitment', path: '/recruitment' },
  { name: 'Internships', path: '/internships' },
  { name: 'Souvenir', path: '/souvenir' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container-custom flex justify-between items-center py-4">
        <Link to="/" className="flex flex-col">
          <span className="text-2xl font-playfair font-bold text-ekhie-navy">EKHIE</span>
          <span className="text-xs font-medium text-ekhie-gray -mt-1">Business Solutions</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-ekhie-gray hover:text-ekhie-navy transition-colors px-2 py-1 link-underline"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact">
            <Button className="bg-ekhie-teal hover:bg-ekhie-teal/90">Get in Touch</Button>
          </Link>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button
            variant="outline"
            size="icon"
            onClick={toggleMobileMenu}
            className="border-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-slide-in">
          <div className="flex flex-col space-y-3 py-4 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className="text-ekhie-gray hover:text-ekhie-navy py-2 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full bg-ekhie-teal hover:bg-ekhie-teal/90 mt-2">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
