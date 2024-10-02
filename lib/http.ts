import { API_URL } from "@/constants";
import axios, { type AxiosPromise } from "axios";
import { toast } from "sonner"


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
  return Promise.reject(res?.msg);
})

export const Q = async <T>(
	axiosPromise: AxiosPromise,
): Promise<T> => {
	return new Promise<T>((resolve, reject) => {
		axiosPromise
			.then((response) => {
				return resolve(response as T);
			})
			.catch((error) => {
				if (!axios.isCancel(error)) {
					toast.error(getErrorMsg(error), {
						style: {
							color: 'red',
						}
					});
					reject(error);
				}
			});
	});
};

const getErrorMsg = (error: Error | string) => {
	if (typeof error === 'string') {
		return error
	}
	return error?.message
}
