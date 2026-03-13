import { motion } from 'motion/react';
import { Award, Users, ShieldCheck, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants';

const team = [
  {
    name: 'Tom "Copper" Brennan',
    role: 'Owner & Master Plumber',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80',
  },
  {
    name: 'Lisa Tran',
    role: 'Operations Manager',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80',
  },
  {
    name: 'Mike Santos',
    role: 'Lead Commercial Tech',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
  },
  {
    name: 'Jake Morrison',
    role: 'Residential Supervisor',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80',
  },
  {
    name: 'Angela Brooks',
    role: 'Office Coordinator',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80',
  },
];

export default function About() {
  return (
    <>
      <SEO
        title="About Us"
        description={`Learn about ${BUSINESS_INFO.name}, our history, our team, and our commitment to providing top-tier plumbing services in Phoenix.`}
        path="/about"
      />

      {/* Hero */}
      <section className="bg-slate-900 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&q=80" alt="Plumbing team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            About <span className="text-copper-400">Copperline</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            Built on trust, driven by excellence. Serving the Valley since {BUSINESS_INFO.established}.
          </motion.p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white dark:bg-dark-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-sm font-bold tracking-widest text-primary-600 dark:text-cyan-400 uppercase mb-3">Our Story</h2>
              <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-6">
                A Decade of Flowing Right
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                Founded in {BUSINESS_INFO.established} by Tom "Copper" Brennan, Copperline Plumbing & Drains started with a single truck and a simple philosophy: treat every customer's home like our own.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Today, we've grown into a fleet of {BUSINESS_INFO.stats.fleet} service vehicles, but our core values remain unchanged. We believe in transparent pricing, arriving on time, and doing the job right the first time. Whether it's a midnight emergency or a major commercial installation, our team brings the same level of dedication and expertise.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-slate-50 dark:bg-dark-card p-6 rounded-2xl border border-slate-100 dark:border-dark-border">
                  <Award className="w-8 h-8 text-copper-500 mb-4" />
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">EPA WaterSense</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Proud partner promoting water efficiency.</p>
                </div>
                <div className="bg-slate-50 dark:bg-dark-card p-6 rounded-2xl border border-slate-100 dark:border-dark-border">
                  <ShieldCheck className="w-8 h-8 text-primary-500 mb-4" />
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Fully Licensed</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">AZ ROC #{BUSINESS_INFO.license.split('#')[1]}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-square shadow-2xl">
                <img src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&q=80" alt="Plumbing team at work" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-dark-card p-8 rounded-3xl shadow-xl border border-slate-100 dark:border-dark-border hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-cyan-100 dark:bg-cyan-900/30 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                    <Users className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-slate-900 dark:text-white">{BUSINESS_INFO.stats.jobsYearly}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider">Happy Customers Yearly</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-slate-50 dark:bg-dark-card border-t border-slate-100 dark:border-dark-border">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-bold tracking-widest text-copper-600 dark:text-copper-400 uppercase mb-3">The Copperline Family</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-slate-900 dark:text-white mb-6">
              Meet Our Experts
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Our team of licensed professionals is the backbone of our success. Every technician undergoes rigorous training and background checks.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-dark-bg rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-dark-border group card-lift"
              >
                <div className="aspect-square overflow-hidden relative">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{member.name}</h4>
                  <p className="text-sm text-primary-600 dark:text-cyan-400 font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
