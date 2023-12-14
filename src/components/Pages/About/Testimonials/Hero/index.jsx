import React from "react";

import RestaurantImage1 from "../../../../../images/restaurant/restaurant1.jpg";
import RestaurantImage2 from "../../../../../images/restaurant/restaurant2.jpg";
import RestaurantImage5 from "../../../../../images/restaurant/restaurant5.jpg";
import RestaurantImage6 from "../../../../../images/restaurant/restaurant6.jpg";
import SectionTitle from "../../../../commons/SectionTitle";
import { FaFacebook, FaInstagram, FaLink, FaLinkedin } from "react-icons/fa";
import { chefs, features } from "../../../../../data";
import Section from "../../../../commons/Section";
const Hero = ({ teams }) => {
  return (
    <div>
      <div className=" flex flex-col gap-[1rem]">
        <SectionTitle className="text-lg font-semibold">
          Welcome to Hunger Cafe
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-[3rem] h-full  ">
          {" "}
          <img
            alt="image"
            src={RestaurantImage1}
            className="rounded-lg  object-cover w-full h-full"
          />
          <p className="text-sm text-gray-700">
            Embark on a gastronomic adventure with our chef's signature dishes,
            each narrating a story inspired by local culture and global
            influences. From the sizzling aroma of our Dish to the delicate
            fusion of flavors in our Dish, our menu is a testament to culinary
            artistry. We pride ourselves on creating not just meals but
            memorable experiences that linger on your taste buds Step into
            <br />
            Hunger Cafe, and you'll find a warm and inviting ambiance that sets
            the stage for an unforgettable dining experience. Our menu is a
            symphony of flavors, offering a diverse range of dishes crafted with
            innovation and passion. Whether you're here for a casual meal, a
            celebration, or a romantic evening, we strive to create an
            atmosphere that suits every occasion.
          </p>
          <p className="text-sm text-gray-700">
            Embrace the changing seasons with our rotating menu of seasonal
            delights. Our chefs meticulously select the freshest, in-season
            produce to create dishes that capture the essence of each time of
            the year. From vibrant spring salads to hearty winter stews, our
            seasonal offerings ensure that every visit to Hunger Cafe is a
            unique and flavorful experience.
            <br />
            Experience the magic of Hunger Cafe. Join us for a gastronomic
            journey where passion meets plate. Whether you're a seasoned foodie
            or a casual diner, we invite you to savor the moments and create
            lasting memories with us.
          </p>
          <img
            alt="image"
            src={RestaurantImage1}
            className="rounded-lg h-[220px] object-cover w-full"
          />
        </div>

        <Section className="flex flex-col">
          <SectionTitle>Our Features</SectionTitle>
          {
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:justify-center  xl:grid-cols-3  gap-[1rem]">
              {features?.slice(0, 3)?.map((feature, index) => {
                return (
                  <div
                    key={index}
                    className="border p-[1rem] rounded-lg shadow-lg flex flex-col gap-[1rem]">
                    <h2 className="text-lg font-semibold text-primary">
                      {feature.title}
                    </h2>
                    <p className="text-sm text-gray-700">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          }
        </Section>
        <Section className="flex flex-col">
          <SectionTitle>Our Chefs</SectionTitle>
          {
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[1rem]">
              {teams?.slice(0, 3)?.map((team, index) => {
                return (
                  <div
                    key={index}
                    className="border p-[0.5rem] rounded-lg shadow-lg flex flex-col gap-[1rem]">
                    <img
                      alt="image"
                      src={team?.photo}
                      className="h-[200px] w-full object-cover rounded-lg"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-primary">
                        {team.name}
                      </h2>
                      <p className="text-sm text-gray-500 ">
                        {team?.designation}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <a className="text-blue-500" href={team?.facebook}>
                        <FaFacebook />
                      </a>
                      <a className="text-blue-500" href={team?.facebook}>
                        <FaInstagram />
                      </a>
                      <a className="text-blue-500" href={team?.facebook}>
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          }
        </Section>
      </div>
    </div>
  );
};

export default Hero;
