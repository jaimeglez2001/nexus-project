import { Link, useLocation } from "react-router-dom";
import "../../style/typography.css";

function ActiveNavItem({ name, link, onMouseEnter, onMouseLeave }) {

  return (
      <li>
        <Link to={link} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="menu-item flex flex-col gap-5 overflow-hidden">
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

function DefaultNavItem({ name, link, onMouseEnter, onMouseLeave }) {

  return (
      <li className="sinteca-med text-[72px] tracking-tighter leading-[100%]">
        <Link to={link} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="menu-item flex flex-col gap-5 overflow-hidden">
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

export default function NavItem({ name, link, onMouseEnter, onMouseLeave }) {
const location = useLocation();

  return (
    <>
      {link === location.pathname ? <ActiveNavItem name={name} link={link} onMouseEnter={onMouseEnter} onMouseLeave={onMouseEnter} /> : <DefaultNavItem name={name} link={link} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />} 
    </>
  );
}
