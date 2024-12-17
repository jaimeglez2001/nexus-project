import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prevState) => !prevState); // Alterna el estado
  }

  return (
    <MenuContext.Provider value={{ isOpen, handleClick }}>
      {children}
    </MenuContext.Provider>
  );
}

