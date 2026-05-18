import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy pt-20 relative overflow-hidden">
      {/* Soft Wave SVG Top Divider */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-[50px] md:h-[100px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 pb-8 pt-10 text-center relative z-10">
        
        {/* Floral Divider */}
        <div className="flex items-center justify-center gap-4 mb-8 text-primary/30">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/30"></div>
          <span className="text-xl">❀</span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/30"></div>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-bold font-heading text-white mb-2">Jashmin Jena</h2>
          <p className="text-primary/70 font-light max-w-md mx-auto">
            Transforming Data Into Meaningful Insights.
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <a href="#about" className="text-white/60 hover:text-accent transition-colors">About</a>
          <a href="#education" className="text-white/60 hover:text-accent transition-colors">Education</a>
          <a href="#skills" className="text-white/60 hover:text-accent transition-colors">Skills</a>
          <a href="#experience" className="text-white/60 hover:text-accent transition-colors">Experience</a>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} Jashmin Jena. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed with elegance <Heart size={14} className="text-accent inline animate-pulse" /> for Jashmin
          </p>
        </div>
      </div>
      
      {/* Background soft glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-accent/10 blur-[100px] pointer-events-none"></div>
    </footer>
  );
};

export default Footer;
