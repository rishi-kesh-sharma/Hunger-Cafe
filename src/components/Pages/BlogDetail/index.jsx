import moment from "moment";
import React, { useEffect, useState } from "react";

import { MdNoPhotography } from "react-icons/md";
import CustomImage from "../../commons/CustomImage.jsx";
import { Link, useParams } from "react-router-dom";
import { Card } from "@material-tailwind/react";
import Container from "../../commons/Container.jsx";
import { API_PATHS } from "../../../utils/constants.js";
// import cheerio from "cheerio";
import useFetch from "../../../hooks/useFetch.js";
import CardImage from "../../commons/CardImage.jsx";
import CardContent from "../../commons/CardContent.jsx";
import cheerio from "cheerio";
import Loading from "../../commons/Loading.jsx";

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

  const text = blog?.description && cheerio?.load(blog?.description).text();

  const loading = loading1 || loading2;

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="mb-[3rem]">
      <main>
        <Container className=" flex gap-3 lg:pt-16 lg:pb-24 relative flex-col lg:flex-row ">
          <div className="lg:w-[70%] bg-white mobile:w-[100%]">
            <article className="p-5 w-full format format-sm sm:format-base lg:format-lg format-blue">
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
              <CustomImage src={blog?.photo} />

              <section className="text-gray-500 text-sm my-6">
                <p>{text}</p>
              </section>

              <section className="flex flex-col gap-3">
                {/* <div className="flex ">
                  {blog?.categories?.map((item, index) => {
                    return (
                      <p
                        key={index}
                        className="p-2 bg-green-100 rounded-sm text-gray-600">
                        {item}
                      </p>
                    );
                  })}
                </div> */}
                <div className="flex gap-3 ">
                  {blog?.tags?.map((item) => {
                    return (
                      <p
                        key={item}
                        className="p-2 bg-yellow-200 rounded-sm text-gray-600">
                        {item}
                      </p>
                    );
                  })}
                </div>
                {/* <div className="flex gap-3 ">
                  {blog?.keywords?.map((item) => {
                    return (
                      <p
                        key={item}
                        className="p-2 bg-red-200 rounded-sm text-gray-600">
                        {item}
                      </p>
                    );
                  })}
                </div>
                <div className="flex  gap-3">
                  {blog?.meta_tag?.map((item) => {
                    return (
                      <p
                        key={item}
                        className="p-2 bg-blue-200 rounded-sm text-gray-600">
                        {item}
                      </p>
                    );
                  })}
                </div> */}
              </section>
            </article>
          </div>
          <div
            aria-label="Related articles"
            className="px-5 py-5  bg-white sticky top-0 right-0 h-full">
            <BlogSection blogs={blogs} />
          </div>
        </Container>
      </main>
      <br />
      <br />
      <br />
    </div>
  );
};

const BlogSection = ({ blogs }) => {
  console.log(blogs, "blogs from section");
  return (
    <>
      <div className="">
        <h2 className="mb-8 text-2xl font-bold text-gray-900">
          Related articles
        </h2>
        <div className=" grid grid-cols-1 md:grid-cols-3  lg:flex lg:flex-col gap-5  ">
          {blogs?.data?.slice(0, 3)?.map((blog, index) => {
            return (
              <Link href={`/blog/${blog?.slug}`} key={index}>
                <Card className="cursor-pointer bg-white shadow-lg rounded-lg gap-1 p-5 w-[100%]">
                  <CardImage className=" rounded-lg flex justify-between items-center max-w-[130px] gap-2 ">
                    <Link href={`/blog/${blog?.slug}`}>
                      {blog?.photo ? (
                        <>
                          <CustomImage
                            alt="image"
                            src={blog?.photo}
                            className="transition-all rounded-lg w-[100px] h-[50px]"
                            width={1000}
                            height={1000}
                          />
                        </>
                      ) : (
                        <span className="absolute w-16 h-16 text-gray-200 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                          <MdNoPhotography />
                        </span>
                      )}
                    </Link>
                    <p className="text-blue-500 text-sm">View Details</p>
                  </CardImage>
                  <CardContent className="gap-[0.5rem]">
                    {/* <div className="flex gap-3">
                      {blog?.categories?.length &&
                        blog?.categories?.slice(0).map((category, index) => (
                          <Link href={`blogs/${blog?.id}`} key={index}>
                            <span
                              className={`inline-block mt-5 text-xs font-medium  uppercase py-1 px-2 text-gray-100 rounded-md bg-${
                                category.color
                                  ? `[${category.color}]`
                                  : "green-500"
                              } bg-green-500`}>
                              {category.title}
                            </span>
                          </Link>
                        ))}
                    </div> */}
                    <h2 className="text-[1rem]">
                      <span className="text-gray-700 text-sm">{blog.name}</span>
                    </h2>

                    <div className="hidden">
                      {blog.slug && (
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
                          <Link href={`/blogs/${blog?.name}`}>{blog.slug}</Link>
                        </p>
                      )}
                    </div>

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
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
