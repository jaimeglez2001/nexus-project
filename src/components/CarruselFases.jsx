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

  useGSAP(() => {
    const contents = gsap.utils.toArray(".fase");

    gsap.to(contents, {
      xPercent: -105 * (contents.length - 1),
      scrollTrigger: {
        trigger: "#fases-holder",
        pin: true,
        scrub: true,
        markers: false,
        start: "60 top", // Empieza cuando la parte superior del trigger (carusel-holder) llegue a la parte superior de la ventana
        end: "+=3000", // Define el final del pin, en este caso 3000px después del comienzo
      },
    });
  });

  return (
    <section className="flex flex-col items-center gap-20 h-screen pt-60 p-10 w-[100%]"  id="fases-holder">
      <h3 className="h3 text-center max-w-[1024px]">
        El proceso de formación y desgaste de las relaciones se define a través
        de diez etapas establecidas
      </h3>
      <ul className="flex gap-40 items-start w-[100%]">
        {fasesRelacion.map((fase, index) => {
          return (
              <Huella
                key={index}
                fase={fase.fase}
                description={fase.descripcion}
                numero={fase.id}
                letra={fase.letra[1]}
              />
          );
        })}
      </ul>
    </section>
  );
}
