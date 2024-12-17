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
        image: "explora-conexion-humana",
        pathname: "/explore/conexion-humana",
      },
      {
        name: "Relaciones interpersonales",
        sectionName: "Relaciones",
        sectionDisplay: "interpersonales",
        bodyText:
          "En el análisis de las complejidades inherentes a las relaciones humanas, resulta esencial dividirlas en dos categorías fundamentales",
        image: "relaciones-interpersonales-link",
        pathname: "/explore/relaciones-interpersonales",
      },
      {
        name: "Relaciones espaciales",
        sectionName: "Relaciones",
        sectionDisplay: "espaciales",
        bodyText:
          "El comportamiento humano se concibe como el resultado de un campo, compuesto por hechos coexistentes donde el cambio en una parte afecta al conjunto",
        image: "section-3",
        pathname: "/explore/relaciones-espaciales",
      },
    ],
  },
  {
    name: "Nexus",
    pathname: "/nexus",
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
