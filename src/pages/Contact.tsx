import { motion } from 'motion/react';
import { MapPin, PhoneCall, Mail, Clock, Send } from 'lucide-react';
import SEO from '../components/SEO';
import { BUSINESS_INFO } from '../constants';

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Us"
        description={`Contact ${BUSINESS_INFO.name} for all your plumbing needs in Phoenix. Call our 24/7 emergency line or request a free quote online.`}
        path="/contact"
      />

      {/* Hero */}
      <section className="bg-slate-900 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?auto=format&fit=crop&q=80" alt="Contact us" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6"
          >
            Get in <span className="text-primary-400">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            We're here to help. Reach out for emergency service, schedule a repair, or request a free quote.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-slate-50 dark:bg-dark-bg">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/3 space-y-8"
            >
              <div>
                <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-6">Contact Information</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8">
                  Our dispatch team is ready to assist you. For immediate emergencies, please call our 24/7 line.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-6 h-6 text-primary-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Phone</h3>
                    <p className="text-slate-600 dark:text-slate-400">Main: <a href={`tel:${BUSINESS_INFO.phones.main.replace(/\D/g, '')}`} className="hover:text-primary-600 dark:hover:text-cyan-400 transition-colors">{BUSINESS_INFO.phones.main}</a></p>
                    <p className="text-copper-600 dark:text-copper-400 font-bold">Emergency: <a href={`tel:${BUSINESS_INFO.phones.emergency.replace(/\D/g, '')}`} className="hover:underline">{BUSINESS_INFO.phones.emergency}</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-primary-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Email</h3>
                    <p className="text-slate-600 dark:text-slate-400"><a href={`mailto:${BUSINESS_INFO.emails.service}`} className="hover:text-primary-600 dark:hover:text-cyan-400 transition-colors">{BUSINESS_INFO.emails.service}</a></p>
                    <p className="text-slate-600 dark:text-slate-400"><a href={`mailto:${BUSINESS_INFO.emails.quote}`} className="hover:text-primary-600 dark:hover:text-cyan-400 transition-colors">{BUSINESS_INFO.emails.quote}</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Office</h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {BUSINESS_INFO.address.street}<br />
                      {BUSINESS_INFO.address.suite}<br />
                      {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Hours</h3>
                    <p className="text-slate-600 dark:text-slate-400">Office: {BUSINESS_INFO.hours.office}</p>
                    <p className="text-slate-600 dark:text-slate-400">Dispatch: {BUSINESS_INFO.hours.dispatch}</p>
                    <p className="text-copper-600 dark:text-copper-400 font-bold">Emergency: {BUSINESS_INFO.hours.emergency}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-2/3"
            >
              <div className="bg-white dark:bg-dark-card p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-dark-border">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send Us a Message</h3>
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Full Name</label>
                      <input type="text" id="name" className="w-full bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow" placeholder="John Doe" required />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Phone Number</label>
                      <input type="tel" id="phone" className="w-full bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow" placeholder="(555) 123-4567" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                      <input type="email" id="email" className="w-full bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow" placeholder="john@example.com" required />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Service Needed</label>
                      <select id="service" className="w-full bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow appearance-none" required>
                        <option value="">Select a service...</option>
                        <option value="emergency">Emergency Plumbing</option>
                        <option value="repair">General Repair</option>
                        <option value="install">Installation</option>
                        <option value="drain">Drain Cleaning</option>
                        <option value="commercial">Commercial Plumbing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                    <textarea id="message" rows={5} className="w-full bg-slate-50 dark:bg-dark-bg border border-slate-200 dark:border-dark-border rounded-xl px-4 py-3 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow resize-none" placeholder="Please describe your plumbing issue..." required></textarea>
                  </div>

                  <button type="submit" className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold transition-colors hover-glow">
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-slate-200 dark:bg-slate-800 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-slate-400 dark:text-slate-600 mx-auto mb-4" />
            <p className="text-slate-500 dark:text-slate-400 font-medium">Interactive Google Map Placeholder</p>
            <p className="text-sm text-slate-400 dark:text-slate-500">{BUSINESS_INFO.address.street}, {BUSINESS_INFO.address.city}</p>
          </div>
        </div>
      </section>
    </>
  );
}
