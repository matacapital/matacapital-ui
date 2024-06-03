import { IconArrowRight } from "../../..";
import {
  Button,
  Input,
  BaseDialog,
  Validator,
  Container,
  Paragraph,
  Text,
  List,
  ListItem,
} from "../../../dist";
import React, { FormEvent, useRef, useState } from "react";

type FormPropsType = {
  platformTitle: string;
};

type EmailType = {
  value: string;
  isValid: boolean;
};

export const EmailForm = ({ platformTitle }: FormPropsType) => {
  const [email, setEmail] = useState<EmailType>({ value: "", isValid: true });
  const [dialogContent, setDialogContent] = useState("");
  const form = useRef(null);
  const dialog = useRef(null);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (form.current && dialog.current) {
      if (Validator.isEmail(email.value)) {
        setDialogContent(
          `Votre compte (avec l'adresse email ${email.value.trim()}) a été enregistré. Vous pouvez désormais accéder à l'ensemble de nos services disponibles sur cette plateforme.`,
        );
        (dialog.current as HTMLDialogElement).showModal();
      } else {
        setEmail({ value: email.value, isValid: false });
      }
    }
  };

  const closeDialogHandler = () => {
    if (dialog.current) {
      (dialog.current as HTMLDialogElement).close();
    }
  };

  return (
    <Container
      element={"section"}
      className={"relative w-[600px]"}
    >
      <Container>
        <Text
          element={"h1"}
          className={"text-xl font-bold text-primary-default text-center"}
        >
          Bienvenue sur la plateforme {platformTitle}
        </Text>
        <Paragraph className={"py-6"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          reprehenderit ea eligendi commodi. Optio voluptates nobis temporibus,
          unde possimus aspernatur.
        </Paragraph>
        <form
          ref={form}
          onSubmit={onSubmit}
          className={
            "w-[60%] m-auto flex flex-col p-6 border border-neutral-default rounded-lg"
          }
        >
          <Input
            name={"email"}
            type={"email"}
            value={email.value}
            label={"Email :"}
            classNameInput={"w-full border-2 h-10 px-2 outline-none"}
            className={""}
            containerClassName={""}
            feedbackMessageClassName={"text-danger-default"}
            feedbackMessage={
              email.isValid
                ? ""
                : email.value
                  ? "Votre adresse email est incorrecte"
                  : "Veuillez renseigner votre email"
            }
            iconTextClassName={""}
            labelClassName={"pb-2"}
            helpTextClassName={""}
            state={"default"}
            onChange={(event) =>
              setEmail({ value: event.target.value, isValid: true })
            }
          />
          <Button
            type={"submit"}
            trailingIcon={<IconArrowRight />}
            children={"commencer"}
            className={"w-full pt-4"}
            variant={Validator.isEmail(email.value) ? "primary" : "neutral"}
          />
        </form>
        <Paragraph className={"py-6"}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
          reprehenderit ea eligendi commodi. Optio voluptates nobis temporibus,
          unde possimus aspernatur :
          <List className={"py-2 px-4"}>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
          </List>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
          placeat, minima laudantium enim voluptates, totam eaque perspiciatis
          reprehenderit eveniet odit non deserunt similique! Expedita similique
          iure ipsum est facilis fuga assumenda quidem optio illo commodi?
          Repellat hic nihil, nam veniam omnis cupiditate inventore vero, natus
          quos, quaerat quae at dicta!
        </Paragraph>
      </Container>
      <BaseDialog
        ref={dialog}
        title={"Compte validé"}
        children={dialogContent}
        close={closeDialogHandler}
        buttonsContent={[{ text: "fermer" }, { text: "ok " }]}
        footerClassName={"border-t border-neutral-default"}
      />
    </Container>
  );
};
