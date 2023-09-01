// local imports
import { productsTitle, productsBtnText, products } from "../data";

import arrowIcon from "../assets/arrow-icon.svg";
import starsIcon from "../assets/stars-icon.svg";
import plusIcon from "../assets/plus-icon.svg";

import FadeIn from "../components/FadeIn";

const Products = () => {
  return (
    <div
      id="products"
      className="flex flex-col 2xl:flex-row gap-[128px] 2xl:gap-2 2xl:justify-between mt-[160px] 2xl:mt-[270px] mb-[160px] max-w-[1490px]
        mx-auto px-10 w-full"
    >
      <FadeIn delay={0.2} direction="right">
        <div className="flex flex-col">
          <h1 className="text-center 2xl:text-start text-fontBlack text-5xl lg:text-[64px] font-medium mb-6">
            {productsTitle}
          </h1>
          <button
            className="flex items-center gap-2 bg-transparent text-fontBlack border-transparent font-bold py-2
              px-4 rounded-lg w-fit border hover:border-black outline-none focus:outline-none ease-linear transition-all duration-350 mx-auto
              2xl:mx-0 mb-10 2xl:mb-0"
          >
            <h5 className="text-lg lg:text-xl text-[#4F4F4F] font-medium">
              {productsBtnText}
            </h5>
            <img src={arrowIcon} alt="" />
          </button>
        </div>
      </FadeIn>

      <div className="w-full flex flex-col md:flex-row gap-[160px] md:gap-6">
        {products.map((product, i) => (
          <FadeIn key={i} delay={(i + 1) * 0.2} direction="left" fullWidth>
            <div className="h-[510px] relative flex-1 bg-[#C1D0E4] rounded-[50px] max-w-[500px]">
              <img
                src={product.img}
                alt=""
                className="absolute -top-[120px] left-1/2 -translate-x-1/2"
              />
              <div className="absolute bottom-0 w-full bg-white h-[260px] rounded-[50px] shadow-md px-8 py-[26px] flex flex-col justify-between">
                <div>
                  <h2 className="mb-2 text-fontBlack text-3xl lg:text-[32px] font-medium">
                    {product.title}
                  </h2>
                  <img src={starsIcon} alt="" />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="text-fontBlack text-2xl lg:text-3xl font-medium">
                    {product.price}
                  </h3>
                  <img
                    src={plusIcon}
                    alt=""
                    className="cursor-pointer h-10 xs:h-12 w-10 xs:w-12"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Products;
