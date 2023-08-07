import { AiOutlineArrowRight } from "react-icons/ai";

function Login() {
  return (
    <>
      <div className="px-16 flex p-10 max-w-[]">
        <div>
          <h3 className="text-[#141624]  text-4xl">INTERLINK</h3>
          <h2>Welcome to interlink</h2>

          <form className="flex flex-col gap-5">
            <input
              className="outline-[#141624] w-[446px] h-[69px] px-3 rounded-[23px] "
              name=""
              value=""
              placeholder="username"
            />
            <div className="flex gap-2">
              <input
                className="outline-[#141624] w-[317px] h-[69px] px-3 rounded-[23px]"
                name=""
                value=""
                placeholder="username"
              />
              <button className="border px-12 h-[69px] rounded-[23px]">
                <AiOutlineArrowRight />
              </button>
            </div>
          </form>
          <div>
            <button className="bg-[#141624] px-14 py-3 rounded-l-[23px] text-white">
              Log In
            </button>
            <button className=" px-14 py-3 rounded-r-[23px]">
              Log In
            </button>
          </div>
        </div>
        <div className="bg-[#141624] h-full ">
          <h2>heyuuu</h2>
        </div>
      </div>
    </>
  );
}
export default Login;
