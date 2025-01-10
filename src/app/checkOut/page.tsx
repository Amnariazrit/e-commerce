"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Services from "../components/Services";
import { GoDotFill, GoDot } from "react-icons/go";

const CheckOut = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    city: "",
    province: "",
    zip: "",
    phone: "",
    email: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      {/* Background Section */}
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
          <h2 className="font-[poppins] font-medium text-2xl lg:text-4xl text-black">
            Checkout
          </h2>
          <div className="flex gap-4 mt-2">
            <Link
              href="/"
              className="font-[poppins] font-medium text-sm lg:text-xl text-black"
            >
              Home
            </Link>
            <span className="text-sm lg:text-xl font-medium text-black">
              &#8594;
            </span>
            <span className="font-[poppins] font-light text-sm lg:text-xl text-black">
              Checkout
            </span>
          </div>
        </div>
      </div>

      {/* Checkout Section */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 w-[90%] max-w-7xl mx-auto mt-12">
        {/* Checkout Form */}
        <form
          className="lg:w-[60%] bg-white p-6 sm:p-8 shadow-md rounded-lg"
          onSubmit={handleSubmit}
        >
          <h3 className="text-2xl font-bold mb-6">Billing Details</h3>

          {/* Input Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-semibold text-gray-700"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-semibold text-gray-700"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                placeholder="Enter your last name"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="company"
              className="block text-sm font-semibold text-gray-700"
            >
              Company Name (Optional)
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your company name"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-semibold text-gray-700"
            >
              Street Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your street address"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div>
              <label
                htmlFor="city"
                className="block text-sm font-semibold text-gray-700"
              >
                Town / City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                placeholder="Enter your city"
              />
            </div>
            <div>
              <label
                htmlFor="province"
                className="block text-sm font-semibold text-gray-700"
              >
                Province
              </label>
              <input
                type="text"
                id="province"
                name="province"
                value={formData.province}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                placeholder="Enter your province"
              />
            </div>
            <div>
              <label
                htmlFor="zip"
                className="block text-sm font-semibold text-gray-700"
              >
                ZIP Code
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                required
                className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                placeholder="Enter your ZIP code"
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-semibold text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="country"
              className="block text-sm font-semibold text-gray-700"
            >
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              placeholder="Enter your country"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Complete Order
          </button>
        </form>

        {/* Product Summary */}
        <div className="lg:w-[35%] bg-white p-6 sm:p-8 shadow-md rounded-lg">
          <div className="mb-6">
            <div className="flex justify-between items-center">
              <h2 className="font-bold text-lg">Product</h2>
              <h2 className="font-bold text-lg">Subtotal</h2>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p>Asgaard sofa x 1</p>
              <p>Rs. 250,000.00</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6">
            <h3 className="font-semibold text-lg">Total</h3>
            <p className="text-2xl font-bold text-[#B88E2F]">Rs. 250,000.00</p>
          </div>

          <hr className="border-t border-gray-300 mt-4" />

          <div className="mt-6 space-y-4">
            <div className="flex items-start">
              <GoDotFill className="w-5 h-5 text-black" />
              <div className="ml-3">
                <h4 className="text-base font-medium">Direct Bank Transfer</h4>
                <p className="text-sm text-[#9F9F9F]">
                  Make your payment directly into our bank account. Please use
                  your Order ID as the payment reference. Your order will not be
                  shipped until the funds have cleared in our account.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <GoDot className="w-5 h-5 text-gray-500" />
              <h4 className="ml-3 text-base text-[#9F9F9F]">
                Direct Bank Transfer
              </h4>
            </div>
            <div className="flex items-center">
              <GoDot className="w-5 h-5 text-gray-500" />
              <h4 className="ml-3 text-base text-[#9F9F9F]">
                Cash On Delivery
              </h4>
            </div>
          </div>

          <p className="mt-6 text-sm text-black">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our
            <span className="font-medium text-black"> privacy policy</span>.
          </p>
        </div>
      </div>

      <Services />
    </div>
  );
};

export default CheckOut;

// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import Services from '../components/Services';
// import { GoDotFill, GoDot } from 'react-icons/go';

