export type BlogCategory =
  | 'Technology'
  | 'Business'
  | 'Design'
  | 'Marketing'
  | 'Development'
  | 'All';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: string;
  category: BlogCategory;
  tags: string[];
  featured: boolean;
  readingTime: number;
  relatedPosts: string[];
}

export interface BlogFilters {
  searchQuery: string;
  category: BlogCategory;
  page: number;
  postsPerPage: number;
}

export interface BlogPagination {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
}
