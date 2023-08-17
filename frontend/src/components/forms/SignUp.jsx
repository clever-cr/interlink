import { useState } from "react";
import Input from "../ui/Input";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import StartButton from "../ui/StartButton";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`https://fancy-erin-dalmatian.cyclic.app/auth/signup`, formData)
      .then(() => {
        navigate("/login");
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div className="lg:py-20 lg:max-w-7xl mx-auto lg:h-screen ">
        <div className="bg-gray-50 p-12- grid grid-cols-2  w-full  h-full shadow-md rounded-md">
          <div className=" lg:p-12 flex flex-col gap-10 px-5 py-5">
            <h3 className="text-[#141624]  text-4xl lg:block hidden">
              INTERLINK
            </h3>
            <h2 className="lg:text-2xl bold text-3xl w-[340px]">
              Welcome to interlink
            </h2>

            <form
              className="flex flex-col gap-2 lg:pt-8  "
              onSubmit={handleSubmit}
            >
              <Input
                placeholder={"First Name"}
                value={formData.firstName}
                name={"firstName"}
                onChange={handleChange}
              />
              <Input
                placeholder={"Last Name"}
                value={formData.lastName}
                name={"lastName"}
                onChange={handleChange}
              />
              <Input
                placeholder={"email"}
                value={formData.email}
                name={"email"}
                onChange={handleChange}
              />
              <Input
                placeholder={"password"}
                value={formData.password}
                name={"password"}
                onChange={handleChange}
                type={"password"}
              />
            </form>
            {/* <div>
              <h1 className="text-gray-400 w-[340px] ">
                Already have an account
                <Link className="text-[#141624] text-bold text-lg" to="/login">
                  Login
                </Link>
              </h1>
            </div> */}
            <div className="lg:pt-5 justify-center- flex ">
              <StartButton text="sign Up" onclick={handleSubmit} />
            </div>
          </div>
          <div className="bg-[#141624] hidden lg:block"></div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
