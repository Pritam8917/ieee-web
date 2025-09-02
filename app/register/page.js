"use client";
import React, { useState } from "react";
import { Toaster, toast } from "sonner";

const Register = () => {
  const [name, setname] = useState("");
  const [branch, setbranch] = useState("");
  const [registrationNo, setregistrationNo] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !branch || !registrationNo) {
      toast.error("Please fill in all fields");
      return;
    } else {
      toast.success("Successfully Registered");
    }
  };
  return (
    <div className="flex">
      <div className="w-full md:w-1/2 flex-col justify-center items-center p-8 flex md:p-12">
        <form
          className="w-full max-w-md bg-white p-8 rounded-lg border shadow-md "
          onSubmit={handleSubmit}
        >
          <Toaster position="top-center" richColors />
          <div className="h-20 w-20 flex items-center justify-center mb-6 mx-auto">
            <img
              src="/assets/ieee_logo.png"
              alt="IEEE Logo"
              className="object-contain"
            />
          </div>

          <p className="text-center mb-6 text-xl font-semibold">
            Please fill in the details below to register
          </p>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              className="w-full p-2 border rounded "
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Branch</label>
            <input
              type="text"
              value={branch}
              onChange={(e) => setbranch(e.target.value)}
              className="w-full p-2 border rounded "
              placeholder="Enter your branch"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Registration No
            </label>
            <input
              type="number"
              value={registrationNo}
              onChange={(e) => setregistrationNo(e.target.value)}
              className="w-full p-2 border rounded "
              placeholder="Enter your registration number"
            />
          </div>
          <div className="flex justify-center items-center mt-6 space-x-4">
            {" "}
            <button
              type="submit"
              className="w-full bg-[#00629B] text-white p-3 rounded hover:bg-blue-900 transition duration-200 text-xl"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      {/* Rightside */}
      <div className="hidden md:block w-1/2  p-20 ">
        <img
          src="/assets/Slide-the-change 2.jpg"
          alt="Slide the change 2"
          className="shadow-lg rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Register;
