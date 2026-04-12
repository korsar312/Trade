import type { TModel } from "../../../../../CreateComponent.tsx";
import type { TComponent } from "../index.tsx";
import type { TComponent as IProp } from "../../../../3.Substances/SubstanceDescMap";
import type { TComponent as IText } from "../../../../0.Cores/Text";
import type { TMoleculeRowControlCompType } from "../../../../2.Molecules/MoleculeRowControl";

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
				key: {
					compRow: [
						{ id: "icon", type: "ICON", options: { img: "Person", color: "BLUE_3" } },
						keyPublic({ text: "YOUR_PROFILE" }),
					],
				},
			},
			{
				id: "2",
				key: { compRow: [keyPublic({ text: "NAME" })] },
				value: { compRow: [textProp({ text: name })] },
			},
			{
				id: "3",
				key: { compRow: [keyPublic({ text: "LOGIN" })] },
				value: { compRow: [textProp({ text: login })] },
			},
			{
				id: "4",
				key: { compRow: [keyPublic({ text: "RATING" })] },
				value: {
					compRow:
						rating == null
							? [textProp({ text: "NO_RATING" })]
							: Array.from(Array(5), (_el, i) => ({
									id: String(i),
									type: "ICON",
									options: { img: "Star", color: rating > i ? "BLUE_2" : "MAIN_2" },
								})),
				},
			},
			{
				id: "5",
				key: { compRow: [keyPublic({ text: "CREATED" })] },
				value: {
					compRow: [
						createdTime ? textProp({ text: new Date(createdTime).toDateString() }) : { id: "0", type: "LOAD", options: {} },
					],
				},
			},
		],
		noCompact: true,
	};

	function keyPublic(edit: IText): TMoleculeRowControlCompType {
		return { id: "0", type: "TEXT", options: { color: "SECOND_2", ...edit } };
	}

	function textProp(edit: IText): TMoleculeRowControlCompType {
		return { id: "0", type: "TEXT", options: { pos: "left", ...edit } };
	}

	return { descProps };
}

export default Model;
