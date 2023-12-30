import React from "react";
interface PriceChangeData {
  id: number;
  title: string;
  value: number;
}
const PriceChange = () => {
  const PriceChangeData: PriceChangeData[] = [
    {
      id: 1,
      title: "All",
      value: 505.78,
    },
    {
      id: 2,
      title: "365 days",
      value: -43.9,
    },
    {
      id: 3,
      title: "90 days",
      value: -16.08,
    },
    {
      id: 4,
      title: "30 days",
      value: 7.37,
    },
    {
      id: 5,
      title: "24 H",
      value: -9.99,
    },
  ];

  const PriceChangeItem = ({ data }: { data: PriceChangeData }) => {
    return (
      <div className="flex justify-between w-full">
        <div className="font-light text-slate-300">{data.title}</div>
        <div
          className={`${data.value > 0 ? "text-green-500" : "text-red-500"}`}>
          {data.value}%
        </div>
      </div>
    );
  };
  return (
    <div className="bg-gray-700 flex-shrink md:w-1/4 w-full rounded flex flex-col ">
      <div className="w-full border-b-slate-600 border-b p-4 ">
        <span className="font-light text-2xl text-slate-400">
          BTC Price Change
        </span>
      </div>
      <div className=" h-full flex flex-col gap-6 p-6 ">
        {PriceChangeData.map((item: PriceChangeData, index: number) => (
          <PriceChangeItem data={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default PriceChange;
