import StartButton from "../components/ui/StartButton";
import { useParams } from "react-router";
import { opportunities } from "../data/opportunities";
import { Link } from "react-router-dom";

function DescriptionPage() {
  const { id } = useParams();
  const opportunity = opportunities.find(
    (opportunity) => opportunity.id === id
  );

  return (
    <>
      <div className="px-32 h-screen- py-20 flex flex-col gap-5">
        <div className="w-40">
          <h3 className="text-sm bg-[#4B6BFB] text-white rounded-lg shadow-sm py-3 px-2">
            {opportunity.title}
          </h3>
        </div>
        <div className="padding py-3">
          <h1 className="text-5xl font-bold font-mono- max-w-6xl leading-[60px]">
            {opportunity.text}
          </h1>{" "}
        </div>
        <div className="flex items-center gap-10 text-[#97989F]">
          <p>{opportunity.category}</p>
          <p>{opportunity.deadline}</p>
        </div>
        <div class="flex items-center space-x-2">
          <div class=" padding px-32- w-full pt-8">
            <img
              className="w-full rounded-[23px]"
              src={opportunity.photoPath}
              alt={opportunity.title}
            />
          </div>
        </div>

        <div className="padding py-5">
          <p className="text-lg  font-serif">{opportunity.description}</p>
          <p>
            Before embarking on your journey, take the time to research your
            destination. This includes understanding the local culture, customs,
            and laws, as well as identifying top attractions, restaurants, and
            accommodations. Doing so will help you navigate your destination
            with confidence and avoid any cultural faux pas. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. In hendrerit gravida
            rutrum quisque non tellus orci ac auctor. Mi ipsum faucibus vitae
            aliquet nec ullamcorper sit amet. Aenean euismod elementum nisi quis
            eleifend quam adipiscing vitae. Viverra adipiscing at in tellus.
          </p>
        </div>
        <div className="">
          <a
            href="https://www.greatrwandajobs.com/jobs/job-detail/job-Management-Trainee-Programme-job-at-IM-Bank-Rwanda-PLC,-30478?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
            target="_blank"
          >
            <StartButton text="Apply" />
          </a>
        </div>
      </div>
    </>
  );
}
export default DescriptionPage;
