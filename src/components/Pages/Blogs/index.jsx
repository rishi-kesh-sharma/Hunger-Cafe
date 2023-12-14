import React from "react";

import Section from "../../commons/Section";
import SectionTitle from "../../commons/SectionTitle";
import SectionSubtitle from "../../commons/SectionSubtitle";
import SectionDescription from "../../commons/SectionDescription";
import Container from "../../commons/Container";
import Pagination from "./Pagination";
import useFetch from "../../../hooks/useFetch";
import { API_PATHS } from "../../../utils/constants";
const Blogs = () => {
  const {
    data: blogs,
    loading: loading5,
    error: error5,
  } = useFetch({ path: API_PATHS.GET_BLOGS });
  return (
    <Section className="flex flex-col gap-[2rem] md:gap-[2rem] py-[2rem] bg-gray-50  mt-0 mb-0 ">
      <Container>
        <SectionTitle className=" text-sm md:text-[1rem] text-center text-secondary font-semibold   rounded-md bg-primary max-w-[100px] py-[0.4rem] ">
          {" "}
          Our Blogs
        </SectionTitle>
        <SectionSubtitle className="text-start text-[1.6rem] md:text-[2rem] ">
          Read Our Blogs
        </SectionSubtitle>
        <SectionDescription className="text-start ml-0">
          Insights and Ideas: Explore Our Latest Blogs.
        </SectionDescription>
        <div className="flex flex-col items-start justify-start">
          {<Pagination blogs={blogs} itemsPerPage={3} />}
        </div>
      </Container>
    </Section>
  );
};

export default Blogs;
