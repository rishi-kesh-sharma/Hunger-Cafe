import React from "react";

const CustomImage = (props) => {
  const { defaultImage, src, ...rest } = props;

  return (
    <img
      alt="image"
      // src={src ? `${process.env.STATIC_URL}/${defaultImage}` : defaultImage}
      src={src ? src : defaultImage}
      {...rest}
    />
  );
};

export default CustomImage;
