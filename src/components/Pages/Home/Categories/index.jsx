import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import Category from "./Category";
import { useKeenSlider } from "keen-slider/react";
import { FaArrowRight } from "react-icons/fa";

import ShowAllCategoriesModal from "./ShowAllModal";
import Section from "../../../commons/Section";
import Container from "../../../commons/Container";
import SectionTitle from "../../../commons/SectionTitle";
import Slider from "./Slider";

const CategoryList = ({ categories }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <Section className="mt-[2rem] ">
        <Container className="relative ">
          <SectionTitle className="">All Categories</SectionTitle>
          <div className="hidden lg:flex gap-[1.4rem] ">
            {categories?.slice(0, 5)?.map((category, index) => (
              <Category category={category} key={category.id || index} />
            ))}
          </div>
          <div className="lg:hidden">
            <Slider categories={categories} />
          </div>
          <button
            onClick={handleOpen}
            className="absolute top-0 px-1 py-2 rounded-md  lg:top-[50%] lg:translate-y-[-50%] right-1 sm:right-0 text-primary md:bg-primary lg:h-[70px] lg:w-[70px] 2xl:h-[90px] 2xl:w-[90px] lg:rounded-full flex text-center items-center justify-center md:text-secondary text-xs gap-1">
            {" "}
            View All
            <FaArrowRight className="text-xs" />
          </button>
        </Container>
      </Section>
      <ShowAllCategoriesModal
        categories={categories}
        open={open}
        handleOpen={handleOpen}
      />
    </>
  );
};
export default CategoryList;
