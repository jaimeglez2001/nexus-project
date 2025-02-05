import "../../style/typography.css";
import { Link } from "react-router-dom";

export default function TerciaryCta({ name = "Volver", link = "#" }) {
    return (
        <Link
        to="/explore"
        className="body flex gap-4 items-center absolute top-[140px] lg:top-[164px] left-5 lg:left-10"
      >
        <svg
          width="15"
          height="14"
          viewBox="0 0 15 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.3754 5.9766L14.1082 5.9766V7.74013H3.3754L8.10518 12.4699L6.85837 13.7167L0 6.85837L6.85837 0L8.10518 1.24682L3.3754 5.9766Z"
            fill="black"
          />
        </svg>
        Volver
      </Link>
    )
}