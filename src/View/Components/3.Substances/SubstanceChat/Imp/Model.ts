import type { TModel } from "../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useState } from "react";

function Model({ Props }: TModel<TComponent>) {
	const { sendFn, ...rest } = Props;

	const [textSend, setTextSend] = useState("");

	function sendText() {
		sendFn?.(textSend);
	}

	return { sendText, setTextSend, ...rest };
}

export default Model;
