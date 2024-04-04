import React from 'react';

function NavigationBar() {
  return (
    <nav className="bg-[#000000]  text-white py-4 px-8 md:px-20 lg:px-32 flex justify-between items-center fixed w-full z-10">
      <div className="font-bold text-4xl md:text-5xl">
        <span>Order</span><span style={{ color: '#FFC700' }}>Eazy</span>
      </div>
      <div className="flex gap-8">
        <a href="#home" className="hover:text-[#FFC700] transition duration-300 ease-in-out text-lg">Home</a>
        <a href="#partners" className="hover:text-[#FFC700] transition duration-300 ease-in-out text-lg">Partners</a>
        <a href="#about" className="hover:text-[#FFC700] transition duration-300 ease-in-out text-lg">About</a>
        <a href="#contact" className="hover:text-[#FFC700] transition duration-300 ease-in-out text-lg">Contact</a>
      </div>
    </nav>
  );
}

export default NavigationBar;
