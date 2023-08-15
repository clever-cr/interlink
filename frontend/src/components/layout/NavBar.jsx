import { FaSearch } from "react-icons/fa";

function NavBar() {
  const links = ["Home", "About", "Opportunities"];
  return (
    <div className="bg-[#F5F5F5] flex px-16 justify-between py-5 items-center ">
      <h3 className="text-[#141624]  text-4xl">INTERLINK</h3>
      <div className="flex text-sm text-[#3B3C4A] gap-9">
        {links.map((link) => (
          <a key={link} href={`#${link.toLowerCase()}`}>{link}</a>
        ))}
      </div>
      <div className="flex items-center bg-gray-200 py-2 px-3 gap-2 rounded-xl">
        <input className="bg-transparent py-1 px-2" placeholder="Search" />
        <FaSearch className="text-[#52525B]" />
      </div>
    </div>
  );
}
export default NavBar;
