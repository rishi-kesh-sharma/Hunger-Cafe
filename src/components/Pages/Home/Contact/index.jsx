import React from "react";
import Section from "../../../commons/Section";
import Container from "../../../commons/Container";
import SectionTitle from "../../../commons/SectionTitle";
import ContactForm from "./Form";
const Contact = () => {
  return (
    <Section className="md:pb-[1rem] mt-[4rem] pb-[2rem] ">
      <Container>
        <SectionTitle className="md:mb-6">Contact Us</SectionTitle>
        <ContactForm />
      </Container>
    </Section>
  );
};

export default Contact;
