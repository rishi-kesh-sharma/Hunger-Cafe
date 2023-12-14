import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  Typography,
  ListItemPrefix,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import CustomImage from "../../../commons/CustomImage";
import defaultImage from "../../../../images/category/category.png";

export default function ShowAllCategoriesModal({
  open,
  handleOpen,
  categories,
}) {
  return (
    <>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none">
        <Card className="mx-auto w-full">
          <CardBody className="flex flex-col gap-4 ">
            <Typography variant="h6" color="blue-gray">
              Our All Categories
            </Typography>

            <div className="flex flex-row flex-wrap gap-[1rem] ">
              {categories?.map((category, index) => {
                return (
                  <Link
                    to={`products/category/${category?.id}`}
                    key={category?.id || index}
                    className="group flex gap-2 items-center flex-col hover:scale-105 transition-all cursor-pointer ">
                    <ListItemPrefix>
                      <CustomImage
                        alt="image"
                        defaultImage={defaultImage}
                        src={category?.photo}
                        className="h-[40px] w-[40px] rounded-full"
                      />
                    </ListItemPrefix>

                    <p className="group-hover:text-black">{category?.name}</p>
                  </Link>
                );
              })}
            </div>
          </CardBody>
        </Card>
      </Dialog>
    </>
  );
}
