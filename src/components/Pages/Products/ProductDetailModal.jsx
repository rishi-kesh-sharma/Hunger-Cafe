import React, { useEffect, useState } from "react";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import Carousel, { ProductImagesCarousel } from "./Carousel";
import { addToCart, selectItemsInCart } from "../../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CustomImage from "../../commons/CustomImage";
import cheerio from "cheerio";

export default function ProductDetailModal({ open, handleOpen, product }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(null);
  const [isAlreadyInCart, setIsAlreadyInCart] = useState(false);
  const cartItems = useSelector(selectItemsInCart);

  useEffect(() => {
    const isInCart = cartItems?.some((cartItem) => {
      return cartItem?.item?.id === product.id;
    });
    setIsAlreadyInCart(isInCart);
  }, [cartItems]);

  const handleAdd = (itemToAdd) => dispatch(addToCart(itemToAdd));
  const description = {
    __html:
      product?.description?.length > 200
        ? product?.description.slice(0, 200) + "..."
        : product?.description,
  };

  return (
    <>
      <Dialog size="xs" open={open} handler={handleOpen}>
        <DialogHeader>{product.name}</DialogHeader>
        <DialogBody className="grid md:grid-cols-2 gap-[1.5rem]">
          {/* <ProductImagesCarousel images={images} /> */}
          <CustomImage
            src={product?.photo}
            className="w-full h-[130px] md:h-full object-contain rounded-lg"
          />
          <div className="flex flex-col gap-[1rem]">
            <p className="">
              <div dangerouslySetInnerHTML={description} />
            </p>

            <p className="text-primary">Rs {product?.price}</p>
            {isAlreadyInCart ? (
              <Link
                to="/cart"
                className="max-w-[110px] bg-primary text-secondary p-2 rounded-md text-center">
                Go To Cart
              </Link>
            ) : (
              <button
                onClick={() => handleAdd(product)}
                className="max-w-[130px] bg-primary text-secondary p-2 rounded-md">
                Add To Cart
              </button>
            )}
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
}
