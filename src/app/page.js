import Header from "@/components/Header";
import Banner from "@/components/Banner";
import ProductFeed from "@/components/ProductFeed";

async function getData() {
  const res = await fetch(process.env.PRODUCT_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const page = async () => {
  const products = await getData();

  return (
      <div className="bg-colorBody">
        <Header />
        <main className="max-w-screen-2xl mx-auto">
          {/* Banner */}
          <Banner />

          {/* ProductFeed */}
          <ProductFeed products={products} />
        </main>
      </div>
  );
};

export default page;
