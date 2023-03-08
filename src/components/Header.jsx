import React, { useState } from "react";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase-config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);

  // multiple styles
  const linkStyle = "text-base text-textColor hover:text-headingColor cursor-pointer duration-100 transition-all ease-in-out"
  const dropdownStyle = "px-2 py-2 flex items-center gap-2 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base"


  const Login = () => {
    if (!user) {
      signInWithPopup(auth, provider)
        .then((resp) => {
          const {
            user: { refreshToken, providerData },
          } = resp;
          console.log(refreshToken);
          dispatch({
            type: actionType.SET_USER,
            user: providerData[0],
          });
        })
        .catch((err) => console.log(err));
    } else {
      setIsMenu(prev => !prev);
    }
  };

  const logout = () => {
    signOut(auth).then(() => {
      console.log("logged out successfully")
    }).catch(err => console.log(err))
    .finally(() => setIsMenu(false))
  }

  return (
    <header className="fixed z-30 w-full p-5 px-4 md:px-12 bg-primary">
      {/* {desktop and tablet} */}
      <section className="hidden md:flex w-full h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="images/logo.png" alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">Food Place</p>
        </Link>

        <article className="flex item-center gap-8">
          {/* LISTs */}
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <li className={linkStyle}>Home</li>
            <li className={linkStyle}>Menu</li>
            <li className={linkStyle}>About Us</li>
            <li className={linkStyle}>Services</li>
          </motion.ul>

          {/* CART */}
          <motion.div
            whileTap={{ scale: 0.6 }}
            className="relative cursor-pointer flex items-center "
          >
            <MdShoppingBasket className="text-textColor text-2xl" />
            <div className="w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-1 -right-2">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </motion.div>
          {/* Avatar */}
          <motion.div
            whileTap={{ scale: 0.8 }}
            className="relative w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-md cursor-pointer"
            onClick={Login}
          >
            <img
              src={user ? user?.photoURL : "images/avatar.png"}
              alt="avatar"
              className="rounded-full"
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl flex flex-col rounded-lg absolute px-2 py-3 gap-1 text-textColor hover:text-headingColor top-10 right-0"
              >
                {user?.email === "nkachukwuvictor2016@gmail.com" && (
                  <Link to="/create-item" className={dropdownStyle}>
                    New Item <MdAdd />{" "}
                  </Link>
                )}
                <p className={dropdownStyle}>
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </motion.div>
        </article>
      </section>

      {/* mobile */}
      <section className="flex md:hidden w-full h-full justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src="images/logo.png" alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">Food Place</p>
        </Link>

        <article className="flex item-center gap-5">
          {/* CART */}
          <div className="relative cursor-pointer flex items-center">
            <MdShoppingBasket className="text-textColor text-2xl" />
            <div className="w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-1 -right-2">
              <p className="text-xs text-white font-semibold">2</p>
            </div>
          </div>
          {/* Avatar */}
          <div
            className="relative w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-md cursor-pointer"
            onClick={Login}
          >
            <img
              src={user ? user?.photoURL : "images/avatar.png"}
              alt="avatar"
              className="rounded-full"
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl flex flex-col rounded-lg absolute px-2 py-3 gap-3 text-textColor hover:text-headingColor top-10 right-0"
              >
                {user?.email === "nkachukwuvictor2016@gmail.com" && (
                  <Link to="/create-item" className={dropdownStyle}>
                    New Item <MdAdd />{" "}
                  </Link>
                )}
                {/* LISTs */}
                <ul className=" flex flex-col gap-2">
                  <li className={dropdownStyle}>Home</li>
                  <li className={dropdownStyle}>Menu</li>
                  <li className={dropdownStyle}>About Us</li>
                  <li className={dropdownStyle}>Services</li>
                </ul>
                <p
                  className={`${dropdownStyle} justify-center bg-gray-200 rounded-md`}
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </article>
      </section>
    </header>
  );
};

export default Header;