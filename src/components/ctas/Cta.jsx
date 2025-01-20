import "../../style/typography.css";
import { Link } from "react-router-dom";  

function LargeCta({ name = "Explorar más", link = "#" }) {
  return (
    <>
      <Link to={link} className="flex gap-2">
        <span className="body-large black-box">{name}</span>
        <figure className="w-[30px] bg-[--nexusBlue] flex justify-center items-center">
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
      <Link to={link} className={`${color === "white" ? 'cta-white' : 'cta'} flex gap-2`}>
        <span className= {`body-med ${color === "white" ? 'white-box' : 'black-box'}`}>{name}</span>
        <figure className="w-[24px] bg-[--nexusBlue] flex justify-center items-center">
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
