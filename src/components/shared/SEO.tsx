import React from 'react';

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
export const SEOConfigs = {
  home: {
    title:
      'Montessori Skye View Learning Center | Child-Centered Education Las Vegas',
    description:
      'Nurturing curious minds and joyful hearts in grades Pre-K through 5th. Child-centered Montessori education with outdoor learning focus in Las Vegas. Superior staff ratio, homeschool supplementation available.',
    keywords:
      'Montessori education Las Vegas, child-centered learning, outdoor education, homeschool supplementation, Pre-K through 5th grade, Las Vegas learning center, Montessori school, child development, nature-based learning',
    url: '/',
  },
  location: {
    title:
      'Our Campus Location | Montessori Skye View Learning Center Las Vegas',
    description:
      'Visit our beautiful Skye Canyon campus in Las Vegas, designed specifically for Montessori learning with ample outdoor space for exploration and play.',
    keywords:
      'Montessori campus Las Vegas, Skye Canyon location, outdoor learning space, Las Vegas Montessori school location, child-friendly campus',
    url: '/location',
  },
  tuition: {
    title: 'Tuition & Fees | Montessori Skye View Learning Center Las Vegas',
    description:
      'Transparent tuition rates and flexible payment options for our Montessori learning center. Quality education at competitive prices in Las Vegas.',
    keywords:
      'Montessori tuition Las Vegas, learning center fees, affordable Montessori education, payment plans, Las Vegas Montessori costs',
    url: '/tuition',
  },
  schedule: {
    title: 'Class Schedule & Programs | Montessori Skye View Learning Center',
    description:
      'Flexible class schedules and programs designed for Pre-K through 5th grade. Morning and afternoon sessions available with extended care options.',
    keywords:
      'Montessori class schedule, Pre-K programs, elementary education schedule, Las Vegas Montessori programs, flexible learning schedules',
    url: '/schedule',
  },
  registration: {
    title: 'Enrollment & Registration | Montessori Skye View Learning Center',
    description:
      "Start your child's Montessori journey today. Simple enrollment process for Pre-K through 5th grade. Limited spots available.",
    keywords:
      'Montessori enrollment Las Vegas, registration process, Pre-K enrollment, elementary school registration, Las Vegas Montessori admission',
    url: '/registration',
  },
  philosophy: {
    title: 'Our Montessori Philosophy | Child-Centered Learning Approach',
    description:
      'Discover our unique Montessori philosophy combining traditional principles with outdoor learning and child-centered activities.',
    keywords:
      'Montessori philosophy, child-centered learning, outdoor education philosophy, Montessori method, Las Vegas Montessori approach',
    url: '/philosophy',
  },
  contact: {
    title: 'Contact Us | Montessori Skye View Learning Center Las Vegas',
    description:
      'Get in touch with our Montessori learning center in Las Vegas. Schedule a tour, ask questions, or learn more about our programs.',
    keywords:
      'contact Montessori Las Vegas, schedule tour, Montessori learning center contact, Las Vegas Montessori information',
    url: '/contact',
  },
  faq: {
    title: 'Frequently Asked Questions | Montessori Skye View Learning Center',
    description:
      'Find answers to common questions about our Montessori learning center, programs, enrollment, and child-centered education approach.',
    keywords:
      'Montessori FAQ, learning center questions, enrollment FAQ, Montessori education questions, Las Vegas Montessori FAQ',
    url: '/faq',
  },
  accessibility: {
    title: 'Accessibility Statement | Montessori Skye View Learning Center',
    description:
      'Our commitment to accessibility and inclusive design. Learn about our efforts to make our website accessible to all users.',
    keywords:
      'accessibility, inclusive design, WCAG compliance, Montessori accessibility, Las Vegas Montessori accessibility',
    url: '/accessibility',
  },
  review: {
    title:
      'Share Your Experience | Montessori Skye View Learning Center Reviews',
    description:
      'Share your experience with our Montessori learning center. Your feedback helps other families discover quality Montessori education in Las Vegas.',
    keywords:
      'Montessori reviews Las Vegas, Montessori Skye View feedback, parent testimonials, Montessori learning center reviews, Las Vegas Montessori experience',
    url: '/review',
  },
  parents: {
    title: 'Parent Resources | Montessori Skye View Learning Center',
    description:
      'Access important documents, forms, and resources for parents. Enrollment applications, handbooks, and communication guidelines.',
    keywords:
      'parent resources, Montessori parent documents, enrollment forms, parent handbook, Montessori parent information, Las Vegas Montessori resources',
    url: '/parents',
  },
  staffResources: {
    title: 'Staff Resources | Montessori Skye View Learning Center',
    description:
      'Confidential staff resources and materials. Access to curriculum guidelines, assessment forms, and professional development materials.',
    keywords:
      'staff resources, Montessori staff materials, curriculum guidelines, assessment forms, professional development, Montessori staff documents',
    url: '/staff-resources',
  },
  fullTimeLanding: {
    title:
      'Full-Time Montessori Program | 8AM-4PM Daily | Skye View Learning Center',
    description:
      'Give your child the complete Montessori experience with our full-time program. Extended hours 8AM-4PM with enriched curriculum, outdoor learning, and comprehensive care. Perfect for working parents.',
    keywords:
      'full-time Montessori Las Vegas, 8AM-4PM Montessori program, extended care Montessori, working parents Montessori, complete Montessori curriculum, Las Vegas full-time learning center',
    url: '/schedule/full-time',
  },
  partTimeLanding: {
    title:
      'Part-Time Montessori Program | 9AM-1PM Daily | Skye View Learning Center',
    description:
      'Perfect Montessori introduction with our part-time program. Core learning hours 9AM-1PM with focused academics, outdoor activities, and family time balance. Ideal for families wanting quality education with flexibility.',
    keywords:
      'part-time Montessori Las Vegas, 9AM-1PM Montessori program, half-day Montessori, flexible Montessori schedule, family-friendly Montessori, Las Vegas part-time learning center',
    url: '/schedule/part-time',
  },
};
