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
  const [totalWidth, setTotalWidth] = useState(0);

  // Función para calcular el ancho total de las tarjetas
  useEffect(() => {
    const calculateWidth = () => {
      const cards = document.querySelectorAll(".explore-card");
      let widthValue = 0;
      cards.forEach((card) => {
        const width = card.getBoundingClientRect().width;
        widthValue += width;
      });
      setTotalWidth(widthValue);
    };

    // Calcular el ancho después de que el componente haya sido montado
    calculateWidth();

    // También podemos escuchar cambios de tamaño de ventana y recalcular el ancho
    window.addEventListener("resize", calculateWidth);

    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", calculateWidth);
    };
  }, []); // Esto se ejecutará solo una vez cuando el componente se monte

  useGSAP(() => {
    const contents = gsap.utils.toArray(".explore-card");

    gsap.to(contents, {
      xPercent: -103.5 * (contents.length - 1),
      scrollTrigger: {
        trigger: "#explore-holder",
        pin: true,
        scrub: 1,
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
            <li>Explora</li>
          </ul>
          <h1 className="blue-box">Explora</h1>
        </header>

        {/* Usa el valor de totalWidth para establecer la altura */}
        <ul
          id="explore-holder"
          className={`flex overflow-x-hidden w-[99vw] h-[${totalWidth}px] absolute top-0 left-0`}
        >
          <ExploreCard
            id="section_1"
            sectionName="Conexión"
            sectionDisplay="humana"
            bodyText="Definida como la sensación de cercanía y pertenencia que se experimenta al establecer relaciones de apoyo con el entorno circundante"
            image="explora-conexion-humana"
          />
          <ExploreCard
            id="section_2"
            sectionName="Relaciones"
            sectionDisplay="interpersonales"
            bodyText="En el análisis de las complejidades inherentes a las relaciones humanas, resulta esencial dividirlas en diversas categorías fundamentales"
            image="relaciones-interpersonales-link"
          />
          <ExploreCard
            id="section_3"
            sectionName="Relaciones"
            sectionDisplay="espaciales"
            bodyText="El comportamiento humano se concibe como el resultado de un campo, compuesto por hechos coexistentes donde el cambio en una parte afecta al conjunto"
            image="section-5"
          />
        </ul>

        <footer className="flex flex-col gap-4 fixed bottom-10 left-10 z-50">
          <aside className="flex gap-2 items-center">
            <span className="black-box small">01</span>
            <strong className="black-box small">Conexión Humana</strong>
          </aside>
          <nav className="w-full flex">
            <ul className="flex gap-2">
              <li className="flex">
                <a className="active h-[8px] w-[200px] bg-[--nexusBlue]" href="#section_1"></a>
              </li>
              <li className="flex">
                <a className="h-[8px] w-[64px] border-[1px] border-solid border-[--nexusBlue]" href="#section_2"></a>
              </li>
              <li className="flex">
                <a className="h-[8px] w-[64px] border-[1px] border-solid border-[--nexusBlue]" href="#section_3"></a>
              </li>
            </ul>
          </nav>
        </footer>
      </main>
    </>
  );
}

export default Explore;
