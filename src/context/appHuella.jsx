import React, { createContext, useState } from "react";

export const AppHuellaContext = createContext();

export function AppHuellaProvider({ children }) {
  const [stage, setStage] = useState(0);

  function handleClick(stage) {
    setStage(stage); // Alterna el estado
  }

  return (
    <AppHuellaContext.Provider value={{ stage, handleClick }}>
      {children}
    </AppHuellaContext.Provider>
  );
}

  