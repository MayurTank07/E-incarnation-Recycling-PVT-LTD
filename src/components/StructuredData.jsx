export const OrganizationSchema = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "E-Incarnation Recycling Pvt. Ltd.",
    "url": "https://eincarnation.in",
    "logo": "https://eincarnation.in/logo.png",
    "description": "Leading e-waste recycling company in India providing EPR compliance, IT asset disposition, and sustainable electronics recycling services",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN",
      "addressRegion": "Maharashtra",
      "addressLocality": "Mumbai"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@eincarnation.in",
      "availableLanguage": ["en", "hi"]
    },
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

export const ServiceSchema = ({ service }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.title || "E-Waste Recycling",
    "provider": {
      "@type": "Organization",
      "name": "E-Incarnation Recycling Pvt. Ltd.",
      "url": "https://eincarnation.in"
    },
    "description": service.description || "Professional e-waste recycling and management services",
    "areaServed": {
      "@type": "Country",
      "name": "India"
    }
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
      "item": `https://eincarnation.in${item.path}`
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
    "location": {
      "@type": "Place",
      "name": event.location || "India",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "IN"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "E-Incarnation Recycling Pvt. Ltd.",
      "url": "https://eincarnation.in"
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
  ServiceSchema,
  BreadcrumbSchema,
  EventSchema
};
