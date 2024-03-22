export type DateType =
  | number
  | `${number}-${number}-${number}`
  | undefined;

export type IntlParameterType = {
    date: DateType,
    locale: string,
    opts: Intl.DateTimeFormatOptions | undefined,
    joinWith?: string;
};

export type MethodType =
  | "GET"
  | "HEAD"
  | "POST"
  | "PUT"
  | "PATCH"
  | "DELETE";

export type FetcherParamaterType = {
  url: string;
  data: string | Record<string, string>;
  method?: MethodType;
  contentType?: string;
};

export type SuccessResponseType = {
	code: number;
	data: Record<string, string>;
};

export type ErrorResponseType = {
	code: number;
	message: string;
};

export type ApiResponseDataType = Prettify<
	SuccessResponseType | ErrorResponseType
>;

type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};