import "../../style/typography.css";
import { Link } from "react-router-dom";  
import { useState } from "react";

function LargeCta({ name = "Explorar más", link = "#" }) {


  return (
    <>
      <Link to={link} className="flex gap-1 bg-black p-2 rounded-md">
        <span className="body-large white-box rounded-sm">{name}</span>
        <figure className="w-[30px] border-[1px] border-white flex justify-center items-center rounded-sm">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.81185 3.72809L2.22259 11.3174L0.975586 10.0703L8.56485 2.48108L1.87592 2.48108L1.87592 0.717819H11.5751V10.417H9.81185V3.72809Z"
              fill="white"
            />
          </svg>
        </figure>
      </Link>
    </>
  );
}

function NormalCta({ name = "Explorar más", link = "#", color = "black" }) {

  return (
    <>
      <Link to={link} className={`cta ${color === "white" ? 'cta-white' : 'cta'} flex gap-1 bg-black p-[6px] rounded-md`}>
        <span className= {`body-med ${color === "white" ? 'white-box' : 'black-box'} rounded-sm`}>{name}</span>
        <figure className="w-[24px] border-[1px] border-white rounded-sm flex justify-center items-center">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.81185 3.72809L2.22259 11.3174L0.975586 10.0703L8.56485 2.48108L1.87592 2.48108L1.87592 0.717819H11.5751V10.417H9.81185V3.72809Z"
              fill="white"
            />
          </svg>
        </figure>
      </Link>

    </>
  );
}




function Cta({ name = "Explorar más", link = "#", size = "normal", color = "black" }) {
  return(
    <>
      {size === "large" ? <LargeCta name={name} link={link} /> : <NormalCta color={color} name={name} link={link} />}
    </>
  )
}

export default Cta;
