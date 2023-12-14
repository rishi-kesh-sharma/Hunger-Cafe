import React from "react";
import Banner from "../../commons/Banner";
import Section from "../../commons/Section";
import Container from "../../commons/Container";
import Testimonials from "./Testimonials";
import Hero from "./Testimonials/Hero";
export default function About() {
  return (
    <div>
      <Banner title="About Us" breadCrumbs={["Home", "About"]} />
      <Section>
        <Container>
          <Hero />
          <Testimonials />
        </Container>
      </Section>
    </div>
  );
}
