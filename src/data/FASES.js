const fasesRelacion = [
  {
    id: 1,
    fase: "Iniciación",
    descripcion:
      "En esta fase, las personas se evalúan mutuamente, buscando presentarse de manera favorable",
    etapa: 1,
    letra: [
      "q",
      "a",
      "z",
      " "
  ],
    cuestionario: {
      pregunta: "¿Cuál fue tu primera impresión de esa persona?",
      ejemplo:
        "En la etapa de iniciación, las personas se evalúan mutuamente e intentan presentarse de manera favorable. Ya sea que te encuentres con alguien en el pasillo de la escuela o en la sección de productos en la tienda de comestibles, observas a la persona y consideras cualquier conocimiento previo que tengas de ella, las expectativas para la situación, entre otros factores",
      respuestas: ["Buena", "Normal", "Mala", "No me acuerdo"],
    },
  },
  {
    id: 2,
    fase: "Experimentación",
    descripcion:
      "Aquí, se produce un intercambio de información, similar al 'ritual de olfateo' en animales, llevando a una transición de desconocidos a conocidos",
    etapa: 2,
    letra: [
      "w",
      "s",
      "x",
      " "
  ],
    cuestionario: {
      pregunta: "¿Disfrutas con esa persona?",
      ejemplo:
        "Descubrir que ambos tenéis intereses comunes puede llevar a conversaciones más extensas; sin embargo, a veces el experimento puede fallar. Si tenéis opiniones opuestas o tus intentos de intercambio de información con otra persona durante la etapa experimental se encuentran con silencio o vacilación, podrías interpretar su falta de comunicación como una señal de que no deberías buscar una interacción futura",
      respuestas: [
        "Mucho, tenemos intereses comunes",
        "Sin más",
        "No, lo hago por cortesía",
        "No lo sé",
      ],
    },
  },
  {
    id: 3,
    fase: "Intensificación",
    descripcion:
      "Se señala la apertura a una mayor intimidad, esperando una señal de aceptación antes de avanzar",
    etapa: 3,
    letra: [
      "e",
      "d",
      "c",
      " "
  ],
    cuestionario: {
      pregunta:
        "¿Habéis compartido experiencias más íntimas que con otras personas?",
      ejemplo:
        "La intensificación gradual de la relación puede llevarse a cabo durante semanas, meses o años. Invitar a alguien de vacaciones sin tener interacciones menos íntimas previas sería considerado extraño. Solicitar demasiados favores o no devolver los favores concedidos puede desequilibrar la relación, llevándola a transitar a otra etapa, como la diferenciación",
      respuestas: [
        "Sí, hemos vivido experiencias muy íntimas",
        "Hemos compartido vivencias casuales",
        "Sí, pero no fue bien",
        "No",
      ],
    },
  },
  {
    id: 4,
    fase: "Integración",
    descripcion:
      "Identidades y personalidades se fusionan, generando un sentido de interdependencia, evidente en diversas formas de relación",
    etapa: 4,
    letra: [
      "r",
      "f",
      "v",
      " "
  ],
    cuestionario: {
      pregunta: "¿Formáis parte de la vida íntima del otro?",
      ejemplo:
        "Ejemplos como la fusión con las amistades del otro o la percepción externa de los compañeros como una misma unidad. A pesar de integrarse, las personas suelen mantener un sentido de identidad propio al pasar tiempo con amigos y familiares por separado, equilibrando así la independencia y conexión. La ruptura de este equilibrio puede generar dependencia en una de las partes, lo que podría afectar negativamente la relación",
      respuestas: [
        "Hemos integrado nuestras vidas",
        "Compartimos cosas superficiales",
        "Sí, pero uno de nosotros es dependiente del otro",
        "No",
      ],
    },
  },
  {
    id: 5,
    fase: "Lazo",
    descripcion:
      "Se incluye un ritual público que anuncia formalmente el compromiso, principalmente aplicable a parejas románticas",
    etapa: 5,
    letra: [
      "t",
      "g",
      "b",
      " "
  ],
    cuestionario: {
      pregunta: "¿Habéis establecido un vínculo único?",
      ejemplo:
        "Pueden incluir rituales formales como un matrimonio pero o interpretarse como una unión más abstracta, como un mejor amigo. En cierto modo, el ritual de vinculación es arbitrario, ya que puede ocurrir en cualquier etapa de una relación",
      respuestas: [
        "Sí",
        "Tuvimos un vínculo pero se rompió",
        "No es correspondido",
        "No",
      ],
    },
  },
  {
    id: 6,
    fase: "Diferenciación",
    descripcion:
      "Las diferencias individuales se comunican, revirtiendo la integración hacia una afirmación de individualidad",
    etapa: 6,
    letra: [
      "y",
      "h",
      "n",
      " "
  ],
    cuestionario: {
      pregunta: "¿Cómo lleváis vuestras diferencias?",
      ejemplo:
        "Diferenciarse es lo opuesto a integrarse, ya que el 'nosotros' y 'nuestro' retrocede a 'yo' y 'mío'. La diferenciación puede comenzar en una relación que se vinculó antes de que los individuos se conocieran lo suficiente en profundidad y amplitud, o en una relación que apenas ha empezado",
      respuestas: [
        "Nos unen más",
        "No nos afectan",
        "Nos perjudican",
        "No tenemos diferencias",
      ],
    },
  },
  {
    id: 7,
    fase: "Circunscripción",
    descripcion:
      "La comunicación disminuye y ciertos temas se restringen, marcando un cierre verbal entre las personas",
    etapa: 7,
    letra: [
      "u",
      "j",
      "m",
      " "
  ],
    cuestionario: {
      pregunta: "¿Evitáis hablar de ciertos temas?",
      ejemplo:
        "La comunicación disminuye y ciertas áreas o temas se restringen a medida que las personas se cierran verbalmente entre sí. Pueden decir cosas como 'No quiero hablar más de eso' o 'Tú atiende tus asuntos y yo atenderé los míos'",
      respuestas: ["Sí", "Sí, pero no muchos", "Sí y nos perjudicó", "No"],
    },
  },
  {
    id: 8,
    fase: "Estancamiento",
    descripcion:
      "La relación puede estancarse, esperando que la comunicación interna evite el conflicto relacional",
    etapa: 8,
    letra: [
      "i",
      "k",
      ",",
      " "
  ],
    cuestionario: {
      pregunta: "¿Llegó esa relación a un punto muerto?",
      ejemplo:
        "Esta etapa puede prolongarse en algunas relaciones. Padres e hijos que están distanciados, parejas separadas que esperan un divorcio, o amigos que quieren poner fin a una relación pero no saben cómo hacerlo pueden pasar periodos extendidos de estancamiento",
      respuestas: [
        "Sí, pero retomamos la relación",
        "Sí",
        "Sí, y fue a peor",
        "No",
      ],
    },
  },
  {
    id: 9,
    fase: "Evitación",
    descripcion:
      "Se busca cerrar las líneas de comunicación para poner fin a la incomodidad, implicando la disociación cognitiva en algunos casos",
    etapa: 9,
    letra: [
      "o",
      "l",
      ".",
      " "
  ],
    cuestionario: {
      pregunta: "¿Alguna de las parte ha intentado evitar al otro?",
      ejemplo:
        "La comunicación en la etapa de evitación puede ser muy directa, como 'No quiero hablar contigo más', o más indirecta, como 'Tengo que encontrarme con alguien en un rato, así que no puedo hablar mucho'. Si bien la evitación física, como salir de una habitación o solicitar un cambio de horario en el trabajo",
      respuestas: [
        "Durante una época",
        "Sí pero de forma indirecta",
        "Sí, de forma directa",
        "No",
      ],
    },
  },
  {
    id: 10,
    fase: "Terminación",
    descripcion:
      "Puede ocurrir temprano en la relación o después de años, impulsada por factores externos o cambios internos que debilitan el vínculo",
    etapa: 10,
    letra: [
      "p",
      "ñ",
      "-",
      " "
  ],
    cuestionario: {
      pregunta: "¿Cómo acabó esa relación?",
      ejemplo:
        "La etapa de terminación de una relación puede ocurrir poco después de la iniciación o después de que se haya establecido una historia relacional de diez o veinte años. La terminación puede ser resultado de circunstancias externas como la separación geográfica o factores internos como cambios en valores o personalidades que llevan a debilitar el vínculo",
      respuestas: [
        "Acabó, pero volvió a empezar",
        "No acabó mal",
        "Acabó mal",
        "No ha acabado",
      ],
    },
  },
];

export default fasesRelacion;
