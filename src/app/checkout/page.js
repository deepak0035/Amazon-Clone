"use client";
import React from "react";
import Header from "@/components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "@/slices/basketSlice";
import CheckProduct from "@/components/CheckProduct";
import CurrencyFormat from "react-currency-format";

const CheckOut = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);

  const session  = true;
  return (
    <div className="bg-gray-100">
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto ">
        {/* Banner */}
        <div className="flex-grow m-5 shadow-sm">
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b ">
              {items.length === 0 ? "Shopping Cart is empty" : "Shopping Cart"}
            </h1>
            {items.map((item, i) => (
              <CheckProduct
                key={i}
                id={item.id}
                title={item.title}
                price={item.price}
                description={item.description}
                image={item.image}
                category={item.category}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* ProductFeed */}
        <div className="flex flex-col bg-white my-5 p-10 shadow-sm">
          {items.length > 0 && (
            <>
              <h2 className=" whitespace-nowrap">
                Subtotal ({items.length} items) :
                <span className="ml-1 font-bold">
                  <CurrencyFormat
                    value={total.toFixed(2)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </span>
              </h2>
              <button
                disabled={!session}
                className={`button mt-2 ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to checkout" : "Proceed to checkout"}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default CheckOut;
