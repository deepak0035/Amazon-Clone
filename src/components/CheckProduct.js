"use client";
import React from "react";
import CurrencyFormat from "react-currency-format";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "@/slices/basketSlice";

const CheckProduct = ({
  id,
  title,
  price,
  description,
  image,
  category,
  rating,
}) => {
  const dispatch = useDispatch();
  const ratingStar = Math.floor(parseFloat(rating.rate));

  const ratings = Array(ratingStar)
    .fill()
    .map((i) => (
      <div key={i}>
        <StarIcon className={"h-5"} />
      </div>
    ));

  const handleAddProduct = () => {
    const product = {
      id,
      title,
      price,
      description,
      image,
      category,
      rating,
    };
    dispatch(addToBasket(product));
  };

    const handleRemoveProduct = () => {
      dispatch(removeFromBasket({id}));
    };

  return (
    <div className="grid grid-cols-5">
      <Image
        src={image}
        width={200}
        height={200}
        objectFit="contain"
        alt={title}
      />
      <div className="col-span-3 mx-5">
        <h4 className="mt-2">{title}</h4>
        <p className="mb-2 text-sm text-gray-500">{category}</p>
        <div className="flex justify-start items-center">
          <div className="flex text-colorOne mr-1">{ratings}</div>
          <div className="text-sm text-textColor">{rating.count}</div>
        </div>

        <p className="text-xs my-2 line-clamp-2 text-gray-700">{description}</p>
        <div className="mb-5">
          <CurrencyFormat
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
        </div>
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={handleAddProduct} className=" button">
          Add Product
        </button>

        <button onClick={handleRemoveProduct} className=" button">
          Remove Product
        </button>
      </div>
    </div>
  );
};

export default CheckProduct;
