import React from 'react';

import { useEffect } from 'react';

const SEO: React.FC = () => {
  useEffect(() => {
    // Set document title
    document.title = 'Wynn Solutions Myanmar - Software & AI Solutions Provider';
    
    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Leading software and AI solutions provider in Myanmar. Expert in Flutter, Kotlin, PHP development with 9+ years experience. Custom web & mobile applications, QA services.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Leading software and AI solutions provider in Myanmar. Expert in Flutter, Kotlin, PHP development with 9+ years experience. Custom web & mobile applications, QA services.';
      document.head.appendChild(meta);
    }
    
    // Set meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'software development myanmar, AI solutions, flutter developer, kotlin developer, PHP laravel, mobile app development, web development, QA testing, Hein Thura Wynn');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'keywords';
      meta.content = 'software development myanmar, AI solutions, flutter developer, kotlin developer, PHP laravel, mobile app development, web development, QA testing, Hein Thura Wynn';
      document.head.appendChild(meta);
    }
    
    // Set Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Wynn Solutions Myanmar - Software & AI Solutions Provider' },
      { property: 'og:description', content: 'Leading software and AI solutions provider in Myanmar. Expert in Flutter, Kotlin, PHP development with 9+ years experience.' },
      { property: 'og:url', content: 'https://wynnsolutionsmyanmar.com' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://wynnsolutionsmyanmar.com/og-image.jpg' }
    ];
    
    ogTags.forEach(tag => {
      let meta = document.querySelector(`meta[property="${tag.property}"]`);
      if (meta) {
        meta.setAttribute('content', tag.content);
      } else {
        meta = document.createElement('meta');
        meta.setAttribute('property', tag.property);
        meta.setAttribute('content', tag.content);
        document.head.appendChild(meta);
      }
    });
  }, []);

  return null;
};

export default SEO;