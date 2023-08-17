import "./InternshipPage.css";
import { opportunities } from "../data/opportunities";
import { Link, Navigate } from "react-router-dom"; // Import Link from React Router
import "./InternshipPage.css";
import { ToastContainer, toast } from "react-toastify";

const InternshipPage = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    toast.warn("You have to login first");
    return <Navigate to="/login" />;
  }
  return (
    <div>
      {/*  Include the Navbar component  */}
      <div className="internship-page-content lg:px-16 lg:py-20 px-5 py-8">
        <p className="center-align- lg:text-4xl max-w-3xl font-thin text-2xl">
          Are you a <span className=" font-bold">student</span> ready to embark
          on an exciting journey towards your dream career? Look no{" "}
          <span className="font-bold">further</span>
        </p>
        <p className="lg:text-lg pt-6 max-w-6xl font-light text-base">
          Because InterLink is here to revolutionize the way you find
          internships! Our cutting-edge web application is designed with one
          goal in mind: to empower you to seize the internship opportunities
          that will shape your future.
        </p>

        <h1 className="center-align bold-text lg:pt-28 text-3xl pt-12">
          {" "}
          TOP OPPORTUNITIES
        </h1>
        <div className="grid lg:grid-cols-4 pt-14 gap-6 px-20- grid-cols-1">
          {opportunities.map((opportunity, index) => (
            <Link to={`/internships/${opportunity.id}`}>
              <div className="rectangle" key={index}>
                {/* Opportunity image */}
                <img src={opportunity.photoPath} alt={opportunity.title} />

                <div className="content">
                  {/* Heading */}
                  <div className="title text-sm text-[#4B6BFB] font- bg-slate-50 p-2 rounded-lg shadow-sm">
                    {opportunity.title}
                  </div>
                  <div className="text-[#181A2A] text-2xl font-bold max-w-lg">
                    {opportunity.text}
                  </div>

                  {/* Short Info */}
                  <div className="category">
                    Category: {opportunity.category}
                  </div>
                  <div className="deadline">
                    Deadline: {opportunity.deadline}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InternshipPage;
