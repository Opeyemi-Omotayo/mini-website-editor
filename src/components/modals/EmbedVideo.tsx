import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { useEditor } from "../../context/EditorContext";
import CustomDropdown from "../CustomDropDown";

const EmbedVideo: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { setVideo, toggleEmbeds, setImage } = useEditor();
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [platform, setPlatform] = useState<string>("");
  const [errors, setErrors] = useState({
    platform: "",
    url: "",
  });

  const handlePlatformChange = (value: string) => {
    setPlatform(value);
    setErrors((prev) => ({ ...prev, platform: "" }));
  };

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVideoUrl(event.target.value);
    setErrors((prev) => ({ ...prev, url: "" }));
  };

  const handleEmbedClick = () => {
    const newErrors = {
      platform: platform === "" ? "Please select a platform" : "",
      url: videoUrl === "" ? "Please enter URL" : "",
    };

    setErrors(newErrors);

    if (Object.values(newErrors).every((error) => error === "")) {
      const youtubeRegex =
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/;
      const match = videoUrl.match(youtubeRegex);

      if (match && match[1]) {
        const embedUrl = `https://www.youtube.com/embed/${match[1]}`;
        setImage("");
        setVideo(embedUrl);
        toggleEmbeds();
        onClose();
      }
    }
  };

  const platformOptions = [
    {
      id: 1,
      name: "Youtube",
    },
  ];

  return (
    <ModalWrapper>
      <div className="mb-4">
        <p className="text-gray-500 mb-2 text-xs uppercase">Video provider</p>
        <CustomDropdown
          platform={platform}
          errors={errors}
          handlePlatformChange={handlePlatformChange}
          platformOptions={platformOptions}
        />
         {errors.platform !== "" && (
          <p className="text-red-500 text-xs">{errors.platform}</p>
        )}
      </div>
      <div className="mb-4">
        <p className="text-gray-500 mb-2 text-xs uppercase">URL</p>
        <input
          className={`bg-grey100 border border-emerald150 ${
            errors.url ? "border-red700" : ""
          } hover:border-primary100 focus:border-primary100 outline-none rounded-md p-3 w-full`}
          type="url"
          placeholder="Enter video URL"
          value={videoUrl}
          onChange={handleUrlChange}
        />
        {errors.url !== "" && (
          <p className="text-red-500 text-xs mt-1">{errors.url}</p>
        )}
      </div>
      <div className="">
        <button
          onClick={handleEmbedClick}
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

export default EmbedVideo;
