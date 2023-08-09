import StartButton from "../components/ui/StartButton";
import { useParams } from "react-router";
import { opportunities } from "../data/Opportunites";

function DescriptionPage() {
  const { id } = useParams();
  const opportunity = opportunities.find(
    (opportunity) => opportunity.id === id
  );

  return (
    <>
      <div className="padding px-32 py-5">
        {" "}
        <h3 className="text-sm bg-[#4B6BFB] text-white rounded-lg shadow-sm">
          {" "}
          {opportunity.title}
        </h3>{" "}
      </div>
      <div className="padding px-32 py-5">
        <h4 className="text-2xl font-bold font-mono">
          {" "}
          frontend developer intern{" "}
        </h4>{" "}
      </div>
      <div class="flex items-center space-x-2">
        <div class="h-4 w-4 padding px-32 ">
          <img
            src="frontend\src\pages\avatar.jpg"
            alt="User Icon"
            class="h-full w-full "
          ></img>
        </div>

        <span class="text-xs text-gray-500">John Doe</span>

        <span class="text-xs text-gray-500">August 8, 2023</span>
      </div>
      <div className="padding px-32 ">
        <h5 className="text-xl font-bold font-mono">
          {" "}
          frontend developer intern{" "}
        </h5>{" "}
      </div>
      <div className="padding px-32 py-5">
        <p className="text-lg  font-serif">
          {" "}
          Join our dynamic team as a [Job Title] Intern at [Company Name]! This
          [Duration] internship offers hands-on experience in [specific tasks or
          projects], providing a unique opportunity to learn and contribute to
          our [industry/field] initiatives. Ideal for students or recent
          graduates with strong [relevant skills], this internship promises
          insights into [industry/field] practices and valuable networking
          opportunities.{" "}
        </p>{" "}
      </div>
      <div className="padding px-32 py-5">
        <StartButton text="apply" />
      </div>
    </>
  );
}
export default DescriptionPage;
