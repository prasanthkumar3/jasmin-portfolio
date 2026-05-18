import React from 'react';
import { motion } from 'framer-motion';
import { BookHeart, Music, Edit3 } from 'lucide-react';

const interests = [
  {
    title: "Reading",
    icon: <BookHeart size={40} className="text-navy" />,
    description: "Immersing in diverse worlds through literature, expanding perspectives and fueling creativity.",
    bgEffect: "hover:bg-primary/20"
  },
  {
    title: "Dancing",
    icon: <Music size={40} className="text-navy" />,
    description: "Expressing rhythm and emotion through movement, maintaining physical and mental balance.",
    bgEffect: "hover:bg-lavender/40"
  },
  {
    title: "Pencil Art",
    icon: <Edit3 size={40} className="text-navy" />,
    description: "Capturing details and shades through sketching, finding calm in the strokes of a pencil.",
    bgEffect: "hover:bg-accent/20"
  }
];

const Interests = () => {
  return (
    <section id="interests" className="py-24 bg-white relative overflow-hidden">
      {/* Soft artistic background elements */}
      <div className="absolute top-0 right-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgMjBMMjAgMCIgc3Ryb2tlPSIjRDlGM0ZGIiBzdHJva2Utd2lkdGg9IjAuNSIgZmlsbD0ibm9uZSIvPjwvc3ZnPg==')] opacity-30 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 inline-block relative group">
            Interests & Hobbies
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary rounded-full origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </h2>
          <p className="text-gray-soft text-lg mt-4">The creative outlets that keep me inspired.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {interests.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.1, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card p-8 rounded-3xl text-center group cursor-pointer transition-colors duration-500 ${item.bgEffect} border border-transparent hover:border-white`}
            >
              <div className="mb-6 relative inline-block">
                {/* Sketch effect circle behind icon */}
                <div className="absolute inset-0 bg-gray-200 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500" />
                <motion.div
                  whileHover={{ rotate: [-5, 5, -5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10 p-4 bg-white rounded-full shadow-sm"
                >
                  {item.icon}
                </motion.div>
              </div>
              
              <h3 className="text-2xl font-bold text-navy mb-3">{item.title}</h3>
              <p className="text-gray-soft leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
