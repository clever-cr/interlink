import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import { useState } from "react";
import Input from "../ui/Input";

function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:3003/auth/signin`, formData);
  };

  return (
    <>
      <div className="py-20 max-w-7xl mx-auto h-screen ">
        <div className="bg-gray-50 p-12- grid grid-cols-2  w-full  h-full shadow-md rounded-md">
          <div className=" p-12 flex flex-col gap-10">
            <h3 className="text-[#141624]  text-4xl">INTERLINK</h3>
            <h2 className="text-2xl bold">Welcome to interlink</h2>

            <form className="flex flex-col gap-8 pt-12" onSubmit={handleSubmit}>
              <Input
                placeholder={"email"}
                value={formData.email}
                name={"email"}
                onChange={handleChange}
              />
              <div className="flex gap-2">
                <Input
                  placeholder={"password"}
                  value={formData.password}
                  name={"password"}
                  onChange={handleChange}
                  type={"password"}
                />
                <button className="border px-12 h-[69px] rounded-[23px]">
                  <AiOutlineArrowRight />
                </button>
              </div>
            </form>
            <div className="pt-12 justify-center- flex">
              <button
                className="bg-[#141624] px-14 py-3 rounded-l-[23px] text-white "
                onClick={handleSubmit}
              >
                Log In
              </button>
              <button className=" px-14 py-3 rounded-r-[23px] bg-white">
                Sign Up
              </button>
            </div>
          </div>
          <div className="bg-[#141624]"></div>
        </div>
      </div>
    </>
  );
}
export default Login;
