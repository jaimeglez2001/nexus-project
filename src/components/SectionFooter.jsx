import "../style/typography.css";
import Cta from "./ctas/Cta.jsx";
import React from "react";
import PAGES from "../data/PAGES.jsx";
import { useState, useEffect } from "react";

export default function SectionFooter() {
  const EXPLORE = PAGES[1].subPages;
  const [activePage, setActivePage] = useState(0);

  function handleReload() {
    if (location.pathname === "/explore/conexion-humana") {
      setActivePage(0);
    } else if (location.pathname === "/explore/relaciones-interpersonales") {
      setActivePage(1);
    } else if (location.pathname === "/explore/relaciones-espaciales") {
      setActivePage(2);
    } else if (location.pathname === "/nexus") {
      setActivePage(3);
    }
  }

  useEffect(() => {
    handleReload();
  });

  return (
    <footer className="flex items-center justify-center gap-20 p-10 relative h-[600px]">
      <article className="flex flex-col items-end gap-5 pb-20 z-10">
        <h2 className="flex flex-col sinteca-sb text-[48px] pt-40 tracking-tighter leading-[1%]">
          <span className="pl-10">
            {" "}
            {activePage < 2 && EXPLORE[activePage + 1].sectionName}
            {activePage === 2 && `Descubre`}
            {activePage === 3 && `Crea tu`}
          </span>
          <strong className="pixel-sm font-normal mt-[-20px]">
            {activePage < 2 && EXPLORE[activePage + 1].sectionDisplay}
            {activePage === 2 && `${PAGES[2].name}`}
            {activePage === 3 && `Huella`}
          </strong>
        </h2>
        <Cta
          name={activePage === 3 ? "Crea tu huella" : "Explorar más"}
          link={`${activePage < 2 ? EXPLORE[activePage + 1].pathname : ''}${
            activePage === 2 ? PAGES[2].pathname : ''
          }${activePage === 3 ? PAGES[3].pathname : ''}`}
          color="white"
        />
      </article>
      <figure className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[378px] h-[550px]">
        <img
          className="w-full h-full object-cover"
          src={`${activePage < 2 ? `${EXPLORE[activePage + 1].image}` : ""}
           ${activePage === 2 ? PAGES[2].image : ""}   
          ${activePage === 3 ? PAGES[3].image : ""}`}
          alt=""
        />
      </figure>
    </footer>
  );
}
