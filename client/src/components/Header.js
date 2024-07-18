import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartImg, logoDark } from "../assets/index";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="w-full h-20 bg-white font-titleFont border-b border-gray-800 sticky top-0 z-50 lg:h-16 xl:h-14">
      <div className="max-w-screen-xl h-full mx-auto flex items-center justify-between">
        <Link to="/">
          <div className="md:w-24 lg:w-20 xl:w-18">
            <img className="w-20 md:w-24 lg:w-20 xl:w-18" src={logoDark} alt="logoDark" />
          </div>
        </Link>
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <Link to="/">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
            </Link>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Collection
            </li>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <Link to="/">
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Contact
            </li>
            </Link>
            <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-6 md:w-8 lg:w-6 xl:w-6" src={cartImg} alt="cartImg" />
              <span className="absolute w-6 md:w-8 lg:w-6 xl:w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">
                {productData.length}
              </span>
            </div>
          </Link>

          <Link to="/login">
            <img
              className="w-8 h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 xl:w-8 xl:h-8 rounded-full"
              src={
                userInfo
                  ? userInfo.image
                  : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="userLogo"
            />
          </Link>

          {userInfo && (
            <p className="text-base font-titleFont font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
        </div>
        <div className="lg:hidden flex items-center gap-4">
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
          {menuOpen && (
            <div className="absolute top-20 right-0 w-48 bg-white shadow-md py-4 p-6">
              <ul className="flex flex-col gap-4">
                <Link to="/">
                  <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    Home
                  </li>
                </Link>
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Collection
                </li>
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Shop
                </li>
                <Link to="/">
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Contact
                </li>
                </Link>
                <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                  Blog
                </li>
                <Link to="/cart">
            <div className="relative">
              <img className="w-6 md:w-8 lg:w-6 xl:w-6" src={cartImg} alt="cartImg" />
              <span className="absolute w-6 md:w-8 lg:w-6 xl:w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold font-titleFont">
                {productData.length}
              </span>
            </div>
          </Link>

          <Link to="/login">
            <img
              className="w-8 h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 xl:w-8 xl:h-8 rounded-full"
              src={
                userInfo
                  ? userInfo.image
                  : "https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              }
              alt="userLogo"
            />
          </Link>

          {userInfo && (
            <p className="text-base font-titleFont font-semibold underline underline-offset-2">
              {userInfo.name}
            </p>
          )}
        
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;