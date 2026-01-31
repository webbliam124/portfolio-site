const BASE_URL = 'https://aandk.co.za';

// LocalBusiness schema - used site-wide
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${BASE_URL}/#business`,
  name: 'A&K Upholstery & Blinds',
  description: 'Professional upholstery services and custom blinds manufactured in-house. Serving all of South Africa from our Krugersdorp workshop.',
  url: BASE_URL,
  logo: `${BASE_URL}/logo.png`,
  image: `${BASE_URL}/images/og-default.jpg`,
  telephone: '+27119554085',
  email: 'sales@aandkblinds.co.za',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '172 Voortrekker Rd, Kenmare',
    addressLocality: 'Krugersdorp',
    addressRegion: 'Gauteng',
    postalCode: '1739',
    addressCountry: 'ZA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -26.1234567,
    longitude: 27.7654321,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '16:00',
    },
  ],
  areaServed: [
    { '@type': 'City', name: 'Krugersdorp' },
    { '@type': 'State', name: 'Gauteng' },
    { '@type': 'Country', name: 'South Africa' },
  ],
  priceRange: '$$',
  paymentAccepted: 'Cash, Credit Card, EFT',
  currenciesAccepted: 'ZAR',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Upholstery & Blinds Services',
    itemListElement: [
      {
        '@type': 'OfferCatalog',
        name: 'Upholstery Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Furniture Reupholstery' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Recliner Servicing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lounge Suite Alterations' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bed Boxes & Headboards' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Furniture Repairs' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Leather Repairs' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dining Chairs' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Office Chairs' } },
        ],
      },
      {
        '@type': 'OfferCatalog',
        name: 'Blinds Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Vertical Blinds' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Venetian Blinds' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wooden Blinds' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roller Blinds' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Patio Blinds' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Outdoor Blinds' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Repairs & Servicing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Spare Parts' } },
        ],
      },
    ],
  },
};

// Generate Service schema for individual service pages
export function generateServiceSchema(service, type) {
  const serviceUrl = `${BASE_URL}/${type}/${service.id}`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': serviceUrl,
    name: service.name,
    description: service.shortDesc,
    provider: {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}/#business`,
      name: 'A&K Upholstery & Blinds',
    },
    areaServed: {
      '@type': 'Country',
      name: 'South Africa',
    },
    serviceType: type === 'upholstery' ? 'Upholstery Service' : 'Blinds Service',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'ZAR',
      },
    },
  };
}

// Generate FAQ schema for service pages
export function generateFAQSchema(faqs) {
  if (!faqs || faqs.length === 0) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };
}

// Generate Breadcrumb schema
export function generateBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url ? `${BASE_URL}${item.url}` : undefined,
    })),
  };
}

// Combine multiple schemas into an array for a page
export function combineSchemas(...schemas) {
  const validSchemas = schemas.filter(Boolean);
  if (validSchemas.length === 0) return null;
  if (validSchemas.length === 1) return validSchemas[0];
  return validSchemas;
}
