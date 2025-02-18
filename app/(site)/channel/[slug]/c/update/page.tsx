"use client"
import React from "react";

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug;
  return<>
   <div>{slug} channel update page
  </div>
  <button className="btn" onClick={() => {
    fetch(`/api/health`, )
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
      });
  }}>
    Ping Server
  </button>
  </>
}

export default page;
