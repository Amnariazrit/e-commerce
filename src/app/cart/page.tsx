"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Services from "../components/Services";

export default function Cart() {
  const [quantity, setQuantity] = useState(1);
  const productPrice = 250000;
  const subtotal = productPrice * quantity;

  const handleQuantityChange = (e:any) => {
    const value = Math.max(1, parseInt(e.target.value) || 1); // Ensure at least 1
    setQuantity(value);
  };

  return (
    <div className="bg-white min-h-screen">
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
          <Image
            src="/Meubel House_Logos-05.png"
            alt="logo"
            width={40}
            height={40}
            className="mb-2"
          />
          <h2 className="font-[Poppins] font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#000000]">
            Cart
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
              Cart
            </Link>
          </div>
        </div>
      </div>

      {/* Main Cart Section */}
      <div className="flex justify-center p-4 mt-8">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Cart Items Section */}
            <div className="flex-1">
              {/* Header Row */}
              <div className="grid grid-cols-12 bg-[#F9F1E7] p-4 font-bold rounded-t-lg text-sm md:text-base">
                <div className="col-span-6 lg:col-span-6">Product</div>
                <div className="col-span-2 lg:col-span-2 text-center">
                  Price
                </div>
                <div className="col-span-2 lg:col-span-2 text-center">
                  Quantity
                </div>
                <div className="col-span-2 lg:col-span-2 text-center">
                  Subtotal
                </div>
              </div>

              {/* Product Row */}
              <div className="grid grid-cols-12 items-center border-b p-4 text-sm md:text-base">
                <div className="col-span-6 flex items-center gap-4">
                  <Image
                    src="/Asgaard sofa 5.jpg"
                    alt="Asgaard Sofa"
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <span>Asgaard Sofa</span>
                </div>
                <div className="col-span-2 text-center">
                  Rs. {productPrice.toLocaleString()}
                </div>
                <div className="col-span-2 text-center">
                  <input
                    type="number"
                    value={quantity}
                    onChange={handleQuantityChange}
                    className="w-16 p-2 border rounded text-center"
                    min="1"
                  />
                </div>
                <div className="col-span-2 text-center">
                  Rs. {subtotal.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Cart Totals Section */}
            <div className="w-full lg:w-1/3">
              <div className="bg-[#F9F1E7] rounded-lg shadow p-6">
                <h3 className="text-lg font-bold mb-4">Cart Totals</h3>
                <div className="flex justify-between mb-2 text-sm md:text-base">
                  <span>Subtotal:</span>
                  <span>Rs. {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-4 font-bold text-sm md:text-base">
                  <span>Total:</span>
                  <span className="text-[#B88E2F]">
                    Rs. {subtotal.toLocaleString()}
                  </span>
                </div>
                <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm md:text-base">
                  Check Out
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Services />
    </div>
  );
}

























// 'use client';
// import Image from "next/image";
// import { useState } from "react";
// import Link from "next/link";

// export default function Cart() {
//   const [quantity, setQuantity] = useState(1);
//   const productPrice = 250000;
//   const subtotal = productPrice * quantity;

//   const handleQuantityChange = (e) => {
//     const value = Math.max(1, parseInt(e.target.value) || 1); // Ensure at least 1
//     setQuantity(value);
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Background Image with Navigation */}
//       <div className="relative w-full h-[316px]">
//         <Image
//           src="/Rectangle 1.jpg"
//           alt="Background Image"
//           layout="fill"
//           objectFit="cover"
//           priority
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <div className="flex items-center gap-2 mb-2">
//             <Image src="/Meubel House_Logos-05.png" alt="logo" width={30} height={30} />
//             <h2 className="font-[Poppins] font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#000000]">
//               Cart
//             </h2>
//           </div>
//           <div className="flex justify-center items-center gap-4 mt-2">
//             <Link
//               href="/"
//               className="font-[Poppins] font-medium text-sm sm:text-base md:text-lg lg:text-xl text-[#000000]"
//             >
//               Home
//             </Link>
//             <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[#000000]">
//               &#8594;
//             </span>
//             <Link
//               href="/"
//               className="font-[Poppins] font-light text-sm sm:text-base md:text-lg lg:text-xl text-[#000000]"
//             >
//               Cart
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Main Cart Section */}
//       <div className="flex justify-center p-4 mt-8">
//         <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
//           <div className="flex flex-col lg:flex-row gap-6">
//             {/* Cart Items Section */}
//             <div className="flex-1">
//               {/* Header Row */}
//               <div className="grid grid-cols-12 bg-[#F9F1E7] p-4 font-bold rounded-t-lg text-sm md:text-base">
//                 <div className="col-span-6 lg:col-span-6">Product</div>
//                 <div className="col-span-2 lg:col-span-2 text-center">Price</div>
//                 <div className="col-span-2 lg:col-span-2 text-center">Quantity</div>
//                 <div className="col-span-2 lg:col-span-2 text-center">Subtotal</div>
//               </div>

