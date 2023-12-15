import React, { useEffect, useState } from "react";
import { Dialog, DialogHeader, DialogBody } from "@material-tailwind/react";
import Carousel, { ProductImagesCarousel } from "./Carousel";
import {
  addToCart,
  selectItemsInCart,
} from "../../../../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProductDetailModal({ open, handleOpen, product }) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(null);
  const [isAlreadyInCart, setIsAlreadyInCart] = useState(false);
  const cartItems = useSelector(selectItemsInCart);
  console.log(cartItems, "cartItems");

  useEffect(() => {
    const isInCart = cartItems?.some((cartItem) => {
      return cartItem?.item?.id === product.id;
    });
    setIsAlreadyInCart(isInCart);
  }, [cartItems]);
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    if (quantity >= 1) {
      setQuantity((prev) => prev - 1);
    }
  };
  const handleAdd = (itemToAdd) => dispatch(addToCart(itemToAdd));

  const images = [...Array(4)]?.map((item) => product?.photo);
  console.log(product, "the product");

  return (
    <>
      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>{product.name}</DialogHeader>
        <DialogBody className="grid  md:grid-cols-2 gap-[1.5rem]">
          <ProductImagesCarousel images={images} />
          <div className="flex flex-col gap-[1rem]">
            <p className="text-sm">
              {product?.description?.length > 200
                ? product?.description.slice(0, 200) + "..."
                : product?.description}
            </p>
            {/* <p className="my-2 space-x-1">
              <span className="font-semibold">
                ₹
                {parseFloat(
                  (quantity * parseFloat(product?.itemPrice)).toFixed(2)
                )}
              </span>
              <span className="text-gray-800 font-normal">
                ({product?.itemPrice} × {quantity})
              </span>
            </p> */}
            {/* <div className="flex items-center">
              <button
                onClick={() => decreaseQuantity(product?.id)}
                disabled={quantity <= 1}
                className={
                  "bg-orange-500 disabled:bg-orange-500/50 disabled:cursor-not-allowed text-white font-bold w-8 h-8 rounded-md"
                }>
                -
              </button>
              <p className="font-bold w-8 h-8 flex justify-center items-center">
                {quantity}
              </p>
              <button
                onClick={() => increaseQuantity(product?.id)}
                className="bg-orange-500 text-white font-bold w-8 h-8 rounded-md">
                +
              </button>
            </div> */}
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
