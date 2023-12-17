import React from "react";
import Card from "../../../commons/Card";
import { BsStar, BsStarFill } from "react-icons/bs";
import CustomImage from "../../../commons/CustomImage";
import DefaultTestimonialImage from "../../../../images/people/person1.jpg";
import moment from "moment";

const TestimonialsCard = ({ testimonial }) => {
  return (
    <Card
      key={testimonial?.id}
      className="border flex flex-col justify-around border-gray-200 px-[1rem] py-[1rem] rounded-lg shadow-sm md:h-[300px] lg:h-[250px] xl:h-[300px]   2xl:h-[400px]">
      {/* <div className="flex gap-[0.3rem]">
        {Array.from({ length: testimonial.ratings }, (_, i) => (
          <BsStarFill className="text-orange-500" key={i} />
        ))}
      </div> */}
      <div className="flex flex-col justify-around">
        <p className="text-sm text-gray-500">{testimonial?.message}</p>
      </div>
      <div className=" flex justify-around lg:justify-start items-center  gap-[2rem]">
        <CustomImage
          defaultImage={DefaultTestimonialImage}
          src={testimonial?.photo}
          alt="image"
          className="w-[50px] h-[50px] object-cover rounded-full "
        />
        <div className="">
          <p className="font-semibold text-primary">{testimonial?.name}</p>
          <p className="text-gray-500 text-xs">{testimonial?.designation}</p>
        </div>
        <p className="text-gray-500 text-xs">
          {moment(testimonial.created_at).fromNow()}
        </p>
      </div>
    </Card>
  );
};

export default TestimonialsCard;
