import { useState } from 'react'
import {IoFastFood} from "react-icons/io5"
import {categories} from "../data";
import {motion} from "framer-motion";
import {RowContainer} from "./index";
import { useStateValue } from '../context/StateProvider';

const MenuSection = () => {
  const [{user, foodItems }] = useStateValue();
  const [filter, setFilter] = useState("chicken");

  return (
    <section id="menu" className="w-full mb-12">
      <div className="w-full flex flex-col justify-center">
        <p className="text-lg md:text-xl font-semibold Capitalize relative text-headingColor before:absolute before:content before:w-28 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-800 transition-all ease-in-out duration-100">
          Our Hot Dishes
        </p>

        {/* category cards container */}
        <div className="w-full flex items-center justify-start lg:justify-center gap-5 lg:gap-6 py-8 px-2 overflow-x-auto scrollbar-none select-none">
          {/* card */}
          {categories &&
            categories.map((category) => (
              <motion.article
                key={category.id}
                whileTap={{ scale: 0.85 }}
                className={`group ${
                  filter === category.urlName
                    ? "bg-cartNumBg hover:bg-card"
                    : "bg-card hover:bg-cartNumBg"
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-md drop-shadow-xl flex flex-col items-center  justify-center gap-3`}
                onClick={() => setFilter(category.urlName)}
              >
                {/* card circle */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    filter === category.urlName
                      ? "bg-card group-hover:bg-cartNumBg"
                      : "bg-cartNumBg group-hover:bg-card"
                  }`}
                >
                  <IoFastFood
                    className={`text-xl ${
                      filter === category.urlName
                        ? "group-hover:text-card"
                        : "text-card group-hover:text-textColor"
                    }`}
                  />
                </div>
                <p
                  className={`text-sm ${
                    filter === category.urlName
                      ? "text-white group-hover:text-textColor"
                      : "text-textColor group-hover:text-card"
                  }`}
                >
                  {category.name}
                </p>
              </motion.article>
            ))}
        </div>

        <div className="w-full ">
          <RowContainer
            flag={false}
            data={foodItems?.filter((n) => n.category === filter)}
            admin={user?.email === "nkachukwuvictor2016@gmail.com"}
          />
        </div>
      </div>
    </section>
  );
}

export default MenuSection
