"use client";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <div className=" relative">
      <div className="absolute w-full h-96	 bg-gradient-to-b from-transparent to-gray-100 bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image
            src="/images/Carousel1.jpg"
            loading="lazy"
            width={3000}
            height={1200}
            alt="Carousel"
          />
        </div>
        <div>
          <Image
            src="/images/Carousel2.jpg"
            loading="lazy"
            width={3000}
            height={1200}
            alt="Carousel"
          />
        </div>
        <div>
          <Image
            src="/images/Carousel3.jpg"
            loading="lazy"
            width={3000}
            height={1200}
            alt="Carousel"
          />
        </div>
        <div>
          <Image
            src="/images/Carousel4.jpg"
            loading="lazy"
            width={3000}
            height={1200}
            alt="Carousel"
          />
        </div>
        <div>
          <Image
            src="/images/Carousel5.jpg"
            loading="lazy"
            width={3000}
            height={1200}
            alt="Carousel"
          />
        </div>
        <div>
          <Image
            src="/images/Carousel6.jpg"
            loading="lazy"
            width={3000}
            height={1200}
            alt="Carousel"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
