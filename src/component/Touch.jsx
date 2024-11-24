import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
export default function Touch() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  function sendData(userData) {
    const api = "";
    axios
      .post(api, userData)
      .then((result) => {
        console.log(result);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <div className="text-center">
        <h2 className="text-base font-extrabold">Connect</h2>
        <h1 className="font-black">Get in Touch</h1>
        <p>Want to Join ? We'd love to have you .</p>
        <form
          onSubmit={handleSubmit((data) => {
            sendData(data);
            reset();
          })}
        >
          <input
            {...register("name")}
            type="text"
            placeholder="Name"
            className="border-1 p-2 border-gray-500 my-2 w-[90%] sm:w-[70%] md:w-[30%]"
            required
          />
          <br />
          <input
            {...register("username")}
            type="text"
            placeholder="Roll Number"
            className="border-1 p-2 border-gray-500 my-2 w-[90%] sm:w-[70%] md:w-[30%]"
            required
          />
          <br />
          <input
            {...register("email")}
            type="email"
            placeholder="emai"
            className="border-1 p-2 border-gray-500 my-2 w-[90%] sm:w-[70%] md:w-[30%]"
            required
          />
          <br />
          <input
            {...register("passoutYear")}
            type="number"
            placeholder="Passout-Year "
            className="border-1 p-2 border-gray-500 my-2 w-[90%] sm:w-[70%] md:w-[30%]"
            required
          />
          <br />
          <input
            {...register("password")}
            type="password"
            placeholder="Enter Password "
            className="border-1 p-2 border-gray-500 my-2 w-[90%] sm:w-[70%] md:w-[30%]"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            required
          />
          {/*  <br />
          <textarea
            name=""
            id=""
            placeholder="Enter your message"
            className="border-1 p-2 border-gray-500 my-2 w-[90%] sm:w-[70%] md:w-[30%] h-40"
  ></textarea>*/}
          <br />
          <p className="">
            <input type="checkbox" required /> I agree to the Terms
          </p>
          <input
            type="submit"
            className=" px-4 py-2 bg-black text-white my-4"
          />
        </form>
      </div>
      <br />
      <hr />
      <br />
    </>
  );
}
