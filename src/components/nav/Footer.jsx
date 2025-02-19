import { Link } from "react-router-dom";
import "../../style/typography.css";
import { MenuContext } from "../../context/menu.jsx";
import { useContext } from "react";
import PAGES from "../../data/PAGES.jsx";

export default function Footer() {

  return (
    <>
      <nav className=" w-screen flex justify-between items-center py-2 px-4 md:px-10 bg-[--nexusBlue] border-t-[1px] border-white">
        <Link to="/">
          <svg
          className="logo_nav"
            height="20"
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
        

      </nav>
    </>
  );
}
