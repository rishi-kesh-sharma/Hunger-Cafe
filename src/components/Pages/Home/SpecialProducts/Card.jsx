import { Button } from "@material-tailwind/react";
import { useState } from "react";
import ProductDetailModal from "./ProductDetailModal";
import DefaultProductImage from "../../../../images/product/Food/Burger.png";
import CustomImage from "../../../commons/CustomImage";

export default function ProductCard({ product }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <>
      <div
        className="bg-white gap-0 items-start hover:scale-105  w-full 
 max-h-[300px]   
p-2
 rounded-lg
 border
grid
 shadow-sm
 transition-all
 hover:shadow-md">
        <div className="w-[100%]  rounded-md">
          <CustomImage
            className="w-full object-contain h-[150px] rounded-lg"
            src={product?.photo}
            defaultImage={DefaultProductImage}
            height={80}
            width={80}
            alt="image"
          />
        </div>
        <div>
          <h2 className="text-gray-600 text-sm text-start font-semibold tracking-normal text-brand-primary mt-[1rem]">
            <span
              className=" text-gray-600 bg-gradient-to-r from-orange-200 to-orange-100 dark:from-purple-800 dark:to-purple-900
          bg-[length:0px_10px]
          bg-left-bottom
          bg-no-repeat
          transition-[background-size]
          duration-500
          hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
              {product?.name?.length < 70
                ? product?.name
                : `${product?.name.slice(0, 70)} ...`}
            </span>
            {/* </a> */}
          </h2>

          <div className="flex items-center w-full mt-3 space-x-3 text-gray-500 dark:text-gray-400 justify-between">
            <Button
              onClick={handleOpen}
              className="bg-primary text-secondary"
              size="sm">
              Add
            </Button>
            <p className="text-gray-800 font-semibold">Rs {product?.price}</p>
          </div>
        </div>
      </div>
      {open && (
        <ProductDetailModal
          product={product}
          handleOpen={handleOpen}
          open={open}
        />
      )}
    </>
    // </a>
  );
}
