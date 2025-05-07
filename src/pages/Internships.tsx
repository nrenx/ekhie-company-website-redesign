
import { Link } from 'react-router-dom';
import CallToAction from '@/components/common/CallToAction';

const programs = [
  {
    title: 'Job Readiness Program',
    description: 'Our job readiness program prepares students and freshers for the professional workplace through skill development, resume building, interview preparation, and workplace etiquette training.',
    image: 'https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Apprenticeship Opportunities',
    description: 'Gain hands-on experience under the guidance of industry professionals through our structured apprenticeship programs across various sectors including legal, IT, marketing, and more.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Entrepreneurship Development',
    description: 'For aspiring entrepreneurs, our program provides mentorship, business planning support, networking opportunities, and practical knowledge to help transform innovative ideas into viable businesses.',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Online Learning & Support',
    description: 'Access our digital learning resources, webinars, and virtual mentorship sessions designed to enhance skills and knowledge regardless of geographical location.',
    image: 'https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  }
];

const benefits = [
  'Practical industry experience',
  'Professional networking opportunities',
  'Skill development in real work environments',
  'Mentorship from experienced professionals',
  'Enhanced resume and career prospects',
  'Potential for job placement after successful completion'
];

const Internships = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-ekhie-navy text-white pt-20 pb-16">
        <div className="container-custom">
          <h1 className="heading-xl mb-6">Internships</h1>
          <p className="text-xl max-w-3xl">
            EKHIE offers valuable internship opportunities focused on job readiness, 
            apprenticeship, entrepreneurship, and online learning for students and freshers.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-6 text-ekhie-navy">Preparing Future Professionals</h2>
            <p className="text-lg text-ekhie-gray">
              Our internship programs are designed to bridge the gap between academic knowledge 
              and professional requirements, providing practical experience and mentorship to 
              help students and freshers launch successful careers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {programs.map((program, index) => (
              <div key={index} className="service-card h-full">
                <div className="mb-6 rounded-md overflow-hidden">
                  <img 
                    src={program.image}
                    alt={program.title}
                    className="w-full h-60 object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-ekhie-navy">{program.title}</h3>
                <p className="text-ekhie-gray">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1594729095022-e2f6d2eece9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Interns working together" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="heading-lg mb-6 text-ekhie-navy">Benefits of Our Internship Programs</h2>
              <p className="text-lg mb-6 text-ekhie-gray">
                Participating in our internship programs provides numerous advantages that help 
                kickstart your professional journey and build a foundation for a successful career.
              </p>
              
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center bg-white p-3 rounded-md shadow-sm">
                    <span className="text-ekhie-teal mr-2 text-xl">•</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg mb-8 text-ekhie-navy">How to Apply</h2>
            <p className="text-lg mb-8 text-ekhie-gray">
              If you're interested in our internship opportunities, please submit your application 
              through our contact form. Include your resume, area of interest, and availability.
            </p>
            <Link 
              to="/contact" 
              className="bg-ekhie-teal hover:bg-ekhie-teal/90 text-white px-8 py-3 rounded-md text-lg font-medium transition-all inline-block"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default Internships;
