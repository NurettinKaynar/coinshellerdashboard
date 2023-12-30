import axios from "axios";
import { ApiUrl } from "../utils/apiUrl";

export const get = () => {
  return axios.get(ApiUrl.BASE_URL);
};
export const getById = (id: string) => {
  return axios.get(ApiUrl.BASE_URL + "/" + id);
};
export const getHistoryById = (url: string, id: string) => {
  return axios.get(
    ApiUrl.BASE_URL + "/" + ApiUrl.GET_ASSET_BY_ID + id + "/" + url
  );
};
