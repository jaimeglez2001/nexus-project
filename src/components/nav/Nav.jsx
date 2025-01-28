import { Link } from "react-router-dom";
import "../../style/typography.css";
import { MenuContext } from "../../context/menu.jsx";
import { useContext } from "react";

export default function Nav() {
  const { isOpen, handleClick, closeMenu } = useContext(MenuContext);

  return (
    <>
      <nav className=" w-full flex justify-between items-center pt-4 px-10 fixed top-0 left-0 z-[99] difference ">
        <Link to="/" onClick={() => closeMenu()}>
          <svg
          className="logo_nav"
            width="66"
            height="25"
            viewBox="0 0 66 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27.1067 6.98139H21.1069V0.981567H33.1065V6.98139H39.1063V12.9812H45.1062V24.9808H39.1063V18.981H33.1065V12.9812H27.1067V6.98139Z"
              fill="white"
            />
            <path
              d="M21.1069 12.9812H27.1067V24.9808H21.1069V12.9812Z"
              fill="white"
            />
            <path
              d="M39.1063 0.981567H45.1062V6.98139H39.1063V0.981567Z"
              fill="white"
            />
            <path
              d="M47.6657 6.98139H53.6655V12.9812H47.6657V6.98139Z"
              fill="white"
            />
            <path
              d="M53.6655 12.9812H65.6754V18.981H59.6756L59.6653 24.9808H47.6657V18.981H53.6655V12.9812Z"
              fill="white"
            />
            <path
              d="M53.6655 0.981567H65.6651V6.98139H53.6655V0.981567Z"
              fill="white"
            />
            <path
              d="M12.4584 1.00055L12.4687 6.98139L6.45856 7.00037V18.981H0.458845L0.45874 1.00055H12.4584Z"
              fill="white"
            />
            <path
              d="M12.4687 6.98139H18.4685V24.9808L12.4687 24.9816V6.98139Z"
              fill="white"
            />
          </svg>
        </Link>
        <button onClick={() => handleClick(isOpen)}>
          {isOpen ? (
            <svg
              className="burguer-menu burguer-menu-nav"
              width="28"
              height="28"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8071 24.2379L24.4071 17.6379L18.9897 12.2205L24.4071 6.80309L17.8072 0.203102L12.3898 5.6205L6.97236 0.203102L0.372375 6.80309L5.78977 12.2205L0.372387 17.6379L6.97237 24.2379L12.3898 18.8205L17.8071 24.2379Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              className="burguer-menu burguer-menu-nav"
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="burguer_path_1"
                d="M0.34375 0.295898H25.0002V9.62969H0.34375V0.295898Z"
                fill="white"
              ></path>
              <path
                id="burguer_path_2"
                d="M0.34375 13.2238H25.0002V22.5576H0.34375V13.2238Z"
                fill="white"
              ></path>
            </svg>
          )}
        </button>
      </nav>
    </>
  );
}
