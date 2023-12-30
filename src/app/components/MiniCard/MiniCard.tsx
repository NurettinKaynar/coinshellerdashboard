import { NumberConverterService } from "@/app/core/services/numberConverter";
import React from "react";

const MiniCard = () => {
  return (
    <div className="flex flex-col gap-6 w-1/6 bg-gray-700 rounded p-4 text-slate-400">
      <div className="  border-b-slate-600 border-b font-semibold w-full">
        <span>Coins</span>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-lg text-slate-100 ">
            {NumberConverterService(6800000)}
          </span>
          <span className="text-gray-400">24H Value (USD)</span>
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
