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
import NoData from "../../commons/NoData";
import Banner from "../../commons/Banner";
const Blogs = () => {
  const limit = 1;
  const [currentPageUrl, setCurrentPageUrl] = useState(null);

  useEffect(() => {
    setCurrentPageUrl(
      `${process.env.REACT_APP_API_URL}/${API_PATHS.GET_BLOGS}?limit=${limit}`
    );
  }, []);

  const {
    data: blogs,
    loading: loading,
    error: error,
  } = useFetch({
    url: `${currentPageUrl}&limit=${limit}`,
  });

  const next = () => {
    setCurrentPageUrl(
      `${process.env.REACT_APP_API_URL}/${API_PATHS.GET_BLOGS}?page=${
        blogs?.current_page + 1
      }&limit=${limit}`
    );
  };

  const prev = () => {
    setCurrentPageUrl(
      `${process.env.REACT_APP_API_URL}/${API_PATHS.GET_BLOGS}?page=${
        blogs?.current_page - 1
      }&limit=${limit}`
    );
  };

  const isRenderable = (data) => {
    return data?.length > 0 ? true : false;
  };

  return (
    <div>
      <Banner title="Our Blogs" breadCrumbs={["Home", "Blogs"]} />

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
          {isRenderable(blogs?.data) ? (
            <div className="flex flex-col items-center justify-center ">
              <Pagination
                blogs={blogs}
                next={next}
                prev={prev}
                loading={loading}
              />
            </div>
          ) : (
            <NoData />
          )}
        </Container>
      </Section>
    </div>
  );
};

export default Blogs;
