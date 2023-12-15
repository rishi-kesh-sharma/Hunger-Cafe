import React, { useEffect, useState } from "react";

import Section from "../../../commons/Section";
import Card from "./Card";
import CustomSlider, {
  SampleNextArrow,
  SamplePrevArrow,
} from "../../../commons/CustomSlider";

const SpecialProductSlider = ({ products }) => {
  const settings = {
    dots: true,
    isFinite: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    className: "center",
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    autoplay: false,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          // infinite: true,
          dots: true,
          speed: 400,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          // infinite: true,
          speed: 400,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          speed: 400,
          // infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          // infinite: true,
          dots: false,
          autoplay: true,
          prevArrow: false,
          nextArrow: false,
          autoplaySpeed: 4000,
          speed: 4000,
        },
      },
    ],
  };
  return (
    <Section className="mt-0">
      <CustomSlider settings={settings}>
        {/* ALL blogS */}
        {products?.map((product, index) => {
          return (
            <div key={index} className="p-5 ">
              <Card product={product} />
            </div>
          );
        })}
      </CustomSlider>
    </Section>
  );
};

export default SpecialProductSlider;
