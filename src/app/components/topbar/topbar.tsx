import React from "react";
import { Search, Sun, CreditCard } from "react-feather";
const TopBar = () => {
  return (
    <section className="p-4 md:flex-row flex-col gap-2 flex justify-between items-center">
      <div className=" p-4 rounded-full flex justify-between items-center border border-gray-700">
        <input
          placeholder="Search..."
          type="text"
          className="bg-transparent outline-none border-none"
        />
        <Search color="gray" />
      </div>
      <div className="flex items-center gap-4">
        <Sun />
        <div className="rounded-full bg-green-400 flex items-center gap-3 font-semibold text-slate-900 p-4">
          <span>Connect Wallet</span>
          <CreditCard />
        </div>
      </div>
    </section>
  );
};

export default TopBar;
