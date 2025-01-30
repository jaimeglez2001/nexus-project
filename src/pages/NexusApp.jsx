import "../style/typography.css";
import "../style/index.css";
import FASES from "../data/FASES.js";
import { useState } from "react";
import Apertura from "../components/Apertura.jsx";
import { AppHuellaContext, AppHuellaProvider } from "../context/appHuella.jsx";
import { useContext } from "react";

function Welcome() {
  const { stage, handleClick } = useContext(AppHuellaContext);
  return (
    <main className="bg-white w-full h-[100vh] flex justify-between items-center p-10 pl-[164px]">
      <section className="flex flex-col items-center justify-center h-[85vh] bg-white relative pb-[164px]">
        <figure>
          <img
            src="../public/imgs/firma-xl.png"
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
          <button className="border-black-box">Modo manual</button>
        </div>
      </section>
    </main>
  );
}

function Cuestionario() {
  const [firstRow, setFirstRow] = useState([]);
  const [secondRow, setSecondRow] = useState([]);
  const [thirdRow, setThirdRow] = useState([]);
  const [activeFase, setActiveFase] = useState(0);
  const [activeFeedback, setActiveFeedback] = useState(false);

  const handleActiveFeedback = () => {
    if (activeFase === 9) {
      setActiveFeedback((prev) => !prev);
    }
  };

  const handleSetFirstRow = (numeral, index) => {
    if (numeral === 0 && firstRow.length > 0) {
      setFirstRow((prevRow) => prevRow.slice(0, -1));
    } else if (FASES[activeFase]?.letra?.[index]) {
      setFirstRow((prevRow) => [...prevRow, FASES[activeFase].letra[index]]);
    }
  };

  const handleSetSecondRow = (numeral, index) => {
    if (numeral === 0 && secondRow.length > 0) {
      setSecondRow((prevRow) => prevRow.slice(0, -1));
    } else if (FASES[activeFase]?.letra?.[index]) {
      setSecondRow((prevRow) => [...prevRow, FASES[activeFase].letra[index]]);
    }
  };

  const handleSetThirdRow = (numeral, index) => {
    if (numeral === 0 && thirdRow.length > 0) {
      setThirdRow((prevRow) => prevRow.slice(0, -1));
    } else if (FASES[activeFase]?.letra?.[index]) {
      setThirdRow((prevRow) => [...prevRow, FASES[activeFase].letra[index]]);
    }
  };

  const handleActiveFase = (numeral, index) => {
    if (numeral === 0) {
      setActiveFase((prevFase) => {
        const newFase = prevFase - 1;
        if (newFase === 9) {
          setActiveFeedback(false); // Desactiva feedback al retroceder
        }
        if (newFase >= FASES.length + 1) return prevFase;

        if (newFase <= 2) {
          handleSetFirstRow(numeral);
        } else if (newFase <= 6) {
          handleSetSecondRow(numeral);
        } else {
          handleSetThirdRow(numeral);
        }

        return newFase;
      });
    } else {
      setActiveFase((prevFase) => {
        const newFase = prevFase + 1;
        if (newFase < 0 || newFase >= FASES.length + 1) return prevFase;

        if (newFase <= 3) {
          handleSetFirstRow(numeral, index);
        } else if (newFase <= 7) {
          handleSetSecondRow(numeral, index);
        } else {
          handleSetThirdRow(numeral, index);
        }

        return newFase;
      });
    }
  };

  function Preguntas() {
    return (
      <section className="w-full max-h-[100vh] flex flex-col gap-10 relative">
        {activeFase > 0 && (
          <button
            onClick={() => handleActiveFase(0)}
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
            {activeFase === 9 ? null : "0"}
            {activeFase + 1} / 10
          </span>
          <h2 className="h3">{FASES[activeFase]?.cuestionario.pregunta}</h2>
        </header>
        <p className="body text-gray-500 pr-80">
          {FASES[activeFase]?.cuestionario.ejemplo}
        </p>
        <ul className="flex gap-2 flex-wrap">
          {FASES[activeFase]?.cuestionario.respuestas.map(
            (respuesta, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    handleActiveFase(1, index);
                    handleActiveFeedback(activeFeedback);
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
    return (
      <section className="w-full max-h-[100vh] flex flex-col gap-10 relative">
        {activeFase > 0 && (
          <button
            onClick={() => handleActiveFase(0)}
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
            <button>Modo manual</button>
          </li>
          <li className="border-black-box">Crear una huella nueva</li>
        </ul>
      </section>
    );
  }

  return (
    <main className="bg-white h-[100vh] flex pt-[35vh] justify-between p-10">
      {activeFeedback ? <Feedback /> : <Preguntas />}
      <aside className="w-full flex flex-col items-center">
        <article>
          <div>
            {firstRow.map((fase, index) => (
              <span
                key={index}
                className="nexus-font text-[--nexusBlue] text-[300px] tracking-[-120px]"
              >
                {fase}
              </span>
            ))}
          </div>
          <div>
            {secondRow.map((fase, index) => (
              <span
                key={index}
                className="nexus-font text-[--nexusBlue] text-[300px] tracking-[-120px]"
              >
                {fase}
              </span>
            ))}
          </div>
          <div>
            {thirdRow.map((fase, index) => (
              <span
                key={index}
                className="nexus-font text-[--nexusBlue] text-[300px] tracking-[-120px]"
              >
                {fase}
              </span>
            ))}
          </div>
        </article>
      </aside>
    </main>
  );
}

function Manual() {
  const [activeFase, setActiveFase] = useState(0);
  const fasesRelacion = FASES;
  const [huellaObj, setHuellaObj] = useState([]);

  function handleActiveFase(index) {
    setActiveFase(index);
  }

  function handleHuella(item, index) {
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
  }

  /** 
    
    )]);

    */
  return (
    <section className="w-full h-[100vh] flex gap-10 bg-white relative pt-[60px] items-center">
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
                        onClick={() => handleHuella(item, index)}
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
          </article>
        </section>
        <section className="flex flex-col gap-10 w-[264px]">
          <ul className="flex flex-col gap-2">
            {huellaObj.map((fase, index) => (
              <li
                key={index}
                className="flex w-full gap-5 border-[1px] border-[#c1c1c1] rounded-md px-6 py-2"
              >
                <aside className="caption">{index + 1}</aside>
                <div className=" flex flex-col ">
                  <header className="sinteca-med text-[16px]">{fase.fase}</header>
                  <span className="small">
                    {fase.interpretacion}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </section>
      <section className="w-full flex flex-col items-center">
        <aside className="w-full flex flex-col items-center">
          <article>
            <div>
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
      </section>
    </section>
  );
}

function NexusApp() {
  const { stage, handleClick } = useContext(AppHuellaContext);
  return <>{stage === 0 && <Manual />}</>;
}

export default NexusApp;
