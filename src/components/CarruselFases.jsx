import "../style/typography.css";
import Huella from "./Huella.jsx";
import React, { useState, useEffect } from "react";
import fasesRelacion from "../data/FASES.js";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);


export default function CarruselFases() {  
    const [activeSection, setActiveSection] = useState(1); // Controlador del índice activo

    useGSAP(() => {
        const contents = gsap.utils.toArray(".fase");
    
        gsap.to(contents, {
          xPercent: -109.25 * (contents.length - 1),
          scrollTrigger: {
            trigger: "#fases-holder",
            pin: true,
            scrub: true,
            markers: true,  
            start: "20 top", // Empieza cuando la parte superior del trigger (carusel-holder) llegue a la parte superior de la ventana
            end: "+=20000", // Define el final del pin, en este caso 3000px después del comienzo
            onUpdate: (self) => {
                // Calculando la sección activa en función del progreso del scroll
                const index = Math.round(self.progress * (contents.length - 1));
                setActiveSection(index + 1); // Actualiza el estado con el índice
              },
          },
        });
      });

    return (
        <section id="fases-holder" className="flex flex-col items-end pt-40 pb-10 gap-10 h-[100vh] max-w-[100vw] overflow-hidden">
        <div  className="carrusel h-full flex flex-col gap-10 w-full">
          <article className="etapa flex flex-col gap-10 w-full bg-white">
            <header className="flex items-start px-10 justify-between">
              <h2 className="small flex items-center gap-2">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 9 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect y="0.397461" width="9" height="9" fill="#194BF9" />
                </svg>
                Fases de las relaciones
              </h2>
              <span className="h3 max-w-[674px]">
                El proceso de formación y desgaste de las relaciones se define
                a través de diez etapas establecidas
              </span>
            </header>
          </article>
          <ul className="flex h-full w-[100vw] overflow-hidden grow-0 gap-40 z-40">
            {fasesRelacion.map((fase, index) => (
              <Huella
                key={fase.id}
                numero={String(fase.etapa).padStart(2, "0")}
                fase={fase.fase}
                letra={fase.letra}
                description={fase.descripcion}
              />
            ))}
          </ul>
        </div>
        <nav className="w-full flex">
          <ul className="flex gap-2 px-10">
            {fasesRelacion.map((section, index) => (
              <li className="flex " key={section.id}>
                <a
                  className={`h-[8px] ${
                    activeSection === index + 1
                      ? "nav-explore-active"
                      : "nav-explore"
                  }`}
                  href={`#${section.id}`}
                ></a>
              </li>
            ))}
          </ul>
        </nav>
      </section>
    )
}