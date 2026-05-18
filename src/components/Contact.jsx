import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-primary/10 to-white relative overflow-hidden">
      {/* Decorative floral elements */}
      <div className="absolute top-10 left-10 text-accent/20 text-6xl animate-pulse">✿</div>
      <div className="absolute bottom-20 right-10 text-lavender/40 text-8xl transform rotate-45">❀</div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 inline-block relative group">
            Get In Touch
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary rounded-full origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </h2>
          <p className="text-gray-soft text-lg mt-4">Let's connect and create something beautiful together.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl border border-white"
        >
          {/* Contact Info Side */}
          <div className="w-full md:w-2/5 bg-navy text-white p-10 relative overflow-hidden flex flex-col justify-between">
            {/* Background design */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent rounded-full filter blur-[80px] opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary rounded-full filter blur-[60px] opacity-20"></div>

            <div className="relative z-10">
              <h3 className="text-3xl text-black font-semibold mb-2">Contact Info</h3>
              <p className="text-white/70 mb-8 font-light">Fill up the form and I will get back to you within 24 hours.</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Mail className="text-accent" size={20} />
                  <span className="font-light">jashmin@example.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="text-accent" size={20} />
                  <span className="font-light">+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="text-accent" size={20} />
                  <span className="font-light">Andhra Pradesh, India</span>
                </div>
              </div>
            </div>

            <div className="relative z-10 mt-12 flex gap-4">
              {/* <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300">
                <Linkedin size={18} />
              </a> */}
              {/* <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300">
                <GitHub size={18} />
              </a> */}
              {/* <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300">
                <Twitter size={18} />
              </a> */}
            </div>
          </div>

          {/* Form Side */}
          <div className="w-full md:w-3/5 p-10 bg-white/50 backdrop-blur-md">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-navy mb-2">Your Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-primary/50 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all text-navy placeholder-gray-400"
                  placeholder="Jane Doe"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-2">Your Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-primary/50 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all text-navy placeholder-gray-400"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-navy mb-2">Message</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg border border-primary/50 bg-white/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all text-navy placeholder-gray-400 resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 rounded-lg bg-navy text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all"
              >
                <Send size={18} /> Send Message
              </motion.button>
            </form>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
