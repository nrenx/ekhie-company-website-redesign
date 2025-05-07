
import HeroSection from '@/components/home/HeroSection';
import ClientsSlider from '@/components/home/ClientsSlider';
import ServicesOverview from '@/components/home/ServicesOverview';
import CallToAction from '@/components/common/CallToAction';

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
              <p className="text-lg text-ekhie-gray">
                Our mission is to deliver excellence in all our services while maintaining the highest
                standards of professionalism, integrity, and client satisfaction.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="EKHIE Business Solutions team" 
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
