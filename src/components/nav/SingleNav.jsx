import "../../style/typography.css";
import { Link, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import PAGES from "../../data/PAGES.jsx";

export default function SingleNav() {
  const location = useLocation();
  const [activePage, setActivePage] = useState(1); // Controlador del índice activo
  function handleReload() {
    if (location.pathname === "/explore/conexion-humana") {
      setActivePage(1);
    } else if (location.pathname === "/explore/relaciones-interpersonales") {
      setActivePage(2);
    } else if (location.pathname === "/explore/relaciones-espaciales") {
      setActivePage(3);
    }
  }

  useEffect(() => {
    handleReload();
  });

  const EXPLORE = PAGES[1].subPages

  return (
    <>
      <nav>
        <ul className="flex gap-1 z-[60] top-20 left-10 fixed p-1 bg-white rounded-md">
          {EXPLORE.map((page, index) => {
            return (
              <li key={index}>
                <Link
                  className={`${
                    activePage === index + 1 ? "black-box" : "border-black-box"
                  } rounded-[4px]`}
                  to={page.pathname}
                >
                  {page.name}
                </Link>
              </li>
            )
          })}
          <li>
          </li>
        </ul>
      </nav>
    </>
  );
}
