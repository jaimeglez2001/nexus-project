const pages = [
  {
    name: "Home",
    pathname: "/",
    huella: (
      <svg
        width="399"
        height="345"
        viewBox="0 0 399 345"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100.357 148.483H1.30762L1.30762 101.248H51.0956H51.5956V100.748L51.5956 47.882L100.357 47.882H100.857V47.382V0.673645L199.406 0.673648L199.406 47.382V47.882H199.906H299.453H299.953V47.382V0.673651L348.214 0.673653V47.382V47.882H348.714L398.5 47.882V100.248L348.714 100.248H348.214V100.748V195.166V195.666H348.714H398.5V294.213H349.214V248.531V248.031H348.714H299.453H298.953V248.531V294.213H199.906H199.406V294.713L199.406 344.5H149.091L149.091 248.531V248.031H148.591L51.5956 248.031V195.666H100.357H100.857V195.166V148.983V148.483H100.357ZM99.8573 295.213V344.5H51.5956V295.213H99.8573Z"
          stroke="#161616"
        />
      </svg>
    ),
  },
  {
    name: "Explora",
    pathname: "/explore",
    huella: (
      <svg
        width="335"
        height="336"
        viewBox="0 0 335 336"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M334.327 291.598V250.043H292.772V209.411H334.327V44.114H250.756V1.17365H42.5181V124.916H0.501953V209.411H42.5181V250.043H85.921V209.411H166.723V250.043H209.663V209.411H250.756V335H292.772V291.598H334.327ZM250.756 127.686V166.471H209.663V127.686H250.756Z"
          stroke="black"
        />
      </svg>
    ),
    subPages: [
      {
        name: "Conexión",
        sectionName: "Conexión",
        sectionDisplay: "humana",
        bodyText:
          "En nuestras vidas cotidianas nos encontramos con una diversidad de individuos",
        image: "/imgs/explore/conexion/conexion-main.jpg",
        pathname: "/explore/conexion-humana",
        huella: (
          <svg
            width="800"
            height="800"
            viewBox="0 0 500 451"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <clipPath id="clip01">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M151.611 0.141602L151.611 98.9292L199.89 98.9292V148.694H151.611V199.203L0.829102 199.203V399.006H50.5939V351.469H99.6164V451H251.883V399.006H299.42V351.469L349.186 351.469V399.006H449.459V351.469H499.224V248.968H449.459V199.203L400.436 199.203V248.968L299.418 248.973L299.42 148.694H400.436L400.436 98.9292L349.186 98.9292V50.6492L299.42 50.6492V0.141614L251.883 0.14161V50.6492L199.89 50.6492V0.141606L151.611 0.141602ZM151.443 400.01V350.207H200.932V400.01H151.443ZM249.929 298.776V248.973H299.418V298.776H249.929Z"
                fill="black"
              />
            </clipPath>
            <image
              href={`/imgs/explore/conexion/conexion-main.jpg`}
              height="100%"
              clipPath="url(#clip01)"
            />
          </svg>
        ),
        carrusel: [
          {
            text: "“Cada individuo posee una voz interior que rápidamente evalúa la relevancia o significado de algo o alguien”",
            image: "/explore/conexion/conexion-carrusel-1.png",
          },
          {
            text: "En nuestras vidas cotidianas nos encontramos con una diversidad de individuos",
            image: "/explore/conexion/conexion-carrusel-2.png",
          },
          {
            text: `Aunque compartamos espacio con ellos, el acto de "conectar" profundamente se reserva a unas pocos`,
            image: "/explore/conexion/conexion-carrusel-3.png",
          },
        ],
      },
      {
        name: "Relaciones interpersonales",
        sectionName: "Relaciones",
        sectionDisplay: "interpersonales",
        bodyText:
          "En el análisis de las complejidades inherentes a las relaciones humanas, resulta esencial dividirlas en dos categorías fundamentales",
        image: "/imgs/explore/interpersonales/interpersonales-main.png",
        pathname: "/explore/relaciones-interpersonales",
        huella: (
          <svg
            width="700"

            viewBox="0 0 897 894"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <clipPath id="clip02">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.773438 623.541V801.722H92.0731V893.021H271.727V801.722H355.663V716.313H442.545V801.722H538.262V716.313H625.144V623.541H716.443V532.242H538.254V357L716.443 357.006V445.36H804.797V357.006H896.097V178.825H804.797V88.9976H625.144V178.825H538.262V88.9976H442.545V0.643555H181.9V178.825H92.0731V88.9976H0.773438V445.36H271.727V532.242H355.663V623.541H271.727V801.722H181.9V623.541H0.773438ZM268.244 88.9204V176.485H356.684V88.9204H268.244ZM449.814 269.436V357H538.254V269.436H449.814Z"
                fill="black"
              />
            </clipPath>
            <image
              href={`/imgs/explore/interpersonales/interpersonales-main.png`}
              height="100%"
              clipPath="url(#clip02)"
            />
          </svg>
        ),
      },
      {
        name: "Relaciones espaciales",
        sectionName: "Relaciones",
        sectionDisplay: "espaciales",
        bodyText:
          "El comportamiento humano se concibe como el resultado de un campo, compuesto por hechos coexistentes donde el cambio en una parte afecta al conjunto",
        image: "/imgs/explore/espaciales/espaciales-main.jpg",
        pathname: "/explore/relaciones-espaciales",
        huella: (
          <svg
            width="800"
            viewBox="0 0 344 346"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <clipPath id="clip03">
              <path
                d="M102.596 310.171V241.02H136.94V206.676H102.596V173.261H0.958008V37.2797H35.7658V71.159H69.1813V0.615784H172.212V37.2797H207.019V71.159H240.899V37.2797H309.586V71.159H343.465V138.918H309.586V173.261H274.777V138.918H207.019M102.596 310.171H69.1813V241.02H0.958008V310.171H35.7658V345.442H102.596V310.171ZM102.596 310.171H136.94V276.755H172.212V310.171H207.019V276.755H240.899V241.02H274.777V206.676H207.019V138.918M207.019 138.918L172.212 138.918V105.503H207.02L207.019 138.918ZM136.94 71.1591V37.2798H102.596V71.1591H136.94Z"
                stroke="black"
              />
            </clipPath>
            <image
              href={`/imgs/explore/espaciales/espaciales-main.jpg`}
              width="100%"
              clipPath="url(#clip03)"
            />
          </svg>
        ),
        carrusel: [
          {
            text: "La proxémica, una rama de la semiótica dedicada al estudio de la organización del espacio en la comunicación",
            image: "explore/espaciales/espaciales-carrusel-1.png",
          },
          {
            text: "Analiza las relaciones espaciales entre individuos y objetos durante la interacción, considerando posturas adoptadas y la presencia o ausencia de contacto físico ",
            image: "explore/espaciales/espaciales-carrusel-2.jpg",
          },
        ],
      },
    ],
  },
  {
    name: "Nexus",
    pathname: "/nexus",
    image: "../public/imgs/nexus/nexus-main.jpg",
    huella: (
      <svg
        width="334"
        height="336"
        viewBox="0 0 334 336"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M333.467 1.05737V68.2609H301.326V100.767H333.467V133.273H301.326V166.875H266.994V133.273H233.757V100.767H200.156V33.5634H266.994V1.05737H333.467ZM233.759 100.721V68.2147H266.995V100.721H233.759Z"
          stroke="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M167.284 133.273V100.767H100.811V133.273H34.3381V100.767H0.736328V300.917H34.3381V334.884H100.811V300.917H134.413V268.045H167.284V200.477H134.413V166.875H200.156V133.273H167.284ZM101.174 200.475V232.981H134.41V200.475H101.174Z"
          stroke="black"
        />
      </svg>
    ),
  },
  {
    name: "Crea tu huella",
    pathname: "/crea-tu-huella",
    image: "../public/imgs/nexusApp/crea-tu-huella-main.png",
    huella: (
      <svg
        width="344"
        height="346"
        viewBox="0 0 344 346"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M102.596 310.171V241.02H136.94V206.676H102.596V173.261H0.958008V37.2797H35.7658V71.159H69.1813V0.615784H172.212V37.2797H207.019V71.159H240.899V37.2797H309.586V71.159H343.465V138.918H309.586V173.261H274.777V138.918H207.019M102.596 310.171H69.1813V241.02H0.958008V310.171H35.7658V345.442H102.596V310.171ZM102.596 310.171H136.94V276.755H172.212V310.171H207.019V276.755H240.899V241.02H274.777V206.676H207.019V138.918M207.019 138.918L172.212 138.918V105.503H207.02L207.019 138.918ZM136.94 71.1591V37.2798H102.596V71.1591H136.94Z"
          stroke="black"
        />
      </svg>
    ),
  },
];

export default pages;
