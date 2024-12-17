import "../../style/typography.css";
import { Link, useLocation } from "react-router-dom";  
import React, { useState, useEffect } from "react";

export default function SingleNav() {
  const location = useLocation();
  const [activePage, setActivePage] = useState(1); // Controlador del índice activo
  function handleReload() {
    if(location.pathname === "/explore/conexion-humana"){
      setActivePage(1);
    }
    else if(location.pathname === "/explore/relaciones-interpersonales"){
      setActivePage(2);
    }
    else if(location.pathname === "/explore/relaciones-espaciales"){
      setActivePage(3);
    }
  }

  useEffect(() => {
    handleReload();
  });


  return (
    <>
      <nav>
        <ul className="flex gap-2 z-[99] top-20 left-10 fixed">
          <li>
            <Link className={`${activePage === 1 ? "black-box" : "white-box"}`} to="/explore/conexion-humana">
              Conexión humana
            </Link>
          </li>
          <li>
            <Link className={`${activePage === 2 ? "black-box" : "white-box"}`} to="/explore/relaciones-interpersonales">
              Relaciones interpersonales
            </Link>
          </li>
          <li>
            <Link className={`${activePage === 3 ? "black-box" : "white-box"}`} to="/explore/relaciones-espaciales">
              Relaciones espaciales
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
