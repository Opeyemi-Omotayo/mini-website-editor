import { useState } from "react";
import Wrapper from "../components/Wrapper";
import { useEditor } from "../context/EditorContext";
import ContentEditor from "../components/ContentEditor";

const Home = () => {
  const [isEditing, setIsEditing] = useState(false);
  const { title, setTitle } = useEditor();

  const handleTitleClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <Wrapper>
      <div className="font-openSans">
        {isEditing ? (
          <input
            type="text"
            value={title}
            onChange={handleInputChange}
            onBlur={handleBlur}
            autoFocus 
            className="text-xl lg:text-2xl font-bold py-3 bg-[#FAFAFA]  outline-none w-full"
          />
        ) : (
          <h1
            className="text-xl lg:text-2xl font-bold py-3 "
            onClick={handleTitleClick}
          >
            {title}
          </h1>
        )}
      </div>
      <ContentEditor />
    </Wrapper>
  );
};

export default Home;
