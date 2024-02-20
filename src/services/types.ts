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

export type SuccessResponseType<T extends Record<string, string> = {}> = {
  code: 200 | 201;
  data: T;
};

export type ErrorResponseType = {
  code: 400 | 401 | 403 | 404 | 500;
  message: string;
};

export type ApiResponseDataType<
  T extends (SuccessResponseType | ErrorResponseType)
> = T;
