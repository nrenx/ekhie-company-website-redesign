
import CallToAction from '@/components/common/CallToAction';

const products = [
  {
    category: 'Corporate Apparel',
    items: [
      {
        name: 'Customized T-shirts',
        description: 'High-quality t-shirts with your company logo or custom design, perfect for corporate events, team building, or promotional giveaways.',
        image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Corporate Jackets & Hoodies',
        description: 'Professionally designed jackets and hoodies with embroidered company logos, ideal for creating a unified team appearance or corporate gifts.',
        image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    category: 'Business Accessories',
    items: [
      {
        name: 'Laptop Bags & Backpacks',
        description: 'Durable, stylish laptop bags and backpacks customized with your company branding, combining functionality with promotional value.',
        image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Premium Stationery Sets',
        description: 'High-quality pens, notepads, and office supplies featuring your company logo, perfect for daily use and keeping your brand visible.',
        image: 'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    category: 'Recognition & Awards',
    items: [
      {
        name: 'Custom Mementos & Trophies',
        description: 'Elegant, personalized mementos and trophies designed to recognize achievements, milestones, and contributions within your organization.',
        image: 'https://images.unsplash.com/photo-1601591998098-33d2a551ad24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Personalized Gift Sets',
        description: 'Thoughtfully curated gift boxes containing premium items customized for special corporate occasions, client appreciation, or employee recognition.',
        image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    category: 'Seasonal & Festival Gifts',
    items: [
      {
        name: 'Holiday Gift Collections',
        description: 'Specially designed gift sets for various holidays and festivals, helping you maintain business relationships through thoughtful seasonal gestures.',
        image: 'https://images.unsplash.com/photo-1481447553744-8c1965cf0481?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
      },
      {
        name: 'Eco-Friendly Gift Options',
        description: 'Sustainable, environmentally conscious corporate gifts that showcase your company\'s commitment to social responsibility.',
        image: 'https://images.unsplash.com/photo-1610701596061-2ecf227e85b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
      }
    ]
  }
];

const Souvenir = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-ekhie-navy text-white pt-20 pb-16">
        <div className="container-custom">
          <h1 className="heading-xl mb-6">Souvenir</h1>
          <p className="text-xl max-w-3xl">
            Corporate gifting solutions powered by Sona Screens Media Production Company, 
            offering customized merchandise and eco-friendly gift options for all occasions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="heading-lg mb-6 text-ekhie-navy">Corporate Gifting Solutions</h2>
              <p className="text-lg mb-6 text-ekhie-gray">
                Our Souvenir service, powered by Sona Screens Media Production Company, provides 
                premium corporate gifting solutions designed to strengthen business relationships, 
                recognize achievements, and enhance your brand presence.
              </p>
              <p className="text-lg text-ekhie-gray">
                From custom-branded merchandise to elegant gift boxes, we offer a wide range of options 
                that combine quality, creativity, and personalization to meet your specific corporate 
                gifting needs.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1607344645866-009c320c5ab8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                alt="Corporate gift box" 
                className="w-full h-auto"
              />
            </div>
          </div>

          <h2 className="heading-lg text-center mb-16 text-ekhie-navy">Our Product Categories</h2>
          
          {products.map((category, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <h3 className="text-2xl font-semibold mb-8 pb-2 border-b-2 border-ekhie-teal inline-block text-ekhie-navy">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {category.items.map((item, i) => (
                  <div key={i} className="service-card h-full">
                    <div className="mb-6 rounded-md overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-60 object-cover"
                      />
                    </div>
                    <h4 className="text-xl font-semibold mb-4 text-ekhie-navy">{item.name}</h4>
                    <p className="text-ekhie-gray">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg mb-8 text-ekhie-navy">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-3 text-ekhie-navy">Customization</h3>
                <p className="text-ekhie-gray">
                  Every product can be tailored to reflect your brand identity and specific requirements.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-xl font-semibold mb-3 text-ekhie-navy">Quality</h3>
                <p className="text-ekhie-gray">
                  We source only premium materials and work with reliable production partners.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl mb-4">🌱</div>
                <h3 className="text-xl font-semibold mb-3 text-ekhie-navy">Sustainability</h3>
                <p className="text-ekhie-gray">
                  We prioritize eco-friendly options and sustainable production practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default Souvenir;
