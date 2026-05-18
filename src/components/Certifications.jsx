import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  { name: "NPTEL Certifications", issuer: "NPTEL", color: "from-blue-200 to-primary" },
  { name: "GeeksforGeeks Course", issuer: "GeeksforGeeks", color: "from-green-200 to-emerald-100" },
  { name: "Cisco Networking Basics", issuer: "Cisco", color: "from-accent to-sky-200" },
  { name: "Great Learning Data Science", issuer: "Great Learning", color: "from-purple-200 to-lavender" },
  { name: "APSSDC Program", issuer: "APSSDC", color: "from-orange-100 to-amber-100" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 bg-white relative overflow-hidden">
      {/* Soft animated background lights */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-lavender/40 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 inline-block relative group">
            Certifications
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary rounded-full origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </h2>
          <p className="text-gray-soft text-lg mt-4">Continuous learning and skill validation.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group h-full cursor-pointer"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${cert.color} rounded-2xl blur opacity-40 group-hover:opacity-100 transition duration-500`} />
              
              <div className="glass-panel relative h-full p-8 rounded-2xl flex flex-col items-center text-center justify-center border border-white hover:border-white/80 transition-all duration-300 group-hover:-translate-y-2">
                
                {/* Decorative top pin/ribbon */}
                <div className="absolute -top-3 text-accent drop-shadow-sm">✿</div>

                <div className="w-16 h-16 bg-white/60 rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <Award size={32} className="text-navy group-hover:text-accent transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-navy mb-2">{cert.name}</h3>
                <p className="text-sm font-semibold text-gray-soft uppercase tracking-wider mb-6">{cert.issuer}</p>
                
                <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-accent text-sm font-medium">
                  View Credential <ExternalLink size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
