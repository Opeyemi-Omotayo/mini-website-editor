import React, { useState } from "react";
import ModalWrapper from "./ModalWrapper";
import { useEditor } from "../../context/EditorContext";

const EmbedVideo: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const { setVideo, toggleEmbeds, setImage } = useEditor();
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleEmbedClick = () => {
    if (videoUrl) {
      const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/watch\?v=([^&]+)/;
      const match = videoUrl.match(youtubeRegex);

      if (match && match[1]) {
        const embedUrl = `https://www.youtube.com/embed/${match[1]}`;
        setImage("");
        setVideo(embedUrl); 
        toggleEmbeds();
        onClose();
      } else {
        setError("Please enter a valid YouTube URL.");
      }
    } else {
      setError("Please enter a valid video URL.");
    }
  };

  return (
    <ModalWrapper>
      <div className="mb-4">
        <p className="text-gray-500 mb-2 text-sm uppercase">Video provider</p>
        <select className="bg-gray-100 outline-none rounded-sm p-3 w-full">
          <option value="youtube">Youtube</option>
        </select>
      </div>
      <div className="mb-4">
        <p className="text-gray-500 mb-2 text-sm uppercase">URL</p>
        <input
          className="bg-gray-100 outline-none rounded-sm p-3 w-full"
          type="url"
          placeholder="Enter video URL"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
      </div>
      <div className="">
        <button
          onClick={handleEmbedClick}
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

export default EmbedVideo;
