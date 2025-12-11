import type { IComponent } from "../index";
import type { MouseEvent } from "react";

function Model(props: IComponent) {
	const { image, name, btn, click } = props;

	const btnList = btn.map((el) => ({ ...el, click: handleClick(el.click) }));

	function handleClick(fn?: (e: MouseEvent<HTMLButtonElement>) => void) {
		return (e: MouseEvent<HTMLButtonElement>) => {
			e.stopPropagation();
			fn?.(e);
		};
	}

	return { image, name, btnList, click };
}

export default Model;
