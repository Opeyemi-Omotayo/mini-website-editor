import { ReactNode } from "react";
import { IoMdClose } from "react-icons/io";
import { useEditor } from "../../context/EditorContext";

const ModalWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { closeModal } = useEditor();

  return (
    <div
      className={`fixed font-openSans inset-0 bg-black bg-opacity-25 flex items-center justify-center transition-opacity duration-[3000] ease-out`}
    >
      <div
        data-aos="fade-in"
        data-aos-offset="100"
        data-aos-delay="10"
        data-aos-duration="800"
        data-aos-easing="ease-out"
        className={`bg-white p-5 rounded-md shadow-lg w-[90%] md:w-[75%] lg:w-[50%]  `}
      >
        <div className="flex items-center justify-between pb-4">
          <h1 className="text-black text-base font-bold">Embed</h1>
          <IoMdClose
            className="text-lg font-bold text-black cursor-pointer hover:text-gray-950"
            onClick={closeModal}
          />
        </div>

        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;
