import React from "react";
import Image from "next/image";
import Link from "next/link";
import Services from "../components/Services";

const Shop = () => {
  return (
    <div className="w-full relative">
      {/* Background Image with Navigation */}
      <div className="relative w-full h-[316px]">
        <Image
          src="/Rectangle 1.jpg"
          alt="Background Image"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="font-[Poppins] font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#000000]">
            Shop
          </h2>
          <div className="flex justify-center items-center gap-4 mt-2">
            <Link
              href="/"
              className="font-[Poppins] font-medium text-sm sm:text-base md:text-lg lg:text-xl text-[#000000]"
            >
              Home
            </Link>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[#000000]">
              &#8594;
            </span>
            <Link
              href="/"
              className="font-[Poppins] font-light text-sm sm:text-base md:text-lg lg:text-xl text-[#000000]"
            >
              Shop
            </Link>
          </div>
        </div>
      </div>

      {/* Pink Container Section */}
      <div className="w-full bg-[#F9F1E7] py-4 px-4 sm:px-8 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4">
        {/* Filter Section */}
        <div className="flex items-center gap-2">
          <Image
            src="/system-uicons--filtering.svg"
            alt="Filter Icon"
            width={24}
            height={24}
            className="object-contain"
          />
          <h3 className="font-[Poppins] font-[400] text-[16px] sm:text-[20px] text-[#000000]">
            Filter
          </h3>
        </div>

        {/* View Options */}
        <div className="flex items-center gap-4">
          <Image
            src="/menu.png"
            alt="Menu Icon"
            width={24}
            height={24}
            className="object-contain"
          />
          <Image
            src="/view-list.png"
            alt="View List Icon"
            width={24}
            height={24}
            className="object-contain"
          />
        </div>

        {/* Results Info */}
        <div className="text-center">
          <p className="font-[Poppins] font-[400] text-[14px] sm:text-[16px] text-[#000000]">
            Showing 1–16 of 32 results
          </p>
        </div>

        {/* Show and Sort Section */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <h3 className="font-[Poppins] font-[400] text-[16px] sm:text-[20px] text-[#000000]">
              Show
            </h3>
            <div className="w-[55px] h-[30px] bg-white flex items-center justify-center">
              <p className="font-[Poppins] font-[400] text-[16px] sm:text-[20px] text-[#9F9F9F]">
                16
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <h3 className="font-[Poppins] font-[400] text-[16px] sm:text-[20px] text-[#000000]">
              Sort by
            </h3>
            <div className="w-[100px] h-[30px] bg-white flex items-center justify-center">
              <p className="font-[Poppins] font-[400] text-[16px] sm:text-[20px] text-[#9F9F9F]">
                Default
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Content Section */}
      <div className="w-full bg-white py-8">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          <div className="w-full flex justify-center items-center">
            <p className="font-[Poppins] font-[400] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[28px] text-[#000000]">
              Explore our wide range of products that suit every need and style.
              Shop now!
            </p>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="w-full bg-white py-8">
        <div className="w-full max-w-screen-xl mx-auto px-4">
          {/* Grid layout for images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8">
            {/* Row 1 */}
            <div className="flex justify-center">
              <Image
                src="/Featured Products.png"
                alt="Product 1"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Featured Products (1).png"
                alt="Product 2"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Featured Products (2).png"
                alt="Product 3"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Featured Products (3).png"
                alt="Product 4"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>

            {/* Row 2 */}
            <div className="flex justify-center">
              <Image
                src="/Featured Products.png"
                alt="Product 5"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Featured Products.jpg"
                alt="Product 6"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Featured Products (2).png"
                alt="Product 7"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Featured Products (3).png"
                alt="Product 8"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>

            {/* Row 3 */}
            <div className="flex justify-center">
              <Image
                src="/Featured Products.png"
                alt="Product 9"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Featured Products.jpg"
                alt="Product 10"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Featured Products (2).png"
                alt="Product 11"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Featured Products (3).png"
                alt="Product 12"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>

            {/* Row 4 */}
            <div className="flex justify-center">
              <Image
                src="/Featured Products.png"
                alt="Product 13"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Featured Products.jpg"
                alt="Product 14"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Featured Products (2).png"
                alt="Product 15"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/Featured Products (3).png"
                alt="Product 16"
                width={285}
                height={446}
                className="object-cover"
              />
            </div>
          </div>

          {/* Pagination Buttons */}
          <div className="flex justify-center gap-4 mt-6">
            <button className="bg-[#B88E2F] text-white py-2 px-4 rounded-lg font-medium">
              1
            </button>
            <button className="bg-[#F9F1E7] text-[#000000] py-2 px-4 rounded-lg font-medium">
              2
            </button>
            <button className="bg-[#F9F1E7] text-[#000000] py-2 px-4 rounded-lg font-medium">
              3
            </button>
            <button className="bg-[#F9F1E7] text-[#000000] py-2 px-4 rounded-lg font-medium">
              Next
            </button>
          </div>
        </div>
      </div>

      <Services />
    </div>
  );
};

export default Shop;

// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Services from "../components/Services";

// const Shop = () => {
//   return (
//     <div className="w-full relative">
//       {/* Responsive Image */}
//       <div className="relative w-full h-[316px]">
//         <Image
//           src="/Rectangle 1.jpg"
//           alt="Background Image"
//           layout="responsive"
//           width={1440}
//           height={316}
//           className="object-cover"
//         />
//       </div>

//       {/* Content Wrapper - Positioned on top of the image */}
//       <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center w-full max-w-screen-xl px-4">
//         <h2 className="font-[Poppins] font-[500] text-[32px] sm:text-[36px] md:text-[40px] lg:text-[48px] xl:text-[56px] leading-[48px] sm:leading-[56px] md:leading-[64px] text-[#000000]">
//           Shop
//         </h2>

//         {/* Navigation Links */}
//         <div className="flex justify-center items-center gap-4 mt-4">
//           <Link
//             href="/"
//             className="font-[Poppins] font-[500] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] text-[#000000]"
//           >
//             Home
//           </Link>

//           <span className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-[500] text-[#000000]">
//             &#8594;
//           </span>

//           <Link
//             href="/"
//             className="font-[Poppins] font-[300] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] text-[#000000]"
//           >
//             Shop
//           </Link>
//         </div>
//       </div>

//       {/* Pink Container Section */}
// <div className="w-full bg-pink-200 py-4 px-4 sm:px-8 flex flex-col sm:flex-row flex-wrap items-center justify-between gap-4">
//   {/* Filter Section */}
//   <div className="flex items-center gap-2">
//     <Image
//       src="/system-uicons--filtering.svg"
//       alt="Filter Icon"
//       width={24}
//       height={24}
//       className="object-contain"
//     />
//     <h3 className="font-[Poppins] font-[400] text-[16px] sm:text-[20px] text-[#000000]">
//       Filter
//     </h3>
//   </div>

//   {/* View Options */}
//   <div className="flex items-center gap-4">
//     <Image
//       src="/menu.png"
//       alt="Menu Icon"
//       width={24}
//       height={24}
//       className="object-contain"
//     />
//     <Image
//       src="/view-list.png"
//       alt="View List Icon"
//       width={24}
//       height={24}
//       className="object-contain"
//     />
//   </div>

//   {/* Results Info */}
//   <div className="text-center">
//     <p className="font-[Poppins] font-[400] text-[14px] sm:text-[16px] text-[#000000]">
//       Showing 1–16 of 32 results
//     </p>
//   </div>

//   {/* Show and Sort Section */}
//   <div className="flex flex-wrap items-center gap-4">
//     <div className="flex items-center gap-2">
//       <h3 className="font-[Poppins] font-[400] text-[16px] sm:text-[20px] text-[#000000]">
//         Show
//       </h3>
//       <div className="w-[55px] h-[30px] bg-white flex items-center justify-center">
//         <p className="font-[Poppins] font-[400] text-[16px] sm:text-[20px] text-[#9F9F9F]">
//           16
//         </p>
//       </div>
//     </div>

//     <div className="flex items-center gap-2">
//       <h3 className="font-[Poppins] font-[400] text-[16px] sm:text-[20px] text-[#000000]">
//         Sort by
//       </h3>
//       <div className="w-[100px] h-[30px] bg-white flex items-center justify-center">
//         <p className="font-[Poppins] font-[400] text-[16px] sm:text-[20px] text-[#9F9F9F]">
//           Default
//         </p>
//       </div>
//     </div>
//   </div>
// </div>

//       {/* Content Section */}
//       <div className="w-full bg-white py-8">
//         <div className="w-full max-w-screen-xl mx-auto px-4">
//           <div className="w-full flex justify-center items-center">
//             <p className="font-[Poppins] font-[400] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[28px] text-[#000000]">
//               Explore our wide range of products that suit every need and style.
//               Shop now!
//             </p>
//           </div>
//         </div>
//       </div>

//  {/* Featured Products Section */}
//        <div className="w-full bg-white py-8">
//         <div className="w-full max-w-screen-xl mx-auto px-4">
//            {/* Grid layout for images */}
//            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
//             {/* Row 1 */}
//              <div className="flex justify-center">
//                <Image
//                 src="/Featured Products.png"
//                 alt="Product 1"
//                 width={285}
//                 height={446}
//                 className="object-cover"
//               />
//             </div>
//             <div className="flex justify-center">
//               <Image
//                 src="/Featured Products (1).png"
//                 alt="Product 2"
//                 width={285}
//                 height={446}
//                 className="object-cover"
//               />
//             </div>
//             <div className="flex justify-center">
//               <Image
//                 src="/Featured Products (2).png"
//                 alt="Product 3"
//                 width={285}
//                 height={446}
//                 className="object-cover"
//               />
//             </div>
//             <div className="flex justify-center">
//               <Image
//                 src="/Featured Products (3).png"
//                 alt="Product 4"
//                 width={285}
//                 height={446}
//                 className="object-cover"
//               />
//             </div>

//             {/* Row 2 */}
//             <div className="flex justify-center">
//               <Image
//                 src="/Featured Products.png"
//                 alt="Product 5"
//                 width={285}
//                 height={446}
//                 className="object-cover"
//               />
//             </div>
//             <div className="flex justify-center">
//               <Image
//                 src="/Featured Products (1).png"
//                 alt="Product 6"
//                 width={285}
//                 height={446}
//                 className="object-cover"
//               />
//             </div>
//             <div className="flex justify-center">
//               <Image
//                 src="/Featured Products (2).png"
//                 alt="Product 7"
//                 width={285}
//                 height={446}
//                 className="object-cover"
//               />
//             </div>
//             <div className="flex justify-center">
//               <Image
//                 src="/Featured Products (3).png"
//                 alt="Product 8"
//                 width={285}
//                 height={446}
//                 className="object-cover"
//               />
//             </div>

//             {/* Row 3 */}
//             <div className="flex justify-center">
//               <Image
//                 src="/Featured Products.png"
//                 alt="Product 9"
//                 width={285}
//                 height={446}
//                 className="object-cover"
//               />
//             </div>
//             <div className="flex justify-center">
//               <Image
//                 src="/Featured Products (1).png"
//                 alt="Product 10"
//                 width={285}
//                 height={446}
//                 className="object-cover"
//               />
//             </div>
//             <div className="flex justify-center">
//               <Image
//                 src="/Featured Products (2).png"
//                 alt="Product 11"
//                 width={285}
//                 height={446}
//                 className="object-cover"
//               />
//             </div>
//             <div className="flex justify-center">
//               <Image
//                 src="/Featured Products (3).png"
//                 alt="Product 12"
//                 width={285}
//                 height={446}
//                 className="object-cover"
//               />
//             </div>

//             {/* Row 4 */}
//             <div className="flex justify-center">
//               <Image
//                 src="/Featured Products.png"
//                 alt="Product 13"
//                 width={285}
//                 height={446}
//                 className="object-cover"
//               />
//             </div>
//             <div className="flex justify-center">
//               <Image
//                 src="/Featured Products (1).png"
//                 alt="Product 14"
//                 width={285}
//                 height={446}
//                 className="object-cover"
//               />
//             </div>
//             <div className="flex justify-center">
//               <Image
//                 src="/Featured Products (2).png"
//                 alt="Product 15"
//                 width={285}
//                 height={446}
//                 className="object-cover"
//               />
//             </div>
//             <div className="flex justify-center">
//               <Image
//                 src="/Featured Products (3).png"
//                 alt="Product 16"
//                 width={285}
//                 height={446}
//                 className="object-cover"
//               />
//             </div>
//           </div>

//           {/* Pagination Buttons */}
//           <div className="flex justify-center gap-4 mt-6">
//             <button className="bg-[#B88E2F] text-white py-2 px-4 rounded-lg font-medium">
//               1
//             </button>
//             <button className="bg-[#F9F1E7] text-[#000000] py-2 px-4 rounded-lg font-medium">
//               2
//             </button>
//             <button className="bg-[#F9F1E7] text-[#000000] py-2 px-4 rounded-lg font-medium">
//               3
//             </button>
//             <button className="bg-[#F9F1E7] text-[#000000] py-2 px-4 rounded-lg font-medium">
//               Next
//             </button>
//           </div>
//         </div>
//       </div>

//       <Services />
//     </div>
//   );
// };

// export default Shop;
