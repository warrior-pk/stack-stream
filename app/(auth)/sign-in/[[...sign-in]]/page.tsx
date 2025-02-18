import React from "react";
import LoginCard from "@/components/common/LoginCard";
const page = () => {
  return (
    <div className="hero flex-1">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <LoginCard />
      </div>
    </div>
  );
};

export default page;
