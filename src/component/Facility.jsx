import Btn from "./Btn";
export default function Facility({
  title = null,
  heading,
  para,
  bool = false,
  logo1 = null,
  h1 = null,
  p1 = null,
  logo2 = null,
  h2 = null,
  p2 = null,
  children,
  img,
  btn = false,
  btn1 = null,
  btn2 = null,
  url1=null,url2=null,
}) {
  return (
    <>
      <br />
      <h1 className="m-4 my-22  sm:m-4 md:px-20 md:mt-10 text-sm font-extrabold ">
        {title}
      </h1>
      <div className="m-4 my-22  sm:m-4 md:px-12 md:mt-10  md:flex  md:items-center">
        <div className=" mb-4 md:w-[60%]  md:px-8 ">
          <h1 className="text-xl font-extrabold mb-4">{heading}</h1>
          <p className="text-sm text-wrap">{para}</p>
          {bool && (
            <div className="flex  mt-4">
              <div className="w-[45%] pr-2">
                <h1>{logo1}</h1>
                <h2 className="text-sm font-bold">{h1}</h2>
                <p className="text-xs">{p1}</p>
              </div>
              <div className="w-[45%] pl-2">
                <h1>{logo2}</h1>
                <h2 className="text-sm font-bold">{h2}</h2>
                <p className="text-xs">{p2}</p>
              </div>
            </div>
          )}
          {children}
          {btn && <Btn b11={btn1} b12={btn2} url1={url1} url2={url2} />}
        </div>

        <div className=" md:w-[30%]  ">
          <img className="w-[100%]" src={img} alt="img" />
        </div>
      </div>

      <br />
      <hr />
      <br />
    </>
  );
}
