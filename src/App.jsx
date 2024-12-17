import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/nav/Nav";

import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Conexion from "./pages/explore/ConexionHumana.jsx";
import RelacionesInterpersonales from "./pages/explore/RelacionesInterpersonales.jsx";
import BurguerMenu from "./components/nav/BurguerMenu.jsx";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <BurguerMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/explore"
            element={
              <Explore
                sectionName="Conexión"
                sectionDisplay="humana"
                bodyText="Definida como la sensación de cercanía y pertenencia que se
          experimenta al establecer relaciones de apoyo con el entorno
          circundante."
                fullSectionName="Conexión humana"
                sectionNumber="01"
              />
            }
          />
          <Route path="/explore/conexion-humana" element={<Conexion
            name={"Conexión"}
            nameHighlight={"humana"}
          />} />
          <Route path="/explore/relaciones-interpersonales" element={<RelacionesInterpersonales
            name={"Relaciones"}
            nameHighlight={"interpersonales"}
          />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

/**/
