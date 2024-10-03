import React, {useState} from 'react'
import ModalWrapper from './ModalWrapper'

const EmbedSocial: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [isDisabled, setIsDisabled] = useState(false);

  const handleToggle = () => {
    setIsDisabled((prev) => !prev);
  };
  return (
   <ModalWrapper>
  <div className="mb-4">
        <p className="text-gray-500 mb-2 text-sm uppercase">social media platform</p>
        <select className="bg-gray-100 outline-none rounded-sm p-3 w-full">
          <option value="facebook">Facebook</option>
          <option value="instagram">Instagram</option>
        </select>
      </div>
      <div className="mb-4">
        <p className="text-gray-500 mb-2 text-sm uppercase">URL</p>
        <input
          className="bg-gray-100 outline-none rounded-sm p-3 w-full"
          type="url"
          placeholder="Enter social URL"
        />
      </div>
      <div className="mb-4">
        <p className="text-gray-500 mb-2 text-sm uppercase">code</p>
        <input
          className="bg-gray-100 outline-none rounded-sm p-3 w-full"
          type="url"
          placeholder="Enter code"
        />
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
            isDisabled ? 'translate-x-full bg-green-600' : ''
          }`}
        ></div>
      </label>
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
  )
}

export default EmbedSocial