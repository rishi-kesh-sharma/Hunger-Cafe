import React from "react";
import NoDataImage from "../images/nodata.png";

const NoData = ({ text }) => {
  return (
    <div className="flex flex-col items-center gap-5 justify-center mt-[1.5rem]">
      <div className="w-full rounded-full flex items-center justify-center bg-center">
        <figure className="w-[200px] h-[200px] m-auto">
          <img
            src={NoData}
            alt="no_data"
            className="object-cover h-full w-full rounded-lg"
            objectFit="cover"
            height={500}
            width={500}
          />
        </figure>
      </div>
      <div className="text-center text-lg font-bold text-red-800">{text}</div>
    </div>
  );
};

export default NoData;
