import React, { useRef, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { useEditor } from "../../context/EditorContext";

const EmbedPicture: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { image, setImage } = useEditor();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ModalWrapper>
      <h2 className="text-base pb-4">Upload Image</h2>
      <p className="text-gray-500 mb-2 text-sm uppercase">File Upload</p>
      <div
        onClick={handleFileUploadClick}
        className="border-2 border-dotted border-green-700 bg-gray-100 p-2 w-full mb-4 h-[120px] lg:h-[150px] text-center flex items-center justify-center cursor-pointer"
      >
        {image ? (
          <img
            src={image}
            alt="Uploaded"
            className="w-full h-full object-cover"
          />
        ) : (
          <p className="border border-green-700 capitalize rounded-sm text-sm cursor-pointer px-3 py-1.5">
            Import image from device
          </p>
        )}
      </div>

      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <div>
        <button
          onClick={onClose}
          className="bg-green-700 shadow hover:bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Embed
        </button>
        <button
          onClick={onClose}
          className="border border-gray-300 hover:border-gray-300 ml-3 px-4 py-2 rounded-md"
        >
          Cancel
        </button>
      </div>
    </ModalWrapper>
  );
};

export default EmbedPicture;
