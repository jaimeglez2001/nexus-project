import Cta from "/src/components/cta.jsx";
import "../style/typography.css";
import ExploreCard from "../components/explore-card.jsx";

function Explore() {
  return (
    <>
      <main className="w-full h-[100vh] flex flex-col gap-10 pb-10 bg-white">
        <header className="w-full flex flex-col gap-4 px-10 pt-20">
          <ul className="flex gap-2 sinteca">
            <li>
              <a href="/">Inicio</a>
            </li>
            /<li>Explora</li>
          </ul>
          <h1 className="blue-box">Explora</h1>
        </header>

        <ul className="flex overflow-scroll h-full">
          <ExploreCard
            sectionName="Conexión"
            sectionDisplay="humana"
            bodyText="Definida como la sensación de cercanía y pertenencia que se experimenta al establecer relaciones de apoyo con el entorno circundante"
            fullSectionName="Conexión Humana"
            sectionNumber="01"
          />
          <ExploreCard
            sectionName="Conexión"
            sectionDisplay="humana"
            bodyText="Definida como la sensación de cercanía y pertenencia que se experimenta al establecer relaciones de apoyo con el entorno circundante"
            fullSectionName="Conexión Humana"
            sectionNumber="01"
          />
          <ExploreCard
            sectionName="Conexión"
            sectionDisplay="humana"
            bodyText="Definida como la sensación de cercanía y pertenencia que se experimenta al establecer relaciones de apoyo con el entorno circundante"
            fullSectionName="Conexión Humana"
            sectionNumber="01"
          />
        </ul>
      </main>
    </>
  );
}

export default Explore;
