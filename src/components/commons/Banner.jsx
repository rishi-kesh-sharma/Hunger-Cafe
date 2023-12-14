import React from "react";
import Section from "./Section";
import Container from "./Container";
import BannerImage from "../../images/banner.jpg";

const Banner = ({ title, breadCrumbs }) => {
  return (
    <Section
      className={`pt-[3rem]  h-[400px] relative after:absolute after:top-0 after:left-0 after:h-full after:w-full after:z-10  after:bg-no-repeat after:opacity-[0.4]  bg-center  banner mt-0 after:bg-black bg-cover lg:bg-contain   `}>
      <Container className="flex items-center justify-center flex-col h-full gap-[2rem]">
        <h1 className="text-gray-100 text-[2rem] font-semibold z-50">
          {title}
        </h1>
        <ul className="flex gap-[1rem] z-50">
          {breadCrumbs?.map((breadCrumb, index) => {
            return (
              <li key={index} className="text-gray-50">
                {breadCrumb}
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
};

export default Banner;
