import React from "react";

const CustomImage = (props) => {
  const { defaultImage, src, ...rest } = props;

  console.log(src, "source");
  console.log(defaultImage, "default");
  console.log(process.env.STATIC_URL, "static url");

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
