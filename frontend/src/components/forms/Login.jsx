import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import { useState } from "react";
import Input from "../ui/Input";
import { Link, useNavigate } from "react-router-dom";
import StartButton from "../ui/StartButton";
function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://fancy-erin-dalmatian.cyclic.app/auth/signin`, formData)
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        navigate("/internships");
      });
  };

  return (
    <>
      <div className="lg:py-20 max-w-7xl mx-auto lg:h-screen ">
        <div className="bg-gray-50 grid grid-cols-2  w-full  h-full shadow-md rounded-md">
          <div className=" lg:p-12 flex flex-col lg:gap-10 p-5">
            <h3 className="text-[#141624]  text-4xl hidden lg:block">
              INTERLINK
            </h3>
            <h2 className="lg:text-2xl bold w-[340px] text-3xl">
              Welcome to interlink
            </h2>

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
            <div>
              <h1 className="text-gray-400 w-[340px] ">
                Don't have an accout {""}
                <Link
                  className="text-[#141624] text-bold text-lg underline"
                  to="/signup"
                >
                  create an account
                </Link>
              </h1>
            </div>
            <div className="pt-12 justify-center- flex">
              <StartButton text="login" onclick={handleSubmit} />
            </div>
          </div>
          <div className="bg-[#141624] hidden lg:block"></div>
        </div>
      </div>
    </>
  );
}
export default Login;
