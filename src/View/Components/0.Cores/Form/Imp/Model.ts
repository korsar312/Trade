import type { TModel } from "../../../../CreateComponent.tsx";
import type { TComponent } from "../";
import type { FormEvent } from "react";

function Model({ Props }: TModel<TComponent>) {
	const { onSubmit, children, id, ref } = Props;

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
