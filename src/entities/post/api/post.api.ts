'use server';

import { createServerSideClient } from '@/src/shared/api/supabase';

// postList 가져오기
export const getPosts = async () => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from('post_with_rls')
    .select('*')
    .is('deleted_at', null) // soft deleted 안 된 애들만
    .order('id', {
      ascending: false,
    });
  return result.data;
};

// postList 가져오기 + by Id
export const getPostsById = async (id: number) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from('post_with_rls')
    .select('*')
    .is('deleted_at', null)
    .eq('id', id);

  return result.data;
};

// postList 가져오기 + search
export const getPostsBySearch = async (terms: string) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from('post_with_rls')
    .select('*')
    .is('deleted_at', null)
    .ilike('content', `%${terms}`)
    .order('id', { ascending: false })
    .limit(500);

  return result.data;
};

// postList 생성하기
export const createPosts = async (content: string) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from('post_with_rls')
    .insert({ content })
    .select();

  return result.data;
};

// postList 업데이트하기
export const updatePosts = async (id: number, content: string) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from('post_with_rls')
    .update({ content, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select();

  return result.data;
};

// postList soft delete
export const deletePostSoft = async (id: number) => {
  const supabase = await createServerSideClient();
  const result = await supabase
    .from('post_with_rls')
    .update({
      deleted_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select();

  return result.data;
};

// postList hard delete
// export const deletePostHard = async (id: number) => {
//   const supabase = await createServerSideClient();
//   const result = await supabase.from('post_with_rls').delete().eq('id', id);

//   return result.data;
// };
