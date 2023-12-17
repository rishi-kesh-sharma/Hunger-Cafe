import React from "react";
import Section from "../../../commons/Section";
import Container from "../../../commons/Container";
import SectionTitle from "../../../commons/SectionTitle";
import ContactForm from "./Form";
import Info from "./Info";
import Map from "./Map";
const Contact = () => {
  return (
    <Section className="md:pb-[1rem] mt-[4rem] pb-[2rem] ">
      <Container>
        <SectionTitle className="md:mb-6">Contact Us</SectionTitle>
        <div className="grid lg:grid-cols-2 w-full  gap-[2rem]">
          <div className="lg:col-span-2 w-full">
            <Info />
          </div>
          <div className="mt-[1rem] col-span-1 ">
            <Map />
          </div>
          <div className="col-span-1">
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
