import { motion } from 'motion/react';
import { ArrowRight, Settings } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-amal-blue/90 to-slate-900/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Circuit Board" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-amal-orange animate-pulse" />
              <span className="text-sm font-medium text-slate-200">Founded in 2018</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-white mb-6">
              Pioneering <span className="text-amal-orange">Indigenous Electronics</span> Manufacturing
            </h1>
            
            <p className="text-lg text-slate-300 mb-8 font-light">
              Empowering global industries through innovative smart devices, IoT solutions, and integrated electronics manufacturing capabilities.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-amal-orange hover:bg-orange-600 text-white px-8 py-3.5 rounded-md font-medium transition-colors flex items-center space-x-2">
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-3.5 rounded-md font-medium transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative overflow-hidden rounded-xl ">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
              <video autoPlay muted playsInline loop className="w-full h-100 object-cover">
                <source 
                src="/Amal-product.mp4"
                type="video/mp4"/>
            </video>
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-white/2 backdrop-blur-md border border-white/5 p-4 rounded-xl flex items-center space-x-4">

                  <div>
                    {/*<h3 className="text-white font-medium">A Sustainable Tech Provider</h3>*/}
                    <p className="text-slate-300 font-light">Empowering Africa’s technological future through innovative semiconductor and integrated electronics devices</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
