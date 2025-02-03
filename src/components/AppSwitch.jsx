import { useState } from "react";
import { AppHuellaContext } from "../context/appHuella.jsx";
import "../style/typography.css";
import { useContext } from "react";

function AppSwitch({changeStage}) {
  const { stage, handleClick } = useContext(AppHuellaContext);

  return (
    <div className="absolute top-20 right-10 flex gap-2 items-center">
        <span className="small">{stage === 1 ? "Modo Guiado" : "Modo Manual"}</span>
        <button onClick={() => {handleClick(changeStage)}} className={`switch ${stage === 2 && 'enabled'} flex items-center w-[60px] h-[32px] border-[1px] border-[#194bf9] rounded-full p-[2px] text-[14px] text-[#194bf9] sinteca-sb`}>
          <div className="atom-switch flex items-center justify-center rounded-full h-[26px] w-[26px] border-[1px] border-[#194bf9]">

          </div>
        </button>
    </div>
  )

}

export default AppSwitch;