import "../../style/typography.css";
import Cta from "../../components/ctas/Cta.jsx";
import "../../style/index.css";
import Apertura from "../../components/Apertura.jsx"; 
import SingleNav from "../../components/nav/SingleNav.jsx";
import React, { useState, useEffect } from "react";
import Carrusel from "../../components/Carrusel.jsx";



export default function Conexion({ name, nameHighlight }) {



  return (
    <>
      <main className="bg-white">
        <SingleNav />

        <Apertura>
          <h1 className="flex flex-col sinteca-sb items-end text-[64px] pt-40 tracking-tighter leading-[1%]">
            {name}
            <strong className="pixel mr-[100px] font-normal mt-[-20px]">
              {nameHighlight}
            </strong>
          </h1>
        </Apertura>

        <Carrusel />

        <section className="h-[100vh] w-full flex flex-col justify-center px-80 relative pt-80 bg-white overflow-visible pb-90">
          <h2 className="small flex items-center gap-2 absolute top-[15%] left-10">
            <svg
              width="12"
              height="12"
              viewBox="0 0 9 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="0.397461" width="9" height="9" fill="#194BF9" />
            </svg>
            Deep connection
          </h2>

          <article className="texts flex flex-col w-[500px]">
            {/* Row 1 */}
            <article className="row-1 flex gap-10">
              <p className="black-box body-large">La conexión profunda</p>
              <p className="blue-box body-large">no se limita a</p>
            </article>

            <article className="row-2 flex gap-20 pl-40 pr-10">
              <p className="black-box body-large">gestos</p>
              <p className="blue-box body-large">o</p>
            </article>
          </article>

          <aside className="bg-white">
            <article className="z-50 flex flex-col max-w-[800px] items-end">
              {/* Tetxo highlight */}
              <strong className="pixel z-50 text-white difference font-normal">
                miradas
              </strong>
            </article>

            <figure>
              <img
                src="../public/imgs/conexion-4.png"
                alt=""
                className="absolute top-[50%] right-[15%] translate-y-[-50%] h-[70vh]"
              />
            </figure>
          </aside>

          <figure>
            <img
              src="../public/imgs/firma-xl.png"
              alt=""
              className="absolute right-[0%] top-[50%] translate-y-[-20%] z-[99]  difference"
            />
          </figure>
        </section>
        <section className="flex flex-col items-center justify-center h-[100vh] bg-white relative">
          <figure>
            <svg
              width="633"
              height="540"
              viewBox="0 0 633 540"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            >
              <path
                d="M408.406 45.3556H495.609V0.968262H585.955V45.3556H631.521V90.9214H541.96V135.702H495.609V90.9214H450.436V135.702H408.406V45.3556ZM408.406 45.3556V0.968262H360.483V45.3556H408.406ZM47.8076 315.215V359.995H1.45605V495.121H47.8076V539.509H93.3731V495.121H138.939V449.948H227.714V495.121H318.452V449.948H408.406V495.121H450.436V449.948H495.609V402.026H450.436V315.215H495.609V270.435H541.96V223.691H450.436V179.303H360.483V90.9214H318.452V135.702H227.714V223.691H182.541V270.435M47.8076 315.215H93.3731V359.995H138.939V270.435M47.8076 315.215V270.435H1.45605V315.215H47.8076ZM138.939 270.435H182.541M138.939 270.435V90.9214H47.8076V179.303H93.3731V270.435H138.939ZM182.541 270.435V315.215H318.452M182.541 270.435H318.452V315.215M318.452 315.215V359.995H273.28V402.026H360.483V359.995H408.406V315.215H318.452ZM182.541 0.968262V45.3556H138.939V0.968262H182.541Z"
                stroke="#DBDBDB"
              />
            </svg>
          </figure>
          <span className="text-center sinteca h5 max-w-[630px] text-pretty z-50">
            Su <strong className="black-box font-normal">origen</strong> se
            encuentra en la interacción y el trato. Se manifiesta principalmente
            a través de la{" "}
            <strong className="black-box font-normal">palabra</strong> <br />
            <strong className="pixel font-normal">compartir</strong>
          </span>
        </section>
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
              Deep connection
            </h2>
          </aside>
          <article className="flex flex-col max-w-[764px] gap-10">
            <h3 className="h3">
              La conexión humana, definida como la sensación de cercanía y
              pertenencia que se experimenta al establecer relaciones de apoyo
              con el entorno circundante
            </h3>
            <article className="flex flex-col gap-4 pl-40">
              {" "}
              <p className="body ">
                Se materializa cuando dos o más individuos interactúan,
                sintiéndose cada uno valorado, reconocido y escuchado. En este
                proceso, la ausencia de juicio propicia una sensación de
                fortaleza y nutrición emocional.
              </p>
              <p className="body ">
                Esta conexión puede manifestarse de diversas formas, desde una
                charla tranquila con un amigo durante el café hasta un abrazo
                reconfortante de un compañero después de una jornada extensa, o
                incluso un paseo sereno por el bosque en compañía de un miembro
                de la familia. Es relevante subrayar que la conexión no siempre
                depende de palabras; compartir tiempo en proximidad y
                experiencias también puede ser una poderosa unión interpersonal.
              </p>
            </article>
          </article>
        </section>
        <footer className="flex items-end gap-20 p-10">
          <figure>
            <img
              src="../public/imgs/relaciones-interpersonales-link.png"
              className=""
              alt=""
            />
          </figure>
          <article className="flex flex-col items-end gap-5 pb-20">
            <h2 className="flex flex-col sinteca-sb text-[48px] pt-40 tracking-tighter leading-[1%]">
              <span className="pl-10">Relaciones</span>
              <strong className="pixel-sm mr-[100px] font-normal mt-[-20px]">
                interpersonales
              </strong>
            </h2>
            <Cta name="Explorar más" link="/explore/relaciones-interpersonales" />
          </article>
        </footer>
      </main>
    </>
  );
}
