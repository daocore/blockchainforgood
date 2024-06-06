import { API_URL } from "@/constants";
import axios, { type AxiosPromise } from "axios";

const HTTP_STATUS = {
  OK: 200,
}

export const http = axios.create({
  baseURL: API_URL,
});

http.interceptors.response.use((response) => {
  const res = response.data;
  if (res.code === HTTP_STATUS.OK) {
    return res.data;
  }
  return Promise.reject(res?.message);
})

export const Q = async <T>(
	axiosPromise: AxiosPromise,
): Promise<T> => {
	return new Promise<T>((resolve, reject) => {
		axiosPromise
			.then((response) => {
				const result = response.data;
				
				if (result?.code === HTTP_STATUS.OK) {
					resolve(result.data);
				} else {
					reject(result.message);
				}
			})
			.catch((error) => {
				
				if (!axios.isCancel(error)) {
					reject(error);
				}
			});
	});
};
