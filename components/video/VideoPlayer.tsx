"use client";
import type React from "react";
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

function VideoPlayer(): React.ReactNode {
  return (
    <>
      <div className="video-wrapper relative flex aspect-video w-full justify-center">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
          width="100%"
          height="100%"
          controls={true}
          playing={false}
          fallback={
            <div className="flex h-full w-full items-center justify-center">
              Loading...
            </div>
          }
        />
      </div>
      <div className="video-wrapper relative flex aspect-video w-full justify-center">
        <ReactPlayer
          url="https://res.cloudinary.com/diu4fk2cp/video/upload/f_auto:video,q_auto/v1/samples/g4fymfuelkfyb3mo0fya"
          width="100%"
          height="100%"
          controls={true}
          playing={false}
          fallback={
            <div className="flex h-full w-full items-center justify-center">
              Loading...
            </div>
          }
        />
      </div>
    </>
  );
}

export default VideoPlayer;
