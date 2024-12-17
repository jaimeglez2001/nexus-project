import "../../style/typography.css";
import Nav from "./Nav.jsx";
import { Link } from "react-router-dom";
import NavItem from "./NavItem.jsx";

export default function BurguerMeny() {
  return (
    <>
      <div className="burguer-menu flex flex-col gap-10 justify-end h-[100vh] w-full fixed top-0 left-0 z-50 bg-white">
        <Nav />
        <nav className="flex gap-20 w-full justify-between items-end p-10">
          <ul className="flex flex-col w-full">
            
            <NavItem name="Home" link="/" />
            <NavItem name="Explorar" link="/explore" />
            <NavItem name="Nexus" link="/nexus" />
            <NavItem name="Crea tu huella" link="/crea-tu-huella" />
            
          </ul>
          <aside>
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
          </aside>
        </nav>
        <footer>
          <img
            className="w-full"
            src="../../public/imgs/footer-menu.png"
            alt=""
          />
        </footer>
      </div>
    </>
  );
}
