"use client";

import React, { useEffect, useState } from "react";
import SwitchButtons from "../SwitchButtons/SwitchButtons";
import { CategoryScale } from "chart.js";
import ChartJS from "chart.js/auto";
import { Line } from "react-chartjs-2";
import { ESwitchButton } from "@/app/core/enums";
import { getHistoryById } from "@/app/core/services/httpEntityService";
import { ApiUrl } from "@/app/core/utils/apiUrl";
import { AxiosResponse } from "axios";
import { ChartData, DataResultModelDto } from "@/app/core/interfaces";
const Charts = () => {
  ChartJS.register(CategoryScale);
  const [ChartData, setChartData] = useState<ChartData[] | null>();
  const [ActiveState, setActiveState] = useState<ESwitchButton>(
    ESwitchButton.All
  );
  const changeChartData = (event: ESwitchButton) => {
    setActiveState(event);
    switch (event) {
      case ESwitchButton.All:
        getStatisticData("d1");
        break;

      case ESwitchButton.Day1:
        getStatisticData("d1");
        break;
      case ESwitchButton.Hour12:
        getStatisticData("h12");
        break;
      case ESwitchButton.Hour6:
        getStatisticData("h6");
        break;
      case ESwitchButton.Hour1:
        getStatisticData("h1");
        break;
      case ESwitchButton.Min30:
        getStatisticData("m30");
        break;
    }
  };

  const getStatisticData = (time: string = "h12") => {
    const interval = {
      interval: time,
    };
    getHistoryById(ApiUrl.GET_ASSET_HISTORY_BY_ID, "bitcoin", interval).then(
      (res: AxiosResponse<DataResultModelDto<ChartData[]>>) => {
        if (res.status === 200) {
          console.log("TimeZone Data", res.data);
          setChartData(res.data.data);
        }
      }
    );
  };
  useEffect(() => {
    getStatisticData();
  }, []);

  return (
    <div className="bg-gray-700 w-full flex-grow  rounded flex flex-col   items-center gap-2 ">
      <div className=" items-center w-full flex md:flex-row flex-col justify-between p-4">
        <span className="font-light text-2xl ">Price</span>
        <SwitchButtons onButtonClick={changeChartData} />
      </div>
      <div className="p-fluid w-full ">
        {ChartData ? (
          <Line
            className="w-full h-full"
            data={{
              labels: ChartData.map((data) =>
                ActiveState === ESwitchButton.All ||
                ActiveState === ESwitchButton.Day1
                  ? `${new Date(data.date).getDate()}/${new Date(
                      data.date
                    ).getMonth()}/${new Date(data.date).getFullYear()}`
                  : ActiveState === ESwitchButton.Hour12 ||
                    ActiveState === ESwitchButton.Hour6 ||
                    ActiveState === ESwitchButton.Hour1 ||
                    ActiveState === ESwitchButton.Min30
                  ? `${new Date(data.date).getHours()}:${new Date(
                      data.date
                    ).getMinutes()}`
                  : null
              ),
              datasets: [
                {
                  data: ChartData.map((data) => data.priceUsd),
                  backgroundColor: "rgb(101,110,177,0.3)",
                  borderColor: "rgb(101,110,177)",
                  fill: true,
                  pointRadius: 0,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                },
                title: {
                  display: false,
                },
              },
            }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Charts;
