import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
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
          About Us, The Fastest Delivery in
          <span className="text-orange-600 text-[3rem] md:text-[4.5rem]">
            {" "}
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center sm:text-left md:w-[85%]">
          We pride ourselves on being the fastest delivery service, ensuring you
          get your orders in record time. Our dedicated team and advanced
          tracking system guarantee your items arrive safely and on schedule.
        </p>
        <button className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-md hover:opacity-90 transition-all ease-in-out duration-200 text-white">
          Order Now
        </button>
      </article>
    </section>
  );
};

export default AboutSection;
