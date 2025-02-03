import "../style/typography.css";
import "../style/index.css";
import FASES from "../data/FASES.js";
import { useState } from "react";
import Apertura from "../components/Apertura.jsx";
import { AppHuellaContext, AppHuellaProvider } from "../context/appHuella.jsx";
import { useContext } from "react";
import AppSwitch from "../components/AppSwitch.jsx";

function Welcome() {
  const { stage, handleClick } = useContext(AppHuellaContext);

  return (
    <main className="bg-white w-full h-[96vh] flex justify-between items-center p-10 pl-[164px]">
      <section className="flex flex-col items-center justify-center h-[85vh] bg-white relative pb-[164px]">
        <figure>
          <img
            src="../public/imgs/firmas/firma-blanca.png"
            alt=""
            className="absolute z-[50] right-[50%] translate-x-[30%] top-[50%] translate-y-[-40%] scale-[2] difference"
          />
        </figure>
        <h1 className="flex flex-col sinteca-sb text-[64px] pt-40 tracking-tighter leading-[1%]">
          <span className="pl-20">Crea tu</span>

          <strong className="pixel font-normal mt-[-20px]">huella</strong>
        </h1>
      </section>

      <section className="flex flex-col gap-10 max-w-[448px] pt-[80px]">
        <p className="body">
          Nexus es una aplicación que te permite crear huellas únicas de tus
          relaciones personales. Puedes responder un breve cuestionario o puedes
          utilizar la herramienta manual para una experiencia más personalizada
        </p>
        <div className="ctas flex gap-3">
          <button
            onClick={() => {
              handleClick(1);
            }}
            className="black-box"
          >
            Comenzar
          </button>
          <button onClick={() => handleClick(2)} className="border-black-box">
            Modo manual
          </button>
        </div>
      </section>
    </main>
  );
}

function Cuestionario() {
  const [activeFase, setActiveFase] = useState(0);
  const fasesRelacion = FASES;
  const [huellaObj, setHuellaObj] = useState([]);

  function handleHuella(respuesta, index, action) {
    if (action === "add") {
      if (huellaObj.length <= 9) {
        const newHuellaObj = [...huellaObj]; // Crea una copia del estado actual
        newHuellaObj.push({
          letra: `${fasesRelacion[huellaObj.length].letra[index]}`,
        });
        setHuellaObj(newHuellaObj); // Establece el nuevo estado
        console.log(huellaObj);
      }
    } else if (action === "remove") {
      const newHuellaObj = [...huellaObj]; // Crea una copia del estado actual
      newHuellaObj.splice(huellaObj.length - 1, 1);
      setHuellaObj(newHuellaObj); // Establece el nuevo estado
      console.log(huellaObj);
    } else if (action === "reset") {
      setHuellaObj([]);
    }
  }

  function Preguntas() {
    return (
      <section className="w-full max-h-[100vh] flex flex-col gap-10 relative">
        {huellaObj.length > 0 && (
          <button
            onClick={() => handleHuella(null, null, "remove")}
            className="flex gap-3 items-center absolute -top-10"
          >
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.18008 6.02445L14.9129 6.02445V7.78798H4.18008L8.90987 12.5178L7.66305 13.7646L0.804688 6.90622L7.66305 0.0478516L8.90987 1.29467L4.18008 6.02445Z"
                fill="black"
              />
            </svg>
            Atrás
          </button>
        )}

        <header className="flex flex-col gap-1 pr-80">
          <span className="caption">
            {" "}
            {huellaObj.length === 10 ? null : "0"}
            {huellaObj.length + 1} / 10
          </span>
          <h2 className="h3">
            {FASES[huellaObj.length]?.cuestionario.pregunta}
          </h2>
        </header>
        <p className="body text-gray-500 pr-80">
          {FASES[huellaObj.length]?.cuestionario.ejemplo}
        </p>
        <ul className="flex gap-2 flex-wrap">
          {FASES[huellaObj.length].cuestionario.respuestas.map(
            (respuesta, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    handleHuella(respuesta, index, "add");
                  }}
                  className="border-black-box"
                >
                  {respuesta}
                </button>
              </li>
            )
          )}
        </ul>
      </section>
    );
  }

  function Feedback() {
    const { stage, handleClick } = useContext(AppHuellaContext);
    return (
      <section className="w-full max-h-[100vh] flex flex-col gap-10 relative">
        {huellaObj.length > 0 && (
          <button
            onClick={() => handleHuella(null, null, "remove")}
            className="flex gap-3 items-center absolute -top-10"
          >
            <svg
              width="15"
              height="14"
              viewBox="0 0 15 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.18008 6.02445L14.9129 6.02445V7.78798H4.18008L8.90987 12.5178L7.66305 13.7646L0.804688 6.90622L7.66305 0.0478516L8.90987 1.29467L4.18008 6.02445Z"
                fill="black"
              />
            </svg>
            Atrás
          </button>
        )}

        <header className="flex flex-col gap-1 pr-80">
          <h2 className="h3">¡Esta es la huella de tu relación!</h2>
        </header>
        <p className="body text-gray-500 pr-80">
          ¡Enhorabuena! Este es el reflejo de tu relación. Cada relación es
          única y tu huella también lo es. Si quieres una experiencia más
          personalizada puedes probar a utilizar el modo manual, o bien puedes
          volver a rellenar el formulario para descubrir otra huella.
        </p>
        <ul className="flex gap-2 flex-wrap">
          <li className="black-box">
            <button onClick={() => handleClick(2)}>Modo manual</button>
          </li>
          <li
            onClick={() => {
              handleHuella(null, null, "reset");
            }}
            className="border-black-box"
          >
            Crear una huella nueva
          </li>
        </ul>
      </section>
    );
  }

  return (
    <main className="bg-white h-[96vh] flex pt-[35vh] justify-between p-10">
      <AppSwitch changeStage={2} />
      {huellaObj.length === 10 ? <Feedback /> : <Preguntas />}
      <aside className="w-full h-full justify-center flex flex-col items-center">
        <article className="pb-40">
          <div>
            {huellaObj.length === 0 && (
              <p className="h5 text-center text-gray-300 pb-40">
                Escoge una respuesta para comenzar
              </p>
            )}
            {huellaObj.slice(0, 3).map((fase, index) => (
              <span
                key={index}
                className="nexus-font text-[--nexusBlue] text-[300px] tracking-[-120px]"
              >
                {fase.letra}
              </span>
            ))}
          </div>
          {huellaObj.length > 2 && (
            <div>
              {huellaObj.slice(3, 7).map((fase, index) => (
                <span
                  key={index}
                  className="nexus-font text-[--nexusBlue] text-[300px] tracking-[-120px]"
                >
                  {fase.letra}
                </span>
              ))}
            </div>
          )}

          {huellaObj.length > 5 && (
            <div>
              {huellaObj.slice(7, 10).map((fase, index) => (
                <span
                  key={index}
                  className="nexus-font text-[--nexusBlue] text-[300px] tracking-[-120px]"
                >
                  {fase.letra}
                </span>
              ))}
            </div>
          )}
        </article>
      </aside>
    </main>
  );
}

