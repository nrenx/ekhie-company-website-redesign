
import CallToAction from '@/components/common/CallToAction';

const services = [
  {
    title: 'Staffing Solutions',
    description: 'Comprehensive staffing services that connect qualified candidates with suitable positions across various industries, including permanent placements, contract staffing, and executive search.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Recruitment Process Outsourcing (RPO)',
    description: 'End-to-end recruitment solutions where we manage the entire hiring process, from job posting and candidate screening to interview coordination and onboarding assistance.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Campus Recruitment Drives',
    description: 'Specialized campus recruitment services connecting companies with fresh talent from educational institutions, including campus visit coordination, pre-screening, and batch hiring management.',
    image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Payroll Management',
    description: 'Comprehensive payroll services including salary processing, tax management, statutory compliance, and payroll record maintenance for businesses of all sizes.',
    image: 'https://images.unsplash.com/photo-1554224154-22dec7ec8818?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  }
];

const industries = [
  'Information Technology', 'Engineering', 'Oil & Gas', 'Healthcare', 
  'Banking & Finance', 'Manufacturing', 'Retail', 'Hospitality', 
  'Education', 'Telecommunications', 'Pharmaceutical'
];

const Recruitment = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-ekhie-navy text-white pt-20 pb-16">
        <div className="container-custom">
          <h1 className="heading-xl mb-6">Recruitment Services</h1>
          <p className="text-xl max-w-3xl">
            EKHIE provides end-to-end recruitment solutions including staffing, RPO, campus drives, 
            and payroll management across a wide range of industries.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6 text-ekhie-navy">Our Recruitment Solutions</h2>
            <p className="text-lg text-ekhie-gray">
              We offer comprehensive recruitment services tailored to meet the specific needs of 
              both employers seeking qualified talent and candidates looking for career opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="mb-6 rounded-md overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-60 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-ekhie-navy">{service.title}</h3>
                <p className="text-ekhie-gray">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="heading-lg mb-6 text-ekhie-navy">Industries We Serve</h2>
              <p className="text-lg mb-6 text-ekhie-gray">
                Our recruitment expertise spans across multiple industries, allowing us to understand 
                the unique talent requirements and challenges of each sector.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {industries.map((industry, index) => (
                  <div 
                    key={index} 
                    className="bg-white py-3 px-4 rounded-md shadow-sm border border-gray-100 flex items-center"
                  >
                    <span className="text-ekhie-teal mr-2">•</span>
                    <span>{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                  alt="Recruitment process" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-ekhie-navy rounded-lg p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">For Employers</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-ekhie-teal mr-2 text-xl">•</span>
                  <span>Access to pre-screened, qualified candidates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ekhie-teal mr-2 text-xl">•</span>
                  <span>Reduced time-to-hire and recruitment costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ekhie-teal mr-2 text-xl">•</span>
                  <span>Industry-specific recruitment expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ekhie-teal mr-2 text-xl">•</span>
                  <span>Customized recruitment strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-ekhie-teal mr-2 text-xl">•</span>
                  <span>Ongoing support and candidate follow-up</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-ekhie-teal rounded-lg p-8 text-white">
              <h3 className="text-2xl font-semibold mb-6">For Candidates</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-white mr-2 text-xl">•</span>
                  <span>Career guidance and resume assistance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2 text-xl">•</span>
                  <span>Access to exclusive job opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2 text-xl">•</span>
                  <span>Interview preparation and feedback</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2 text-xl">•</span>
                  <span>Salary negotiation support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-white mr-2 text-xl">•</span>
                  <span>Long-term career development assistance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default Recruitment;
