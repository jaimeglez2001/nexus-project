import "../../style/typography.css";
import Cta from "../../components/ctas/Cta.jsx";
import "../../style/index.css";
import Apertura from "../../components/Apertura.jsx";
import SingleNav from "../../components/nav/SingleNav.jsx";
import React, { useState, useEffect } from "react";
import Carrusel from "../../components/Carrusel.jsx";
import HALL from "../../data/HALL.jsx";
import PAGES from "../../data/PAGES.jsx";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import SectionFooter from "../../components/SectionFooter.jsx";

gsap.registerPlugin(useGSAP);

export default function RelacionesInterpersonales({ name, nameHighlight }) {
  const [activeHall, setActiveHall] = useState(0);
  const hall = HALL;
  const handleClick = (index) => {
    setActiveHall(index);
  };
  const ESPACIALES = PAGES[1].subPages[2].carrusel;
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

        <section className="flex justify-between px-10 py-20">
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
              Definición
            </h2>
          </aside>
          <article className="flex flex-col max-w-[764px] gap-10">
            <h3 className="h3">
              El comportamiento humano se concibe como el resultado de un campo,
              compuesto por hechos coexistentes donde el cambio en una parte
              afecta al conjunto
            </h3>
            <div className="flex flex-col gap-[16px]">
              <p className="body">
                Este &quot;espacio&quot; es percibido de manera única por cada
                individuo. El individuo y su entorno no son entidades separadas,
                sino que constantemente interactúan y se modifican mutuamente en
                tiempo real
              </p>
              <p className="body">
                El comportamiento no depende ni del pasado ni del futuro, sino
                de los hechos y acontecimientos actuales y de cómo los percibe
                el sujeto
              </p>
            </div>
          </article>
        </section>

        <Carrusel array={ESPACIALES} />

        <section className="xl:h-[100vh] gap-20 items-center xl:items-start flex flex-col xl:flex-row justify-between p-10 pt-40 w-full">
          <article className="flex flex-col gap-20 xl:max-w-[45vw]">
            <h2 className="h3 max-w-[674px] pb-20 border-b-[1px] border-black">
              El modelo de Hall clasifica el espacio personal en cuatro
              subcategorías:
            </h2>
            <section className="flex flex-col gap-10">
              <ul className="flex flex-wrap gap-2 bg-gray-200 rounded-md p-1">
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

        <SectionFooter />
      </main>
    </>
  );
}
