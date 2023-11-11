import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import StartButton from "../ui/StartButton";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/",
    },
    {
      name: "opportunities",
      path: "/internships",
    },
  ];
  const token = localStorage.getItem("token");
  function logout() {
    localStorage.clear();
    navigate("/");
  }
  return (
    <div className="bg-[#F5F5F5] flex lg:px-16 justify-between py-5 items-center px-5">
      <Link to="/" className="text-[#141624]  text-4xl">
        INTERLINK
      </Link>

      <div className="lg:flex text-sm text-[#3B3C4A] gap-9 hidden ">
        {links.map((link, index) => (
          <Link to={link.path} key={index}>
            {link.name}
          </Link>
        ))}
      </div>
      {/* <div className="flex items-center bg-gray-200 py-2 px-3 gap-2 rounded-xl">
        <input className="bg-transparent py-1 px-2" placeholder="Search" />
        <FaSearch className="text-[#52525B]" />
      </div> */}
      <div>
        {token ? (
          <StartButton text="Log out" onclick={logout} />
        ) : (
          <Link to="login">
            <StartButton text="Get Started" />
          </Link>
        )}
      </div>
    </div>
  );
}
export default NavBar;
