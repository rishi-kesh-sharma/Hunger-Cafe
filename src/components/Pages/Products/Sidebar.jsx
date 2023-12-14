import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";
import DefaultCategoryImage from "../../../images/category/category.png";
import CustomImage from "../../commons/CustomImage";

export function SideBar({ categories }) {
  return (
    <Card className="hidden lg:block grid-cols-1 max-h-[70vh]  w-full  p-2 shadow-xl shadow-blue-gray-900/5 border h-auto ">
      <div className="mb-2 p-0 w-full ">
        <Typography variant="h6" color="blue-gray" className="pl-3 pt-3">
          Sub Categories
        </Typography>

        <List className="p-0 m-0 mt-[1rem] flex flex-col gap-[0.5rem]">
          {categories?.map((category, index) => {
            return (
              <Link to={`/products/category/${category?.id}`}>
                <ListItem key={index} className="w-full p-2 m-0">
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
              </Link>
            );
          })}
        </List>
      </div>
      <List></List>
    </Card>
  );
}
