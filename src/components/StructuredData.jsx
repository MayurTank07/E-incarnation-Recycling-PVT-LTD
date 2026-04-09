const SITE_URL = 'https://www.e-incarnation.com';

export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "E-Incarnation Recycling Pvt. Ltd.",
    "alternateName": "E-Incarnation",
    "url": SITE_URL,
    "logo": `${SITE_URL}/favicon.png`,
    "image": `${SITE_URL}/og-image.jpg`,
    "description": "Leading e-waste recycling company in Mumbai providing EPR compliance, IT asset disposition, certified electronics recycling, and sustainable e-waste management services across India.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit No. 103, 1st Floor, Bhaveshwar Arcade, A Wing, LBS Marg",
      "addressLocality": "Ghatkopar West",
      "addressRegion": "Maharashtra",
      "postalCode": "400086",
      "addressCountry": "IN"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+912247494262",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": "+918655606062",
        "contactType": "sales",
        "areaServed": "IN",
        "availableLanguage": ["en", "hi"]
      }
    ],
    "email": "info@e-incarnation.com",
    "sameAs": [
      "https://www.linkedin.com/company/e-incarnation",
      "https://twitter.com/eincarnation",
      "https://www.facebook.com/eincarnation",
      "https://www.instagram.com/eincarnation"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export const LocalBusinessSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RecyclingCenter"],
    "name": "E-Incarnation Recycling Pvt. Ltd.",
    "image": `${SITE_URL}/og-image.jpg`,
    "@id": SITE_URL,
    "url": SITE_URL,
    "telephone": "+912247494262",
    "email": "info@e-incarnation.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Unit No. 103, 1st Floor, Bhaveshwar Arcade, A Wing, LBS Marg",
      "addressLocality": "Ghatkopar West",
      "addressRegion": "Maharashtra",
      "postalCode": "400086",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.0922584,
      "longitude": 72.9109548
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "15:00"
      }
    ],
    "hasMap": "https://maps.google.com/?cid=3781179314759847695",
    "description": "E-Incarnation Recycling Pvt. Ltd. is Mumbai's leading e-waste recycling company offering certified electronic recycling, EPR compliance, IT asset disposal, and data destruction services.",
    "areaServed": [
      {
        "@type": "City",
        "name": "Mumbai"
      },
      {
        "@type": "State",
        "name": "Maharashtra"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer, UPI",
    "sameAs": [
      "https://www.linkedin.com/company/e-incarnation",
      "https://twitter.com/eincarnation"
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export const FAQSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Where can I recycle e-waste in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You can recycle e-waste at E-Incarnation Recycling Pvt. Ltd., located at Unit No. 103, Bhaveshwar Arcade, LBS Marg, Ghatkopar West, Mumbai 400086. We offer certified electronic recycling for all types of e-waste including computers, laptops, mobiles, TVs, and batteries."
        }
      },
      {
        "@type": "Question",
        "name": "What electronic items are accepted for recycling in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We accept all electronic waste including computers, laptops, mobile phones, televisions, printers, batteries, servers, networking equipment, and all types of consumer electronics. We also offer bulk corporate e-waste pickup services across Mumbai and India."
        }
      },
      {
        "@type": "Question",
        "name": "What is EPR compliance for e-waste in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Extended Producer Responsibility (EPR) requires electronics manufacturers and importers in India to collect and recycle a percentage of their products. E-Incarnation helps businesses obtain EPR authorization from CPCB and meet annual recycling targets under the E-Waste Management Rules, 2022."
        }
      },
      {
        "@type": "Question",
        "name": "Does E-Incarnation offer free e-waste pickup in Mumbai?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "E-Incarnation offers free e-waste drop-off at our Ghatkopar West, Mumbai facility. For corporate bulk pickups and IT asset disposition services, we provide customized solutions. Contact us for a free consultation and quote."
        }
      },
      {
        "@type": "Question",
        "name": "Is e-waste recycling mandatory for companies in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Under India's E-Waste Management Rules, 2022, producers, manufacturers, and importers of electrical and electronic equipment must comply with EPR regulations. Non-compliance can attract penalties from the Central Pollution Control Board (CPCB). E-Incarnation provides full EPR compliance support."
        }
      }
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export const ServiceSchema = ({ service }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title || "E-Waste Recycling",
    "provider": {
      "@type": "LocalBusiness",
      "name": "E-Incarnation Recycling Pvt. Ltd.",
      "url": SITE_URL,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    "description": service.description || "Professional e-waste recycling and management services in Mumbai",
    "areaServed": [
      {
        "@type": "City",
        "name": "Mumbai"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export const BreadcrumbSchema = ({ items }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${SITE_URL}${item.path}`
    }))
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export const EventSchema = ({ event }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    "description": event.description,
    "startDate": event.date,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": event.location || "Mumbai, Maharashtra",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "E-Incarnation Recycling Pvt. Ltd.",
      "url": SITE_URL
    },
    "image": event.imageUrl
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
};

export default {
  OrganizationSchema,
  LocalBusinessSchema,
  FAQSchema,
  ServiceSchema,
  BreadcrumbSchema,
  EventSchema
};
