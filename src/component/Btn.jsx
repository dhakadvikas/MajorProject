import { useNavigate } from "react-router-dom";
export default function Btn({
  btn = false,
  b11 = null,
  b12 = null,
  url1 = null,
  url2 = null, // write url eg . "'url_link '" with quote.
}) {
  const navgate = useNavigate();
  function l1() {
    const link = "/about";

    navgate(url1);
  }
  function l2() {
    navgate(url2);
  }

  return (
    <>
      {btn ? (
        <div>
          {b11 && (
            <button onClick={l1} className="bg-black p-2 px-4 m-2 text-white">
              {b11}
            </button>
          )}
          {b12 && (
            <button onClick={l2} className=" p-2 m-2 border border-slate-900">
              {b12}
            </button>
          )}
        </div>
      ) : (
        <div>
          {b11 && (
            <button
              onClick={l1}
              className=" p-2 px-4 m-2 border border-slate-900"
            >
              {b11}
            </button>
          )}
          {b12 && <button onClick={l2}>{b12}</button>}
        </div>
      )}
    </>
  );
}
