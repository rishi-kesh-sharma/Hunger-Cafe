import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "react-headless-accordion";
import Section from "../../../commons/Section";
import Container from "../../../commons/Container";
import SectionTitle from "../../../commons/SectionTitle";
import FaqImage from "../../../../images/faq.jpg";

const FAQCards = ({ faqs }) => {
  return (
    <Section>
      <Container className="grid grid-cols-2 gap-[3rem] items-center ">
        <div className="col-span-2 md:col-span-1">
          <SectionTitle>FAQs</SectionTitle>
          <Accordion
            className=" border border-gray-400 rounded-lg"
            transition={{
              duration: "300ms",
              timingFunction: "cubic-bezier(0, 0, 0.2, 1)",
            }}>
            {faqs?.map((item, index) => (
              <AccordionItem key={index}>
                {({ open }) => (
                  <>
                    <AccordionHeader
                      key={index}
                      className="w-full flex justify-between items-start text-primary border-b px-2 py-3  text-start ">
                      <span className="text-orange-800 font-[400]  text-sm">
                        {item?.question}
                      </span>
                      <div>
                        <svg
                          class={`w-6 h-6 md:w-6 ${!open ? "" : "rotate-90"}`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </AccordionHeader>

                    <AccordionBody>
                      <div className="py-3 md:py-5 px-2  text-gray-500  text-sm">
                        {item?.answer}
                      </div>
                    </AccordionBody>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="hidden md:block">
          <img alt="image" src={FaqImage} />
        </div>
      </Container>
    </Section>
  );
};

export default FAQCards;
