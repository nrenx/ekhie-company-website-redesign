
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Mail, Phone, MapPin } from 'lucide-react';

const FAQs = [
  {
    question: "How can I make tax-deductible donations to the EKHIE Foundation?",
    answer: "Donations to the EKHIE Foundation can be made through bank transfers or checks. All donations are eligible for tax deduction under Section 80G. We'll provide you with a receipt and necessary documentation for tax purposes upon receiving your donation."
  },
  {
    question: "What types of CSR activities can EKHIE help organize?",
    answer: "EKHIE can organize a wide range of CSR activities including educational programs, environmental initiatives, health camps, skill development workshops, community welfare projects, and more. We tailor our CSR planning to align with your company's values and objectives."
  },
  {
    question: "How quickly can EKHIE provide recruitment candidates?",
    answer: "Our turnaround time depends on the position complexity and market availability. For standard positions, we typically provide qualified candidates within 1-2 weeks. For specialized or executive roles, it may take 3-4 weeks to ensure we find the right match."
  },
  {
    question: "What is the process for ordering custom corporate gifts?",
    answer: "To order custom corporate gifts, you can contact us with your requirements including quantity, design preferences, and budget. Our team will provide design concepts and samples for approval before proceeding with production. We recommend placing orders at least 3-4 weeks before your required delivery date."
  },
  {
    question: "Do you offer internships in remote or hybrid formats?",
    answer: "Yes, we offer flexible internship arrangements including remote, hybrid, and in-person options. The format depends on the specific role, department, and project requirements. We strive to accommodate different needs while ensuring a valuable learning experience."
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen">
      <section className="bg-ekhie-navy text-white pt-20 pb-16">
        <div className="container-custom">
          <h1 className="heading-xl mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl">
            Get in touch with our team for inquiries about our services, 
            collaborations, or any questions you might have.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="heading-lg mb-8 text-ekhie-navy">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Inquiry about Legal Services"
                    className="w-full"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message here..."
                    className="w-full min-h-[150px]"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="bg-ekhie-navy hover:bg-ekhie-navy/90 w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
            
            <div>
              <h2 className="heading-lg mb-8 text-ekhie-navy">Contact Information</h2>
              
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="mr-4 text-ekhie-teal mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Address</h3>
                      <p className="text-ekhie-gray">
                        4/8/A7, Ground Floor, John Square, Marthandam, <br />
                        Kanyakumari, Tamil Nadu – 629165
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="mr-4 text-ekhie-teal mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Phone</h3>
                      <p className="text-ekhie-gray">
                        <a href="tel:+919894482228" className="hover:text-ekhie-navy transition-colors">
                          +91-9894482228
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="mr-4 text-ekhie-teal mt-1" size={24} />
                    <div>
                      <h3 className="font-semibold mb-2">Email</h3>
                      <p className="text-ekhie-gray">
                        <a href="mailto:info@ekhie.org" className="hover:text-ekhie-navy transition-colors">
                          info@ekhie.org
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden h-[300px] shadow-lg">
                {/* Replace with actual embed map if available */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31675.15314800981!2d77.214506!3d8.375198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b04ed3d2a647879%3A0xbcce7a1a36d66417!2sMarthandam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1651345628844!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-10 text-ekhie-navy">Frequently Asked Questions</h2>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {FAQs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-lg font-medium text-ekhie-navy">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-ekhie-gray text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
