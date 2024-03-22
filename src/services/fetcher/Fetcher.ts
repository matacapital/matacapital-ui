import { ApiResponseDataType, FetcherParamaterType } from "../mod";

export class Fetcher {
	public static async getData(url: string, searchParams: string) {
		return await Fetcher.fetchData({ url, data: searchParams });
	}

	public static async postData(url: string, data = {}) {
		return await Fetcher.fetchData({ url, data, method: "POST" });
	}

	public static async putData(url: string, data = {}) {
		return await Fetcher.fetchData({ url, data, method: "PUT" });
	}

	public static async deleteData(url: string, data = {}) {
		return await Fetcher.fetchData({ url, data, method: "DELETE" });
	}

	private static async fetchData({
		url,
		data,
		method = "GET",
		contentType = "application/json",
	}: FetcherParamaterType): Promise<ApiResponseDataType> {
		const opts: RequestInit = {
			method,
			mode: "cors",
			cache: "no-cache",
			credentials: "same-origin",
			headers: {
				"Content-Type": contentType,
			},
			redirect: "follow",
			referrerPolicy: "no-referrer",
		};

		let response: Response;

		try {
			if (method === "GET" || method === "HEAD") {
				response = await fetch(url + "?" + new URLSearchParams(data), opts);
			} else {
				opts["body"] = JSON.stringify(data);
				response = await fetch(url, opts);
			}

			return response.ok
				? {
						code: response.status,
						data: await response.json(),
				  }
				: {
						code: response.status,
						message: response.statusText,
				  };
		} catch (_) {
			return {
				code: 500,
				message: "This api call failed.",
			};
		}
	}
}
