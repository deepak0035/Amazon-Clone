import Product from "./Product";
import Image from "next/image";

const ProductFeed = ({ products }) => {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-96 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, image, category, rating }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            image={image}
            category={category}
            rating={rating}
          />
        ))}

      <Image
        src="/images/banner.webp"
        className="md:col-span-full"
        width={3000}
        height={1200}
        alt="Carousel"
      />
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, image, category, rating }) => (
            <Product
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              image={image}
              category={category}
              rating={rating}
            />
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, image, category, rating }) => (
          <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            image={image}
            category={category}
            rating={rating}
          />
        ))}
    </div>
  );
};

export default ProductFeed;
