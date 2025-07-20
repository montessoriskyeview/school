// SEO Utility Functions for Montessori Skye View Learning Center

export interface ISEOMetadata {
  title: string;
  description: string;
  keywords: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  canonicalUrl?: string;
  ogImageAlt?: string;
  ogUpdatedTime?: string;
  ogLogo?: string;
}

export interface IStructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

// Default SEO metadata for the site
export const defaultSEO: ISEOMetadata = {
  title: 'Montessori Skye View Learning Center | Las Vegas',
  description:
    'Premier Montessori learning center in Las Vegas serving children ages 3-11. Child-led learning, outdoor education, and the best teacher-student ratio in the area.',
  keywords:
    'Montessori Las Vegas, early childhood education, outdoor learning, child development, preschool Las Vegas, kindergarten Las Vegas, homeschool support',
  ogType: 'website',
  twitterCard: 'summary_large_image',
};

// Update page title and meta tags
export const updateSEO = (metadata: Partial<ISEOMetadata>) => {
  const fullMetadata = { ...defaultSEO, ...metadata };

  // Update document title
  document.title = fullMetadata.title;

  // Update meta description
  let metaDescription = document.querySelector('meta[name="description"]');
  if (!metaDescription) {
    metaDescription = document.createElement('meta');
    metaDescription.setAttribute('name', 'description');
    document.head.appendChild(metaDescription);
  }
  metaDescription.setAttribute('content', fullMetadata.description);

  // Update meta keywords
  let metaKeywords = document.querySelector('meta[name="keywords"]');
  if (!metaKeywords) {
    metaKeywords = document.createElement('meta');
    metaKeywords.setAttribute('name', 'keywords');
    document.head.appendChild(metaKeywords);
  }
  metaKeywords.setAttribute('content', fullMetadata.keywords);

  // Update Open Graph tags
  updateOpenGraph(fullMetadata);

  // Update Twitter Card tags
  updateTwitterCard(fullMetadata);

  // Update canonical URL
  if (fullMetadata.canonicalUrl) {
    updateCanonicalUrl(fullMetadata.canonicalUrl);
  }
};

// Update Open Graph meta tags
const updateOpenGraph = (metadata: ISEOMetadata) => {
  const ogTags = [
    { property: 'og:title', content: metadata.ogTitle || metadata.title },
    {
      property: 'og:description',
      content: metadata.ogDescription || metadata.description,
    },
    { property: 'og:type', content: metadata.ogType || 'website' },
    {
      property: 'og:url',
      content: metadata.canonicalUrl || window.location.href,
    },
    { property: 'og:image:width', content: '1260' },
    { property: 'og:image:height', content: '628' },
    {
      property: 'og:image:alt',
      content:
        metadata.ogImageAlt ||
        "Montessori Skye View Learning Center - Don't compromise on education",
    },
    { property: 'og:image:type', content: 'image/png' },
    {
      property: 'og:updated_time',
      content: metadata.ogUpdatedTime || new Date().toISOString(),
    },
    {
      property: 'og:image',
      content:
        metadata.ogImage || 'https://montessoriskyeview.com/og-image.png',
    },
    {
      property: 'og:logo',
      content:
        metadata.ogLogo || 'https://montessoriskyeview.com/og-image-icon.png',
    },
  ];

  ogTags.forEach(tag => {
    let metaTag = document.querySelector(`meta[property="${tag.property}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('property', tag.property);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', tag.content);
  });
};

// Update Twitter Card meta tags
const updateTwitterCard = (metadata: ISEOMetadata) => {
  const twitterTags = [
    {
      name: 'twitter:card',
      content: metadata.twitterCard || 'summary_large_image',
    },
    { name: 'twitter:title', content: metadata.twitterTitle || metadata.title },
    {
      name: 'twitter:description',
      content: metadata.twitterDescription || metadata.description,
    },
  ];

  twitterTags.forEach(tag => {
    let metaTag = document.querySelector(`meta[name="${tag.name}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('name', tag.name);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', tag.content);
  });
};

// Update canonical URL
const updateCanonicalUrl = (url: string) => {
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url);
};

// Generate structured data for blog posts
export const generateBlogPostStructuredData = (post: any): IStructuredData => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: post.author.name,
    },
    datePublished: post.publishDate,
    dateModified: post.publishDate,
    publisher: {
      '@type': 'Organization',
      name: 'Montessori Skye View Learning Center',
      logo: {
        '@type': 'ImageObject',
        url: 'https://skyviewlearning.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://skyviewlearning.com/blog/${post.slug}`,
    },
    image: post.featuredImage
      ? {
          '@type': 'ImageObject',
          url: post.featuredImage,
        }
      : undefined,
  };
};

// Generate structured data for the organization
export const generateOrganizationStructuredData = (): IStructuredData => {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Montessori Skye View Learning Center',
    description:
      'Premier Montessori learning center in Las Vegas serving children ages 3-11 with child-led learning and outdoor education.',
    url: 'https://skyviewlearning.com',
    logo: 'https://skyviewlearning.com/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      addressCountry: 'US',
    },
    telephone: '+1-702-XXX-XXXX',
    email: 'info@skyviewlearning.com',
    sameAs: [
      'https://www.facebook.com/skyviewlearning',
      'https://www.instagram.com/skyviewlearning',
    ],
    areaServed: {
      '@type': 'City',
      name: 'Las Vegas',
    },
    serviceType: 'Montessori Education',
    ageRange: '3-11 years',
  };
};

// Add structured data to page
export const addStructuredData = (data: IStructuredData) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
};

// Remove existing structured data
export const removeStructuredData = () => {
  const existingScripts = document.querySelectorAll(
    'script[type="application/ld+json"]'
  );
  existingScripts.forEach(script => script.remove());
};

// SEO-friendly URL generation
export const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

// Generate meta description from content
export const generateMetaDescription = (
  content: string,
  maxLength: number = 160
): string => {
  // Remove HTML tags and get plain text
  const plainText = content.replace(/<[^>]*>/g, '');

  // Truncate to max length
  if (plainText.length <= maxLength) {
    return plainText;
  }

  // Find the last complete word within the limit
  const truncated = plainText.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');

  return lastSpace > 0
    ? truncated.substring(0, lastSpace) + '...'
    : truncated + '...';
};

// SEO optimization for images
export const optimizeImageSEO = (
  imageUrl: string,
  altText: string,
  title?: string
) => {
  return {
    src: imageUrl,
    alt: altText,
    title: title || altText,
    loading: 'lazy' as const,
  };
};
