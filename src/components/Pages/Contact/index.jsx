import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import Section from "../../commons/Section";
import Container from "../../commons/Container";
import Form from "./Form";
import Info from "./Info";
import Map from "./Map";
import Banner from "../../commons/Banner";
const Contact = () => {
  return (
    <div>
      <Banner title="Contact Us" breadCrumbs={["Home", "Contact"]} />
      <Section className="pb-[2rem]">
        <Container>
          <h1 className="text-2xl my-4 font-bold">Contact Us</h1>
          <div className="grid lg:grid-cols-2 w-full  gap-[2rem]">
            <div className="lg:col-span-2 w-full">
              <Info />
            </div>
            <div className="mt-[1rem] col-span-1 h-full">
              <Map />
            </div>
            <div className="col-span-1">
              <Form />
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};

export default Contact;
