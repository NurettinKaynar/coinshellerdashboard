import axios from "axios";
import { ApiUrl } from "../utils/apiUrl";

export const get = (url: string) => {
  return axios.get(ApiUrl.BASE_URL + "/" + url);
};
export const getById = (url: string, id: string) => {
  return axios.get(ApiUrl.BASE_URL + "/" + url + "/" + id);
};
export const getHistoryById = (url: string, id: string, params: object) => {
  return axios.get(
    ApiUrl.BASE_URL + "/" + ApiUrl.GET_ASSETS + "/" + id + "/" + url,
    {
      params: params,
    }
  );
};
