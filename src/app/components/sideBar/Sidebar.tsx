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
      isActive: true,
    },
    {
      id: 2,
      label: "Buy Crypto",
      icon: <ShoppingCart />,
      isActive: false,
    },
    {
      id: 3,
      label: "Swap",
      icon: <Code />,
      isActive: false,
    },
    {
      id: 4,
      label: "Exchange",
      icon: <Activity />,
      isActive: false,
    },
    {
      id: 5,
      label: "Earn",
      icon: <DollarSign />,
      isActive: false,
    },
    {
      id: 6,
      label: "Settings",
      icon: <Settings />,
      isActive: false,
    },
    {
      id: 7,
      label: "Help",
      icon: <HelpCircle />,
      isActive: false,
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
