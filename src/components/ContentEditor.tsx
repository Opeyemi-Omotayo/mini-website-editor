import React, { useState, useRef } from "react";
import Embeds from "./Embeds";
import { useEditor } from "../context/EditorContext";

const CustomTextEditor: React.FC = () => {
  const [content, setContent] = useState<string>("");
  const { toggleEmbeds, showEmbed, image } = useEditor();
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

  const editorRef = useRef<HTMLDivElement | null>(null);

  const handleInput = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
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

  return (
    <div>
      {content && (
        <div className="flex space-x-2 mb-2 p-2 bg-white transition-all duration-1000 ease-in-out">
          <button
            className={`px-4 py-1 font-bold ${
              fontStyle.bold ? "bg-gray-100 rounded-md" : ""
            }`}
            onClick={() => toggleStyle("bold")}
          >
            B
          </button>
          <button
            className={`px-4 py-1 italic ${
              fontStyle.italic ? "bg-gray-100 rounded-md" : ""
            }`}
            onClick={() => toggleStyle("italic")}
          >
            I
          </button>
          <button
            className={`px-4 py-1 underline ${
              fontStyle.underline ? "bg-gray-100 rounded-md" : ""
            }`}
            onClick={() => toggleStyle("underline")}
          >
            U
          </button>
        </div>
      )}
      {isEditing ? (
        <textarea
          className={`outline-none bg-gray-100 text-sm w-full border-none min-h-8  ${
            fontStyle.bold ? "font-bold" : ""
          } ${fontStyle.italic ? "italic" : ""} ${
            fontStyle.underline ? "underline" : ""
          }`}
          value={content}
          onChange={handleInput}
          onBlur={handleBlur}
          autoFocus
        />
      ) : (
        <p
          className={`w-full text-sm  min-h-8 ${
            fontStyle.bold ? "font-bold" : ""
          } ${fontStyle.italic ? "italic" : ""} ${
            fontStyle.underline ? "underline" : ""
          }`}
          onClick={handleClick}
        >
          {content === "" ? "Add content" : content}
        </p>
      )}
     {image && <img src={image} alt="uploaded" className=" h-[220px] lg:h-[280px] w-full" />}
      {content && (
        <button
          onClick={toggleEmbeds}
          className="bg-emerald-50 text-xl text-center text-gray-600 px-3 py-1 rounded-[50%]"
        >
          +
        </button>
      )}
      {showEmbed && content && <Embeds />}
    </div>
  );
};

export default CustomTextEditor;
