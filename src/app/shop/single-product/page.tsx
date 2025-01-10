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














// import React from 'react';
// import Link from 'next/link';
// import { IoIosArrowForward } from "react-icons/io";
// import SingleHero from '@/app/components/SingleHero';

// const SingleProduct = () => {
//   return (
//     <div>
//       {/* Full-Width Pink Header Section */}
//       <div className="w-full h-[100px] mt-3.5 bg-[#F9F1E7] flex items-center px-6 md:px-8">
//         {/* Home Link Section */}
//         <div className="flex items-center space-x-2">
//           <Link href="/" className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">
//             Home
//           </Link>
//           <IoIosArrowForward className="text-[#000000]" />
//         </div>

//         {/* Shop Link Section */}
//         <div className="flex items-center space-x-2 mx-6">
//           <Link href="/shop" className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">
//             Shop
//           </Link>
//           <IoIosArrowForward className="text-[#000000]" />
//         </div>

//         {/* Gray Vertical Line (Visible on medium screens and above) */}
//         <div className="hidden md:block h-[40px] border-l-[2px] border-[#9F9F9F] mx-4" />

//         {/* Product Name Section */}
//         <div className="flex items-center space-x-2 px-4 py-2">
//           <p className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#000000]">
//             Asgaard sofa
//           </p>
//         </div>
//       </div>

//       {/* Full-Width Gray Border */}
//       <div className="w-full h-[2px] bg-[#9F9F9F]" />

//       {/* SingleHero Component */}
//       <div className="w-full max-w-[1440px] mx-auto mt-4 px-4 md:px-8">
//         <SingleHero />
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;

// import React from 'react';
// import Link from 'next/link';
// import { IoIosArrowForward } from "react-icons/io";
// import SingleHero from '@/app/components/SingleHero';

// const SingleProduct = () => {
//   return (
//     <div>
//       {/* Header Section */}
//       <div className="w-full max-w-[1440px] mx-auto h-[100px] mt-3.5 bg-[#F9F1E7] flex items-center px-6 md:px-8">
//         {/* Home Link Section */}
//         <div className="flex items-center space-x-2">
//           <Link href="/" className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">
//             Home
//           </Link>
//           <IoIosArrowForward className="text-[#000000]" />
//         </div>

//         {/* Shop Link Section */}
//         <div className="flex items-center space-x-2 mx-6">
//           <Link href="/shop" className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">
//             Shop
//           </Link>
//           <IoIosArrowForward className="text-[#000000]" />
//         </div>

//         {/* Gray Vertical Line (Visible on medium screens and above) */}
//         <div className="hidden md:block h-[40px] border-l-[2px] border-[#9F9F9F] mx-4" />

//         {/* Product Name Section */}
//         <div className="flex items-center space-x-2 px-4 py-2">
//           <p className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#000000]">
//             Asgaard sofa
//           </p>
//         </div>
//       </div>

//       {/* SingleHero Component */}
//       <div className="w-full max-w-[1440px] mx-auto mt-4 px-4 md:px-8">
//         <SingleHero />
//       </div>
//     </div>
//   );
// }

// export default SingleProduct;

// import React from 'react'
// import Link from 'next/link'
// import { IoIosArrowForward } from "react-icons/io";
// import SingleHero from '@/app/components/SingleHero';

// const SingleProduct = () => {
//   return (
//     <div>
//     <div className="w-full max-w-[1440px] mx-auto h-[100px] mt-3.5 border-[2px] border-[#9F9F9F] bg-[#F9F1E7] flex items-center px-6 md:px-8">
//       {/* Home Link Section */}
//       <div className="flex items-center space-x-2">
//         <Link href="/" className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">
//           Home
//         </Link>
//         <IoIosArrowForward className="text-[#000000]" />
//       </div>

//       {/* Shop Link Section */}
//       <div className="flex items-center space-x-2 mx-6">
//         <Link href="/shop" className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">
//           Shop
//         </Link>
//         <IoIosArrowForward className="text-[#000000]" />
//       </div>

//       {/* Gray Vertical Line (Visible on medium screens and above) */}
//       <div className="hidden md:block h-[40px] border-l-[2px] border-[#9F9F9F] mx-4" />

//       {/* Product Name Section */}
//       <div className="flex items-center space-x-2 px-4 py-2">
//         <p className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#000000]">
//           Asgaard sofa
//         </p>
//       </div>
//     </div>

//     {/* SingleHero Component */}
//     <SingleHero />
//     </div>
//   );
// }

// export default SingleProduct;

// import React from 'react'
// import Link from 'next/link'
// import { IoIosArrowForward } from "react-icons/io";
// import SingleHero from '@/app/components/SingleHero';

// const SingleProduct = () => {
//   return (
//     <div className="w-full max-w-[1440px] mx-auto h-[100px] top-[114px] border-[2px] border-[#9F9F9F] bg-[#F9F1E7] flex items-center px-6 md:px-8 mt-3.5">
//       {/* Home Link Section */}
//       <div className="flex items-center space-x-2">
//         <Link href="/" className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">
//           Home
//         </Link>
//         <IoIosArrowForward className="text-[#000000]" />
//       </div>

//       {/* Shop Link Section */}
//       <div className="flex items-center space-x-2 mx-6">
//         <Link href="/shop" className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">
//           Shop
//         </Link>
//         <IoIosArrowForward className="text-[#000000]" />
//       </div>

//       {/* Gray Vertical Line */}
//       <div className="hidden md:block h-[40px] border-l-[2px] border-[#9F9F9F] mx-4" />