//               {/* Product Row */}
//               <div className="grid grid-cols-12 items-center border-b p-4 text-sm md:text-base">
//                 <div className="col-span-6 flex items-center gap-4">
//                   <Image
//                     src="/Asgaard sofa 5.jpg"
//                     alt="Asgaard Sofa"
//                     width={80}
//                     height={80}
//                     className="rounded-lg"
//                   />
//                   <span>Asgaard Sofa</span>
//                 </div>
//                 <div className="col-span-2 text-center">Rs. {productPrice.toLocaleString()}</div>
//                 <div className="col-span-2 text-center">
//                   <input
//                     type="number"
//                     value={quantity}
//                     onChange={handleQuantityChange}
//                     className="w-16 p-2 border rounded text-center"
//                     min="1"
//                   />
//                 </div>
//                 <div className="col-span-2 text-center">Rs. {subtotal.toLocaleString()}</div>
//               </div>
//             </div>

//             {/* Cart Totals Section */}
//             <div className="w-full lg:w-1/3">
//               <div className="bg-[#F9F1E7] rounded-lg shadow p-6">
//                 <h3 className="text-lg font-bold mb-4">Cart Totals</h3>
//                 <div className="flex justify-between mb-2 text-sm md:text-base">
//                   <span>Subtotal:</span>
//                   <span>Rs. {subtotal.toLocaleString()}</span>
//                 </div>
//                 <div className="flex justify-between mb-4 text-lg font-bold text-sm md:text-base">
//                   <span>Total:</span>
//                   <span className="text-[#B88E2F]">Rs. {subtotal.toLocaleString()}</span>
//                 </div>
//                 <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm md:text-base">
//                   Check Out
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client';
// import Image from "next/image";
// import { useState } from "react";
// import Link from "next/link";

// export default function Cart() {
//   const [quantity, setQuantity] = useState(1);
//   const productPrice = 250000;
//   const subtotal = productPrice * quantity;

//   const handleQuantityChange = (e) => {
//     const value = Math.max(1, parseInt(e.target.value) || 1); // Ensure at least 1
//     setQuantity(value);
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Background Image with Navigation */}
//       <div className="relative w-full h-[316px]">
//         <Image
//           src="/Rectangle 1.jpg"
//           alt="Background Image"
//           layout="fill"
//           objectFit="cover"
//           priority
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center">

//         <div className="flex items-center gap-2">
//         <Image src="/Meubel House_Logos-05.png" alt="logo" width={20} height={20} />
//           <h2 className="font-[Poppins] font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#000000]">
//             Cart
//           </h2></div>
//           <div className="flex justify-center items-center gap-4 mt-4">
//             <Link
//               href="/"
//               className="font-[Poppins] font-medium text-sm sm:text-base md:text-lg lg:text-xl text-[#000000]"
//             >
//               Home
//             </Link>
//             <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[#000000]">
//               &#8594;
//             </span>

//               <Link
//                 href="/"
//                 className="font-[Poppins] font-light text-sm sm:text-base md:text-lg lg:text-xl text-[#000000]"
//               >
//                 Cart
//               </Link>

//           </div>
//         </div>
//       </div>

//       {/* Main Cart Section */}
//       <div className="flex justify-center p-4 mt-8">
//         <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
//           <div className="flex flex-col lg:flex-row gap-6">
//             {/* Cart Items Section */}
//             <div className="flex-1">
//               {/* Header Row */}
//               <div className="grid grid-cols-12 bg-[#F9F1E7] p-4 font-bold rounded-t-lg text-sm md:text-base">
//                 <div className="col-span-6 lg:col-span-6">Product</div>
//                 <div className="col-span-2 lg:col-span-2 text-center">Price</div>
//                 <div className="col-span-2 lg:col-span-2 text-center">Quantity</div>
//                 <div className="col-span-2 lg:col-span-2 text-center">Subtotal</div>
//               </div>

