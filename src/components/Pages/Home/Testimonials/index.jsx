import React from "react";

import Section from "../../../commons/Section";
import Container from "../../../commons/Container";
import SectionTitle from "../../../commons/SectionTitle";
import Slider from "./Slider";
// import { testimonials } from "../../../../data";

const Testimonials = ({ testimonials }) => {
  return (
    <Section className="flex flex-col gap-[2rem]">
      <Container>
        <SectionTitle className="">Our Testimonials</SectionTitle>
        <Slider testimonials={testimonials} />
      </Container>
    </Section>
  );
};

export default Testimonials;
