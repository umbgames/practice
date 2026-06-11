import { motion } from 'motion/react';
import { Lightbulb, Cog, Cpu, Code2 } from 'lucide-react';

const services = [
  {
    icon: Lightbulb,
    title: "Research and Development",
    description: "Dedicated R&D evaluating new technologies to develop breakthrough solutions aligned with future industry needs."
  },
  {
    icon: Cpu,
    title: "PCB Design & Manufacturing",
    description: "End-to-end printed circuit board solutions, from complex multi-layer designs to high-volume manufacturing."
  },
  {
    icon: Cog,
    title: "Mechanical Engineering",
    description: "Comprehensive mechanical design including industrial enclosures, CAD modeling, and injection molding services."
  },
  {
    icon: Code2,
    title: "Embedded Software",
    description: "Custom firmware and embedded systems development for IoT devices, smart meters, and industrial controls."
  }
];

export default function Services() {
  return (

    <section id="services" className="py-24 bg-gradient-to-r from-amal-blue/90">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-amal-blue/90 to-slate-900/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Circuit Board" 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          {/*<h2 className="text-amal-orange font-medium tracking-wide uppercase text-sm mb-3">Our Services</h2>*/}
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">A Sustainable Tech Provider</h3>
          <p className="text-slate-600 text-lg">
            Transform your business with our cutting-edge technology services. From R&D to manufacturing, we deliver innovative solutions that drive growth and efficiency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow border border-slate-100 flex flex-col"
            >
              <div className="w-14 h-14 bg-blue-50 flex items-center justify-center text-amal-blue mb-6">
                <service.icon className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-heading font-bold text-slate-900 mb-3">{service.title}</h4>
              <p className="text-slate-600 leading-relaxed font-light">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
