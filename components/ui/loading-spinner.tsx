import { cn } from '@/lib/utils';

interface LoadingSpinnerProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  withBackdrop?: boolean;
}

export function LoadingSpinner({
  className,
  size = 'md',
  withBackdrop = false,
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  const spinner = (
    <div
      className={cn(
        'animate-spin rounded-full border-4 border-indigo-200 border-t-indigo-600 dark:border-indigo-900 dark:border-t-indigo-400',
        sizeClasses[size]
      )}
    />
  );

  if (withBackdrop) {
    return (
      <div className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm z-50">
        <div className={cn('fixed inset-0 flex items-center justify-center', className)}>
          {spinner}
        </div>
      </div>
    );
  }

  return <div className={cn('flex items-center justify-center', className)}>{spinner}</div>;
}
