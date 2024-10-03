import { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";

const ModalWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-90 flex items-center justify-center">
      <div className="bg-white p-5 rounded-md shadow-lg w-[90%] md:w-[75%] lg:w-[50%]">
        <div className="flex items-center justify-between pb-4">
          <h1 className="text-black text-base font-bold">Embed</h1>
          <IoMdClose className="text-lg font-bold text-black cursor-pointer hover:text-gray-950" />
        </div>
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
