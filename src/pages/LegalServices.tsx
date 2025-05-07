
import { Link } from 'react-router-dom';
import CallToAction from '@/components/common/CallToAction';

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
          <p className="text-xl max-w-3xl">
            EKHIE provides comprehensive legal services across multiple practice areas, 
            delivered by experienced professionals dedicated to achieving the best outcomes for our clients.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-16">
            {legalServices.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-24">
                <div className={`grid grid-cols-1 lg:grid-cols-5 gap-8 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  <div className="lg:col-span-3">
                    <h2 className="heading-lg mb-4 text-ekhie-navy">{service.title}</h2>
                    <p className="text-lg mb-6 text-ekhie-gray">{service.description}</p>
                    
                    <h3 className="text-xl font-medium mb-4">Our Services Include:</h3>
                    <ul className="space-y-2 mb-6">
                      {service.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-ekhie-teal mr-2">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="lg:col-span-2">
                    <div className="rounded-lg overflow-hidden shadow-lg h-full">
                      <img 
                        src={`https://source.unsplash.com/featured/?${service.title.toLowerCase().replace(/&/g, '')}`}
                        alt={service.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
                {index < legalServices.length - 1 && <hr className="my-12 border-gray-200" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default LegalServices;
