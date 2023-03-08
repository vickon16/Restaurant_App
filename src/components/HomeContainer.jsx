import React from 'react'
import {heroData} from "../data";


const HomeContainer = () => {
  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
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
        <p className="text-base text-textColor text-center md:text-left md:w-[85%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
          adipisci ipsa labore explicabo molestias dicta optio voluptatem sed
          autem incidunt? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Excepturi, officiis.
        </p>
        <button className="bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-md hover:opacity-90 transition-all ease-in-out duration-200 text-white">
          Order Now
        </button>
      </article>

      {/* Hero section */}
      <article className="py-2 flex-1 flex items-center relative">
        <img
          src="images/heroBg.png"
          className="ml-auto w-full h-420 md:w-auto md:h-650"
          alt="hero-img"
        />

        <div className="w-full h-full absolute flex items-center justify-center gap-6 flex-wrap max-w-[550px] border-2">
          {/* Card */}
          {heroData && heroData.map((item) => (
              <div key={item.id} className="w-190 rounded-2xl p-3 bg-cardOverlay backdrop-blur-md flex flex-col items-center justify-center gap-1">
                <img src={item.img} className="-mt-20" alt={item.name} />
                <p className="text-lg font-semibold text-textColor">
                  {item.name}
                </p>
                <p className="text-xs font-semibold text-lighttextGray">
                  {item.desc}
                </p>
                <p className="text-md text-headingColor font-semibold">
                  <span className="text-xs text-green-600">$</span>{item.price}
                </p>
              </div>
            ))}
        </div>
      </article>
    </section>
  );
}

export default HomeContainer
