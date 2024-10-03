import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="flex items-center justify-center flex-col font-serif h-full ">
      <div className="w-[90%] lg:w-[65%] xl:w-[55%] 2xl:w-[50%]">
        <div className=" min-h-[90vh] border border-gray-200 rounded-sm shadow-sm mt-4 md:mt-8 lg:mt-12 xl:mt-20">
          <div className="p-6 border-b border-gray-200" />
          <div className="p-4">{children}</div>
        </div>
        <div className="bg-white flex justify-end p-2">
          <p className="text-gray-500 text-sm">0/1000 words</p>
        </div>
        <div className="flex  justify-end my-3">
        <button className="uppercase text-sm  text-white bg-green-700 hover:bg-green-600 px-3 py-2 rounded-md shadow-md">
          post
        </button>
        </div>    
      </div>
    </div>
  );
};

export default Wrapper;
