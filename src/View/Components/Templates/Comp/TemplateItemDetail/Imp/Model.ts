import type { TModel } from "../../../../../CreateComponent.tsx";
import type { TComponent } from "../index.tsx";
import type { TComponent as IDesc, TSubstanceDescMapRow } from "../../../../3.Substances/SubstanceDescMap";
import type { TComponent as IControl, TMoleculeRowControlCompType } from "../../../../2.Molecules/MoleculeRowControl";
import type { TComponent as IText } from "../../../../0.Cores/Text";

function Model({ Props, Act }: TModel<TComponent>) {
	const { itemId } = Props;

	const entries = Act.Item.getEntries(itemId);
	const type = Act.Item.getType(itemId);

	const rowProps: IDesc = {
		rows: [
			{
				id: "0",
				key: {
					compRow: [
						{ id: "icon", type: "ICON", options: { color: "BLUE_3", img: "LockOpen" } },
						keyPublic({ text: "ITEM_DEAL" }),
					],
				},
			},
			{
				id: "type",
				key: { compRow: [keyPublic({ text: "TYPE" })] },
				value: { compRow: [textProp({ text: type })] },
			},
			...row(),
		],
	};

	function row(): TSubstanceDescMapRow[] {
		return entries.flatMap(([key, value]) => {
			const keyProp: IControl = { compRow: [keyPublic({ text: key })] };
			const valProp: IControl = { compRow: [textProp({ text: value })] };

			const main: TSubstanceDescMapRow = { id: key, key: keyProp, value: valProp };

			switch (key) {
				case "listingId":
				case "id":
					return [];

				case "desc":
					return { ...main, key: { wrapper: { pos: "center" }, ...keyProp }, type: "vert" };

				case "age":
					return { ...main, key: { compRow: [keyPublic({ text: "AGE" })] } };

				case "bank":
					return { ...main, key: { compRow: [keyPublic({ text: "BANK" })] } };

				case "name":
					return { ...main, key: { compRow: [keyPublic({ text: "NAME" })] } };
			}
		});
	}

	function keyPublic(edit: IText): TMoleculeRowControlCompType {
		return { id: "0", type: "TEXT", options: { color: "SECOND_2", ...edit } };
	}

	function textProp(edit: IText): TMoleculeRowControlCompType {
		return { id: "0", type: "TEXT", options: { pos: "left", ...edit } };
	}

	return { rowProps };
}

export default Model;
