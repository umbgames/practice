import { motion } from 'motion/react';
import { Target, Users, MapPin, Award } from 'lucide-react';

const stats = [
  { image: "/NEMSA.jpg", value: "NEMSA", label: "Nigerian Electricity Management Services Agency" },
  { image: "/NDPC.jpg", value: "NDPC", label: "Nigeria Data Protection Commission" },
  { image: "/NERC.jpg", value: "NERC", label: "Nigerian Electricity Regulatory Commission" },
  { image: "/STS.jpg", value: "STS", label: "Standard Transfer Specification Association" },
    { image: "/son.jpg", value: "SON", label: "Standards Organisation of Nigeria" },
  { image: "/NCDMB.jpg", value: "NCDMB", label: "Nigerian Content Development and Monitoring Board" }
];

export default function Stats() {
  return (
    <section className="relative z-30 -mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white border border-slate-100 p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="flex flex-col items-center text-center space-y-3"
            >
              <div className="p-3  text-amal-blue rounded-lg">
                <img 
                  src={stat.image} 
                  alt={stat.value} 
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 
                />
              </div>
              <div>
                <h4 className="text-3xl font-heading font-bold text-slate-900">{stat.value}</h4>
                <p className="text-sm text-slate-500 font-medium mt-1">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
