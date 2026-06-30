import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import image6 from "../assets/image6.png";
import image7 from "../assets/image7.png";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const slides = [
  {
    image: image1,
    title: "False Ceiling Suspension System (FC)",
    description:
      "The furring system is easy to assemble and used for smooth ceilings with gypsum sheets.",
  },
  {
    image: image2,
    title: "Drywall Partition System (RNR)",
    description:
      "High quality partition systems for modern construction projects.",
  },
  {
    image: image3,
    title: "G.I Lintels",
    description:
      "Durable and reliable steel lintel solutions for buildings.",
  },
  {
    image: image4,
    title: "C Truss Channels",
    description:
      "Strong structural support systems with premium quality.",
  },
  {
    image: image5,
    title: "Corrugated Roofing Sheet",
    description:
      "Weather-resistant roofing sheets with long-lasting performance.",
  },
  {
    image: image6,
    title: "G.I Flat Sheet & PPGI Plain Sheet",
    description:
      "Premium sheets suitable for industrial and commercial applications.",
  },
  {
    image: image7,
    title: "Liner Profile",
    description:
      "Reliable profile solutions designed for modern structures.",
  },
];

const Hero = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      interval={3000}
      showThumbs={false}
      showStatus={false}
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className="bg-blue-900 text-white flex flex-col md:flex-row items-center justify-between px-10 py-16"
        >
          {/* Left Side */}
          <div className="md:w-1/2 text-left">
            <h1 className="text-4xl font-bold mb-4">
              {slide.title}
            </h1>

            <p className="text-lg leading-relaxed mb-6">
              {slide.description}
            </p>

            <button className="bg-red-600 px-6 py-3 rounded-full hover:bg-red-700 transition">
              Read More
            </button>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-[400px] md:w-[500px]"
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Hero;