import React, { useState, useEffect } from "react";
import CarruselArticle from "./CarruselArticle.jsx";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollToTop from "./ScrollToTop.jsx";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Carrusel({ array }) {

  useGSAP(() => {
    const contents = gsap.utils.toArray(".carusel-child");

    gsap.to(contents, {
      xPercent: -102.5 * (contents.length - 1),
      scrollTrigger: {
        trigger: "#carusel-holder",
        pin: true,
        scrub: 1,
        start: "20 top", // Empieza cuando la parte superior del trigger (carusel-holder) llegue a la parte superior de la ventana
        end: "+=3000", // Define el final del pin, en este caso 3000px después del comienzo

      },
    });
  });

  return (
    <section id="carrusel" className="p-5 pt-14 relative bg-white">
      <ScrollToTop />
      <section
        id="carusel-holder"
        className={`flex h-[100vh] gap-10 pt-[140px] overflow-hidden`}
      >
        {array.map((item, index) => {
          return (
            <article
              key={index}
              id="section_1"
              className="carusel-child shrink-0 w-full text-carusel h-[85vh] flex flex-col items-center justify-center"
              style={ { backgroundImage: `url("${item.image}")` }}
            >
              <span className="sinteca-sb text-[48px] leading-[95%] tracking-tight max-w-[900px] text-pretty text-white">
                {item.text}
              </span>
            </article>
          );
        })}

      </section>
    </section>
  );
}
