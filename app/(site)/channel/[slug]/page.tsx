import React from "react";

const page = () => {
  return (
    <div>
      <h1>Add to channel</h1>
      <div className="grid grid-cols-main gap-4">
        <div className="btn btn-lg btn-accent">Videos</div>
        <div className="btn btn-lg btn-accent">Course</div>
        <div className="btn btn-lg btn-accent">Blog</div>
        <div className="btn btn-lg btn-accent">Thread</div>
      </div>
    </div>
  );
};

export default page;
