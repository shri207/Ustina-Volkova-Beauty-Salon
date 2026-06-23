import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';

export function AppointmentContact() {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', date: '', time: '', message: ''
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hello, I would like to book an appointment.

Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}
Date: ${formData.date}
Time: ${formData.time}
Message: ${formData.message}

Please confirm my appointment.`;

    window.open(`https://wa.me/96598578947?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <>
      <section id="appointment" className="py-24 md:py-32 bg-pearl border-t border-softblack/10">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="text-center mb-16">
            <h3 className="text-[10px] uppercase tracking-widest opacity-40 mb-4 font-sans text-softblack">Reservation</h3>
            <h2 className="text-5xl md:text-6xl font-serif text-softblack italic">Book Your Session</h2>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <input required type="text" placeholder="Full Name" className="w-full border-b border-softblack/20 bg-transparent py-4 text-softblack placeholder:text-softblack/50 focus:outline-none focus:border-softblack transition-colors rounded-none font-sans text-sm" onChange={e => setFormData({...formData, name: e.target.value})} />
              <input required type="tel" placeholder="Phone / WhatsApp" className="w-full border-b border-softblack/20 bg-transparent py-4 text-softblack placeholder:text-softblack/50 focus:outline-none focus:border-softblack transition-colors rounded-none font-sans text-sm" onChange={e => setFormData({...formData, phone: e.target.value})} />
              <input type="email" placeholder="Email Address (Optional)" className="w-full border-b border-softblack/20 bg-transparent py-4 text-softblack placeholder:text-softblack/50 focus:outline-none focus:border-softblack transition-colors rounded-none font-sans text-sm" onChange={e => setFormData({...formData, email: e.target.value})} />
              <select required className="w-full border-b border-softblack/20 bg-transparent py-4 text-softblack/50 focus:outline-none focus:border-softblack transition-colors appearance-none rounded-none font-sans text-sm" defaultValue="" onChange={e => setFormData({...formData, service: e.target.value})}>
                <option value="" disabled>Select Service</option>
                <option value="Hair Extensions">Hair Extensions</option>
                <option value="Keratin Treatment">Keratin Treatment</option>
                <option value="Hair Botox">Hair Botox</option>
                <option value="Hair Coloring">Hair Coloring</option>
                <option value="Luxury Hair Spa">Luxury Hair Spa</option>
                <option value="Bridal Styling">Bridal Styling</option>
              </select>
              <input required type="date" className="w-full border-b border-softblack/20 bg-transparent py-4 text-softblack/50 focus:outline-none focus:border-softblack transition-colors rounded-none font-sans text-sm" onChange={e => setFormData({...formData, date: e.target.value})} />
              <input required type="time" className="w-full border-b border-softblack/20 bg-transparent py-4 text-softblack/50 focus:outline-none focus:border-softblack transition-colors rounded-none font-sans text-sm" onChange={e => setFormData({...formData, time: e.target.value})} />
            </div>
            <textarea placeholder="Message / Special Requests" rows={4} className="w-full border-b border-softblack/20 bg-transparent py-4 text-softblack placeholder:text-softblack/50 focus:outline-none focus:border-softblack transition-colors resize-none rounded-none font-sans text-sm" onChange={e => setFormData({...formData, message: e.target.value})} />
            
            <div className="text-center pt-8">
              <button type="submit" className="px-12 py-5 bg-softblack text-offwhite text-[10px] uppercase tracking-widest font-sans hover:bg-gold-dark hover:text-white transition-colors">
                Request Appointment
              </button>
            </div>
          </form>
        </div>
      </section>

      <footer id="contact" className="bg-offwhite text-softblack pt-24 pb-12 border-t border-softblack/10">
        <div className="max-w-[1400px] mx-auto px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-softblack/10 pb-16">
            
            <div className="lg:col-span-1">
              <h2 className="text-3xl font-serif mb-6 tracking-tight uppercase font-bold text-softblack">Ustina<br/>Volkova</h2>
              <p className="text-softblack/50 font-sans text-xs uppercase tracking-[0.3em] font-bold mb-6">Hair Is Art. Beauty Is Confidence.</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full border border-softblack/20 flex items-center justify-center text-softblack/70 hover:bg-softblack hover:text-white hover:border-softblack transition-all"><Instagram size={18} /></a>
                <a href="#" className="w-10 h-10 rounded-full border border-softblack/20 flex items-center justify-center text-softblack/70 hover:bg-softblack hover:text-white hover:border-softblack transition-all"><Facebook size={18} /></a>
              </div>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-softblack opacity-40 mb-6 font-sans">Location</h4>
              <ul className="space-y-4 text-softblack/70 font-sans text-sm flex flex-col">
                <li className="flex items-start">
                  <MapPin size={16} className="mr-3 mt-1 flex-shrink-0 text-gold-dark" />
                  <span>Shop 3, Al Tijaria Tower<br />Mirqab, Soor Street<br />Mezzanine 1<br />Kuwait City, Kuwait</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-softblack opacity-40 mb-6 font-sans">Contact</h4>
              <ul className="space-y-4 text-softblack/70 font-sans text-sm">
                <li className="flex items-center">
                  <Phone size={16} className="mr-3 text-gold-dark" />
                  <span>+965 9857 8947</span>
                </li>
                <li><a href="https://wa.me/96598578947" target="_blank" rel="noreferrer" className="underline hover:text-gold transition-colors">Chat on WhatsApp</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-widest text-softblack opacity-40 mb-6 font-sans">Hours</h4>
              <ul className="space-y-4 text-softblack/70 font-sans text-sm">
                <li className="flex items-center">
                  <Clock size={16} className="mr-3 text-gold-dark" />
                  <span>Everyday<br />10:00 AM – 9:00 PM</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="text-center text-softblack/30 text-[9px] uppercase tracking-[0.2em] font-sans flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Ustina Volkova Beauty Salon. All rights reserved.</p>
            <p className="mt-2 md:mt-0">Design & Architecture</p>
          </div>
        </div>
      </footer>
    </>
  );
}
