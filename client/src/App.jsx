import { useState } from "react";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  async function getData() {
    const api = "/faculty";
    await axios
      .get(api)
      .then((apiData) => {
        console.log(apiData);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <h1>this is the maian page'</h1>
      <button onClick={getData}> onclik </button>
    </>
  );
}

export default App;
