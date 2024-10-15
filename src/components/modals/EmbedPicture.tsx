import React, { useRef, useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { useEditor } from "../../context/EditorContext";

const EmbedPicture: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { setImage, setVideo } = useEditor();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [error, setError] = useState<string>("");

  const handleFileUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event?.target?.files?.[0];
    if (file) {
      setError("");
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedFile(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const closeModal = () => {
    onClose();
  };

  const handleEmbedClick = () => {
    if (selectedFile) {
      setVideo("");
      setImage(selectedFile);
      closeModal();
    } else {
      setError("Please select an image to embed.");
    }
  };

  return (
    <ModalWrapper>
      <h2 className="text-sm pb-4">Upload Image</h2>
      <p className="text-gray-500 mb-2 text-xs uppercase">File Upload</p>
      <div
        onClick={handleFileUploadClick}
        className={`border border-dashed border-primary rounded-md bg-gray-100 p-2 w-full mb-1 h-[141px] lg:h-[150px] text-center flex items-center justify-center cursor-pointer ${
          error ? " border-red-500 " : ""
        }`}
      >
        {selectedFile ? (
          <img
            src={selectedFile}
            alt="Selected"
            className="w-full h-full object-cover"
          />
        ) : (
          <p
            className={`border border-primary700 capitalize rounded-md text-xs font-normal cursor-pointer px-3 py-1.5`}
          >
            Import image from device
          </p>
        )}
      </div>
      {error && <p className="text-xs text-red-500 ">{error}</p>}

      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <div className="mt-4">
        <button
          onClick={handleEmbedClick} 
          className="bg-primary text-sm font-semibold shadow hover:bg-primary500 text-white px-4 py-2 rounded-md"
        >
          Embed
        </button>
        <button
          onClick={closeModal}
          className="border border-emerald250 hover:border-primary hover:text-primary text-gray-600 font-semibold text-sm ml-3 px-4 py-2 rounded-md"
        >
          Cancel
        </button>
      </div>
    </ModalWrapper>
  );
};

export default EmbedPicture;
