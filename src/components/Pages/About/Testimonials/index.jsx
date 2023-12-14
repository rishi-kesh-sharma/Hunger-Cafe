import React from "react";
import SectionTitle from "../../../commons/SectionTitle";
import SectionSubtitle from "../../../commons/SectionSubtitle";
import { motion } from "framer-motion";
import { smallAnimation } from "../../../../constants/animations";
import SectionDescription from "../../../commons/SectionDescription";
import Slider from "./Slider";
import Section from "../../../commons/Section";
import Container from "../../../commons/Container";

const Testimonials = () => {
  return (
    <Section className="flex flex-col gap-[2rem] md:mt-[4rem] ">
      <SectionTitle className="md:mb-0">Our Testimonials</SectionTitle>
      {/* <SectionSubtitle
          $as={motion.h1}
          {...smallAnimation}
          className="text-center text-[2rem]  md:text-[2rem] font-semibold">
          Loved By Our Clients
        </SectionSubtitle> */}
      {/* <SectionDescription
          $as={motion.p}
          cls
          {...smallAnimation}
          className="text-center text-sm ">
          We are thrilled to see that our efforts have not gone unnoticed. We
          are proud to have received numerous glowing testimonials from our
          satisfied clients.
        </SectionDescription> */}
      <Slider />
      {/* TESTIMONIALS SLIDER */}
    </Section>
  );
};

export default Testimonials;
