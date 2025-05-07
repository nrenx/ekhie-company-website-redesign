
const clients = [
  { name: 'Tata Elect', logo: 'https://via.placeholder.com/150x60?text=TataElect' },
  { name: 'Frontline', logo: 'https://via.placeholder.com/150x60?text=Frontline' },
  { name: 'Yamaha', logo: 'https://via.placeholder.com/150x60?text=Yamaha' },
  { name: 'Pronion', logo: 'https://via.placeholder.com/150x60?text=Pronion' },
  { name: 'Technopark', logo: 'https://via.placeholder.com/150x60?text=Technopark' },
  { name: 'IRT', logo: 'https://via.placeholder.com/150x60?text=IRT' },
  { name: 'Alphacraft', logo: 'https://via.placeholder.com/150x60?text=Alphacraft' },
  { name: 'Gabriel', logo: 'https://via.placeholder.com/150x60?text=Gabriel' },
  { name: 'Infinity', logo: 'https://via.placeholder.com/150x60?text=Infinity' },
  { name: 'Neyes', logo: 'https://via.placeholder.com/150x60?text=Neyes' },
  { name: 'Quantum', logo: 'https://via.placeholder.com/150x60?text=Quantum' },
  { name: 'VLT', logo: 'https://via.placeholder.com/150x60?text=VLT' },
];

const ClientsSlider = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <h2 className="text-2xl font-semibold text-center mb-10">Trusted by Leading Companies</h2>
        
        <div className="relative overflow-hidden">
          <div className="flex space-x-12 animate-marquee whitespace-nowrap">
            {clients.map((client, index) => (
              <div key={`${client.name}-${index}`} className="flex items-center justify-center min-w-[150px]">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-16 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
            {/* Duplicate for infinite loop effect */}
            {clients.map((client, index) => (
              <div key={`${client.name}-duplicate-${index}`} className="flex items-center justify-center min-w-[150px]">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-16 grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSlider;
