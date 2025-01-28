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
        className="explore-card border-x-[.5px] snap-start border-black flex-col sm:flex-row h-[95vh] flex items-end w-[100vw] pl-10 bg-white relative shrink-0 pb-20"
      >
        <article className="flex flex-col gap-10 items-start z-50">
          <h2 className="h2 flex flex-col gap-2sinteca-sb items-end tracking-tighter">
            <span>{sectionName}</span>
            <strong className="pixel pixel-strong font-normal mt-[-60px]">
              {sectionDisplay}
            </strong>
          </h2>
          <aside className="w-full flex justify-between items-end">
            <p className="max-w-[368px] small text-[14px] tracking-wide text-pretty leading-5">
              {bodyText}
            </p>
            <Cta name="Explorar más" link={link} />
          </aside>
        </article>
        <aside>
          <figure className="static sm:absolute bottom-0 right-0">
            {huella}
            <img
              src="../public/imgs/firma-negra.png"
              alt=""
              className=" absolute bottom-40 right-40"
            />
          </figure>
        </aside>
      </section>
    </>
  );
}
