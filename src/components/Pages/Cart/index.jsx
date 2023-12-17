import React from "react";
import { useSelector } from "react-redux";
import { selectItemsInCart } from "../../../features/cart/cartSlice";
import ItemList from "./ItemList";
import OrderSummary from "./OrderSummary";
import PlaceOrder from "./PlaceOrderForm";

const Cart = () => {
  const cartItems = useSelector(selectItemsInCart);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <div className="container-max py-8 lg:pb-16">
      {/* <h1 className="text-2xl my-4 font-semibold">Cart</h1> */}

      {/* cart details */}
      <div className="min-h-[60vh] pb-8 md:flex gap-8">
        {/* cart items */}
        <ItemList />
        {/* order summary */}
        {cartItems && cartItems.length !== 0 && (
          <OrderSummary handleOpen={handleOpen} open={open} />
        )}
      </div>
      <PlaceOrder cartItems={cartItems} handleOpen={handleOpen} open={open} />
    </div>
  );
};

export default Cart;
