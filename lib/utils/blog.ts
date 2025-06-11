import { BlogCategory, BlogFilters, BlogPost } from '../types/blog';

export function filterBlogPosts(posts: BlogPost[], filters: BlogFilters): BlogPost[] {
  const { searchQuery, category } = filters;

  return posts.filter(post => {
    const matchesSearch = searchQuery
      ? post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      : true;

    const matchesCategory = category === 'All' || post.category === category;

    return matchesSearch && matchesCategory;
  });
}

export function paginateBlogPosts(
  posts: BlogPost[],
  page: number,
  postsPerPage: number
): BlogPost[] {
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;
  return posts.slice(startIndex, endIndex);
}

export function getRelatedPosts(
  posts: BlogPost[],
  currentPost: BlogPost,
  limit: number = 3
): BlogPost[] {
  return posts
    .filter(post => post.id !== currentPost.id && currentPost.relatedPosts.includes(post.id))
    .slice(0, limit);
}

export function getPopularTags(posts: BlogPost[], limit: number = 10): string[] {
  const tagCounts = posts.reduce(
    (acc, post) => {
      post.tags.forEach(tag => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
      return acc;
    },
    {} as Record<string, number>
  );

  return Object.entries(tagCounts)
    .sort(([, a], [, b]) => b - a)
    .slice(0, limit)
    .map(([tag]) => tag);
}

export function getPostsByTag(posts: BlogPost[], tag: string): BlogPost[] {
  return posts.filter(post => post.tags.includes(tag));
}

export function getPostsByAuthor(posts: BlogPost[], author: string): BlogPost[] {
  return posts.filter(post => post.author === author);
}

export function getPostsByDateRange(posts: BlogPost[], startDate: Date, endDate: Date): BlogPost[] {
  return posts.filter(post => {
    const postDate = new Date(post.date);
    return postDate >= startDate && postDate <= endDate;
  });
}

export function getFeaturedPosts(posts: BlogPost[]): BlogPost[] {
  return posts.filter(post => post.featured);
}

export function getLatestPosts(posts: BlogPost[], limit: number = 5): BlogPost[] {
  return [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

export function getCategoryCounts(posts: BlogPost[]): Record<BlogCategory, number> {
  return posts.reduce(
    (acc, post) => {
      acc[post.category as BlogCategory] = (acc[post.category as BlogCategory] || 0) + 1;
      return acc;
    },
    {} as Record<BlogCategory, number>
  );
}
