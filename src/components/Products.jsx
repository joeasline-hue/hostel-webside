import products from "../common/products";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Products = () => {
  return (
    <div className="px-10 py-20 bg-white">


      {/* Heading */}
      <h1 className="text-5xl font-bold text-blue-900">
        Our Products
      </h1>

      {/* Red Line */}
      <div className="w-20 h-1 bg-red-600 mt-2 mb-8"></div>

      {/* Description */}
      <p className="text-gray-600 mb-12">
        We have maintained a disciplined method of quality control and use
        tested raw materials with international standards.
      </p>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{ delay: 3000 }}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
      >

        {products.map((product) => (
  <SwiperSlide key={product.slug}>
    <Link to={`/products/${product.slug}`}>
      <div className="shadow-lg p-6 rounded-lg">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-60 object-contain"
        />

        <h2 className="text-2xl font-bold text-blue-900 mt-4">
          {product.title}
        </h2>

        <div className="w-16 h-1 bg-red-600 mt-2 mb-4"></div>

        <p className="text-gray-600">
          {product.description}
        </p>
      </div>
    </Link>
  </SwiperSlide>
))}


      </Swiper>

    </div>
  );
};

export default Products;