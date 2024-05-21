import React from "react";

const ServicesSection = () => {
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
          Our
          <span className="text-orange-600 text-[3rem] md:text-[4.5rem]">
            {" "}
            Services
          </span>
        </p>
        <section className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-md sm:text-lg">Grocery Delivery</h1>
            <p className="text-gray-500">
              Save time and skip the lines with our efficient grocery delivery
              service. Choose from a wide selection of fresh produce, pantry
              staples, and household essentials. Simply place your order online,
              and we'll deliver it straight to your door, often within an hour.
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="text-md sm:text-lg">Restaurant and Meal Delivery</h1>
            <p className="text-gray-500">
              Craving your favorite meal from a local restaurant? Our restaurant
              and meal delivery service brings delicious dishes right to your
              doorstep. Browse through our extensive list of partnered
              restaurants, place your order, and enjoy your meal without the
              hassle of cooking or commuting.
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="text-md sm:text-lg">
              Pharmacy and Health Products Delivery
            </h1>
            <p className="text-gray-500">
              Get your medications and health products delivered quickly and
              discreetly. Our pharmacy delivery service ensures you never have
              to worry about missing a dose or running out of essential health
              supplies. Trust us to handle your prescriptions with care and
              confidentiality.
            </p>
          </div>
          <div className="space-y-2">
            <h1 className="text-md sm:text-lg">Express Package Delivery</h1>
            <p className="text-gray-500">
              Need to send a package urgently? Our express package delivery
              service guarantees speedy and secure delivery for documents,
              gifts, and other important items. Whether it's across town or to a
              neighboring city, we ensure your package reaches its destination
              promptly.
            </p>
          </div>
        </section>
        <button className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-md hover:opacity-90 transition-all ease-in-out duration-200 text-white">
          Order Now
        </button>
      </article>
    </section>
  );
};

export default ServicesSection;
