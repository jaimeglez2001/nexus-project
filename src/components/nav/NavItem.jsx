import { Link, useLocation } from "react-router-dom";
import "../../style/typography.css";

function ActiveNavItem({ name, link, onMouseEnter, onMouseLeave, onClick }) {

  return (
      <li>
        <Link to={link} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="menu-item flex flex-col gap-5 overflow-hidden">
          <span className="pixel-menu tracking-tighter leading-[100%]">
            {name}
          </span>
          <span className="sinteca-med text-[72px] tracking-tighter leading-[100%]">
            {name}
          </span>
        </Link>
      </li>
  );
}

function DefaultNavItem({ name, link, onMouseEnter, onMouseLeave, onClick }) {

  return (
      <li className="sinteca-med text-[72px] tracking-tighter leading-[100%]">
        <Link to={link} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="menu-item flex flex-col gap-5 overflow-hidden">
          <span className="sinteca-med text-[72px] tracking-tighter leading-[100%]">
            {name}
          </span>
          <span className="pixel-menu tracking-tighter leading-[100%]">
            {name}
          </span>
        </Link>
      </li>
  );
}

export default function NavItem({ name, link, onMouseEnter, onMouseLeave, onClick }) {
const location = useLocation();

  return (
    <>
      {link === location.pathname ? <ActiveNavItem name={name} link={link} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseEnter} /> : <DefaultNavItem name={name} onClick={onClick} link={link} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />} 
    </>
  );
}
