import { LoadingSpinner } from '@/components/ui/loading-spinner';

export default function BlogLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center min-h-[60vh]">
            <LoadingSpinner size="lg" className="mb-4" />
            <p className="text-gray-600 dark:text-gray-300 text-lg">Loading blog posts...</p>
          </div>
        </div>
      </main>
    </div>
  );
}
