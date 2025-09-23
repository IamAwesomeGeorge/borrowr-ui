import { envVars } from "../../env";
import axios from "axios";
import type { AxiosResponse, AxiosRequestConfig } from "axios";

export const apiUrl = envVars.apiBaseUrl;

const responseBody = <T>(response: AxiosResponse<T>) => {
  console.log("API Response:", response);
  return response.data as T;
};

export const request = {
  get: <T>(url: string, config?: AxiosRequestConfig) => {
    console.log(`GET Request to: ${apiUrl}${url} with config:`, config);
    return axios
      .get<T>(apiUrl + url, config)
      .then((response) => responseBody(response));
  },
};
