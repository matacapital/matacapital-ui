import React from "react";
import { Container } from "../../../mod.ts";
import { Text } from "../../../mod.ts";
import { BaseDialogHeaderPropsType } from "./types.ts";
import { MouseEvent } from "react";

export const BaseDialogHeader = ({
  children,
  className,
  variant = "base1",
  toggleModal,
  onCancel,
  isCancellable = true,
}: BaseDialogHeaderPropsType) => {
  className = className ?? "";
  className +=
    " flex justify-between gap-2 md:gap-4 p-4 rounded-t-2 md:rounded-t-2";
  className = className.trim();

  const buttonClassName =
    "w-4 md:w-6 p-none md:p-[.25rem] outline-none focus:outline-none";

  const onClickHandler = (event: MouseEvent) => {
    onCancel && onCancel(event);
    toggleModal && toggleModal();
  };

  return (
    <Container
      className={className}
      element={"header"}
      background={{ variant }}
    >
      <Text
        element={"h4"}
        size={"xl"}
      >
        {children}
      </Text>
      {isCancellable ? (
        <button
          className={buttonClassName}
          onClick={onClickHandler}
        >
          <svg
            className={"w-full h-auto stroke-primary-content"}
            viewBox="0 0 50 50"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="0"
              y1="50"
              x2="50"
              y2="0"
              strokeWidth={"4"}
            />
            <line
              x1="0"
              y1="0"
              x2="50"
              y2="50"
              strokeWidth={"4"}
            />
          </svg>
        </button>
      ) : null}
    </Container>
  );
};
