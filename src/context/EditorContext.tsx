import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface EditorContextProps {
  title: string;
  setTitle: (title: string) => void;
  content: string;
  setContent: (content: string) => void;
  showEmbed: boolean;
  toggleEmbeds: () => void;
  image: string | null;
  setImage:Dispatch<SetStateAction<string | null>>;
  video: string | null;  
  setVideo: Dispatch<SetStateAction<string | null>>;
  showModal: string | null;
  handleEmbedModal: (embedType: string) => void;
  closeModal: () => void;
}

interface EditorProviderProps {
  children: ReactNode;
}

const EditorContext = createContext<EditorContextProps | undefined>(undefined);

export const EditorProvider: React.FC<EditorProviderProps> = ({ children }) => {
  const [title, setTitle] = useState<string>("Add post title");
  const [content, setContent] = useState<string>("");
  const [showEmbed, setShowEmbed] = useState<boolean>(false);
  const [image, setImage] = useState<string | null>(null); 
  const [video, setVideo] = useState<string | null>(null);
  const [showModal, setShowModal] = useState<string | null>(null);

  const toggleEmbeds = () => {
    setShowEmbed((prev) => !prev);
  };

  const handleEmbedModal = (embedType: string) => {
    setShowModal(embedType);
  };

  const closeModal = () => {
    setShowModal(null);
  };

  return (
    <EditorContext.Provider value={{ title, setTitle, content, setContent, toggleEmbeds, showEmbed, image, setImage, video, setVideo, showModal, handleEmbedModal, closeModal }}>
      {children}
    </EditorContext.Provider>
  );
};

export const useEditor = (): EditorContextProps => {
  const context = useContext(EditorContext);

  if (!context) {
    throw new Error(
      "useEditor must be called within a component that is wrapped by an EditorProvider"
    );
  }

  return context;
};
