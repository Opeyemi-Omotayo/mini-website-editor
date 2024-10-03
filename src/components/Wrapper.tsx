import { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-[90%] lg:w-[70%] xl:w-[65%] 2xl:w-[60%] border border-gray-300">
        {children}
      </div>
    </div>
  );
};

export default Wrapper;
