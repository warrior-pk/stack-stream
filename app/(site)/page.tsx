import Link from "next/link";
import VideoCard from "@/components/video/VideoCard";
export default function Home() {
  return (
    <div className="grid grid-cols-main gap-2 gap-y-10">
      {Array.from({ length: 10 }).map((_, index) => (
        <VideoCard key={index} />
      ))}
    </div>
  );
}
