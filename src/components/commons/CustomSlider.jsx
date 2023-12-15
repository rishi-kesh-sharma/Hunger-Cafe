import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Section from "./Section";
import Container from "./Container";

export function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="next absolute top-[45%]  left-[-12px] md:left-[-20px] lg:-left-[60px] bg-primary w-7 h-7 lg:w-12 lg:h-12  rounded-full flex justify-center items-center text-white "
      onClick={onClick}>
      <BsArrowLeft />
    </button>
  );
}

export function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      className="next absolute top-[45%] right-[-12px] md:right-[-20px]  lg:-right-[60px]  bg-primary h-7 w-7 lg:w-12 lg:h-12  rounded-full flex justify-center items-center text-white"
      onClick={onClick}>
      <BsArrowRight />
    </button>
  );
}

const CustomSlider = ({ children, settings }) => {
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
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
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
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    ...settings,
  };
  return (
    <Section className="mt-0 relative mx-0 ">
      <Container className="w-full 2xl:w-[93%] md:w-[90%] mx-0  ">
        <Slider {...settings} className="">
          {children}
        </Slider>
      </Container>
    </Section>
  );
};

export default CustomSlider;
