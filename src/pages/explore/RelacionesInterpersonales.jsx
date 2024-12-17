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

export default function RelacionesInterpersonales({ name, nameHighlight }) {
  const [activeSection, setActiveSection] = useState(1); // Controlador del índice activo
  const fasesRelacion = FASES;
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

        <section className="flex justify-between px-10 h-[100vh] pt-[320px]">
          <aside>
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
              Tipos de relaciones
            </h2>
          </aside>
          <article className="flex flex-col max-w-[764px] gap-10">
            <h3 className="h3">
              En el análisis de las complejidades inherentes a las relaciones
              humanas, resulta esencial dividirlas en dos categorías
              fundamentales
            </h3>
            <article className="flex gap-4">
              <article className="flex flex-col items-center gap-[52px]">
                <header className="flex flex-col gap-10">
                  <h3 className="h5 border-b-[.5px] border-black pb-5 w-full">
                    <strong>Relaciones personales</strong>
                  </h3>
                  <p className="body">
                    Involucran una cercanía e interdependencia significativas,
                    como aquellas con amigos cercanos, parejas o familiares
                  </p>
                </header>

                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M119.248 104.103V89.4129H104.557V75.0489H119.248V16.6132H89.7038V1.43298H16.0879V45.1781H1.23438V75.0489H16.0879V89.4129H31.4316V75.0489H59.9965V89.4129H75.1767V75.0489H89.7038V119.447H104.557V104.103H119.248ZM89.7038 46.1575V59.8686H75.1768V46.1575H89.7038Z"
                    stroke="black"
                  />
                </svg>
              </article>
              <article className="flex flex-col items-center gap-[52px]">
                <header className="flex flex-col gap-10">
                  <h3 className="h5 border-b-[.5px] border-black pb-5 w-full">
                    <strong>Relaciones sociales</strong>
                  </h3>
                  <p className="body">
                    Satisfacen ocasionalmente nuestras necesidades y carecen de
                    la misma proximidad e interdependencia
                  </p>
                </header>

                <svg
                  width="135"
                  height="118"
                  viewBox="0 0 135 118"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.5119 17.3342V0.9375H17.3604V17.3342H33.5119Z"
                    stroke="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M118.187 117.917V101.521H134.829V84.3896H118.187V51.3514H134.829V17.3342H118.187V33.9758H101.791V17.3342H68.5079V0.9375H50.1535V33.9758H17.3601V51.3514H33.5117V67.5035H0.962891V84.3896H17.3601V101.521H33.5117V117.917H68.5079V101.521H101.791V117.917H118.187ZM84.6602 51.3514V67.5035H101.791V51.3514H84.6602Z"
                    stroke="black"
                  />
                </svg>
              </article>
            </article>
          </article>
        </section>
        <Carrusel />
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
