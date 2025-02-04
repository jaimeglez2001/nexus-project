import Cta from "../components/ctas/Cta";
import "../style/typography.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Home() {
  useGSAP(() => {
    const contents = gsap.utils.toArray(".carusel-child");
    console.log(contents);

    gsap.to(contents, {
      xPercent: -100 * (contents.length - 1),
      scrollTrigger: {
        trigger: "#carusel-holder",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        start: "top top", // Empieza cuando la parte superior del trigger (carusel-holder) llegue a la parte superior de la ventana
        end: "+=3000", // Define el final del pin, en este caso 3000px después del comienzo
        markers: false,
      },
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#end",
        start: "top top",
        end: "+=3000",
        pin: true,
        markers: false,
        scrub: 1,
      },
    });

    tl.from("#section-1", { y: -200, opacity: 0 }, "start")
      .from("#section-2", { y: 200, opacity: 0 }, "start+=0.5")
      .from("#section-3", { y: -200, opacity: 0 }, "start+=1")
      .to("#section-1", { y: 0, opacity: 1 }, "moveIn")
      .to("#section-2", { y: 0, opacity: 1 }, "moveIn+=0.5")
      .to("#section-3", { y: 0, opacity: 1 }, "moveIn+=1")
      .to(
        [".columns"],
        { filter: "blur(10px)", scale: 1.1, opacity: 0 },
        "scaleEffect+=1"
      )
      .from(
        ["#texto-final-1", "#texto-final-2", "#huella-final", "#cta-final"],
        { opacity: 0 },
        "end"
      )
      .from("#huella-final", { scale: 0.5, filter: "blur(10px)" }, "end")
      .to("#huella-final", { scale: 1, filter: "blur(0px)" }, "end+=1")
      .to(
        ["#texto-final-1", "#texto-final-2", "#cta-final"],
        { opacity: 1 },
        "end+=2"
      );
  });

  return (
    <>
      <main className="w-[100vw] bg-white">
        {/*HERO*/}
        <section className="hero w-full flex justify-center items-center h-[100vh] sinteca bg-white px-4">
          {/*FIRMA*/}
          <figure className="absolute top-[50%] left-[50%] translate-x-[-40%] translate-y-[-55%] w-[100sw]">
            <img
              className=""
              src="/imgs/firmas/firma-blanca.png"
              alt=""
            />
          </figure>

          {/*Huella Hero*/}
          <svg
            viewBox="0 0 936 810"
            className="md:w-[95vh]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Clip Path */}
            <clipPath id="clip">
              {/* Paths */}
              <path d="M935.489 691.876V458.038H817.366V236.25L935.489 236.25V110.893L817.366 110.893V1.8544e-05L701.653 1.48659e-05V110.893L467.815 110.893L467.815 7.43295e-06L233.975 0V110.893L118.259 110.893L118.259 236.25H0.131841L0.131836 349.553L233.975 349.554V458.038H118.259L118.259 583.393L347.276 583.393L347.276 810H467.815L467.815 691.876H701.653V583.393H817.366V691.876H935.489Z"></path>
              <path d="M233.975 810V691.876H118.259V810H233.975Z"></path>
            </clipPath>

            {/* Imagen de fondo */}
            <image
              href="/imgs/home/hero.png"
              x="0"
              y="0"
              width="100%"
              height="100%"
              preserveAspectRatio="xMidYMid slice"
              clipPath="url(#clip)"
            />
          </svg>
          {/* Logo Nexus Hero */}

          <svg
            className="absolute top-[50%] left-[50%] md:translate-x-[-50%] translate-x-[-35%]
        translate-y-[-50%] md:w-[316px]"
            viewBox="0 0 316 164"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29.8633 0.255737H118.149V39.493H29.8633V0.255737ZM100.681 31.6843C98.4673 31.6843 96.59 30.3394 96.59 28.7984C96.59 28.0419 97.1224 27.5375 97.7948 27.5375C98.3552 27.5375 98.5514 27.9018 98.8315 28.6863C99.3359 30.0032 99.9803 30.6756 101.129 30.6756C102.418 30.6756 103.062 29.723 103.062 28.4061C103.062 27.3414 102.558 26.5288 101.858 25.5482L101.101 24.3714C100.064 22.8303 99.448 21.8216 99.448 20.4207C99.448 17.7869 101.717 15.9657 104.407 15.9657C106.649 15.9657 107.742 17.2546 107.742 18.2072C107.742 18.9637 107.153 19.4681 106.537 19.4681C105.948 19.4681 105.724 19.0198 105.528 18.3473C105.248 17.5628 104.828 16.9463 103.735 16.9463C102.614 16.9463 101.774 17.7029 101.774 19.0758C101.774 20.0565 102.278 21.0371 103.034 22.1299L103.735 23.2786L103.774 23.3396C104.814 24.954 105.388 25.845 105.388 27.1733C105.388 29.723 103.371 31.6843 100.681 31.6843ZM95.2878 11.5107C95.2878 12.5474 96.0163 13.2478 97.081 13.2478C98.1457 13.2478 98.8742 12.5474 98.8742 11.5107C98.8742 10.4459 98.1457 9.77349 97.081 9.77349C96.0163 9.77349 95.2878 10.4459 95.2878 11.5107ZM93.4946 20.5328L91.0849 27.3134C91.0023 27.5495 90.9234 27.7658 90.8503 27.9661C90.5765 28.7163 90.3845 29.2424 90.3845 29.751C90.3845 30.7597 90.8888 31.5442 92.3738 31.5442C94.6714 31.5442 96.4926 28.7143 97.5013 26.2206H96.8569C95.9322 28.266 94.6714 30.0312 93.6347 30.0312C93.2424 30.0312 93.1303 29.8071 93.1303 29.3868C93.1303 29.013 93.461 28.1052 93.6861 27.4871L93.7187 27.3974L96.1564 20.5888L96.1931 20.488C96.6244 19.3024 96.9689 18.3553 96.9689 17.6468C96.9689 16.8343 96.4926 16.1058 95.4839 16.1058C93.4385 16.1058 91.3371 18.3473 90.0482 20.841H90.7207C91.7854 19.0758 93.0183 17.5908 93.8588 17.5908C94.083 17.5908 94.2231 17.7029 94.2231 18.0671C94.2231 18.4594 93.8308 19.6082 93.4946 20.5328ZM79.2255 31.6843C77.012 31.6843 75.1347 30.3394 75.1347 28.7984C75.1347 28.0419 75.6671 27.5375 76.3395 27.5375C76.8999 27.5375 77.096 27.9018 77.3762 28.6863C77.8806 30.0032 78.525 30.6756 79.6738 30.6756C80.9627 30.6756 81.6071 29.723 81.6071 28.4061C81.6071 27.3414 81.1027 26.5288 80.4023 25.5482L79.6458 24.3714C78.6091 22.8303 77.9926 21.8216 77.9926 20.4207C77.9926 17.7869 80.2622 15.9657 82.952 15.9657C85.1935 15.9657 86.2863 17.2546 86.2863 18.2072C86.2863 18.9637 85.6979 19.4681 85.0814 19.4681C84.493 19.4681 84.2689 19.0198 84.0728 18.3473C83.7926 17.5628 83.3723 16.9463 82.2795 16.9463C81.1588 16.9463 80.3182 17.7029 80.3182 19.0758C80.3182 20.0565 80.8226 21.0371 81.5791 22.1299L82.2795 23.2786L82.3188 23.3396C83.3587 24.954 83.9327 25.845 83.9327 27.1733C83.9327 29.723 81.9153 31.6843 79.2255 31.6843ZM73.8325 11.5107C73.8325 12.5474 74.561 13.2478 75.6257 13.2478C76.6904 13.2478 77.4189 12.5474 77.4189 11.5107C77.4189 10.4459 76.6904 9.77349 75.6257 9.77349C74.561 9.77349 73.8325 10.4459 73.8325 11.5107ZM72.0393 20.5328L69.6296 27.3134C69.547 27.5495 69.4681 27.7658 69.395 27.9661C69.1212 28.7163 68.9292 29.2424 68.9292 29.751C68.9292 30.7597 69.4335 31.5442 70.9185 31.5442C73.2161 31.5442 75.0373 28.7143 76.046 26.2206H75.4016C74.4769 28.266 73.2161 30.0312 72.1794 30.0312C71.7871 30.0312 71.675 29.8071 71.675 29.3868C71.675 29.013 72.0057 28.1052 72.2308 27.4871L72.2634 27.3974L74.7011 20.5888L74.7378 20.4879C75.1691 19.3024 75.5136 18.3553 75.5136 17.6468C75.5136 16.8343 75.0373 16.1058 74.0286 16.1058C71.9832 16.1058 69.8818 18.3473 68.5929 20.841H69.2654C70.3301 19.0758 71.5629 17.5908 72.4035 17.5908C72.6277 17.5908 72.7678 17.7029 72.7678 18.0671C72.7678 18.4594 72.3755 19.6082 72.0393 20.5328ZM56.5945 31.2921H53.8486L60.2369 11.6508C60.7056 10.1925 60.5209 9.6055 58.9181 9.52986L57.8389 14.1164H56.9703C57.6708 10.9783 57.3626 10.1377 55.3172 10.1377H53.4679C52.7675 10.1377 52.4032 10.502 52.2071 11.0904L46.8555 28.5182C46.3791 30.1713 46.4352 30.6196 49.097 30.6196L48.9008 31.2921H40.271L40.4671 30.6196C42.5966 30.6196 43.2971 30.1713 43.7734 28.5182L49.125 11.0904C49.2931 10.53 49.097 10.1377 48.4245 10.1377H46.8835C44.726 10.1377 44.0816 10.9503 42.7647 14.1164H41.9241L43.7453 8.87688H58.6959C61.3857 8.87688 63.235 8.62471 63.6833 8.06433L64.0195 8.26046L58.4437 25.0438H58.7239C61.5818 18.8516 63.8234 16.0497 66.0649 16.0497C67.3818 16.0497 68.0822 16.8903 68.0822 18.0951C68.0822 19.7087 66.8094 22.5602 65.5979 25.2743C65.2736 26.0006 64.9538 26.7171 64.6639 27.3974C64.6392 27.4606 64.6132 27.5267 64.5863 27.5949C64.3387 28.2232 64.0195 29.033 64.0195 29.3868C64.0195 29.8071 64.1316 30.0312 64.5238 30.0312C65.5605 30.0312 66.8214 28.266 67.746 26.2206H68.3904C67.3818 28.7143 65.5605 31.5442 63.263 31.5442C61.778 31.5442 61.2736 30.7597 61.2736 29.751C61.2736 29.2623 61.4831 28.7737 61.792 28.0529C61.8905 27.8231 61.9991 27.5698 62.1142 27.2854C62.4798 26.3609 62.8506 25.4534 63.2017 24.5939C64.2766 21.9629 65.1683 19.7804 65.1683 18.9357C65.1683 18.3193 64.9721 18.0391 64.5799 18.0391C63.4871 18.0391 60.6572 20.7849 56.5945 31.2921Z"
              fill="white"
            />
            <path
              d="M129.083 76.2985H100.023V47.2394H158.142V76.2985H187.201V105.358H216.26V163.476H187.201V134.417H158.142V105.358H129.083V76.2985Z"
              fill="white"
            />
            <path
              d="M100.023 105.358H129.083V163.476H100.023V105.358Z"
              fill="white"
            />
            <path
              d="M187.201 47.2394H216.26V76.2985H187.201V47.2394Z"
              fill="white"
            />
            <path
              d="M228.657 76.2985H257.716V105.358H228.657V76.2985Z"
              fill="white"
            />
            <path
              d="M257.716 105.358H315.884V134.417H286.825L286.775 163.476H228.657V134.417H257.716V105.358Z"
              fill="white"
            />
            <path
              d="M257.716 47.2394H315.834V76.2985H257.716V47.2394Z"
              fill="white"
            />
            <path
              d="M58.1359 47.3313L58.1858 76.2985L29.0767 76.3905V134.417H0.0180874L0.0175781 47.3313H58.1359Z"
              fill="white"
            />
            <path
              d="M58.1858 76.2985H87.245V163.476L58.1858 163.479V76.2985Z"
              fill="white"
            />
          </svg>

          {/* Claim Hero */}
          <article className="hero-claim flex flex-col items-end w-full md:w-[400px] absolute bottom-[25%] left-[50%] z-10 translate-x-[-50%] gap-5 px-4">
            <div className="claim flex flex-col shrink-0 w-full">
              {/* Row 1 */}
              <p className="black-box shrink-0 body-large font-sinteca text-[20px]">
                Cada relación es única y personal,
              </p>

              {/* Row 2 */}
              <div className="p-wrap w-full flex justify-end">
                <p className="black-box shrink-0 body-large font-sinteca text-[20px]">
                  como una huella dactilar
                </p>
              </div>
            </div>

            <Cta
              name="Descubre tu huella"
              link="/crea-tu-huella"
              color="white"
            />
          </article>
        </section>

        {/* SECCIÓN 2 */}
        <section id="carusel-holder" className="flex overflow-hidden h-screen">
          <article className="carusel-child h-full w-[100vw] p-4 md:p-10 flex items-start md:items-end pt-40 md:pt-0 shrink-0 relative bg-white">
            {/* Firma */}
            <figure className="absolute w-[100sw] md:h-[90vh] bottom-20 md:right-[5%] md:bottom-0 z-10">
              <img
                src="/imgs/firmas/firma-negra.png"
                className=" h-full w-full"
                alt=""
              />
            </figure>

            {/* Textos de la sección */}
            <article className="texts max-w-screen flex flex-col z-10 gap-5 md:gap-0">
              {/* Row 1 */}
              <article className="row-1 flex flex-col md:flex-row md:gap-10">
                <p className="black-box body-large">Nexus es un proyecto de</p>
                <section className="flex-wrapper flex gap-4 pl-20 md:pl-0">
                  <p className="blue-box body-large">tipografía experimental</p>
                </section>
              </article>

              {/* Row 2 */}
              <article className="row-2 flex md:gap-5 pl-10 pr-10">
                <p className="black-box body-large">que estudia las</p>
                <p className="blue-box body-large">complejidades</p>
              </article>

              {/* Row 3 */}
              <article className="row-3 flex justify-end pr-40">
                <div className="black-box body-large">
                  <p>de las relaciones</p>
                </div>
              </article>
              <article className="flex flex-col gap-5 items-end">
                <span className="pixel md:pl-[200px]">personales</span>
                <Cta color="white" name="Descubre Nexus" link="/nexus" />
              </article>
            </article>

            {/* Highlight sección */}
            <section className="flex gap-40 items-center justify-end w-full absolute bottom-[10%] right-[5%] z-50"></section>

            {/* Imagen de la sección */}
            <img
              src="/imgs/home/home-section-1.png"
              alt=""
              className="mdh-[95vh] absolute right-0 bottom-0"
            />
          </article>
          <article className="carusel-child shrink-0 px-4 h-[100vh] max-w-screen w-screen flex justify-center items-center relative bg-[--nexusBlue]">
            <p className="h3 text-center text-white max-w-[675px] z-10">
              En nuestras vidas nos encontramos con diversidad de individuos
            </p>
            <figure  className="absolute left-10 bottom-0 md:h-[90vh]">
            <img
              src="/imgs/home/home-section-2.png"
              className="h-full w-full"
            />
            </figure>

          </article>

          {/* SECCIÓN 3 */}

          <article className="carusel-child h-[100vh] flex flex-col justify-center max-w-screen w-screen relative px-4 md:px-[475px] gap-20 bg-white">
            {/* Textos de la sección */}
            <article className="texts flex flex-col w-[800px] z-50 mt-40">
              {/* Row 1 */}
              <div className="row-1 flex pl-10">
                <div className="white-box body-large">
                  <p>Pero,</p>
                </div>
                <div className="black-box body-large">
                  <p>aunque compartamos</p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="row-2 flex justify-end pr-40">
                <div className="blue-box body-large">
                  <p>espacio</p>
                </div>
                <div className="black-box body-large">
                  <p>con ellos</p>
                </div>
              </div>
            </article>

            {/* Textos 2 de la sección */}
            <article className="texts flex flex-col gap-3 md:gap-0 items-end w-full z-50 relative">
              {/* Row 1 */}
              <div className="row-1 flex md:w-[500px] items-start">
                <div className="black-box body-large">
                  <p>El acto de</p>
                </div>
                <div className="white-box body-large">
                  <p>conectar</p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="row-2 flex justify-between pl-20 pr-10">
                <div className="blue-box body-large">
                  <p>profundamente</p>
                </div>
                <div className="black-box body-large">
                  <p>se reserva</p>
                </div>
                <div className="black-box body-large">
                  <p>a</p>
                </div>
              </div>

              {/* Row 3 */}
              <div className="row-3 flex justify-end pr-20 mb-10">
                <div className="blue-box body-large">
                  <p>unos pocos</p>
                </div>
              </div>

              {/* CTA */}
              <Cta
                name="Conoce más"
                link="/explore/conexion-humana"
                color="white"
              />
            </article>

            {/* Imagen de la sección */}
            <figure className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-screen md:w-auto md:h-[40vh] opacity-60">
            <img
              src="/imgs/home/home-section-3.png"
              alt=""
              className="h-full w-full"
            />
            </figure>
           
          </article>
        </section>
        <section
          id="nexus_video"
          className="h-[50vh] md:h-screen flex items-center justify-center"
        >
          <video
            id="video"
            src="/vids/nexus_video.mp4"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
          ></video>
        </section>
        {/* SECCIÓN 4 */}
        <section id="end" className="w-full flex h-screen flex-col md:flex-row overflow-hidden py-40 md:py-0">
          <section className="columns w-full h-full flex flex-col md:flex-row">
            <section id="section-1" className="h-full md:h-screen w-full md:w-1/3 flex items-center">
              <article className="w-full h-full md:h-[75%] flex flex-col items-center justify-center bg-[url('/imgs/home/cada-relacion.png')] bg-cover bg-center bg-no-repeat">
                <div className="flex ">
                  <span className="black-box body-large">Cada </span>{" "}
                  <strong className="white-box body-large">relación</strong>
                </div>
              </article>
            </section>
            <section id="section-2" className="h-full md:h-screen w-full md:w-1/3 flex items-center">
              <article className="w-full h-full md:h-[75%] flex flex-col items-center justify-center bg-[url('/imgs/home/es-unica.png')] bg-cover bg-center bg-no-repeat">
                <div className="flex gap-4 ">
                  <span className="white-box body-large">es </span>{" "}
                  <strong className="blue-box body-large">única</strong>
                </div>
              </article>
            </section>
            <section id="section-3" className="h-full md:h-screen w-full md:w-1/3 flex items-center">
              <article className="w-full h-full md:h-[75%] flex flex-col items-center justify-center bg-[url('/imgs/home/y-personal.png')] bg-cover bg-center bg-no-repeat">
                <div className="flex gap-4 flex-col items-center">
                  <span className="black-box body-large text-center">y </span>{" "}
                  <strong className="white-box body-large">personal</strong>
                </div>
              </article>
            </section>
          </section>
          <section className="py-40 md:py-0 h-screen w-full absolute top-0 left-0">
            <article className="flex flex-col md:flex-row items-center h-full w-full justify-between px-4 md:px-40 relative">
              <div>
                <span id="texto-final-1" className="black-box text-base md:text-lg">
                  como una
                </span>
              </div>

              <svg
                id="huella-final"
                width="100%"
                height="auto"
                viewBox="0 0 432 431"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="max-w-[300px] md:max-w-[600px]"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.28903 374.322L1.28902 320.866L54.7433 320.866L54.7433 268.599L1.28902 268.599L1.289 55.9655L108.792 55.9655L108.792 0.7283L376.663 0.728276L376.663 159.906L430.711 159.906L430.711 268.599L376.663 268.599L376.663 320.866L320.83 320.866L320.83 268.599L216.89 268.599L216.89 320.866L161.652 320.866L161.652 268.599L108.792 268.599L108.792 430.153L54.7433 430.153L54.7433 374.322L1.28903 374.322ZM108.792 163.47L108.792 213.362L161.652 213.362L161.652 163.47L108.792 163.47Z"
                  stroke="black"
                />
              </svg>
              <div>
                {" "}
                <strong
                  id="texto-final-2"
                  className="thatthat font-normal text-3xl md:text-[64px] tracking-[-2px] md:tracking-[-5px]"
                >
                  huella
                </strong>
              </div>
            </article>
            <div id="cta-final" className="absolute right-4 md:right-40 bottom-[10%] md:bottom-[30%]">
              <Cta name="Descubre la tuya" link="/crea-tu-huella" color="white" />
            </div>
          </section>
        </section>
      </main>
    </>
  );
}

export default Home;
