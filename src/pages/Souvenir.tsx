
import CallToAction from '@/components/common/CallToAction';
import { Check } from 'lucide-react';

// Import images
import corporateTshirts from '@/assets/images/souvenir/corporate-tshirts.jpg';
import newYearGifts from '@/assets/images/souvenir/new-year-gifts.jpg';
import womensDayGifts from '@/assets/images/souvenir/womens-day-gifts.jpg';
import diwaliGifts from '@/assets/images/souvenir/diwali-gifts.jpg';
import laptopBags from '@/assets/images/souvenir/laptop-bags.jpg';
import certificateFrames from '@/assets/images/souvenir/certificate-frames.jpg';
import corporateGiftBox from '@/assets/images/souvenir/corporate-gift-box.jpg';

const products = [
  {
    name: 'Customised Corporate T-Shirts',
    description: 'High-quality t-shirts with your company logo or custom design, perfect for corporate events, team building, or promotional giveaways.',
    image: corporateTshirts
  },
  {
    name: 'New Year Corporate Gifts For Employees',
    description: 'Specially designed gift sets to celebrate the new year, helping you show appreciation to your employees and start the year on a positive note.',
    image: newYearGifts
  },
  {
    name: 'Corporate Gifts For Women\'s Day',
    description: 'Thoughtfully curated gifts designed specifically for Women\'s Day celebrations in the workplace, showing appreciation for female employees and partners.',
    image: womensDayGifts
  },
  {
    name: 'Corporate Diwali Gifts',
    description: 'Festive gift collections for Diwali celebrations, helping you maintain business relationships through thoughtful seasonal gestures.',
    image: diwaliGifts
  },
  {
    name: 'Corporate Laptop Bags',
    description: 'Durable, stylish laptop bags customized with your company branding, combining functionality with promotional value.',
    image: laptopBags
  },
  {
    name: 'Corporate Certificate Frames',
    description: 'Elegant, personalized certificate frames designed to recognize achievements, milestones, and contributions within your organization.',
    image: certificateFrames
  }
];

const whyChooseUs = [
  {
    title: 'Premium Quality Products',
    description: 'Handpicked gifts that resonate with thoughtfulness and care.'
  },
  {
    title: 'Customizable Solutions',
    description: 'Tailored to suit your corporate identity and occasion.'
  },
  {
    title: 'Reliable Delivery',
    description: 'On-time and hassle-free gifting experiences across locations.'
  },
  {
    title: 'Wide Range of Options',
    description: 'From personalized gifts to elegant hampers, we cover it all.'
  }
];

const ourServices = [
  'Corporate gifting for clients, employees, and partners.',
  'Festive and seasonal gifting.',
  'Event-specific mementos and souvenirs.',
  'Eco-friendly and sustainable gift options.'
];

const Souvenir = () => {
  return (
    <div className="min-h-screen">
      <section className="bg-ekhie-navy text-white pt-20 pb-16">
        <div className="container-custom">
          <h1 className="heading-xl mb-6">EKHIE SOUVENIR</h1>
          <p className="text-xl max-w-3xl">
            A dedicated unit of EKHIE BUSINESS SOLUTIONS powered by SONA SCREENS MEDIA PRODUCTION COMPANY (Since 2005)
            offering complete corporate gifting solutions.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="heading-lg mb-6 text-ekhie-navy">Corporate Gifting Services</h2>
              <p className="text-lg mb-6 text-ekhie-gray">
                Welcome to EKHIE SOUVENIR, a dedicated unit of EKHIE BUSINESS SOLUTIONS
                powered by SONA SCREENS MEDIA PRODUCTION COMPANY (Since 2005) offering complete
                corporate gifting solutions that help you express gratitude, foster relationships,
                and leave a lasting impression.
              </p>
              <p className="text-lg text-ekhie-gray">
                From custom-branded merchandise to elegant gift boxes, we offer a wide range of options
                that combine quality, creativity, and personalization to meet your specific corporate
                gifting needs.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src={corporateGiftBox}
                alt="Corporate gift box"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Why Choose EKHIE Souvenir Section */}
          <div className="mb-16">
            <h2 className="heading-lg text-center mb-10 text-ekhie-navy">Why Choose EKHIE Souvenir?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-center mb-4">
                    <div className="bg-ekhie-teal/10 p-2 rounded-full mr-3">
                      <Check className="h-5 w-5 text-ekhie-teal" />
                    </div>
                    <h3 className="text-lg font-semibold text-ekhie-navy">{item.title}</h3>
                  </div>
                  <p className="text-ekhie-gray">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Services Section */}
          <div className="mb-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="heading-lg mb-6 text-ekhie-navy">Our Services Include:</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ourServices.map((service, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-ekhie-teal/10 p-1 rounded-full mr-3 mt-1">
                    <Check className="h-4 w-4 text-ekhie-teal" />
                  </div>
                  <span className="text-lg text-ekhie-gray">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* How We Add Value Section */}
          <div className="mb-16 p-8 border-l-4 border-ekhie-teal bg-ekhie-teal/5 rounded-r-lg">
            <h2 className="heading-lg mb-4 text-ekhie-navy">How We Add Value:</h2>
            <p className="text-lg text-ekhie-gray">
              At EKHIE Souvenir, we don't just offer gifts; we curate moments of joy and connection.
              With attention to detail, innovative designs, and unmatched service, we ensure your
              gestures of gratitude stand out.
            </p>
          </div>

          <h2 className="heading-lg text-center mb-16 text-ekhie-navy">Corporate Gifting Solutions For Every Occasion</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="service-card h-full">
                <div className="mb-6 rounded-md overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-60 object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-4 text-ekhie-navy">{product.name}</h4>
                <p className="text-ekhie-gray">{product.description}</p>
              </div>
            ))}
          </div>
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
