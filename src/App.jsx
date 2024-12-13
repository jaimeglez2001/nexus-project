import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/nav";

import Explore from "./pages/Explore";
import Home from "./pages/Home";
import Conexion from "./pages/Conexion-humana";

function App() {
  return (
    <>
      <Router>
        <Nav />
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
          <Route path="/conexion-humana" element={<Conexion
            name={"Conexión"}
            nameHighlight={"humana"}
          />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

/**/
