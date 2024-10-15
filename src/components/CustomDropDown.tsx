import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const CustomDropdown: React.FC<{
  platform: string;
  errors: { platform: string };
  handlePlatformChange: (value: string) => void;
}> = ({ platform, errors, handlePlatformChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState(platform);

  const handleSelect = (value: string) => {
    setIsOpen(!isOpen);
    setSelectedPlatform(value);
    handlePlatformChange(value);
  };

  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center bg-gray-100 ${selectedPlatform ? "text-black" : "text-gray-400"} border border-emerald150 hover:border-primary100 focus:border-primary100 outline-none rounded-md p-3 w-full ${
          errors.platform !== "" ? "border-red-500" : ""
        }`}
      >
        {selectedPlatform || "Select a platform"}
        <IoIosArrowDown className="text-gray-400 ml-2" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-emerald150 rounded-md shadow-lg">
          <div
            onClick={() => handleSelect("facebook")}
            className="p-3 hover:bg-green-100 cursor-pointer text-gray-700"
          >
            Facebook
          </div>
          <div
            onClick={() => handleSelect("instagram")}
            className="p-3 hover:bg-green-100 cursor-pointer text-gray-700"
          >
            Instagram
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
