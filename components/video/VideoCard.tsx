import Link from "next/link";
const VideoCard = ({
  videoId = "",
  thumbnail = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  title = "Video Title is so long it cannot fit in the line Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta vero hic reprehenderit aspernatur! Corporis est consequatur molestiae porro animi beatae? Consequatur, nisi perferendis illum fugiat repudiandae esse impedit expedita quaerat deleniti. Iusto temporibus nemo, libero voluptate, voluptatibus nesciunt error corporis rem ut nam consectetur quae praesentium perferendis sunt numquam! Voluptatum optio aut nesciunt. ",
}) => {
  return (
    <div className="card shadow-sm">
      <Link href={`/watch/v/${videoId}`}>
        <figure className="aspect-video rounded-md">
          <img src={thumbnail} alt={title} />
        </figure>
      </Link>
      <div className="card-body p-2 py-4">
        <h2 className="card-title line-clamp-2">{title}</h2>
      </div>
    </div>
  );
};

export default VideoCard;
