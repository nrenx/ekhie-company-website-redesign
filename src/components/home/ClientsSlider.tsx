
const clients = [
  { name: 'Tata Elect', logo: 'https://ekhie.org/wp-content/uploads/2024/03/tata-elect.jpg', industry: 'Manufacturing/Engineering' },
  { name: 'Frontline', logo: 'https://ekhie.org/wp-content/uploads/2024/03/frontline.jpg', industry: 'Business Services' },
  { name: 'Yamaha', logo: 'https://ekhie.org/wp-content/uploads/2024/03/yamaha.png', industry: 'Automotive/Manufacturing' },
  { name: 'Pronion', logo: 'https://ekhie.org/wp-content/uploads/2024/03/pronion.jpg', industry: 'Technology' },
  { name: 'Technopark', logo: 'https://ekhie.org/wp-content/uploads/2024/03/technopark.png', industry: 'IT/Technology Park' },
  { name: 'IRT', logo: 'https://ekhie.org/wp-content/uploads/2024/03/irt.png', industry: 'Research/Technology' },
  { name: 'Alphacraft', logo: 'https://ekhie.org/wp-content/uploads/2024/03/alphacraft.jpg', industry: 'Manufacturing' },
  { name: 'Gabriel', logo: 'https://ekhie.org/wp-content/uploads/2024/03/gabriel.png', industry: 'Automotive Parts' },
  { name: 'Infinity', logo: 'https://ekhie.org/wp-content/uploads/2024/03/infinity.jpg', industry: 'Technology/Services' },
  { name: 'Neyes', logo: 'https://ekhie.org/wp-content/uploads/2024/03/neyes.png', industry: 'Technology/Services' },
  { name: 'Quantum', logo: 'https://ekhie.org/wp-content/uploads/2024/03/quantum.jpeg', industry: 'Technology/Services' },
  { name: 'VLT', logo: 'https://ekhie.org/wp-content/uploads/2024/10/logo-vlt.png', industry: 'Technology/Services' }
];

const recentClients = [
  { name: 'Unnamed 1', logo: 'https://ekhie.org/wp-content/uploads/2024/10/WhatsApp-Image-2024-10-09-at-7.05.53-PM.jpeg', date: 'Oct 2024' },
  { name: 'VLT', logo: 'https://ekhie.org/wp-content/uploads/2024/10/logo-vlt.png', date: 'Oct 2024' },
  { name: 'Unnamed 2', logo: 'https://ekhie.org/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-11-at-9.58.33-AM.jpeg', date: 'Mar 2025' },
  { name: 'Unnamed 3', logo: 'https://ekhie.org/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-11-at-9.57.27-AM-1.jpeg', date: 'Mar 2025' },
  { name: 'Unnamed 4', logo: 'https://ekhie.org/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-11-at-9.57.27-AM.jpeg', date: 'Mar 2025' },
  { name: 'Unnamed 5', logo: 'https://ekhie.org/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-11-at-9.57.26-AM.jpeg', date: 'Mar 2025' }
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
                  className="max-h-16 grayscale hover:grayscale-0 transition-all duration-300 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/150x60?text=' + client.name;
                  }}
                />
              </div>
            ))}
            {/* Duplicate for infinite loop effect */}
            {clients.map((client, index) => (
              <div key={`${client.name}-duplicate-${index}`} className="flex items-center justify-center min-w-[150px]">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-16 grayscale hover:grayscale-0 transition-all duration-300 object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/150x60?text=' + client.name;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-center mb-8">Recent Partners</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {recentClients.map((client, index) => (
              <div key={`recent-${index}`} className="flex flex-col items-center">
                <div className="h-24 flex items-center justify-center mb-2">
                  <img 
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="max-h-24 max-w-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/150x60?text=' + client.name;
                    }}
                  />
                </div>
                <span className="text-sm text-gray-500">{client.date}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsSlider;
