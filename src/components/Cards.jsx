import { useState } from "react";
import Card from "./Card";

const Cards = () => {
  let [products, setProducts] = useState([]);
  async function getProducts() {
    try {
      const response = await fetch(`https://fakestoreapi.com/products`);
      if (response.ok) {
        setProducts(await response.json());
        console.log(products);
      } else {
        console.error("404");
      }
    } catch (error) {
      console.error(error);
    }
  }
  getProducts();
  return (
    <>
      <section className="bg-white pb-12 text-gray-700 sm:pb-16 lg:pb-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          {/* <div className="mx-auto max-w-md text-center">
            <h2 className="font-serif text-2xl font-bold sm:text-3xl">
              Our featured Aroma Range
            </h2>
            <p className="mt-4 text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
              faucibus massa dignissim tempus.
            </p>
          </div> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:mt-16 lg:grid-cols-4 gap-6 lg:gap-4 justify-items-center">
            {products.map((product) => (
              <Card key={product.id} productObj={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Cards;
