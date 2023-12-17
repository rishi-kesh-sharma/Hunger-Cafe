"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./Card";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import Loading from "../../commons/Loading";
import Spinner from "../../commons/Spinner";

export default function BlogPagination({ blogs, next, prev, loading }) {
  if (loading) {
    return (
      <div className="min-h-[370px] flex items-center justify-center">
        <Spinner />
      </div>
    );
  }
  return (
    <div>
      <div className="gap-[2rem] justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4    grid items-center  sm:grid-cols-2 md:grid-cols:3 mt-[2rem] ">
        {blogs?.data?.map((blog, index) => {
          return (
            // BLOG CARD
            <BlogCard key={blog?.id || index} blog={blog} aspect="square" />
          );
        })}
      </div>
      <CircularPagination blogs={blogs} next={next} prev={prev} />
    </div>
  );
}

export function CircularPagination({ blogs, next, prev }) {
  return (
    <div className="flex items-center justify-center gap-4 w-full m-auto mt-[2rem]">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={!blogs?.prev_page_url}>
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={!blogs?.next_page_url}>
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}
