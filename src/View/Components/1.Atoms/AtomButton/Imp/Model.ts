import type { IComponent, TAtomButtonGeneralGroup } from "../index";
import type { StyleInterface } from "../../../../../Logic/Core/Services/ServiceStyle/Style.interface.ts";
import type { IComponent as IImage } from "../../../0.Cores/Image";
import type { IComponent as IText } from "../../../0.Cores//Text";
import type { MouseEvent } from "react";

function Model(props: IComponent) {
	const { textVars, color, extStyles, icons, isFullWidth, isFullHeight, click, type = "button", isDisable } = props;

	const leftIcon = spread(icons?.["left"], changeImage);
	const rightIcon = spread(icons?.["right"], changeImage);

	const textChanged = spread(textVars, changeText);

	function spread<T>(val?: TAtomButtonGeneralGroup<T>, changeFn?: (v: T) => T): TAtomButtonGeneralGroup<T> | undefined {
		return val && { ...val, value: val.value.map((el) => changeFn?.(el) || el) };
	}

	function changeImage(icon: IImage): IImage {
		return { ...icon, color: icon.color || getColorImage() };
	}

	function changeText(text: IText): IText {
		return { ...text, color: text.color || getColorText() };
	}

	function getColorImage(): StyleInterface.EColor {
		switch (color) {
			case "BLUE_1":
				return "BLUE_2";
		}

		return getColorText();
	}

	function getColorText(): StyleInterface.EColor {
		switch (color) {
			case "SECOND_1":
				return "MAIN_2";
			default:
				return "SECOND_1";
		}
	}

	function handleClick(e: MouseEvent<HTMLButtonElement>) {
		click?.(e);
	}

	return { textChanged, color, extStyles, leftIcon, rightIcon, isFullWidth, isFullHeight, handleClick, type, isDisable };
}

export default Model;
