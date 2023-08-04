import { MdVerified } from "react-icons/md";

function StaticsCard({ paragraph }) {
  return (
    <>
      <div className="bg-gradient-to-r from-[#112b4f] via-slate-700 to-[#112b4f] w-[434px] h-[293px] rounded-[30px] flex flex-col p-12 gap-8">
        <div className="bg-white w-10 h-10 flex flex-col px-2.5 pt-3 rounded-full">
          <MdVerified />
        </div>

        <h2 className="text-white">{paragraph}</h2>
      </div>
    </>
  );
}
export default StaticsCard;
