import { BlogPage } from '@/src/pages/blog-page';

interface Params {
  slug: string;
}

export default function BlogPageComponent({ params }: { params: Params }) {
  return <BlogPage slug={params.slug} />;
}
