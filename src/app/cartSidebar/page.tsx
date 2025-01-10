import React from "react";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import SingleHero from "@/app/components/SingleHero";

const SingleProduct = () => {
  return (
    <div>
      {/* Full-Width Pink Header Section */}
      <div className="w-full h-[100px] mt-3.5 bg-[#F9F1E7] flex items-center px-6 md:px-8">
        {/* Home Link Section */}
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#9F9F9F]"
          >
            Home
          </Link>
          <IoIosArrowForward className="text-[#000000]" />
        </div>

        {/* Shop Link Section */}
        <div className="flex items-center space-x-2 mx-6">
          <Link
            href="/shop"
            className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#9F9F9F]"
          >
            Shop
          </Link>
          <IoIosArrowForward className="text-[#000000]" />
        </div>

        {/* Product Name Section */}
        <div className="flex items-center space-x-2 px-4 py-2">
          <p className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#000000]">
            Asgaard sofa
          </p>
        </div>
      </div>

      {/* SingleHero Component */}
      <div className="w-full max-w-[1440px] mx-auto mt-4 px-4 md:px-8">
        <SingleHero />
      </div>
    </div>
  );
};

export default SingleProduct;
