import React from "react";
import LoadingImage from "../../images/loader2.gif";
const Loading = () => {
  return (
    <div className="h-screen w-screen bg-black/90">
      <img src={LoadingImage} className="h-full w-full object-contain " />
    </div>
  );
};

export default Loading;
