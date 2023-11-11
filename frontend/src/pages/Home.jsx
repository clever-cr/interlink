import StartButton from "../components/ui/StartButton";
import { Link } from "react-router-dom";
import StaticsCard from "../components/ui/StatisticsCard";
function Home() {
  return (
    <div>
      <div className="bg-[#F5F5F5]  flex flex-row text-[#3B3C4A]- lg:py-8 lg:px-16  px-5 pb-5">
        <div className="flex flex-col gap-6 lg:w-2/3">
          <div className="flex flex-col lg:gap-5 pt-12 gap-3">
            <span className="lg:text-5xl font-light text-[#141624] text-2xl">
              Hey!
            </span>
            <span className="lg:text-5xl font-thin text-2xl">
              We're <strong className="text-[#141624]">Interlink</strong>
            </span>

            <span className="font-light lg:text-[20px] text-base ">
              InterLink is a user-friendly website that connects ambitious
              students and recent graduates with exciting internship
              opportunities across various industries. Whether you are looking
              to gain hands-on experience, kickstart your career, or explore
              your passions, our platform curates a diverse range of internships
              from renowned companies and startups alike.
            </span>
          </div>

          <div className="flex flex-col justify-end ">
            <Link to="login">
              <StartButton text="Get Started" />
            </Link>
          </div>
        </div>

        <div className="rotate-12 w-[705px] h-[480px] bg-[url('https://s3-alpha-sig.figma.com/img/c10a/faf7/3306dcd742825e14d2532cfcfbd18daf?Expires=1691971200&Signature=R3L5Hb8u1e7AzIIVEwA8zjqadjmcw9O~HCEO0eggo1W2i~b4F~-18uDaEV9Ye7C-DPOJCXuYQL6jrT-bOe4ISEXKDMmwGWR2YRHgfDVS5a-UwaoSYOMcqg13aAwDHB0JYFWMmHTCuZf4fl150Oeyp3c4kvuJ8RkHq4FAHATf9ETB4eTlXiDzWEMpR5dgScyOBzur0Cymk7Oe9BvI95Wi8saS-tg~~p9xAEAioQ0Y3aeufdhT4rOCnSB4cvSDU-aoBvUoWNLVUXP8U9gusm4zUPb3p65OtAUziFu6Ec-Hd6J1wQJxsejX1hNEjB5VQJT9mmm6tq7RvMKhSQ4uUboWhQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')] bg-no-repeat bg-cover"></div>
      </div>

      <div className="lg:px-16  text-[#3B3C4A] lg:py-16  ">
        <div className="flex lg:flex-row justify-between items-center flex-col">
          <div className="lg:p-5 pb-8">
            <h1 className="font-semilight text-xl pb-2">TESTIMONIALS</h1>

            <div className="font-semibold text-3xl pt-3">
              See how others are
            </div>
            <div className="font-semibold text-3xl">feeling about us</div>
            <svg height="100" width="150" viewBox="0 40 100 60">
              <path d="M 0 60 Q 50 80 100 60 Q 50 75 0 60 Z" />
            </svg>

            <StartButton text="See our TrustPilot" />
          </div>
          <div className="bg-blue-200]">
            <div className="border-2  border-grey-700 rounded-lg p-3 pt-8 shadow-md relative lg:w-[512px] h-[260px] w-[330px]  ">
              <div
                className="bg-black m-auto h-12 w-12 rounded-full absolute top-0 left-3 trans"
                style={{ transform: "translateY(-25px)" }}
              ></div>
              <h2 className="pt-12">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a whatever
                thing that u guys were going to write anyways 😏😉
              </h2>

              <div className="absolute bottom-3 font-semibold">
                Benjamin Frank
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:px-16  text-[#3B3C4A] lg:py-12 px-5 py-5">
        <h1 className="text-4xl font-semibold">Statistics</h1>
        <div className="mt-3">
          In publishing and graphic design,{" "}
          <span className=" text-[#3B3C4A] font-semibold">Lorem</span> ipsum is
          a placeholder
        </div>

        <div className="flex flex-col gap-6 pt-8 mx-auto">
          <div className="flex lg:flex-row gap-6 flex-col ">
            <StaticsCard
              className={
                "bg-gradient-to-r from-[#112b4f] via-slate-700 to-[#112b4f] text-white"
              }
              paragraph={
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of"
              }
            />
            <StaticsCard
              paragraph={
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of"
              }
            />
            <StaticsCard
              className={"w-[300px] h-[293px]"}
              paragraph={
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of"
              }
            />
          </div>
          <div className="flex gap-6 lg:flex-row flex-col">
            <StaticsCard
              className={"w-[300px] h-[293px]"}
              paragraph={
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of"
              }
            />
            <StaticsCard
              paragraph={
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of"
              }
            />
            <StaticsCard
              paragraph={
                "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
