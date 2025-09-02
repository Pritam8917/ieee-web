import React from "react";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";

import { TfiLinkedin } from "react-icons/tfi";
import { SiGmail } from "react-icons/si";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
const ContactUs = () => {
  return (
    <footer
      className="bg-gradient-to-r from-black via-gray-900 to-[#00629B] text-white px-4 sm:px-8 lg:px-20 py-10 flex flex-col gap-10"
      id="contact"
    >
      {/* Top section with columns */}
      <div className="flex flex-col md:flex-row flex-wrap justify-between gap-10 w-full">
        {/* Contact Info */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-2xl mb-3 font-bold">Contact Us</h3>
          <p className="text-base sm:text-lg mb-2 leading-relaxed">
            If you have any queries regarding our society, or would like to reach out to us about our events, please send us an email at:{" "}
            <span className="text-base sm:text-lg font-medium underline">
              <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=ieeevssutburlasb@gmail.com">ieeevssutburlasb@gmail.com</Link>
            </span>
          </p>

          <h3 className="text-2xl mt-6 mb-3 font-bold">Address</h3>
          <div className="pl-0">
            <p className="text-base sm:text-lg">
              Institute of Electrical and Electronics Engineers VSSUT Branch
            </p>
            <p className="text-base sm:text-lg">2025 IEEE VSSUT Student Branch</p>
          </div>
        </div>

        {/* Quick Links & Socials */}
        <div className="flex-1 min-w-[250px]">
          <h3 className="text-2xl mb-3 font-bold">Quick Links</h3>
          <div className="flex flex-col gap-2 text-base sm:text-lg">
            <a href="https://www.ieee.org/" className="hover:text-blue-600 focus:text-blue-600 active:text-blue-700">IEEE.org</a>
            <a href="https://ieeexplore.ieee.org/Xplore/home.jsp" className="hover:text-blue-600 focus:text-blue-600 active:text-blue-700">IEEE Xplore</a>
            <a href="https://standards.ieee.org/" className="hover:text-blue-600 focus:text-blue-600 active:text-blue-700">IEEE Standards</a>
            <a href="https://spectrum.ieee.org/" className="hover:text-blue-600 focus:text-blue-600 active:text-blue-700">IEEE Spectrum</a>
            <a href="https://www.ieee.org/sitemap.html" className="hover:text-blue-600 focus:text-blue-600 active:text-blue-700">More IEEE Sites</a>
          </div>

          <h3 className="text-2xl mt-6 mb-3 font-bold">Follow Us</h3>
          <div className="flex gap-4 text-xl">
            <Link href="https://m.facebook.com/profile.php?id=100068659627163" className="hover:text-blue-700 focus-within:text-blue-700">
              <FaFacebookF />
            </Link>
            <Link href="https://www.instagram.com/ieeevssut/" className="hover:text-pink-500 focus-within:text-pink-500">
              <BsInstagram />
            </Link>
            <Link href="https://twitter.com/ieee_vssut_sb" className="hover:text-black focus-within:text-black">
              <RiTwitterXFill/>
            </Link>
            <Link href="https://www.linkedin.com/company/ieee-vssut-burla-student-branch/" className="hover:text-blue-700 focus-within:text-blue-700">
              <TfiLinkedin />
            </Link>
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=ieee.vssut.sb01@gmail.com" className="hover:text-red-500 focus-within:text-red-500 h-5 w-5">
           <SiGmail />
            </Link>
          </div>
        </div>

        {/* Map */}
        <div className="flex-1 min-w-[250px] flex justify-center items-start">
          <img src="/assets/maps.png" alt="Map" className="rounded-xl w-full max-w-sm sm:max-w-md object-cover" />
        </div>
      </div>

      {/* Bottom section */}
      <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-4 mt-6">
        <p className="text-gray-400 text-sm md:text-base">© 2025 IEEE VSSUT STUDENT BRANCH</p>
      </div>
    </footer>
  );
};

export default ContactUs;
