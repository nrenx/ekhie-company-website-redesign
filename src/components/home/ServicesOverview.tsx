
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'Legal Services',
    description: 'Comprehensive legal solutions including Labour & Employment, IT Law, Criminal Litigation, Real Estate, and more.',
    icon: '⚖️',
    link: '/legal-services'
  },
  {
    title: 'CSR Event Planners',
    description: 'Professional event planning for corporate social responsibility initiatives with NITI Aayog accreditation.',
    icon: '🤝',
    link: '/csr'
  },
  {
    title: 'Recruitment Services',
    description: 'End-to-end staffing solutions, RPO, campus drives, and payroll management for various industries.',
    icon: '👥',
    link: '/recruitment'
  },
  {
    title: 'Internships',
    description: 'Opportunities for students and freshers focused on job readiness, apprenticeship, and entrepreneurship.',
    icon: '🎓',
    link: '/internships'
  },
  {
    title: 'Souvenir',
    description: 'Corporate gifting solutions including customized merchandise and eco-friendly gift options.',
    icon: '🎁',
    link: '/souvenir'
  }
];

const ServicesOverview = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-lg mb-4 text-ekhie-navy">Our Comprehensive Services</h2>
          <p className="text-ekhie-gray text-lg">
            EKHIE offers a wide range of professional services to meet the diverse needs of businesses and individuals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="service-card bg-white flex flex-col h-full"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-ekhie-navy">{service.title}</h3>
              <p className="text-ekhie-gray mb-6 flex-grow">{service.description}</p>
              <Link 
                to={service.link} 
                className="flex items-center text-ekhie-teal hover:text-ekhie-navy transition-colors mt-auto"
              >
                Learn More <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
