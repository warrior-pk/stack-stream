import { notFound } from "next/navigation";

const UserProfile = async ({
  params,
}: {
  params: Promise<{ username: string }>;
}) => {
  const username = decodeURIComponent((await params).username);

  if (!username.startsWith("@")) {
    notFound();
  }
  return (
    <div>
      <p>Welcome, {username}!</p>
    </div>
  );
};

export default UserProfile;
