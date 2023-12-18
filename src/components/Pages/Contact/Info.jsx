import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaAddressBook } from "react-icons/fa6";
import LogoImage from "../../../images/logo.png";

const Info = () => {
  return (
    <div className="w-full bg-gray-50 rounded-[15px]    ">
      <div className=" p-[1rem] flex flex-col gap-[0.8rem] max-w-[650px] m-auto">
        <div className="flex items-center justify-center">
          <img
            src={LogoImage}
            alt="logo"
            className="h-[100px] w-[100px] object-contain"
          />
        </div>
        <div className="text-center text-[2rem] font-bold">Contact us</div>
        <div className="flex items-center justify-center   m-auto">
          <p className="text-center text-sm md:text-md w-full text-gray-700">
            We'd love to hear from you! Whether you have questions, feedback, or
            just want to say hello, feel free to reach out to us. Our team is
            here to assist you.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-[1rem] items-center justify-center justify-items-center w-full ">
          <div className="flex items-center justify-center flex-col gap-[0.3rem]">
            <div className="p-4 bg-primary rounded-full">
              <FaPhone className=" text-white text-[2rem]" />
            </div>
            <p className="text-xl font-semibold">Phone</p>
            <p>+61 4100 111 66</p>
          </div>
          <div className="flex items-center justify-center flex-col gap-[0.3rem]">
            <div className="p-4 bg-primary rounded-full">
              <MdEmail className=" text-white text-[2rem]" />
            </div>
            <p className="text-xl font-semibold">Email</p>
            <p>info@hungercafe.com</p>
          </div>
          <div className="flex items-center justify-center flex-col gap-[0.3rem]">
            <div className="p-4 bg-primary rounded-full">
              <FaAddressBook className=" text-white text-[2rem]" />
            </div>
            <p className="text-xl font-semibold">Address</p>
            <p>Sydney,Australia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
