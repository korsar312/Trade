import type { TModel } from "../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useRef, useState } from "react";

function Model({ Props }: TModel<TComponent>) {
	const { sendFn, input, btn } = Props;

	const [text, setText] = useState("");
	const [isLoad, setIsLoad] = useState(false);

	const areaRef = useRef<HTMLTextAreaElement>(null);

	const isEmptyText = !text;

	function sendText() {
		setIsLoad(true);
		sendFn?.(text).finally(() => setIsLoad(false));

		setText("");
		if (!areaRef.current) return;

		areaRef.current.focus();
		areaRef.current.value = "";
	}

	return { text, sendText, setText, isLoad, isEmptyText, input, btn, areaRef };
}

export default Model;
