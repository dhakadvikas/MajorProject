import SocialMedia from "./SocialMedia";
export default function Card({
  img,
  heading,
  subHeading = null,
  para,
  socialMedia = false,
}) {
  return (
    <>
      <div className="mx-2 mt-5 p-2 text-center sm:w-[28%]">
        <div>
          {" "}
          {img ? (
            socialMedia ? (
              <img
                className="w-88 h-44 bg-red-300 rounded-full  m-auto md:h-60"
                src={img}
                alt=""
              />
            ) : (
              <img
                className="w-[100%] h-44 bg-red-300  m-auto md:h-60"
                src={img}
                alt=""
              />
            )
          ) : img == 0 ? (
            <h1>&#10066;</h1>
          ) : null}
        </div>
        <div>
          <h1 className="text-2xl font-extrabold my-2 mt-4">{heading} </h1>
          <h1 className="text-base -mt-2 mb-4"> {subHeading}</h1>
          <p className="text-sm my-4">{para}</p>
          {socialMedia && <SocialMedia />}
        </div>
      </div>
    </>
  );
}
