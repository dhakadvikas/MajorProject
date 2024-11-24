import Btn from "./Btn";

export default function Discover({
  title,
  heading,
  para,
  btn,
  b11,
  b12,
  url1 = null,
  url2 = null,
}) {
  return (
    <>
      <div className="m-4 my-22  sm:m-4 md:px-20 md:mt-10 text-center ">
        <h2 className="text-base font-extrabold">{title}</h2>
        <h1 className=" font-extrabold  sm:w-[70%] sm:m-auto md:w-[55%] ">
          {heading}
        </h1>
        <p className="my-4">{para}</p>
        <Btn btn={btn} b11={b11} b12={b12} url1={url1} url2={url2} />
      </div>
    </>
  );
}
