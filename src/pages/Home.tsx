import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Clock, Wrench, Star, ArrowRight, CheckCircle2, PhoneCall, MapPin, Award } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants';

const services = [
  {
    title: 'Emergency Plumbing',
    description: 'Available 24/7 for burst pipes, severe leaks, and major backups.',
    icon: Clock,
    link: '/services#emergency',
    color: 'text-copper-500',
    bg: 'bg-copper-50 dark:bg-copper-950/30',
  },
  {
    title: 'Repairs',
    description: 'Expert fixes for faucets, toilets, pipes, and water heaters.',
    icon: Wrench,
    link: '/services#repairs',
    color: 'text-primary-500',
    bg: 'bg-primary-50 dark:bg-primary-950/30',
  },
  {
    title: 'Installation',
    description: 'Professional installation of fixtures, appliances, and systems.',
    icon: ShieldCheck,
    link: '/services#installation',
    color: 'text-cyan-500',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
  },
  {
    title: 'Drain & Sewer',
    description: 'Clearing clogs, hydro jetting, and camera inspections.',
    icon: DropletIcon,
    link: '/services#drain',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/30',
  },
  {
    title: 'Commercial Plumbing',
    description: 'Specialized services for businesses and commercial properties.',
    icon: BuildingIcon,
    link: '/services#commercial',
    color: 'text-indigo-500',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
  },
];

function DropletIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}

function BuildingIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <SEO
        title="Premium Plumbing Services in Phoenix"
        description="Copperline Plumbing & Drains provides expert residential and commercial plumbing services in Phoenix, AZ. 24/7 emergency response available."
        keywords="Phoenix plumber, Emergency plumber Phoenix, Plumbing repair Phoenix AZ, Drain cleaning Phoenix, Commercial plumbing Phoenix"
      />

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80"
            alt="Professional Plumber at Work"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-slate-900/70 dark:bg-slate-950/80 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-50 dark:from-dark-bg via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-copper-500/20 border border-copper-500/30 text-copper-100 backdrop-blur-sm mb-8"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-copper-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-copper-500"></span>
              </span>
              <span className="text-sm font-medium tracking-wide uppercase">24/7 Emergency Service</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-tight mb-6"
            >
              Premium Plumbing Solutions for <span className="text-cyan-400">Phoenix</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-200 mb-10 max-w-2xl font-light"
            >
              {BUSINESS_INFO.tagline} Expert residential and commercial services with a commitment to quality and transparency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={`tel:${BUSINESS_INFO.phones.main.replace(/\D/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary-600 hover:bg-primary-500 text-white font-semibold text-lg transition-all hover-glow"
              >
                <PhoneCall className="w-5 h-5" />
                Call Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-lg backdrop-blur-sm transition-all"
              >
                Book Service
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white dark:bg-dark-card border-y border-slate-100 dark:border-dark-border relative z-20 -mt-16 mx-4 md:mx-auto md:max-w-6xl rounded-2xl shadow-xl dark:shadow-2xl dark:shadow-black/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100 dark:divide-dark-border">
            <div className="flex flex-col items-center justify-center space-y-2">
              <div className="flex items-center gap-1 text-amber-400 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{BUSINESS_INFO.stats.rating}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Google Rating ({BUSINESS_INFO.stats.reviews})</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <Award className="w-8 h-8 text-primary-500 mb-2" />
              <p className="text-2xl font-bold text-slate-900 dark:text-white">A+</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">BBB Rating</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <ShieldCheck className="w-8 h-8 text-emerald-500 mb-2" />
              <p className="text-2xl font-bold text-slate-900 dark:text-white">Licensed</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">{BUSINESS_INFO.license}</p>
            </div>
            <div className="flex flex-col items-center justify-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-cyan-500 mb-2" />
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{BUSINESS_INFO.stats.jobsYearly}</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Jobs Annually</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-slate-50 dark:bg-dark-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-primary-600 dark:text-cyan-400 uppercase mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Comprehensive Plumbing Services
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              From minor repairs to major installations, our licensed technicians are equipped to handle any plumbing challenge with precision and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-card rounded-2xl p-8 shadow-sm border border-slate-100 dark:border-dark-border card-lift group"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${service.bg} ${service.color} transition-transform group-hover:scale-110`}>
                  <service.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h4>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 dark:text-cyan-400 hover:text-primary-700 dark:hover:text-cyan-300 transition-colors"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white dark:bg-dark-card overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80"
                  alt="Copperline Plumbing Professional"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-900/40 to-transparent"></div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -right-8 bg-white dark:bg-dark-bg p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-dark-border max-w-xs hidden md:block"
              >
                <div className="flex items-center gap-4 mb-2">
                  <div className="w-12 h-12 rounded-full bg-copper-100 dark:bg-copper-900/30 flex items-center justify-center text-copper-600 dark:text-copper-400">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900 dark:text-white">&lt; 90 Min</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">Emergency Response</p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-sm font-bold tracking-widest text-primary-600 dark:text-cyan-400 uppercase mb-3">Why Choose Copperline</h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
                Setting the Standard in Plumbing Excellence
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                We don't just fix pipes; we build trust. With over a decade of experience serving the Phoenix metro area, our commitment to quality, transparency, and rapid response sets us apart.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: '12 Service Trucks', desc: 'Fully stocked and ready to dispatch.' },
                  { title: '<90 Min Response', desc: 'For all critical plumbing emergencies.' },
                  { title: '2-Year Warranty', desc: 'Industry-leading parts and labor guarantee.' },
                  { title: 'Licensed Techs', desc: 'Highly trained, background-checked professionals.' },
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary-50 dark:bg-primary-900/30 flex items-center justify-center shrink-0 mt-1">
                      <CheckCircle2 className="w-5 h-5 text-primary-600 dark:text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{feature.title}</h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                Serving the Greater Phoenix Metro Area
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl mx-auto lg:mx-0">
                Our fleet of {BUSINESS_INFO.stats.fleet} service vehicles covers a 50-mile radius around Phoenix, ensuring rapid response times when you need us most.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                {['Phoenix', 'Scottsdale', 'Mesa', 'Tempe', 'Glendale', 'Chandler'].map((city) => (
                  <span key={city} className="px-4 py-2 rounded-full bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-copper-400" />
                    {city}
                  </span>
                ))}
              </div>
              <div className="mt-10">
                <Link
                  to="/service-areas"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  View full service area map
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 w-full max-w-lg">
              <div className="bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl"></div>
                
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Request Service</h3>
                <form className="space-y-4">
                  <input type="text" placeholder="Your Name" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" />
                  <input type="tel" placeholder="Phone Number" className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-cyan-400 transition-colors" />
                  <select className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-slate-300 focus:outline-none focus:border-cyan-400 transition-colors appearance-none">
                    <option value="">Select Service Needed</option>
                    <option value="emergency">Emergency Plumbing</option>
                    <option value="repair">General Repair</option>
                    <option value="install">Installation</option>
                    <option value="drain">Drain Cleaning</option>
                  </select>
                  <button type="button" className="w-full bg-primary-600 hover:bg-primary-500 text-white font-semibold py-4 rounded-xl transition-colors hover-glow mt-2">
                    Get a Free Quote
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-copper-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Need a plumber right now?
          </h2>
          <p className="text-xl text-copper-100 mb-10 max-w-2xl mx-auto">
            Don't wait for water damage to spread. Our emergency dispatch team is standing by 24/7/365.
          </p>
          <a
            href={`tel:${BUSINESS_INFO.phones.emergency.replace(/\D/g, '')}`}
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-copper-700 hover:bg-slate-50 font-bold text-xl md:text-2xl transition-transform hover:scale-105 shadow-xl"
          >
            <PhoneCall className="w-6 h-6 md:w-8 md:h-8 animate-pulse" />
            {BUSINESS_INFO.phones.emergency}
          </a>
        </div>
      </section>
    </>
  );
}
