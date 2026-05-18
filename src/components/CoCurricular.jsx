import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Target, Presentation } from 'lucide-react';

const activities = [
  {
    title: "Aspire 2k23",
    type: "Tech Fest",
    icon: <Star size={24} />,
    description: "Active participant and organizer in the annual technical symposium, coordinating various technical events and coding challenges."
  },
  {
    title: "Code Fiesta",
    type: "Hackathon",
    icon: <Trophy size={24} />,
    description: "Participated in intensive coding competitions, collaborating with peers to develop innovative solutions under tight deadlines."
  },
  {
    title: "L’Oréal Sustainability Challenge",
    type: "Innovation Challenge",
    icon: <Target size={24} />,
    description: "Proposed tech-driven sustainable solutions, bridging the gap between environmental consciousness and modern technology."
  },
  {
    title: "Technical Workshops",
    type: "Skill Development",
    icon: <Presentation size={24} />,
    description: "Regularly attended and facilitated workshops on emerging technologies, fostering a culture of continuous learning."
  }
];

const CoCurricular = () => {
  return (
    <section id="co-curricular" className="py-24 bg-gradient-to-b from-white to-primary/10 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 inline-block relative group">
            Co-Curricular
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary rounded-full origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </h2>
          <p className="text-gray-soft text-lg mt-4">Beyond the classroom walls.</p>
        </motion.div>

        <div className="space-y-6">
          {activities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-6 md:p-8 rounded-2xl relative group hover:border-accent/50 transition-colors flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              {/* Icon Badge */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white flex items-center justify-center text-accent shadow-sm border border-primary group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>

              {/* Content */}
              <div className="flex-grow">
                <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                  <h3 className="text-2xl font-bold text-navy">{item.title}</h3>
                  <span className="inline-block px-3 py-1 bg-lavender text-navy text-xs font-semibold rounded-full w-max">
                    {item.type}
                  </span>
                </div>
                <p className="text-gray-soft leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-accent/30 text-4xl pointer-events-none">
                ✿
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoCurricular;
