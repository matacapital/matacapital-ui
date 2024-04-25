"use client";

import React from "react";
import { Container } from "../../../../components/server/Container/Container";
import { OneButton, TwoButtons } from "./FooterWithButtons/mod.ts";
import { BaseDialogFooterPropsType } from "./types.ts";

export const BaseDialogFooter = ({
  buttonsContent = [],
  className,
  variant = "base1",
  toggleModal,
}: BaseDialogFooterPropsType) => {
  className += (className ? " " : "") + "px-4 py-2 rounded-b-2 md:rounded-b-4";
  className = (className as string).trim();

  let content = <div />;

  if ("length" in buttonsContent) {
    if (buttonsContent.length > 3) {
      throw new Error("To much button for modal (3 max)");
    }

    switch (buttonsContent.length) {
      case 1: {
        content = (
          <OneButton
            primaryButton={buttonsContent.at(0)!}
            toggleModal={toggleModal}
          />
        );
        break;
      }
      case 2: {
        const [btn1, btn2] = buttonsContent;
        content = (
          <>
            <TwoButtons
              primaryButton={btn1!}
              secondaryButton={btn2!}
              toggleModal={toggleModal}
            />
          </>
        );
      }
    }
  } else {
    content = (
      <OneButton
        primaryButton={buttonsContent}
        toggleModal={toggleModal}
      />
    );
  }

  return (
    <Container
      className={className}
      element={"footer"}
      background={{ variant }}
    >
      {content}
    </Container>
  );
};
