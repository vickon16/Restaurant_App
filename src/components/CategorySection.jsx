import { motion } from "framer-motion";
import { useRef } from "react";
import {RowContainer} from "./index"
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useStateValue } from "../context/StateProvider";

const buttonStyles = "w-8 h-8 rounded-lg bg-orange-300 hover:bg-orange-500 cursor-pointer hover:shadow-lg flex items-center justify-center"

const CategorySection = () => {
  const [{user, foodItems }, dispatch] = useStateValue();
  const rowContainer = useRef();

  const scroll = (scrollOffset) => {
    rowContainer.current.scrollLeft += scrollOffset;
  };

  return (
    <section id="category" className="w-full mb-12">
      <article className="w-full flex items-center justify-between">
        <aside className="text-lg md:text-xl font-semibold Capitalize relative text-headingColor before:absolute before:content before:w-28 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-800 transition-all ease-in-out duration-100">
          Our fresh & health fruits
        </aside>
        <aside className="hidden md:flex gap-3 items-center">
          <motion.div
            whileTap={{ scale: 0.8 }}
            className={buttonStyles}
            onClick={() => scroll(-200)}
          >
            <MdChevronLeft className="text-xl text-white" />
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.8 }}
            className={buttonStyles}
            onClick={() => scroll(200)}
          >
            <MdChevronRight className="text-xl text-white" />
          </motion.div>
        </aside>
      </article>

      <RowContainer
        rowContainer={rowContainer}
        flag={true}
        dispatch={dispatch}
        data={foodItems?.filter((n) => n.category === "fruits")}
        admin={user?.email === "nkachukwuvictor2016@gmail.com"}
      />
    </section>
  );
};

export default CategorySection;
