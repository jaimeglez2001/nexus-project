import React, { useState, useEffect } from "react";
import Cta from "/src/components/cta.jsx";
import "../style/typography.css";
import ExploreCard from "/src/components/ExploreCard.jsx";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Explore() {

  const [activeSection, setActiveSection] = useState(1); // Controlador del índice activo

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
        }
      },
    });
  });


  return (
    <>
      <main className="w-full flex flex-col gap-10 pb-10 bg-white">
        <header className="w-full flex flex-col gap-4 px-10 top-20 z-50 fixed">
          <ul className="flex gap-2 sinteca">
            <li>
              <a href="/">Inicio</a>
            </li>
            /
            <li>Explora</li>
          </ul>
          <h1 className="blue-box">Explora</h1>
        </header>

        <ul
          id="explore-holder"
          className={`flex overflow-x-hidden w-[99vw] h-[300vw] absolute top-0 left-0`}
        >
          <ExploreCard
            id="section_1"
            sectionName="Conexión"
            sectionDisplay="humana"
            bodyText="Definida como la sensación de cercanía y pertenencia que se experimenta al establecer relaciones de apoyo con el entorno circundante"
            image="explora-conexion-humana"
            link="/explore/conexion-humana"
          />
          <ExploreCard
            id="section_2"
            sectionName="Relaciones"
            sectionDisplay="interpersonales"
            bodyText="En el análisis de las complejidades inherentes a las relaciones humanas, resulta esencial dividirlas en diversas categorías fundamentales"
            image="relaciones-interpersonales-link"
            link="/explore/relaciones-interpersonales"
          />
          <ExploreCard
            id="section_3"
            sectionName="Relaciones"
            sectionDisplay="espaciales"
            bodyText="El comportamiento humano se concibe como el resultado de un campo, compuesto por hechos coexistentes donde el cambio en una parte afecta al conjunto"
            image="section-3"
            link="/explore/relaciones-espaciales"
          />
        </ul>

        <footer className="flex flex-col gap-4 fixed bottom-10 left-10 z-50">
          <aside className="flex gap-2 items-center">
            <span className="black-box small">{String(activeSection).padStart(2, '0')}</span>
            <strong className="black-box small">{["Conexión Humana", "Relaciones Interpersonales", "Relaciones Espaciales"][activeSection - 1]}</strong>
          </aside>
          <nav className="w-full flex">
            <ul className="flex gap-2">
              {["section_1", "section_2", "section_3"].map((id, index) => (
                <li className="flex " key={id}>
                  <a
                    className={`h-[8px] ${activeSection === index + 1 ? "nav-explore-active" : "nav-explore"}`}
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
