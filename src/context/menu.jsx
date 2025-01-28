import React, { createContext, useState } from "react";

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prevState) => !prevState); // Alterna el estado
  }

  function closeMenu(){
    setIsOpen(false);
  }

  return (
    <MenuContext.Provider value={{ isOpen, handleClick, closeMenu }}>
      {children}
    </MenuContext.Provider>
  );
}

