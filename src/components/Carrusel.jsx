import React, { useState, useEffect } from "react";
import CarruselArticle from "./CarruselArticle.jsx";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Carrusel() {
  const [activeSection, setActiveSection] = useState(1); // Controlador del índice activo

  useGSAP(() => {
    const contents = gsap.utils.toArray(".carusel-child");

    gsap.to(contents, {
      xPercent: -102.5 * (contents.length - 1),
      scrollTrigger: {
        trigger: "#carusel-holder",
        pin: true,
        scrub: true,
        start: "20 top", // Empieza cuando la parte superior del trigger (carusel-holder) llegue a la parte superior de la ventana
        end: "+=3000", // Define el final del pin, en este caso 3000px después del comienzo
        onUpdate: (self) => {
          // Calculando la sección activa en función del progreso del scroll
          const index = Math.round(self.progress * (contents.length - 1));
          setActiveSection(index + 1); // Actualiza el estado con el índice
        },
      },
    });
  });

  return (
    <section className="p-5 pt-14 relative bg-white">
      <section
        id="carusel-holder"
        className={`flex h-[100vh] gap-10 pt-[140px] overflow-hidden`}
      >
        <CarruselArticle
          text="“Cada individuo posee una voz interior que rápidamente evalúa la
        relevancia o significado de algo o alguien”"
        />
        <CarruselArticle
          text="“Cada individuo posee una voz interior que rápidamente evalúa la
        relevancia o significado de algo o alguien”"
        />

        <aside className="absolute bottom-10 left-[50%] translate-x-[-50%]">
          <nav className="flex gap-2">
            <ul className="flex gap-2">
              {["section_1", "section_2", "section_3"].map((id, index) => (
                <li className="flex grow" key={id}>
                  <a
                    className={`h-[8px] ${
                      activeSection === index + 1
                        ? "nav-explore-white-active"
                        : "nav-explore-white"
                    }`}
                    href={`#${id}`}
                  ></a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </section>
    </section>
  );
}
