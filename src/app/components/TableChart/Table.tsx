import React from "react";
import { Search } from "react-feather";
const Table = () => {
  return (
    <div className="rounded flex flex-col w-full bg-gray-700">
      <div className="flex justify-between items-center p-4 border-b border-b-slate-500 ">
        <span className="text-slate-500 font-light text-2xl">Market</span>
        <div className=" p-4 rounded-full flex justify-between items-center border border-gray-500">
          <input
            placeholder="Search..."
            type="text"
            className="bg-transparent outline-none border-none"
          />
          <Search color="gray" />
        </div>
      </div>
      <div className="flex text-slate-500 items-center justify-evenly border-b border-b-slate-500 p-4">
        <span className="text-light">Market</span>
        <span className="text-light">Price</span>
        <span className="text-light">24H Change</span>
        <span className="text-light">24H Lowest</span>
        <span className="text-light">24H Highest</span>
        <span className="text-light">24H Volume</span>
        <span className="text-light">24H Value</span>
      </div>
      <div className="flex text-slate-500 items-center justify-evenly  p-4">
        <span className="text-light">Market</span>
        <span className="text-light">Price</span>
        <span className="text-light">24H Change</span>
        <span className="text-light">24H Lowest</span>
        <span className="text-light">24H Highest</span>
        <span className="text-light">24H Volume</span>
        <span className="text-light">24H Value</span>
      </div>
    </div>
  );
};

export default Table;