// const CheckOut = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     company: '',
//     address: '',
//     city: '',
//     province: '',
//     zip: '',
//     phone: '',
//     email: '',
//     country: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div>
//       {/* Background Section */}
//       <div className="relative w-full h-[316px]">
//         <Image
//           src="/Rectangle 1.jpg"
//           alt="Background Image"
//           layout="fill"
//           objectFit="cover"
//           priority
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <Image src="/Meubel House_Logos-05.png" alt="logo" width={40} height={40} className="mb-2" />
//           <h2 className="font-poppins font-medium text-2xl lg:text-4xl text-black">Checkout</h2>
//           <div className="flex gap-4 mt-2">
//             <Link href="/" className="font-poppins font-medium text-sm lg:text-xl text-black">Home</Link>
//             <span className="text-sm lg:text-xl font-medium text-black">&#8594;</span>
//             <span className="font-poppins font-light text-sm lg:text-xl text-black">Checkout</span>
//           </div>
//         </div>
//       </div>

//       {/* Checkout Section */}
//       <div className="flex flex-col lg:flex-row justify-between gap-8 w-[90%] max-w-7xl mx-auto mt-12">
//         {/* Checkout Form */}
//         <form className="lg:w-[60%] bg-white p-8 shadow-md rounded-lg" onSubmit={handleSubmit}>
//           <h3 className="text-2xl font-bold mb-6">Billing Details</h3>

//           {/* Input Fields */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//             <div>
//               <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">First Name</label>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your first name"
//               />
//             </div>
//             <div>
//               <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">Last Name</label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your last name"
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label htmlFor="company" className="block text-sm font-semibold text-gray-700">Company Name (Optional)</label>
//             <input
//               type="text"
//               id="company"
//               name="company"
//               value={formData.company}
//               onChange={handleChange}
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your company name"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="address" className="block text-sm font-semibold text-gray-700">Street Address</label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your street address"
//             />
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
//             <div>
//               <label htmlFor="city" className="block text-sm font-semibold text-gray-700">Town / City</label>
//               <input
//                 type="text"
//                 id="city"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your city"
//               />
//             </div>
//             <div>
//               <label htmlFor="province" className="block text-sm font-semibold text-gray-700">Province</label>
//               <input
//                 type="text"
//                 id="province"
//                 name="province"
//                 value={formData.province}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your province"
//               />
//             </div>
//             <div>
//               <label htmlFor="zip" className="block text-sm font-semibold text-gray-700">ZIP Code</label>
//               <input
//                 type="text"
//                 id="zip"
//                 name="zip"
//                 value={formData.zip}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your ZIP code"
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone Number</label>
//             <input
//               type="text"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your phone number"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your email"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="country" className="block text-sm font-semibold text-gray-700">Country</label>
//             <input
//               type="text"
//               id="country"
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your country"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
//           >
//             Complete Order
//           </button>
//         </form>

//         {/* Product Summary */}
//         <div className="lg:w-[35%] bg-white p-8 shadow-md rounded-lg">
//           <div className="mb-6">
//             <div className="flex justify-between items-center">
//               <h2 className="font-bold text-lg">Product</h2>
//               <h2 className="font-bold text-lg">Subtotal</h2>
//             </div>
//             <div className="flex justify-between items-center mt-4">
//               <p>Asgaard sofa x 1</p>
//               <p>Rs. 250,000.00</p>
//             </div>
//           </div>

//           <div className="flex justify-between items-center mt-6">
//             <h3 className="font-semibold text-lg">Total</h3>
//             <p className="text-2xl font-bold text-[#B88E2F]">Rs. 250,000.00</p>
//           </div>

//           <hr className="border-t border-gray-300 mt-4" />

//           <div className="mt-6 space-y-4">
//             <div className="flex items-start">
//               <GoDotFill className="w-5 h-5 text-black" />
//               <div className="ml-3">
//                 <h4 className="text-base font-medium">Direct Bank Transfer</h4>
//                 <p className="text-sm text-[#9F9F9F]">
//                   Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <GoDot className="w-5 h-5 text-gray-500" />
//               <h4 className="ml-3 text-base text-[#9F9F9F] ">Direct Bank Transfer</h4>
//             </div>
//             <div className="flex items-center">
//               <GoDot className="w-5 h-5 text-gray-500" />
//               <h4 className="ml-3 text-base text-[#9F9F9F]">Cash On Delivery</h4>
//             </div>
//           </div>

