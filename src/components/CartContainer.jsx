import { MdOutlineKeyboardBackspace} from "react-icons/md";
import {motion} from "framer-motion";
import {RiRefreshFill} from "react-icons/ri"
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
import CartItem from "./CartItem";
import { useState } from "react";

const CartContainer = () => {
  const [{user, cartItems, cartTotal}, dispatch] = useStateValue();
  const [deliveryFee] = useState(3);

  return (
    <motion.section
      id="cart"
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 300 }}
      className="fixed top-0 right-0 w-full max-w-[420px] h-screen bg-white drop-shadow-md flex flex-col z-20 select-none selection:bg-none"
    >
      {/* header section */}
      <section className="w-full flex items-center justify-between p-4 cursor-pointer">
        <motion.span
          whileTap={{ scale: 0.8 }}
          onClick={() =>
            dispatch({ type: actionType.SET_CART_SHOW, cartShow: false })
          }
        >
          <MdOutlineKeyboardBackspace className="text-textColor text-3xl" />
        </motion.span>
        <p className="text-textColor text-lg font-semibold">Cart</p>
        <motion.p
          whileTap={{ scale: 0.8 }}
          className="flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md cursor-pointer text-textColor text-base"
        >
          <RiRefreshFill /> Clear
        </motion.p>
      </section>

      {/* Body Section */}
      <section className="w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col">
        {/* displayed cart items */}
        {cartItems && cartItems.length > 0 ? (
          <>
            <div className="w-full h-340 md:h-420 px-6 py-10 flex flex-col gap-3 overflow-y-auto scrollbar-none">
              {/* cart Item */}
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
            {/* Total section */}
            <div className="w-full flex-1 bg-cartTotal rounded-t-[2rem] flex flex-col items-center justify-evenly px-8 py-2">
              <article className="w-full flex items-center justify-between">
                <p className="text-gray-400 text-base">Sub Total</p>
                <p className="text-gray-400 text-base">$ {cartTotal}</p>
              </article>
              <article className="w-full flex items-center justify-between">
                <p className="text-gray-400 text-base">Delivery</p>
                <p className="text-gray-400 text-base">$ {deliveryFee}</p>
              </article>
              <p className="w-full border-b border-gray-600 my-2"></p>
              <div className="w-full flex items-center justify-between">
                <p className="text-gray-200 text-base font-semibold">Total</p>
                <p className="text-gray-200 text-base font-semibold">$ {cartTotal + deliveryFee}</p>
              </div>

              {/* total button */}
              {user && (
                <motion.button
                  whileTap={{ scale: 0.8 }}
                  className="w-full p-2 rounded-full bg-gradient-to-br from-orange-300 to-orange-600 text-gray-50 text-base my-2 hover:shadow-lg"
                >
                  Check Out
                </motion.button>
              )}
            </div>
          </>
        ) : (
          // no items in cart
          <div className="w-full h-full flex flex-col items-center justify-center gap-6">
            <img src="images/emptyCart.svg" className="w-300" alt="emptyCart" />
            <p className="text-base text-gray-100 ">
              Add some items to your cart
            </p>
          </div>
        )}
      </section>
    </motion.section>
  );
}

export default CartContainer
