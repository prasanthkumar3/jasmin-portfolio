import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Database, Sparkles, Target, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-lavender/40 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 inline-block relative group">
            About Me
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary rounded-full origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </h2>
          <p className="text-gray-soft text-lg max-w-2xl mx-auto mt-4">
            A glimpse into my journey, passions, and the drive behind my code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-gray-soft">
              Hello! I'm a passionate <strong className="text-navy font-semibold">Information Technology Student</strong> with a deep fascination for data and its potential to solve real-world problems.
            </p>
            <p className="text-lg leading-relaxed text-gray-soft">
              My journey in tech is driven by an insatiable curiosity for <strong className="text-navy font-semibold">Data Science</strong> and <strong className="text-navy font-semibold">Machine Learning</strong>. I believe that data, when properly analyzed and visualized, tells compelling stories that can drive impactful change.
            </p>
            <p className="text-lg leading-relaxed text-gray-soft">
              Alongside data, I enjoy crafting seamless and beautiful web experiences, merging logical problem-solving with elegant <strong className="text-navy font-semibold">Web Development</strong>. I am a continuous learner, always exploring new technologies to build better, more intuitive solutions.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <span className="flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-navy text-sm font-medium border border-primary">
                <GraduationCap size={16} className="text-accent" /> IT Student
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-navy text-sm font-medium border border-primary">
                <Database size={16} className="text-accent" /> Data Science Enthusiast
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full text-navy text-sm font-medium border border-primary">
                <Target size={16} className="text-accent" /> ML Learner
              </span>
            </div>
          </motion.div>

          {/* Right Floral Glass Card Column */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-primary/40 rounded-3xl transform rotate-3 scale-105" />
            
            <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
              {/* Decorative internal flower */}
              <div className="absolute -top-6 -right-6 text-accent/20 text-9xl rotate-45 transform group-hover:scale-110 transition-transform duration-700 pointer-events-none">
                ❀
              </div>
              
              <div className="relative z-10 space-y-6">
                <h3 className="text-2xl font-semibold text-navy flex items-center gap-3">
                  <Sparkles className="text-accent" /> Core Focus
                </h3>
                
                <ul className="space-y-4">
                  {[
                    "Uncovering insights from complex datasets.",
                    "Building intelligent predictive models.",
                    "Developing responsive and elegant user interfaces.",
                    "Bridging the gap between design and functionality."
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-accent mt-1">✿</span>
                      <span className="text-gray-soft">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-navy/10 flex items-center justify-between">
                  <div>
                    <span className="block text-3xl font-bold text-navy">100%</span>
                    <span className="text-sm text-gray-soft">Dedication</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-bold text-navy">∞</span>
                    <span className="text-sm text-gray-soft">Curiosity</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-bold text-navy"><BookOpen size={28} className="text-navy inline" /></span>
                    <span className="text-sm text-gray-soft">Learning</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
