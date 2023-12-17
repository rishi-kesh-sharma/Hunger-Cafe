import {
  Card,
  Typography,
  List,
  ListItem,
  Drawer,
  Button,
  IconButton,
  ListItemPrefix,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import DefaultCategoryImage from "../../../images/category/category.png";
import CustomImage from "../../commons/CustomImage";

import React from "react";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";

export function SideBar({
  subCategories,
  currentSubCategory,
  setCurrentSubCategory,
}) {
  console.log(currentSubCategory, "current sub category");
  return (
    <Card className=" md:grid-cols-1 lg:grid-cols-1 overflow-x-hidden  w-full  p-2  shadow-none md:shadow-xl md:shadow-blue-gray-900/5 md:border h-auto ">
      <div className="mb-2 p-0 w-full ">
        <Typography
          variant="h6"
          color="blue-gray"
          className="pl-3 pt-3 hidden md:block">
          Sub Categories
        </Typography>

        <List className=" min-w-[180px] p-0 m-0 mt-[1rem] flex flex-row md:flex-col flex-wrap gap-2 md:gap-[0.5rem]  md:w-full">
          {subCategories?.map((category, index) => {
            return (
              <li
                onClick={() => {
                  setCurrentSubCategory(category?.id);
                }}
                key={index}
                className={`w-auto border md:border-none md:w-full p-2 m-0 active:bg-none focus:bg-none flex rounded-lg cursor-pointer ${
                  currentSubCategory != category?.id && "hover:bg-secondary/50"
                } ${
                  currentSubCategory == category?.id &&
                  "bg-primary text-secondary "
                }`}>
                <ListItemPrefix className="">
                  <CustomImage
                    defaultImage={DefaultCategoryImage}
                    alt="image"
                    src={category?.photo}
                    className="h-[30px] w-[30px] rounded-full"
                  />
                </ListItemPrefix>
                {category.name}
              </li>
            );
          })}
        </List>
      </div>
      <List></List>
    </Card>
  );
}

export function DrawerWithNavigation({
  subCategories,
  currentSubCategory,
  setCurrentSubCategory,
}) {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div className="md:hidden">
      <IconButton variant="text" color="blue-gray" onClick={openDrawer}>
        <RxHamburgerMenu className="text-2xl" />
      </IconButton>
      <Drawer open={open} onClose={closeDrawer}>
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            Sub Categories
          </Typography>
          <RxCross1 onClick={closeDrawer} className="text-red-600 text-lg" />
        </div>
        <List>
          {/* <ListItem>
            <ListItemPrefix>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M2.25 2.25a.75.75 0 000 1.5H3v10.5a3 3 0 003 3h1.21l-1.172 3.513a.75.75 0 001.424.474l.329-.987h8.418l.33.987a.75.75 0 001.422-.474l-1.17-3.513H18a3 3 0 003-3V3.75h.75a.75.75 0 000-1.5H2.25zm6.04 16.5l.5-1.5h6.42l.5 1.5H8.29zm7.46-12a.75.75 0 00-1.5 0v6a.75.75 0 001.5 0v-6zm-3 2.25a.75.75 0 00-1.5 0v3.75a.75.75 0 001.5 0V9zm-3 2.25a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0v-1.5z"
                  clipRule="evenodd"
                />
              </svg>
            </ListItemPrefix>
            Dashboard
          </ListItem> */}
          <List className="p-0 m-0 mt-[1rem] flex flex-col gap-[0.5rem]">
            {subCategories?.map((category, index) => {
              return (
                <ListItem
                  onClick={() => {
                    setCurrentSubCategory(category?.id);
                    closeDrawer();
                  }}
                  key={index}
                  className="w-full p-2 m-0">
                  <ListItemPrefix>
                    {/* <PresentationChartBarIcon className="h-5 w-5" /> */}
                    <CustomImage
                      defaultImage={DefaultCategoryImage}
                      alt="image"
                      src={category?.photo}
                      className="h-[30px] w-[30px] rounded-full"
                    />
                  </ListItemPrefix>
                  {category.name}
                </ListItem>
              );
            })}
          </List>
        </List>
      </Drawer>
    </div>
  );
}
