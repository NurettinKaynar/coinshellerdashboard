"use client";
import React, { useEffect, useState } from "react";
import MiniCard from "../MiniCard/MiniCard";
import { getById } from "@/app/core/services/httpEntityService";
import { ApiUrl } from "@/app/core/utils/apiUrl";
import { AxiosError, AxiosResponse } from "axios";
import { AssetDto, DataResultModelDto } from "@/app/core/interfaces";

const Cards = () => {
  const [CardData, setCardData] = useState<DataResultModelDto<AssetDto> | null>(
    null
  );
  const getAssets = () => {
    getById(ApiUrl.GET_ASSETS, "bitcoin")
      .then((res: AxiosResponse<DataResultModelDto<AssetDto>>) => {
        if ((res.status = 200)) {
          console.log("response data", res.data);

          setCardData(res.data);
        }
      })
      .catch((err: AxiosError) => {
        console.error("Asset Error", err);
      });
  };
  useEffect(() => {
    getAssets();
  }, []);

  return (
    <div className="w-full flex flex-wrap gap-2">
      {CardData ? (
        <>
          <MiniCard
            cardData={{
              isPercent: false,
              cardHeader: "Coins",
              title: "24H Value (USD)",
              value: CardData.data.marketCapUsd,
            }}
          />
          <MiniCard
            cardData={{
              isPercent: true,
              cardHeader: "24H Price Change",
              percent: Number(CardData.data.changePercent24Hr),
              value: CardData.data.vwap24Hr,
            }}
          />
          <MiniCard
            cardData={{
              isPercent: true,
              cardHeader: "Total Market Cap (USD)",
              percent: Number(CardData.data.changePercent24Hr),
              value: CardData.data.marketCapUsd,
            }}
          />
          <MiniCard
            cardData={{
              isPercent: false,
              cardHeader: "24H Value (USD)",
              title: "Listed Cryptos",
              value: CardData.data.maxSupply,
            }}
          />
        </>
      ) : null}
    </div>
  );
};

export default Cards;
