import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Section from "../../commons/Section";
import Container from "../../commons/Container";
import Form from "./Form";
import Banner from "../../commons/Banner";
const Contact = () => {
  return (
    <div>
      <Banner title="Contact Us" breadCrumbs={["Home", "Contact"]} />
      <Section className="pb-[2rem]">
        <Container>
          <h1 className="text-2xl my-4 font-bold">Contact Us</h1>
          <Form />
        </Container>
      </Section>
    </div>
  );
};

export default Contact;
