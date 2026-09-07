import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, FileText } from 'lucide-react';
import profileImg from '../assets/profile.png';
import resumePdf from '../assets/Resume.pdf';

const Hero = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const flowerVariants = {
    initial: { y: 100, opacity: 0, rotate: 0 },
    animate: (custom) => ({
      y: -1200,
      opacity: [0, 1, 1, 0],
      rotate: 360,
      transition: {
        duration: custom.duration,
        repeat: Infinity,
        ease: "linear",
        delay: custom.delay,
      }
    })
  };

  const flowers = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 10,
    duration: 15 + Math.random() * 20,
    scale: 0.3 + Math.random() * 1.5
  }));

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary via-secondary to-white">
      
      {/* Navigation Menu */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#hero" className="text-3xl font-black tracking-tighter text-navy hover:text-accent transition-colors">JJ.</a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex gap-10 items-center">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-navy/80 hover:text-accent font-semibold tracking-wide transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-navy p-2 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-28 px-8 flex flex-col gap-8 md:hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMenuOpen(false)}
                className="text-4xl font-black tracking-tight text-navy hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Flowers */}
      {flowers.map((f) => (
        <motion.div
          key={f.id}
          className="absolute text-accent/40 z-0 pointer-events-none"
          style={{ left: `${f.x}%`, scale: f.scale, bottom: '-10%' }}
          variants={flowerVariants}
          custom={{ delay: f.delay, duration: f.duration }}
          initial="initial"
          animate="animate"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12,2C12,2 11,6 8,8C5,10 2,12 2,12C2,12 6,13 8,16C10,19 12,22 12,22C12,22 13,18 16,16C19,14 22,12 22,12C22,12 18,11 16,8C14,5 12,2 12,2Z" />
          </svg>
        </motion.div>
      ))}

      {/* Large Cutout Text Background */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 overflow-hidden pt-12">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-[18vw] md:text-[14vw] font-black text-navy/5 leading-none whitespace-nowrap tracking-tighter"
        >
          JASMIN
        </motion.h1>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center px-4 pt-24 max-w-5xl mx-auto w-full">
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative group z-10"
        >
          {/* Subtle glow behind the image instead of a border */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-accent/30 via-primary/30 to-lavender/30 rounded-full blur-[80px] z-0"></div>
          
          <img 
            src={profileImg} 
            alt="Jashmin Jena" 
            className="relative w-64 md:w-80 lg:w-[28rem] h-auto object-contain z-20 drop-shadow-[0_20px_50px_rgba(0,0,0,0.25)] transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Decorative small flowers around image */}
          <div className="absolute -top-4 -right-10 text-accent/80 drop-shadow-xl z-30 text-5xl animate-spin-slow">❀</div>
          <div className="absolute top-1/3 -left-12 text-lavender/80 drop-shadow-xl z-30 text-6xl animate-bounce delay-300">✿</div>
        </motion.div>

        {/* Content Block overlapping the image */}
        <motion.div 
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-30 -mt-16 md:-mt-24 flex flex-col items-center bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_30px_60px_rgba(0,0,0,0.1)] rounded-[2.5rem] p-8 md:p-12 w-[92%] md:w-auto"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-navy mb-3 tracking-tight">
            Jashmin Jena
          </h2>

          <div className="w-16 h-1.5 bg-gradient-to-r from-accent to-primary rounded-full mb-6"></div>

          <p className="text-lg md:text-xl text-navy/80 font-medium mb-10 max-w-lg">
            Aspiring Graduate
          </p>

          <a 
            href={resumePdf} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-navy text-white text-lg font-bold tracking-wide hover:bg-accent hover:shadow-[0_0_30px_rgba(158,220,255,0.6)] hover:-translate-y-1 transition-all duration-300"
          >
            <FileText size={24} />
            View Resume
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-navy/30 rounded-full flex justify-center p-1">
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 bg-navy/50 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
