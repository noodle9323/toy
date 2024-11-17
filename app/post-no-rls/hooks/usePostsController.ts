import {
  createPosts,
  deletePostSoft,
  getPosts,
  getPostsBySearch,
  updatePosts,
} from '@shared/api/client/post-no-rls';
import { useEffect, useState } from 'react';

import { Database } from '@shared/types/database.types';

type PostsDto = Database['public']['Tables']['post_no_rls']['Row'];

const usePostsController = () => {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState<PostsDto[]>([]);

  const onGetPosts = async () => {
    setLoading(true);
    try {
      const resultPosts = await getPosts();
      if (resultPosts) {
        setPosts(resultPosts);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(true);
    }
  };

  useEffect(() => {
    onGetPosts();
  }, []);

  const onCreateEmptyPosts = async () => {
    await createPosts('');
    await onGetPosts();
  };

  const onUpdatePosts = async (id: number, content: string) => {
    await updatePosts(id, content);
    await onGetPosts();
  };

  const onDeletePosts = async (id: number) => {
    await deletePostSoft(id);
    await onGetPosts();
  };

  const onSearchPosts = async (terms: string) => {
    if (!terms) {
      await onGetPosts();
    }

    const postResult = await getPostsBySearch(terms);
    console.error('postResult', postResult);
    if (postResult) setPosts(postResult);
  };

  return {
    loading,
    posts,
    onCreateEmptyPosts,
    onUpdatePosts,
    onDeletePosts,
    onSearchPosts,
  };
};

export default usePostsController;
