import { motion } from 'motion/react';
import { MapPin, PhoneCall, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants';

const cities = [
  'Phoenix',
  'Scottsdale',
  'Mesa',
  'Tempe',
  'Glendale',
  'Chandler',
  'Gilbert',
  'Peoria',
  'Surprise',
  'Avondale',
  'Goodyear',
  'Buckeye',
];

export default function ServiceAreas() {
  return (
    <>
      <SEO
        title="Service Areas in Greater Phoenix"
        description={`Copperline Plumbing serves the Greater Phoenix Metro area and a 50-mile radius. Fast, reliable plumbing services in Phoenix, Scottsdale, Mesa, and more.`}
        path="/service-areas"
      />

      {/* Hero */}
      <section className="bg-slate-900 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1513628253939-010e64ac66cd?auto=format&fit=crop&q=80" alt="Phoenix skyline" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            Our <span className="text-cyan-400">Service Areas</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Proudly serving the Greater Phoenix Metro Area and surrounding communities within a 50-mile radius.
          </motion.p>
        </div>
      </section>

      {/* Map and Cities */}
      <section className="py-24 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <div className="bg-slate-100 dark:bg-dark-card rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-dark-border aspect-square relative flex items-center justify-center">
                {/* Simulated Map Background */}
                <div className="absolute inset-0 opacity-30 dark:opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #60a5fa 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
                
                {/* Central Pin */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-24 h-24 bg-primary-500/20 rounded-full animate-ping absolute"></div>
                  <div className="w-16 h-16 bg-primary-500/40 rounded-full animate-pulse absolute"></div>
                  <MapPin className="w-12 h-12 text-primary-600 dark:text-cyan-400 relative z-20 drop-shadow-lg" />
                  <div className="bg-white dark:bg-dark-bg px-4 py-2 rounded-full shadow-lg border border-slate-100 dark:border-dark-border mt-4 relative z-20">
                    <span className="font-bold text-slate-900 dark:text-white">Phoenix Metro</span>
                  </div>
                </div>

                {/* Radius Circle */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-[80%] h-[80%] rounded-full border-2 border-dashed border-primary-400/50 dark:border-cyan-500/30"></div>
                </div>
                <div className="absolute bottom-6 right-6 bg-white/90 dark:bg-dark-bg/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm border border-slate-200 dark:border-dark-border text-sm font-medium text-slate-600 dark:text-slate-300">
                  50-Mile Radius Coverage
                </div>
              </div>
            </motion.div>

            {/* Cities List */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2"
            >
              <h2 className="text-sm font-bold tracking-widest text-copper-600 dark:text-copper-400 uppercase mb-3">Coverage Area</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
                Fast Response, Wherever You Are
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                With {BUSINESS_INFO.stats.fleet} fully-stocked service vehicles strategically positioned throughout the Valley, we guarantee an emergency response time of under 90 minutes.
              </p>

              <div className="grid grid-cols-2 gap-x-8 gap-y-4 mb-10">
                {cities.map((city, i) => (
                  <div key={city} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary-500 dark:text-cyan-400 shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 font-medium text-lg">{city}</span>
                  </div>
                ))}
              </div>

              <div className="bg-copper-50 dark:bg-copper-950/30 p-6 rounded-2xl border border-copper-100 dark:border-copper-900/50">
                <h4 className="text-xl font-bold text-copper-900 dark:text-copper-100 mb-2">Don't see your city?</h4>
                <p className="text-copper-800 dark:text-copper-200 mb-4">
                  If you're within 50 miles of Phoenix, we likely cover your area. Call us to confirm!
                </p>
                <a
                  href={`tel:${BUSINESS_INFO.phones.main.replace(/\D/g, '')}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-copper-600 hover:bg-copper-700 text-white font-semibold transition-colors hover-glow"
                >
                  <PhoneCall className="w-4 h-4" />
                  Check Coverage
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
