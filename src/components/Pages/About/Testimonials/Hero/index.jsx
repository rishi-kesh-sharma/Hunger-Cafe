import React from "react";

import RestaurantImage1 from "../../../../../images/restaurant/restaurant1.jpg";
import RestaurantImage2 from "../../../../../images/restaurant/restaurant2.jpg";
import RestaurantImage5 from "../../../../../images/restaurant/restaurant5.jpg";
import RestaurantImage6 from "../../../../../images/restaurant/restaurant6.jpg";
import SectionTitle from "../../../../commons/SectionTitle";
import { chefs, features } from "../../../../../data";
import Section from "../../../../commons/Section";
const Hero = () => {
  return (
    <div>
      <div className=" flex flex-col gap-[1rem]">
        <SectionTitle className="text-lg font-semibold">
          Welcome to Hunger Cafe
        </SectionTitle>
        <div className="grid md:grid-cols-2 gap-[3rem]  ">
          {" "}
          <img
            alt="image"
            src={RestaurantImage1}
            className="rounded-lg h-[220px] object-cover w-full"
          />
          <p className="text-sm text-gray-700">
            Embark on a gastronomic adventure with our chef's signature dishes,
            each narrating a story inspired by local culture and global
            influences. From the sizzling aroma of our Dish to the delicate
            fusion of flavors in our Dish, our menu is a testament to culinary
            artistry. We pride ourselves on creating not just meals but
            memorable experiences that linger on your taste buds
          </p>
          <p className="text-sm text-gray-700">
            Embrace the changing seasons with our rotating menu of seasonal
            delights. Our chefs meticulously select the freshest, in-season
            produce to create dishes that capture the essence of each time of
            the year. From vibrant spring salads to hearty winter stews, our
            seasonal offerings ensure that every visit to Hunger Cafe is a
            unique and flavorful experience.
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
              {chefs?.slice(0, 3)?.map((chef, index) => {
                return (
                  <div
                    key={index}
                    className="border p-[0.5rem] rounded-lg shadow-lg flex flex-col gap-[1rem]">
                    <img
                    alt="image"
                      src={chef?.image}
                      className="h-[200px] w-full object-cover rounded-lg"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-primary">
                        {chef.name}
                      </h2>
                      <p className="text-sm text-gray-500 ">{chef?.address}</p>
                    </div>
                    <p className="text-sm text-gray-700">{chef?.description}</p>
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
