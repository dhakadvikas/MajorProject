import Btn from "./Btn";

export default function Opportunities({
  bool = true,
  title = null,
  heading,
  subHeading = null,
  para,
  btn = true,
  b11 = null,
  b12 = null,
  url11 = null,
  url12 = null,
}) {
  return (
    <>
      <br />
      <br /> <br />
      {{ bool } == true ? (
        <div className="m-4 my-22  sm:m-4 md:px-20 md:mt-10 sm:flex sm:justify-between">
          <div>
            <h1>{heading} </h1>
            <p>{para}</p>
          </div>
          <Btn btn={btn} b11={b11} b12={b12} url1={url11} url2={url12} />
        </div>
      ) : (
        <div className="m-4 my-22  sm:m-4 md:px-20 md:mt-10 sm:flex sm:justify-between item-cemter">
          <div className=" sm:pr-2 md:ml-[10%]   ">
            <h1 className="text-sm font-extrabold">{title}</h1>
            <h1 className="text-4xl font-black">
              {heading} <br /> {subHeading}
            </h1>
          </div>
          <div className="sm:pl-2 sm:w-[55%] md:w-[45%] ">
            <p className="text-sm">{para}</p>
            {b11 && <Btn btn={btn} b11={b11} b12={b12} />}
          </div>
        </div>
      )}
      <br />
    </>
  );
}
