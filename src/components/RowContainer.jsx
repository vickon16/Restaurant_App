import React from "react";
import { MdShoppingBasket, MdDelete } from "react-icons/md";
import { motion } from "framer-motion";
import { deleteItem } from "../firebaseFunctions";

const RowContainer = ({ flag, data, rowContainer, admin }) => {

  return (
    <section
      ref={rowContainer}
      className={`w-full my-10 flex items-center gap-x-4 gap-y-7 bg-rowBg py-6 px-4 scroll-smooth scrollbar-none ${
        flag ? "overflow-x-auto" : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {/* Card */}
      {data &&
        data.length !== 0 &&
        data.map((foodItem) => (
          <article
            key={foodItem?.id}
            className="w-225 min-w-[225px] md:w-275 max-h-[300px] h-auto p-1 bg-gray-100 rounded-lg shadow-xl backdrop-blur-lg hover:drop-shadow-lg"
          >
            {/* Card image Zone */}
            <div className="w-full max-h-[120px] mb-5 flex items-center justify-around">
              <motion.img
                whileHover={{ scale: 1.1 }}
                src={foodItem?.imageURL}
                className="w-full object-cover md:w-40"
                alt="i1"
              />
              {/* Icons */}
              <aside>
                <motion.div
                  whileTap={{ scale: 0.8 }}
                  className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center cursor-pointer hover:shadow-md mb-2"
                >
                  <MdShoppingBasket className="text-white" />
                </motion.div>
                {admin && (
                <motion.div
                  whileTap={{ scale: 0.8 }}
                  className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
                  onClick={() => deleteItem(foodItem.id)}
                  ><MdDelete className="text-white" />
                </motion.div>
                )}
              </aside>
            </div>

            {/* Card Text Zone */}
            <div className="w-full flex flex-col gap-1 items-center">
              <p className="text-textColor font-semibold text-sm md:text-base">
                {foodItem?.title}
              </p>
              <div className="w-full flex items-center justify-between py-2 px-4">
                <p className="text-sm text-gray-500">
                  {foodItem?.calories} Calories
                </p>
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">$</span>{" "}
                  {foodItem?.price}
                </p>
              </div>
            </div>
          </article>
        ))}
    </section>
  );
};

export default RowContainer;
