import type { IComponent } from "../index";
import { Act } from "../../../../../Logic/Core";
import type { IComponent as IProp } from "../../../../Components/3.Substances/SubstanceDescMap";
import type { IComponent as IText } from "../../../0.Cores/Text";

function Model(props: IComponent) {
	const {} = props;

	const name = Act.User.getName();
	const login = Act.User.getLogin();
	const rating = Act.User.getRating();
	const createdTime = Act.User.getCreatedTime();

	const textProps: IText = {
		text: "YOUR_PROFILE",
	};

	const descProps: IProp = {
		rows: [
			{
				id: "1",
				key: { text: "NAME" },
				value: {
					compRow: [{ id: "1", type: "TEXT", options: textProp(name) }],
				},
			},
			{
				id: "2",
				key: { text: "LOGIN" },
				value: {
					compRow: [{ id: "1", type: "TEXT", options: textProp(login) }],
				},
			},
			{
				id: "3",
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
				id: "4",
				key: { text: "CREATED" },
				value: {
					compRow: [{ id: "1", type: "TEXT", options: textProp(new Date(createdTime).toDateString()) }],
				},
			},
		],
	};

	function textProp(text: string): IText {
		return { text, pos: "left" };
	}

	return { textProps, descProps };
}

export default Model;
