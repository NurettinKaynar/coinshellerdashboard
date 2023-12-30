import { NumberConverterService } from "@/app/core/services/numberConverter";
import React from "react";

interface CardItem {
  cardHeader: string;
  title?: string;
  value: string;
  isPercent: boolean;
  percent?: number;
}

const MiniCard = ({ cardData }: { cardData: CardItem }) => {
  return (
    <div className="flex flex-col gap-6 flex-grow bg-gray-700 rounded p-4 text-slate-400">
      <div className="  border-b-slate-600 border-b font-semibold w-full">
        <span>{cardData.cardHeader}</span>
      </div>
      <div className="flex  justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-lg text-slate-100 ">
            {NumberConverterService(Math.floor(Number(cardData.value)))}
          </span>
          {cardData.percent && cardData.isPercent ? (
            <span
              className={
                cardData.percent > 0 ? "text-green-500" : "text-red-500"
              }>
              {Number(cardData.percent).toFixed(2)}%
            </span>
          ) : (
            <span className="text-gray-400">{cardData.title}</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default MiniCard;
