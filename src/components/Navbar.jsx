import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FiSearch, FiMenu } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const navbarAnimation = useAnimation();
  const menuItemsAnimation = useAnimation();
  const searchAnimation = useAnimation();

  const [navRef, navInView] = useInView();
  const [menuRef, menuInView] = useInView();
  const [searchRef, searchInView] = useInView();

  const startNavbarAnimation = async () => {
    await navbarAnimation.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });
  };

  const startMenuAnimation = async () => {
    await menuItemsAnimation.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    });
  };

  const startSearchAnimation = async () => {
    await searchAnimation.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    });
    searchRef.current.focus();
  };

  useEffect(() => {
    if (navInView) {
      startNavbarAnimation();
    }
  }, [navInView]);

  useEffect(() => {
    if (menuInView) {
      startMenuAnimation();
    }
  }, [menuInView]);

  useEffect(() => {
    if (showSearch && searchInView) {
      startSearchAnimation();
    }
  }, [showSearch, searchInView]);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <nav className="w-full max-w-[100vw]">
      <motion.nav
        className="w-full lg:flex justify-start items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={navbarAnimation}
        ref={navRef}
      >
        <div className="bg-green-400 w-auto lg:p-2 h-24 text-center flex justify-center items-center rounded-br-lg rounded-b-lg">
          <div className="flex items-center w-full justify-between">
            <motion.h1
              className="text-3xl px-2 lg:text-3xl md:text-2xl sm:text-xl xsm:text-xl font-semibold text-white"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            >
              <NavLink to="/"> BioGarden</NavLink>
            </motion.h1>

            <div className="flex lg:hidden p-3">
              <FiSearch
                className="text-white text-xl cursor-pointer hover:text-green-500 transition duration-300 mx-4 sm:hidden xsm:hidden md:block"
                onClick={toggleSearch}
              />
              <FiMenu
                className="text-white text-xl cursor-pointer hover:text-green-500 transition duration-300"
                onClick={toggleMenu}
              />
            </div>
          </div>
        </div>
        <div className="w-full md:hidden sm:hidden xsm:hidden flex justify-start ml-8 lg:flex items-center">
          <ul className="flex justify-center items-center">
            <motion.li
              className="mx-6 text-2xl cursor-pointer hover:text-green-500 transition duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              <NavLink to="/">Home</NavLink>
            </motion.li>
            <motion.li
              className="mx-6 text-2xl cursor-pointer hover:text-green-500 transition duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              <NavLink to="/about">About</NavLink>
            </motion.li>
            <motion.li
              className="mx-6 text-2xl cursor-pointer hover:text-green-500 transition duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <NavLink to="/product">Product</NavLink>
            </motion.li>
            <motion.li
              className="mx-6 text-2xl cursor-pointer hover:text-green-500 transition duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
            >
              <NavLink to="/industries"> Industries </NavLink>
            </motion.li>
            <motion.li
              className="mx-6 text-2xl cursor-pointer hover:text-green-500 transition duration-300"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
            >
              <NavLink to="/contact">Contact</NavLink>
            </motion.li>
          </ul>
        </div>
        {/* Mobile menu */}
        <motion.div
          className={`${
            showMenu ? "flex" : "hidden"
          } flex-col justify-center items-center w-full lg:hidden h-96 p-4 bg-green-400 text-white absolute z-30`}
          ref={menuRef}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: showMenu ? 1 : 0, y: showMenu ? 0 : -50 }}
          transition={{ duration: 0.5 }}
        >
          <motion.ul
            className="flex flex-col gap-6 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: showMenu ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.li
              className="mx-6 text-2xl tracking-wider cursor-pointer hover:text-green-500 transition duration-300 border-2 border-white p-2 w-36 text-center rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowMenu(false)}
            >
              <NavLink to="/">Home</NavLink>
            </motion.li>
            <motion.li
              className="mx-6 text-2xl cursor-pointer hover:text-green-500 transition duration-300 border-2 border-white p-2 w-36 text-center rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowMenu(false)}
            >
              <NavLink to="/about">About</NavLink>
            </motion.li>
            <motion.li
              className="mx-6 text-2xl cursor-pointer hover:text-green-500 transition duration-300 border-2 border-white p-2 w-36 text-center rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowMenu(false)}
            >
              <NavLink to="/product">Product</NavLink>
            </motion.li>
            <motion.li
              className="mx-6 text-2xl cursor-pointer hover:text-green-500 transition duration-300 border-2 border-white p-2 w-36 text-center rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowMenu(false)}
            >
              Industries
            </motion.li>
            <motion.li
              className="mx-6 text-2xl cursor-pointer hover:text-green-500 transition duration-300 border-2 border-white p-2 w-36 text-center rounded-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowMenu(false)}
            >
              <NavLink to="/contact">Contact</NavLink>
            </motion.li>
          </motion.ul>
        </motion.div>

        <div className=" justify-center items-center p-2 hidden lg:flex"></div>
      </motion.nav>

      <motion.div
        className={`${
          showMenu ? "flex" : "hidden"
        } flex-col justify-center items-center w-full lg:hidden h-96 p-4 bg-green-400 text-white absolute z-30`}
        ref={menuRef}
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: showMenu ? 1 : 0, y: showMenu ? 0 : -100 }}
        transition={{ duration: 0.5 }}
      >
        <motion.ul
          className="flex flex-col gap-6 justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: showMenu ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.li
            className="mx-6 text-2xl tracking-wider cursor-pointer hover:text-green-500 transition duration-300 border-2 border-white p-2 w-36 text-center rounded-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <NavLink to="/" onClick={() => setShowMenu(false)}>
              Home
            </NavLink>
          </motion.li>
          <motion.li
            className="mx-6 text-2xl cursor-pointer hover:text-green-500 transition duration-300 border-2 border-white p-2 w-36 text-center rounded-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
          >
            <NavLink to="/about" onClick={() => setShowMenu(false)}>
              About
            </NavLink>
          </motion.li>
          <motion.li
            className="mx-6 text-2xl cursor-pointer hover:text-green-500 transition duration-300 border-2 border-white p-2 w-36 text-center rounded-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          >
            <NavLink to="/product" onClick={() => setShowMenu(false)}>
              Product
            </NavLink>
          </motion.li>
          <motion.li
            className="mx-6 text-2xl cursor-pointer hover:text-green-500 transition duration-300 border-2 border-white p-2 w-36 text-center rounded-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
            Industries
          </motion.li>
          <motion.li
            className="mx-6 text-2xl cursor-pointer hover:text-green-500 transition duration-300 border-2 border-white p-2 w-36 text-center rounded-lg"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          >
            <NavLink to="/contact" onClick={() => setShowMenu(false)}>
              Contact
            </NavLink>
          </motion.li>
        </motion.ul>
      </motion.div>

      {/* Search */}
      <motion.div
        className={`${
          showSearch ? "lg:flex md:flex" : "hidden"
        } w-full h-20 sm:hidden xsm:hidden justify-center items-center absolute z-20`}
        animate={searchAnimation}
        ref={searchRef}
      >
        <input
          type="text"
          placeholder="Search..."
          className="text-slate-600 text-xl p-2 w-1/2 h-16 bg-slate-100 border-2 border-white rounded-lg mx-auto mt-4 focus:outline-none transition duration-300"
          ref={searchRef}
        />
      </motion.div>
    </nav>
  );
}

export default Navbar;
