import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Database, PieChart, Code2, Users, Network } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-primary/10 to-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.1, margin: "-100px" }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-4 inline-block relative group">
            Internship Experience
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-accent to-primary rounded-full origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
          </h2>
          <p className="text-gray-soft text-lg mt-4">Real-world applications of my academic knowledge.</p>
        </motion.div>

        <div className="space-y-16 flex flex-col">
          
          {/* Internship 1: DeltaIOT E-commerce Development */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative group order-1"
          >
            {/* Glowing background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 to-primary/50 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            
            <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row gap-8 items-center border border-white/60">
              
              {/* Illustration Area */}
              <div className="w-full md:w-1/3 relative h-48 md:h-auto flex items-center justify-center bg-white/40 rounded-2xl p-6 border border-white">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiM5RURDRkYiIGZpbGwtb3BhY2l0eT0iMC40Ii8+PC9zdmc+')] opacity-50" />
                
                <div className="relative z-10 flex flex-col items-center gap-4 text-accent">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Code2 size={64} className="text-navy drop-shadow-md" />
                  </motion.div>
                  <div className="flex gap-4">
                    <Network size={32} className="text-accent animate-bounce" />
                    <Database size={32} className="text-gray-soft animate-bounce delay-100" />
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="w-full md:w-2/3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/40 rounded-full text-navy text-sm font-semibold mb-4 border border-primary/50">
                  <Code2 size={16} /> Software Development Internship
                </div>
                <h3 className="text-3xl font-bold text-navy mb-2">E-commerce Development Intern</h3>
                <p className="text-lg font-semibold text-accent mb-4">DeltaIOT <span className="text-gray-soft font-medium">· 3 months</span></p>
                
                <p className="text-gray-soft leading-relaxed">
                  Currently contributing to an e-commerce project using Python, FastAPI, Docker, and GitHub. Building and supporting backend services, developing APIs, and collaborating on real-world software development workflows.
                </p>
              </div>
            </div>
          </motion.div>


          {/* Internship 3: Community Impact Research */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative group order-3"
          >
            {/* Glowing background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/50 to-primary/50 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            
            <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row gap-8 items-center border border-white/60">
              
              {/* Illustration Area */}
              <div className="w-full md:w-1/3 relative h-48 md:h-auto flex items-center justify-center bg-white/40 rounded-2xl p-6 border border-white">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiM5RURDRkYiIGZpbGwtb3BhY2l0eT0iMC40Ii8+PC9zdmc+')] opacity-50" />
                
                <div className="relative z-10 flex flex-col items-center gap-4 text-accent">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Globe size={64} className="text-navy drop-shadow-md" />
                  </motion.div>
                  <div className="flex gap-4">
                    <PieChart size={32} className="text-accent animate-bounce" />
                    <Users size={32} className="text-gray-soft animate-bounce delay-100" />
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="w-full md:w-2/3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/40 rounded-full text-navy text-sm font-semibold mb-4 border border-primary/50">
                  <Network size={16} /> Research Internship
                </div>
                <h3 className="text-3xl font-bold text-navy mb-2">Community Impact Research Internship</h3>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-accent mb-1">Project:</h4>
                  <p className="text-xl text-gray-soft italic font-medium">"Effect of Mobile and Internet in Bhavanapadu Village"</p>
                </div>
                
                <p className="text-gray-soft leading-relaxed">
                  Conducted comprehensive research on the digital divide and the socioeconomic impacts of mobile and internet penetration in rural areas. Gathered, analyzed, and visualized data to uncover meaningful insights about technology adoption and its effect on local communities.
                </p>
              </div>
            </div>
          </motion.div>


          {/* Internship 2: MongoDB Global Certification */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.1, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative group order-2"
          >
            {/* Glowing background */}
            <div className="absolute -inset-1 bg-gradient-to-r from-lavender/50 to-accent/50 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
            
            <div className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden flex flex-col md:flex-row-reverse gap-8 items-center border border-white/60">
              
              {/* Illustration Area */}
              <div className="w-full md:w-1/3 relative h-48 md:h-auto flex items-center justify-center bg-navy/5 rounded-2xl p-6 border border-white overflow-hidden">
                {/* Code styled background */}
                <div className="absolute inset-0 opacity-10 font-mono text-[10px] leading-tight text-navy p-4 overflow-hidden break-all">
                  {`db.users.aggregate([
  { $match: { status: "active" } },
  { $group: { _id: "$role", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
])
db.collection.createIndex({ "field": 1 })
db.collection.find({ "field": "value" }).explain("executionStats")`}
                </div>
                
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <motion.div 
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Database size={72} className="text-[#47A248] drop-shadow-md" /> {/* MongoDB Green */}
                  </motion.div>
                  <Code2 size={32} className="text-navy absolute -bottom-4 -right-4" />
                </div>
              </div>

              {/* Content Area */}
              <div className="w-full md:w-2/3">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-lavender rounded-full text-navy text-sm font-semibold mb-4 border border-lavender/50">
                  <Database size={16} /> Database Engineering
                </div>
                <h3 className="text-3xl font-bold text-navy mb-2">MongoDB Global Certification Internship</h3>
                
                <p className="text-gray-soft leading-relaxed mb-4">
                  Gained hands-on experience with NoSQL databases through an intensive certification program. Mastered advanced MongoDB features, including aggregation pipelines, indexing strategies, and database optimization techniques for modern web applications.
                </p>

                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-soft font-medium">
                  <li className="flex items-center gap-2"><span className="text-accent">✿</span> Data Modeling</li>
                  <li className="flex items-center gap-2"><span className="text-accent">✿</span> Aggregation</li>
                  <li className="flex items-center gap-2"><span className="text-accent">✿</span> Performance Tuning</li>
                  <li className="flex items-center gap-2"><span className="text-accent">✿</span> Cloud Database (Atlas)</li>
                </ul>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
