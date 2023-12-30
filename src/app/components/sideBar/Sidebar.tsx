import Image from "next/image";
import React from "react";
import Logo from "../../assets/images/logo.png";
import { MenuItemModel } from "@/app/core/interfaces";
import {
  Home,
  ShoppingCart,
  Code,
  Activity,
  DollarSign,
  Settings,
  HelpCircle,
} from "react-feather";
import MenuItem from "../MenuItem/MenuItem";
const Sidebar = () => {
  const menuItem: MenuItemModel[] = [
    {
      id: 1,
      label: "Market",
      icon: <Home />,
    },
    {
      id: 2,
      label: "Buy Crypto",
      icon: <ShoppingCart />,
    },
    {
      id: 3,
      label: "Swap",
      icon: <Code />,
    },
    {
      id: 4,
      label: "Exchange",
      icon: <Activity />,
    },
    {
      id: 5,
      label: "Earn",
      icon: <DollarSign />,
    },
    {
      id: 6,
      label: "Settings",
      icon: <Settings />,
    },
    {
      id: 7,
      label: "Help",
      icon: <HelpCircle />,
    },
  ];
  return (
    <div className="w-1/6 h-full p-6  flex-col gap-96 ">
      <Image src={Logo} alt="logo" />
      <div className="flex flex-col gap-5 mt-20 ">
        {menuItem.map((item: MenuItemModel) => (
          <MenuItem key={item.id} Item={item} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
