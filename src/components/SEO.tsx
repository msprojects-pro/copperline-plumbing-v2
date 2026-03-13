import { Helmet } from 'react-helmet-async';
import { BUSINESS_INFO } from '../constants';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  path?: string;
}

export default function SEO({ title, description, keywords, path = '' }: SEOProps) {
  const url = `${import.meta.env.VITE_APP_URL || 'https://copperlineplumbing.com'}${path}`;
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "PlumbingService",
    "name": BUSINESS_INFO.name,
    "image": "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?auto=format&fit=crop&q=80",
    "@id": url,
    "url": url,
    "telephone": BUSINESS_INFO.phones.main,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address.street,
      "addressLocality": BUSINESS_INFO.address.city,
      "addressRegion": BUSINESS_INFO.address.state,
      "postalCode": BUSINESS_INFO.address.zip,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.4484,
      "longitude": -112.0740
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "07:00",
      "closes": "18:00"
    },
    "sameAs": [
      `https://facebook.com${BUSINESS_INFO.socials.facebook}`,
      `https://instagram.com/${BUSINESS_INFO.socials.instagram.replace('@', '')}`
    ]
  };

  return (
    <Helmet>
      <title>{`${title} | ${BUSINESS_INFO.name}`}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={url} />
      
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
