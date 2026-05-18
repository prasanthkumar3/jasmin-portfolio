import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, BookOpen } from 'lucide-react';

const educationData = [
  {
    id: 1,
    degree: "B.Tech in Information Technology",
    institution: "Aditya Institute of Technology and Management", // Placeholder since specific isn't provided
    year: "2022 - 2026",
    score: "CGPA: 7.8",
    description: "Focusing on Data Science, Machine Learning, and core computer science principles.",
  },
  {
    id: 2,
    degree: "Intermediate",
    institution: "Einstein Higher Secondary School",
    year: "2020 - 2022",
    score: "65%",
    description: "Majored in Mathematics, Physics, and Chemistry.",
  },
  {
    id: 3,
    degree: "10th Grade",
    institution: "Sri Aurobindo Integral Education Center",
    year: "2018 - 2019",
    score: "70%",
    description: "Strong foundation in all subjects with active participation in co-curriculars.",
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 bg-gradient-to-b from-white to-primary/10 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-40 right-[-10%] w-96 h-96 bg-accent/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-40 left-[-10%] w-96 h-96 bg-lavender/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 inline-block relative group">
            Education
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary rounded-full origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </h2>
          <p className="text-gray-soft text-lg mt-4">My academic journey and qualifications.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative glass-card p-8 rounded-[2rem] border border-white/60 bg-white/40 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden flex flex-col h-full"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-lavender/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Decorative corner icon */}
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br from-primary/30 to-lavender/30 rounded-full blur-2xl group-hover:blur-xl transition-all duration-300" />
              
              <div className="mb-6 flex justify-between items-start relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary flex items-center justify-center text-white shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <GraduationCap size={28} />
                </div>
                <div className="flex items-center gap-1.5 px-4 py-1.5 bg-white/70 rounded-full border border-navy/10 text-navy/80 text-sm font-semibold shadow-sm">
                  <Calendar size={14} />
                  {item.year}
                </div>
              </div>

              <div className="relative z-10 flex-grow">
                <h3 className="text-2xl font-bold text-navy leading-tight mb-2">{item.degree}</h3>
                <h4 className="text-lg text-navy/70 font-medium mb-6 flex items-center gap-2">
                  <BookOpen size={16} className="text-accent" />
                  {item.institution}
                </h4>
                
                <p className="text-gray-soft mb-6 line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="relative z-10 mt-auto pt-4 border-t border-navy/10">
                <div className="flex items-center gap-2 text-navy font-bold">
                  <Award className="text-accent" size={20} />
                  <span>Score: {item.score}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
