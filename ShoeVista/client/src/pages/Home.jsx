import React from "react";
import Carousel from "../components/Carousel";
import ShopBy from "../components/ShopBy";
import GenInfo, { Brands, brandData } from "../components/GenInfo";

const Home = () => {
  const bestSellerBrands = brandData.map((brand, index) => {
    const basePrice = 2999 + index * 300;
    return {
      _id: `brand-${brand.name.toLowerCase()}`,
      img: brand.src,
      title: `${brand.name} Best Seller`,
      brand: brand.name,
      sellPrice: basePrice,
      mrp: `₹${basePrice + 400}`,
      discount: 12,
      rating: 4.6,
      reviews: 200 + index * 10,
      category: "men",
    };
  });

  return (
    <div className="max-w-screen-xl xs:w-[95vw] xs:max-w-[95vw] md:w-full mx-auto ">
      <Carousel />
      <GenInfo />
      <Brands />
      <div className="md:w-full md:max-w-full xs:mx-2  sm:mx-auto ">
        <div className="prose prose-2xl">
          <ShopBy title="Best Sellers" filter="bestSellers" manualProducts={bestSellerBrands} />
        </div>
        <div className="prose prose-2xl">
          <ShopBy title="Top Rated" filter="topRated" />
        </div>
      </div>
    </div>
  );
};

export default Home;
