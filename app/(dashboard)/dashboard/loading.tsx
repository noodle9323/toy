import { PostLoading } from '@/src/features/post';

export default function Loading() {
  return (
    <div className="animate-pulse space-y-4">
      <PostLoading />
    </div>
  );
}
