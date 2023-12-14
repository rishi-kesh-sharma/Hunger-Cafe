import { useSelector, useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart,
  selectItemsInCart,
} from "../../../features/cart/cartSlice";
import EmptyCartImage from "../../../images/empty-cart1.webp";
import CustomImage from "../../commons/CustomImage";

import DefaultProductImage from "../../../images/product/Food/Burger.png";
const CartItemList = () => {
  const cartItems = useSelector(selectItemsInCart);
  const dispatch = useDispatch();

  const removeItem = (id) => dispatch(removeFromCart({ id }));
  const decreaseQuantity = (id) => dispatch(decreaseItemQuantity({ id }));
  const increaseQuantity = (id) => dispatch(increaseItemQuantity({ id }));

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col grow min-h-[60vh] justify-center items-center">
        <p className="text-primary text-lg font-semibold">
          You are yet to add to cart
        </p>
        <img
          src={EmptyCartImage}
          className="h-[400px] w-[400px] object-contain"
        />
      </div>
    );
  }

  return (
    <ul className="basis-7/12">
      {cartItems &&
        cartItems?.map((cartItem, index) => (
          <li
            // key={cartItem?.id}
            key={cartItem?.item?.id || index}
            className="flex gap-4 justify-between max-w-[600px] my-4">
            <div className="basis-3/12">
              <CustomImage
                defaultImage={DefaultProductImage}
                className="w-full h-full md:h-auto object-cover block rounded-md aspect-square"
                // src={CDN_URL + item?.imageId}
                src={cartItem?.item?.photo}
                alt="image"
              />
            </div>
            <div className="basis-9/12">
              <p className="text-lg font-semibold">{cartItem?.item?.name}</p>
              <p className="hidden md:block">
                {cartItem?.item?.description?.length > 50
                  ? cartItem?.item?.description.slice(0, 50) + "..."
                  : cartItem?.item?.description}
              </p>

              <p className="my-2 space-x-1">
                <span className="font-semibold">
                  ₹
                  {parseFloat(
                    (
                      cartItem?.quantity * parseFloat(cartItem?.item?.price)
                    ).toFixed(2)
                  )}
                </span>
                <span className="text-gray-800 font-normal">
                  ({cartItem?.price} × {cartItem?.quantity})
                </span>
              </p>

              {/* actions */}
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <button
                    onClick={() => decreaseQuantity(cartItem?.item?.id)}
                    disabled={cartItem?.quantity === 1}
                    className={
                      "bg-orange-500 disabled:bg-orange-500/50 disabled:cursor-not-allowed text-white font-bold w-8 h-8 rounded-md"
                    }>
                    -
                  </button>
                  <p className="font-bold w-8 h-8 flex justify-center items-center">
                    {cartItem?.quantity}
                  </p>
                  <button
                    onClick={() => increaseQuantity(cartItem?.item?.id)}
                    className="bg-orange-500 text-white font-bold w-8 h-8 rounded-md">
                    +
                  </button>
                </div>

                <button
                  onClick={() => removeItem(cartItem?.item?.id)}
                  className="border border-orange-500 text-xs font-semibold text-orange-500 p-2 px-4 rounded-md">
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default CartItemList;
