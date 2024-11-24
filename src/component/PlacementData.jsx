import { useState } from "react";
import FeedBack from "./FeedBack";
export default function PlacementData() {
  const [placementData, setPlacementData] = useState();
  const [num, setNum] = useState(5);

  function getData() {
    axios
      .get(api)
      .then((result) => {
        setPlacementData(result);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const data = [
    {
      pname: "angle dean",
      para: "11 LPA ",
      pcompany: "zxc",
    },
    {
      pname: "sxzx",
      para: "7 LPA ",
      pcompany: "wwe",
    },
    {
      pname: "azxs",
      para: "3.5 LPA ",
      pcompany: "qweds",
    },
    {
      pname: "angle dean",
      para: "11 LPA ",
      pcompany: "zxc",
    },
    {
      pname: "sxzx",
      para: "7 LPA ",
      pcompany: "wwe",
    },
    {
      pname: "azxs",
      para: "3.5 LPA ",
      pcompany: "qweds",
    },
  ];
  // console.log(data.length);
  return (
    <>
      <div className="text-center">
        <h1 className="text-center font-extrabold mb-8">Campus Placement </h1>
        <div className=" flex justify-center flex-wrap">
          {data.map(
            (item, index) =>
              index < num && (
                <div className="bg-red-200 m-2 w-fit rounded-md" key={index}>
                  <FeedBack
                    key={item.pname}
                    pName={item.para}
                    para={item.pname}
                    pCompany={item.pcompany}
                  />
                </div>
              ),
          )}
        </div>
        <br />
        <button
          onClick={() => (num == 5 ? setNum(data.length) : setNum(5))}
          className="p-2 m-2 border border-slate-900 cursor-pointer"
        >
          {num == 5 ? "Show More" : "Show Less"}
        </button>
      </div>
    </>
  );
}
