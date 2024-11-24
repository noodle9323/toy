// 'use client';

// import { Database } from '@shared/types/database.types';
// import { SupabaseClient } from '@supabase/supabase-js';
// import { createSupabaseBrowserClient } from '@/src/entities/post/api/client/supabase';

// type PostsDto = Database['public']['Tables']['post_no_rls']['Row'];

// // 기본 쿼리 생성을 위한 유틸함수
// const getBaseQuery = (supabase: SupabaseClient) => {
//   return supabase.from('post_no_rls').select('*').is('deleted_at', null);
// };

// // API 에러 처리하는 레퍼 함수
// const handleQuery = async <T>(
//   queryFn: () => Promise<{ data: T | null; error: any }>,
// ) => {
//   try {
//     const { data, error } = await queryFn();
//     if (error) throw error;
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// // postList 가져오기
// // export const getPosts = async () => {
// //   const supabase = createSupabaseBrowserClient();
// //   const result = await supabase
// //     .from('post_no_rls')
// //     .select('*')
// //     .is('deleted_at', null) // soft deleted 안 된 애들만
// //     .order('id', {
// //       ascending: false,
// //     });
// //   return result.data;
// // };
// export const getPosts = async (): Promise<PostsDto[] | null> => {
//   const supabase = createSupabaseBrowserClient();
//   return handleQuery(async () =>
//     getBaseQuery(supabase).order('id', { ascending: false }),
//   );
// };

// // postList 가져오기 + by Id
// export const getPostsById = async (id: number) => {
//   const supabase = createSupabaseBrowserClient();
//   const result = await supabase
//     .from('post_no_rls')
//     .select('*')
//     .is('deleted_at', null)
//     .eq('id', id);

//   return result.data;
// };

// // postList 가져오기 + search
// export const getPostsBySearch = async (terms: string) => {
//   const supabase = createSupabaseBrowserClient();
//   const result = await supabase
//     .from('post_no_rls')
//     .select('*')
//     .is('deleted_at', null)
//     .ilike('content', `%${terms}`)
//     .order('id', { ascending: false })
//     .limit(500);

//   return result.data;
// };

// // postList 생성하기
// export const createPosts = async (content: string) => {
//   const supabase = createSupabaseBrowserClient();
//   const result = await supabase
//     .from('post_no_rls')
//     .insert({ content })
//     .select();

//   return result.data;
// };

// // postList 업데이트하기
// export const updatePosts = async (id: number, content: string) => {
//   const supabase = createSupabaseBrowserClient();
//   const result = await supabase
//     .from('post_no_rls')
//     .update({ content, updated_at: new Date().toISOString() })
//     .eq('id', id)
//     .select();

//   return result.data;
// };

// // postList soft delete
// export const deletePostSoft = async (id: number) => {
//   const supabase = createSupabaseBrowserClient();
//   const result = await supabase
//     .from('post_no_rls')
//     .update({
//       deleted_at: new Date().toISOString(),
//       updated_at: new Date().toISOString(),
//     })
//     .eq('id', id)
//     .select();

//   return result.data;
// };

// // postList hard delete
// // export const deletePostHard = async (id: number) => {
// //   const supabase = createSupabaseBrowserClient();
// //   const result = await supabase.from('post_no_rls').delete().eq('id', id);

// //   return result.data;
// // };
