import type { TModel } from "../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useEffect, useRef, useState } from "react";

const initText = "";

function Model({ Props }: TModel<TComponent>) {
	const { sendFn, input, btn, ref } = Props;

	const [text, setText] = useState(initText);
	const [isLoad, setIsLoad] = useState(false);

	const areaRef = ref ?? useRef<HTMLTextAreaElement>(null);

	const isEmptyText = !text.trim();

	useEffect(() => {
		if (!areaRef.current) return;
		const el = areaRef.current;

		el.addEventListener("keydown", handleEnter);

		return () => {
			el.removeEventListener("keydown", handleEnter);
		};
	}, [areaRef, sendFn, isLoad]);

	function handleEnter(e: KeyboardEvent) {
		if (e.key === "Enter" && !e.shiftKey && areaRef.current) {
			e.preventDefault();
			if (isLoad) return;

			const value = areaRef.current.value;
			if (!value.trim()) return;

			sendFn && Promise.resolve(sendFn(value));

			areaRef.current.value = initText;
			areaRef.current.focus();
		}
	}

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
