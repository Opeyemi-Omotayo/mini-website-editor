import React, { useState, useRef, useEffect } from "react";
import Embeds from "./Embeds";
import { useEditor } from "../context/EditorContext";
import {
  CiTextAlignCenter,
  CiTextAlignLeft,
  CiTextAlignRight,
} from "react-icons/ci";

const CustomTextEditor: React.FC = () => {
  const {
    toggleEmbeds,
    image,
    video,
    content,
    setContent,
  } = useEditor();
  const [isEditing, setIsEditing] = useState(false);
  const [fontStyle, setFontStyle] = useState<{
    bold: boolean;
    italic: boolean;
    underline: boolean;
  }>({
    bold: false,
    italic: false,
    underline: false,
  });

  const [textAlign, setTextAlign] = useState<"left" | "center" | "right">(
    "left"
  );

  const editorRef = useRef<HTMLDivElement | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (textareaRef.current) {
      setContent(event.target.value);
    }
  };

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    if (
      editorRef.current &&
      editorRef.current.contains(e.relatedTarget as Node)
    ) {
      return;
    }
    setIsEditing(false);
  };

  const toggleStyle = (style: keyof typeof fontStyle) => {
    setFontStyle((prev) => ({
      ...prev,
      [style]: !prev[style],
    }));
  };

  const handleAlignment = (alignment: "left" | "center" | "right") => {
    setTextAlign(alignment);
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [content]);

  return (
    <div className="font-openSans">
      <div
        className={`transition-all duration-1000 ease-out flex space-x-2 mb-2 bg-white border border-emerald150 rounded-md shadow-sm shadow-green-50 overflow-hidden ${
          content ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <button
          className={`px-4 py-1 ml-2 my-2 font-bold ${
            fontStyle.bold ? "bg-gray-100 rounded-md" : ""
          }`}
          onClick={() => toggleStyle("bold")}
        >
          B
        </button>
        <button
          className={`px-4 py-1 my-2 italic ${
            fontStyle.italic ? "bg-gray-100 rounded-md" : ""
          }`}
          onClick={() => toggleStyle("italic")}
        >
          I
        </button>
        <button
          className={`px-4 py-1 my-2 underline ${
            fontStyle.underline ? "bg-gray-100 rounded-md" : ""
          }`}
          onClick={() => toggleStyle("underline")}
        >
          U
        </button>
        <span className="border-r-2" />
        <button
          className={`px-4 py-1 my-2 ${
            textAlign === "center" && "bg-gray-100 rounded-md"
          }`}
          onClick={() => handleAlignment("center")}
        >
          <CiTextAlignCenter />
        </button>
        <button
          className={`px-4 py-1 my-2 ${
            textAlign === "left" && "bg-gray-100 rounded-md"
          }`}
          onClick={() => handleAlignment("left")}
        >
          <CiTextAlignLeft />
        </button>
        <button
          className={`px-4 py-1 my-2 mt-1.5 ${
            textAlign === "right" && "bg-gray-100 rounded-md "
          }`}
          onClick={() => handleAlignment("right")}
        >
          <CiTextAlignRight />
        </button>
      </div>
     {isEditing ? (
       <textarea
         ref={textareaRef}
         className={`outline-none bg-[#FAFAFA] mb-1.5 text-sm text-[#343E37] w-full border-none resize-none min-h-8 ${
           fontStyle.bold ? "font-bold" : ""
         } ${fontStyle.italic ? "italic" : ""} ${
           fontStyle.underline ? "underline" : ""
         } text-${textAlign}`}
         value={content}
         onChange={handleInput}
         onBlur={handleBlur}
         autoFocus
       />
     ) : (
       <p
         className={`w-full text-sm mb-1.5 ${content === "" ? "text-[#CCCFCD]" : "text-[#343E37]"} whitespace-pre-wrap break-words ${
           fontStyle.bold ? "font-bold" : ""
         } ${fontStyle.italic ? "italic" : ""} ${
           fontStyle.underline ? "underline" : ""
         } text-${textAlign} min-h-8 overflow-y-auto`}
         onClick={handleClick}
       >
         {content === "" ? "Add content" : content}
       </p>
     )}

      {video ? (
        <iframe
          width="100%"
          height="300"
          src={video}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded Video"
        ></iframe>
      ) : (
        image && (
          <img
            src={image}
            alt="uploaded"
            className="h-[220px] lg:h-[280px] w-full"
          />
        )
      )}

      {content && (
        <button
          onClick={toggleEmbeds}
          className="bg-emerald150 text-xl text-center text-gray-600 px-3 py-1 my-2 rounded-[50%]"
        >
          +
        </button>
      )}

      <Embeds />
    </div>
  );
};

export default CustomTextEditor;
