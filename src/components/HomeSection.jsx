import React from "react";
import { heroData } from "../data";

const HomeContainer = () => {
  return (
    <section
      id="home"
      className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full mb-12"
    >
      <article className="py-2 px-1 flex-1 flex flex-col items-start justify-center gap-6">
        {/* Buttons */}
        <div className="flex items-center gap-1 justify-center bg-orange-200 p-2 rounded-full">
          <p className="text-base text-orange-600 font-semibold px-1">
            Bike Delivery
          </p>
          <div className="w-6 h-6 rounded-full overflow-hidden bg-white">
            <img
              src="images/delivery.png"
              className="w-full object-contain"
              alt="delivery"
            />
          </div>
        </div>
        <p className="text-[2.5rem] md:text-[4rem] font-bold tracking-wide text-headingColor">
          The Fastest Delivery in
          <span className="text-orange-600 text-[3rem] md:text-[4.5rem]">
            {" "}
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center sm:text-left md:w-[85%]">
          We understand the importance of time. That's why we are committed to
          providing you with the quickest delivery service in town. Whether it's
          groceries, essentials, or your favorite meals, we've got you covered
          with lightning-fast speed and exceptional reliability. Say goodbye to
          long wait times and hello to convenience. Trust us to deliver what you
          need, when you need it.
        </p>
        <button className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-md hover:opacity-90 transition-all ease-in-out duration-200 text-white">
          Order Now
        </button>
      </article>

      {/* Hero section */}
      <article className="py-2 h-full flex-1 flex items-center relative overflow-y-auto">
        <img
          src="images/heroBg.png"
          className="ml-auto w-full h-420 md:w-auto md:h-685"
          alt="hero-img"
        />

        <div className="w-full h-auto top-10 absolute flex items-center justify-center gap-4 p-4 flex-wrap md:max-w-[550px]">
          {/* Card */}
          {heroData &&
            heroData.map((item) => (
              <div
                key={item.id}
                className="w-30 sm:w-40 md:w-150 lg:w-190 rounded-2xl p-2 bg-cardOverlay backdrop-blur-md flex flex-col items-center justify-center gap-1"
              >
                <img src={item.img} className="w-20 lg:w-40" alt={item.name} />
                <p className="text-sm md:text-lg font-semibold text-textColor">
                  {item.name}
                </p>
                <p className="text-xs font-semibold text-lighttextGray">
                  {item.desc}
                </p>
                <p className="text-sm md:text-md text-headingColor font-semibold">
                  <span className="text-xs text-green-600">$</span>
                  {item.price}
                </p>
              </div>
            ))}
        </div>
      </article>
    </section>
  );
};

export default HomeContainer;