//               {/* Product Row */}
//               <div className="grid grid-cols-12 items-center border-b p-4 text-sm md:text-base">
//                 <div className="col-span-6 flex items-center gap-4">
//                   <Image
//                     src="/Asgaard sofa 5.jpg"
//                     alt="Asgaard Sofa"
//                     width={80}
//                     height={80}
//                     className="rounded-lg"
//                   />
//                   <span>Asgaard Sofa</span>
//                 </div>
//                 <div className="col-span-2 text-center">Rs. {productPrice.toLocaleString()}</div>
//                 <div className="col-span-2 text-center">
//                   <input
//                     type="number"
//                     value={quantity}
//                     onChange={handleQuantityChange}
//                     className="w-16 p-2 border rounded text-center"
//                     min="1"
//                   />
//                 </div>
//                 <div className="col-span-2 text-center">Rs. {subtotal.toLocaleString()}</div>
//               </div>
//             </div>

//             {/* Cart Totals Section */}
//             <div className="w-full lg:w-1/3">
//               <div className="bg-[#F9F1E7] rounded-lg shadow p-6">
//                 <h3 className="text-lg font-bold mb-4">Cart Totals</h3>
//                 <div className="flex justify-between mb-2 text-sm md:text-base">
//                   <span>Subtotal:</span>
//                   <span>Rs. {subtotal.toLocaleString()}</span>
//                 </div>
//                 <div className="flex justify-between mb-4 text-lg font-bold text-sm md:text-base">
//                   <span>Total:</span>
//                   <span className="text-[#B88E2F]">Rs. {subtotal.toLocaleString()}</span>
//                 </div>
//                 <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm md:text-base">
//                   Check Out
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client';
// import Image from "next/image";
// import { useState } from "react";
// import Link from "next/link";

// export default function Cart() {
//   const [quantity, setQuantity] = useState(1);
//   const productPrice = 250000;
//   const subtotal = productPrice * quantity;

//   const handleQuantityChange = (e) => {
//     const value = Math.max(1, parseInt(e.target.value) || 1); // Ensure at least 1
//     setQuantity(value);
//   };

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       {/* Background Image */}
//       <div className="relative w-full h-[316px]">
//         <Image
//           src="/Rectangle 1.jpg"
//           alt="Background Image"
//           layout="fill"
//           objectFit="cover"
//           priority
//         />
//       </div>

//       {/* Navigation Links */}
//       <div className="flex flex-col items-center mt-4">
//         <h2 className="font-[Poppins] font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#000000]">
//           Shop
//         </h2>
//         <div className="flex justify-center items-center gap-4 mt-4">
//           <Link
//             href="/"
//             className="font-[Poppins] font-medium text-sm sm:text-base md:text-lg lg:text-xl text-[#000000]"
//           >
//             Home
//           </Link>
//           <span className="text-sm sm:text-base md:text-lg lg:text-xl font-medium text-[#000000]">
//             &#8594;
//           </span>
//           <div className="flex items-center gap-2">
//             <Image src="/Meubel House_Logos-05.png" alt="logo" width={20} height={20} />
//             <Link
//               href="/"
//               className="font-[Poppins] font-light text-sm sm:text-base md:text-lg lg:text-xl text-[#000000]"
//             >
//               Cart
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Main Cart Section */}
//       <div className="flex justify-center p-4 mt-8">
//         <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
//           <div className="flex flex-col lg:flex-row gap-6">
//             {/* Cart Items Section */}
//             <div className="flex-1">
//               {/* Header Row */}
//               <div className="grid grid-cols-12 bg-[#F9F1E7] p-4 font-bold rounded-t-lg text-sm md:text-base">
//                 <div className="col-span-6 lg:col-span-6">Product</div>
//                 <div className="col-span-2 lg:col-span-2 text-center">Price</div>
//                 <div className="col-span-2 lg:col-span-2 text-center">Quantity</div>
//                 <div className="col-span-2 lg:col-span-2 text-center">Subtotal</div>
//               </div>

