import type { TModel } from "../../../../../CreateComponent.tsx";
import type { TComponent } from "../index.tsx";
import type { TComponent as IProp } from "../../../../3.Substances/SubstanceDescMap";
import type { TComponent as IText } from "../../../../0.Cores/Text";

function Model({ Props, Act }: TModel<TComponent>) {
	const {} = Props;

	const name = Act.User.getName();
	const login = Act.User.getLogin();
	const rating = Act.User.getRating();
	const createdTime = Act.User.getCreatedTime();

	const descProps: IProp = {
		rows: [
			{
				id: "1",
				key: { text: "YOUR_PROFILE" },
			},
			{
				id: "2",
				key: { text: "NAME" },
				value: {
					compRow: [{ id: "1", type: "TEXT", options: textProp(name) }],
				},
			},
			{
				id: "3",
				key: { text: "LOGIN" },
				value: {
					compRow: [{ id: "1", type: "TEXT", options: textProp(login) }],
				},
			},
			{
				id: "4",
				key: { text: "RATING" },
				value: {
					compRow:
						rating == null
							? [{ id: "1", type: "TEXT", options: textProp("NO_RATING") }]
							: Array.from(Array(5), (_el, i) => ({
									id: String(i),
									type: "ICON",
									options: { img: "Star", color: rating > i ? "BLUE_2" : "MAIN_2" },
								})),
				},
			},
			{
				id: "5",
				key: { text: "CREATED" },
				value: {
					compRow: [
						createdTime
							? { id: "1", type: "TEXT", options: textProp(new Date(createdTime).toDateString()) }
							: { id: "1", type: "LOAD", options: {} },
					],
				},
			},
		],
		noCompact: true,
	};

	function textProp(text?: string): IText {
		return { text, pos: "left" };
	}

	return { descProps };
}

export default Model;
