"use client";
import React, { useEffect, useState } from "react";
import { ESwitchButton } from "@/app/core/enums";
interface SwitchButtonsProps {
  onButtonClick: (buttonType: ESwitchButton) => void;
}
const SwitchButtons: React.FC<SwitchButtonsProps> = ({ onButtonClick }) => {
  const [activeButtons, setActiveButtons] = useState<ESwitchButton>(
    ESwitchButton.All
  );
  const handleButtonClick = (buttonType: ESwitchButton) => {
    setActiveButtons(buttonType);
    // Parent component'e tıklama olayını iletmek
    onButtonClick(buttonType);
  };
  return (
    <div className="flex">
      <div
        onClick={() => handleButtonClick(ESwitchButton.All)}
        className={`cursor-pointer p-1 font-semibold text-md  w-16 rounded-s flex items-center justify-center ${
          activeButtons === ESwitchButton.All ? "bg-green-500" : "bg-gray-500"
        }`}>
        All
      </div>
      <div
        onClick={() => handleButtonClick(ESwitchButton.Day1)}
        className={`cursor-pointer p-1 font-semibold text-md  w-16  flex items-center justify-center ${
          activeButtons === ESwitchButton.Day1 ? "bg-green-500" : "bg-gray-500"
        }`}>
        1 D
      </div>
      <div
        onClick={() => handleButtonClick(ESwitchButton.Hour12)}
        className={`cursor-pointer p-1 font-semibold text-md  w-16  flex items-center justify-center ${
          activeButtons === ESwitchButton.Hour12
            ? "bg-green-500"
            : "bg-gray-500"
        }`}>
        12 H
      </div>
      <div
        onClick={() => handleButtonClick(ESwitchButton.Hour6)}
        className={`cursor-pointer p-1 font-semibold text-md  w-16  flex items-center justify-center ${
          activeButtons === ESwitchButton.Hour6 ? "bg-green-500" : "bg-gray-500"
        }`}>
        6 H
      </div>
      <div
        onClick={() => handleButtonClick(ESwitchButton.Hour1)}
        className={`cursor-pointer p-1 font-semibold text-md  w-16  flex items-center justify-center ${
          activeButtons === ESwitchButton.Hour1 ? "bg-green-500" : "bg-gray-500"
        }`}>
        1 H
      </div>
      <div
        onClick={() => handleButtonClick(ESwitchButton.Min30)}
        className={`cursor-pointer p-2 font-semibold rounded-e text-md  w-16  flex items-center justify-center ${
          activeButtons === ESwitchButton.Min30 ? "bg-green-500" : "bg-gray-500"
        }`}>
        30 M
      </div>
    </div>
  );
};

export default SwitchButtons;
