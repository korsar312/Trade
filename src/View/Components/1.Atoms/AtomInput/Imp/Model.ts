import type { IComponent, TAtomInputGeneralGroup, TAtomInputIcon, TAtomInputText, TAtomInputTextPick } from "../index";
import React, { useState } from "react";
import { Act } from "../../../../../Logic/Core";
import type { MessageInterface } from "../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { IComponent as IImage } from "../../../0.Cores/Image";
import type { StyleInterface } from "../../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";

function Model(props: IComponent) {
	const { color, initText, onClick, onChange, name, type, iconsLeft, iconsRight, disabled, placeholder, valid, value } = props;

	const [isValid, setIsValid] = useState<boolean | undefined>();

	const textObj = changePlace(initText, "SECOND_1", "BLUE_3", "RED_3");
	const placeObj = changePlace(placeholder, "SECOND_2", "BLUE_2", "RED_3");

	const text = Act.Message.getWord(textObj?.text);

	const imageLeft = changeImage(iconsLeft);
	const imageRight = changeImage(iconsRight);

	function changePlace(
		text: TAtomInputTextPick | MessageInterface.EWordAll,
		color: StyleInterface.EColor,
		colorValid: StyleInterface.EColor,
		colorNotValid: StyleInterface.EColor,
	): TAtomInputText {
		const props: TAtomInputTextPick = typeof text === "object" ? text : { text };
		return {
			...props,
			color: props.color || isValid === false ? colorNotValid : isValid ? colorValid : color,
			font: props.font || "BodyMain",
		};
	}

	function changeImage(img: TAtomInputIcon): TAtomInputGeneralGroup | undefined {
		if (typeof img === "undefined") return undefined;

		const props: TAtomInputGeneralGroup = typeof img === "object" ? img : { value: [{ img }] };
		const imgArr: IImage[] = props.value.map((el) => ({
			...el,
			color: el.color || isValid === false ? "RED_1" : isValid ? "BLUE_2" : "SECOND_2",
			size: el.size || 24,
		}));

		return { ...props, value: [...imgArr] };
	}

	function onValid(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;
		onChange?.(value);

		const invalid = valid?.map((el) => el(value)).find((el) => !el.isValid);

		e.currentTarget.setCustomValidity(invalid ? Act.Message.getWord(invalid.error) : "");
		setIsValid(valid?.length ? !invalid : undefined);
	}

	return { color, textObj, onClick, text, name, type, imageLeft, imageRight, disabled, placeObj, isValid, onValid, value };
}

export default Model;
