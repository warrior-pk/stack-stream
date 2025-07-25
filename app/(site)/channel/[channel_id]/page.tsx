import Link from "next/link";
const page = async ({
  params,
}: {
  params: Promise<{ channel_id: string }>;
}) => {
  const channel_id = (await params).channel_id;
  const base_create_url = `channel/${channel_id}/create`;
  return (
    <div>
      <h1>Add to channel</h1>
      <div className="grid grid-cols-main gap-4 my-6">
        <Link href={`/${base_create_url}/v`}>
          <button type="button" className="btn btn-lg btn-accent w-full">
            Videos
          </button>
        </Link>
        <Link href={`/${base_create_url}/v`}>
          <button type="button" className="btn btn-lg btn-accent w-full">
            Course
          </button>
        </Link>

        <Link href={`/${base_create_url}/v`}>
          <button type="button" className="btn btn-lg btn-accent w-full">
            Blog
          </button>
        </Link>
        <Link href={`/${base_create_url}/v`}>
          <button type="button" className="btn btn-lg btn-accent w-full">
            Thread
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
