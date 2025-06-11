import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'getting-started-with-nextjs-13',
    title: 'Getting Started with Next.js 13',
    excerpt: 'Learn how to build modern web applications with Next.js 13 and its new features.',
    content: `
      Next.js 13 introduces several groundbreaking features that make building React applications easier and more efficient than ever before.

      ## The App Router
      The new App Router is a file-system based router that enables you to build complex routing patterns with ease. It's built on top of React Server Components and provides a more intuitive way to organize your application's routes.

      ## Server Components
      React Server Components allow you to write UI that can be rendered and cached on the server, reducing the JavaScript bundle size sent to the client. This leads to faster page loads and improved performance.

      ## Streaming
      Next.js 13 introduces streaming, which allows you to progressively render and stream UI units from the server to the client. This means users can see content faster, even before the entire page is ready.

      ## Conclusion
      Next.js 13 represents a significant step forward in the React ecosystem, providing developers with powerful tools to build better web applications.
    `,
    coverImage: '/images/blog/nextjs-13.jpg',
    date: '2024-03-15',
    author: 'John Doe',
    category: 'Development',
    tags: ['Next.js', 'React', 'JavaScript', 'Web Development'],
    featured: true,
    readingTime: 5,
    relatedPosts: ['2', '3'],
  },
  {
    id: '2',
    slug: 'mastering-typescript',
    title: 'Mastering TypeScript: A Comprehensive Guide',
    excerpt:
      'A deep dive into TypeScript features and best practices for building type-safe applications.',
    content: `
      TypeScript has become an essential tool in modern web development, offering type safety and better developer experience.

      ## Type System
      TypeScript's type system is one of its most powerful features. It helps catch errors early in development and provides better tooling support.

      ## Advanced Types
      Learn about advanced TypeScript types like generics, mapped types, and conditional types that make your code more flexible and reusable.

      ## Best Practices
      Discover the best practices for using TypeScript in your projects, from project setup to type definitions and error handling.

      ## Conclusion
      TypeScript is more than just a type checker - it's a powerful tool that can help you write better, more maintainable code.
    `,
    coverImage: '/images/blog/typescript.jpg',
    date: '2024-03-10',
    author: 'Jane Smith',
    category: 'Development',
    tags: ['TypeScript', 'JavaScript', 'Programming'],
    featured: false,
    readingTime: 8,
    relatedPosts: ['1', '4'],
  },
  {
    id: '3',
    slug: 'design-systems',
    title: 'Building a Design System: From Concept to Implementation',
    excerpt: 'Learn how to create and maintain a scalable design system for your organization.',
    content: `
      Design systems are essential for maintaining consistency and efficiency in product development.

      ## Components
      A well-designed component library is the foundation of any design system. Learn how to create reusable, accessible components.

      ## Documentation
      Good documentation is crucial for the success of a design system. Discover best practices for documenting components and patterns.

      ## Implementation
      From Figma to code, learn how to implement your design system across different platforms and frameworks.

      ## Conclusion
      A successful design system requires careful planning, consistent maintenance, and strong collaboration between designers and developers.
    `,
    coverImage: '/images/blog/design-system.jpg',
    date: '2024-03-05',
    author: 'Alex Johnson',
    category: 'Design',
    tags: ['Design Systems', 'UI/UX', 'Components'],
    featured: true,
    readingTime: 6,
    relatedPosts: ['1', '5'],
  },
  {
    id: '4',
    slug: 'ai-in-web-development',
    title: 'The Impact of AI on Web Development',
    excerpt:
      'Exploring how artificial intelligence is transforming the way we build and maintain web applications.',
    content: `
      Artificial Intelligence is revolutionizing web development in numerous ways.

      ## Code Generation
      AI-powered tools can now generate code, suggest improvements, and help debug issues faster than ever before.

      ## Testing and Quality Assurance
      AI can automate testing processes and help identify potential issues before they reach production.

      ## User Experience
      AI enables more personalized and adaptive user experiences through machine learning and predictive analytics.

      ## Conclusion
      As AI continues to evolve, its impact on web development will only grow, creating new opportunities and challenges for developers.
    `,
    coverImage: '/images/blog/ai-web-dev.jpg',
    date: '2024-03-01',
    author: 'Sarah Wilson',
    category: 'Technology',
    tags: ['AI', 'Web Development', 'Future Tech'],
    featured: false,
    readingTime: 7,
    relatedPosts: ['2', '6'],
  },
  {
    id: '5',
    slug: 'digital-marketing-trends',
    title: 'Digital Marketing Trends for 2024',
    excerpt: 'Stay ahead of the curve with these emerging digital marketing trends and strategies.',
    content: `
      The digital marketing landscape is constantly evolving, and 2024 brings new opportunities and challenges.

      ## Social Media Marketing
      Social media continues to be a powerful marketing channel, with new platforms and features emerging regularly.

      ## Content Marketing
      Quality content remains king, but the way we create and distribute it is changing with new technologies.

      ## Data-Driven Marketing
      The importance of data in marketing decisions continues to grow, with AI and machine learning playing key roles.

      ## Conclusion
      Success in digital marketing requires staying informed about trends and being willing to adapt to new technologies and strategies.
    `,
    coverImage: '/images/blog/digital-marketing.jpg',
    date: '2024-02-25',
    author: 'Mike Brown',
    category: 'Marketing',
    tags: ['Digital Marketing', 'Social Media', 'Content Marketing'],
    featured: false,
    readingTime: 5,
    relatedPosts: ['3', '6'],
  },
  {
    id: '6',
    slug: 'startup-funding',
    title: 'A Guide to Startup Funding in 2024',
    excerpt:
      'Everything you need to know about securing funding for your startup in the current market.',
    content: `
      Navigating the startup funding landscape requires careful planning and strategy.

      ## Funding Options
      From bootstrapping to venture capital, explore the various funding options available to startups.

      ## Pitch Preparation
      Learn how to create a compelling pitch deck and present your startup effectively to potential investors.

      ## Market Analysis
      Understanding market trends and investor preferences is crucial for successful fundraising.

      ## Conclusion
      While securing funding is challenging, proper preparation and strategy can significantly increase your chances of success.
    `,
    coverImage: '/images/blog/startup-funding.jpg',
    date: '2024-02-20',
    author: 'Emily Chen',
    category: 'Business',
    tags: ['Startups', 'Funding', 'Entrepreneurship'],
    featured: true,
    readingTime: 6,
    relatedPosts: ['4', '5'],
  },
];
