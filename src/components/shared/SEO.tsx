import React from 'react';
import { ROUTE_SEO_CONFIGS } from '../../i18n/seo/routes';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Montessori Skye View Learning Center | Child-Centered Education Las Vegas',
  description = 'Nurturing curious minds and joyful hearts in grades Pre-K through 5th. Child-centered Montessori education with outdoor learning focus in Las Vegas. Superior staff ratio, homeschool supplementation available.',
  keywords = 'Montessori education Las Vegas, child-centered learning, outdoor education, homeschool supplementation, Pre-K through 5th grade, Las Vegas learning center, Montessori school, child development, nature-based learning',
  image = '/og-image.png',
  url = 'https://montessoriskyeview.com/',
  type = 'website',
  author = 'Montessori Skye View Learning Center',
  publishedTime,
  modifiedTime,
  section,
  tags = [],
}) => {
  const fullUrl = url.startsWith('http')
    ? url
    : `https://montessoriskyeview.com/${url}`;
  const fullImageUrl = image.startsWith('http')
    ? image
    : `https://montessoriskyeview.com/${image}`;

  React.useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta tags
    const updateMetaTag = (name: string, content: string) => {
      let meta = document.querySelector(
        `meta[name="${name}"]`
      ) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    const updatePropertyTag = (property: string, content: string) => {
      let meta = document.querySelector(
        `meta[property="${property}"]`
      ) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Update primary meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);

    // Update Open Graph tags
    updatePropertyTag('og:title', title);
    updatePropertyTag('og:description', description);
    updatePropertyTag('og:image', fullImageUrl);
    updatePropertyTag('og:url', fullUrl);
    updatePropertyTag('og:type', type);

    // Update Twitter Card tags
    updatePropertyTag('twitter:title', title);
    updatePropertyTag('twitter:description', description);
    updatePropertyTag('twitter:image', fullImageUrl);
    updatePropertyTag('twitter:url', fullUrl);

    // Update article-specific tags if applicable
    if (type === 'article') {
      if (publishedTime) {
        updatePropertyTag('article:published_time', publishedTime);
      }
      if (modifiedTime) {
        updatePropertyTag('article:modified_time', modifiedTime);
      }
      if (section) {
        updatePropertyTag('article:section', section);
      }
      if (author) {
        updatePropertyTag('article:author', author);
      }
      tags.forEach(tag => {
        const tagMeta = document.createElement('meta');
        tagMeta.setAttribute('property', 'article:tag');
        tagMeta.content = tag;
        document.head.appendChild(tagMeta);
      });
    }

    // Update canonical URL
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    ) as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = fullUrl;
  }, [
    title,
    description,
    keywords,
    image,
    url,
    type,
    author,
    publishedTime,
    modifiedTime,
    section,
    tags,
    fullUrl,
    fullImageUrl,
  ]);

  return null; // This component doesn't render anything
};

// Predefined SEO configurations for different pages
export const SEOConfigs = ROUTE_SEO_CONFIGS;