//               {/* Product Row */}
//               <div className="grid grid-cols-12 items-center border-b p-4 text-sm md:text-base">
//                 <div className="col-span-6 flex items-center gap-4">
//                   <Image
//                     src="/Asgaard sofa 5.jpg"
//                     alt="Asgaard Sofa"
//                     width={80}
//                     height={80}
//                     className="rounded-lg"
//                   />
//                   <span>Asgaard Sofa</span>
//                 </div>
//                 <div className="col-span-2 text-center">Rs. {productPrice.toLocaleString()}</div>
//                 <div className="col-span-2 text-center">
//                   <input
//                     type="number"
//                     value={quantity}
//                     onChange={handleQuantityChange}
//                     className="w-16 p-2 border rounded text-center"
//                     min="1"
//                   />
//                 </div>
//                 <div className="col-span-2 text-center">Rs. {subtotal.toLocaleString()}</div>
//               </div>
//             </div>

//             {/* Cart Totals Section */}
//             <div className="w-full lg:w-1/3">
//               <div className="bg-[#F9F1E7] rounded-lg shadow p-6">
//                 <h3 className="text-lg font-bold mb-4">Cart Totals</h3>
//                 <div className="flex justify-between mb-2 text-sm md:text-base">
//                   <span>Subtotal:</span>
//                   <span>Rs. {subtotal.toLocaleString()}</span>
//                 </div>
//                 <div className="flex justify-between mb-4 text-lg font-bold text-sm md:text-base">
//                   <span>Total:</span>
//                   <span className="text-[#B88E2F]">Rs. {subtotal.toLocaleString()}</span>
//                 </div>
//                 <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm md:text-base">
//                   Check Out
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client'
// import Image from "next/image";
// import { useState } from "react";
// import Link from "next/link";

// export default function Cart() {
//   const [quantity, setQuantity] = useState(1);
//   const productPrice = 250000;
//   const subtotal = productPrice * quantity;

//   const handleQuantityChange = (e) => {
//     const value = Math.max(1, parseInt(e.target.value) || 1); // Ensure at least 1
//     setQuantity(value);
//   };

//   return (
//     <div className="flex justify-center bg-gray-50 min-h-screen p-4">
//   <div className="relative w-full h-[316px]">
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
// <div>
//   <Image src="/Meubel House_Logos-05.png" alt="logo" width={6} height={6} />
//           <Link
//             href="/"
//             className="font-[Poppins] font-[300] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[24px] text-[#000000]"
//           >
//             Cart
//           </Link></div>
//         </div>
//       </div>

//       {/* Main White Container */}
//       <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Cart Items Section */}
//           <div className="flex-1">
//             {/* Header Row */}
//             <div className="grid grid-cols-12 bg-[#F9F1E7] p-4 font-bold rounded-t-lg text-sm md:text-base">
//               <div className="col-span-6 lg:col-span-6">Product</div>
//               <div className="col-span-2 lg:col-span-2 text-center">Price</div>
//               <div className="col-span-2 lg:col-span-2 text-center">Quantity</div>
//               <div className="col-span-2 lg:col-span-2 text-center">Subtotal</div>
//             </div>

//             {/* Product Row */}
//             <div className="grid grid-cols-12 items-center border-b p-4 text-sm md:text-base">
//               <div className="col-span-6 flex items-center gap-4">
//                 <Image
//                   src="/Asgaard sofa 5.jpg"
//                   alt="Asgaard Sofa"
//                   width={80}
//                   height={80}
//                   className="rounded-lg"
//                 />
//                 <span>Asgaard Sofa</span>
//               </div>
//               <div className="col-span-2 text-center">Rs. {productPrice.toLocaleString()}</div>
//               <div className="col-span-2 text-center">
//                 <input
//                   type="number"
//                   value={quantity}
//                   onChange={handleQuantityChange}
//                   className="w-16 p-2 border rounded text-center"
//                   min="1"
//                 />
//               </div>
//               <div className="col-span-2 text-center">Rs. {subtotal.toLocaleString()}</div>
//             </div>
//           </div>

//           {/* Cart Totals Section */}
//           <div className="w-full lg:w-1/3">
//             <div className="bg-[#F9F1E7] rounded-lg shadow p-6">
//               <h3 className="text-lg font-bold mb-4">Cart Totals</h3>
//               <div className="flex justify-between mb-2 text-sm md:text-base">
//                 <span>Subtotal:</span>
//                 <span>Rs. {subtotal.toLocaleString()}</span>
//               </div>
//               <div className="flex justify-between mb-4 text-lg font-bold text-sm md:text-base">
//                 <span>Total:</span>
//                 <span className="text-[#B88E2F]">Rs. {subtotal.toLocaleString()}</span>
//               </div>
//               <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm md:text-base">
//                 Check Out
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client'
// import Image from "next/image";
// import { useState } from "react";

