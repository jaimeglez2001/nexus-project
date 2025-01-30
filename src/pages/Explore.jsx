import React, { useState, useId } from "react";
import "../style/typography.css";
import ExploreCard from "/src/components/ExploreCard.jsx";
import Breadcrumbs from "../components/nav/Breadcrumbs.jsx";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PAGES from "../data/PAGES.jsx";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Explore() {
  const [activeSection, setActiveSection] = useState(1); // Controlador del índice activo
  const explore = PAGES[1].subPages;

  useGSAP(() => {
    const contents = gsap.utils.toArray(".explore-card");

    gsap.to(contents, {
      xPercent: -103.5 * (contents.length - 1),
      scrollTrigger: {
        trigger: "#explore-holder",
        pin: true,
        scrub: 1,
        onUpdate: (self) => {
          // Calculando la sección activa en función del progreso del scroll
          const index = Math.round(self.progress * (contents.length - 1));
          setActiveSection(index + 1); // Actualiza el estado con el índice
        },
      },
    });
  });

  const sectionId = useId();

  return (
    <>
      <main className="w-full flex flex-col gap-10 pb-10 bg-white">
        <Breadcrumbs />
        <h1 className="blue-box">Explora</h1>
        <ul
          id="explore-holder"
          className={`flex overflow-x-hidden w-[99vw] h-[300vw] absolute top-0 left-0`}
        >
          {explore.map((explore, index) => {
            return (
              <ExploreCard
                key={index}
                id={sectionId}
                sectionName={explore.sectionName}
                sectionDisplay={explore.sectionDisplay}
                bodyText={explore.bodyText}
                image={explore.image}
                link={explore.pathname}
                svg={explore.svg}
                clipPath={explore.path}
                index={index}
                huella={explore.huella}
              />
            );
          })}
        </ul>

        <footer className="flex flex-col gap-4 fixed bottom-10 left-10 z-50">
          <aside className="flex gap-2 items-center">
            <span className="black-box small">
              {String(activeSection).padStart(2, "0")}
            </span>
            <strong className="black-box small">
              {
                [
                  "Conexión Humana",
                  "Relaciones Interpersonales",
                  "Relaciones Espaciales",
                ][activeSection - 1]
              }
            </strong>
          </aside>
          <nav className="w-full flex">
            <ul className="flex gap-2">
              {["section_1", "section_2", "section_3"].map((id, index) => (
                <li className="flex " key={id}>
                  <a
                    className={`h-[8px] ${
                      activeSection === index + 1
                        ? "nav-explore-active"
                        : "nav-explore"
                    }`}
                    href={`#${id}`}
                  ></a>
                </li>
              ))}
            </ul>
          </nav>
        </footer>
      </main>
    </>
  );
}

export default Explore;
