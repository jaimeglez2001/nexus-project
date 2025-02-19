import React, { createContext, useState, useEffect } from "react";

export const AppHuellaContext = createContext();

export function AppHuellaProvider({ children }) {
  const [stage, setStage] = useState(0);

  function handleClick(stage) {
    setStage(stage); // Alterna el estado
  }

  const [formName, setFormName] = useState("");
  const [introState, setIntroState] = useState(true);

  useEffect(() => {
    if (formName !== "") {
      console.log(formName); // Se ejecuta después de que formName se actualiza
    }
  }, [formName]);

  const handleForm = () => {
    event.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    setFormName(document.getElementById("nexusname").value); // Actualiza formName
    setIntroState(false); // Cambia el estado de introState
  };

  return (
    <AppHuellaContext.Provider
      value={{ stage, handleClick, handleForm, introState, formName, setFormName }}
    >
      {children}
    </AppHuellaContext.Provider>
  );
}