// export default function Cart() {
//   const [quantity, setQuantity] = useState(1);
//   const productPrice = 250000;
//   const subtotal = productPrice * quantity;

//   const handleQuantityChange = (e) => {
//     const value = Math.max(1, parseInt(e.target.value) || 1); // Ensure at least 1
//     setQuantity(value);
//   };

//   return (
//     <div className="flex justify-center bg-gray-50 min-h-screen p-4">
//       {/* Main White Container */}
//       <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Cart Items Section */}
//           <div className="flex-1">
//             {/* Header Row */}
//             <div className="flex bg-[#F9F1E7] p-4 font-bold rounded-t-lg text-sm md:text-base">
//               <div className="flex-1">Product</div>
//               <div className="w-1/4 text-center">Price</div>
//               <div className="w-1/4 text-center">Quantity</div>
//               <div className="w-1/4 text-center">Subtotal</div>
//               <div className="w-1/12"></div>
//             </div>

//             {/* Product Row */}
//             <div className="flex items-center border-b p-4 text-sm md:text-base">
//               <div className="flex-1 flex items-center gap-4">
//                 <Image
//                   src="/Asgaard sofa 5.jpg"
//                   alt="Asgaard Sofa"
//                   width={80}
//                   height={80}
//                   className="rounded-lg"
//                 />
//                 <span>Asgaard Sofa</span>
//               </div>
//               <div className="w-1/4 text-center">Rs. {productPrice.toLocaleString()}</div>
//               <div className="w-1/4 text-center">
//                 <input
//                   type="number"
//                   value={quantity}
//                   onChange={handleQuantityChange}
//                   className="w-16 p-2 border rounded text-center"
//                   min="1"
//                 />
//               </div>
//               <div className="w-1/4 text-center">Rs. {subtotal.toLocaleString()}</div>
//               <div className="w-1/12 text-red-500 cursor-pointer text-xl md:text-2xl">
//                 🗑️
//               </div>
//             </div>
//           </div>

//           {/* Cart Totals Section */}
//           <div className="w-full lg:w-1/3">
//             <div className="bg-[#F9F1E7] rounded-lg shadow p-6">
//               <h3 className="text-lg font-bold mb-4">Cart Totals</h3>
//               <div className="flex justify-between mb-2 text-sm md:text-base">
//                 <span>Subtotal:</span>
//                 <span>Rs. {subtotal.toLocaleString()}</span>
//               </div>
//               <div className="flex justify-between mb-4 text-lg font-bold text-sm md:text-base">
//                 <span>Total:</span>
//                 <span className="text-[#B88E2F]">Rs. {subtotal.toLocaleString()}</span>
//               </div>
//               <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition text-sm md:text-base">
//                 Check Out
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import Image from "next/image";

// export default function Cart() {
//   return (
//     <div className="flex justify-center bg-gray-50 min-h-screen p-4">
//       {/* Main White Container */}
//       <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Cart Items Section */}
//           <div className="flex-1">
//             {/* Header Row */}
//             <div className="flex bg-[#F9F1E7] p-4 font-bold rounded-t-lg">
//               <div className="flex-1">Product</div>
//               <div className="w-1/4">Price</div>
//               <div className="w-1/4">Quantity</div>
//               <div className="w-1/4">Subtotal</div>
//               <div className="w-1/12"></div>
//             </div>

//             {/* Product Row */}
//             <div className="flex items-center border-b p-4">
//               <div className="flex-1 flex items-center gap-4">
//                 <Image
//                   src="/Asgaard sofa 5.png"
//                   alt="Asgaard Sofa"
//                   width={80}
//                   height={80}
//                   className="rounded-lg"
//                 />
//                 <span className="text-sm lg:text-base">Asgaard Sofa</span>
//               </div>
//               <div className="w-1/4 text-sm lg:text-base">Rs. 250,000.00</div>
//               <div className="w-1/4">
//                 <input
//                   type="number"
//                   defaultValue="1"
//                   className="w-16 p-2 border rounded text-sm lg:text-base"
//                 />
//               </div>
//               <div className="w-1/4 text-sm lg:text-base">Rs. 250,000.00</div>
//               <div className="w-1/12 text-red-500 cursor-pointer text-xl lg:text-2xl">🗑️</div>
//             </div>
//           </div>

