import React from "react";

import { Link } from "react-router-dom";
import Section from "./Section";
import Container from "./Container";
import Logo from "./Logo";
import { footer } from "../../data";

const Footer = () => {
  return (
    <Section className="bg-[#1d2636] mt-0  pt-[4rem] overflow-x-hidden">
      <Container>
        <footer className={` footer `}>
          <div className={`container gap-0`}>
            <div className={`box `}>
              <div className={` logo text-white   `}>
                <Logo />
                <h1 className="text-xs text-gray-400 mt-1 max-w-[300px] hidden md:block md:text-start lg:text-start">
                  Savor the Moment, Delight in Every Bite: Where Every Meal
                  Feels Like a Hug for Your Taste Buds
                </h1>
              </div>
            </div>
            {footer?.map((val, index) => (
              <div key={index} className={` box`}>
                <h3 className="text-gray-300  ">{val.title}</h3>
                <ul>
                  {val.text?.map((item, index) => {
                    if (item.type !== "external" && item.cursor !== false) {
                      return (
                        <Link key={index} to={item.link ? `${item.link}` : "/"}>
                          <li
                            key={index}
                            className="text-xs md:text-sm hover:text-gray-200">
                            {item.list}
                          </li>
                        </Link>
                      );
                    } else {
                      return (
                        <li className="text-xs" key={index}>
                          {item.list}
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            ))}
          </div>
        </footer>
        <div className={` legal`}>
          <span className="text-sm">
            <span className="mr-[0.1rem] text-sm">© 2023 Hunger Cafe.</span>{" "}
            Designed and Developed By{" "}
            <a
              target="_blank"
              rel="noreferrer"
              className="text-gray-200 hover:text-gray-100"
              href="https://apptechnologies.co/">
              APP TECHNOLOGIES.
            </a>
          </span>
        </div>
      </Container>
    </Section>
  );
};

export default Footer;
