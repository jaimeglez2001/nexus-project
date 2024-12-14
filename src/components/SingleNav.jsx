import "../style/typography.css";
import { Link } from "react-router-dom";  

export default function SingleNav() {
  return (
    <>
      <nav>
        <ul className="flex gap-2 z-50 top-20 left-10 fixed">
          <li>
            <Link className="black-box" to="/explore/conexion-humana">
              Conexión humana
            </Link>
          </li>
          <li>
            <Link className="white-box" to="/explore/relaciones-interpersonales">
              Relaciones interpersonales
            </Link>
          </li>
          <li>
            <Link className="white-box" to="/explore/relaciones-espaciales">
              Relaciones espaciales
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
