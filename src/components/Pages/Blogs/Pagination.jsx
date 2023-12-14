"use client";
import React, { useEffect, useState } from "react";
import BlogCard from "./Card";

export default function BlogPagination({ blogs }) {
  return (
    <div className="gap-[2rem] justify-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4    grid items-center  sm:grid-cols-2 md:grid-cols:3 mt-[2rem] ">
      {blogs?.map((blog, index) => {
        return (
          // BLOG CARD
          <BlogCard key={blog?.id || index} blog={blog} aspect="square" />
        );
      })}
    </div>
  );
}