//           <p className="mt-6 text-sm text-black">
//             Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
//             <span className="font-medium text-black"> privacy policy</span>.
//           </p>
//         </div>
//       </div>

//       <Services />
//     </div>
//   );
// };

// export default CheckOut;

// 'use client';

// import React, { useState } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import Services from '../components/Services';
// import { GoDotFill, GoDot } from 'react-icons/go';

// const CheckOut = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     company: '',
//     address: '',
//     city: '',
//     province: '',
//     zip: '',
//     phone: '',
//     email: '',
//     country: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div>
//       {/* Background Section */}
//       <div className="relative w-full h-[316px]">
//         <Image
//           src="/Rectangle 1.jpg"
//           alt="Background Image"
//           layout="fill"
//           objectFit="cover"
//           priority
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <Image src="/Meubel House_Logos-05.png" alt="logo" width={40} height={40} className="mb-2" />
//           <h2 className="font-poppins font-medium text-2xl lg:text-4xl text-black">Checkout</h2>
//           <div className="flex gap-4 mt-2">
//             <Link href="/" className="font-poppins font-medium text-sm lg:text-xl text-black">Home</Link>
//             <span className="text-sm lg:text-xl font-medium text-black">&#8594;</span>
//             <span className="font-poppins font-light text-sm lg:text-xl text-black">Checkout</span>
//           </div>
//         </div>
//       </div>

//       {/* Checkout Section */}
//       <div className="flex flex-col lg:flex-row justify-between gap-8 w-[90%] max-w-7xl mx-auto mt-12">
//         {/* Checkout Form */}
//         <form className="lg:w-[60%] bg-white p-8 shadow-md rounded-lg" onSubmit={handleSubmit}>
//           <h3 className="text-2xl font-bold mb-6">Billing Details</h3>

//           {/* Input Fields */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//             <div>
//               <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">First Name</label>
//               <input
//                 type="text"
//                 id="firstName"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your first name"
//               />
//             </div>
//             <div>
//               <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">Last Name</label>
//               <input
//                 type="text"
//                 id="lastName"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your last name"
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label htmlFor="company" className="block text-sm font-semibold text-gray-700">Company Name (Optional)</label>
//             <input
//               type="text"
//               id="company"
//               name="company"
//               value={formData.company}
//               onChange={handleChange}
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your company name"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="address" className="block text-sm font-semibold text-gray-700">Street Address</label>
//             <input
//               type="text"
//               id="address"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your street address"
//             />
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
//             <div>
//               <label htmlFor="city" className="block text-sm font-semibold text-gray-700">Town / City</label>
//               <input
//                 type="text"
//                 id="city"
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your city"
//               />
//             </div>
//             <div>
//               <label htmlFor="province" className="block text-sm font-semibold text-gray-700">Province</label>
//               <input
//                 type="text"
//                 id="province"
//                 name="province"
//                 value={formData.province}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your province"
//               />
//             </div>
//             <div>
//               <label htmlFor="zip" className="block text-sm font-semibold text-gray-700">ZIP Code</label>
//               <input
//                 type="text"
//                 id="zip"
//                 name="zip"
//                 value={formData.zip}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your ZIP code"
//               />
//             </div>
//           </div>

//           <div className="mb-4">
//             <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone Number</label>
//             <input
//               type="text"
//               id="phone"
//               name="phone"
//               value={formData.phone}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your phone number"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email Address</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your email"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="country" className="block text-sm font-semibold text-gray-700">Country</label>
//             <input
//               type="text"
//               id="country"
//               name="country"
//               value={formData.country}
//               onChange={handleChange}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your country"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
//           >
//             Complete Order
//           </button>
//         </form>

//         {/* Product Summary */}
//         <div className="lg:w-[35%] bg-white p-8 shadow-md rounded-lg">
//           <div className="mb-6">
//             <div className="flex justify-between items-center">
//               <h2 className="font-bold text-lg">Product</h2>
//               <h2 className="font-bold text-lg">Subtotal</h2>
//             </div>
//             <div className="flex justify-between items-center mt-4">
//               <p>Asgaard sofa x 1</p>
//               <p>Rs. 250,000.00</p>
//             </div>
//           </div>

