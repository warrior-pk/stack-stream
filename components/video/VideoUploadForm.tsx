"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const VideoUploadForm = () => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [currentUploadingVideoProgress, setCurrentUploadingVideoProgress] =
    useState(0);
  const [totalVideosToUpload, setTotalVideosToUpload] = useState(1);
  const [currentUploadingVideo, setCurrentUploadingVideo] = useState(1);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm();

  interface FormData {
    videos: File[];
  }

  const handleUpload = async (data: FormData) => {
    const { videos } = data;
    const videoCount = videos.length;
    setTotalVideosToUpload(videoCount);
    let currentVideoIndex = 0;
    for (const video of videos) {
      // INITIALIZING UPLOAD -----------------------------------------
      const fileExtension = video.name.split(".").pop()?.toLowerCase() ?? "";
      const initializeFormData = new FormData();
      initializeFormData.append("filename", video.name);
      initializeFormData.append("contentType", "video");
      initializeFormData.append("fileExtension", fileExtension);

      const initializeRes = await axios.post(
        `${API_URL}/api/v1/upload/v/initialize`,
        initializeFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(initializeRes.data);
      const uploadId = initializeRes.data.data.uploadId;
      const videoKey = initializeRes.data.data.videoKey;

      // UPLOADING CHUNKS --------------------------------------------
      const chunkSize = 5 * 1024 * 1024; // 1MB
      const totalChunks = Math.ceil(video.size / chunkSize);
      let start = 0;
      let completedChunks = 0;
      const uploadPromises = [];
      for (let chunkIndex = 0; chunkIndex < totalChunks; chunkIndex++) {
        const end = Math.min(start + chunkSize, video.size);
        const chunk = video.slice(start, end);
        start = end;
        const chunkFormData = new FormData();

        chunkFormData.append("chunk", chunk);
        chunkFormData.append("filename", videoKey);
        chunkFormData.append("chunkNumber", (1 + chunkIndex).toString());
        chunkFormData.append("totalChunks", totalChunks.toString());
        chunkFormData.append("uploadId", uploadId);

        console.log(chunkFormData);

        const uploadPromise = axios
          .post(`${API_URL}/api/v1/upload/v/chunk`, chunkFormData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          })
          .then(() => {
            completedChunks++;
            const progress = Math.round((completedChunks / totalChunks) * 100);
            setCurrentUploadingVideoProgress(progress);
            console.log(
              `Video ${currentVideoIndex + 1}/${videoCount} - Chunk ${
                chunkIndex + 1
              } uploaded. Progress: ${progress}%`
            );
          });

        uploadPromises.push(uploadPromise);
      }

      await Promise.all(uploadPromises);
      console.log(`Video ${currentVideoIndex + 1}/${videoCount} uploaded`);
      setCurrentUploadingVideo(currentVideoIndex + 1);
      setCurrentUploadingVideoProgress(0);
      currentVideoIndex++;

      // COMPLETING UPLOAD -------------------------------------------
      const completeFormData = new FormData();
      completeFormData.append("filename", videoKey);
      completeFormData.append("uploadId", uploadId);
      completeFormData.append("totalChunks", totalChunks.toString());

      const completeRes = await axios.post(
        `${API_URL}/api/v1/upload/v/complete`,
        completeFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(completeRes.data);
    }
  };
  return (
    <div>
      <h1 className="text-2xl font-semibold">Upload Video</h1>
      <form onSubmit={handleSubmit(handleUpload)}>
        <div className="flex items-center justify-center w-full flex-col">
          <label
            htmlFor="video-dropzone"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-base-200 border-base-300 hover:bg-base-100 hover:border-base-200"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm p-1">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs p-1">(MAX. 1920x1080 and MIN. 640x480)</p>
            </div>
            <input
              id="video-dropzone"
              type="file"
              className="hidden"
              multiple
              {...register("videos", {
                required: "No file selected",
                validate: (value) =>
                  value.length === 0 ||
                  value[0].type.startsWith("video/mp4") ||
                  "*only mp4 video files are allowed",
              })}
            />
          </label>
          {errors.videos && (
            <span className="text-error">{errors.videos.message || ""}</span>
          )}
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Uploading..." : "Upload"}
        </button>
        {isSubmitting && (
          <>
            Uploading video {currentUploadingVideo}/{totalVideosToUpload}
            <progress
              className="progress progress-success w-56"
              value={currentUploadingVideoProgress}
              max="100"
            />
            &nbsp;
            {currentUploadingVideoProgress}%
          </>
        )}
      </form>
    </div>
  );
};

export default VideoUploadForm;
