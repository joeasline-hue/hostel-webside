import products from "../common/products";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Products = () => {
  return (
    <div className="px-4 md:px-10 py-10 md:py-20 bg-white">

      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold text-blue-900 text-center md:text-left">
        Our Products
      </h1>

      {/* Red Line */}
      <div className="w-20 h-1 bg-red-600 mt-2 mb-8 mx-auto md:mx-0"></div>

      {/* Description */}
      <p className="text-gray-600 mb-12 text-center md:text-left">
        We have maintained a disciplined method of quality control and use
        tested raw materials with international standards.
      </p>

      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={20}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.slug}>
            <Link to={`/products/${product.slug}`}>
              <div className="shadow-lg rounded-lg p-4 bg-white h-full">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-56 object-contain"
                />

                <h2 className="text-xl md:text-2xl font-bold text-blue-900 mt-4">
                  {product.title}
                </h2>

                <div className="w-16 h-1 bg-red-600 mt-2 mb-4"></div>

                <p className="text-gray-600 text-sm md:text-base">
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