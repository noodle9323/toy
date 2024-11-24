'use client';

import { PostError } from '@/src/features/post';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-4 bg-red-50 text-red-500 rounded">
      <PostError />
    </div>
  );
}
