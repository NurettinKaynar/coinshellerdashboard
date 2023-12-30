"use client";
import { DataResultModelDto, MarketData } from "@/app/core/interfaces";
import { get } from "@/app/core/services/httpEntityService";
import { ApiUrl } from "@/app/core/utils/apiUrl";
import { AxiosResponse } from "axios";
import React, { useState, useEffect } from "react";
import { Search } from "react-feather";
import { Btc, Etc, Dao, Ltc, Anc } from "react-cryptocoins";
import { NumberConverterService } from "@/app/core/services/numberConverter";
const Table = () => {
  const [MarketData, setMarketData] = useState<MarketData[] | null>(null);

  const getMarkets = () => {
    get(ApiUrl.GET_MARKETS).then(
      (res: AxiosResponse<DataResultModelDto<MarketData[]>>) => {
        if (res.status === 200) {
          console.log("MarketData", res.data);
          setMarketData(res.data.data.slice(0, 5));
        }
      }
    );
  };
  const returnIcon = (id: string) => {
    console.log("ID", id);

    switch (id) {
      case "bitcoin":
        return <Btc />;
      case "ethereum":
        return <Etc />;
      case "multi-collateral-dai":
        return <Dao />;
      case "chainlink":
        return <Ltc />;
      case "cosmos":
        return <Anc />;
    }
  };

  useEffect(() => {
    getMarkets();
  }, []);

  const Row = ({ rowData }: { rowData: MarketData }) => {
    return (
      <div className=" text-light text-slate-500 text-xl w-full p-4 border-b border-b-slate-500 grid grid-rows-1 grid-cols-5 grid-flow-col ">
        <div className="  flex flex-grow items-center gap-2">
          {returnIcon(rowData.baseId)}
          <span>
            {rowData.baseId} ( {rowData.baseSymbol} )
          </span>
        </div>
        <span>{NumberConverterService(Number(rowData.priceUsd))}$</span>
        <span>{NumberConverterService(Number(rowData.volumeUsd24Hr))}$</span>
        <span
          className={`${
            Number(rowData.percentExchangeVolume) > 0
              ? "text-green-500"
              : "text-red-500"
          }`}>
          {NumberConverterService(Number(rowData.percentExchangeVolume))}%
        </span>
        <span>{NumberConverterService(Number(rowData.tradesCount24Hr))}</span>
      </div>
    );
  };

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
      <div className=" text-slate-500  border-b border-b-slate-500 p-4 grid grid-rows-1 grid-cols-5 grid-flow-col">
        <span className="text-light">Market</span>
        <span className="text-light">Price</span>
        <span className="text-light">Volume Usd 24 Hour</span>
        <span className="text-light">Percent Exchange Volume</span>
        <span className="text-light">Trades Count 24 Hour</span>
      </div>
      <div className="flex flex-col  p-4">
        {MarketData && MarketData.length > 0
          ? MarketData.map((item: MarketData, index: number) => (
              <Row rowData={item} key={index} />
            ))
          : null}
      </div>
    </div>
  );
};

export default Table;
