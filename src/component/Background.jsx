import Btn from "./Btn";

export default function Background({
  title = null,
  heading,
  para,
  image,
  btn1 = null,
  btn2 = null,
  url1 = null,
  url2 = null,
}) {
  return (
    <>
      <div
        style={{ "--image-url": `url(${image})` }}
        className={`flex justify-center items-center  h-80 bg-gray-100 md:h-screen
        bg-[image:var(--image-url)]
        bg-no-repeat bg-center bg-cover text-center  `}
      >
        <div className=" bg-gray-100/10 p-2   ">
          <h2 className="text-sm font-extrabold">{title}</h2>
          <h1 className="font-black  ">{heading}</h1>
          <p className="font-extrabold">{para}</p>
          {btn1 && (
            <Btn btn={true} b11={btn1} b12={btn2} url1={url1} url2={url2} />
          )}
        </div>
      </div>
    </>
  );
}
