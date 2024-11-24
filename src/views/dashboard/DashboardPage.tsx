import { PostList } from '@/src/features/post';
import { getUser } from '@/src/shared/api/user.auth';

export default async function DashboardPage() {
  const user = await getUser();

  return (
    <div className="m-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <PostList user={user} ownerUserId={user?.id ?? ''} />
    </div>
  );
}
