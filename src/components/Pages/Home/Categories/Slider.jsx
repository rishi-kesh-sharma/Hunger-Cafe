import React, { useEffect, useState } from "react";
import TestimonialsCard from "./Category";
import CustomSlider from "../../../commons/CustomSlider";
import Category from "./Category";

const Slider = ({ categories }) => {
  const settings = {
    dots: true,
    isFinite: false,
    nextArrow: false,
    prevArrow: false,
    className: "center",
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    autoplay: true,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 6,
          // infinite: true,
          dots: true,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 5,
          // infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
          // autoPlay: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          // infinite: true,
          dots: false,

          // autoPlay: true,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          // infinite: true,
          dots: false,

          // autoPlay: true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          // infinite: true,
          dots: false,
          // autoPlay: true,
        },
      },
    ],
  };
  return (
    <CustomSlider settings={settings}>
      {/* ALL TESTIMONIALS */}
      {categories?.map((category, index) => {
        return (
          <div key={index} className="">
            <Category category={category} key={index} />
          </div>
        );
      })}
    </CustomSlider>
  );
};

export default Slider;
