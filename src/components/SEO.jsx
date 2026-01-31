import { Helmet } from 'react-helmet-async';

const SITE_NAME = 'A&K Upholstery & Blinds';
const BASE_URL = 'https://aandk.co.za';
const DEFAULT_IMAGE = '/images/og-default.jpg';

export default function SEO({
  title,
  description,
  keywords = [],
  path = '',
  image = DEFAULT_IMAGE,
  type = 'website',
  schema = null,
  noIndex = false,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const canonicalUrl = `${BASE_URL}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={canonicalUrl} />
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      {/* Geographic Meta Tags for Local SEO */}
      <meta name="geo.region" content="ZA-GT" />
      <meta name="geo.placename" content="Krugersdorp" />
      <meta name="geo.position" content="-26.1234567;27.7654321" />
      <meta name="ICBM" content="-26.1234567, 27.7654321" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_ZA" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* JSON-LD Structured Data */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}

export { SITE_NAME, BASE_URL };