//           {/* Cart Totals Section */}
//           <div className="w-full lg:w-1/3">
//             <div className="bg-[#F9F1E7] rounded-lg shadow p-6">
//               <h3 className="text-lg font-bold mb-4">Cart Totals</h3>
//               <div className="flex justify-between mb-2">
//                 <span className="text-sm lg:text-base">Subtotal:</span>
//                 <span className="text-sm lg:text-base">Rs. 250,000.00</span>
//               </div>
//               <div className="flex justify-between mb-4">
//                 <span className="font-bold text-lg text-sm lg:text-base">Total:</span>
//                 <span className="font-bold text-lg text-[#B88E2F] text-sm lg:text-base">
//                   Rs. 250,000.00
//                 </span>
//               </div>
//               <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 text-sm lg:text-base">
//                 Check Out
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import Image from "next/image";

// export default function Cart() {
//   return (
//     <div className="flex justify-center bg-gray-50 min-h-screen p-4">
//       {/* Main White Container */}
//       <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Cart Items Section */}
//           <div className="flex-1">
//             {/* Header Row */}
//             <div className="flex bg-[#F9F1E7] p-4 font-bold rounded-t-lg">
//               <div className="flex-1">Product</div>
//               <div className="w-1/4">Price</div>
//               <div className="w-1/4">Quantity</div>
//               <div className="w-1/4">Subtotal</div>
//               <div className="w-1/12"></div>
//             </div>

//             {/* Product Row */}
//             <div className="flex items-center border-b p-4">
//               <div className="flex-1 flex items-center gap-4">
//                 <Image
//                   src="/Asgaard sofa 5.png"
//                   alt="Asgaard Sofa"
//                   width={80}
//                   height={80}
//                   className="rounded-lg"
//                 />
//                 <span>Asgaard Sofa</span>
//               </div>
//               <div className="w-1/4">Rs. 250,000.00</div>
//               <div className="w-1/4">
//                 <input
//                   type="number"
//                   defaultValue="1"
//                   className="w-16 p-2 border rounded"
//                 />
//               </div>
//               <div className="w-1/4">Rs. 250,000.00</div>
//               <div className="w-1/12 text-red-500 cursor-pointer">🗑️</div>
//             </div>
//           </div>

//           {/* Cart Totals Section */}
//           <div className="w-full lg:w-1/3">
//             <div className="bg-[#F9F1E7] rounded-lg shadow p-6">
//               <h3 className="text-lg font-bold mb-4">Cart Totals</h3>
//               <div className="flex justify-between mb-2">
//                 <span>Subtotal:</span>
//                 <span>Rs. 250,000.00</span>
//               </div>
//               <div className="flex justify-between mb-4">
//                 <span>Total:</span>
//                 <span className="font-bold text-lg text-[#B88E2F]">
//                   Rs. 250,000.00
//                 </span>
//               </div>
//               <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800">
//                 Check Out
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import Image from "next/image";

// export default function Cart() {
//   return (
//     <div className="flex justify-center bg-gray-50 min-h-screen p-4">
//       {/* Main White Container */}
//       <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
//         <div className="flex flex-wrap gap-6">
//           {/* Cart Items Section */}
//           <div className="flex-1">
//             {/* Header Row */}
//             <div className="flex bg-[#F9F1E7] p-4 font-bold rounded-t-lg">
//               <div className="flex-1">Product</div>
//               <div className="w-1/4">Price</div>
//               <div className="w-1/4">Quantity</div>
//               <div className="w-1/4">Subtotal</div>
//               <div className="w-1/12"></div>
//             </div>

//             {/* Product Row */}
//             <div className="flex items-center border-b p-4">
//               <div className="flex-1 flex items-center gap-4">
//                 <Image
//                   src="/Asgaard sofa 5.png"
//                   alt="Asgaard Sofa"
//                   width={80}
//                   height={80}
//                   className="rounded-lg"
//                 />
//                 <span>Asgaard Sofa</span>
//               </div>
//               <div className="w-1/4">Rs. 250,000.00</div>
//               <div className="w-1/4">
//                 <input
//                   type="number"
//                   defaultValue="1"
//                   className="w-16 p-2 border rounded"
//                 />
//               </div>
//               <div className="w-1/4">Rs. 250,000.00</div>
//               <div className="w-1/12 text-red-500 cursor-pointer">🗑️</div>
//             </div>
//           </div>

