import Cta from "./ctas/Cta.jsx";
import "../style/typography.css";

export default function ExploreCard({
  sectionName,
  sectionDisplay,
  bodyText,
  image,
  id,
  link,
}) {
  return (
    <>
      <section
        id={`${id}`}
        className="explore-card border-x-[.5px] snap-start border-black flex-col sm:flex-row h-[95vh] flex items-end w-[99vw] pl-10 bg-white relative shrink-0 pb-20"
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
            <svg
              className="w-[45vw]"
              viewBox="0 0 745 747"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <clipPath id="clip">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M744.603 0.000244141V150.348H672.698V223.07H744.603V295.793H672.698V370.967H595.89V295.793H521.533V223.07H446.359V72.7227H595.89V0.000244141H744.603ZM521.536 222.967V150.244H595.893V222.967H521.536Z"
                  fill="#D9D9D9"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M372.82 295.793V223.07H224.106V295.793H75.3928V223.07H0.219116V670.845H75.3928V746.836H224.106V670.845H299.28V597.305H372.82V446.14H299.28V370.967H446.359V295.793H372.82ZM224.917 446.136V518.858H299.274V446.136H224.917Z"
                  fill="#D9D9D9"
                />
              </clipPath>
              <image
              href={`../public/imgs/${image}.png`}
              width="100%"
              height="100%"
              clipPath="url(#clip)"
            />
            </svg>


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
