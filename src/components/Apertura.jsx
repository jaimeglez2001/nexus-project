import {Link} from "react-router-dom";
import TerciaryCta from "./ctas/TerciaryCta.jsx";

export default function Apertura({ children }) {
  return (
    <>
      <section className="flex flex-col items-center justify-center h-[85vh] bg-white relative">
      <TerciaryCta name="Volver" link="/explore" />
        <figure>
          <img
            src="../public/imgs/firmas/firma-blanca.png"
            alt=""
            className="absolute z-[50] right-[50%] translate-x-[30%] top-[60%] translate-y-[-40%]  difference"
          />
        </figure>
        {children}
      </section>
    </>
  );
}
