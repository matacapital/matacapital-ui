import { ButtonContentType } from "../types.ts";


type ButtonType = {
  isOpened?: boolean;
  toggleModal?: () => void;
};

export type OneButtonType = ButtonType & {
  primaryButton: ButtonContentType;
};

export type TwoButtonType = ButtonType & {
  primaryButton: ButtonContentType;
  secondaryButton: ButtonContentType;
};

export type ThreeButtonType = ButtonType & {
  primaryButton: ButtonContentType;
  secondaryButton: ButtonContentType;
  neutralButton: ButtonContentType;
};
