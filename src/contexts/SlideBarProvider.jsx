import { createContext, useState } from "react";
export const slideBarContext = createContext();

function SlideBarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [type, setType] = useState("cart");

  const value = {
    isOpen,
    setIsOpen,
    type,
    setType,
  };
  return (
    <slideBarContext.Provider value={value}>
      {children}
    </slideBarContext.Provider>
  );
}

export default SlideBarProvider;
