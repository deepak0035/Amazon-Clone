"use client";
import { selectItems } from "@/slices/basketSlice";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const session = true;

  const items = useSelector(selectItems);
  return (
    <header>
      {/* top-navBar */}
      <div className="flex items-center justify-between  bg-amazon_blue py-2 px-4 flex-grow h-16">
        <div className=" px-2 flex items-center justify-between flex-grow sm:flex-grow-0">
          <Link href="/">
            <div className="px-2 mt-2">
              <span className="bg-amazon bg-repeat-x logo"></span>
            </div>
          </Link>
          <div className="hidden md:flex text-white items-center text-xs whitespace-nowrap  px-2 leading-10">
            <span className="bg-amazon bg-repeat-x locationIcon"></span>

            <div className="ml-1">
              <p className="text-xs ">Deliver to</p>
              <p className="font-bold text-sm leading-3">Pakistan</p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center h-10 rounded-md flex-grow cursor-pointer  bg-colorTwo hover:bg-colorThree">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4 "
            type="text"
            placeholder="Search Amazon"
          />
          <span className="bg-amazon bg-repeat-x searchIcon"></span>
        </div>

        {/* Right Side Options */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap ">
          <div className="link" onClick={!session ? "signIn" : "signOut"}>
            <p className="text-xs">
              Hello, {session ? `DK` : `Sign Im`}
            </p>
            <p className="font-bold text-sm leading-3">Accounts & Lists</p>
          </div>
          <div className="link">
            <p className="text-xs">Returns</p>
            <p className="font-bold text-sm leading-3">& Orders</p>
          </div>
          <Link href="/checkout">
            <div className="link relative flex items-center ">
              <span className="cartText-position  text-colorOne leading-4 rounded-full text-center text-base font-bold">
                {items.length}
              </span>
              <span className="bg-amazon bg-repeat-x cartIcon"></span>
              <p className="hidden md:inline font-bold text-sm mt-2">Cart</p>
            </div>
          </Link>
        </div>
      </div>

      {/* bottom-navBar */}

      <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
        <p className="link relative flex items-center font-bold justify-center ">
          <span className="bg-amazon bg-repeat-x navIcon mr-1"></span>
          All
        </p>
        <p className="link">
          Today<span>&#39;</span>s Deals
        </p>
        <p className="link">Customer Service</p>
        <p className="link">Registry</p>
        <p className="link hidden md:inline-flex">Gift Cards</p>
        <p className="link hidden md:inline-flex">Sell</p>
      </div>
    </header>
  );
};

export default Header;
