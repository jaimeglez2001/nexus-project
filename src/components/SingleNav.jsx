import "../style/typography.css";

export default function SingleNav() {
  return (
    <>
      <nav>
        <ul className="flex gap-2 z-50 top-20 left-10 fixed">
          <li>
            <a className="black-box" href="/">
              Conexión humana
            </a>
          </li>
          <li>
            <a className="white-box" href="/">
              Relaciones interpersonales
            </a>
          </li>
          <li>
            <a className="white-box" href="/">
              Relaciones espaciales
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
