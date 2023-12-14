import React from "react";
import Card from "../../../commons/Card";
import { BsStar, BsStarFill } from "react-icons/bs";
import { person1 } from "../../../../images/people";

const TestimonialsCard = ({ testimonial }) => {
  return (
    <Card className="border flex flex-col justify-around border-gray-200 px-[1rem] py-[1rem] rounded-lg shadow-sm md:h-[300px] lg:h-[250px] xl:h-[300px]   2xl:h-[400px]">
      <div className="flex gap-[0.3rem]">
        {Array.from({ length: testimonial.ratings }, (_, i) => (
          <BsStarFill className="text-orange-500" key={i} />
        ))}
      </div>
      <div className="flex flex-col justify-around">
        <p className="text-sm text-gray-500">{testimonial?.review}</p>
      </div>
      <div className=" flex justify-around lg:justify-start items-center  gap-[2rem]">
        <img
          // src={
          //   `${process.env.SERVER_STATIC_URL}${testimonial?.image?.filePath}/${testimonial?.image?.fileName}` ||
          //   servicesData[index].image ||
          //   person1.src
          // }
          src={testimonial?.image}
          alt="image"
          className="w-[50px] h-[50px] object-contain  rounded-full "
        />
        <div className="">
          <p className="font-semibold">{testimonial?.reviewer}</p>
          <p className="text-gray-500 text-xs">{testimonial?.designation}</p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialsCard;
