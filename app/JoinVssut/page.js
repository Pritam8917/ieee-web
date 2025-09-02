"use client";
import React, { useState } from "react";
import { Toaster, toast } from "sonner";

const Register = () => {
  const [name, setname] = useState("");
  const [branch, setbranch] = useState("");
  const [registrationNo, setregistrationNo] = useState("");
  const [email, setemail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Full email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !branch || !registrationNo || !email) {
      toast.error("Please fill in all fields");
      return;
    } else if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
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
            Please fill in the details below to join
          </p>

          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z\s]*$/.test(value)) {
                  setname(value);
                }
              }}
              className="w-full p-2 border rounded "
              placeholder="Enter your name"
            />
          </div>

          {/* Branch Field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Branch</label>
            <input
              type="text"
              value={branch}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z\s]*$/.test(value)) {
                  setbranch(value);
                }
              }}
              className="w-full p-2 border rounded "
              placeholder="Enter your branch"
            />
          </div>

          {/* Registration No */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Registration No
            </label>
            <input
              type="text"
              inputMode="numeric"
              value={registrationNo}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                  setregistrationNo(value);
                }
              }}
              className="w-full p-2 border rounded "
              placeholder="Enter your registration number"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                const value = e.target.value;
                if (/^[A-Za-z0-9@._-]*$/.test(value)) {
                  setemail(value);
                }
              }}
              className="w-full p-2 border rounded "
              placeholder="Enter your email"
            />
          </div>

          <div className="flex justify-center items-center mt-6 space-x-4">
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
      <div className="hidden md:block w-1/2 p-20 h-[700px]">
        <img
          src="/assets/IeeeVsRoom.jpg"
          alt="Ieee Vs"
          className="shadow-lg rounded-xl h-full w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
