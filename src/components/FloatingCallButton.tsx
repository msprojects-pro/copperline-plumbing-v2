import { Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

export default function FloatingCallButton() {
  return (
    <a
      href={`tel:${BUSINESS_INFO.phones.main.replace(/\D/g, '')}`}
      className="fixed bottom-6 left-6 z-50 md:hidden bg-copper-600 text-white p-4 rounded-full shadow-lg hover:bg-copper-700 transition-transform active:scale-95 flex items-center justify-center hover-glow"
      aria-label="Call Now"
    >
      <Phone className="w-6 h-6 animate-pulse" />
    </a>
  );
}
