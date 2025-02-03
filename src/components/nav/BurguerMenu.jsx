import "../../style/typography.css";
import Nav from "./Nav.jsx";
import { Link, useLocation } from "react-router-dom";
import NavItem from "./NavItem.jsx";
import PAGES from "../../data/PAGES.jsx";
import { act, useState } from "react";
import {MenuContext} from "../../context/menu.jsx";
import { useContext } from "react";


export default function BurguerMenu() {
  const pages = PAGES || [];
  const [page, setPage] = useState(pages.length > 0 ? 0 : null);
  const {isOpen, handleClick} = useContext(MenuContext);

  function handleHover(e) {
    setPage(e);
  }

  return (
    <>
      <div className={`burguer-menu z-[80] flex flex-col md:flex-row justify-end h-[100vh] w-full fixed top-0 left-0 ${isOpen ? "menu-open" : "menu-close"}`}>
        <nav className="menuNav flex flex-col-reverse md:flex-row gap-20 z-10 h-full w-full justify-between items-end p-5 md:p-10 bg-white">
          <ul className="flex flex-col w-full">
            {pages.map((item, index) => (
              <NavItem
                key={index}
                name={item.name}
                link={item.pathname}
                onMouseEnter={() => handleHover(index)}
                onClick={() => handleClick(isOpen)}
              />
            ))}
          </ul>
          <aside className="md:scale-100 scale-50">
            {pages[page].huella}
          </aside>
        </nav>
        <footer>
          <img
            className="w-[1000px] h-[20vh] md:h-full object-cover" 
            src="/imgs/menu-bg.png"
            alt=""
          />
        </footer>
      </div>
    </>
  );
}
