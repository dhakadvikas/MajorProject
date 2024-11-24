import Btn from "./Btn";

export default function Success() {
  return (
    <>
      <div className="m-4 py-4 sm:px-2.5 sm:flex sm:item-center sm:justify-around">
        <div className=" mb-4 sm:mx-4">
          <h1 className="text-xs font-bold">Success</h1>
          <h1>
            Leading the Way in <br /> Computer Science <br />
            Education{" "}
          </h1>
        </div>
        <div className="sm:w-[50%] ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni,
            eaque molestiae deleniti voluptate.
          </p>
          <div className="sm:flex">
            <div className="m-2 p-2">
              <h1>50%</h1> <p>Lorem ipsum dolor sit Mollitia, deleniti!</p>
            </div>
            <div className="m-2 p-2">
              <h1>50%</h1> <p>Lorem ipsum dolor sit Mollitia, deleniti!</p>
            </div>
          </div>
          <Btn
            b11="Learn More"
            b12="Apply Now >"
            url1="/placement"
            url2="/login"
          />
        </div>
      </div>
      <br /> <hr />
      <br />
    </>
  );
}
