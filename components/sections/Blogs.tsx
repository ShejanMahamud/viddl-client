'use client';

import { SEOOptimizedImage } from '@/components/SEOOptimizedImage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { blogPosts } from '@/lib/data/blog-posts';
import { BlogCategory } from '@/lib/types/blog';
import { formatDate } from '@/lib/utils/date';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Calendar, Clock, Search, User } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const categories: BlogCategory[] = ['Technology', 'Business', 'Design', 'Marketing', 'Development'];
const POSTS_PER_PAGE = 6;

export default function Blogs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<BlogCategory | 'All'>('All');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter posts based on search query and category
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          {/* Hero Section */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {' '}
                Blog
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
              Explore our latest articles, tutorials, and insights about technology, business,
              design, and more.
            </p>

            {/* Search Bar */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-2xl mx-auto mb-8"
            >
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="pl-10 py-6 text-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700"
                />
              </div>
            </motion.div>

            {/* Category Filter */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              <Button
                variant={selectedCategory === 'All' ? 'default' : 'outline'}
                onClick={() => {
                  setSelectedCategory('All');
                  setCurrentPage(1);
                }}
                className={
                  selectedCategory === 'All'
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white'
                    : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
                }
              >
                All
              </Button>
              {categories.map(category => (
                <Button
                  key={category}
                  variant={category === selectedCategory ? 'default' : 'outline'}
                  onClick={() => {
                    setSelectedCategory(category);
                    setCurrentPage(1);
                  }}
                  className={
                    category === selectedCategory
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white'
                      : 'border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }
                >
                  {category}
                </Button>
              ))}
            </motion.div>
          </motion.div>

          {/* Featured Post */}
          {paginatedPosts
            .filter(post => post.featured)
            .map(post => (
              <motion.div
                key={post.id}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-16"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-gray-200/50 dark:border-gray-700/50 hover:shadow-2xl transition-all duration-300">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="relative h-64 lg:h-full">
                        <SEOOptimizedImage
                          src={post.coverImage}
                          alt={post.title}
                          width={800}
                          height={600}
                          className="w-full h-full object-cover"
                          priority={post.featured}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-4">
                          <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                          <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(post.date)}
                          </div>
                        </div>
                        <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center">
                              <User className="h-4 w-4 mr-1" />
                              {post.author}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-1" />
                              {post.readingTime} min read
                            </div>
                          </div>
                          <Button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white">
                            Read More
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedPosts
              .filter(post => !post.featured)
              .map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="group"
                >
                  <Link href={`/blog/${post.slug}`}>
                    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <div className="relative h-48 overflow-hidden">
                        <SEOOptimizedImage
                          src={post.coverImage}
                          alt={post.title}
                          width={800}
                          height={600}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          priority={false}
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm font-medium">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {formatDate(post.date)}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readingTime} min read
                          </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map(tag => (
                            <span
                              key={tag}
                              className="bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 px-2 py-1 rounded-full text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex justify-center gap-2 mt-12"
            >
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="border-gray-200 dark:border-gray-700"
              >
                Previous
              </Button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <Button
                  key={page}
                  variant={page === currentPage ? 'default' : 'outline'}
                  onClick={() => setCurrentPage(page)}
                  className={
                    page === currentPage
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white'
                      : 'border-gray-200 dark:border-gray-700'
                  }
                >
                  {page}
                </Button>
              ))}
              <Button
                variant="outline"
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="border-gray-200 dark:border-gray-700"
              >
                Next
              </Button>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
