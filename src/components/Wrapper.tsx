import { ReactNode, useState } from "react";
import { useEditor } from "../context/EditorContext";
import toast from "react-hot-toast";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  const { content, title, image, video } = useEditor();
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  const getWordCount = (text: string | null) => {
    return text ? text.trim().split(/\s+/).length : 0;
  };

  const handlePost = () => {
      setIsButtonClicked(true);
      toast.success("Successful🎉");
  };

  return (
    <div className="flex items-center justify-center bg-[#FAFAFA] flex-col h-full ">
      <div className="w-[90%] lg:w-[65%] xl:w-[55%] 2xl:w-[50%]">
        <div className="min-h-[100vh] border border-emerald150 shadow-green-100 rounded-t-md shadow mt-4 md:mt-8 lg:mt-12 xl:mt-20">
          <div className="p-6 border-b border-emerald150" />
          <div className="p-4">{children}</div>
        </div>
        <div className="bg-white flex justify-end p-2 rounded-b-md shadow-sm border-emerald150 shadow-green-100">
          <p className="text-gray-500 text-sm">
            {getWordCount(content)}/1000 words
          </p>
        </div>
        <div className="flex justify-end my-3">
          <button
            onClick={handlePost}
            disabled={!title || !content || (!image && !video)}
            className={`uppercase text-sm text-white bg-primary hover:bg-primary500 px-3 py-2 rounded-md shadow-md ${
              !title || !content || (!image && !video)
                ? "cursor-not-allowed opacity-40"
                : ""
            } ${isButtonClicked ? "bg-primary600" : ""}`}
          >
            post
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
