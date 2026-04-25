import type { TModel } from "../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useRef, useState } from "react";

const initText = "";

function Model({ Props }: TModel<TComponent>) {
	const { sendFn, input, btn, ref } = Props;

	const [text, setText] = useState(initText);
	const [isLoad, setIsLoad] = useState(false);

	const areaRef = ref ?? useRef<HTMLTextAreaElement>(null);

	const isEmptyText = !text.trim();

	function sendText() {
		setIsLoad(true);
		sendFn?.(text).finally(() => setIsLoad(false));

		if (!areaRef.current) return;

		areaRef.current.focus();
		areaRef.current.value = initText;
	}

	return { text, sendText, setText, isLoad, isEmptyText, input, btn, areaRef };
}

export default Model;
