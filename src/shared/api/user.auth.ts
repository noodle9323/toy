import { createServerSideClient } from './supabase';

export const getUser = async () => {
  const supabase = await createServerSideClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return user;
};
