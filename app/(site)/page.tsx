import Link from "next/link";
export default function Home() {
  return (
    <div className="grid grid-cols-main gap-2">
      <div className="flex aspect-video items-center justify-center rounded-lg bg-primary p-2 text-3xl">
        <Link href={"/watch/v/1"}>PLAY</Link>
      </div>
      <div className="aspect-video rounded-lg bg-secondary"></div>
      <div className="aspect-video rounded-lg bg-secondary"></div>
      <div className="aspect-video rounded-lg bg-secondary"></div>
      <div className="aspect-video rounded-lg bg-secondary"></div>
      <div className="aspect-video rounded-lg bg-secondary"></div>
    </div>
  );
}
