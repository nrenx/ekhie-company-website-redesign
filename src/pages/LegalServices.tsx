
import { Link } from 'react-router-dom';
import CallToAction from '@/components/common/CallToAction';
import { ChevronRight } from 'lucide-react';

const legalServices = [
  {
    id: 'labour',
    title: 'Labour & Employment',
    description: 'We provide comprehensive services in labour and employment law, including employment contracts, workplace policies, dispute resolution, compliance with labour laws, and representing clients in labour courts.',
    highlights: [
      'Employment contract drafting and review',
      'Labour dispute resolution',
      'Workplace policy development',
      'Compliance with labour regulations',
      'Representation in labour courts'
    ]
  },
  {
    id: 'it',
    title: 'IT, E-commerce & Outsourcing',
    description: 'Our IT legal team specializes in technology law, e-commerce regulations, outsourcing agreements, data protection, intellectual property in digital spaces, and compliance with IT laws.',
    highlights: [
      'Technology contracts and agreements',
      'E-commerce regulatory compliance',
      'Outsourcing legal frameworks',
      'Data protection and privacy',
      'IT compliance and governance'
    ]
  },
  {
    id: 'criminal',
    title: 'Criminal Litigation',
    description: 'We offer expert legal representation in criminal matters, including defense strategies, case preparation, evidence assessment, bail applications, and representation in criminal courts.',
    highlights: [
      'Criminal defense strategy',
      'Case preparation and management',
      'Bail applications and appeals',
      'Evidence assessment and analysis',
      'Court representation for criminal cases'
    ]
  },
  {
    id: 'realestate',
    title: 'Real Estate & Construction Law',
    description: 'Our real estate legal services cover property transactions, construction contracts, land acquisition, property disputes, regulatory compliance, and due diligence for real estate investments.',
    highlights: [
      'Property transaction documentation',
      'Construction contract review',
      'Land acquisition legal support',
      'Property dispute resolution',
      'Real estate regulatory compliance'
    ]
  },
  {
    id: 'reform',
    title: 'Reform & Insolvency',
    description: 'We provide specialized services in reform and insolvency matters, including bankruptcy proceedings, corporate restructuring, debt recovery, insolvency resolution, and creditor rights protection.',
    highlights: [
      'Bankruptcy proceedings assistance',
      'Corporate restructuring',
      'Debt recovery strategies',
      'Insolvency resolution processes',
      'Creditor rights protection'
    ]
  },
  {
    id: 'media',
    title: 'Media Litigation',
    description: 'Our media litigation team handles defamation cases, media law compliance, entertainment law matters, content regulations, and intellectual property rights related to media.',
    highlights: [
      'Defamation case handling',
      'Media law compliance',
      'Entertainment law services',
      'Content regulation guidance',
      'Media-related intellectual property'
    ]
  },
  {
    id: 'consumer',
    title: 'Consumer Laws',
    description: 'We specialize in consumer protection law, handling consumer disputes, product liability cases, unfair trade practices, and representing both consumers and businesses in consumer forums.',
    highlights: [
      'Consumer protection advocacy',
      'Product liability cases',
      'Unfair trade practice disputes',
      'Consumer forum representation',
      'Consumer law compliance for businesses'
    ]
  },
  {
    id: 'family',
    title: 'Family Counselling',
    description: 'Our family counselling services include divorce proceedings, child custody matters, alimony and maintenance, family property disputes, and marriage counselling in legal contexts.',
    highlights: [
      'Divorce proceedings management',
      'Child custody consultation',
      'Alimony and maintenance guidance',
      'Family property dispute resolution',
      'Legal marriage counselling'
    ]
  },
  {
    id: 'ip',
    title: 'Intellectual Property',
    description: 'We offer comprehensive intellectual property services including trademark registration, patent filing, copyright protection, IP litigation, licensing agreements, and IP portfolio management.',
    highlights: [
      'Trademark registration assistance',
      'Patent application and prosecution',
      'Copyright protection strategies',
      'IP litigation and enforcement',
      'Licensing and IP agreements'
    ]
  }
];

const LegalServices = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-ekhie-navy text-white pt-20 pb-16">
        <div className="container-custom">
          <h1 className="heading-xl mb-6">Legal Services</h1>
          <p className="text-xl max-w-3xl mb-8">
            EKHIE provides comprehensive legal services across multiple practice areas,
            delivered by experienced professionals dedicated to achieving the best outcomes for our clients.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-ekhie-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ekhie-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-ekhie-navy">Experienced Team</h3>
              <p className="text-ekhie-gray">Our team of legal professionals brings years of expertise across various practice areas to provide you with the best legal counsel.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-ekhie-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ekhie-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-ekhie-navy">Client-Focused Approach</h3>
              <p className="text-ekhie-gray">We prioritize understanding your unique needs and developing tailored legal strategies to achieve your objectives.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-ekhie-teal/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-ekhie-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-ekhie-navy">Efficient Solutions</h3>
              <p className="text-ekhie-gray">We deliver practical, cost-effective legal solutions that address your immediate concerns while protecting your long-term interests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Categories Navigation */}
      <section className="py-8 bg-gray-50 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 justify-center">
            {legalServices.map((service) => (
              <button
                key={service.id}
                onClick={() => {
                  const element = document.getElementById(service.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="px-4 py-2 bg-white rounded-full text-ekhie-navy hover:bg-ekhie-teal hover:text-white transition-colors shadow-sm text-sm font-medium"
              >
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalServices.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100 scroll-mt-40 hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-4 text-ekhie-navy border-b-2 border-ekhie-teal inline-block pb-1">
                  {service.title}
                </h2>
                <p className="text-ekhie-gray mb-6">{service.description}</p>

                <h3 className="text-lg font-medium mb-3 text-ekhie-navy">Our Services Include:</h3>
                <ul className="space-y-2 mb-4">
                  {service.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-ekhie-teal flex-shrink-0 mr-1" />
                      <span className="text-ekhie-gray">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100 max-w-3xl mx-auto">
            <h2 className="heading-lg mb-6 text-center text-ekhie-navy">Need Legal Assistance?</h2>
            <p className="text-center text-ekhie-gray mb-8">
              Our team of experienced legal professionals is ready to help you navigate complex legal matters.
              Contact us today for a consultation.
            </p>
            <div className="flex justify-center">
              <Link
                to="/contact"
                className="bg-ekhie-navy hover:bg-ekhie-navy/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
              >
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default LegalServices;
