import type { TModel } from "../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import { useState } from "react";

function Model({ Props }: TModel<TComponent>) {
	const { ...rest } = Props;

	const [textSend, setTextSend] = useState("");

	function sendText() {
		console.log(textSend);
	}

	return { sendText, setTextSend, ...rest };
}

export default Model;
