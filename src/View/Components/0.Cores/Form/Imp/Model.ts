import type { IComponent } from "../index";
import type { FormEvent } from "react";

function Model(props: IComponent) {
	const { onSubmit, children } = props;

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (!onSubmit) return;

		const formData = new FormData(event.currentTarget);
		const data: Record<string, unknown> = {};

		formData.forEach((value, key) => (data[key] = value));

		onSubmit(data);
	}

	return { handleSubmit, children };
}

export default Model;
