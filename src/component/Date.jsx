import Btn from "./Btn";

export default function Data({
  date,
  dHeading = null,
  dPara = null,
  dBtn1 = null,
  dBtn2 = null,
  para = null,
  btn = null,
  b11,
  b12,
  url11 = null,
  url12 = null,
  url21 = null,
  url22 = null,
  img,
}) {
  return (
    <>
      <div className={`m-4 my-22  sm:m-4 md:px-20 md:mt-10 sm:flex `}>
        <div className="py-4 sm:pr-10  sm:w-[50%] sm:border-r-2 border-gray-900 relative">
          <div className="sm:float-right  sm:text-end">
            {" "}
            <p className=" text-3xl font-extrabold">{date}</p>
            <h1>{dHeading}</h1>
            <p>{dPara}</p>
            {dBtn1 && <Btn b11={dBtn1} b12={dBtn2} url1={url11} url2={url12} />}
          </div>
          <div className="w-0 h-0 sm:w-7 sm:h-7 border-4 border-white rounded-full bg-gray-900 absolute -right-4 top-[50%]"></div>
        </div>
        <div className=" sm:pt-8 sm:pl-10 sm:w-[50%] md:pl-16">
          <p>{para}</p>
          {btn && (
            <Btn btn={btn} b11={b11} b12={b12} url1={url21} url2={url22} />
          )}
          <div className=" w-[100%] h-fit my-4 md:w-[70%]  ">
            <img className="w-[100%]   " src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
