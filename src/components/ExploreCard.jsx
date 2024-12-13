import Cta from "./Cta";
import "../style/typography.css";

export default function ExploreCard({
  sectionName,
  sectionDisplay,
  sectionNumber,
  fullSectionName,
  bodyText,
  image,
  id
}) {
  return (
    <>
      <section id={`${id}`} className="explore-card h-[95vh] flex items-end w-[99vw] pl-10 bg-white relative shrink-0 pb-20">
        <article className="flex flex-col gap-10 items-start z-50">
          <h2 className="flex flex-col sinteca-sb items-end text-[64px] tracking-tighter leading-[1%]">
            {sectionName}{" "}
            <strong className="pixel mr-[100px] font-normal mt-[-20px]">
              {sectionDisplay}
            </strong>
          </h2>
          <aside className="w-full flex justify-between items-end">
            <p className="max-w-[368px] small text-[14px] tracking-wide text-pretty leading-5">
              {bodyText}
            </p>
            <Cta name="Explorar más" link="/conexion-humana" />
          </aside>
        </article>
        <aside>
          <figure className="absolute bottom-0 right-0">

            <svg
              className="main-svg"
              height="744px"
              width="744px"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >

              <clipPath id="clip">
                {/* Paths */}
                <path d="M744.603 0.000244141V150.348H672.698V223.07H744.603V295.793H672.698V370.967H595.89V295.793H521.533V223.07H446.359V72.7227H595.89V0.000244141H744.603ZM521.536 222.967V150.244H595.893V222.967H521.536Z"></path>
                <path d="M372.82 223.07V295.793H446.359V370.967H299.28V446.14H372.82V597.305H299.28V670.845H224.106V746.835H75.3928V670.845H0.219116V223.07H75.3928V295.793H224.106V223.07H372.82ZM224.917 518.858V446.136H299.274V518.858H224.917Z"></path>
              </clipPath>


              <image
                href={`/public/imgs/${image}.png`}
                x="0"
                y="0"
                width="100%"
                clipPath="url(#clip)"
              />
            </svg>
            <img
              src="/public/imgs/firma-negra.png"
              alt=""
              className=" absolute bottom-40 right-40"
            />
          </figure>
        </aside>
      </section>
    </>
  );
}
