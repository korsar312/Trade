import type { IComponent, TAtomTextareaText, TAtomTextareaTextPick } from "../index";
import { useState } from "react";
import { Act } from "../../../../../Logic/Core";
import type { MessageInterface } from "../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { StyleInterface } from "../../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

function Model(props: IComponent) {
	const { color, initText, placeholder, onChange, valid, value, ...rest } = props;

	const [isValid, setIsValid] = useState<boolean | undefined>();

	const textObj = changePlace(initText, "SECOND_1", "BLUE_3", "RED_3");
	const placeObj = changePlace(placeholder, "SECOND_2", "BLUE_2", "RED_2");

	const text = Act.Message.getWord(textObj?.text);

	function changePlace(
		text: TAtomTextareaTextPick | MessageInterface.EWordAll,
		color: StyleInterface.EColor,
		colorValid: StyleInterface.EColor,
		colorNotValid: StyleInterface.EColor,
	): TAtomTextareaText {
		const props: TAtomTextareaTextPick = typeof text === "object" ? text : { text };
		return {
			...props,
			color: props.color || isValid === false ? colorNotValid : isValid ? colorValid : color,
			font: props.font || "BodyMain",
		};
	}

	function onValid(e: React.ChangeEvent<HTMLTextAreaElement>) {
		const value = e.target.value;
		onChange?.(value);

		const isValidEx = Boolean(value?.length);

		if (isValidEx) return setIsValid(valid?.some((el) => el(value)));
		setIsValid(undefined);
	}

	return { color, textObj, text, placeObj, isValid, onValid, value, rest };
}

export default Model;
