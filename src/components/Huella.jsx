import "../style/typography.css";

export default function Huella({ description, numero, fase, letra }) {
  return (
    <li className="fase flex flex-col gap-10 items-center w-[312px] shrink-0">
      <span className="huella-xxl">{letra}</span>
      <article className="flex flex-col gap-5">
        <header>
          <span className="blue-box">0{numero}</span>
          <span className="black-box">{fase}</span>
        </header>
        <p className="small">{description}</p>
      </article>
    </li>
  );
}
