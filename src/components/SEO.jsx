import { API_CONFIG } from '../config/api.config';

export const SEO = ({
  title = 'E Waste Recycling in Mumbai | Best E-Waste Management Company - E-Incarnation',
  description = 'Best e-waste recycling company in Mumbai. E-Incarnation offers certified, eco-friendly e-waste disposal, EPR compliance & IT asset recycling. CPCB authorized recycler in Mumbai, Maharashtra.',
  keywords = 'e waste recycling in Mumbai, best e waste recycling in Mumbai, e waste management company Mumbai, e-waste disposal Mumbai, e-waste recycler Mumbai, electronic waste recycling Mumbai, EPR services Mumbai, IT asset disposal Mumbai, CPCB authorized recycler Mumbai',
  canonical = '',
  ogType = 'website',
  ogImage = '/og-image.jpg',
  ogImageAlt = 'E-Incarnation Recycling - E-Waste Management in Mumbai',
  twitterCard = 'summary_large_image',
  noindex = false
}) => {
  const siteUrl = API_CONFIG.SITE_URL;
  const fullUrl = canonical ? `${siteUrl}${canonical}` : `${siteUrl}${window.location.pathname}`;

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={fullUrl} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="E-Incarnation Recycling" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content="@eincarnation" />
      <meta name="twitter:creator" content="@eincarnation" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />
      <meta name="twitter:image:alt" content={ogImageAlt} />

      {/* Additional SEO */}
      <meta name="language" content="English" />
      <meta name="author" content="E-Incarnation Recycling Pvt. Ltd." />

      {/* Geo Targeting — Mumbai, Maharashtra */}
      <meta name="geo.region" content="IN-MH" />
      <meta name="geo.placename" content="Mumbai, Maharashtra, India" />
      <meta name="geo.position" content="19.0922584;72.9109548" />
      <meta name="ICBM" content="19.0922584, 72.9109548" />

      {/* Mobile Meta Tags */}
      <meta name="theme-color" content="#1A0185" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    </>
  );
};

export default SEO;
