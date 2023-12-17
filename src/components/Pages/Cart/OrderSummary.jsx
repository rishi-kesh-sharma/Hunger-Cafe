import { useSelector } from "react-redux";
import {
  selectItemsInCart,
  selectTotalPrice,
} from "../../../features/cart/cartSlice";

const OrderSummary = ({ handleOpen, open, itemsId, itemsQuantity }) => {
  const cartItems = useSelector(selectItemsInCart);
  const totalPrice = useSelector(selectTotalPrice);
  const discount = totalPrice * 0.1;
  const deliveryCharges = totalPrice * 0.05;
  // const totalAmt = totalPrice + deliveryCharges - discount;
  const totalAmt = totalPrice;

  return (
    <div className="basis-5/12 h-fit sticky top-35 p-8 rounded-md border shadow-md  md:m-0">
      <h2 className="text-xl font-bold border-b pb-4">Order Summary</h2>

      {/* order details */}
      <div className="py-4 text-lg space-y-4 border-b">
        <div className="flex justify-between items-center font-semibold text-sm">
          <p className="font-normal">Price ({cartItems.length} items)</p>
          <p>₹ {totalPrice}</p>
        </div>
        {/* <div className="flex justify-between items-center font-semibold text-sm">
          <p className="font-normal">Discount (10%)</p>
          <p> - ₹ {parseFloat(discount).toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center font-semibold text-sm">
          <p className="font-normal">Delivery charges (5%)</p>
          <p>+ ₹ {parseFloat(deliveryCharges).toFixed(2)}</p>
        </div>

        <p className="text-sm my-2">
          You'll save ₹{parseFloat(discount).toFixed(2)} on this order 🎉
        </p> */}
      </div>

      <div className="py-4 border-b">
        <div className="md:flex justify-between items-center font-bold text-lg md:text-2xl">
          <h1>Total Amount</h1>
          <h1 className="text-primary">₹ {parseFloat(totalAmt).toFixed(2)}</h1>
        </div>
      </div>
      <button
        className="w-full block mt-4 uppercase font-bold text-lg bg-primary text-white text-center p-3 rounded-md"
        onClick={handleOpen}>
        Checkout
      </button>
    </div>
  );
};

export default OrderSummary;
