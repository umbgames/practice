import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-neutral-950 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <img 
          src="./assets/logo.jpg" 
          alt="Circuit Board" 

        />
        <br></br>
            <p className="text-slate-400 font-light mb-6 leading-relaxed">
              Pioneering The Future Of A
                Smart World Of Excellence
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-amal-orange transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-amal-orange transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-amal-orange transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">About us</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-amal-orange transition-colors">About amal tech</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amal-orange transition-colors">Executives</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amal-orange transition-colors">Board of Directors</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amal-orange transition-colors">CSR</a></li>
              
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">Careers</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-amal-orange transition-colors">Job listing</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amal-orange transition-colors">Internship program</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-medium mb-6 uppercase tracking-wider text-sm">News & Events</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-slate-400 hover:text-amal-orange transition-colors">blog</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amal-orange transition-colors">Event</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amal-orange transition-colors">press release</a></li>
              <li><a href="#" className="text-slate-400 hover:text-amal-orange transition-colors">Articles</a></li>
              
            </ul>
          </div>
             </div>
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between">
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-amal-orange shrink-0 mt-0.5" />
                <span className="text-slate-400">Plot 906, Adamu Ismaila Crescent, Idu Industrial Layout, Abuja-FCT, Nigeria</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-amal-orange shrink-0" />
                <span className="text-slate-400">+234 9135510739</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-amal-orange shrink-0" />
                <span className="text-slate-400">info@amaltech.com.ng</span>
              </li>
            </ul>
          </div>
          <br></br>

     

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-slate-500 text-sm font-light">
            &copy; {new Date().getFullYear()} AmalTechnologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
