"use client";
import React from "react";
import CurrencyFormat from "react-currency-format";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/slices/basketSlice";

const Product = ({
  id,
  title,
  price,
  description,
  image,
  category,
  rating,
}) =>
{
  const dispatch = useDispatch()
  const ratingStar = Math.floor(parseFloat(rating.rate));

  const ratings = Array(ratingStar)
    .fill()
    .map((i) => (
      <div key={i}>
        <StarIcon className={"h-5"} />
      </div>
    ));
  
  const handleAddBasket = () =>
  {
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

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs text-gray-400 italic">
        {category}
      </p>
      <div className="flex justify-center items-center">
        <Image
          src={image}
          width="0"
          height="0"
          sizes="100vw"
          className="w-48 h-52"
          alt={title}
        />
      </div>

      <h4 className="my-3">{title}</h4>

      <div className="flex justify-start items-center">
        <div className="flex text-colorOne mr-1">{ratings}</div>
        <div className="text-sm text-textColor">{rating.count}</div>
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <CurrencyFormat
          value={price}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
      <button onClick={handleAddBasket} className="mt-auto button">Add to Cart</button>
    </div>
  );
};

export default Product;
