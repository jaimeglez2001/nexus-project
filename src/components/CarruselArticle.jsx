export default function CarruselArticle({ text, image }) {
  return (
    <article
      id="section_1"
      className="carusel-child shrink-0 w-full text-carusel h-[85vh] flex flex-col items-center justify-center"
      style={{backgroundImage: `url("../public/imgs/${image}")`}} 
  >
      <span className="sinteca-sb text-[48px] leading-[95%] tracking-tight max-w-[900px] text-pretty text-white">
        {text}
      </span>
    </article>
  );
}
