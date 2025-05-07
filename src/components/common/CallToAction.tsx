
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section className="bg-ekhie-navy py-16">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
          Contact us today to discuss how our services can benefit your business or personal needs.
        </p>
        <Link 
          to="/contact" 
          className="bg-ekhie-teal hover:bg-ekhie-teal/90 text-white px-8 py-3 rounded-md text-lg font-medium transition-all inline-block"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
