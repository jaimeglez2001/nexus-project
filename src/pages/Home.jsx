import LargeCta from "/src/components/large-cta.jsx";
import "../style/typography.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Home() {
  useGSAP(() => {
    const event_1 = gsap.timeline({
      scrollTrigger: {
        trigger: "#scroller",
        start: "20% 20%",
        end: "80% bottom",
        markers: true,
        scrub: true,
      },
    });

    event_1
      .to("#section_1", { opacity: 0 })
      .fromTo("#section_2", { opacity: 0 }, { opacity: 1 })
      .fromTo("#section_2", { opacity: 1 }, { opacity: 0 })
      .fromTo("#section_3", { opacity: 0 }, { opacity: 1 })
      .fromTo("#section_3", { opacity: 1 }, { opacity: 0 })
      .fromTo("#section_4", { opacity: 0 }, { opacity: 1 });
  });
  return (
    <>

      <main className="bg-white">

        {/*HERO*/}
        <section className="hero flex justify-center items-center h-[100vh] sinteca">
          {/*FIRMA*/}
          <img
            className="absolute top-[50%] left-[50%] translate-x-[-40%] translate-y-[-55%]"
            src="./public/imgs/firma.png"
            alt=""
          />

          {/*Huella Hero*/}
          <svg
            className="main-svg"
            height="90vh"
            viewBox="0 0 936 810"
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
              href="/public/imgs/hero-3.png"
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
            className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
            width="348"
            height="164"
            viewBox="0 0 348 164"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.0457 77.1808V135.246H0.0175781V47.882H65.5407V77.1808H33.0457Z"
              fill="white"
            ></path>
            <path
              d="M65.5407 77.1808H95.3725V163.48H65.5407V77.1808Z"
              fill="white"
            ></path>
            <path
              d="M107.665 104.349V163.48H140.16V104.349H172.123V135.246H205.683V163.48H237.646V104.349H205.683V77.1808H237.646V47.882H205.683V77.1808H172.123V47.882H107.665V77.1808H140.16V104.349H107.665Z"
              fill="white"
            ></path>
            <path
              d="M249.106 135.246V163.48H316.76V135.246H347.657V104.349H281.602V77.1808H347.657V47.882H281.602V77.1808H249.106V104.349H281.602V135.246H249.106Z"
              fill="white"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M29.8634 0.255717H118.15V39.493H29.8634V0.255717ZM100.681 31.6843C98.4674 31.6843 96.5901 30.3394 96.5901 28.7984C96.5901 28.0418 97.1225 27.5375 97.7949 27.5375C98.3553 27.5375 98.5515 27.9017 98.8317 28.6863C99.336 30.0032 99.9804 30.6756 101.129 30.6756C102.418 30.6756 103.063 29.723 103.063 28.4061C103.063 27.3414 102.558 26.5288 101.858 25.5482L101.101 24.3714C100.064 22.8303 99.4481 21.8216 99.4481 20.4207C99.4481 17.7869 101.718 15.9657 104.407 15.9657C106.649 15.9657 107.742 17.2545 107.742 18.2072C107.742 18.9637 107.153 19.468 106.537 19.468C105.948 19.468 105.724 19.0197 105.528 18.3473C105.248 17.5627 104.828 16.9463 103.735 16.9463C102.614 16.9463 101.774 17.7028 101.774 19.0758C101.774 20.0564 102.278 21.0371 103.034 22.1298L103.735 23.2786L103.774 23.3396C104.814 24.954 105.388 25.845 105.388 27.1733C105.388 29.723 103.371 31.6843 100.681 31.6843ZM95.2879 11.5106C95.2879 12.5473 96.0164 13.2478 97.0811 13.2478C98.1458 13.2478 98.8743 12.5473 98.8743 11.5106C98.8743 10.4459 98.1458 9.77347 97.0811 9.77347C96.0164 9.77347 95.2879 10.4459 95.2879 11.5106ZM93.4947 20.5328L91.0851 27.3133C91.0024 27.5495 90.9235 27.7658 90.8504 27.9661C90.5766 28.7163 90.3846 29.2424 90.3846 29.751C90.3846 30.7597 90.8889 31.5442 92.3739 31.5442C94.6715 31.5442 96.4927 28.7143 97.5014 26.2206H96.857C95.9323 28.266 94.6715 30.0312 93.6348 30.0312C93.2425 30.0312 93.1305 29.807 93.1305 29.3868C93.1305 29.013 93.4611 28.1052 93.6862 27.4871L93.7188 27.3974L96.1565 20.5888L96.1932 20.488C96.6245 19.3024 96.969 18.3553 96.969 17.6468C96.969 16.8343 96.4927 16.1058 95.484 16.1058C93.4387 16.1058 91.3372 18.3473 90.0484 20.841H90.7208C91.7855 19.0758 93.0184 17.5908 93.8589 17.5908C94.0831 17.5908 94.2232 17.7028 94.2232 18.0671C94.2232 18.4594 93.8309 19.6081 93.4947 20.5328ZM79.2256 31.6843C77.0121 31.6843 75.1348 30.3394 75.1348 28.7984C75.1348 28.0418 75.6672 27.5375 76.3396 27.5375C76.9 27.5375 77.0961 27.9017 77.3763 28.6863C77.8807 30.0032 78.5251 30.6756 79.6739 30.6756C80.9628 30.6756 81.6072 29.723 81.6072 28.4061C81.6072 27.3414 81.1029 26.5288 80.4024 25.5482L79.6459 24.3714C78.6092 22.8303 77.9928 21.8216 77.9928 20.4207C77.9928 17.7869 80.2623 15.9657 82.9521 15.9657C85.1936 15.9657 86.2864 17.2545 86.2864 18.2072C86.2864 18.9637 85.698 19.468 85.0816 19.468C84.4932 19.468 84.269 19.0197 84.0729 18.3473C83.7927 17.5627 83.3724 16.9463 82.2797 16.9463C81.1589 16.9463 80.3183 17.7028 80.3183 19.0758C80.3183 20.0564 80.8227 21.0371 81.5792 22.1298L82.2797 23.2786L82.3189 23.3396C83.3588 24.954 83.9328 25.845 83.9328 27.1733C83.9328 29.723 81.9154 31.6843 79.2256 31.6843ZM73.8326 11.5106C73.8326 12.5473 74.5611 13.2478 75.6258 13.2478C76.6905 13.2478 77.419 12.5473 77.419 11.5106C77.419 10.4459 76.6905 9.77347 75.6258 9.77347C74.5611 9.77347 73.8326 10.4459 73.8326 11.5106ZM72.0394 20.5328L69.6298 27.3133C69.5471 27.5495 69.4682 27.7658 69.3951 27.966C69.1213 28.7162 68.9293 29.2424 68.9293 29.751C68.9293 30.7597 69.4336 31.5442 70.9186 31.5442C73.2162 31.5442 75.0374 28.7143 76.0461 26.2206H75.4017C74.477 28.266 73.2162 30.0312 72.1795 30.0312C71.7872 30.0312 71.6751 29.807 71.6751 29.3868C71.6751 29.013 72.0058 28.1052 72.2309 27.4871L72.2635 27.3974L74.7012 20.5888L74.7379 20.4879C75.1692 19.3024 75.5137 18.3553 75.5137 17.6468C75.5137 16.8343 75.0374 16.1058 74.0287 16.1058C71.9833 16.1058 69.8819 18.3473 68.593 20.841H69.2655C70.3302 19.0758 71.563 17.5908 72.4036 17.5908C72.6278 17.5908 72.7679 17.7028 72.7679 18.0671C72.7679 18.4594 72.3756 19.6081 72.0394 20.5328ZM56.5946 31.292H53.8487L60.237 11.6507C60.7058 10.1925 60.5211 9.60548 58.9182 9.52984L57.839 14.1164H56.9704C57.6709 10.9783 57.3627 10.1377 55.3173 10.1377H53.4681C52.7676 10.1377 52.4033 10.502 52.2072 11.0904L46.8556 28.5182C46.3792 30.1713 46.4353 30.6196 49.0971 30.6196L48.901 31.292H40.2711L40.4673 30.6196C42.5967 30.6196 43.2972 30.1713 43.7735 28.5182L49.1251 11.0904C49.2932 10.53 49.0971 10.1377 48.4246 10.1377H46.8836C44.7261 10.1377 44.0817 10.9503 42.7648 14.1164H41.9242L43.7455 8.87686H58.696C61.3858 8.87686 63.2351 8.62469 63.6834 8.06431L64.0196 8.26044L58.4438 25.0438H58.724C61.582 18.8516 63.8235 16.0497 66.065 16.0497C67.3819 16.0497 68.0824 16.8903 68.0824 18.0951C68.0824 19.7087 66.8095 22.5602 65.598 25.2742C65.2738 26.0006 64.9539 26.7171 64.664 27.3974C64.6393 27.4605 64.6133 27.5266 64.5864 27.5949C64.3388 28.2231 64.0196 29.0329 64.0196 29.3868C64.0196 29.807 64.1317 30.0312 64.5239 30.0312C65.5606 30.0312 66.8215 28.266 67.7461 26.2206H68.3906C67.3819 28.7143 65.5606 31.5442 63.2631 31.5442C61.7781 31.5442 61.2737 30.7597 61.2737 29.751C61.2737 29.2623 61.4832 28.7737 61.7921 28.0528C61.8906 27.8231 61.9992 27.5697 62.1143 27.2853C62.48 26.3609 62.8507 25.4534 63.2019 24.5939C64.2767 21.9629 65.1684 19.7804 65.1684 18.9357C65.1684 18.3193 64.9722 18.0391 64.58 18.0391C63.4872 18.0391 60.6573 20.7849 56.5946 31.292Z"
              fill="white"
            ></path>
          </svg>

          {/* Claim Hero */}
          <article className="hero-claim flex flex-col items-end w-[400px] absolute bottom-[25%] left-[50%] translate-x-[-50%] gap-5">
            <div className="claim flex flex-col w-full">
              {/* Row 1 */}
              <p className="black-box body-large font-sinteca text-[22px]">
                Cada relación es única y personal,
              </p>

              {/* Row 2 */}
              <div className="p-wrap w-full flex justify-end">
                <p className="black-box body-large font-sinteca text-[22px]">
                  como una huella dactilar
                </p>
              </div>
            </div>

            {/* CTA */}
            <LargeCta name="Descubre tu huella" />
          </article>
        </section>

        <section
          id="scroller"
          className="scroll_section flex flex-col w-full h-[700vh] relative"
        >
          {/* SECCIÓN 1 */}
          <div className="section_wrapper sticky top-0 left-0 w-full">
            <section
              id="section_1"
              className="h-[100vh] p-10 flex items-center w-full relative"
            >
              {/* Firma */}
              <figure>
                <img
                  src="./public/imgs/firma-negra.png"
                  className="absolute h-[95vh] right-[20%] bottom-0"
                  alt=""
                />
              </figure>

              {/* Textos de la sección */}
              <article className="texts flex flex-col w-[800px]">
                {/* Nexus dibujo */}
                <figure>
                  <img
                    src="./public/imgs/nexus-firma.png"
                    className="w-[100px] pl-4 mb-4"
                    alt=""
                  />
                </figure>

                {/* Row 1 */}
                <article className="row-1 flex justify-between">
                  <p className="black-box body-large">
                    Nexus es un proyecto de
                  </p>
                  <section className="flex-wrapper flex gap-4">
                    <p className="blue-box body-large">
                      tipografía experimental
                    </p>
                    <p className="black-box body-large"></p> yspq
                  </section>
                </article>

                {/* Row 2 */}
                <article className="row-2 flex justify-between pl-40 pr-10">
                  <p className="black-box body-large">que estudia las</p>
                  <p className="blue-box body-large">complejidades</p>
                </article>

                {/* Row 3 */}
                <article className="row-3 flex justify-between pl-20">
                  <div className="black-box body-large">
                    <p>de las relaciones</p>
                  </div>
                </article>
              </article>

              {/* Highlight sección */}
              <section className="flex gap-40 items-center justify-end w-full absolute bottom-[10%] right-[5%] z-50">
                <article className="flex flex-col gap-5">
                  <span className="pixel difference bg-blend-difference">
                    personales
                  </span>

                  {/* Firma 'personales' */}
                  <img
                    src="./public/imgs/personales-figma.png"
                    className="pl-10 w-[250px] object-cover"
                    alt=""
                  />
                </article>

                {/* Huella */}
                <svg
                  width="295"
                  height="254"
                  viewBox="0 0 295 254"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M42.2404 253.094V210.967H84.367V253.094H42.2404ZM42.2404 210.967V168.84H84.367V210.967H42.2404ZM0.11377 210.967V168.84H42.2404V210.967H0.11377ZM84.367 210.967V168.84H126.494V210.967H84.367ZM126.494 210.967V168.84H168.62V210.967H126.494ZM0.11377 168.84V126.714H42.2404V168.84H0.11377ZM42.2404 168.84V126.714H84.367V168.84H42.2404ZM42.2404 126.714V84.5872H84.367V126.714H42.2404ZM126.494 126.714V84.5872H168.62V126.714H126.494ZM168.62 84.5872V42.4606H210.747V84.5872H168.62ZM168.62 42.4606V0.333984H210.747V42.4606H168.62ZM210.747 42.4606V0.333984H252.873V42.4606H210.747ZM252.873 84.5872V42.4606H295V84.5872H252.873Z"
                    fill="#194BF9"
                  ></path>
                </svg>
              </section>

              {/* Imagen de la sección */}
              <img
                src="./public/imgs/section-2.png"
                alt=""
                className="absolute right-0 bottom-0 h-[95vh] -z-10"
              />
            </section>
          </div>
          {/* SECCIÓN 2 */}
          <div className="section_wrapper sticky top-0 left-0 w-full">
            <section
              id="section_2"
              className="h-[100vh] w-full flex flex-col justify-center px-80 relative"
            >
              {/* Textos sección */}
              <article className="texts flex flex-col w-[800px]">
                {/* Row 1 */}
                <article className="row-1 flex">
                  <p className="black-box body-large">En nuestras vidas</p>
                  <p className="white-box body-large">nos encontramos</p>
                </article>

                {/* Row 2 */}
                <article className="row-2 flex justify-between pl-40 pr-10">
                  <p className="blue-box body-large">con diversidad de</p>
                </article>
              </article>

              {/* Highlight sección */}
              <article className="z-50 flex flex-col items-end">
                {/* Dibujo individuo */}
                <figure>
                  <img
                    src="./public/imgs/individuos-firma.png"
                    className="pr-20 h-[120px]"
                    alt=""
                  />
                </figure>

                {/* Tetxo highlight */}
                <span className="pixel z-50">individuos</span>
              </article>

              {/* Imagen sección */}
              <figure>
                <img
                  src="./public/imgs/section-3.png"
                  alt=""
                  className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[50vh] -z-10"
                />
              </figure>
            </section>
          </div>
          {/* SECCIÓN 3 */}
          <div className="section_wrapper sticky top-0 left-0 w-full ">
            <section
              id="section_3"
              className="h-[100vh] flex flex-col justify-center w-full relative px-[475px] gap-20"
            >
              {/* Textos de la sección */}
              <article className="texts flex flex-col w-[800px] z-50">
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
                <div className="row-2 flex justify-between pr-10">
                  <img src="./public/imgs/pero.png" className="pt-2" alt="" />
                  <div className="blue-box body-large">
                    <p>espacio</p>
                  </div>
                  <div className="black-box body-large">
                    <p>con ellos</p>
                  </div>
                </div>
              </article>

              {/* Textos 2 de la sección */}
              <article className="texts flex flex-col items-end w-full z-50 relative">
                {/* Row 1 */}
                <div className="row-1 flex w-[500px] items-start">
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
                <div className="row-3 flex justify-end pr-20">
                  <div className="blue-box body-large">
                    <p>unos pocos</p>
                  </div>
                </div>

                {/* CTA */}
                <div className="absolute -bottom-20"></div>
              </article>

              {/* Imagen de la sección */}
              <img
                src="./public/imgs/section-4.png"
                alt=""
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[40vh] -z-10 blendhar"
              />

              {/* Firma */}
              <img
                className="absolute top-[50%] h-[90vh] left-[50%] translate-x-[-60%] translate-y-[-50%]"
                src="./public/imgs/firma-negra.png"
                alt=""
              />
            </section>
          </div>
          {/* SECCIÓN 4 */}
          <div className="section_wrapper sticky top-0 left-0 w-full ">
            <section id="section_4" className="h-[100vh] w-full relative ">
              <article className="texts flex flex-col w-[550px] absolute top-[40%] translate-y-[-50%] left-[20%]">
                <div className="row-1 flex justify-between">
                  <div className="black-box body-large">
                    <p>Cada relación</p>
                  </div>
                  <div className="black-box body-large">
                    <p>es</p>
                  </div>
                  <div className="wrapper flex">
                    <div className="blue-box body-large">
                      <p>única</p>
                    </div>
                    <div className="white-box body-large">
                      <p>y</p>
                    </div>
                  </div>
                </div>
                <div className="row-2 flex justify-between pl-60 pr-10">
                  <div className="blue-box body-large">
                    <p>personal</p>
                  </div>
                </div>
                <div className="row-3 flex justify-end pr-10">
                  <div className="white-box body-large">
                    <p>como una</p>
                  </div>
                </div>
              </article>
              <span className="pixel absolute bottom-[20%] right-[25%] z-50">
                huella
              </span>
              <img
                src="./public/imgs/section-5.png"
                alt=""
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] h-[65vh] -z-10 blendhar"
              />
            </section>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
