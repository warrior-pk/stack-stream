import VideoUploadForm from "@/components/video/VideoUploadForm";
async function page({ params }: { params: Promise<{ channel_id: string }> }) {
  const channel_id = (await params).channel_id;
  return <VideoUploadForm />;
}

export default page;
