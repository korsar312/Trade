import type { IComponent, TAtomInputGeneralGroup, TAtomInputIcon, TAtomInputText, TAtomInputTextPick } from "../index";
import { type ChangeEvent, useState } from "react";
import { Act } from "../../../../../Logic/Core";
import type { MessageInterface } from "../../../../../Logic/Core/Services/ServiceMessage/Message.interface.ts";
import type { StyleInterface } from "../../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";
import type { IComponent as IImage } from "../../../0.Cores/Image";

function Model(props: IComponent) {
	const { initText, onClick, onChange, name, type, iconsLeft, iconsRight, disabled, placeholder, valid } = props;

	const [isValid, setIsValid] = useState<boolean | undefined>();

	const textObj = changePlace(initText, "MAIN_4");
	const placeObj = changePlace(placeholder, "MAIN_4");

	const isTextExist = Boolean(textObj?.text?.toString().length);
	const text = Act.Message.getWord(textObj?.text);

	const imageLeft = changeImage(iconsLeft);
	const imageRight = changeImage(iconsRight);

	function changePlace(text: TAtomInputTextPick | MessageInterface.EWordAll, colorValid: StyleInterface.EColor): TAtomInputText {
		const props: TAtomInputTextPick = typeof text === "object" ? text : { text };
		return { ...props, color: props.color || isValid === false ? "RED_1" : colorValid, font: props.font || "BlockLead" };
	}

	function changeImage(img: TAtomInputIcon): TAtomInputGeneralGroup | undefined {
		if (typeof img === "undefined") return undefined;

		const props: TAtomInputGeneralGroup = typeof img === "object" ? img : { value: [{ img }] };
		const imgArr: IImage[] = props.value.map((el) => ({
			...el,
			color: el.color || isValid === false ? "RED_1" : isValid ? "MAIN_4" : "MAIN_3",
			size: el.size || 24,
		}));

		return { ...props, value: [...imgArr] };
	}

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const newValue = e.currentTarget.value;
		onChange?.(newValue);
	}

	function onValid(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.target.value;

		const isValidEx = Boolean(value?.length);

		if (isValidEx) return setIsValid(valid?.some((el) => el(value)));
		setIsValid(undefined);
	}

	return { textObj, onClick, handleChange, text, name, type, imageLeft, imageRight, isTextExist, disabled, placeObj, isValid, onValid };
}

export default Model;
