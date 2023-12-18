import moment from "moment";
import React, { useEffect, useState } from "react";

import { MdNoPhotography } from "react-icons/md";
import CustomImage from "../../commons/CustomImage.jsx";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Card } from "@material-tailwind/react";
import Container from "../../commons/Container.jsx";
import { API_PATHS } from "../../../utils/constants.js";
// import cheerio from "cheerio";
import useFetch from "../../../hooks/useFetch.js";
import CardImage from "../../commons/CardImage.jsx";
import CardContent from "../../commons/CardContent.jsx";
import cheerio from "cheerio";
import Loading from "../../commons/Loading.jsx";
import Spinner from "../../commons/Spinner.jsx";

const BlogDetail = () => {
  const { slug } = useParams();
  const {
    data: blog,
    loading: loading1,
    error: error1,
  } = useFetch({ path: API_PATHS.GET_BLOG_DETAIL(slug) });
  const {
    data: blogs,
    loading: loading2,
    error: error2,
  } = useFetch({ path: API_PATHS.GET_RELATED_BLOGS(blog?.category) });
  const description = { __html: blog?.description };
  const loading = loading1 || loading2;
  if (loading2) {
    return <Loading />;
  }
  return (
    <div className="">
      <main>
        <Container className=" flex gap-3 lg:pt-16 lg:pb-[2rem] relative flex-col lg:flex-row ">
          {loading1 ? (
            <div className="lg:w-[70%] bg-white mobile:w-[100%] flex items-center">
              <Spinner />
            </div>
          ) : (
            <div className="lg:w-[70%] bg-white mobile:w-[100%]">
              <article className=" w-full format format-sm sm:format-base lg:format-lg format-blue">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900">
                  <time
                    className="text-gray-600 text-xs"
                    pubdate
                    datetime="2022-02-08"
                    title="February 8th, 2022">
                    {moment(blog?.created_at || blog?.updated_at).fromNow()}
                  </time>
                </p>
                <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
                  {blog?.name}
                </h1>
                <CustomImage src={blog?.photo} className="rounded-lg" />

                <section className="text-gray-500  my-6">
                  <p>
                    <div dangerouslySetInnerHTML={description} />
                  </p>
                </section>

                <section className="flex flex-col gap-3">
                  <div className="flex gap-3 ">
                    {blog?.tags?.map((item) => {
                      return (
                        <p
                          key={item}
                          className="p-2 bg-primary/40 rounded-md text-gray-800">
                          {item}
                        </p>
                      );
                    })}
                  </div>
                </section>
              </article>
            </div>
          )}
          <div
            aria-label="Related articles"
            className="lg:px-5 py-5  bg-white sticky top-0 right-0 h-full">
            <BlogSection blogs={blogs} />
          </div>
        </Container>
      </main>
      <br />
    </div>
  );
};

const BlogSection = ({ blogs }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">
          Related articles
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-3  lg:flex lg:flex-col gap-5  ">
          {blogs?.data?.slice(0, 3)?.map((blog, index) => {
            console.log(blog?.slug, "slug");
            return (
              <div
                onClick={() => {
                  navigate(`/blog/${blog?.slug}`);
                }}
                key={blog?.slug}>
                <Card className="cursor-pointer bg-white shadow-lg rounded-lg  p-5  w-full min-h-[210px] gap-[1rem]">
                  <div className="w-full  flex items-center justify-between ">
                    <CardImage className=" rounded-lg w-[100px] md:w-[70px] lg:w-[100px]  h-[60px] lg:h-[80px] ">
                      {blog?.photo ? (
                        <>
                          <CustomImage
                            alt="image"
                            src={blog?.photo}
                            className="transition-all rounded-lg h-full "
                            width={1000}
                            height={1000}
                          />
                        </>
                      ) : (
                        <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                          <MdNoPhotography />
                        </span>
                      )}
                    </CardImage>
                    <p className="text-primary text-sm">View Details</p>
                  </div>
                  <CardContent className="gap-[0.5rem]">
                    <h2 className="text-[1rem]">
                      <span className="text-gray-700 text-sm">
                        {blog?.name?.length < 70
                          ? blog?.name
                          : `${blog?.name?.slice(0, 70)} ...`}
                      </span>
                    </h2>

                    <div className="flex  justify-between items-center space-x-3 text-gray-500 dark:text-gray-400">
                      <span className="text-xs text-gray-300 dark:text-gray-600">
                        &bull;
                      </span>
                      <time
                        className="text-xs text-gray-500"
                        dateTime={blog?.created_at}>
                        {moment(blog?.created_at || blog?.updated_at).fromNow()}
                      </time>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
