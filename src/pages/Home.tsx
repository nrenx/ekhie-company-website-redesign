
import HeroSection from '@/components/home/HeroSection';
import ClientsSlider from '@/components/home/ClientsSlider';
import ServicesOverview from '@/components/home/ServicesOverview';
import CallToAction from '@/components/common/CallToAction';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ClientsSlider />
      <ServicesOverview />
      
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6 text-ekhie-navy">About EKHIE Business Solutions</h2>
              <p className="text-lg mb-6 text-ekhie-gray">
                EKHIE Business Solutions is a multifaceted organization providing a range of services
                including comprehensive legal support, recruitment solutions, CSR event planning,
                internship opportunities, and corporate gifting solutions.
              </p>
              <p className="text-lg mb-6 text-ekhie-gray">
                Our mission is to deliver excellence in all our services while maintaining the highest
                standards of professionalism, integrity, and client satisfaction.
              </p>
              <div className="mt-6">
                <Link to="/contact" className="btn-primary">Contact Us</Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://ekhie.org/wp-content/uploads/2024/04/cropped-IMG_5973-300x204.jpg" 
                alt="EKHIE Business Solutions" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      <CallToAction />
    </div>
  );
};

export default Home;
