
import { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const openWhatsApp = () => {
    const phone = "917259014441"; // Format without spaces or + sign
    const message = encodeURIComponent("Hi. I would like to discuss about ...");
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, '_blank');
  };

  return (
    <div className="wa__widget fixed bottom-[30px] right-[30px] z-50">
      {/* Chat popup */}
      {isOpen && (
        <div className="wa__popup bg-white rounded-lg shadow-xl w-[300px] mb-4 animate-fade-in overflow-hidden">
          {/* Header */}
          <div className="wa__header bg-[#2DB742] px-4 py-3 text-white">
            <h3 className="text-lg font-medium">Start a Conversation</h3>
            <p className="text-sm opacity-90">
              Hi! Click one of our member below to chat on WhatsApp
            </p>
            <div className="text-xs mt-1 opacity-80">
              The team typically replies in a few minutes
            </div>
          </div>
          
          {/* Agent */}
          <div 
            onClick={openWhatsApp}
            className="wa__agent flex items-center p-4 cursor-pointer hover:bg-gray-50 transition-colors"
          >
            <div className="wa__avatar w-12 h-12 bg-[#2DB742] rounded-full flex items-center justify-center mr-3">
              <MessageCircle className="text-white" size={24} />
            </div>
            <div>
              <div className="font-medium">Ekhie Support</div>
              <div className="text-sm text-gray-500">Chat with Ekhie</div>
            </div>
          </div>
        </div>
      )}
      
      {/* Floating button */}
      <div
        onClick={toggleChat}
        className="wa__button bg-[#2DB742] w-14 h-14 rounded-full shadow-lg flex items-center justify-center cursor-pointer transform hover:scale-105 transition-all relative"
      >
        <MessageCircle className="text-white" size={28} />
        
        {/* Hover text bubble */}
        <div className="absolute top-0 right-full mr-3 whitespace-nowrap bg-white py-2 px-4 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Need Help? Chat with us
        </div>
      </div>
    </div>
  );
};

export default WhatsAppWidget;
