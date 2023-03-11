/* eslint-disable react-hooks/exhaustive-deps */
import {motion} from "framer-motion"
import { actionType } from "../context/reducer";
import { BiMinus, BiPlus } from "react-icons/bi";
import { deleteCartItem} from "../firebaseFunctions";
import { MdCancel } from "react-icons/md";
import { useStateValue } from "../context/StateProvider";
import { useEffect, useState } from "react";


const CartItem = ({id, imageURL, title, price, quantity}) => {
  const [changeQty, setChangeQty] = useState(1);
  const [, dispatch] = useStateValue();

  const updateQty = (action, id) => {
    if (action === "add") {
      setChangeQty(prev => prev + 1)
      dispatch({ type: actionType.INCREASE_QUANTITY, id })
    } else {
      setChangeQty(prev => prev - 1)
      dispatch({ type: actionType.DECREASE_QUANTITY, id })
    }
  }

  useEffect(() => {
    dispatch({ type: actionType.CALCULATE_TOTAL });
  }, [changeQty])

  return (
    <article className="relative w-full p-1 px-2 rounded-lg bg-cartItem flex items-center gap-2">
      <img
        src={imageURL}
        className="w-20 h-20 max-w-[60px] rounded-full object-contain"
        alt="fsdf"
      />
      {/* name section */}
      <div className="flex flex-col flex-1 gap-2">
        <p className="text-sm text-gray-50">{title}</p>
        <p className="text-base text-emerald-300 font-semibold">
          ${price * quantity}
        </p>
      </div>
      {/* button section */}
      <div className="group flex items-center gap-2 ml-auto cursor-pointer select-none">
        <motion.div
          whileTap={{ scale: 0.8 }}
          onClick={() => updateQty("subtract", id)}
        >
          <BiMinus className="text-gray-50 text-2xl" />
        </motion.div>
        <p className="w-5 h-5 rounded-sm bg-cartBg text-gray-50 flex items-center justify-center">
          {quantity}
        </p>
        <motion.div
          whileTap={{ scale: 0.8 }}
          onClick={() => updateQty("add", id)}
        >
          <BiPlus className="text-gray-50 text-2xl" />
        </motion.div>
      </div>

      {/* delete button */}
      <div
        className="absolute -top-1 -right-1 cursor-pointer"
        onClick={() => deleteCartItem(id, dispatch)}
      >
        <MdCancel className=" text-red-500 text-xl " />
      </div>
    </article>
  );
}

export default CartItem
