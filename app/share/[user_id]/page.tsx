interface SharePageParams {
  user_id: string;
}

export default async function page({
  params,
}: {
  params: Promise<SharePageParams>;
}) {
  const { user_id } = await params;
  return <div>{user_id}</div>;
}
