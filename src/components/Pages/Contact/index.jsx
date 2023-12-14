import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Section from "../../commons/Section";
import Container from "../../commons/Container";
import Form from "./Form";
const Contact = () => {
  return (
    <Section className="pb-[2rem]">
      <Container>
        <h1 className="text-2xl my-4 font-bold">Contact Us</h1>
        <Form />
      </Container>
    </Section>
  );
};

export default Contact;
