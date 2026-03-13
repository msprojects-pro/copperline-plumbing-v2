import { motion } from 'motion/react';
import { Clock, Wrench, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants';

const serviceCategories = [
  {
    id: 'emergency',
    title: 'Emergency Plumbing',
    icon: Clock,
    description: 'When disaster strikes, every minute counts. Our 24/7 emergency team is dispatched immediately to mitigate damage and restore your plumbing systems.',
    features: ['Burst pipes & severe leaks', 'Sewer backups & overflows', 'Gas leaks & detection', 'Water heater failures', 'Flooded basements'],
    image: 'https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80',
    color: 'copper',
  },
  {
    id: 'repairs',
    title: 'General Repairs',
    icon: Wrench,
    description: 'From annoying drips to hidden leaks, our expert technicians diagnose and repair all types of plumbing issues quickly and efficiently.',
    features: ['Faucet & fixture repair', 'Toilet repair & replacement', 'Pipe leak detection', 'Garbage disposal repair', 'Water pressure issues'],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80',
    color: 'primary',
  },
  {
    id: 'installation',
    title: 'Installation & Upgrades',
    icon: ShieldCheck,
    description: 'Upgrade your home with professional installation of modern, efficient plumbing fixtures and appliances backed by our 2-year warranty.',
    features: ['Water heater installation', 'Tankless water heaters', 'Water filtration systems', 'Bathroom & kitchen remodels', 'New pipe installation'],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80',
    color: 'cyan',
  },
  {
    id: 'drain',
    title: 'Drain & Sewer',
    icon: DropletIcon,
    description: 'Stubborn clogs and slow drains are no match for our advanced drain cleaning and sewer inspection technology.',
    features: ['Hydro jetting services', 'Video camera inspection', 'Main line clearing', 'Trenchless sewer repair', 'Root intrusion removal'],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80',
    color: 'emerald',
  },
  {
    id: 'commercial',
    title: 'Commercial Plumbing',
    icon: BuildingIcon,
    description: 'Keep your business running smoothly with our specialized commercial plumbing services designed for high-demand environments.',
    features: ['Commercial water heaters', 'Grease trap services', 'Restroom maintenance', 'Backflow testing', 'Preventative maintenance plans'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    color: 'indigo',
  },
];

function DropletIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    </svg>
  );
}

function BuildingIcon(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" /><path d="M8 6h.01" /><path d="M16 6h.01" /><path d="M12 6h.01" /><path d="M12 10h.01" /><path d="M12 14h.01" /><path d="M16 10h.01" /><path d="M16 14h.01" /><path d="M8 10h.01" /><path d="M8 14h.01" />
    </svg>
  );
}

export default function Services() {
  return (
    <>
      <SEO
        title="Our Plumbing Services"
        description="Explore Copperline Plumbing's comprehensive services including emergency repairs, installations, drain cleaning, and commercial plumbing in Phoenix."
        path="/services"
      />

      {/* Hero */}
      <section className="bg-slate-900 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80" alt="Plumbing tools" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            Our <span className="text-cyan-400">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Comprehensive residential and commercial plumbing solutions delivered with expertise and integrity.
          </motion.p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-slate-50 dark:bg-dark-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {serviceCategories.map((service, index) => (
              <div key={service.id} id={service.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center scroll-mt-32`}>
                
                {/* Image Side */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl group">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                    <div className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md p-4 rounded-2xl border border-white/20">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2"
                >
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4 mb-10">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className={`w-6 h-6 shrink-0 text-${service.color}-500`} />
                        <span className="text-slate-700 dark:text-slate-300 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`tel:${BUSINESS_INFO.phones.main.replace(/\D/g, '')}`}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-colors hover-glow"
                  >
                    <PhoneCall className="w-5 h-5" />
                    Schedule Service
                  </a>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-900 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">Not sure what you need?</h2>
        <p className="text-primary-200 text-lg mb-8 max-w-2xl mx-auto">Give us a call. Our experts can diagnose the issue over the phone or dispatch a technician immediately.</p>
        <a
          href={`tel:${BUSINESS_INFO.phones.main.replace(/\D/g, '')}`}
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-900 font-bold text-lg hover:bg-slate-100 transition-colors"
        >
          <PhoneCall className="w-5 h-5" />
          {BUSINESS_INFO.phones.main}
        </a>
      </section>
    </>
  );
}