//           {/* Cart Totals Section */}
//           <div className="w-full lg:w-1/3">
//             <div className="bg-[#F9F1E7] rounded-lg shadow p-6">
//               <h3 className="text-lg font-bold mb-4">Cart Totals</h3>
//               <div className="flex justify-between mb-2">
//                 <span>Subtotal:</span>
//                 <span>Rs. 250,000.00</span>
//               </div>
//               <div className="flex justify-between mb-4">
//                 <span>Total:</span>
//                 <span className="font-bold text-lg text-[#B88E2F]">
//                   Rs. 250,000.00
//                 </span>
//               </div>
//               <button className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800">
//                 Check Out
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // pages/cart.js
// import Image from "next/image";

// export default function Cart() {
//   return (
//     <div className="flex justify-center bg-gray-50 min-h-screen p-4">
//       {/* Main White Container */}
//       <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
//         <div className="flex flex-wrap gap-6">
//           {/* Cart Table */}
//           <div className="flex-1">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-[#F9F1E7]">
//                   <th className="text-left p-4">Product</th>
//                   <th className="text-left p-4">Price</th>
//                   <th className="text-left p-4">Quantity</th>
//                   <th className="text-left p-4">Subtotal</th>
//                   <th className="p-4"></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="border-b">
//                   <td className="flex items-center gap-4 p-4">
//                     <Image
//                       src="/Asgaard sofa 5.png"
//                       alt="Asgaard Sofa"
//                       width={80}
//                       height={80}
//                       className="rounded-lg"
//                     />
//                     <span>Asgaard Sofa</span>
//                   </td>
//                   <td className="p-4">Rs. 250,000.00</td>
//                   <td className="p-4">
//                     <input
//                       type="number"
//                       defaultValue="1"
//                       className="w-16 p-2 border rounded"
//                     />
//                   </td>
//                   <td className="p-4">Rs. 250,000.00</td>
//                   <td className="p-4 text-red-500 cursor-pointer">🗑️</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           {/* Cart Totals */}
//           <div className="w-full lg:w-1/3">
//             <div className="bg-[#F9F1E7] rounded-lg shadow p-6">
//               <h3 className="text-lg font-bold mb-4">Cart Totals</h3>
//               <div className="flex justify-between mb-2">
//                 <span>Subtotal:</span>
//                 <span>Rs. 250,000.00</span>
//               </div>
//               <div className="flex justify-between mb-4">
//                 <span>Total:</span>
//                 <span className="font-bold text-lg text-[#B88E2F]">
//                   Rs. 250,000.00
//                 </span>
//               </div>
//               <button className="w-full py-3 text-black bg-white border border-black rounded-lg hover:bg-gray-100">
//                 Check Out
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // pages/cart.js
// import Image from "next/image";

// export default function Cart() {
//   return (
//     <div className="flex justify-center bg-gray-50 min-h-screen p-4">
//       {/* Main White Container */}
//       <div className="w-full max-w-6xl bg-white rounded-lg shadow-lg p-6">
//         <div className="flex flex-wrap gap-6">
//           {/* Cart Table */}
//           <div className="flex-1">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-[#F9F1E7]">
//                   <th className="text-left p-4">Product</th>
//                   <th className="text-left p-4">Price</th>
//                   <th className="text-left p-4">Quantity</th>
//                   <th className="text-left p-4">Subtotal</th>
//                   <th className="p-4"></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="border-b">
//                   <td className="flex items-center gap-4 p-4">
//                     <Image
//                       src="/Asgaard sofa 5.png"
//                       alt="Asgaard Sofa"
//                       width={80}
//                       height={80}
//                       className="rounded-lg"
//                     />
//                     <span>Asgaard Sofa</span>
//                   </td>
//                   <td className="p-4">Rs. 250,000.00</td>
//                   <td className="p-4">
//                     <input
//                       type="number"
//                       defaultValue="1"
//                       className="w-16 p-2 border rounded"
//                     />
//                   </td>
//                   <td className="p-4">Rs. 250,000.00</td>
//                   <td className="p-4 text-red-500 cursor-pointer">🗑️</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           {/* Cart Totals */}
//           <div className="w-full lg:w-1/3">
//             <div className="bg-[#F9F1E7] rounded-lg shadow p-6">
//               <h3 className="text-lg font-bold mb-4">Cart Totals</h3>
//               <div className="flex justify-between mb-2">
//                 <span>Subtotal:</span>
//                 <span>Rs. 250,000.00</span>
//               </div>
//               <div className="flex justify-between mb-4">
//                 <span>Total:</span>
//                 <span className="font-bold text-lg text-[#B88E2F]">
//                   Rs. 250,000.00
//                 </span>
//               </div>
//               <button className="w-[222px] h-[58.95px] top-[739px] left-[1033px] py-2 text-black rounded-[15px] border-[1px]">
//                 Check Out
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // pages/cart.js
// import Image from "next/image";

