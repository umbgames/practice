import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: "Smart Gas Leak Detector",
    category: "Consumer Electronics, Smart Devices",
    image: "/gas-leak-detector.jpeg",
    description: "Our Smart Gas Leak Detector offers real-time monitoring and early detection of hazardous gas leaks to ensure safety in homes and businesses. Equipped with advanced sensors and connected via IoT technology, it instantly alerts users through mobile notifications, minimizing risks of accidents and enabling swift preventive action. This device is designed to provide peace of mind by safeguarding lives and property with reliable, continuous protection."
  },
  {
    name: "Fire Detectors",
    category: "Consumer Electronic, Smart Devices",
    image: "/fire-detector.jpeg",
    description: "Amal Technologies' Fire Detector provides early warning of fire outbreaks with highly sensitive smoke and heat sensors connected to smart alert systems. It sends instant notifications to users' devices, enabling rapid response to prevent damage and save lives. Designed for both residential and commercial settings, it ensures comprehensive fire safety coverage."
  },
  {
    name: "Smart Phone Charger",
    category: "Consumer Electronics, Smart Devices",
    image: "/amal-phone-charger.png",
    description: "Our smart Phone Charger offers fast, safe, and energy-efficient charging tailored for modern mobile devices. Built with advanced circuitry, it protects against overcharging, overheating, and short circuits, extending device lifespan and ensuring user safety. Its compact design is perfect for home, office, and on-the-go use."
  },
  {
    name: "Point of Sale (POS) System",
    category: "Financial Products",
    image: "/pos.jpg",
    description: "The Amal Technologies Point of Sale System is a versatile, easy-to-use solution designed to streamline retail and service transactions. Supporting multiple payment methods, inventory management, and sales analytics, it empowers businesses to operate efficiently and make data-driven decisions. Its intuitive interface and robust hardware ensure smooth daily operations."
  }
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl">
            <h2 className="text-amal-orange font-medium tracking-wide uppercase text-sm mb-3">Our Products</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">Innovative Technology Solutions</h3>
            <p className="text-slate-600 text-lg">
              Explore our comprehensive range of smart devices, industrial automation tools, and IoT solutions designed for reliability and scale.
            </p>
          </div>
          <div className="mt-8 md:mt-0">
            <button className="flex items-center space-x-2 text-amal-blue font-medium hover:text-amal-orange transition-colors">
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="group cursor-pointer rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-xs font-semibold px-3 py-1 rounded-full text-slate-800 shadow-sm">
                    {product.category}
                  </span>
                </div>
              </div>
              <div className="p-6 bg-white">
                <h4 className="text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-amal-blue transition-colors">
                  {product.name}
                </h4>
                <p className="text-slate-500 text-sm font-light leading-relaxed">
                  {product.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