//           <div className="flex justify-between items-center mt-6">
//             <h3 className="font-semibold text-lg">Total</h3>
//             <p className="text-2xl font-bold text-[#B88E2F]">Rs. 250,000.00</p>
//           </div>

//           <hr className="border-t border-gray-300 mt-4" />

//           <div className="mt-6 space-y-4">
//             <div className="flex items-start">
//               <GoDotFill className="w-12 h-12 text-lg text-black" />
//               <div className="ml-3">
//                 <h4 className="text-base font-medium">Direct Bank Transfer</h4>
//                 <p className="text-sm text-[#9F9F9F]">
//                   Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
//                 </p>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <GoDot className="text-gray-500 text-lg" />
//               <h4 className="ml-3 text-base text-[#9F9F9F] ">Direct Bank Transfer</h4>
//             </div>
//             <div className="flex items-center">
//               <GoDot className="text-gray-500 text-lg" />
//               <h4 className="ml-3 text-base text-[#9F9F9F]">Cash On Delivery</h4>
//             </div>
//           </div>

//           <p className="mt-6 text-sm text-black">
//             Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
//             <span className="font-medium text-black"> privacy policy</span>.
//           </p>
//         </div>
//       </div>

//       <Services />
//     </div>
//   );
// };

// export default CheckOut;

// 'use client'
// import React, { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import Services from '../components/Services'
// import { GoDotFill , GoDot } from "react-icons/go";

// const CheckOut = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [address, setAddress] = useState('')
//   const [city, setCity] = useState('')
//   const [zip, setZip] = useState('')
//   const [phone, setPhone] = useState('')
//   const [country, setCountry] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log({ name, email, address, city, zip, phone, country })
//   }

//   return (
//     <div>
//       {/* Background Section */}
//       <div className="relative w-full h-[316px]">
//         <Image
//           src="/Rectangle 1.jpg"
//           alt="Background Image"
//           layout="fill"
//           objectFit="cover"
//           priority
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <Image src="/Meubel House_Logos-05.png" alt="logo" width={40} height={40} className="mb-2" />
//           <h2 className="font-[Poppins] font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#000000]">
//             Checkout
//           </h2>
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
//               Checkout
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Checkout Section with Flex Layout */}
//       <div className="flex justify-between gap-8 w-[90%] max-w-7xl mx-auto mt-12">
//         {/* Checkout Form */}
//         <form
//           className="w-[60%] bg-white p-8 shadow-md rounded-lg"
//           onSubmit={handleSubmit}
//         >
//           <h3 className="text-2xl font-bold mb-6">Billing Details</h3>

//           {/* Full Name Field */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//             <div>
//               <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 id="firstName"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your first name"
//               />
//             </div>
//             <div>
//               <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 id="lastName"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your last name"
//               />
//             </div>
//           </div>

//           {/* Company Name */}
//           <div className="mb-4">
//             <label htmlFor="company" className="block text-sm font-semibold text-gray-700">
//               Company Name (Optional)
//             </label>
//             <input
//               type="text"
//               id="company"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your company name"
//             />
//           </div>

//           {/* Address Fields */}
//           <div className="mb-4">
//             <label htmlFor="address" className="block text-sm font-semibold text-gray-700">
//               Street Address
//             </label>
//             <input
//               type="text"
//               id="address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your street address"
//             />
//           </div>

//           {/* City, State, and ZIP */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
//             <div>
//               <label htmlFor="city" className="block text-sm font-semibold text-gray-700">
//                 Town / City
//               </label>
//               <input
//                 type="text"
//                 id="city"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 required
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your city"
//               />
//             </div>

//             <div>
//               <label htmlFor="province" className="block text-sm font-semibold text-gray-700">
//                 Province
//               </label>
//               <input
//                 type="text"
//                 id="province"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your province"
//               />
//             </div>

//             <div>
//               <label htmlFor="zip" className="block text-sm font-semibold text-gray-700">
//                 ZIP Code
//               </label>
//               <input
//                 type="text"
//                 id="zip"
//                 value={zip}
//                 onChange={(e) => setZip(e.target.value)}
//                 required
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your ZIP code"
//               />
//             </div>
//           </div>

//           {/* Phone Number */}
//           <div className="mb-4">
//             <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
//               Phone Number
//             </label>
//             <input
//               type="text"
//               id="phone"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your phone number"
//             />
//           </div>

