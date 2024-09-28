import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
import { FaBowlFood } from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12 bg-[#e3dede] text-green-700">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
          <div className="flex">
            <FaBowlFood className="mr-4 text-2xl font-bold" size={30}/>
            <h2 className="text-2xl font-bold">
            logoipsum
            </h2>
          </div>
          <p className="w-80 items-center text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
         </p>
          <br/>
          <br/>
            <div className="flex space-x-4">
              <FaFacebook size={24}/>
              <FaTwitter size={24}/>
              <FaInstagram size={24} />
              <FaLinkedinIn size={24} />
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm text-black">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <p className="text-sm text-black">’d love to hear from you! Whether you have a question or just want to connect,</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;