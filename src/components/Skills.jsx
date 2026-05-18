import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, FaJava, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDatabase
} from 'react-icons/fa';
import { 
  SiJavascript, SiC, SiMongodb, SiMysql, SiDjango, SiScikitlearn
} from 'react-icons/si';
import { MessageCircle, Lightbulb, Users, BarChart } from 'lucide-react';

const row1 = [
  { name: "Python", icon: <FaPython /> },
  { name: "Java", icon: <FaJava /> },
  { name: "C", icon: <SiC /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "HTML", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "React", icon: <FaReact /> },
  { name: "Node.js", icon: <FaNodeJs /> },
];

const row2 = [
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "SQL", icon: <SiMysql /> },
  { name: "Data Analysis", icon: <BarChart /> },
  { name: "Machine Learning", icon: <SiScikitlearn /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "Communication", icon: <MessageCircle size={24} /> },
  { name: "Problem Solving", icon: <Lightbulb size={24} /> },
  { name: "Teamwork", icon: <Users size={24} /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-white relative overflow-hidden">
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-reverse {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-scroll {
            animation: scroll 40s linear infinite;
          }
          .animate-scroll-reverse {
            animation: scroll-reverse 40s linear infinite;
          }
          .marquee-container:hover .animate-scroll,
          .marquee-container:hover .animate-scroll-reverse {
            animation-play-state: paused;
          }
        `}
      </style>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-navy mb-4 inline-block relative group tracking-tight">
            My Arsenal
            <span className="absolute -bottom-2 left-0 w-full h-2 bg-gradient-to-r from-accent to-primary rounded-full origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </h2>
          <p className="text-navy/60 text-xl mt-4 font-medium">Technologies, frameworks, and tools I use to build solutions.</p>
        </motion.div>
      </div>

      <div className="relative flex flex-col gap-10 marquee-container">
        {/* Gradients for smooth fade on edges */}
        <div className="absolute top-0 bottom-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-20 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-20 pointer-events-none"></div>

        {/* Row 1 - Moves Left */}
        <div className="flex overflow-hidden">
          <div className="flex w-max animate-scroll gap-10 pl-10">
            {[...row1, ...row1, ...row1, ...row1, ...row1, ...row1].map((skill, index) => (
              <div 
                key={`${skill.name}-${index}`} 
                className="group flex items-center gap-4 px-10 py-5 bg-white border border-navy/5 rounded-full shadow-sm hover:shadow-xl hover:border-accent/20 hover:scale-105 transition-all duration-300 cursor-pointer min-w-max"
              >
                <span className="text-4xl text-accent group-hover:rotate-12 transition-transform duration-300">{skill.icon}</span>
                <span className="text-2xl font-bold text-navy/80">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Moves Right */}
        <div className="flex overflow-hidden">
          <div className="flex w-max animate-scroll-reverse gap-10 pl-10">
            {[...row2, ...row2, ...row2, ...row2, ...row2, ...row2].map((skill, index) => (
              <div 
                key={`${skill.name}-${index}`} 
                className="group flex items-center gap-4 px-10 py-5 bg-white border border-navy/5 rounded-full shadow-sm hover:shadow-xl hover:border-primary/20 hover:scale-105 transition-all duration-300 cursor-pointer min-w-max"
              >
                <span className="text-4xl text-primary group-hover:-rotate-12 transition-transform duration-300">{skill.icon}</span>
                <span className="text-2xl font-bold text-navy/80">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
