import "../../style/typography.css";
import Cta from "../../components/ctas/Cta.jsx";
import "../../style/index.css";
import Apertura from "../../components/Apertura.jsx";
import SingleNav from "../../components/nav/SingleNav.jsx";
import React, { useState, useEffect } from "react";
import Carrusel from "../../components/Carrusel.jsx";
import Huella from "../../components/Huella.jsx";
import FASES from "../../data/FASES.js";
import CarruselFases from "../../components/CarruselFases.jsx";
import RELACIONES from "../../data/RELACIONES.jsx";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);

export default function RelacionesInterpersonales({ name, nameHighlight }) {
  const [activeSection, setActiveSection] = useState(1); // Controlador del índice activo
  const fasesRelacion = FASES;
  const relaciones = RELACIONES;
  const [activeRelation_1, setActiveRelation_1] = useState(0);
  const [activeRelation_2, setActiveRelation_2] = useState(0);

  const handleActiveRelation_1 = (index) => {
    setActiveRelation_1(index);
  };
  const handleActiveRelation_2 = (index) => {
    setActiveRelation_2(index);
  };
  return (
    <>
      <main className="bg-white">
        <SingleNav />

        <Apertura>
          <h1 className="flex flex-col sinteca-sb text-[64px] pt-40 tracking-tighter leading-[1%]">
            <span className="pl-20">{name}</span>

            <strong className="pixel font-normal mt-[-20px]">
              {nameHighlight}
            </strong>
          </h1>
        </Apertura>

        <CarruselFases />

        <section className=" justify-between px-10 py-40 min-h-[110vh] text-white bg-black relative flex flex-row items-start">
          <div className="sticky top-40 h-[80vh] flex flex-col justify-between">
            <p className="h3 max-w-[560px] text-pretty">
              En el análisis de las relaciones humanas, resulta esencial
              dividirlas en dos categorías fundamentales
            </p>

            <svg
              width="500"
              viewBox="0 0 656 573"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M159.996 81.0039V0.9375H81.1266V81.0039H159.996Z"
                stroke="white"
                strokeWidth=".5"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M573.472 572.158V492.092H654.735V408.44H573.472V247.112H654.735V81.0039H573.472V162.266H493.407V81.0039H330.884V0.9375H241.258V162.266H81.1254V247.112H159.995V325.984H1.05664V408.44H81.1254V492.092H159.995V572.158H330.884V492.092H493.407V572.158H573.472ZM409.756 247.112V325.984H493.407V247.112H409.756Z"
                stroke="white"
                strokeWidth=".5"
              />
            </svg>
          </div>

          <section className="flex flex-col gap-60">
            <article className="flex flex-col gap-20 max-w-[564px] pr-40 border-b-[1px] border-white pb-20">
              <header className="flex flex-col gap-4">
                <h3 className="h3">
                  Relaciones{" "}
                  <strong className="thatthat font-normal">
                    {relaciones[0].name}
                  </strong>
                </h3>
                <p className="body">{relaciones[0].description}</p>
              </header>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-5">
                  <span className="small">Podemos distinguir:</span>
                  <ul className="flex gap-2">
                    {relaciones[0].subRelations.map((subRelation, index) => {
                      return (
                        <li key={index}>
                          <button
                            onClick={() => {
                              handleActiveRelation_1(index);
                            }}
                            className={
                              activeRelation_1 === index
                                ? "white-box"
                                : "black-box"
                            }
                          >
                            {subRelation.name}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <p className="body">
                  {relaciones[0].subRelations[activeRelation_1].description}
                </p>
              </div>
            </article>
            <article className="flex flex-col gap-20 max-w-[564px] pr-40 border-b-[1px] border-white pb-20">
              <header className="flex flex-col gap-4">
                <h3 className="h3">
                  Relaciones{" "}
                  <strong className="thatthat font-normal">
                    {relaciones[1].name}
                  </strong>
                </h3>
                <p className="body">{relaciones[1].description}</p>
              </header>
              <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-5">
                  <span className="small">Podemos distinguir:</span>
                  <ul className="flex gap-2">
                    {relaciones[1].subRelations.map((subRelation, index) => {
                      return (
                        <li key={index}>
                          <button
                            onClick={() => {
                              handleActiveRelation_2(index);
                            }}
                            className={
                              activeRelation_2 === index
                                ? "white-box"
                                : "black-box"
                            }
                          >
                            {subRelation.name}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <p className="body">
                  {relaciones[1].subRelations[activeRelation_2].description}
                </p>
              </div>
            </article>
          </section>
        </section>

        <footer className="flex items-end gap-20 p-10">
          <figure>
            <img
              src="../public/imgs/relaciones-espaciales-1.png"
              className=""
              alt=""
            />
          </figure>
          <article className="flex flex-col items-end gap-5 pb-20">
            <h2 className="flex flex-col sinteca-sb text-[48px] pt-40 tracking-tighter leading-[1%]">
              <span className="pl-10">Relaciones</span>
              <strong className="pixel-sm mr-[100px] font-normal mt-[-20px]">
                espaciales
              </strong>
            </h2>
            <Cta name="Explorar más" link="/explore/relaciones-espaciales" />
          </article>
        </footer>
      </main>
    </>
  );
}
