import { Link } from 'react-router-dom';
import { Droplet, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12 md:py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-primary-900/50 p-2 rounded-lg group-hover:bg-primary-800 transition-colors">
                <Droplet className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-xl leading-tight text-white">
                  Copperline
                </span>
                <span className="text-xs font-medium text-copper-400 uppercase tracking-wider">
                  Plumbing & Drains
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              {BUSINESS_INFO.tagline} Providing premium residential and commercial plumbing services to the Greater Phoenix Metro Area since {BUSINESS_INFO.established}.
            </p>
            <div className="flex items-center gap-4">
              <a href={BUSINESS_INFO.socials.facebook} className="p-2 bg-slate-800 rounded-full hover:bg-primary-600 hover:text-white transition-colors hover-glow">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={BUSINESS_INFO.socials.instagram} className="p-2 bg-slate-800 rounded-full hover:bg-primary-600 hover:text-white transition-colors hover-glow">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 rounded-full hover:bg-primary-600 hover:text-white transition-colors hover-glow">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-cyan-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link to="/service-areas" className="hover:text-cyan-400 transition-colors">Service Areas</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-copper-400 shrink-0 mt-0.5" />
                <span className="text-sm">
                  {BUSINESS_INFO.address.street}<br />
                  {BUSINESS_INFO.address.suite}<br />
                  {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-copper-400 shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${BUSINESS_INFO.phones.main.replace(/\D/g, '')}`} className="text-sm hover:text-white transition-colors">
                    Main: {BUSINESS_INFO.phones.main}
                  </a>
                  <a href={`tel:${BUSINESS_INFO.phones.emergency.replace(/\D/g, '')}`} className="text-sm text-copper-400 font-semibold hover:text-copper-300 transition-colors">
                    Emergency: {BUSINESS_INFO.phones.emergency}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-copper-400 shrink-0" />
                <a href={`mailto:${BUSINESS_INFO.emails.service}`} className="text-sm hover:text-white transition-colors">
                  {BUSINESS_INFO.emails.service}
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Business Hours</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium mb-1">Office Hours</span>
                  <span className="text-slate-400">{BUSINESS_INFO.hours.office}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-medium mb-1">Dispatch</span>
                  <span className="text-slate-400">{BUSINESS_INFO.hours.dispatch}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-copper-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-copper-400 font-medium mb-1">Emergency Service</span>
                  <span className="text-slate-400">{BUSINESS_INFO.hours.emergency}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {currentYear} {BUSINESS_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-slate-300 transition-colors cursor-pointer">License: {BUSINESS_INFO.license}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
