import { type FC } from "react";
import Substance, { type IComponent as IProp } from "../../../Components/3.Substances/SubstanceDescMap";
import { observer } from "mobx-react";
import type { IComponent as IText } from "../../../Components/0.Cores/Text";
import { Act } from "../../../../Logic/Core";
import Util from "../../../../Logic/Libs/Util";
import type { TMoleculeRowControlCompType } from "../../2.Molecules/MoleculeRowControl";

export interface IComponent {
	itemId: string;
}

const Index: FC<IComponent> = (props) => {
	const { itemId } = props;

	const name = Act.Catalogue.getName(itemId);
	const bank = Act.Catalogue.getBank(itemId);
	const price = Act.Catalogue.getPrice(itemId);
	const rating = Act.Catalogue.getRating(itemId);
	const seller = Act.Catalogue.getSellerName(itemId);
	const desc = Act.Catalogue.getDesc(itemId);

	const priceForm = Util.toMoney(price);

	const propsComponent: IProp = {
		rows: [
			{
				id: "1",
				key: { text: "Название" },
				value: {
					compRow: [{ id: "1", type: "TEXT", options: textProp(name) }],
				},
			},
			{
				id: "2",
				key: { text: "Банк" },
				value: {
					compRow: [{ id: "1", type: "TEXT", options: textProp(bank) }],
				},
			},
			{
				id: "3",
				key: { text: "Цена" },
				value: {
					compRow: [{ id: "1", type: "TEXT", options: textProp(priceForm) }],
				},
			},
			{
				id: "4",
				key: { text: "Рейтинг" },
				value: {
					compRow: starProp(rating),
				},
			},
			{
				id: "5",
				key: { text: "Продавец" },
				value: {
					compRow: [{ id: "1", type: "TEXT", options: textProp(seller) }],
				},
			},
			{
				id: "6",
				type: "vert",
				key: { text: "Описание" },
				value: {
					compRow: [{ id: "1", type: "TEXT", options: textProp(desc) }],
				},
			},
		],
	};

	function textProp(text: string): IText {
		return { text, pos: "left" };
	}

	function starProp(rating: number): TMoleculeRowControlCompType[] {
		return Array.from(Array(5), (_el, i) => ({
			id: String(i),
			type: "ICON",
			options: { img: "Star", color: rating > i ? "BLUE_2" : "MAIN_4" },
		}));
	}

	return <Substance {...propsComponent} />;
};

export default observer(Index);
