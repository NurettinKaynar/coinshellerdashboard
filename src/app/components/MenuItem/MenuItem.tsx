import { MenuItemModel } from "@/app/core/interfaces";
import React from "react";

const MenuItem = ({ Item }: { Item: MenuItemModel }) => {
  return (
    <div className=" rounded p-4 text-gray-700 flex text-xl text-semibold items-center gap-3 hover:bg-green-500 cursor-pointer">
      {Item.icon}
      <span>{Item.label}</span>
    </div>
  );
};

export default MenuItem;
