import Cta from "./ctas/Cta.jsx";
import "../style/typography.css";

export default function ExploreCard({
  sectionName,
  sectionDisplay,
  bodyText,
  image,
  id,
  link,
  huella
}) {
  return (
    <>
      <section
        id={`${id}`}
        className="explore-card border-x-[.5px] md:snap-start border-black flex-col-reverse sm:flex-row h-[95vh] flex items-center md:items-end w-[100vw] px-5 md:pl-10 bg-white relative md:shrink-0 py-50 pb-5 md:pb-20"
      >
        <article className="flex flex-col gap-5 md:gap-10 items-start z-50">
          <h2 className="h2 flex flex-col gap-2sinteca-sb items-end tracking-tighter">
            <span>{sectionName}</span>
            <strong className="pixel pixel-strong font-normal mt-[-60px]">
              {sectionDisplay}
            </strong>
          </h2>
          <aside className="w-full gap-2 flex flex-col md:flex-row md:justify-between items-end">
            <p className="max-w-[368px] small text-[14px] tracking-wide text-pretty leading-5">
              {bodyText}
            </p>
            <Cta name="Explorar más" link={link} color="white" />
          </aside>
        </article>
        <aside className="h-[600px]">
          <figure className=" md:absolute md:bottom-0 md:right-0 md:translate-x-20 xl:translate-x-0 md:scale-[70%] xl:scale-[80%] scale-[40%]">
            {huella}
            <img
              src="/imgs/firmas/firma-negra.png"
              alt=""
              className="h-full"
            />
          </figure>
        </aside>
      </section>
    </>
  );
}
