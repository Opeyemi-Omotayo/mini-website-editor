import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import CustomDropdown from "../CustomDropDown";

const EmbedSocial: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [platform, setPlatform] = useState("");
  const [url, setUrl] = useState("");
  const [code, setCode] = useState("");
  const [errors, setErrors] = useState({
    platform: "",
    url: "",
    code: "",
  });

  const handleToggle = () => {
    setIsDisabled((prev) => !prev);
  };

  const handlePlatformChange = (value: string) => {
    setPlatform(value);
    setErrors((prev) => ({ ...prev, platform: "" }));
  };
  
  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
    setErrors((prev) => ({ ...prev, url: "" }));
  };

  const handleCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCode(event.target.value);
    setErrors((prev) => ({ ...prev, code: "" }));
  };

  const handleSubmit = () => {
    const newErrors = {
      platform: platform === "" ? "Please select a platform" : "",
      url: url === "" ? "Please enter a URL" : "",
      code: code === "" ? "Please enter a code" : "",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      onClose();
    }
  };

  return (
    <ModalWrapper>
      <div className="mb-4">
        <p className="text-gray-500 mb-2 text-xs uppercase">
          social media platform
        </p>
        <CustomDropdown platform={platform} errors={errors} handlePlatformChange={handlePlatformChange}/>
        {errors.platform !== "" && (
          <p className="text-red-500 text-xs">{errors.platform}</p>
        )}
      </div>
      <div className="mb-4">
        <p className="text-gray-500 mb-2 text-xs uppercase">URL</p>
        <input
          className={`bg-grey100 border border-emerald150 hover:border-primary100 focus:border-primary100 outline-none rounded-md p-3 w-full ${
            errors.url !== "" ? "border-red-500" : ""
          }`}
          type="url"
          value={url}
          onChange={handleUrlChange}
          placeholder="Enter social URL"
        />
        {errors.url !== "" && (
          <p className="text-red-500 text-xs">{errors.url}</p>
        )}
      </div>
      <div className="mb-4">
        <p className="text-gray-500 mb-2 text-xs uppercase">code</p>
        <input
          className={`bg-grey100 border border-emerald150 hover:border-primary100 focus:border-primary100 outline-none rounded-md p-3 w-full ${
            errors.code !== "" ? "border-red-500" : ""
          }`}
          type="url"
          value={code}
          onChange={handleCodeChange}
          placeholder="Enter code"
        />
        {errors.code !== "" && (
          <p className="text-red-500 text-xs">{errors.code}</p>
        )}
      </div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-gray-500">Disable caption</p>
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only"
            checked={isDisabled}
            onChange={handleToggle}
          />
          <div className="w-8 h-4 bg-gray-200 rounded-full shadow-inner"></div>
          <div
            className={`absolute left-0 w-4 h-4 transition transform bg-white rounded-full shadow ${
              isDisabled ? "translate-x-full bg-green-600" : ""
            }`}
          ></div>
        </label>
      </div>
      <div className="">
        <button
          onClick={handleSubmit}
          className="bg-primary text-sm font-semibold shadow hover:bg-primary500 text-white px-4 py-2 rounded-md"
        >
          Embed
        </button>
        <button
          onClick={onClose}
          className="border border-emerald250 hover:border-primary hover:text-primary text-gray-600 font-semibold text-sm ml-3 px-4 py-2 rounded-md"
        >
          Cancel
        </button>
      </div>
    </ModalWrapper>
  );
};

export default EmbedSocial;
