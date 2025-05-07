
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-ekhie-navy to-ekhie-navy/90 text-white py-20 md:py-32">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Trusted Partner for Legal &amp; Business Solutions
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              EKHIE Business Solutions offers comprehensive legal services, 
              recruitment solutions, CSR event planning, internships, and 
              corporate gifting services.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-secondary">
                Get in Touch
              </Link>
              <Link to="/legal-services" className="bg-transparent border border-white hover:bg-white hover:text-ekhie-navy text-white px-6 py-3 rounded-md transition-all inline-block">
                Our Services
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80" 
                alt="Business professionals discussing" 
                className="w-full h-auto rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