//           {/* Email Field */}
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your email"
//             />
//           </div>

//           {/* Country Field */}
//           <div className="mb-4">
//             <label htmlFor="country" className="block text-sm font-semibold text-gray-700">
//               Country
//             </label>
//             <input
//               type="text"
//               id="country"
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your country"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
//           >
//             Complete Order
//           </button>
//         </form>

//         {/* Product Summary Section */}
//         <div className="w-[35%] bg-white p-8 shadow-md rounded-lg">
//           {/* Product Section */}
//           <div className="mb-6">
//             <div className="flex justify-between items-center">
//               <h2 className="font-bold text-lg">Product</h2>
//               <h2 className="font-bold text-lg">Subtotal</h2>
//             </div>
//             <div className="flex justify-between items-center mt-4">
//               <p>Asgaard sofa x 1</p>
//               <p>Rs. 250,000.00</p>
//             </div>
//           </div>

//           {/* Total Section */}
//           <div className="flex justify-between items-center mt-6">
//             <h3 className="font-semibold text-lg">Total</h3>
//             <p className="font-[700] text-[24px] leading-[36px] text-[#B88E2F] text-right">
//               Rs. 250,000.00
//             </p>
//           </div>

//           <hr className="border-t border-gray-300 mt-4" />

//           <div className='w-[528px] h-[107px] top-[799px] left-[773px]'>
//           <GoDotFill  className='w-[14px] h-[14px] top-[794px] left-[774px]'/>
//           <h4 className='w-[160px] h-[24px] top-[794px] left-[803px] font-[Poppins] font-[400] text-[16px] leading-[24px] text-black'>
//           Direct Bank Transfer
//           </h4>
//           <p className='w-[528px] h-[72px] top-[829px] left-[773px] font-[Poppins] font-[300] text-[16px] leading-[24px] text-[#9F9F9F] text-justify'>
//             Make your payment directly into our bank account.
//             Please use your Order ID as the payment reference.
//             Your order will not be shipped until the funds have cleared in our account.
//             </p>
//           </div>
//           <div className='w-[191px] h-[24px] top-[926px] left-[774px] border-[1px] border-[#9F9F9F]'>
//           <GoDot className='w-[14px] h-[14px] top-[931px] left-[774px] border-[1px] border-[#9f9f9f] align-[inner]' />
//           <h4 className='w-[162px] h-[24px] top-[926px] left-[803px] font-[Poppins] font-[500] text-[16px] leading-[24px] text-[#9f9f9f]'>
//           Direct Bank Transfer
//           </h4>
//           </div>
//           <div className='w-[167px] h-[24px] top-[961px] left-[774px] border-[1px] border-[#9F9F9F]'>
//           <GoDot className='w-[14px] h-[14px] top-[931px] left-[774px] border-[1px] border-[#9f9f9f] align-[inner]' />
//           <h4 className='w-[138px] h-[24px] top-[961px] left-[803px] font-[Poppins] font-[500] text-[16px] leading-[24px] text-[#9f9f9f]'>
//           Cash On Delivery
//           </h4>
//           </div>
//           <p className='w-[529px] h-[72px] top-[1007px] left-[772px] font-[Poppins] font-[300] text-[16px] leading-[24px] text-black text-justify'>
//           Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
//           <span className='font-[Poppins] font-[600] text-[16px] leading-[24px] text-black text-justify'> privacy policy.</span>
//             </p>
//         </div>
//       </div>

//       <Services />
//     </div>
//   )
// }

// export default CheckOut

// 'use client'
// import React, { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import Services from '../components/Services'

// const CheckOut = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [address, setAddress] = useState('')
//   const [city, setCity] = useState('')
//   const [zip, setZip] = useState('')
//   const [phone, setPhone] = useState('')
//   const [country, setCountry] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     console.log({ name, email, address, city, zip, phone, country })
//   }

