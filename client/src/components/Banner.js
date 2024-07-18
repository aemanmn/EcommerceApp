import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    "https://img.freepik.com/free-vector/horizontal-sale-banner-template_23-2148897328.jpg?t=st=1720940681~exp=1720944281~hmac=270544354511572d496c2a1b752928447a5dfdda637bf6bb4038bda99b5bc491&w=826",
    "https://img.freepik.com/free-psd/fashion-template-design_23-2150658207.jpg?w=826&t=st=1720940772~exp=1720941372~hmac=63a02d2783105e71e933111b4df30027623c9bf9532ae84b4f2ff1c222cf5487",
    "https://img.freepik.com/free-vector/fashion-template-design_23-2150368863.jpg?t=st=1720940758~exp=1720944358~hmac=1cce6433c6647b05cb31ef21c7e4deffef1447db5b960af5c9d93e7cd9e47901&w=826",
    "https://img.freepik.com/free-vector/flat-geometric-music-youtube-thumbnail-template_23-2148917471.jpg?w=826&t=st=1720941058~exp=1720941658~hmac=2a1e948f97dab9deee6db2528a2e0234bacb7b3f858052b0f0b64a63f46b0d14",
  ];
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="h-[650px] w-screen relative md:h-[500px] lg:h-[600px] xl:h-[700px]">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt="ImageOne"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="ImageTwo"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="ImageThree"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[3]}
            alt="ImageFour"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-52 md:bottom-40 lg:bottom-52 xl:bottom-64">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;