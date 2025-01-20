const relaciones = [
  {
    name: "personales",
    description:
      "Involucran una cercanía e interdependencia significativas, como aquellas con amigos cercanos, parejas o familiares",
    subRelations: [
      {
        name: "Íntimas",
        description:
          "Se refieren a aquellas conexiones profundas e íntimas en las que el afecto juega un papel destacado, aunque su intensidad puede variar. Estas relaciones tienden a ser duraderas, sustentadas en la confianza, proporcionando bienestar, placer, emociones positivas y satisfaciendo las necesidades de protección y pertenencia. Ejemplos paradigmáticos incluyen el amor y las relaciones de amistad",
      },
      {
        name: "Familiares",
        description:
          "Estas relaciones, como indica su nombre, se establecen entre los miembros de la familia, vinculados por lazos sanguíneos y presentes desde el nacimiento. Suelen perdurar en el tiempo y a menudo se rigen por la autoridad. Ejemplos de tales relaciones incluyen aquellas con padres, hermanos, abuelos y/o hijos",
      },
    ],
  },
  {
    name: "sociales",
    description:
      "Satisfacen ocasionalmente nuestras necesidades y carecen de la misma proximidad e interdependencia",
    subRelations: [
      {
        name: "Superficiales",
        description:
          "Este tipo de relaciones carece de profundidad, siendo breves, pasajeras y carentes de afecto e intimidad. Se establecen principalmente en los primeros encuentros con una persona y son efímeras. Ejemplos incluyen las interacciones con desconocidos, como el compañero de asiento en un avión o el dependiente de una tienda",
      },
      {
        name: "Circunstanciales",
        description:
          "Ubicadas entre las relaciones superficiales y las íntimas, estas se dan con personas conocidas pero sin un vínculo profundo. Aunque se comparte tiempo de manera regular, no existe un apego emocional intenso. Ejemplos de estas relaciones son las que se forman con compañeros de trabajo o vecinos",
      },
      {
        name: "Rivalidad",
        description:
          "Estas relaciones se caracterizan por surgir desde la enemistad, la competencia, e incluso el odio y el rencor. Un ejemplo de este tipo de relación podría ser la conexión con un antiguo enemigo del pasado",
      }
    ]
  }
];


export default relaciones;