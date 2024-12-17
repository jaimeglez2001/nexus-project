import "../style/typography.css";

export default function Huella({ description, numero, fase, letra }) {
  return (
    <li className="fase flex w-[100vw] h-full justify-between items-end px-10 shrink-0 border-r-[.5px] pr-20 border-black">
      <article className="flex gap-10 items-end">
        <span className="pixel">{numero}</span>
        <header className="flex flex-col gap-4">
          <h3 className="h5">{fase}</h3>
          <p className="max-w-[300px] body">{description}</p>
        </header>
      </article>
      <span className="huella-xxl">{letra}</span>
    </li>
  );
}
