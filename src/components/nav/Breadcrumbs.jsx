import "../../style/typography.css";
import { Link } from "react-router-dom";
import PAGES from "../../data/PAGES.jsx";
import { useState, useEffect } from "react";

export default function Breadcrumbs() {
  const [activePage, setActivePage] = useState("");
  const [activeSubPage, setActiveSubPage] = useState("");
  function handleReload() {
    PAGES.findIndex((page) => {
      if (location.pathname.includes(page.pathname)) {
        setActivePage(page.name);
      }
    });

    PAGES[1].subPages.findIndex((page) => {
      if (location.pathname.includes(page.pathname)) {
        setActiveSubPage(page.name);
      }
    });
  }
  useEffect(() => {
    handleReload();
  });

  return (
    <nav className="w-full flex flex-col gap-4 px-10 absolute top-[60px] z-50">
      <ul className="flex gap-3">
        <li className="flex gap-3 sinteca-med text-[14px]">
          <Link to="/" className="underline underline-offset-[4px] text-black">
            Home
          </Link>
          <span>|</span>
        </li>
        {activeSubPage === "" ? (
          <li className="small">{activePage}</li>
        ) : (
          <li className="flex gap-3 sinteca-med text-[14px]">
            <Link
              to="/"
              className="underline underline-offset-[4px] text-black"
            >
              {activePage}
            </Link>
            <span>|</span>
          </li>
        )}
        <li className="small">{activeSubPage}</li>
      </ul>
    </nav>
  );
}
