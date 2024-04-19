import { Button, Input } from "../../..";
import React, { FormEvent, useRef, useState, useReducer } from "react";

type FormPropsType = {
	firstname: string;
	lastname: string;
};

type ActionType = {
	type: "firstname" | "lastname";
	payload: string;
};

export const Form = ({ firstname, lastname }: FormPropsType) => {
	const createInitialState = (state: FormPropsType) => state;
	const reducer = (state: FormPropsType, action: ActionType) => {
		switch (action.type) {
			case "firstname": {
				return { ...state, firstname: action.payload };
			}

			default: {
				return { ...state, lastname: action.payload };
			}
		}
	};

	const [state, dispatch] = useReducer(
		reducer,
		{
			firstname: "",
			lastname: "",
		},
		createInitialState,
	);

	const [isFnValid, setIsFnValid] = useState(true);
	const [isLnValid, setIsLnValid] = useState(true);
	const setMsg = (str: TemplateStringsArray) => `Veuillez renseigner votre ${str.at(0)}.`
	const form = useRef(null);

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (form.current) {
			let result = "", formValidFieldsCount = 0;
			const formLength = (form.current as HTMLFormElement).children.length - 1;

			for (const [name, value] of new FormData(form.current)) {
				switch (name) {
					case "firstname": {
						value ? formValidFieldsCount++ : null;
						setIsFnValid(!!value);
						break;
					}
					
					case "lastname": {
						value ? formValidFieldsCount++ : null;
						setIsLnValid(!!value);
						break;
					}
				}

        result += value + " ";
			}

      if (formValidFieldsCount === formLength) {
        alert(`Hello ${result.trim()}`)
      }
		}
	};

	return (
		<form
			ref={form}
			onSubmit={onSubmit}
			className={"flex flex-col p-4 border border-primary"}
		>
			<Input
				name={"firstname"}
				type={"text"}
				value={state.firstname}
				label={firstname}
				classNameInput={"border-2 h-10 px-2 outline-none"}
				className={""}
				containerClassName={""}
				feedbackMessageClassName={""}
				feedbackMessage={isFnValid ? "" : setMsg`Prénom`}
				iconTextClassName={""}
				labelClassName={"pb-2"}
				helpTextClassName={""}
				state={"default"}
				onChange={(event) =>
					dispatch({ type: "firstname", payload: event.target.value })
				}
			/>
			<Input
				name={"lastname"}
				type={"text"}
				value={state.lastname}
				label={lastname}
				classNameInput={"border-2 h-10 px-2 outline-none"}
				className={""}
				containerClassName={""}
				feedbackMessageClassName={""}
				feedbackMessage={isLnValid ? "" : setMsg`Nom`}
				iconTextClassName={""}
				labelClassName={"pb-2"}
				helpTextClassName={""}
				state={"default"}
				onChange={(event) =>
					dispatch({ type: "lastname", payload: event.target.value })
				}
			/>
			<Button
				type={"submit"}
				children={"soumettre"}
				className={"w-full"}
			/>
		</form>
	);
};
