import { ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent } from "react";
import { ChildrenComponents } from "../../server-deps";


export type StateType = "default" | "error" | "success" | "warning";

export type StateColor = "base3" | "base1" | "danger" | "success" | "warning";

export type ContentType = {
  label: string;
  value: string | number | boolean | null;
};

export type InputModeType =
  | "none"
  | "text"
  | "decimal"
  | "numeric"
  | "tel"
  | "search"
  | "email"
  | "url";

export type InputType =
  | "button"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "radio"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

export type InputCommonPropsType<E extends EventTarget> = {
  name?: string;
  value?: string;
  state?: StateType;
  className?: string;
  feedbackMessage?: string;
  helpText?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isFocus?: boolean;
  onFocus?: (event: FocusEvent<E>) => void;
  onBlur?: (event: FocusEvent<E>) => void;
  onChange?: (event: ChangeEvent<E>) => void;
  onClick?: (event: MouseEvent<E>) => void;
  lastCheckedAt?: number;
};

export type InputPropsType =
  & InputCommonPropsType<HTMLInputElement>
  & {
    label: string;
    placeholder?: string;
    type?: InputType;
    inputMode?: InputModeType;
    leadingIcon?: ChildrenComponents;
    trailingIcon?: ChildrenComponents;
    leadingText?: string;
    trailingText?: string;
    isSelectedOnClick?: boolean;
    maxLength?: number | undefined;
    //TODO: improve typing on events
    onInput?: (event: KeyboardEvent<HTMLInputElement>) => void;
    onKeyUp?: (
      event: KeyboardEvent<HTMLInputElement>,
    ) => void;
    onKeyDown?: (
      event: KeyboardEvent<HTMLInputElement>,
    ) => void;
  };

export type InputRadioPropsType =
  & InputCommonPropsType<HTMLInputElement>
  & {
    legend: string;
    direction?: "row" | "column";
    hidden?: boolean;
    fields: ContentType[];
  };

export type InputCheckBoxInlinePropsType =
  & InputCommonPropsType<HTMLInputElement>
  & {
    id: string;
    fields: ContentType[];
  };

export type InputSelectPropsType =
  & InputCommonPropsType<HTMLSelectElement>
  & {
    label: string;
    placeholder: string;
    fields: ContentType[];
  };

export type InputNumberPropsType =
  & InputPropsType
  & {
    min: number | string;
    max: number | string;
  };

  export type InputFormPropsType =
  & Omit<
    InputPropsType,
    | "leadingIcon"
    | "leadingText"
    | "trailingIcon"
    | "trailingText"
    | "label"
    | "type"
    | "feedbackMessage"
    | "inputMode"
    | "selectOnClick"
    | "signalValue"
    | "signalFeedbackMessage"
    | "signalState"
  >
  & {
    id?: string;
    value?: string;
    feedbackMessage?: string;
    state?: StateType;
    question?: Record<string, unknown>;
    response?: Record<string, unknown>;
    onError?: (id: string, value: string) => void;
    onWarning?: (id: string, value: string) => void;
    onSuccess?: (id: string, value: string) => void;
    lastCheckedAt?: number;
  };

export type InputFormTypeRadioType =
  & InputRadioPropsType
  & Pick<
    InputFormPropsType,
    "id" | "state" | "value" | "onError" | "onSuccess"
  >;

export type InputFormTypeSelectType =
  & InputSelectPropsType
  & Pick<
    InputFormPropsType,
    "id" | "state" | "value" | "onError" | "onSuccess"
  >;

export type InputFormTypeAllType<T> =
  & Pick<
    InputFormPropsType,
    "value" | "onError" | "onSuccess" | "lastCheckedAt"
  >
  & T;