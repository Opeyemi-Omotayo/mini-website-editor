import ModalWrapper from "./ModalWrapper";

const EmbedVideo: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <ModalWrapper>
      <div className="mb-4">
        <p className="text-gray-500 mb-2 text-sm uppercase">Video provider</p>
        <select className="bg-gray-100 outline-none rounded-sm p-3 w-full">
          <option value="youtubr">Youtube</option>
          <option value="jw">JW player</option>
        </select>
      </div>
      <div className="mb-4">
        <p className="text-gray-500 mb-2 text-sm uppercase">URL</p>
        <input
          className="bg-gray-100 outline-none rounded-sm p-3 w-full"
          type="url"
          placeholder="Enter video URL"
        />
      </div>
      <div className="">
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

export default EmbedVideo;
