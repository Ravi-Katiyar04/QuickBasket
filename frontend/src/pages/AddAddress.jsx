import React, { useState } from "react";
import {assets} from "../assets/assets";

const AddAddress = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    mobile: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Address:", formData);
    // Add API call or state update here
  };

  return (
    <div className="min-h-screen  w-full bg-white flex items-center justify-center md:gap-16 py-4 md:py-0">
      <div className="bg-white border-2 border-gray-200 p-8 rounded-2xl shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl md:text-3xl font-medium mb-8 text-start text-gray-500">Add Shipping <span className="text-primary">Address</span></h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            className="p-4 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            className="p-4 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="p-4 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
          <input
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            className="p-4 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
          <input
            type="text"
            name="street"
            placeholder="Street Address"
            value={formData.street}
            onChange={handleChange}
            className="p-4 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-indigo-500 col-span-full"
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            className="p-4 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
          <input
            type="text"
            name="state"
            placeholder="State"
            value={formData.state}
            onChange={handleChange}
            className="p-4 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-indigo-500"
            required
          />
          <input
            type="text"
            name="zipcode"
            placeholder="Zip Code"
            value={formData.zipcode}
            onChange={handleChange}
            className="p-4 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-indigo-500 "
            required
          />
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            className="p-4 border border-gray-300 rounded-xl focus:border-indigo-500 focus:ring-indigo-500"
            required
          />

          <button
            type="submit"
            className="col-span-full  mx-auto bg-indigo-600 text-white py-4 px-10 rounded-xl hover:bg-indigo-700 transition transform hover:-translate-y-1"
          >
            Save Address
          </button>
        </form>
      </div>
      <div className=" text-center">
        <img
          src={assets.add_address_iamge}
          alt="address"
          className="w-full h-full hidden md:block"
        />
      </div>
    </div>
  );
};

export default AddAddress;



