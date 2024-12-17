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
    console.log(isOpen);
  }

  return (
    <>
      <div className={`burguer-menu flex flex-col gap-10 justify-end h-[100vh] w-full fixed top-0 left-0 z-50 bg-white ${isOpen ? "menu-open" : "menu-close"}`}>
        <Nav />
        <nav className="flex gap-20 w-full justify-between items-end p-10">
          <ul className="flex flex-col w-full">
            {pages.map((item, index) => (
              <NavItem
                key={index}
                name={item.name}
                link={item.pathname}
                onMouseEnter={() => handleHover(index)}
              />
            ))}
          </ul>
          <aside>
            {pages[page].huella}
          </aside>
        </nav>
        <footer>
          <img
            className="w-full"
            src="../../public/imgs/footer-menu.png"
            alt=""
          />
        </footer>
      </div>
    </>
  );
}
