"use client";

// import React, { useState } from "react";
// import axios from "axios";

function VideoUploadForm() {
  // const [formData, setFormData] = useState({
  //   title: "",
  //   description: "",
  //   video: null as File | null,
  //   thumbnail: null as File | null,
  // });

  // const handleInputChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  // ) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, files } = e.target;
  //   if (files && files.length > 0) {
  //     setFormData((prev) => ({ ...prev, [name]: files[0] }));
  //   }
  // };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (!formData.video) {
  //     alert("Please upload a video file!");
  //     return;
  //   }

  //   const data = new FormData(); // Ensure this is used
  //   data.append("title", formData.title);
  //   data.append("description", formData.description);
  //   data.append("video", formData.video);
  //   if (formData.thumbnail) {
  //     data.append("thumbnail", formData.thumbnail);
  //   }

  //   console.log("Form submitted:", Array.from(data.entries())); // Log FormData contents for debugging

  //   try {
  //     const res = await axios.post(
  //       "http://localhost:8081/api/v1/upload",
  //       data,
  //       {
  //         headers: { "Content-Type": "multipart/form-data" }, // Correct header for FormData
  //       },
  //     );

  //     if (res.status !== 200) {
  //       throw new Error(`Failed to upload: ${res.statusText}`);
  //     }

  //     console.log("Upload successful:", res.data);
  //   } catch (err) {
  //     console.error("Error uploading files:", err);
  //   }
  // };

  return <></>;
}

export default VideoUploadForm;
