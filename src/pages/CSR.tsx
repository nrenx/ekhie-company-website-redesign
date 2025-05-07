
import CallToAction from '@/components/common/CallToAction';

const CSR = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-ekhie-navy text-white pt-20 pb-16">
        <div className="container-custom">
          <h1 className="heading-xl mb-6">CSR Event Planners</h1>
          <p className="text-xl max-w-3xl">
            The EKHIE Foundation is committed to meaningful corporate social responsibility 
            initiatives, with accreditation from NITI Aayog and a philosophy of "Think Small, Do Possible."
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h2 className="heading-lg mb-6 text-ekhie-navy">Our Mission</h2>
              <p className="text-lg mb-6">
                The EKHIE Foundation serves as a professional CSR event planning organization, dedicated to creating 
                impactful corporate social responsibility initiatives that make a meaningful difference in communities.
              </p>
              <p className="text-lg mb-6">
                With official accreditation from NITI Aayog, we ensure that all our CSR programs adhere to the highest 
                standards of transparency, efficiency, and positive social impact.
              </p>
              <p className="text-lg">
                Our philosophy "Think Small, Do Possible" guides our approach—focusing on achievable, sustainable 
                initiatives that create real change rather than overwhelming grand gestures.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1593113646773-028c64a8f1b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="CSR event" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <h2 className="heading-lg text-center mb-12 text-ekhie-navy">Our CSR Programs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="service-card">
              <h3 className="text-xl font-semibold mb-4 text-ekhie-navy">School Engagement Programs</h3>
              <p className="text-ekhie-gray mb-4">
                We create meaningful educational experiences in schools, organizing workshops, infrastructure improvements, 
                and learning initiatives that enhance the educational environment.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="School engagement" 
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
            
            <div className="service-card">
              <h3 className="text-xl font-semibold mb-4 text-ekhie-navy">Animal Care Initiatives</h3>
              <p className="text-ekhie-gray mb-4">
                Our animal welfare programs include rescue operations, veterinary camps, awareness campaigns, 
                and sustainable support systems for stray and domestic animals.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Animal care" 
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
            
            <div className="service-card">
              <h3 className="text-xl font-semibold mb-4 text-ekhie-navy">Marathons & Awareness Drives</h3>
              <p className="text-ekhie-gray mb-4">
                We organize marathons, awareness campaigns, and community clean-up activities that promote 
                social consciousness and community engagement on important issues.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Marathon event" 
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
            
            <div className="service-card">
              <h3 className="text-xl font-semibold mb-4 text-ekhie-navy">Health & Education Initiatives</h3>
              <p className="text-ekhie-gray mb-4">
                Our comprehensive health and education programs include health camps, scholarship programs, 
                skill development workshops, and educational resource distribution.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Health initiative" 
                className="w-full h-48 object-cover rounded-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg mb-8 text-ekhie-navy">Our Philosophy</h2>
            <div className="text-4xl font-playfair font-bold mb-6 text-ekhie-teal">"Think Small, Do Possible"</div>
            <p className="text-xl text-ekhie-gray mb-8">
              Rather than attempting grand gestures that may not be sustainable, we believe in focusing on 
              achievable, impactful initiatives that create meaningful change in communities.
            </p>
            <p className="text-xl text-ekhie-gray">
              This philosophy guides all our CSR planning, ensuring that every project, no matter its size, 
              delivers tangible benefits to those it aims to serve.
            </p>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default CSR;
