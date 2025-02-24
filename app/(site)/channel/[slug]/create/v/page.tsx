import VideoUploadForm from "@/components/video/VideoUploadForm";
async function page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  return (
    <main>
      <h1 className="line-through">{slug}</h1>
      <VideoUploadForm />
    </main>
  );
}

export default page;
