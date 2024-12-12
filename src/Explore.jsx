import Cta from "/src/components/cta.jsx";
import Nav from "/src/components/nav.jsx";
import "/src/typography.css";

function Explore({sectionName, sectionDisplay, bodyText, fullSectionName, sectionNumber}) {
    return (
      <>
        <main className="w-full h-[100vh] flex flex-col gap-10 pb-10">
          <Nav />
          <header className="w-full flex flex-col gap-4 px-10 pt-20">
            <ul className="flex gap-2 sinteca">
              <li>
                <a href="/">Inicio</a>
              </li>
              /<li>Explora</li>
            </ul>
            <h1 className="blue-box">Explora</h1>
          </header>
  
          <section className="h-full flex items-end w-full pl-10">
            <main className="flex flex-col gap-10 items-start">
              <h2 className="flex flex-col sinteca-sb items-end text-[64px] tracking-tighter leading-[1%]">
                {sectionName}{" "}
                <strong className="pixel mr-[100px] font-normal mt-[-20px]">
                  {sectionDisplay}
                </strong>
              </h2>
              <aside className="w-full flex justify-between items-end">
                <p className="max-w-[368px] sinteca text-[14px] tracking-wide text-pretty leading-5">
                  {bodyText}
                </p>
                <Cta name="Explorar más" />
              </aside>
              <footer className="flex flex-col gap-4">
                <aside className="flex gap-2 items-center">
                  <span className="black-box">{sectionNumber}</span>
                  <strong className="black-box">{fullSectionName}</strong>
                </aside>
                <nav className="flex gap-2">
                  <ul className="flex gap-2">
                    <li className="active h-[8px] w-[200px] bg-[--nexusBlue]">
                      <a href="#"></a>
                    </li>
                    <li className="h-[8px] w-[64px] border-[1px] border-solid border-[--nexusBlue]">
                      <a href="#"></a>
                    </li>
                    <li className="h-[8px] w-[64px] border-[1px] border-solid border-[--nexusBlue]">
                      <a href="#"></a>
                    </li>
                  </ul>
                </nav>
              </footer>
            </main>
            <aside>
              <figure className="absolute bottom-0 right-0">
                {/*Huella Hero*/}
                <svg
                  className="main-svg"
                  height="744px"
                  width="744px"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Clip Path */}
                  <clipPath id="clip">
                    {/* Paths */}
                    <path d="M744.603 0.000244141V150.348H672.698V223.07H744.603V295.793H672.698V370.967H595.89V295.793H521.533V223.07H446.359V72.7227H595.89V0.000244141H744.603ZM521.536 222.967V150.244H595.893V222.967H521.536Z"></path>
                    <path d="M372.82 223.07V295.793H446.359V370.967H299.28V446.14H372.82V597.305H299.28V670.845H224.106V746.835H75.3928V670.845H0.219116V223.07H75.3928V295.793H224.106V223.07H372.82ZM224.917 518.858V446.136H299.274V518.858H224.917Z"></path>
                  </clipPath>
  
                  {/* Imagen de fondo */}
                  <image
                    href="/public/imgs/explora-conexion-humana.png"
                    x="0"
                    y="0"
                    preserveAspectRatio="xMidYMid slice"
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
        </main>
      </>
    );
  }

  export default Explore;