function Manual() {
  const [activeFase, setActiveFase] = useState(0);
  const fasesRelacion = FASES;
  const [huellaObj, setHuellaObj] = useState([]);
  const { stage, handleClick } = useContext(AppHuellaContext);

  function handleActiveFase(index) {
    setActiveFase(index);
  }

  function handleHuella(item, index, action) {
    if (action === "add") {
      if (huellaObj.length <= 9) {
        const newHuellaObj = [...huellaObj]; // Crea una copia del estado actual
        newHuellaObj.push({
          fase: `${fasesRelacion[activeFase].fase}`,
          interpretacion: `${
            index === 0 ? "Positiva" : index === 1 ? "Neutra" : "Negativa"
          }`,
          letra: `${item}`,
        });
        setHuellaObj(newHuellaObj); // Establece el nuevo estado
        console.log(huellaObj);
      }
    } else if (action === "remove") {
      const newHuellaObj = [...huellaObj]; // Crea una copia del estado actual
      newHuellaObj.splice(huellaObj.length - 1, 1);
      setHuellaObj(newHuellaObj); // Establece el nuevo estado
      console.log(huellaObj);
    } else if (action === "reset") {
      setHuellaObj([]);
    }
  }

  /** 
    
    )]);

    */
  return (
    <main className="w-full h-[96vh] flex gap-10 bg-white relative pt-[60px] items-center">
      <AppSwitch changeStage={1} />
      <section className="h-full flex gap-5">
        <section className="flex flex-col gap-10 bg-[--nexusBlue] relative h-full max-w-[477px] px-10 py-10 text-white">
          <nav>
            <ul className="flex shrink-0 gap-2 max-w-[700px] flex-wrap pb-10 border-b-[1px] border-white">
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
                        : "button border-[1px] border-white rounded-md px-3 py-1 small text-white"
                    }
                  >
                    {fase.fase}
                  </li>
                );
              })}
            </ul>
          </nav>
          <article className="flex flex-col w-full gap-10">
            <span className="small pl-[50px]">Selecciona:</span>
            <ul className="flex gap-4 pl-[50px]">
              {fasesRelacion[activeFase].letra
                .slice(0, 3)
                .map((item, index) => {
                  return (
                    <li
                      key={index}
                      className="flex flex-col items-center gap-5"
                    >
                      <button
                        onClick={() => handleHuella(item, index, "add")}
                        className="w-[90px] h-[90px] border-[1px] rounded-md border-white flex items-center justify-center nexus-font text-[80px]"
                      >
                        {item}
                      </button>
                      <span className="sinteca-med text-[16px]">
                        {index === 0 && "Positiva"}
                        {index === 1 && "Neutra"}
                        {index === 2 && "Negativa"}
                      </span>
                    </li>
                  );
                })}
            </ul>
            <article className="flex gap-10 max-w-[440px]">
              <span className="small">
                {activeFase === 9 ? "" : "0"}
                {fasesRelacion[activeFase].id}
              </span>
              <aside className="flex flex-col gap-3">
                <h3 className="h5">{fasesRelacion[activeFase].fase}</h3>
                <p>{fasesRelacion[activeFase].descripcion}</p>
              </aside>
            </article>
          </article>
        </section>
        <section className="flex flex-col gap-5 w-[264px]">
          <ul className="flex flex-col gap-2">
            {huellaObj.length === 0 && (
              <li className="flex w-full gap-5 border-b-[1px] border-[#c1c1c1] px-6 py-2">
                <aside className="caption text-gray-400">00</aside>
                <div className=" flex flex-col ">
                  <header className="sinteca-med text-gray-400 text-[16px]">
                    Iniciación
                  </header>
                  <span className="small text-gray-400">Positiva</span>
                </div>
              </li>
            )}
            {huellaObj.map((fase, index) => (
              <li
                key={index}
                className="flex w-full gap-5 border-b-[1px] border-[#c1c1c1] px-6 py-2"
              >
                <aside className="caption">
                  {index < 9 && "0"}
                  {index + 1}
                </aside>
                <div className=" flex flex-col ">
                  <header className="sinteca-med text-[16px]">
                    {fase.fase}
                  </header>
                  <span className="small">{fase.interpretacion}</span>
                </div>
              </li>
            ))}
            {huellaObj.length < 10 && huellaObj.length > 0 && (
              <li className="flex w-full gap-5 border-b-[1px] border-[#c1c1c1] px-6 py-2">
                <aside className="caption text-gray-400">
                  {huellaObj.length < 9 && "0"}
                  {huellaObj.length + 1}
                </aside>
                <div className=" flex flex-col ">
                  <header className="sinteca-med text-gray-400 text-[16px]">
                    Fase
                  </header>
                  <span className="small text-gray-400">Positiva</span>
                </div>
              </li>
            )}
          </ul>
          <aside className="flex items-center justify-between">
            <span className="body-med">Fase</span>
            <span className={`${huellaObj.length === 0 && "text-gray-400"}`}>
              {huellaObj.length < 10 && "0"}
              {huellaObj.length} / 10
            </span>
          </aside>
        </section>
      </section>
      <section className="w-full flex flex-col items-center h-full">
        <aside className="w-full flex flex-col items-center justify-center relative h-full gap-20">
          {huellaObj.length > 0 && (
            <button
              onClick={() => handleHuella(null, null, "remove")}
              className="flex gap-3 items-center absolute top-10 left-10"
            >
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.18008 6.02445L14.9129 6.02445V7.78798H4.18008L8.90987 12.5178L7.66305 13.7646L0.804688 6.90622L7.66305 0.0478516L8.90987 1.29467L4.18008 6.02445Z"
                  fill="black"
                />
              </svg>
              Atrás
            </button>
          )}
          <article>
            <div>
              {huellaObj.length === 0 && (
                <p className="h5 text-center text-gray-300">
                  Selecciona una fase para comenzar
                </p>
              )}
              {huellaObj.slice(0, 3).map((fase, index) => (
                <span
                  key={index}
                  className="nexus-font text-[--nexusBlue] text-[300px] tracking-[-120px]"
                >
                  {fase.letra}
                </span>
              ))}
            </div>
            {huellaObj.length > 2 && (
              <div>
                {huellaObj.slice(3, 7).map((fase, index) => (
                  <span
                    key={index}
                    className="nexus-font text-[--nexusBlue] text-[300px] tracking-[-120px]"
                  >
                    {fase.letra}
                  </span>
                ))}
              </div>
            )}

            {huellaObj.length > 5 && (
              <div>
                {huellaObj.slice(7, 10).map((fase, index) => (
                  <span
                    key={index}
                    className="nexus-font text-[--nexusBlue] text-[300px] tracking-[-120px]"
                  >
                    {fase.letra}
                  </span>
                ))}
              </div>
            )}
          </article>
          {huellaObj.length === 10 && (
            <article className="flex flex-col gap-10 max-w-[600px]">
              <header className="flex flex-col gap-1">
                <h2 className="h3">¡Esta es la huella de tu relación!</h2>
              </header>
              <div className="flex flex-col gap-5">
                <p className="body text-gray-500">
                  ¡Enhorabuena! Este es el reflejo de tu relación. Cada relación
                  es única y tu huella también lo es.
                </p>
                <ul className="flex gap-2 flex-wrap">
                  <li className="black-box">
                    <button
                      onClick={() => {
                        handleHuella(null, null, "reset");
                      }}
                    >
                      Crear una huella nueva
                    </button>
                  </li>
                  <li
                    onClick={() => handleClick(1)}
                    className="border-black-box"
                  >
                    Modo manual
                  </li>
                </ul>
              </div>
            </article>
          )}
        </aside>
      </section>
    </main>
  );
}

function NexusApp() {
  const { stage, handleClick } = useContext(AppHuellaContext);
  return (
    <>
      {stage === 0 && <Welcome />}
      {stage === 1 && <Cuestionario />}
      {stage === 2 && <Manual />}
    </>
  );
}

export default NexusApp;
