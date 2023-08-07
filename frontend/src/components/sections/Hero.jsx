import StartButton from "../ui/StartButton";

function Hero() {
  return (
    <div>
      <div className="bg-[#F5F5F5]- mx-auto flex flex-row text-[#3B3C4A] py-5 px-16 bg-red-200">
        <div className="flex flex-col gap-6 w-2/3">
          <div className="flex flex-col gap-1 ">
            <span className="text-4xl font-thin">Hey!</span>
            <span className="text-4xl font-thin">
              We are <strong>Interlink</strong>
            </span>
            <span className="text-xl font-thin">
              Forge Connections. Unlock Internships. Thrive.
            </span>
            <span className="font-light">
              InterLink is a user-friendly website that connects ambitious
              students and recent graduates with exciting internship
              opportunities across various industries. Whether you are looking
              to gain hands-on experience, kickstart your career, or explore
              your passions, our platform curates a diverse range of internships
              from renowned companies and startups alike.
            </span>
          </div>

          <div className="flex flex-col justify-end bg-red-200">
            <StartButton text="Get Started" />
          </div>
        </div>

        <div className="rotate-12 w-[705px] h-[480px] bg-[url('https://s3-alpha-sig.figma.com/img/c10a/faf7/3306dcd742825e14d2532cfcfbd18daf?Expires=1691971200&Signature=R3L5Hb8u1e7AzIIVEwA8zjqadjmcw9O~HCEO0eggo1W2i~b4F~-18uDaEV9Ye7C-DPOJCXuYQL6jrT-bOe4ISEXKDMmwGWR2YRHgfDVS5a-UwaoSYOMcqg13aAwDHB0JYFWMmHTCuZf4fl150Oeyp3c4kvuJ8RkHq4FAHATf9ETB4eTlXiDzWEMpR5dgScyOBzur0Cymk7Oe9BvI95Wi8saS-tg~~p9xAEAioQ0Y3aeufdhT4rOCnSB4cvSDU-aoBvUoWNLVUXP8U9gusm4zUPb3p65OtAUziFu6Ec-Hd6J1wQJxsejX1hNEjB5VQJT9mmm6tq7RvMKhSQ4uUboWhQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] bg-no-repeat bg-cover"></div>
      </div>

      <div className="h-screen-  mx-auto- px-16 flex- flex-col- justify-center- overflow-x-hidden- text-[#3B3C4A]  bg-green-200">
        <div className="flex justify-between ">
          <div className="head- bg-red-300 p-5 ">
            <h1 className="font-semilight text-xl pb-2">TESTIMONIALS</h1>

            <div className="font-semibold text-3xl">See how others are</div>
            <div className="font-semibold text-3xl">feeling about us</div>
            <svg height="100" width="150" viewBox="0 40 100 60">
              <path d="M 0 60 Q 50 80 100 60 Q 50 75 0 60 Z" />
            </svg>

            <StartButton text="See our TrustPilot" />
          </div>
          <div className="person- bg-blue-200]">
            <div className="border-2  border-grey-700 rounded-lg p-3 pt-8 shadow-md relative w-[592px] h-[285px]">
              <div
                className="bg-black m-auto h-12 w-12 rounded-full absolute top-0 left-3 trans"
                style={{ transform: "translateY(-25px)" }}
              ></div>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a whatever
              thing that u guys were going to write anyways 😏😉
              <div className="absolute bottom-3 font-semibold">
                Benjamin Frank
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" mx-auto px-16 overflow-x-hidden  text-[#3B3C4A] bg-blue-200">
        <h1 className="text-4xl font-semibold">Statistics</h1>
        <div className="mt-3">
          In publishing and graphic design,{" "}
          <span className=" text-[#3B3C4A] font-semibold">Lorem</span> ipsum is
          a placeholder
        </div>
        <div className="overflow-x-hidden flex flex-row justify-between w-11/12 mt-6">
          <div className="hover:text-white bg-[#edededda] hover:bg-gradient-to-r hover:from-[#112b4f] hover:via-slate-700 hover:to-[#112b4f] w-4/12 h-[275px] rounded-[30px] flex flex-col p-12 gap-8">
            <div className="bg-white w-10 h-10 flex flex-col px-2.5 pt-3 rounded-full">
              <svg
                className=" text-[#3B3C4A]"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={1}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"></path>
              </svg>
            </div>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              mollitia quibusdam porro deserunt pariatur
            </h2>
          </div>

          <div className="hover:text-white bg-[#edededda] hover:bg-gradient-to-r hover:from-[#112b4f] hover:via-slate-700 hover:to-[#112b4f] w-4/12 h-[275px] rounded-[30px] flex flex-col p-12 gap-8">
            <div className="bg-white w-10 h-10 flex flex-col px-2.5 pt-3 rounded-full">
              <svg
                className=" text-[#3B3C4A]"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={1}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"></path>
              </svg>
            </div>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              mollitia quibusdam porro deserunt pariatur
            </h2>
          </div>

          <div className="hover:text-white bg-[#edededda] hover:bg-gradient-to-r hover:from-[#112b4f] hover:via-slate-700 hover:to-[#112b4f] w-2/12 h-[275px] rounded-[30px] flex flex-col p-12 gap-8">
            <div className="bg-white w-10 h-10 flex flex-col px-2.5 pt-3 rounded-full">
              <svg
                className=" text-[#3B3C4A]"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={1}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"></path>
              </svg>
            </div>
            <h2>In publishing and graphic design, Lorem</h2>
          </div>
        </div>

        <div className="overflow-x-hidden mx-auto flex flex-row justify-between w-11/12 mt-3">
          <div className="bg-[#edededda] hover:bg-gradient-to-r hover:from-[#112b4f] hover:via-slate-700 hover:to-[#112b4f] hover:text-white w-2/12 h-[275px] rounded-[30px] flex flex-col p-12 gap-8">
            <div className="bg-white w-10 h-10 flex flex-col px-2.5 pt-3 rounded-full">
              <svg
                className=" text-[#3B3C4A]"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={1}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path
                  className="hover:t text-[#3B3C4A]"
                  d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"
                ></path>
              </svg>
            </div>
            <h2>where does this go</h2>
          </div>

          <div className="hover:text-white bg-[#edededda] hover:bg-gradient-to-r hover:from-[#112b4f] hover:via-slate-700 hover:to-[#112b4f] w-4/12 h-[275px] rounded-[30px] flex flex-col p-12 gap-8">
            <div className="bg-white w-10 h-10 flex flex-col px-2.5 pt-3 rounded-full">
              <svg
                className=" text-[#3B3C4A]"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={1}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"></path>
              </svg>
            </div>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              mollitia quibusdam porro deserunt pariatur
            </h2>
          </div>

          <div className="hover:text-white bg-[#edededda] hover:bg-gradient-to-r hover:from-[#112b4f] hover:via-slate-700 hover:to-[#112b4f] w-4/12 h-[275px] rounded-[30px] flex flex-col p-12 gap-8">
            <div className="bg-white w-10 h-10 flex flex-col px-2.5 pt-3 rounded-full">
              <svg
                className=" text-[#3B3C4A]"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth={1}
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M23 12l-2.44-2.79.34-3.69-3.61-.82-1.89-3.2L12 2.96 8.6 1.5 6.71 4.69 3.1 5.5l.34 3.7L1 12l2.44 2.79-.34 3.7 3.61.82L8.6 22.5l3.4-1.47 3.4 1.46 1.89-3.19 3.61-.82-.34-3.69L23 12zm-12.91 4.72l-3.8-3.81 1.48-1.48 2.32 2.33 5.85-5.87 1.48 1.48-7.33 7.35z"></path>
              </svg>
            </div>
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              mollitia quibusdam porro deserunt pariatur
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
