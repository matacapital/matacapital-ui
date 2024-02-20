
import { ChangeEvent, FocusEvent, KeyboardEvent, MouseEvent, useState } from "react";
import { NBSP_STRING, STATE_COLORS } from "./constants.ts";
import { InputPropsType } from "./types.ts";
import { Container } from "../../server/Container/mod.ts";
import { Text } from "../../server/Text/mod.ts";
export const Input = (
  {
    name,
    state = "default",
    value = "",
    feedbackMessage = "",
    inputMode = "text",
    maxLength = undefined,
    label,
    placeholder,
    className = "",
    type = "text",
    onFocus,
    onBlur,
    onInput,
    onChange,
    onKeyDown,
    onKeyUp,
    onClick,
    leadingIcon,
    trailingIcon,
    leadingText,
    trailingText,
    helpText,
    isDisabled = false,
    isFocus = false,
    isSelectedOnClick = false,
  }: InputPropsType,
) => {
  const [signalFocus,setIsSignalFocus] = useState(isFocus);

  const labelClassName = "text-base1-content pb-2 pt-3 block";
  const feedbackMessageClassName = "text-left text-danger-default flex-auto";
  const iconTextClassName = "px-4";
  const helpTextClassName =
    "text-right underline pt-2 flex-auto text-base4-default";

  let containerClassName =
    "flex flex-row w-full pr-2 rounded-l-2 rounded-r-2 h-12 items-center"; //
  let bgColor = "";
  let contentColor = "";
  let styleWebkit = {};

  if (isDisabled !== undefined && isDisabled == true) {
    //TODO text-fill depending on theme
    //styleWebkit = {{"-webkit-text-fill-color":"#FFF","opacity":"1"}};
    bgColor = "bg-disabled-default";
    contentColor = "text-disabled-content";
  } else {
    bgColor = "bg-base1-default";
    contentColor ="text-base1-content";
  }

  let ringColor = `ring-${STATE_COLORS[state]}-default`;
  let borderColor = `border-${STATE_COLORS[state]}-default`;

  if (
    state == "default" && value != "" && !isDisabled
  ) {
    borderColor = "border-base1-content";
    ringColor = "ring-base1-content";
  }

  containerClassName += " border-2 " + bgColor + " " + borderColor +
    " " + ringColor +
    " " + contentColor + " " +
    (signalFocus ? "ring-2" : "ring-none");

  let classNameInput = `outline-none w-full focus:outline-none flex-1${
    leadingIcon || leadingText ? "" : " pl-2"
  }`;
  classNameInput += " " + bgColor + " " + borderColor + " " + contentColor;

  const onBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
    setIsSignalFocus(false);
    onBlur && onBlur(event);
  };

  const onFocusHandler = (event: FocusEvent<HTMLInputElement>) => {
    setIsSignalFocus(true)
    onFocus && onFocus(event);
  };

  className += " group font-primary-light";
  className.trim();

  const onInputHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    value = event.currentTarget.value;
    onInput && onInput(event);
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    value = event.currentTarget.value;
    onChange && onChange(event);
  };

  const onKeyUpHandler = (
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    value = event.currentTarget.value;
    onKeyUp && onKeyUp(event);
  };

  const onKeyDownHandler = (
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    value = event.currentTarget.value;
    onKeyDown && onKeyDown(event);
  };

  const onClickHandler = (event: MouseEvent<HTMLInputElement>) => {
    onClick && onClick(event);
    isSelectedOnClick ? event.currentTarget.select() : null;
  };

  return (
    <Container element="label" className={className ?? ""}>
      <Container className={labelClassName}>
        {label}
      </Container>
      <Container className={containerClassName}>
        {leadingIcon
          ? (
            <Container
              element="span"
              className={iconTextClassName}
            >
              {leadingIcon}
            </Container>
          )
          : null}
        {leadingText
          ? (
            <Container
              element="span"
              className={iconTextClassName}
            >
              {leadingText}
            </Container>
          )
          : null}
        <input
          name={name}
          inputMode={inputMode}
          type={type}
          maxLength={maxLength}
          placeholder={placeholder}
          onFocus={onFocusHandler}
          onBlur={onBlurHandler}
          onInput={onInputHandler}
          onKeyDown={onKeyDownHandler}
          onKeyUp={onKeyUpHandler}
          onClick={onClickHandler}
          onChange={onChangeHandler}
          className={classNameInput}
          value={value}
          autoFocus={isFocus}
          disabled={isDisabled}
          style={styleWebkit}
        />
        {trailingText
          ? (
            <Container
              element="span"
              className={iconTextClassName}
            >
              {trailingText}
            </Container>
          )
          : null}
        {trailingIcon
          ? (
            <Container
              element="span"
              className={iconTextClassName}
            >
              {trailingIcon}
            </Container>
          )
          : null}
      </Container>
      <Container className="flex flex-row w-full">
        {feedbackMessage !== ""
          ? (
            <Text
              size={"s"}
              className={feedbackMessageClassName}
              element="div"
            >
              {feedbackMessage}
            </Text>
          )
          : NBSP_STRING}
        {helpText
          ? (
            <Container
              className={helpTextClassName}
              element="div"
            >
              {helpText}
            </Container>
          )
          : null}
      </Container>
    </Container>
  );
};
