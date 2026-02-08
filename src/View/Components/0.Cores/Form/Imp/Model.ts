import type { IComponent } from "../index";
import type { FormEvent } from "react";

function Model(props: IComponent) {
	const { onSubmit, children, id, ref } = props;

	function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();

		if (!event.currentTarget.checkValidity()) return event.currentTarget.reportValidity();
		if (!onSubmit) return;

		const formData = new FormData(event.currentTarget);
		const data: Record<string, unknown> = {};

		formData.forEach((value, key) => (data[key] = value));

		onSubmit(data);
	}

	return { handleSubmit, children, id, ref };
}

export default Model;
