// import { blogs } from "../../../data";
import { DefaultAuthorImage } from "../../../images/people";
import moment from "moment";
import DefaultBlogImage from "../../../images/blog/blog1.jpg";
import CustomImage from "../../commons/CustomImage";
import { Link } from "react-router-dom";
// import cheerio from "cheerio";
// import { Cheerio } from "cheerio";
import { useEffect, useState } from "react";

export default function BlogCard({ blog }) {
  const [parsedDescription, setParsedDescription] = useState("");
  // useEffect(() => {
  //   const text =
  //     blog?.description && cheerio.load(blog?.description).text()?.length < 70
  //       ? blog?.description && cheerio.load(blog?.description).text()
  //       : `${
  //           blog?.description &&
  //           cheerio.load(blog?.description).text().slice(0, 70)
  //         } ...`;
  //   setParsedDescription(text);
  // }, [blog]);

  return (
    <Link to={`/blog/${blog?.slug}`}>
      <div
        className="bg-white gap-0 items-start hover:scale-105 cursor-pointer w-full 
 max-h-[300px]
        
p-[0.5rem]
 rounded-lg
grid
 shadow-sm
 transition-all
 hover:shadow-md">
        <div className="w-[100%]  rounded-md">
          <Link to={`/blog/${blog?.slug}`}>
            <CustomImage
              alt="image"
              className="w-full object-cover h-[150px] rounded-lg"
              defaultImage={DefaultBlogImage}
              src={blog?.photo}
              height={1000}
              width={1000}
            />
          </Link>
        </div>
        <div>
          <h2 className="text-gray-600 text-sm text-start font-semibold tracking-normal text-brand-primary mt-[1rem]">
            <Link to={`/blog/${blog.slug}`}>
              <span
                className=" text-gray-600 bg-gradient-to-r from-orange-200 to-orange-100 dark:from-purple-800 dark:to-purple-900
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
                {blog?.name?.length < 150
                  ? blog?.name
                  : `${blog?.name?.slice(0, 70)} ...`}
              </span>
            </Link>
          </h2>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 line-clamp-3">
            {parsedDescription}
            {/* {blog?.description} */}
            {/* {blog.text} */}
          </p>

          <div className="flex items-center w-full mt-3 space-x-3 text-gray-500 dark:text-gray-400 justify-between">
            {/* <div className="flex items-center gap-3 justify-between">
              <div className="relative flex-shrink-0 w-5 h-5">
                <img
                  alt="image"
                  src={blog}
                  className="rounded-full object-contain"
                />
              </div>
              <span className="text-sm">{blog?.author?.username}</span>
            </div>
            <span className="text-xs text-gray-300 dark:text-gray-600">
              &bull;
            </span> */}
            <time className="text-sm" dateTime={blog.createdAt}>
              {/* <Moment fromNow>{blog.createdAt}</Moment> */}
              {moment(blog.createdAt)?.fromNow()}
            </time>
          </div>
        </div>
      </div>
    </Link>
  );
}
