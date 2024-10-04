import { useState } from "react";
import { FaImage } from "react-icons/fa6";
import { IoIosVideocam } from "react-icons/io";
import { TbChartDots3 } from "react-icons/tb";
import EmbedPicture from "./modals/EmbedPicture";
import EmbedVideo from "./modals/EmbedVideo";
import EmbedSocial from "./modals/EmbedSocial";
import { useEditor } from "../context/EditorContext";

const Embeds = () => {
  const { showEmbed, content, showModal, handleEmbedModal, closeModal } = useEditor();

  const embeds = [
    {
      title: "Picture",
      subtitle: "jpeg, png",
      icon: <FaImage className="w-5 h-5 text-gray-700" />,
    },
    {
      title: "Video",
      subtitle: "jw player, youtube",
      icon: <IoIosVideocam className="w-5 h-5 text-gray-700" />,
    },
    {
      title: "Social",
      subtitle: "facebook, snapchat",
      icon: <TbChartDots3 className="w-5 h-5 text-gray-700" />,
    },
  ];


  return (
    <div>
      {showEmbed && content && (
        <div className="bg-white shadow-sm w-[60%] lg:w-[40%] text-sm rounded-md ">
          <p className="uppercase font-normal text-gray-500 p-3 border border-gray-100 ">
            Embeds
          </p>
          {embeds.map((embed, index) => (
            <div
              key={index}
              onClick={() => handleEmbedModal(embed.title)}
              className="text-sm flex items-start p-2 hover:bg-emerald-50 cursor-pointer"
            >
              <div className="mr-3">{embed.icon}</div>
              <div>
                <h1 className="">{embed.title}</h1>
                <p className="text-gray-500">{embed.subtitle}</p>
              </div>
            </div>
          ))}

          {showModal === "Picture" && <EmbedPicture onClose={closeModal} />}
          {showModal === "Video" && <EmbedVideo onClose={closeModal} />}
          {showModal === "Social" && <EmbedSocial onClose={closeModal} />}
        </div>
      )}
    </div>
  );
};

export default Embeds;
