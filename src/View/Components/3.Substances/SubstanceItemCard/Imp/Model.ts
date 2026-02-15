import type { TModel } from "../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import type { MouseEvent } from "react";

function Model({ Props }: TModel<TComponent>) {
	const { image, name, btn, click } = Props;

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
