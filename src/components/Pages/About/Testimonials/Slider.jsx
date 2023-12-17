import React, { useEffect, useState } from "react";
import TestimonialsCard from "./Card";

import CustomSlider, {
  SampleNextArrow,
  SamplePrevArrow,
} from "../../../commons/CustomSlider";
// import { testimonials } from "../../../../data";
import Section from "../../../commons/Section";
import Container from "../../../commons/Container";

const TestimonialsSlider = ({ testimonials }) => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          // infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          prevArrow: false,
          nextArrow: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <CustomSlider settings={settings}>
      {/* ALL TESTIMONIALS */}
      {testimonials?.map((testimonial, index) => {
        return (
          <div key={index} className="md:p-5">
            <TestimonialsCard testimonial={testimonial} key={index} />
          </div>
        );
      })}
    </CustomSlider>
  );
};

export default TestimonialsSlider;
