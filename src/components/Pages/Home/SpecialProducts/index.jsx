import React from "react";
import Section from "../../../commons/Section";
import Container from "../../../commons/Container";
import SectionTitle from "../../../commons/SectionTitle";
import Slider from "./Slider";
const SpecialProducts = ({ products }) => {
  return (
    <Section className="">
      <Container className="">
        <SectionTitle className="mb-0"> Our Specials</SectionTitle>
        <Slider products={products} />
      </Container>
    </Section>
  );
};

export default SpecialProducts;
