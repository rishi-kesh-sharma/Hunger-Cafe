import React, { useEffect, useState } from "react";

import Section from "../../commons/Section";
import SectionTitle from "../../commons/SectionTitle";
import SectionSubtitle from "../../commons/SectionSubtitle";
import SectionDescription from "../../commons/SectionDescription";
import Container from "../../commons/Container";
import Pagination from "./Pagination";
import useFetch from "../../../hooks/useFetch";
import { API_PATHS } from "../../../utils/constants";
import Loading from "../../commons/Loading";
const Blogs = () => {
  const limit = 12;

  const next = () => {
    setCurrentPageUrl(blogs?.next_page_url);
  };

  const prev = () => {
    setCurrentPageUrl(blogs?.last_page_url);
  };

  const [currentPageUrl, setCurrentPageUrl] = useState(null);
  useEffect(() => {
    setCurrentPageUrl(`${API_PATHS.GET_BLOGS}?limit=${limit}`);
  }, [currentPageUrl]);
  const {
    data: blogs,
    loading: loading,
    error: error,
  } = useFetch({ path: currentPageUrl });

  if (loading) {
    return <Loading />;
  }
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
          {
            <Pagination
              blogs={blogs}
              itemsPerPage={3}
              next={next}
              prev={prev}
            />
          }
        </div>
      </Container>
    </Section>
  );
};

export default Blogs;
