import Btn from "./Btn";
export default function Hero({
  title = null,
  H1,
  H2,
  H3,
  para,
  img = null,
  url1 = null,
  url2 = null,
}) {
  return (
    <>
      <div className=" m-4    flex-none sm:m-4 sm:flex sm:item-center  md:px-12 md:mt-10 ">
        <div className=" p-1 sm:w-[55%] m-auto">
          <h2 className="text-sm font-extrabold">{title}</h2>
          <h1>
            {H1} {H2 && <br />} {H2} {H3 && <br />} {H3}
          </h1>
          <p className="font-thin text-slate-500">{para}</p>
          <Btn
            btn={true}
            b11="Learn More"
            b12="Sign Up"
            url1={url1}
            url2={url2}
          />
        </div>{" "}
        <div className=" sm:w-[45%] m-auto  p-2   ">
          {" "}
          <div className=" sm:w-[100%]  ">
            {img && <img className=" w-[100%] rounded-md" src={img} alt="" />}
          </div>
        </div>
      </div>
      <br />
      <hr />
      <br />
    </>
  );
}
