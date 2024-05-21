import React from "react";
import { MdShoppingBasket, MdDelete } from "react-icons/md";
import { motion } from "framer-motion";
import { deleteFoodItem, saveCartItem } from "../firebaseFunctions";

const RowContainer = ({ flag, data, rowContainer, admin, dispatch }) => {
  return (
    <section
      ref={rowContainer}
      className={`w-full my-6 md:my-10 flex items-center gap-x-4 gap-y-7  py-6 px-4 scroll-smooth scrollbar-none ${
        flag
          ? "overflow-x-auto bg-rowBg"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {/* Card */}
      {data && data.length > 0 ? (
        data.map((foodItem) => (
          <article
            key={foodItem?.id}
            className={`${
              flag
                ? "w-225 min-w-[225px] md:w-275 max-h-[300px]"
                : "w-150 min-w-[150px] md:w-225 max-h-[240px]"
            }  h-auto p-1 bg-gray-100 rounded-lg shadow-xl backdrop-blur-lg hover:drop-shadow-lg`}
          >
            {/* Card image Zone */}
            <div className="w-full max-h-[110px] mb-5 flex items-center justify-around">
              <aside
                className={`${
                  flag
                    ? "w-32 h-32 md:h-40 md:w-40"
                    : "w-20 h-20 md:h-28 md:w-28"
                }`}
              >
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  src={foodItem?.imageURL}
                  className={`w-full h-full object-contain`}
                  alt="i1"
                />
              </aside>
              {/* Icons */}
              <aside>
                {/* cart icon */}
                <motion.div
                  whileTap={{ scale: 0.8 }}
                  className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center cursor-pointer hover:shadow-md mb-2"
                  onClick={() => saveCartItem(foodItem, dispatch)}
                >
                  <MdShoppingBasket className="text-white" />
                </motion.div>
                {/* delete admin icon */}
                {admin && (
                  <motion.div
                    whileTap={{ scale: 0.8 }}
                    className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
                    onClick={() => deleteFoodItem(foodItem.id)}
                  >
                    <MdDelete className="text-white" />
                  </motion.div>
                )}
              </aside>
            </div>

            {/* Card Text Zone */}
            <div className="w-full flex flex-col gap-1 items-center text-center">
              <p className="text-textColor font-semibold text-sm md:text-base">
                {foodItem?.title}
              </p>
              <p className="text-textColor text-xs md:text-sm">
                ({foodItem?.category})
              </p>
              <div className="w-full flex items-center justify-between py-2 px-4">
                <p className="text-xs text-gray-500">
                  {foodItem?.calories} Calories
                </p>
                <p className="text-lg text-headingColor font-semibold ml-1">
                  <span className="text-sm text-red-500">$</span>
                  {foodItem?.price}
                </p>
              </div>
            </div>
          </article>
        ))
      ) : (
        <div className="w-full flex flex-col gap-3 items-center justify-center">
          <img src="images/NotFound.svg" className="h-225" alt="not-found" />
          <p className="text-lg text-headingColor font-semibold">
            {!flag ? "Items is Unavailable" : "...Sign In to View Items..."}
          </p>
        </div>
      )}
    </section>
  );
};

export default RowContainer;