// export default function Cart() {
//   return (
//     <div className=" w-[1440px] h-[525px] top-[416px] flex justify-center bg-gray-50 min-h-screen p-6">
//       {/* Main White Container */}
//       <div className="w-full max-w-6xl bg-white rounded-lg shadow p-6">
//         <div className="flex flex-wrap gap-6">
//           {/* Cart Table */}
//           <div className="flex-1">
//             <table className="w-full border-collapse">
//               <thead>
//                 <tr className="bg-[#F9F1E7]">
//                   <th className="text-left p-4">Product</th>
//                   <th className="text-left p-4">Price</th>
//                   <th className="text-left p-4">Quantity</th>
//                   <th className="text-left p-4">Subtotal</th>
//                   <th className="p-4"></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr className="border-b">
//                   <td className="flex items-center gap-4 p-4">
//                     <Image
//                       src="/Asgaard sofa 5.png"
//                       alt="Asgaard Sofa"
//                       width={80}
//                       height={80}
//                       className="rounded-lg"
//                     />
//                     <span>Asgaard Sofa</span>
//                   </td>
//                   <td className="p-4">Rs. 250,000.00</td>
//                   <td className="p-4">
//                     <input
//                       type="number"
//                       defaultValue="1"
//                       className="w-16 p-2 border rounded"
//                     />
//                   </td>
//                   <td className="p-4">Rs. 250,000.00</td>
//                   <td className="p-4 text-red-500 cursor-pointer">🗑️</td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>

//           {/* Cart Totals */}
//           <div className="w-full lg:w-1/3">
//             <div className="bg-[#F9F1E7] rounded-lg shadow p-6">
//               <h3 className="text-lg font-bold mb-4">Cart Totals</h3>
//               <div className="flex justify-between mb-2">
//                 <span>Subtotal:</span>
//                 <span>Rs. 250,000.00</span>
//               </div>
//               <div className="flex justify-between mb-4">
//                 <span>Total:</span>
//                 <span className="font-bold text-lg text-[#B88E2F]">Rs. 250,000.00</span>
//               </div>
//               <button className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800">
//                 Check Out
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// // pages/cart.js
// import Image from "next/image";

// export default function Cart() {
//   return (
//     <div className="flex flex-wrap gap-6 p-6 bg-gray-50 min-h-screen">
//       {/* Cart Table */}
//       <div className="flex-1 bg-white rounded-lg shadow p-6">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-amber-200">
//               <th className="text-left p-4">Product</th>
//               <th className="text-left p-4">Price</th>
//               <th className="text-left p-4">Quantity</th>
//               <th className="text-left p-4">Subtotal</th>
//               <th className="p-4"></th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr className="border-b">
//               <td className="flex items-center gap-4 p-4">
//                 <Image
//                   src="/Asgaard sofa 5.png"
//                   alt="Asgaard Sofa"
//                   width={80}
//                   height={80}
//                   className="rounded-lg"
//                 />
//                 <span>Asgaard Sofa</span>
//               </td>
//               <td className="p-4">Rs. 250,000.00</td>
//               <td className="p-4">
//                 <input
//                   type="number"
//                   defaultValue="1"
//                   className="w-16 p-2 border rounded"
//                 />
//               </td>
//               <td className="p-4">Rs. 250,000.00</td>
//               <td className="p-4 text-red-500 cursor-pointer">🗑️</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>

//       {/* Cart Totals */}
//       <div className="w-full lg:w-1/3 bg-white rounded-lg shadow p-6">
//         <h3 className="text-lg font-bold mb-4">Cart Totals</h3>
//         <div className="flex justify-between mb-2">
//           <span>Subtotal:</span>
//           <span>Rs. 250,000.00</span>
//         </div>
//         <div className="flex justify-between mb-4">
//           <span>Total:</span>
//           <span className="font-bold text-lg">Rs. 250,000.00</span>
//         </div>
//         <button className="w-full py-2 bg-black text-white rounded-lg hover:bg-gray-800">
//           Check Out
//         </button>
//       </div>
//     </div>
//   );
// }
