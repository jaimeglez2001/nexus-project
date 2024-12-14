import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <>
      <nav className=" w-full flex justify-between items-center pt-4 px-10 fixed z-50 difference">
        <Link to="/">
          <svg
            width="74"
            height="25"
            viewBox="0 0 74 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00821 6.24619V18.567H0V0.0292969H13.9033V6.24619H7.00821Z"
              fill="white"
            ></path>
            <path
              d="M13.9033 6.24619H20.2333V24.5578H13.9033V6.24619Z"
              fill="white"
            ></path>
            <path
              d="M22.8416 12.011V24.5578H29.7367V12.011H36.5188V18.567H43.64V24.5578H50.4221V12.011H43.64V6.24619H50.4221V0.0292969H43.64V6.24619H36.5188V0.0292969H22.8416V6.24619H29.7367V12.011H22.8416Z"
              fill="white"
            ></path>
            <path
              d="M52.8539 18.567V24.5578H67.2094V18.567H73.7654V12.011H59.749V6.24619H73.7654V0.0292969H59.749V6.24619H52.8539V12.011H59.749V18.567H52.8539Z"
              fill="white"
            ></path>
          </svg>
        </Link>
        <Link className="small white-box" to="/">
          Inicio
        </Link>
        <Link className="small white-box" to="/explore">
          Explorar
        </Link>
        <svg
          width="25"
          height="23"
          viewBox="0 0 25 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.34375 0.295898H25.0002V9.62969H0.34375V0.295898Z"
            fill="white"
          ></path>
          <path
            d="M0.34375 13.2238H25.0002V22.5576H0.34375V13.2238Z"
            fill="white"
          ></path>
        </svg>
      </nav>
    </>
  );
}
