import React from "react";
import LoadingImage from "../../images/loading.gif";
const Loading = () => {
  return (
    <div className="h-screen w-screen">
      <img src={LoadingImage} className="h-full w-full" />
    </div>
  );
};

export default Loading;
