import { useState } from "react";
import Input from "../ui/Input";
import { AiOutlineArrowRight } from "react-icons/ai";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

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
      <div className="py-20 max-w-7xl mx-auto h-screen ">
        <div className="bg-gray-50 p-12- grid grid-cols-2  w-full  h-full shadow-md rounded-md">
          <div className=" p-12 flex flex-col gap-10">
            <h3 className="text-[#141624]  text-4xl">INTERLINK</h3>
            <h2 className="text-2xl bold">Welcome to interlink</h2>

            <form className="flex flex-col gap-2 pt-8" onSubmit={handleSubmit}>
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
            <div>
              <h1 className="text-gray-400">
                Already have an account{" "}
                <Link className="text-[#141624] text-bold text-lg" to="/login">
                  Login
                </Link>
              </h1>
            </div>
            <div className="pt-5 justify-center- flex">
              <button
                className="bg-[#141624] px-14 py-3 rounded-[23px] text-white"
                onClick={handleSubmit}
              >
                Sign up
              </button>
            </div>
          </div>
          <div className="bg-[#141624]"></div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
