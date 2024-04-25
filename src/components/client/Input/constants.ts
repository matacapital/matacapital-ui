import { StateColor, StateType } from "./types.ts";

export const STATE_COLORS: Record<StateType, StateColor> = {
  error: "danger",
  success: "success",
  warning: "warning",
  default: "base3",
};

export const NBSP_STRING = "\u00A0";

export const BROWSER_RESET_STYLE =
  "appearance:none; -webkit-appearance: none; -moz-appearance: none;";

export const DROPDOWN_ARROW_STYLE = `background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>');background-size: 0.6rem; background-position: right center; background-repeat: no-repeat;`;