//   return (
//     <div>
//       {/* Background Section */}
//       <div className="relative w-full h-[316px]">
//         <Image
//           src="/Rectangle 1.jpg"
//           alt="Background Image"
//           layout="fill"
//           objectFit="cover"
//           priority
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <Image src="/Meubel House_Logos-05.png" alt="logo" width={40} height={40} className="mb-2" />
//           <h2 className="font-[Poppins] font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#000000]">
//             Checkout
//           </h2>
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
//               Checkout
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Checkout Section with Flex Layout */}
//       <div className="flex justify-between gap-8 w-[90%] max-w-7xl mx-auto mt-12">
//         {/* Checkout Form */}
//         <form
//           className="w-[60%] bg-white p-8 shadow-md rounded-lg"
//           onSubmit={handleSubmit}
//         >
//           <h3 className="text-2xl font-bold mb-6">Billing Details</h3>

//           {/* Full Name Field */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//             <div>
//               <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">
//                 First Name
//               </label>
//               <input
//                 type="text"
//                 id="firstName"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your first name"
//               />
//             </div>
//             <div>
//               <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">
//                 Last Name
//               </label>
//               <input
//                 type="text"
//                 id="lastName"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your last name"
//               />
//             </div>
//           </div>

//           {/* Company Name */}
//           <div className="mb-4">
//             <label htmlFor="company" className="block text-sm font-semibold text-gray-700">
//               Company Name (Optional)
//             </label>
//             <input
//               type="text"
//               id="company"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your company name"
//             />
//           </div>

//           {/* Address Fields */}
//           <div className="mb-4">
//             <label htmlFor="address" className="block text-sm font-semibold text-gray-700">
//               Street Address
//             </label>
//             <input
//               type="text"
//               id="address"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your street address"
//             />
//           </div>

//           {/* City, State, and ZIP */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
//             <div>
//               <label htmlFor="city" className="block text-sm font-semibold text-gray-700">
//                 Town / City
//               </label>
//               <input
//                 type="text"
//                 id="city"
//                 value={city}
//                 onChange={(e) => setCity(e.target.value)}
//                 required
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your city"
//               />
//             </div>

//             <div>
//               <label htmlFor="province" className="block text-sm font-semibold text-gray-700">
//                 Province
//               </label>
//               <input
//                 type="text"
//                 id="province"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your province"
//               />
//             </div>

//             <div>
//               <label htmlFor="zip" className="block text-sm font-semibold text-gray-700">
//                 ZIP Code
//               </label>
//               <input
//                 type="text"
//                 id="zip"
//                 value={zip}
//                 onChange={(e) => setZip(e.target.value)}
//                 required
//                 className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your ZIP code"
//               />
//             </div>
//           </div>

//           {/* Phone Number */}
//           <div className="mb-4">
//             <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
//               Phone Number
//             </label>
//             <input
//               type="text"
//               id="phone"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your phone number"
//             />
//           </div>

//           {/* Email Field */}
//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
//               Email Address
//             </label>
//             <input
//               type="email"
//               id="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your email"
//             />
//           </div>

//           {/* Country Field */}
//           <div className="mb-4">
//             <label htmlFor="country" className="block text-sm font-semibold text-gray-700">
//               Country
//             </label>
//             <input
//               type="text"
//               id="country"
//               value={country}
//               onChange={(e) => setCountry(e.target.value)}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your country"
//             />
//           </div>

//           {/* Submit Button */}
//           <button
//             type="submit"
//             className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
//           >
//             Complete Order
//           </button>
//         </form>
//         <div className="w-[35%] bg-white p-8 shadow-md rounded-lg">
//   {/* Product Section */}
//   <div className="mb-6">
//     <h2 className="font-bold text-lg">Product</h2>
//     <div className=" justify-between items-center">
//       <p>Asgaard sofa x 1</p>
//       <p>subtotal</p></div>
//       <div className="justify-between items-center">
//       <h2 className="text-right font-bold text-lg">Subtotal</h2>
//       <p className='text-right'>Rs. 250,000.00</p>
//       <p className='text-right'>Rs. 250,000.00</p>
//     </div>
//     <div className="flex justify-between items-center">

//     </div>
//   </div>

//   {/* Total Section */}
//   <div className="mt-6">
//     <h3 className="font-semibold text-lg">Total</h3>
//     <p className="font-[700] text-[24px] leading-[36px] text-[#B88E2F] text-right">
//       Rs. 250,000.00
//     </p>
//   </div>
// </div>
// <div></div>

//       </div>

//       <Services />
//     </div>
//   )
// }

