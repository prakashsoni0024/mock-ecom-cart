import React from "react";

const Footer = () => {
  return (
   <div className="bg-gray-900 text-gray-300 py-6 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} VibeShop. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
