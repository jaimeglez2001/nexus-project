import "../style/typography.css";
import "../style/index.css";
import usefasesRelacion from "../data/FASES.jsx";
import { useState } from "react";
import Apertura from "../components/Apertura.jsx";
import { AppHuellaContext, AppHuellaProvider } from "../context/appHuella.jsx";
import { useContext } from "react";
import AppSwitch from "../components/AppSwitch.jsx";

function Welcome() {
  const { stage, handleClick } = useContext(AppHuellaContext);

  return (
    <main className="bg-white w-full h-[96.25vh] flex flex-col gap-5 lg:flex-row justify-between items-center px-5 py-40 lg:p-10 pt-40 lg:pl-[164px]">
      <section className="flex flex-col items-center justify-center h-[20vh] lg:h-[85vh] bg-white relative pb-[164px]">
        <figure>
          <img
            src="/imgs/firmas/firma-blanca.png"
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
        <div className="ctas flex gap-2">
          <button
            onClick={() => {
              handleClick(1);
            }}
            className="black-box rounded-md"
          >
            Crea tu huella
          </button>
          <button
            onClick={() => handleClick(2)}
            className="border-black-box rounded-md"
          >
            Prueba el modo manual
          </button>
        </div>
      </section>
    </main>
  );
}

function Cuestionario() {
  const [activeFase, setActiveFase] = useState(0);

  const fasesRelacion = usefasesRelacion();
  const [huellaObj, setHuellaObj] = useState([]);

  const { introState, handleForm, stage, handleClick, formName, setIntroState } =
    useContext(AppHuellaContext);

  function Intro() {
    return (
      <main className="bg-[--nexusBlue] flex-col h-[96.25vh] w-screen flex items-center justify-center">
        <section className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-white text-[64px] sinteca tracking-tight">
            Piensa en una persona...
          </h1>
          <form
            onSubmit={() => {
              handleForm();
            }}
            className="input-container relative w-full"
            autoCorrect="off"
            autoComplete="off"
          >
            <input
              id="nexusname"
              type="text"
              placeholder="Nombre"
              autoComplete="off"
            />
            <button
              type="submit"
              className="send-btn absolute right-0 bottom-4"
            >
              <svg
                height="16"
                width="16"
                fill="none"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 8H15M15 8L8 1M15 8L8 15"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </form>
        </section>
      </main>
    );
  }

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
        {(huellaObj.length > 0) && (
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
<article className="flex flex-col w-full gap-[20px]">
<header className="flex flex-col gap-1 ">
          <span className="caption">
            {huellaObj.length === 10 ? null : "0"}
            {huellaObj.length + 1} / 10
          </span>
          <h2 className="h3">
            {fasesRelacion[huellaObj.length]?.cuestionario.pregunta.replace(
              "{formName}",
              formName
            )}
          </h2>
        </header>
        <p className="small max-w-[600px] text-gray-500 ">
          {fasesRelacion[huellaObj.length]?.cuestionario.ejemplo}
        </p>
</article>
        
        <ul className="flex gap-2 flex-wrap">
          {fasesRelacion[huellaObj.length].cuestionario.respuestas.map(
            (respuesta, index) => (
              <li key={index}>
                <button
                  onClick={() => {
                    handleHuella(respuesta, index, "add");
                  }}
                  className="border-black-box rounded-sm"
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

        <header className="flex flex-col gap-1">
          <h2 className="h3">¡Esta es tu huella con {formName}!</h2>
        </header>
        <p className="body text-gray-500 max-w-[500px]">
          ¡Enhorabuena! Este es el reflejo de tu relación. Cada relación es
          única y tu huella también lo es. Si quieres una experiencia más
          personalizada puedes probar a utilizar el modo manual, o bien puedes
          volver a rellenar el formulario para descubrir otra huella.
        </p>
        <ul className="flex gap-2 flex-wrap">
          <li className="black-box rounded-md">
            <button onClick={() => {handleClick(2); setIntroState(true)}}>Probar el modo manual</button>
          </li>
          <li
            onClick={() => {
              handleHuella(null, null, "reset");
              setIntroState(true);
            }}
            className="border-black-box rounded-md"
          >
            Crea una huella nueva
          </li>
        </ul>
      </section>
    );
  }

  return (
    <>
      {introState === true ? (
        <Intro />
      ) : (
        <main className="bg-white xl:h-[96vh] flex flex-col-reverse gap-40 xl:flex-row pt-[20vh] 2xl:pt-[35vh] justify-between p-10">
          <AppSwitch changeStage={2} />
          {huellaObj.length === 10 ? <Feedback /> : <Preguntas />}
          <aside className="w-full justify-center flex flex-col items-center h-[40vh] lg:h-full">
            <article className="pb-40">
              <div>
                {huellaObj.length === 0 && (
                  <svg
                    width="456"
                    viewBox="0 0 656 573"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M159.996 81.0039V0.9375H81.1266V81.0039H159.996Z"
                      stroke="#194BF9"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M573.472 572.158V492.092H654.735V408.44H573.472V247.112H654.735V81.0039H573.472V162.266H493.407V81.0039H330.884V0.9375H241.258V162.266H81.1254V247.112H159.995V325.984H1.05664V408.44H81.1254V492.092H159.995V572.158H330.884V492.092H493.407V572.158H573.472ZM409.756 247.112V325.984H493.407V247.112H409.756Z"
                      stroke="#194BF9"
                    />
                  </svg>
                )}
                {huellaObj.slice(0, 3).map((fase, index) => (
                  <span
                    key={index}
                    className="nexus-font text-[--nexusBlue] text-[200px] xl:text-[300px] tracking-[-80px] leading-[28px] xl:leading-[48px] xl:tracking-[-120px]"
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
                      className="nexus-font text-[--nexusBlue] text-[200px] xl:text-[300px] tracking-[-80px] leading-[28px] xl:leading-[48px] xl:tracking-[-120px]"
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
                      className="nexus-font text-[--nexusBlue] text-[200px] xl:text-[300px] tracking-[-80px] leading-[28px] xl:leading-[48px] xl:tracking-[-120px]"
                    >
                      {fase.letra}
                    </span>
                  ))}
                </div>
              )}
            </article>
          </aside>
        </main>
      )}
    </>
  );
}

function Manual() {
  const [activeFase, setActiveFase] = useState(0);
  const fasesRelacion = usefasesRelacion();
  const [huellaObj, setHuellaObj] = useState([]);
  const {
    introState,
    handleForm,
    stage,
    handleClick,
    formName,
    setIntroState,
  } = useContext(AppHuellaContext);

  const [huellaFinished, setHuellaFinished] = useState(false);

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
      setHuellaFinished(false);
      const newHuellaObj = [...huellaObj]; // Crea una copia del estado actual
      newHuellaObj.splice(huellaObj.length - 1, 1);
      setHuellaObj(newHuellaObj); // Establece el nuevo estado
      console.log(huellaObj);
    } else if (action === "reset") {
      setHuellaObj([]);
      setHuellaFinished(false);
      setIntroState(true);
    }
  }

  function Intro() {
    return (
      <main className="bg-[--nexusBlue] flex-col h-[96.25vh] w-screen flex items-center justify-center">
        <section className="flex flex-col items-center justify-center gap-10">
          <h1 className="text-white text-[64px] sinteca tracking-tight">
            Piensa en una persona...
          </h1>
          <form
            onSubmit={() => {
              handleForm();
            }}
            className="input-container relative w-full"
            autoCorrect="off"
            autoComplete="off"
          >
            <input
              id="nexusname"
              type="text"
              placeholder="Nombre"
              autoComplete="off"
            />
            <button
              type="submit"
              className="send-btn absolute right-0 bottom-4"
            >
              <svg
                height="16"
                width="16"
                fill="none"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 8H15M15 8L8 1M15 8L8 15"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </button>
          </form>
        </section>
      </main>
    );
  }

  return (
    <>
      {introState ? (
        <Intro />
      ) : (
        <main className="w-full xl:h-[96vh] flex flex-col-reverse xl:flex-row gap-10  bg-white relative pt-[60px] items-center">
          <AppSwitch changeStage={1} />
          <section className="h-full flex flex-col w-full lg:flex-row gap-5">
            <section className="flex flex-col gap-10 bg-[--nexusBlue] relative h-full w-full xl:max-w-[477px] px-5 lg:px-10 py-10 text-white">
              <article className="flex flex-col gap-2">
                <h2 className="sinteca-med text-[20px] leading-[24px] ">
                  Piensa en cómo ha sido tu relación con {formName}. ¿Por qué
                  fases ha pasado? ¿Qué sentiste en cada una?
                </h2>
                <p className="small">
                  Tómate tu tiempo para reflexionar y formar tu huella. Intenta
                  resumirlo en diez fases o menos.
                </p>
              </article>
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
                <article className="flex flex-col gap-4 max-w-[440px]">
                  <span className="sinteca-med pl-[50px]">
                    Selecciona una interpretación de la fase:
                  </span>
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
                              onClick={() => {
                                !huellaFinished &&
                                  handleHuella(item, index, "add");
                              }}
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
              </article>
            </section>
            <section className="flex flex-col gap-5 px-5 lg:px-0 w-full xl:w-[264px] items-end">
              <ul className="flex flex-col gap-2 w-full">
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
                {huellaObj.length < 10 &&
                  huellaObj.length > 0 &&
                  !huellaFinished && (
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
              <aside className="flex items-center justify-between px-10 lg:px-0 w-full">
                <span className="body-med">Fase</span>
                <span
                  className={`${huellaObj.length === 0 && "text-gray-400"}`}
                >
                  {huellaObj.length < 10 && "0"}
                  {huellaObj.length} / 10
                </span>
              </aside>
              <div className="w-full flex justify-end">
                {huellaObj.length > 0 &&
                  huellaObj.length < 10 &&
                  !huellaFinished && (
                    <button
                      onClick={() => {
                        setHuellaFinished(true);
                      }}
                      className="border-black-box rounded-md"
                    >
                      Terminar huella
                    </button>
                  )}
              </div>
            </section>
          </section>
          <section className="w-full flex flex-col items-center h-[70vh] lg:h-full">
            <aside
              className={`w-full flex flex-col items-center ${
                huellaObj.length === 10 || huellaFinished
                  ? "justify-end pb-20"
                  : "justify-center pb-[116px]"
              } relative h-full gap-10`}
            >
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
              <article className="mb-20">
                <div>
                  {huellaObj.length === 0 && (
                    <svg
                      width="456"
                      viewBox="0 0 656 573"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M159.996 81.0039V0.9375H81.1266V81.0039H159.996Z"
                        stroke="#194BF9"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M573.472 572.158V492.092H654.735V408.44H573.472V247.112H654.735V81.0039H573.472V162.266H493.407V81.0039H330.884V0.9375H241.258V162.266H81.1254V247.112H159.995V325.984H1.05664V408.44H81.1254V492.092H159.995V572.158H330.884V492.092H493.407V572.158H573.472ZM409.756 247.112V325.984H493.407V247.112H409.756Z"
                        stroke="#194BF9"
                      />
                    </svg>
                  )}
                  {huellaObj.slice(0, 3).map((fase, index) => (
                    <span
                      key={index}
                      className="nexus-font text-[--nexusBlue] text-[200px] xl:text-[300px] tracking-[-80px] leading-[28px] xl:leading-[48px] xl:tracking-[-120px]"
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
                        className="nexus-font text-[--nexusBlue] text-[200px] xl:text-[300px] tracking-[-80px] leading-[28px] xl:leading-[48px] xl:tracking-[-120px]"
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
                        className="nexus-font text-[--nexusBlue] text-[200px] xl:text-[300px] tracking-[-80px] leading-[28px] xl:leading-[48px] xl:tracking-[-120px]"
                      >
                        {fase.letra}
                      </span>
                    ))}
                  </div>
                )}
              </article>
              {(huellaObj.length === 10 || huellaFinished) && (
                <article className="flex flex-col gap-5 max-w-[600px]">
                  <header className="flex flex-col gap-1">
                    <h2 className="h5">
                      ¡Esta es la huella de tu relación con {formName}!
                    </h2>
                  </header>
                  <div className="flex flex-col gap-5">
                    <p className="small text-gray-500">
                      Cada relación es única y personal. Con esta huella puedes
                      tener una visión general el estado de tu relación. Ten en
                      cuenta que formas más unificadas y agrupadas representan
                      lazos más unidos, mientras que formas más disgregadas y
                      caóticas representan distanciamiento y un enfriamento de
                      la relación.
                    </p>
                    <ul className="flex gap-2 flex-wrap">
                      <li className="black-box rounded-md">
                        <button
                          onClick={() => {
                            handleHuella(null, null, "reset");
                          }}
                        >
                          Crea una huella nueva
                        </button>
                      </li>
                    </ul>
                  </div>
                </article>
              )}
            </aside>
          </section>
        </main>
      )}
    </>
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