// export default CheckOut

// 'use client'
// import React, { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import Services from '../components/Services'

// const CheckOut = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [address, setAddress] = useState('')
//   const [city, setCity] = useState('')
//   const [zip, setZip] = useState('')
//   const [phone, setPhone] = useState('')
//   const [country, setCountry] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Handle form submission (e.g., send data to backend)
//     console.log({ name, email, address, city, zip, phone, country })
//   }

//   return (
//     <div>
//       {/* Background Section */}
//       <div className="relative w-full h-[316px]">
//         <Image
//           src="/Rectangle 1.jpg"
//           alt="Background Image"
//           layout="fill"
//           objectFit="cover"
//           priority
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <Image src="/Meubel House_Logos-05.png" alt="logo" width={40} height={40} className="mb-2" />
//           <h2 className="font-[Poppins] font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#000000]">
//             Checkout
//           </h2>
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
//               Checkout
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Checkout Form */}
//       <form
//         className="w-[90%] max-w-3xl mx-auto mt-12 bg-white p-8 shadow-md rounded-lg"
//         onSubmit={handleSubmit}
//       >
//         <h3 className="text-2xl font-bold mb-6">Billing Details</h3>

//         {/* Full Name Field */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
//           <div>
//             <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">
//               First Name
//             </label>
//             <input
//               type="text"
//               id="firstName"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your first name"
//             />
//           </div>
//           <div>
//             <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">
//               Last Name
//             </label>
//             <input
//               type="text"
//               id="lastName"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your last name"
//             />
//           </div>
//         </div>

//         {/* Company Name */}
//         <div className="mb-4">
//           <label htmlFor="company" className="block text-sm font-semibold text-gray-700">
//             Company Name (Optional)
//           </label>
//           <input
//             type="text"
//             id="company"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             placeholder="Enter your company name"
//           />
//         </div>

//         {/* Address Fields */}
//         <div className="mb-4">
//           <label htmlFor="address" className="block text-sm font-semibold text-gray-700">
//             Street Address
//           </label>
//           <input
//             type="text"
//             id="address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             required
//             className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             placeholder="Enter your street address"
//           />
//         </div>

//         {/* City, State, and ZIP */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
//           <div>
//             <label htmlFor="city" className="block text-sm font-semibold text-gray-700">
//               Town / City
//             </label>
//             <input
//               type="text"
//               id="city"
//               value={city}
//               onChange={(e) => setCity(e.target.value)}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your city"
//             />
//           </div>

//           <div>
//             <label htmlFor="province" className="block text-sm font-semibold text-gray-700">
//               Province
//             </label>
//             <input
//               type="text"
//               id="province"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your province"
//             />
//           </div>

//           <div>
//             <label htmlFor="zip" className="block text-sm font-semibold text-gray-700">
//               ZIP Code
//             </label>
//             <input
//               type="text"
//               id="zip"
//               value={zip}
//               onChange={(e) => setZip(e.target.value)}
//               required
//               className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//               placeholder="Enter your ZIP code"
//             />
//           </div>
//         </div>

//         {/* Phone Number */}
//         <div className="mb-4">
//           <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">
//             Phone Number
//           </label>
//           <input
//             type="text"
//             id="phone"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//             className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             placeholder="Enter your phone number"
//           />
//         </div>

//         {/* Email Field */}
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             placeholder="Enter your email"
//           />
//         </div>

//         {/* Country Field */}
//         <div className="mb-4">
//           <label htmlFor="country" className="block text-sm font-semibold text-gray-700">
//             Country
//           </label>
//           <input
//             type="text"
//             id="country"
//             value={country}
//             onChange={(e) => setCountry(e.target.value)}
//             required
//             className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             placeholder="Enter your country"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
//         >
//           Complete Order
//         </button>
//       </form>
//       <div className='w-[608px] h-[789px] top-[479px] left-[734px] bg-white'>
//       <div className='w-[533px] h-[616px] top-[566px] left-[772px] bg-white'>
// <div><h2>Product</h2>
// <p>Asgaard sofa x 1</p>
// <h3>Subtotal</h3>
// <h3>Total</h3></div>

