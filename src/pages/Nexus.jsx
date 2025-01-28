import "../style/typography.css";
import Cta from "../components/ctas/Cta.jsx";

import React, { useState, useEffect } from "react";
import FASES from "../data/FASES.js";
import PAGES from "../data/PAGES.jsx";
import HALL from "../data/HALL.jsx";

export default function Nexus({ name, nameHighlight }) {
  const [activeFase, setActiveFase] = useState(0);
  const fasesRelacion = FASES;

  const [activeHall, setActiveHall] = useState(0);
  const hall = HALL;
  const handleClick = (index) => {
    setActiveHall(index);
  };
  const ESPACIALES = PAGES[1].subPages[2].carrusel;

  function handleActiveFase(index) {
    setActiveFase(index);
  }

  return (
    <>
      <main className="bg-white">
        <section className="h-[100vh] w-full flex justify-end items-center relative bg-white overflow-hidden pr-80">
          {" "}
          <article className="flex flex-col items-start gap-1 pt-20">
            <h1 className="h1 text-[--nexusBlue]">Nexus</h1>
            <article className="flex flex-col items-end gap-5">
              <h3 className="h3">Un proyecto de tipografía experimental</h3>
              <article className="flex flex-col gap-4 pl-40">
                <p className="small max-w-[452px]">
                  Nace de una investigación sobre las relaciones interpersonales
                  y las conexiones humanas, estudiando cómo se forman y sus
                  diferentes etapas y tipologías, y plantea una propuesta
                  gráfica para categorizar nuestras propias relaciones a través
                  de símbolos o huellas que guarden todas aquellas cosas que las
                  hacen únicas.
                </p>
              </article>
            </article>
          </article>
          <img
            src="./public/imgs/nxs.png"
            className="absolute left-0 bottom-0 h-[90vh]"
          />{" "}
          <svg
            className="absolute bottom-0 left-0"
            height="500"
            viewBox="0 0 275 440"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M274.737 54.5128V165.338H219.325V219.664H165.542V165.338H0.390625V110.468H55.2597V54.5128H109.043V0.186523H165.542V54.5128H274.737Z"
              fill="white"
            />
            <path
              d="M219.325 328.859V439.141H55.2597V384.272H165.542V328.859H109.043V273.446H165.542V328.859H219.325Z"
              fill="white"
            />
          </svg>
        </section>
        <section className="h-[100vh] flex justify-between p-10 pt-40 w-full">
          <article className="flex flex-col gap-20">
            <article className="flex flex-col gap-10  pb-20 border-b-[1px] border-black  max-w-[674px]">
              <h2 className="h5">
                Nexus plantea una retícula de huellas que permite comprender la
                historia de una relación personal, y cómo se ha transformado en
                función de las posiciones espaciales que ocupan en el espacio
                personal.
              </h2>
              <p className="body">
                {" "}
                Esta retícula es la base de construcción sobre la cual se han
                desarrollado los glifos de la tipografía en base al modelo de
                Hall, que permite clasificar el espacio personal en cuatro
                subcategorías:
              </p>
            </article>

            <section className="flex flex-col gap-10">
              <ul className="flex gap-2 bg-gray-200 rounded-md p-1">
                {hall.map((hall, index) => {
                  return (
                    <li key={index}>
                      <button
                        onClick={() => {
                          handleClick(index);
                        }}
                        className={
                          activeHall === index
                            ? "blue-box rounded-[2px]"
                            : "tab-black"
                        }
                      >
                        {hall.name}
                      </button>
                    </li>
                  );
                })}
              </ul>
              <article className="flex gap-10 max-w-[440px]">
                <span className="small">0{hall[activeHall].id}</span>
                <aside className="flex flex-col gap-10">
                  <h3 className="h5">{hall[activeHall].name}</h3>
                  <p>{hall[activeHall].description}</p>
                </aside>
              </article>
            </section>
          </article>
          <aside className="relative w-[564px] h-[564px]">
            <svg
              className="absolute top-0 left-0"
              width="564"
              height="564"
              viewBox="0 0 564 564"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.394094"
                y="0.394094"
                width="563.212"
                height="563.212"
                stroke="#194bf9"
                strokeWidth="0.7"
                fill={activeHall === 3 ? "#194bf9" : "white"}
              />
            </svg>

            <svg
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              width="454"
              height="454"
              viewBox="0 0 454 454"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.529836"
                y="0.529836"
                width="452.939"
                height="452.939"
                stroke="#194bf9"
                strokeWidth="0.7"
                fill={activeHall === 2 ? "#194bf9" : "white"}
              />
            </svg>

            <svg
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              width="332"
              height="332"
              viewBox="0 0 332 332"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.515625"
                y="0.515625"
                width="330.967"
                height="330.967"
                stroke="#194bf9"
                strokeWidth="0.7"
                fill={activeHall === 1 ? "#194bf9" : "white"}
              />
            </svg>
            <svg
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
              width="188"
              height="188"
              viewBox="0 0 188 188"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.383301"
                y="0.383301"
                width="187.234"
                height="187.234"
                stroke="#194bf9"
                strokeWidth="0.7"
                fill={activeHall === 0 ? "#194bf9" : "white"}
              />
            </svg>
          </aside>
        </section>

        <section className=" justify-between px-10 py-40 min-h-[110vh] text-white bg-[--nexusBlue] relative flex flex-row items-start">
          <section className="flex flex-col gap-60">
            <article className="flex flex-col gap-[48px] max-w-[764px] pr-40 border-b-[1px] border-white pb-20">
              <header className="flex flex-col gap-[64px]">
                <h3 className="h3">Crea tu huella a través de la tipografía</h3>
                <article className="flex flex-col gap-2">
                  <h4 className="h5">
                    Una relación puede pasar por hasta 10 potenciales etapas
                  </h4>
                  <article className="flex flex-col gap-4">
                    <p className="body">
                      Qué etapas vive una relación y cómo las vive define su
                      historia única.
                    </p>
                    <p className="body">
                      De esta forma Nexus permite definir a través de la
                      tipografía las fases y las posibles interpretaciones que
                      vive una relación: positiva, neutra o negativa. Una
                      relación puede empezar de la peor forma y llegar a durar
                      de por vida, mientras que otras pueden empezar bien y
                      acabar temprano.
                    </p>
                    <p className="body">
                      La unión de las diferentes etapas es lo que da resultado a
                      la huella e identidad final de cada relación.
                    </p>
                  </article>
                </article>
              </header>
              <article className="flex flex-col gap-2">
                <h4 className="h5">Proxémica</h4>
                <article className="flex flex-col gap-4">
                  <p className="body">
                    Cada glifo es una representación gráfica de las potenciales
                    interacciones espaciales que podemos encontrar en cada fase
                    de una relación de acuerdo al modelo de Hall.
                  </p>
                  <p className="body">
                    De esta forma, las fases e interpretaciones que podemos
                    entender como ‘unión’ mostrarán formas más próximas y
                    agrupadas, mientras que las de ‘distanciación’ serán más
                    separadas y disgregadas.{" "}
                  </p>
                </article>
              </article>
            </article>
          </section>
          <div className="flex flex-col gap-20">
            <ul className="flex shrink-0 gap-2 max-w-[700px] flex-wrap">
              {fasesRelacion.map((fase, index) => {
                return (
                  <li
                    key={index}
                    onClick={() => {
                      handleActiveFase(index);
                    }}
                    className={
                      index === activeFase
                        ? "button border-[1px] bg-white rounded-md px-3 py-1 text-[14px] text-[--nexusBlue] sinteca-sb"
                        : "button border-[1px] border-white rounded-md px-3 py-1 small"
                    }
                  >
                    {fase.fase}
                  </li>
                );
              })}
            </ul>
            <article className="flex flex-col w-full gap-10">
              <article className="flex gap-10 max-w-[440px]">
                <span className="small">
                  {activeFase === 9 ? "" : "0"}
                  {fasesRelacion[activeFase].id}
                </span>
                <aside className="flex flex-col gap-10">
                  <h3 className="h3">{fasesRelacion[activeFase].fase}</h3>
                  <p>{fasesRelacion[activeFase].descripcion}</p>
                </aside>
              </article>
              <ul className="flex">
                {fasesRelacion[activeFase].letra
                  .slice(0, 3)
                  .map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex flex-col items-center gap-10"
                      >
                        <div className="w-[220px] h-[220px] border-[1px] border-white flex items-center justify-center nexus-font text-[160px]">
                          {item}
                        </div>
                        <span className="sinteca-sb text-[24px]">
                          {index === 0 && "Positiva"}
                          {index === 1 && "Neutra"}
                          {index === 2 && "Negativa"}
                        </span>
                      </li>
                    );
                  })}
              </ul>
            </article>
          </div>
        </section>
        <section className=" flex justify-between max-w-[100vw] overflow-hidden">
          <video
            src="./public/vids/hall_c.mp4"
            autoPlay
            muted
            loop
            className="cover  w-full"
          ></video>
        </section>
      </main>
    </>
  );
}
