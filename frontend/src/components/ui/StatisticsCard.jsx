import React from "react";
import { Link } from "react-router-dom";

import { MdVerified } from "react-icons/md";

function StaticsCard({ paragraph, className, style }) {
  return (
    <>
      <div
        className={`hover:bg-gradient-to-r hover:from-[#112b4f] hover:via-slate-700 hover:to-[#112b4f] lg:w-[434px] lg:h-[293px] w-[340px]  rounded-[30px] flex flex-col p-12 gap-8 ${className} bg-[#EDEDED]`}
      >
        <div className="bg-white w-10 h-10 flex flex-col px-2.5 pt-3 rounded-full">
          <MdVerified />
        </div>

        <h2 className={`hover:text-white text-[#141624] ${style}`}>
          {paragraph}
        </h2>
      </div>
    </>
  );
}
export default StaticsCard;