//       {/* Product Name Section */}
//       <div className="flex items-center space-x-2 px-4 py-2">
//         <p className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#000000]">
//           Asgaard sofa
//         </p>
//       </div>

//       <SingleHero /> </div>
//   );
// }

// export default SingleProduct;

// import React from 'react'
// import Link from 'next/link'
// import { IoIosArrowForward } from "react-icons/io";

// const SingleProduct = () => {
//   return (
//     <div className="w-full mx-auto h-[100px] border-[2px] border-[#9F9F9F] bg-[#F9F1E7] flex items-center px-6 md:px-8">
//       {/* Home Link Section */}
//       <div className="flex items-center space-x-2">
//         <Link href="/" className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">
//           Home
//         </Link>
//         <IoIosArrowForward className="text-[#000000]" />
//       </div>

//       {/* Shop Link Section */}
//       <div className="flex items-center space-x-2 mx-6">
//         <Link href="/shop" className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">
//           Shop
//         </Link>
//         <IoIosArrowForward className="text-[#000000]" />
//       </div>

//       {/* Small Gray Line */}
//       <div className="h-[1px] bg-[#9F9F9F] mx-4 hidden md:block" />

//       {/* Product Name Section */}
//       <div className="flex items-center space-x-2 border-[2px] border-[#9F9F9F] px-4 py-2">
//         <p className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#000000]">
//           Asgaard sofa
//         </p>
//       </div>
//     </div>
//   );
// }

// export default SingleProduct;

// import React from 'react'
// import Link from 'next/link'
// import { IoIosArrowForward } from "react-icons/io";

// const SingleProduct = () => {
//   return (
//     <div className="w-full mx-auto h-[100px] border-[2px] border-[#9F9F9F] bg-[#F9F1E7] flex items-center px-6 md:px-8">
//       {/* Home Link Section */}
//       <div className="flex items-center space-x-2">
//         <Link href="/" className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">
//           Home
//         </Link>
//         <IoIosArrowForward className="text-[#000000]" />
//       </div>

//       {/* Shop Link Section */}
//       <div className="flex items-center space-x-2 mx-6">
//         <Link href="/shop" className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#9F9F9F]">
//           Shop
//         </Link>
//         <IoIosArrowForward className="text-[#000000]" />
//       </div>

//       {/* Product Name Section */}
//       <div className="flex items-center space-x-2 border-[2px] border-[#9F9F9F] px-4 py-2">
//         <p className="font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#000000]">
//           Asgaard sofa
//         </p>
//       </div>
//     </div>
//   );
// }

// export default SingleProduct;

// import React from 'react'
// import Link from 'next/link'
// import { IoIosArrowForward } from "react-icons/io";

// const SingleProduct = () => {
//   return (
//     <div className='w-full max-w-[1440px] mx-auto h-[100px] top-[114px] border-[2px] border-[#9F9F9F] bg-[#F9F1E7] flex items-center px-4'>
//       {/* Home Link Section */}
//       <div className='flex items-center space-x-2'>
//         <Link href="/" className='font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#9F9F9F]'>
//           Home
//         </Link>
//         <IoIosArrowForward className='text-[#000000]' />
//       </div>

//       {/* Shop Link Section */}
//       <div className='flex items-center space-x-2 mx-6'>
//         <Link href="/shop" className='font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#9F9F9F]'>
//           Shop
//         </Link>
//         <IoIosArrowForward className='text-[#000000]' />
//       </div>

//       {/* Product Name Section */}
//       <div className='flex items-center space-x-2 border-[2px] border-[#9F9F9F] px-4 py-2'>
//         <p className='font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#000000]'>
//           Asgaard sofa
//         </p>
//       </div>
//     </div>
//   )
// }

// export default SingleProduct;

// import React from 'react'
// import Link from 'next/link'
// import { IoIosArrowForward } from "react-icons/io";
// const SingleProduct = () => {
//   return (
//     <div className='w-[1440px] h-[100px] top-[114px] border-[2px] border-[#9F9F9F] bg-[#F9F1E7]'>
//       <div className='w-[82px] h-[24px] top-[152px] left-[99px]'>
//       <Link href="/" className='w-[48px] h-[24px] top-[152px] left-[99px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#9F9F9F]'>
// Home
//       </Link>

//       <div className='w-[20px] h-[20px] top-[154px] left-[181px] rotation-[-90 deg]'>
//       <IoIosArrowForward className='w-[14px] h-[8px] top-[3px] left-[14px] rotation-[-90 deg] text-[#000000]'/>
//       </div>

//       </div>

//       <div className='w-[82px] h-[24px] top-[152px] left-[205px]'>
//       <Link href="/shop" className='w-[41px] h-[24px] top-[152px] left-[205px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#9F9F9F]'>
// Shop
//       </Link>

//       <div className='w-[20px] h-[20px] top-[154px] left-[287px] rotation-[-90 deg]'>
//       <IoIosArrowForward className='w-[14px] h-[8px] top-[3px] left-[14px] rotation-[-90 deg] text-[#000000]'/>
//       </div>

//       </div>

//       <div className='w-[142px] h-[37px] top-[145px] left-[312px] border-[2px] border-[#9F9F9F]'>
//         <div className='w-[37px] top-[145px] left-[312px] border-[2px] border-[#9F9F9F] rotation-[-90 deg] align-[center]'></div>
//         <p className='w-[108px] h-[24px] top-[151px] left-[346px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-[#000000]'>
//         Asgaard sofa
//         </p>

//       </div>
//     </div>
//   )
// }

// export default SingleProduct
