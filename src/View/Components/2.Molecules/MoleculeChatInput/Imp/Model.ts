import type { TModel } from "../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useState } from "react";

function Model({ Props }: TModel<TComponent>) {
	const { sendFn, input, btn } = Props;

	const [text, setText] = useState("");

	const isEmptyText = !text;

	function sendText() {
		sendFn?.(text);
		setText("");
	}

	return { text, sendText, setText, isEmptyText, input, btn };
}

export default Model;