// <div>
// <h2>Subtotal</h2>
// <p>Rs. 250,000.00</p>
// <h3>Rs. 250,000.00</h3>
// <h3 className='font-[Poppins] font-[700] text-[24px] leading-[36p] bg-[#B88E2F]'>
//     Rs. 250,000.00</h3></div>
//     <div className='w-[527.01px] top-[771.5px] left-[774px] border-[1px] border-[#D9D9D9] align-[center]'></div>
// </div>
//       </div>
//       <Services />
//     </div>
//   )
// }

// export default CheckOut

// 'use client'
// import React, { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'

// const CheckOut = () => {
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [address, setAddress] = useState('')
//   const [city, setCity] = useState('')
//   const [zip, setZip] = useState('')

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // Handle form submission (e.g., send data to backend)
//     console.log({ name, email, address, city, zip })
//   }

//   return (
//     <div>
//       {/* Background Section */}
//       <div className="relative w-full h-[316px]">
//         <Image
//           src="/Rectangle 1.jpg"
//           alt="Background Image"
//           layout="fill"
//           objectFit="cover"
//           priority
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <Image src="/Meubel House_Logos-05.png" alt="logo" width={40} height={40} className="mb-2" />
//           <h2 className="font-[Poppins] font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#000000]">
//             Checkout
//           </h2>
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
//               Checkout
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Checkout Form */}
//       <form
//         className="w-[90%] max-w-3xl mx-auto mt-12 bg-white p-8 shadow-md rounded-lg"
//         onSubmit={handleSubmit}
//       >
//         <h3 className="text-2xl font-bold mb-6">Billing Details</h3>

//         {/* Name Field */}
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
//             First Name
//           </label>

//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             placeholder="Enter your full name"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
//             Last Name
//           </label>

//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             placeholder="Enter your full name"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
//             Company Name (Optional)
//           </label>

//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             placeholder="Enter your full name"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
//             Country / Religion
//           </label>

//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             placeholder="Enter your full name"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
//             Street Address
//           </label>

//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             placeholder="Enter your full name"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
//             Town / city
//           </label>

//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             placeholder="Enter your full name"
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
//             Province
//           </label>

//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             placeholder="Enter your full name"
//           />
//         </div>

//          {/* ZIP Code Field */}
//          <div className="mb-4">
//           <label htmlFor="zip" className="block text-sm font-semibold text-gray-700">
//             ZIP Code
//           </label>
//           <input
//             type="text"
//             id="zip"
//             value={zip}
//             onChange={(e) => setZip(e.target.value)}
//             required
//             className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             placeholder="Enter your ZIP code"
//           />
//         </div>

//           {/*  */}
//           <div className="mb-4">
//           <label htmlFor="city" className="block text-sm font-semibold text-gray-700">
//             Phone
//           </label>
//           <input
//             type="text"
//             id="city"
//             value={city}
//             onChange={(e) => setCity(e.target.value)}
//             required
//             className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             placeholder="Enter your city"
//           />
//         </div>

//         {/* Email Field */}
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
//             Email Address
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             placeholder="Enter your email"
//           />
//         </div>

//         {/* Address Field */}
//         <div className="mb-4">
//           <label htmlFor="address" className="block text-sm font-semibold text-gray-700">
//             Shipping Address
//           </label>
//           <input
//             type="text"
//             id="address"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             required
//             className="w-full p-3 mt-2 border border-gray-300 rounded-md"
//             placeholder="Enter your shipping address"
//           />
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
//         >
//           Complete Order
//         </button>
//       </form>
//     </div>
//   )
// }

// export default CheckOut

// import React from 'react'
// import Link from 'next/link'
// import Image from 'next/image'

// const CheckOut = () => {
//   return (
//     <div>
//         <div className="relative w-full h-[316px]">
//         <Image
//           src="/Rectangle 1.jpg"
//           alt="Background Image"
//           layout="fill"
//           objectFit="cover"
//           priority
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <Image src="/Meubel House_Logos-05.png" alt="logo" width={40} height={40} className="mb-2" />
//           <h2 className="font-[Poppins] font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl text-[#000000]">
//         Checkout
//           </h2>
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
//               Checkout
//             </Link>
//           </div>
//         </div>
//       </div>
// {/* Form */}

// <form className='w-[1440px] h-[1829px] top-[416px] bg-white'></form>

//     </div>
//   )
// }

// export default CheckOut
