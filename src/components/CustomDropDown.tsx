import React, { useState } from 'react';
import { FaCaretDown } from "react-icons/fa6";

const CustomDropdown: React.FC<{
  platform: string;
  errors: { platform: string };
  handlePlatformChange: (value: string) => void;
  platformOptions: any
}> = ({ platform, errors, handlePlatformChange, platformOptions }) => {
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
        <FaCaretDown className="text-gray-600 ml-2" />
      </button>

      {isOpen && (
        <div className="absolute z-10 mt-1 w-full bg-white border border-emerald150 rounded-md shadow-lg">
          {platformOptions.map((options: any) => (
            <div
            key={options?.id}
            onClick={() => handleSelect(options?.name)}
            className="p-3 hover:bg-green-100 cursor-pointer text-gray-700"
          >
            {options?.name}
          </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
