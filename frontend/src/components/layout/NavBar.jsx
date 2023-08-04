import { CiSearch } from "react-icons/ci";

function NavBar() {
  const links = ["Home", "About", "Statics", "Testimonies", "Contact"];
  return (
    <div className="bg-[#F5F5F5] flex px-16 justify-between py-5 items-center ">
      <h3 className="text-[#141624]  text-4xl">INTERLINK</h3>
      <div className="flex text-sm text-[#3B3C4A] gap-9">
        {links.map((link) => {
          return <p>{link}</p>;
        })}
      </div>
      <div className="flex items-center bg-gray-200 py-2 px-3 gap-16 rounded-xl">
        <p className="text-[#A1A1AA] text-sm">search</p>
        <CiSearch className="text-[#52525B]" />
      </div>
    </div>
  );
}
export default NavBar;
